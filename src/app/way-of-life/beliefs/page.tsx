import { ComingSoon } from "@/components/site/ComingSoon";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  topic: "Beliefs",
  description:
    "Core PBCC doctrine: Darby's Doctrine of Separation, the Man-of-God leadership office, the practice of withdrawing from. Explained with sources.",
  slug: "/way-of-life/beliefs",
  cluster: "C",
  noindex: true,
});

export default function Page() {
  return <ComingSoon title="Beliefs" />;
}
