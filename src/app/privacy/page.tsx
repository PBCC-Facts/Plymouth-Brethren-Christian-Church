import { ComingSoon } from "@/components/site/ComingSoon";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  topic: "Privacy policy",
  description: "Privacy policy for The Facts. Coming soon.",
  slug: "/privacy",
  noindex: true,
});

export default function Page() {
  return <ComingSoon title="Privacy Policy" />;
}
