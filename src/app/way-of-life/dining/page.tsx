import { ComingSoon } from "@/components/site/ComingSoon";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  topic: "Dining",
  description:
    "The PBCC rule against eating with non-members — its scriptural basis in the Doctrine of Separation, and its day-to-day implications.",
  slug: "/way-of-life/dining",
  cluster: "C",
  noindex: true,
});

export default function Page() {
  return <ComingSoon title="Dining" />;
}
