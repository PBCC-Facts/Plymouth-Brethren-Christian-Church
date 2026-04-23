import type { Metadata } from "next";
import { ComingSoon } from "@/components/site/ComingSoon";

export const metadata: Metadata = {
  title: "Our beliefs",
  alternates: { canonical: "/way-of-life/our-beliefs" },
};

export default function Page() {
  return <ComingSoon title="Our beliefs" />;
}
