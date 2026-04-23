import { ComingSoon } from "@/components/site/ComingSoon";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  topic: "Terms & conditions",
  description: "Terms and conditions for The Facts. Coming soon.",
  slug: "/terms",
  noindex: true,
});

export default function Page() {
  return <ComingSoon title="Terms & Conditions" />;
}
