import Link from "next/link";

export function ParodyBanner() {
  return (
    <div
      role="note"
      aria-label="Parody and criticism notice"
      className="sticky top-0 z-50 w-full border-b border-[color:var(--color-banner-ink)]/10"
      style={{
        background: "var(--color-banner-bg)",
        color: "var(--color-banner-ink)",
      }}
    >
      <div className="site-container flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-2 text-sm">
        <p className="font-bold uppercase tracking-wide">
          Parody / Criticism Site
          <span className="ml-2 font-normal normal-case tracking-normal">
            Not affiliated with the Plymouth Brethren Christian Church.
          </span>
        </p>
        <Link
          href="/about-this-site"
          className="underline decoration-2 underline-offset-2"
          style={{ color: "var(--color-banner-ink)" }}
        >
          About this site
        </Link>
      </div>
    </div>
  );
}
