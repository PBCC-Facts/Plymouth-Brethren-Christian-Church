import type { Metadata } from "next";
import { ComingSoon } from "@/components/site/ComingSoon";

export const metadata: Metadata = {
  title: "Alcohol",
  alternates: { canonical: "/way-of-life/alcohol" },
};

export default function Page() {
  return <ComingSoon title="Alcohol" />;
}
