import type { Metadata } from "next";
import { ComingSoon } from "@/components/site/ComingSoon";

export const metadata: Metadata = {
  title: "Podcast",
  alternates: { canonical: "/resources/podcast" },
};

export default function Page() {
  return <ComingSoon title="Podcast" />;
}
