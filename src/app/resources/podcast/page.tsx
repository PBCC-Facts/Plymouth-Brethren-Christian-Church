import { ComingSoon } from "@/components/site/ComingSoon";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  topic: "Podcast",
  description:
    "Podcast coverage of the Plymouth Brethren Christian Church — ex-member, journalist, and researcher interviews. Coming soon.",
  slug: "/resources/podcast",
  cluster: "B",
  noindex: true,
});

export default function Page() {
  return <ComingSoon title="Podcast" />;
}
