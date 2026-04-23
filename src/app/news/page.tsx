import type { Metadata } from "next";
import { ComingSoon } from "@/components/site/ComingSoon";

export const metadata: Metadata = {
  title: "News",
  alternates: { canonical: "/news" },
};

export default function Page() {
  return <ComingSoon title="News" />;
}
