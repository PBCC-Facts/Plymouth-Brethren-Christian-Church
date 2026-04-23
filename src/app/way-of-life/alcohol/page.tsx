import { ComingSoon } from "@/components/site/ComingSoon";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  topic: "Alcohol",
  description:
    "PBCC teaching and member practice on alcohol — historical and current — with sources.",
  slug: "/way-of-life/alcohol",
  cluster: "C",
  noindex: true,
});

export default function Page() {
  return <ComingSoon title="Alcohol" />;
}
