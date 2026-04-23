import type { Metadata } from "next";
import { ComingSoon } from "@/components/site/ComingSoon";

export const metadata: Metadata = {
  title: "Technology and entertainment",
  alternates: { canonical: "/way-of-life/technology-and-entertainment" },
};

export default function Page() {
  return <ComingSoon title="Technology and entertainment" />;
}
