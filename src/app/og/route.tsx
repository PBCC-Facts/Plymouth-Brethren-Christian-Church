import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import { SITE_URL } from "@/lib/site";
import { OG_MARK } from "./mark";

export const runtime = "edge";

const MAX_TITLE_LENGTH = 120;

const INK = "#171512";
const PAPER = "#f9f7f2";
const RED = "#8f2b1f";

/**
 * Dynamic OpenGraph / Twitter card, The Record design system:
 * paper surface, ink type, brick-red accent, a marker illustration on the
 * right, and the brand mark stated exactly once (bottom wordmark). The
 * per-page title comes from ?title=… (pass a clean title via ogTitle in
 * buildPageMetadata when the SEO <title> carries a suffix).
 */
export function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = (
    searchParams.get("title") ?? "Plymouth Brethren Christian Church"
  ).slice(0, MAX_TITLE_LENGTH);
  const host = new URL(SITE_URL).host;

  const titleSize = title.length > 58 ? 52 : title.length > 32 ? 64 : 74;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: PAPER,
          color: INK,
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Left: text column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "735px",
            height: "100%",
            padding: "60px 56px",
          }}
        >
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 1, color: INK, opacity: 0.6 }}>
            {host}
          </div>

          <div
            style={{
              display: "flex",
              fontSize: titleSize,
              lineHeight: 1.06,
              fontWeight: 700,
              letterSpacing: -1,
              color: INK,
            }}
          >
            {title}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ display: "flex", height: 3, background: INK, width: 96 }} />
            <div style={{ display: "flex", fontSize: 40, fontWeight: 700, color: INK }}>
              The Facts.
            </div>
            <div style={{ display: "flex", fontSize: 21, color: INK, opacity: 0.62 }}>
              Independent, open-source · Not affiliated with the PBCC
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ display: "flex", width: "2px", height: "100%", background: INK }} />

        {/* Right: marker illustration on a clean plate (image bg is near-white,
            so the panel is white to avoid a visible box against the paper). */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "463px",
            height: "100%",
            background: "#ffffff",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={OG_MARK} width={452} height={452} alt="" />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "cache-control":
          "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
      },
    },
  );
}
