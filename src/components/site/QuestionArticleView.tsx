import Link from "next/link";
import type { ReactNode } from "react";
import { Footnote, SourcePending } from "@/components/site/Footnote";
import { sources as globalSources, type Source } from "@/lib/sources";
import type { QuestionArticle } from "@/data/questions/types";

/**
 * Renderer for the question library (docs/QUESTIONS_SPEC.md). Parses the
 * three inline markers ({{cite:id}}, {{pending:note}}, [[/path|text]]) and
 * turns them into Footnote / SourcePending / Link. Footnote numbering is
 * page-scoped by first occurrence; repeated cites reuse their number.
 */

const TOKEN =
  /(\{\{cite:[a-z0-9-]+\}\}|\{\{pending:[^}]*\}\}|\[\[[^\]|]+\|[^\]]+\]\])/g;

function resolveSource(article: QuestionArticle, id: string): Source {
  const local = article.sources?.[id];
  if (local) return { id, ...local };
  const global = globalSources[id];
  if (global) return global;
  throw new Error(
    `Question "${article.slug}" cites unknown source id "${id}". Add it to the article's sources block or src/lib/sources.ts.`,
  );
}

/** Every paragraph in render order: shortAnswer first, then sections. */
function allParagraphs(article: QuestionArticle): string[] {
  return [article.shortAnswer, ...article.sections.flatMap((s) => s.paragraphs)];
}

/** Ordered unique cite ids, first occurrence first. Validates every id. */
export function collectCites(article: QuestionArticle): Source[] {
  const seen = new Set<string>();
  const ordered: Source[] = [];
  for (const p of allParagraphs(article)) {
    for (const m of p.matchAll(/\{\{cite:([a-z0-9-]+)\}\}/g)) {
      if (!seen.has(m[1])) {
        seen.add(m[1]);
        ordered.push(resolveSource(article, m[1]));
      }
    }
  }
  return ordered;
}

/** Marker-stripped plain text, for schema answerText and hub snippets. */
export function plainText(paragraph: string): string {
  return paragraph
    .replace(/\{\{cite:[a-z0-9-]+\}\}/g, "")
    .replace(/\{\{pending:[^}]*\}\}/g, "")
    .replace(/\[\[[^\]|]+\|([^\]]+)\]\]/g, "$1")
    .replace(/\s+([.,;:])/g, "$1")
    .trim();
}

function renderParagraph(
  article: QuestionArticle,
  paragraph: string,
  numberOf: Map<string, number>,
  key: string,
): ReactNode {
  const parts = paragraph.split(TOKEN);
  return (
    <p key={key}>
      {parts.map((part, i) => {
        const cite = part.match(/^\{\{cite:([a-z0-9-]+)\}\}$/);
        if (cite) {
          const src = resolveSource(article, cite[1]);
          return (
            <Footnote
              key={i}
              n={numberOf.get(cite[1])!}
              label={src.label}
              url={src.url}
            />
          );
        }
        const pending = part.match(/^\{\{pending:([^}]*)\}\}$/);
        if (pending) return <SourcePending key={i} note={pending[1]} />;
        const link = part.match(/^\[\[([^\]|]+)\|([^\]]+)\]\]$/);
        if (link)
          return (
            <Link key={i} href={link[1]}>
              {link[2]}
            </Link>
          );
        return part;
      })}
    </p>
  );
}

export function QuestionArticleView({ article }: { article: QuestionArticle }) {
  const cites = collectCites(article);
  const numberOf = new Map(cites.map((s, i) => [s.id, i + 1]));

  return (
    <>
      <section className="hero">
        <div className="site-container hero__grid">
          <div>
            <p className="hero__eyebrow">
              <Link href="/questions">Questions</Link> · {article.category}
            </p>
            <h1 className="hero__title">{article.question}</h1>
            <p className="mt-2 text-sm opacity-70">
              Updated {article.dateModified}. Every claim carries its citation.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div
            className="question-short-answer max-w-prose border-l-4 pl-5 py-3 mb-10"
            style={{ borderColor: "var(--color-accent, currentColor)" }}
          >
            <p className="section-label mb-2">The short answer</p>
            <div className="text-lg leading-[1.8]">
              {renderParagraph(article, article.shortAnswer, numberOf, "short")}
            </div>
          </div>

          <div className="max-w-prose space-y-10">
            {article.sections.map((section, si) => (
              <div key={si}>
                <h2 className="text-xl font-semibold mb-3">{section.heading}</h2>
                <div className="space-y-4 leading-[1.8]">
                  {section.paragraphs.map((p, pi) =>
                    renderParagraph(article, p, numberOf, `${si}-${pi}`),
                  )}
                </div>
              </div>
            ))}
          </div>

          {cites.length > 0 && (
            <div className="max-w-prose mt-14">
              <h2 className="section-label mb-3">Sources</h2>
              <ol className="space-y-2 text-sm leading-[1.6] list-decimal pl-5">
                {cites.map((s) => (
                  <li key={s.id}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2"
                    >
                      {s.label}
                    </a>
                    {s.accessedOn ? ` (accessed ${s.accessedOn}).` : "."}
                  </li>
                ))}
              </ol>
            </div>
          )}

          <div className="max-w-prose mt-14">
            <h2 className="section-label mb-3">Related reading</h2>
            <ul className="space-y-2">
              {article.related.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="underline underline-offset-2">
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
