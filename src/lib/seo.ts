import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

/**
 * Title / description formulas per SEO_STRATEGY.md §1.
 *
 * The title suffix keeps the head term "Plymouth Brethren Christian Church"
 * in every page title (essential for ranking on it) while making the parody
 * / criticism nature unambiguous to both Google's deceptive-content
 * classifier and human readers.
 *
 * The description wrapper keeps the head term and the former-name
 * "Exclusive Brethren" in every description, so long-tail searches on the
 * former brand still match our pages.
 */
const TITLE_SUFFIX =
  "Plymouth Brethren Christian Church (parody · criticism · survivor resources)";

const DESCRIPTION_PREFIX =
  "A satirical mirror and critical companion to the Plymouth Brethren Christian Church (formerly Exclusive Brethren).";
const DESCRIPTION_SUFFIX = "Not affiliated with the PBCC.";

export type SeoCluster = "A" | "B" | "C" | "D" | "E" | "F" | "G";

/** Editorial register per EDITORIAL_GUIDE.md. */
export type SeoRegister = "parody" | "criticism" | "explanatory";

export interface PageSeoInput {
  /** Short page topic — becomes the prefix of the <title>. */
  topic: string;
  /** Page-specific sentence. Wrapped by the formula unless `rawDescription`. */
  description: string;
  /** Path beginning with "/". Used for canonical + OG URL. */
  slug: string;
  /** Keyword cluster this page targets. Informational today; used for link-audits later. */
  cluster?: SeoCluster;
  /** Editorial register for this page. Propagates to schema (satire genre). */
  register?: SeoRegister;
  /** Keep out of the index (e.g. ComingSoon placeholders). Default false. */
  noindex?: boolean;
  /** Skip the description wrapper. Default false. */
  rawDescription?: boolean;
  /** Override OG type. Default: "website" for "/", "article" otherwise. */
  ogType?: "article" | "website";
  /** Optional OG image tag line. Default: "PARODY · CRITICISM". */
  ogTag?: string;
}

/** Resolve to an absolute origin+path URL (no trailing slash collapse). */
function absolute(path: string): string {
  return new URL(path, SITE_URL).toString();
}

/** Build the dynamic OG image URL for a page. */
export function ogImageUrl(topic: string, tag?: string): string {
  const params = new URLSearchParams({ title: topic });
  if (tag) params.set("tag", tag);
  return absolute(`/og?${params.toString()}`);
}

/**
 * The one place every page's <title>, description, canonical, OG, Twitter,
 * and robots flags are built. Every page.tsx should call this.
 */
export function buildPageMetadata(input: PageSeoInput): Metadata {
  const {
    topic,
    description,
    slug,
    noindex = false,
    rawDescription = false,
    ogType,
    ogTag,
  } = input;

  const title = `${topic} — ${TITLE_SUFFIX}`;

  const wrappedDescription = rawDescription
    ? description
    : `${DESCRIPTION_PREFIX} ${description} ${DESCRIPTION_SUFFIX}`;

  const url = absolute(slug);
  const image = ogImageUrl(topic, ogTag);

  return {
    title: { absolute: title },
    description: wrappedDescription,
    alternates: { canonical: slug },
    robots: noindex
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      type: ogType ?? (slug === "/" ? "website" : "article"),
      url,
      siteName: SITE_NAME,
      title,
      description: wrappedDescription,
      images: [{ url: image, width: 1200, height: 630, alt: topic }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: wrappedDescription,
      images: [image],
    },
  };
}
