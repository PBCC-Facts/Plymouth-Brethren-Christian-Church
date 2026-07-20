import Link from "next/link";

/**
 * Site-wide top banner. Identifies the project as independent and
 * unaffiliated; links to the mission page.
 */
export function SiteBanner() {
  return (
    <div
      role="note"
      aria-label="Independent, open-source record. Not affiliated with the Plymouth Brethren Christian Church."
      className="sticky top-0 z-50 w-full border-b border-[color:var(--color-banner-ink)]/10"
      style={{
        background: "var(--color-banner-bg)",
        color: "var(--color-banner-ink)",
      }}
    >
      <div className="site-container flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-2 text-sm">
        <p>
          Independent journalism and open-source transparency &middot; Not
          affiliated with the PBCC.
        </p>
        <Link
          href="/mission"
          className="underline decoration-2 underline-offset-2"
          style={{ color: "var(--color-banner-ink)" }}
        >
          About this site
        </Link>
      </div>
    </div>
  );
}
