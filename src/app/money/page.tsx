import { ComingSoon } from "@/components/site/ComingSoon";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  topic: "The money",
  description:
    "How money moves through the Plymouth Brethren Christian Church: weekly cash collections, UBT rebates, the Vision Growth and Vision Accelerator investment vehicles, PBCC Properties Global Ltd, and what ex-members describe to reporters as a 'money-go-round'. Mapped, diagrammed, and sourced.",
  slug: "/money",
  cluster: "E",
  noindex: true,
});

export default function Page() {
  return <ComingSoon title="The money" />;
}
