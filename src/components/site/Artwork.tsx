import type { CSSProperties } from "react";
import { type ArtworkKind, glyphFor } from "@/lib/glyphs";

/**
 * Single in-page image pipeline for the whole site.
 *
 *   <Artwork title="Bruce D. Hales" kind="person" aspect="square" />
 *   <Artwork title="Behind the Exclusive Brethren" kind="broadcast" />
 *   <Artwork title="OneSchool Global" kind="organisation" src="/images/entities/osg.jpg" />
 *
 * When `src` is provided, renders an <img>. Otherwise renders a branded
 * gradient placeholder with a category glyph and a subtle title overlay.
 *
 * This is NOT the social-share OG card (see `/og` route for that). It's
 * the placeholder that every in-page image slot uses until a real image
 * lands at the `src` path (hand-uploaded, AI-generated, etc.).
 *
 * Add a new `kind` in `src/lib/glyphs.tsx`; no change needed here.
 */

type AspectRatio = "card" | "wide" | "square" | "portrait";

type Props = {
  /** The title/name being depicted. Used for alt text and the overlay caption. */
  title: string;
  /** Category. Drives the glyph in the placeholder. */
  kind: ArtworkKind;
  /** Aspect ratio token. Default: "card" (16:10). */
  aspect?: AspectRatio;
  /** Optional real-image URL. If set, the placeholder is bypassed. */
  src?: string;
  /** Hide the title overlay on the placeholder. Default: false (overlay visible). */
  hideCaption?: boolean;
  /** Passthrough className for the outer wrapper. */
  className?: string;
  /** Loading strategy for the <img> when `src` is set. Default: "lazy". */
  loading?: "lazy" | "eager";
};

const aspectClass: Record<AspectRatio, string> = {
  card: "aspect-[16/10]",
  wide: "aspect-[16/9]",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
};

export function Artwork({
  title,
  kind,
  aspect = "card",
  src,
  hideCaption = false,
  className = "",
  loading = "lazy",
}: Props) {
  const wrapperCls = `relative w-full overflow-hidden ${aspectClass[aspect]} ${className}`;

  // Real image path: defer to the file
  if (src) {
    return (
      <div
        className={wrapperCls}
        style={{ background: "var(--color-ink)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={title}
          loading={loading}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  // Placeholder: branded gradient + category glyph + optional title overlay
  const placeholderStyle: CSSProperties = {
    background:
      "linear-gradient(135deg, var(--color-ink) 0%, color-mix(in srgb, var(--color-ink) 85%, var(--color-brand)) 55%, var(--color-brand) 140%)",
    color: "var(--color-surface)",
  };

  return (
    <div
      className={wrapperCls}
      style={placeholderStyle}
      role="img"
      aria-label={title}
    >
      {/* Centered category glyph, subtle */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ color: "color-mix(in srgb, var(--color-brand) 55%, transparent)" }}
        aria-hidden="true"
      >
        {glyphFor(kind, 96)}
      </div>

      {/* Hairline brand bar along the bottom */}
      <div
        className="absolute left-0 right-0 bottom-0 h-[3px]"
        style={{ background: "var(--color-brand)" }}
        aria-hidden="true"
      />

      {/* Title overlay (bottom-left, subtle) */}
      {hideCaption ? null : (
        <div
          className="absolute left-5 bottom-4 right-5 font-[family-name:var(--font-serif)]"
          style={{
            color: "var(--color-surface)",
            opacity: 0.92,
            fontSize: "clamp(0.85rem, 1.15vw, 1rem)",
            lineHeight: 1.25,
            textShadow: "0 1px 3px rgba(0,0,0,0.35)",
          }}
        >
          {title}
        </div>
      )}
    </div>
  );
}
