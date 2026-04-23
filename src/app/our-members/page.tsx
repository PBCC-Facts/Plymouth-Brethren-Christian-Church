import { ComingSoon } from "@/components/site/ComingSoon";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  topic: "Our members",
  description:
    "Who members of the Plymouth Brethren Christian Church are, how the fellowship is organised under the current Man of God (Bruce D. Hales), and where public-record accounts sit alongside the church's own statements.",
  slug: "/our-members",
  cluster: "C",
  noindex: true,
});

export default function Page() {
  return <ComingSoon title="Our members" />;
}
