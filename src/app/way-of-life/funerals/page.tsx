import { ComingSoon } from "@/components/site/ComingSoon";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  topic: "Burials and funerals",
  description:
    "How Plymouth Brethren Christian Church funerals are conducted, who may attend, and how withdrawn family members are treated at burial.",
  slug: "/way-of-life/funerals",
  cluster: "C",
  noindex: true,
});

export default function Page() {
  return <ComingSoon title="Burials and funerals" />;
}
