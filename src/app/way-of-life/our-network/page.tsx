import type { Metadata } from "next";
import { ComingSoon } from "@/components/site/ComingSoon";

export const metadata: Metadata = {
  title: "Our network",
  alternates: { canonical: "/way-of-life/our-network" },
};

export default function Page() {
  return <ComingSoon title="Our network" />;
}
