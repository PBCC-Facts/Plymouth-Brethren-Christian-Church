import { ComingSoon } from "@/components/site/ComingSoon";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  topic: "Contact",
  description:
    "How to reach the editors — tips, corrections, and source requests for The Facts on the Plymouth Brethren Christian Church. Journalists and regulators welcome.",
  slug: "/contact",
  noindex: true,
});

export default function Page() {
  return <ComingSoon title="Contact" />;
}
