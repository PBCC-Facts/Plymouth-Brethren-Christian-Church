"use client";

import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export function Sidebar({ open, setOpen }: Props) {
  return (
    <aside className="sidebar">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="primary-drawer"
        onClick={() => setOpen((v) => !v)}
        className="sidebar__toggle"
      >
        <span aria-hidden="true">{open ? "✕" : "☰"}</span>
      </button>

      <Link
        href="/"
        className="sidebar__brand"
        aria-label="The Facts — Plymouth Brethren Christian Church (parody) — home"
      >
        <span className="sidebar__brand-facts">The Facts.</span>
        <span className="sidebar__brand-name">
          Plymouth Brethren Christian Church
        </span>
      </Link>
    </aside>
  );
}
