import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import { SITE_URL } from "@/lib/site";

export const runtime = "edge";

const MAX_TITLE_LENGTH = 120;
const MAX_TAG_LENGTH = 48;

const INK = "#171512";
const PAPER = "#f9f7f2";
const RED = "#8f2b1f";

/**
 * Dynamic OpenGraph / Twitter card generator, in The Record design system:
 * paper surface, ink type, brick-red accent, double rule. Every indexable
 * page gets a 1200x630 card carrying its own title via
 * /og?title=…&tag=…, referenced from buildPageMetadata via ogImageUrl().
 */
export function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const rawTitle =
    searchParams.get("title") ?? "Plymouth Brethren Christian Church";
  const rawTag = searchParams.get("tag") ?? "THE FACTS · INDEPENDENT";

  const title = rawTitle.slice(0, MAX_TITLE_LENGTH);
  const tag = rawTag.slice(0, MAX_TAG_LENGTH);

  const host = new URL(SITE_URL).host;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "64px 72px",
          background: PAPER,
          color: INK,
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Top: tag line + host over a hairline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 24,
                letterSpacing: 5,
                fontWeight: 700,
                color: RED,
                textTransform: "uppercase",
              }}
            >
              {tag}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 22,
                color: INK,
                opacity: 0.65,
              }}
            >
              {host}
            </div>
          </div>
          <div style={{ display: "flex", height: 2, background: INK }} />
        </div>

        {/* Middle: the page title, big ink serif */}
        <div
          style={{
            display: "flex",
            fontSize: title.length > 60 ? 56 : 76,
            lineHeight: 1.05,
            fontWeight: 700,
            letterSpacing: -1,
            color: INK,
            maxWidth: 1020,
          }}
        >
          {title}
        </div>

        {/* Bottom: double rule + wordmark + posture line */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ display: "flex", height: 3, background: INK }} />
            <div style={{ display: "flex", height: 1, background: INK }} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 40,
                fontWeight: 700,
                color: INK,
              }}
            >
              The Facts.
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 21,
                color: INK,
                opacity: 0.65,
              }}
            >
              An independent, open-source record · Not affiliated with the PBCC
            </div>
          </div>
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
