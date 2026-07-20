"use client";

import Link from "next/link";
import { Dispatch, SetStateAction, useEffect } from "react";
import { drawerNav } from "@/lib/nav";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export function MobileDrawer({ open, setOpen }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div
      id="primary-drawer"
      aria-hidden={!open}
      // Above the masthead (static) and the notice bar (z-50).
      className={`fixed inset-0 z-[60] transition-opacity ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <button
        type="button"
        aria-label="Close menu"
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-black/50"
      />
      <nav
        aria-label="All pages"
        className={`absolute left-0 top-0 flex h-full w-[min(380px,88vw)] flex-col transition-transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          background: "var(--color-surface)",
          borderRight: "1px solid var(--color-ink)",
        }}
      >
        {/* Drawer header: wordmark + close, matching the masthead */}
        <div
          className="flex items-baseline justify-between px-6 py-4"
          style={{ borderBottom: "1px solid var(--color-ink)" }}
        >
          <span
            className="font-[family-name:var(--font-serif)] text-xl font-bold"
            style={{ color: "var(--color-ink)" }}
          >
            The Facts.
          </span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.08em]"
            style={{ color: "var(--color-ink)" }}
          >
            Close ✕
          </button>
        </div>

        <ul className="flex-1 overflow-y-auto p-6 space-y-4">
          {drawerNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block font-[family-name:var(--font-serif)] text-xl no-underline hover:underline"
                style={{ color: "var(--color-ink)" }}
              >
                {item.label}
              </Link>
              {item.children && (
                <ul className="mt-2 ml-4 space-y-1.5">
                  {item.children.map((c) => (
                    <li key={c.href}>
                      <Link
                        href={c.href}
                        onClick={() => setOpen(false)}
                        className="block text-sm no-underline opacity-80 hover:opacity-100 hover:underline"
                        style={{ color: "var(--color-ink)" }}
                      >
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
