import type { Metadata } from "next";
import { ComingSoon } from "@/components/site/ComingSoon";

export const metadata: Metadata = {
  title: "Holidays and celebrations",
  alternates: { canonical: "/way-of-life/holidays-and-celebrations" },
};

export default function Page() {
  return <ComingSoon title="Holidays and celebrations" />;
}
