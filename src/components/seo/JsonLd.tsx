import { SITE_NAME, SITE_URL, GITHUB_URL } from "@/lib/site";

type JsonLdValue = string | number | boolean | null | JsonLdValue[] | { [k: string]: JsonLdValue };

/**
 * Inline JSON-LD emitter. Render inside the page's returned JSX:
 *
 *   <JsonLd data={websiteSchema()} />
 *
 * A server component, so the script is present in the HTML the crawler
 * gets on first byte. No hydration cost.
 */
export function JsonLd({
  data,
}: {
  data: Record<string, JsonLdValue> | Record<string, JsonLdValue>[];
}) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify is safe: we control the inputs. We still escape any
      // accidental `<` to avoid breaking out of the <script> tag.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

function absolute(path: string): string {
  return new URL(path, SITE_URL).toString();
}

/**
 * WebSite schema with a SearchAction (enables the site-search box in SERPs
 * once we have a `/search` page; harmless before then).
 */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    alternateName: [
      "The Facts about the Plymouth Brethren Christian Church",
      "PBCC Facts",
    ],
    url: SITE_URL,
    inLanguage: "en",
    publisher: { "@id": `${SITE_URL}#publisher` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Publisher / Organization schema. Kept deliberately minimal until the
 * publisher identity on /about-this-site is finalized (EEAT signals
 * belong on that page, per SEO_STRATEGY.md §5).
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}#publisher`,
    name: SITE_NAME,
    url: SITE_URL,
    sameAs: [GITHUB_URL, "https://pbccstories.org/"],
    description:
      "An independent, open-source record documenting the doctrines and practices of the Plymouth Brethren Christian Church (formerly the Exclusive Brethren). Every claim is sourced; the full repository is public on GitHub.",
  };
}

export interface BreadcrumbCrumb {
  name: string;
  path: string;
}

export function breadcrumbSchema(crumbs: BreadcrumbCrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absolute(c.path),
    })),
  };
}

export interface ArticleSchemaInput {
  headline: string;
  description: string;
  slug: string;
  datePublished: string; // ISO
  dateModified: string; // ISO
  register?: "record" | "explanatory";
  authorName?: string;
}

export function articleSchema(input: ArticleSchemaInput) {
  const url = absolute(input.slug);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    inLanguage: "en",
    author: {
      "@type": "Organization",
      name: input.authorName ?? "The Facts. editorial project",
      url: absolute("/mission"),
    },
    publisher: { "@id": `${SITE_URL}#publisher` },
  };
}
