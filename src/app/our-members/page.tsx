import type { Metadata } from "next";
import { ComingSoon } from "@/components/site/ComingSoon";

export const metadata: Metadata = {
  title: "Our members",
  alternates: { canonical: "/our-members" },
};

export default function Page() {
  return <ComingSoon title="Our members" />;
}
