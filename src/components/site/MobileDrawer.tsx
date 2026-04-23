"use client";

import Link from "next/link";
import { Dispatch, SetStateAction, useEffect } from "react";
import { primaryNav } from "@/lib/nav";

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

  return (
    <div
      id="primary-drawer"
      aria-hidden={!open}
      className={`fixed inset-0 z-40 transition-opacity ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <button
        type="button"
        aria-label="Close menu"
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-black/40"
      />
      <nav
        aria-label="Primary"
        className={`absolute left-0 top-0 h-full w-[min(380px,85vw)] overflow-y-auto bg-[color:var(--color-surface)] p-6 shadow-xl transition-transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="space-y-4">
          {primaryNav.map((item) => (
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
