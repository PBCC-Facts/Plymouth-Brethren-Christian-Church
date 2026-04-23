import type { Metadata } from "next";
import { ComingSoon } from "@/components/site/ComingSoon";

export const metadata: Metadata = {
  title: "Resources",
  alternates: { canonical: "/resources" },
};

export default function Page() {
  return <ComingSoon title="Resources" />;
}
