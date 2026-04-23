import type { Metadata } from "next";
import { ComingSoon } from "@/components/site/ComingSoon";

export const metadata: Metadata = {
  title: "Politics and voting",
  alternates: { canonical: "/way-of-life/voting" },
};

export default function Page() {
  return <ComingSoon title="Politics and voting" />;
}
