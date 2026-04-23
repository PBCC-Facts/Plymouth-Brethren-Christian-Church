import type { Metadata } from "next";
import { ComingSoon } from "@/components/site/ComingSoon";

export const metadata: Metadata = {
  title: "Our history",
  alternates: { canonical: "/way-of-life/our-history" },
};

export default function Page() {
  return <ComingSoon title="Our history" />;
}
