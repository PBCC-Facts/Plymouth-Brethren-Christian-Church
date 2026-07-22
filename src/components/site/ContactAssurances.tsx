import type { ReactNode } from "react";

/**
 * Risk-reversal panel for the /contact hero: concise privacy assurances with
 * icons, answering "will I be anonymous?" before the visitor reaches the form.
 * Copy is deliberately unpunctuated and short (per editor direction).
 */

const ICON = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

type Point = { icon: ReactNode; text: string };

const POINTS: Point[] = [
  {
    text: "You stay completely anonymous",
    icon: (
      <svg viewBox="0 0 24 24" {...ICON} aria-hidden="true">
        <circle cx="12" cy="7" r="4" />
        <path d="M5 21c0-4 3-6 7-6s7 2 7 6" />
      </svg>
    ),
  },
  {
    text: "We never log your IP or device",
    icon: (
      <svg viewBox="0 0 24 24" {...ICON} aria-hidden="true">
        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
        <circle cx="12" cy="12" r="2.5" />
        <path d="M3 3l18 18" />
      </svg>
    ),
  },
  {
    text: "Only the editor can read this",
    icon: (
      <svg viewBox="0 0 24 24" {...ICON} aria-hidden="true">
        <rect x="5" y="11" width="14" height="9" rx="1.5" />
        <path d="M8 11V8a4 4 0 0 1 8 0v3" />
      </svg>
    ),
  },
  {
    text: "Remove it anytime with your code",
    icon: (
      <svg viewBox="0 0 24 24" {...ICON} aria-hidden="true">
        <path d="M9 14 4 9l5-5" />
        <path d="M4 9h11a5 5 0 0 1 0 10h-1" />
      </svg>
    ),
  },
  {
    text: "Safest from a device they do not manage",
    icon: (
      <svg viewBox="0 0 24 24" {...ICON} aria-hidden="true">
        <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" />
      </svg>
    ),
  },
];

export function ContactAssurances() {
  return (
    <aside className="intake-assurances" aria-label="Your privacy">
      <p className="intake-assurances__label">Your privacy</p>
      <ul>
        {POINTS.map((p) => (
          <li key={p.text}>
            {p.icon}
            <span>{p.text}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
