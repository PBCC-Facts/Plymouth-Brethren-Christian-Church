import { ComingSoon } from "@/components/site/ComingSoon";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  topic: "Marriage",
  description:
    "PBCC teaching on marriage. within-fellowship-only, mate-selection practice, and the consequences of marrying a non-member.",
  slug: "/way-of-life/marriage",
  cluster: "C",
  noindex: true,
});

export default function Page() {
  return <ComingSoon title="Marriage" />;
}
