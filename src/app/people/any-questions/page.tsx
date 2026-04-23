import { ComingSoon } from "@/components/site/ComingSoon";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  topic: "Any questions?",
  description:
    "Answers to common questions about the Plymouth Brethren Christian Church. shunning, leaving, voting, internet use, and life under the Doctrine of Separation. Every answer sourced.",
  slug: "/people/any-questions",
  cluster: "B",
  noindex: true,
});

export default function Page() {
  return <ComingSoon title="Any questions?" />;
}
