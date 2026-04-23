import type { Metadata } from "next";
import { ComingSoon } from "@/components/site/ComingSoon";

export const metadata: Metadata = {
  title: "Marriage",
  alternates: { canonical: "/way-of-life/marriage" },
};

export default function Page() {
  return <ComingSoon title="Marriage" />;
}
