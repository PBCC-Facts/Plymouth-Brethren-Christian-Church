import type { NextConfig } from "next";

/**
 * Security headers applied to every response. CSP is deliberately not yet
 * enforced here — we emit inline JSON-LD and inline style attributes, which
 * would need nonces or hashes to stay CSP-clean. CSP lands in a follow-up
 * once the inline usage has a nonce strategy.
 */
const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Canonical URLs in the sitemap / OG / alternates use no trailing slash,
  // so enforce the same shape at the edge.
  trailingSlash: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  // Permanent redirects for the slug rename (2026-04-23). Any link to an old
  // path migrates to its new home. Keeps search engine equity and external
  // referrers working without 404ing.
  async redirects() {
    return [
      { source: "/our-members", destination: "/people", permanent: true },
      { source: "/our-members/:slug*", destination: "/people/:slug*", permanent: true },
      { source: "/way-of-life/our-beliefs", destination: "/way-of-life/beliefs", permanent: true },
      { source: "/way-of-life/our-history", destination: "/way-of-life/history", permanent: true },
      { source: "/way-of-life/our-network", destination: "/way-of-life/network", permanent: true },
      { source: "/way-of-life/our-neighbours", destination: "/way-of-life/neighbours", permanent: true },
    ];
  },
};

export default nextConfig;
