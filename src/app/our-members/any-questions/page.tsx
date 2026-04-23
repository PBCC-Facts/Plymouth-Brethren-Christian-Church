import type { Metadata } from "next";
import { ComingSoon } from "@/components/site/ComingSoon";

export const metadata: Metadata = {
  title: "Any questions?",
  alternates: { canonical: "/our-members/any-questions" },
};

export default function Page() {
  return <ComingSoon title="Any questions?" />;
}
