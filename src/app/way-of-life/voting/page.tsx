import { ComingSoon } from "@/components/site/ComingSoon";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  topic: "Politics and voting",
  description:
    "The PBCC on politics and voting. the historical non-voting stance, the political donations and campaigning that have nonetheless drawn public scrutiny.",
  slug: "/way-of-life/voting",
  cluster: "C",
  noindex: true,
});

export default function Page() {
  return <ComingSoon title="Politics and voting" />;
}
