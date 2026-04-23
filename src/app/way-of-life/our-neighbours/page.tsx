import { ComingSoon } from "@/components/site/ComingSoon";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  topic: "Our neighbours",
  description:
    "How PBCC members relate to non-members under the Doctrine of Separation — the sourced practice, not the PR framing.",
  slug: "/way-of-life/our-neighbours",
  cluster: "C",
  noindex: true,
});

export default function Page() {
  return <ComingSoon title="Our neighbours" />;
}
