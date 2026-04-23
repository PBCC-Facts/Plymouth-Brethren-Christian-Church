import { ComingSoon } from "@/components/site/ComingSoon";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  topic: "Network",
  description:
    "The PBCC institutional network: OneSchool Global, Universal Business Team (UBT), Rapid Relief Team. The public-record scrutiny each has drawn.",
  slug: "/way-of-life/network",
  cluster: "E",
  noindex: true,
});

export default function Page() {
  return <ComingSoon title="Network" />;
}
