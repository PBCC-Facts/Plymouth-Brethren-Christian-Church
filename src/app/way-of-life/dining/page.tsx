import type { Metadata } from "next";
import { ComingSoon } from "@/components/site/ComingSoon";

export const metadata: Metadata = {
  title: "Dining",
  alternates: { canonical: "/way-of-life/dining" },
};

export default function Page() {
  return <ComingSoon title="Dining" />;
}
