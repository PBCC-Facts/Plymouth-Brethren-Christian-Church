import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { ROUTES } from "@/lib/routes";

/**
 * Sitemap — only indexable routes go in here. ComingSoon placeholders stay
 * out until they have real copy (they also emit `noindex` at the page level).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.filter((r) => r.indexable).map((r) => ({
    url: new URL(r.path, SITE_URL).toString(),
    lastModified: now,
    changeFrequency: r.changefreq,
    priority: r.priority,
  }));
}
