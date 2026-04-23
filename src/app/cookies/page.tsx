import type { Metadata } from "next";
import { ComingSoon } from "@/components/site/ComingSoon";

export const metadata: Metadata = {
  title: "Cookies Policy",
  alternates: { canonical: "/cookies" },
};

export default function Page() {
  return <ComingSoon title="Cookies Policy" />;
}
