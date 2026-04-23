import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

/**
 * Title / description formulas per SEO_STRATEGY.md §1.
 *
 * The title suffix keeps the head term "Plymouth Brethren Christian Church"
 * and the former name "Exclusive Brethren" in every page title, both for
 * SEO and so that human readers see the site's posture before they click.
 *
 * The description wrapper identifies the project as an independent, open
 * source record. "Not affiliated" is non-negotiable and appears on every
 * page via the suffix.
 */
const TITLE_SUFFIX =
  "Plymouth Brethren Christian Church · the public record";

const DESCRIPTION_PREFIX =
  "An independent, open-source record of the Plymouth Brethren Christian Church (formerly the Exclusive Brethren). Every claim linked to a public source.";
const DESCRIPTION_SUFFIX = "Not affiliated with the PBCC.";

export type SeoCluster = "A" | "B" | "C" | "D" | "E" | "F" | "G";

/** Editorial register per EDITORIAL_GUIDE.md. */
export type SeoRegister = "record" | "explanatory";

export interface PageSeoInput {
  /** Short page topic. Becomes the prefix of the <title>. */
  topic: string;
  /** Page-specific sentence. Wrapped by the formula unless `rawDescription`. */
  description: string;
  /** Path beginning with "/". Used for canonical + OG URL. */
  slug: string;
  /** Keyword cluster this page targets. Informational today; used for link-audits later. */
  cluster?: SeoCluster;
  /** Editorial register for this page. */
  register?: SeoRegister;
  /** Keep out of the index (e.g. ComingSoon placeholders). Default false. */
  noindex?: boolean;
  /** Skip the description wrapper. Default false. */
  rawDescription?: boolean;
  /** Override OG type. Default: "website" for "/", "article" otherwise. */
  ogType?: "article" | "website";
  /** Optional OG image tag line. Default: "THE FACTS · INDEPENDENT". */
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

  const title = `${topic} · ${TITLE_SUFFIX}`;

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
