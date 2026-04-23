import { ComingSoon } from "@/components/site/ComingSoon";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  topic: "Holidays and celebrations",
  description:
    "Which holidays the Plymouth Brethren Christian Church observes, which it explicitly does not, and the reasoning given for the distinction.",
  slug: "/way-of-life/holidays-and-celebrations",
  cluster: "C",
  noindex: true,
});

export default function Page() {
  return <ComingSoon title="Holidays and celebrations" />;
}
