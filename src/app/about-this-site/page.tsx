import type { Metadata } from "next";
import { ComingSoon } from "@/components/site/ComingSoon";

export const metadata: Metadata = {
  title: "About this site",
  alternates: { canonical: "/about-this-site" },
};

export default function Page() {
  return (
    <ComingSoon
      title="About this site"
      note="This is a parody and criticism project — independent, sourced, and not affiliated with the PBCC. A full colophon, editorial policy, and correction process will land here soon. In the meantime, the editorial guide lives in the GitHub repo."
    />
  );
}
