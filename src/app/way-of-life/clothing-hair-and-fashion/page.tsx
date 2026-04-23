import type { Metadata } from "next";
import { ComingSoon } from "@/components/site/ComingSoon";

export const metadata: Metadata = {
  title: "Clothing, hair and fashion",
  alternates: { canonical: "/way-of-life/clothing-hair-and-fashion" },
};

export default function Page() {
  return <ComingSoon title="Clothing, hair and fashion" />;
}
