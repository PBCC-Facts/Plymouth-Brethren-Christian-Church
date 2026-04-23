import { ComingSoon } from "@/components/site/ComingSoon";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  topic: "News",
  description:
    "Investigative reporting, parliamentary inquiries, and regulatory action on the Plymouth Brethren Christian Church (formerly Exclusive Brethren). Linked, dated, and sourced.",
  slug: "/news",
  cluster: "B",
  noindex: true,
});

export default function Page() {
  return <ComingSoon title="News" />;
}
