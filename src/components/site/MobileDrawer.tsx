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
      // z-[60] sits above the sidebar (z-40) and parody banner (z-50).
      // Without this, the sidebar's teal strip paints over the drawer's
      // left edge and clips the first few characters of every menu item.
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
        aria-label="Primary"
        className={`absolute left-0 top-0 flex h-full w-[min(380px,88vw)] flex-col bg-[color:var(--color-surface)] shadow-xl transition-transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer header: brand mark + explicit close button */}
        <div
          className="flex items-center justify-between px-6 py-4 border-b"
          style={{ borderColor: "var(--color-rule)" }}
        >
          <div className="flex items-center gap-2">
            <span
              className="inline-block px-2 py-1 text-[0.65rem] font-bold uppercase tracking-[0.15em] leading-none"
              style={{
                background: "var(--color-facts)",
                color: "var(--color-surface)",
              }}
            >
              The Facts.
            </span>
            <span
              className="font-[family-name:var(--font-serif)] text-sm leading-tight"
              style={{ color: "var(--color-ink)" }}
            >
              Plymouth Brethren Christian Church
            </span>
          </div>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="flex h-9 w-9 items-center justify-center text-xl"
            style={{ color: "var(--color-ink)" }}
          >
            <span aria-hidden="true">✕</span>
          </button>
        </div>

        <ul className="flex-1 overflow-y-auto p-6 space-y-4">
          {drawerNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block font-[family-name:var(--font-serif)] text-xl"
                style={{ color: "var(--color-ink)" }}
              >
                {item.label}
              </Link>
              {item.children && (
                <ul className="mt-2 ml-4 space-y-2">
                  {item.children.map((c) => (
                    <li key={c.href}>
                      <Link
                        href={c.href}
                        onClick={() => setOpen(false)}
                        className="block text-sm"
                        target={c.external ? "_blank" : undefined}
                        rel={c.external ? "noreferrer" : undefined}
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
