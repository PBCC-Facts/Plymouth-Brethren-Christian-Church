import { ComingSoon } from "@/components/site/ComingSoon";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  topic: "Way of life",
  description:
    "The PBCC's daily practice. dining, marriage, dress, funerals, technology, voting. as lived under the Doctrine of Separation. Full sourced commentary coming soon.",
  slug: "/way-of-life",
  cluster: "C",
  noindex: true,
});

export default function Page() {
  return <ComingSoon title="Way of life" />;
}
