import type { Metadata } from "next";
import { ComingSoon } from "@/components/site/ComingSoon";

export const metadata: Metadata = {
  title: "Our neighbours",
  alternates: { canonical: "/way-of-life/our-neighbours" },
};

export default function Page() {
  return <ComingSoon title="Our neighbours" />;
}
