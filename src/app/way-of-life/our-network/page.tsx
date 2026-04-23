import { ComingSoon } from "@/components/site/ComingSoon";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  topic: "Our network",
  description:
    "The PBCC institutional network — OneSchool Global, Universal Business Team (UBT), Rapid Relief Team — and the public-record scrutiny each has drawn.",
  slug: "/way-of-life/our-network",
  cluster: "E",
  noindex: true,
});

export default function Page() {
  return <ComingSoon title="Our network" />;
}
