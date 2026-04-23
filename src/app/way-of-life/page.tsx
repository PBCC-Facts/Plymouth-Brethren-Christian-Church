import type { Metadata } from "next";
import { ComingSoon } from "@/components/site/ComingSoon";

export const metadata: Metadata = {
  title: "Way of life",
  alternates: { canonical: "/way-of-life" },
};

export default function Page() {
  return <ComingSoon title="Way of life" />;
}
