import { ComingSoon } from "@/components/site/ComingSoon";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  topic: "Cookies policy",
  description: "Cookies policy for The Facts. Coming soon.",
  slug: "/cookies",
  noindex: true,
});

export default function Page() {
  return <ComingSoon title="Cookies Policy" />;
}
