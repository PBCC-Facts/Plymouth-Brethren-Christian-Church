import { ComingSoon } from "@/components/site/ComingSoon";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  topic: "Clothing, hair and fashion",
  description:
    "PBCC dress code and practice. headscarves, hair length, skirt length. and how members describe the rationale in their own words.",
  slug: "/way-of-life/clothing-hair-and-fashion",
  cluster: "C",
  noindex: true,
});

export default function Page() {
  return <ComingSoon title="Clothing, hair and fashion" />;
}
