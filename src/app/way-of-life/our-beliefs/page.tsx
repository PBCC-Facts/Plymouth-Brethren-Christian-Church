import { ComingSoon } from "@/components/site/ComingSoon";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  topic: "Our beliefs",
  description:
    "Core PBCC doctrine — Darby's Doctrine of Separation, the Man-of-God leadership office, the practice of withdrawing from — explained with sources.",
  slug: "/way-of-life/our-beliefs",
  cluster: "C",
  noindex: true,
});

export default function Page() {
  return <ComingSoon title="Our beliefs" />;
}
