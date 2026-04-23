import { ComingSoon } from "@/components/site/ComingSoon";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  topic: "Our history",
  description:
    "A timeline of the Plymouth Brethren Christian Church — from the 1848 Darby split and the Exclusive Brethren label, through James Taylor Jr and the Aberdeen incident, to the current Bruce D. Hales era.",
  slug: "/way-of-life/our-history",
  cluster: "C",
  noindex: true,
});

export default function Page() {
  return <ComingSoon title="Our history" />;
}
