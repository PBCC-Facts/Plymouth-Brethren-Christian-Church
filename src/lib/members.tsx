import type { ReactNode } from "react";
import { Footnote, SourcePending } from "@/components/site/Footnote";
import { sources } from "@/lib/sources";

/**
 * Shape of a row on /people.
 *
 * Matches the columns of public.members (see the add_members_table
 * migration). `body` is structured rather than Markdown so we don't pull
 * in a Markdown renderer dep; citation tokens inside paragraph strings
 * are the only non-literal syntax.
 */
export type MemberCategory =
  | "leadership"
  | "historical"
  | "executive"
  | "public-figure";

export type MemberSection = {
  heading: string;
  paragraphs: string[];
  /** Optional bullet list rendered after the paragraphs. Same token syntax. */
  bullets?: string[];
};

/** FAQ entry rendered as FAQPage JSON-LD on the profile. Plain text only. */
export type MemberFaq = {
  question: string;
  answer: string;
};

/**
 * Headline pull-quote rendered above the profile body. Use the single most
 * damning, best-sourced statement by or about the person. Source ids must
 * resolve in src/lib/sources.ts; two+ independent sources for any statement
 * attributed verbatim to the subject.
 */
export type MemberPullQuote = {
  quote: string;
  attribution: string;
  /** Source ids backing the quote. Rendered as numbered footnotes beside the attribution. */
  sourceIds: string[];
};

export type Member = {
  slug: string;
  name: string;
  aliases?: string[];
  category: MemberCategory;
  /** Short current-role label. Null for historical figures. */
  currentRole?: string;
  /** 1–2 plain sentences. No citation tokens; this is the card/lede copy. */
  overview: string;
  /**
   * Optional SEO title override, e.g. "Who is Bruce D. Hales?". Used as the
   * <title> prefix and OG title instead of "Name. Role" when present.
   */
  seoTopic?: string;
  /** Optional FAQ entries; rendered as FAQPage JSON-LD (not visible copy). */
  faq?: MemberFaq[];
  /**
   * Optional portrait image path (e.g. "/images/members/bruce-d-hales.jpg").
   * When present, the <Artwork> pipeline renders this instead of the
   * category-glyph placeholder. Eventually sourced from licensed stock,
   * original photography, or AI-generated placeholders.
   */
  imageUrl?: string;
  /** Optional headline pull-quote. Rendered at the very top of the profile. */
  pullQuote?: MemberPullQuote;
  /** Full profile body. Paragraphs may contain [[cite:id]] or [[pending:note]] tokens. */
  body: MemberSection[];
  /** Why this person clears MEMBERS_POLICY.md. Rendered on the profile page. */
  inclusionBasis: string;
  /** Source ids (keys of src/lib/sources.ts) cited anywhere on the profile. */
  sourceIds: string[];
  relatedCaseIds?: string[];
  isPublished: boolean;
  isRoadmapOnly: boolean;
  /** ISO date (YYYY-MM-DD). Used on the page "last reviewed" stamp. */
  lastReviewedAt?: string;
  publishedAt?: string;
};

// ---------------------------------------------------------------------------
// Data access. v1 reads from src/data/members.seed.ts. When the /litigation
// route wires Supabase reads against public.cases, swap the imports here
// for a @supabase/supabase-js query against public.members. The function
// signatures and return shapes don't change.
// ---------------------------------------------------------------------------
import { members as seed } from "@/data/members.seed";

export function listPublishedMembers(): Member[] {
  return seed
    .filter((m) => m.isPublished && !m.isRoadmapOnly)
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function listRoadmapMembers(): Member[] {
  return seed
    .filter((m) => m.isRoadmapOnly)
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getMember(slug: string): Member | undefined {
  return seed.find((m) => m.slug === slug && m.isPublished && !m.isRoadmapOnly);
}

export function listPublishedSlugs(): string[] {
  return listPublishedMembers().map((m) => m.slug);
}

// ---------------------------------------------------------------------------
// Citation-token rendering. Paragraph text can contain two tokens:
//   [[cite:source-id]]  . renders <Footnote id="source-id" n={n} />
//   [[pending:note]]    . renders <SourcePending note="note" />
// Footnote ordinals are page-scoped and assigned in document order.
// Referenced source ids are validated up-front; a missing id fails the
// build loudly rather than rendering a broken link.
// ---------------------------------------------------------------------------

const TOKEN_RE = /\[\[(cite|pending):([^\]]+)\]\]/g;

/**
 * Walk every paragraph in a body and confirm each [[cite:id]] resolves in
 * the source registry. Call from the profile page so any unknown id trips
 * Next.js's build/render pipeline before it ever reaches a reader.
 */
export function assertCitationsResolve(member: Member): void {
  for (const section of member.body) {
    for (const paragraph of [...section.paragraphs, ...(section.bullets ?? [])]) {
      TOKEN_RE.lastIndex = 0;
      let match: RegExpExecArray | null;
      while ((match = TOKEN_RE.exec(paragraph)) !== null) {
        const [, kind, val] = match;
        if (kind === "cite" && !(val in sources)) {
          throw new Error(
            `Member profile "${member.slug}" cites unknown source id "${val}". ` +
              "Add it to src/lib/sources.ts or switch the claim to a [[pending:…]] marker.",
          );
        }
      }
    }
  }
  if (member.pullQuote) {
    for (const id of member.pullQuote.sourceIds) {
      if (!(id in sources)) {
        throw new Error(
          `Member profile "${member.slug}" pull-quote cites unknown source id "${id}". ` +
            "Add it to src/lib/sources.ts.",
        );
      }
    }
  }
}

export type RenderedParagraph = ReactNode[];

/**
 * Counter that threads the ordinal across every paragraph in a profile
 * so footnote numbers run sequentially down the page.
 */
export type FootnoteCounter = { next: number };

export function makeFootnoteCounter(): FootnoteCounter {
  return { next: 1 };
}

/**
 * Render one paragraph string into JSX nodes, interleaving plain text with
 * <Footnote>/<SourcePending> as it encounters tokens.
 */
export function renderParagraph(
  text: string,
  counter: FootnoteCounter,
): RenderedParagraph {
  const out: ReactNode[] = [];
  TOKEN_RE.lastIndex = 0;

  let cursor = 0;
  let match: RegExpExecArray | null;
  let keyBase = 0;

  while ((match = TOKEN_RE.exec(text)) !== null) {
    if (match.index > cursor) {
      out.push(text.slice(cursor, match.index));
    }
    const [, kind, val] = match;
    keyBase += 1;
    if (kind === "cite") {
      const n = counter.next;
      counter.next += 1;
      out.push(<Footnote key={`c-${n}-${keyBase}`} id={val} n={n} />);
    } else {
      out.push(
        <SourcePending key={`p-${keyBase}-${match.index}`} note={val} />,
      );
    }
    cursor = TOKEN_RE.lastIndex;
  }
  if (cursor < text.length) {
    out.push(text.slice(cursor));
  }
  return out;
}
