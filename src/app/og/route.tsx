import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import { SITE_URL } from "@/lib/site";

export const runtime = "edge";

const MAX_TITLE_LENGTH = 120;
const MAX_TAG_LENGTH = 48;

/**
 * Dynamic OpenGraph / Twitter card generator.
 *
 *   /og?title=Mission&tag=PARODY · CRITICISM
 *
 * Referenced from `buildPageMetadata` via `ogImageUrl()`. Every indexable
 * page gets a 1200x630 image containing its own title so that LinkedIn,
 * Slack, Discord, etc. show meaningfully distinct previews per URL.
 *
 * For in-page imagery (news cards, member photos, etc.) use the
 * `<Artwork>` component, not this route. Social sharing and in-page
 * imagery are deliberately different pipelines.
 */
export function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const rawTitle = searchParams.get("title") ?? "Plymouth Brethren Christian Church";
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
          padding: "72px",
          background:
            "linear-gradient(135deg, #1b2327 0%, #23323a 55%, #3e6f77 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 28,
            letterSpacing: 6,
            fontWeight: 700,
            color: "#f9d54a",
          }}
        >
          {tag}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 28,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#4c868f",
              fontWeight: 700,
            }}
          >
            The Facts ·
          </div>
          <div
            style={{
              fontSize: title.length > 60 ? 68 : 84,
              lineHeight: 1.08,
              fontWeight: 700,
              fontFamily: "serif",
              letterSpacing: -1,
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 22,
            color: "#dfe1e1",
          }}
        >
          <div style={{ display: "flex" }}>
            Plymouth Brethren Christian Church (formerly Exclusive Brethren)
          </div>
          <div style={{ display: "flex", fontWeight: 700 }}>{host}</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "cache-control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
      },
    },
  );
}
