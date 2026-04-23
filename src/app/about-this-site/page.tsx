import { ComingSoon } from "@/components/site/ComingSoon";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  topic: "About this site",
  description:
    "Colophon, editorial policy, and correction process for The Facts — an independent, sourced parody and criticism project on the Plymouth Brethren Christian Church (formerly the Exclusive Brethren).",
  slug: "/about-this-site",
  cluster: "A",
  noindex: true,
});

export default function Page() {
  return (
    <ComingSoon
      title="About this site"
      note="This is a parody and criticism project — independent, sourced, and not affiliated with the PBCC. A full colophon, editorial policy, and correction process will land here soon. In the meantime, the editorial guide lives in the GitHub repo."
    />
  );
}
