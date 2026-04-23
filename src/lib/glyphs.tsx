import type { ReactNode } from "react";

/**
 * Site-wide category glyph map. Single-color stroke-based SVGs on a
 * 32x32 viewport, `currentColor` throughout so the caller controls the
 * hue. Used by `<Artwork>` placeholders.
 *
 * Add a new kind by appending a case here; no other file needs to change.
 */

export type ArtworkKind =
  | "person"
  | "journalism"
  | "broadcast"
  | "regulator"
  | "inquiry"
  | "document"
  | "organisation"
  | "place";

export function glyphFor(kind: ArtworkKind, size = 48): ReactNode {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  const viewBox = "0 0 32 32";
  switch (kind) {
    case "person":
      // Simple shoulders + head silhouette
      return (
        <svg width={size} height={size} viewBox={viewBox} aria-hidden="true">
          <circle cx="16" cy="11" r="5" {...common} />
          <path {...common} d="M5 28 C5 21 10.5 18 16 18 C21.5 18 27 21 27 28" />
        </svg>
      );
    case "journalism":
      // Quill / pen nib
      return (
        <svg width={size} height={size} viewBox={viewBox} aria-hidden="true">
          <path {...common} d="M6 26 L22 10 L26 14 L10 30 Z" />
          <path {...common} d="M20 12 L24 16" />
          <path {...common} d="M6 26 L4 30 L8 28" />
        </svg>
      );
    case "broadcast":
      // Play triangle inside circle
      return (
        <svg width={size} height={size} viewBox={viewBox} aria-hidden="true">
          <circle cx="16" cy="16" r="12" {...common} />
          <path {...common} d="M14 11 L22 16 L14 21 Z" />
        </svg>
      );
    case "regulator":
      // Scales of justice
      return (
        <svg width={size} height={size} viewBox={viewBox} aria-hidden="true">
          <path {...common} d="M16 6 L16 26" />
          <path {...common} d="M10 26 L22 26" />
          <path {...common} d="M8 10 L24 10" />
          <path {...common} d="M8 10 L5 18 L11 18 L8 10 Z" />
          <path {...common} d="M24 10 L21 18 L27 18 L24 10 Z" />
        </svg>
      );
    case "inquiry":
      // Classical building — columns
      return (
        <svg width={size} height={size} viewBox={viewBox} aria-hidden="true">
          <path {...common} d="M4 10 L16 4 L28 10" />
          <path {...common} d="M4 10 L28 10" />
          <path {...common} d="M7 10 L7 24" />
          <path {...common} d="M13 10 L13 24" />
          <path {...common} d="M19 10 L19 24" />
          <path {...common} d="M25 10 L25 24" />
          <path {...common} d="M4 26 L28 26" />
        </svg>
      );
    case "organisation":
      // Office building
      return (
        <svg width={size} height={size} viewBox={viewBox} aria-hidden="true">
          <path {...common} d="M6 28 L6 8 L18 8 L18 28 Z" />
          <path {...common} d="M18 28 L18 14 L26 14 L26 28" />
          <path {...common} d="M9 12 L11 12 M13 12 L15 12" />
          <path {...common} d="M9 17 L11 17 M13 17 L15 17" />
          <path {...common} d="M9 22 L11 22 M13 22 L15 22" />
          <path {...common} d="M21 18 L23 18 M21 22 L23 22" />
        </svg>
      );
    case "place":
      // Map pin
      return (
        <svg width={size} height={size} viewBox={viewBox} aria-hidden="true">
          <path
            {...common}
            d="M16 4 C10.5 4 6 8.5 6 14 C6 22 16 30 16 30 C16 30 26 22 26 14 C26 8.5 21.5 4 16 4 Z"
          />
          <circle cx="16" cy="14" r="3.5" {...common} />
        </svg>
      );
    case "document":
    default:
      // Stacked document lines
      return (
        <svg width={size} height={size} viewBox={viewBox} aria-hidden="true">
          <path {...common} d="M8 4 L20 4 L26 10 L26 28 L8 28 Z" />
          <path {...common} d="M20 4 L20 10 L26 10" />
          <path {...common} d="M12 16 L22 16" />
          <path {...common} d="M12 20 L22 20" />
          <path {...common} d="M12 24 L18 24" />
        </svg>
      );
  }
}
