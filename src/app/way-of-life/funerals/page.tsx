import type { Metadata } from "next";
import { ComingSoon } from "@/components/site/ComingSoon";

export const metadata: Metadata = {
  title: "Burials and funerals",
  alternates: { canonical: "/way-of-life/funerals" },
};

export default function Page() {
  return <ComingSoon title="Burials and funerals" />;
}
