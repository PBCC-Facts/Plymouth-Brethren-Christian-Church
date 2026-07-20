import type { SeoCluster } from "@/lib/seo";

/**
 * Single registry of every indexable / intended-indexable route.
 *
 * - `indexable: true`  → listed in sitemap.xml + allowed by robots.
 * - `indexable: false` → page exists but is a ComingSoon placeholder; kept
 *                        out of the sitemap AND emits `noindex` in the page
 *                        metadata, so Google doesn't mark the domain as
 *                        thin-content at launch.
 *
 * Flip `indexable` to true the moment a page gets real copy.
 */
export interface RouteDef {
  path: string;
  topic: string;
  /** Cluster per SEO_STRATEGY.md §2. Used for link-audit tooling. */
  cluster?: SeoCluster;
  /** Set once the page has real, original copy worth indexing. */
  indexable: boolean;
  /** Sitemap priority 0.0 – 1.0. Homepage = 1.0, deep leaves = 0.5. */
  priority: number;
  changefreq:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
}

export const ROUTES: RouteDef[] = [
  // Cluster A. brand head terms
  { path: "/", topic: "Home", cluster: "A", indexable: true, priority: 1.0, changefreq: "weekly" },
  { path: "/mission", topic: "Mission", cluster: "A", indexable: true, priority: 0.9, changefreq: "monthly" },
  { path: "/about-this-site", topic: "About this site", cluster: "A", indexable: false, priority: 0.7, changefreq: "monthly" },

  // Cluster B. brand + investigative
  { path: "/news", topic: "News", cluster: "B", indexable: false, priority: 0.8, changefreq: "weekly" },

  // Cluster C. doctrine / practice
  { path: "/way-of-life", topic: "Way of life", cluster: "C", indexable: false, priority: 0.8, changefreq: "monthly" },
  { path: "/way-of-life/beliefs", topic: "Beliefs", cluster: "C", indexable: false, priority: 0.6, changefreq: "monthly" },
  { path: "/way-of-life/history", topic: "History", cluster: "C", indexable: false, priority: 0.6, changefreq: "monthly" },
  { path: "/way-of-life/network", topic: "Network", cluster: "E", indexable: false, priority: 0.6, changefreq: "monthly" },
  { path: "/way-of-life/neighbours", topic: "Neighbours", cluster: "C", indexable: false, priority: 0.6, changefreq: "monthly" },
  { path: "/way-of-life/dining", topic: "Dining", cluster: "C", indexable: false, priority: 0.5, changefreq: "monthly" },
  { path: "/way-of-life/alcohol", topic: "Alcohol", cluster: "C", indexable: false, priority: 0.5, changefreq: "monthly" },
  { path: "/way-of-life/marriage", topic: "Marriage", cluster: "C", indexable: false, priority: 0.5, changefreq: "monthly" },
  { path: "/way-of-life/funerals", topic: "Burials and funerals", cluster: "C", indexable: false, priority: 0.5, changefreq: "monthly" },
  { path: "/way-of-life/technology-and-entertainment", topic: "Technology and entertainment", cluster: "C", indexable: false, priority: 0.5, changefreq: "monthly" },
  { path: "/way-of-life/holidays-and-celebrations", topic: "Holidays and celebrations", cluster: "C", indexable: false, priority: 0.5, changefreq: "monthly" },
  { path: "/way-of-life/clothing-hair-and-fashion", topic: "Clothing, hair and fashion", cluster: "C", indexable: false, priority: 0.5, changefreq: "monthly" },
  { path: "/way-of-life/voting", topic: "Politics and voting", cluster: "C", indexable: false, priority: 0.5, changefreq: "monthly" },

  // Cluster E. money / business network
  { path: "/money", topic: "The money", cluster: "E", indexable: false, priority: 0.9, changefreq: "weekly" },

  { path: "/people", topic: "People", cluster: "D", indexable: true, priority: 0.8, changefreq: "monthly" },
  { path: "/people/bruce-d-hales", topic: "Bruce D. Hales", cluster: "D", indexable: true, priority: 0.7, changefreq: "monthly" },
  { path: "/people/any-questions", topic: "Any questions", cluster: "B", indexable: false, priority: 0.6, changefreq: "monthly" },

  // Supporting
  { path: "/resources", topic: "Resources", cluster: "B", indexable: true, priority: 0.7, changefreq: "monthly" },
  { path: "/resources/podcast", topic: "Podcast", cluster: "B", indexable: false, priority: 0.5, changefreq: "monthly" },
  { path: "/contact", topic: "Contact", indexable: false, priority: 0.4, changefreq: "yearly" },

  // Legal. low-priority but indexable once real copy lands
  { path: "/legal", topic: "Legal", cluster: "A", indexable: true, priority: 0.4, changefreq: "yearly" },
  { path: "/terms", topic: "Terms & conditions", indexable: false, priority: 0.2, changefreq: "yearly" },
  { path: "/privacy", topic: "Privacy policy", indexable: false, priority: 0.2, changefreq: "yearly" },
  { path: "/cookies", topic: "Cookies policy", indexable: false, priority: 0.2, changefreq: "yearly" },
];

/** Lookup table keyed by path for O(1) access in page files. */
const routeByPath = new Map(ROUTES.map((r) => [r.path, r]));

export function getRoute(path: string): RouteDef | undefined {
  return routeByPath.get(path);
}

export function isIndexable(path: string): boolean {
  return routeByPath.get(path)?.indexable ?? false;
}
