import { ComingSoon } from "@/components/site/ComingSoon";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  topic: "Technology and entertainment",
  description:
    "What PBCC members may and may not do with the internet, television, radio, music, and mobile devices — including the fellowship-supplied Streamline3 device.",
  slug: "/way-of-life/technology-and-entertainment",
  cluster: "C",
  noindex: true,
});

export default function Page() {
  return <ComingSoon title="Technology and entertainment" />;
}
