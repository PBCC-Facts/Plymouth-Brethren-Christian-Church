"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { primaryNav } from "@/lib/nav";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

/**
 * Broadsheet masthead: wordmark line, then a nav row of top-level
 * destinations with an "all pages" toggle for the full drawer.
 */
export function Masthead({ open, setOpen }: Props) {
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
          <Link href="/contact" className="btn masthead__cta">
            Submit information
          </Link>
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
          <button
            type="button"
            className="masthead__all"
            aria-label={open ? "Close full menu" : "Open full menu"}
            aria-expanded={open}
            aria-controls="primary-drawer"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close ✕" : "All pages ☰"}
          </button>
        </nav>
      </div>
    </header>
  );
}
