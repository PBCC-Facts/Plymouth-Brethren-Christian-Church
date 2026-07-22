"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav } from "@/lib/nav";

/**
 * Broadsheet masthead: wordmark line, then a nav row of top-level
 * destinations. Secondary pages live in the footer.
 */
export function Masthead() {
  const pathname = usePathname();

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="masthead">
      <div className="site-container">
        <div className="masthead__inner">
          <Link
            href="/"
            className="masthead__brand"
            aria-label="The Facts. Plymouth Brethren Christian Church. home"
          >
            <span className="masthead__wordmark">The Facts.</span>
            <span className="masthead__subject">
              Plymouth Brethren Christian Church &middot; the public record
            </span>
          </Link>
          <div className="masthead__actions">
            <Link href="/questions" className="masthead__cta-ghost">
              <svg
                width="15"
                height="15"
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="16" cy="16" r="12" />
                <path d="M12 12.5 C12 9.5 14 8 16 8 C18.2 8 20 9.6 20 12 C20 14.3 18 15 16.6 16 C16 16.4 16 17 16 18" />
                <circle cx="16" cy="23" r="0.5" />
              </svg>
              Questions
            </Link>
            <Link href="/contact" className="btn masthead__cta">
              Submit information
            </Link>
          </div>
        </div>
        <nav className="masthead__nav" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
