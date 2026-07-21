import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { ROUTES } from "@/lib/routes";
import { questionArticles } from "@/data/questions";

/**
 * Sitemap. only indexable routes go in here. ComingSoon placeholders stay
 * out until they have real copy (they also emit `noindex` at the page level).
 * Question-library articles are appended from their registry.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routeEntries = ROUTES.filter((r) => r.indexable).map((r) => ({
    url: new URL(r.path, SITE_URL).toString(),
    lastModified: now,
    changeFrequency: r.changefreq,
    priority: r.priority,
  }));
  const questionEntries = questionArticles.map((a) => ({
    url: new URL(`/questions/${a.slug}`, SITE_URL).toString(),
    lastModified: new Date(a.dateModified),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  return [...routeEntries, ...questionEntries];
}
