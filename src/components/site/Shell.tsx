"use client";

import { ReactNode, useState } from "react";
import { Sidebar } from "./Sidebar";
import { MobileDrawer } from "./MobileDrawer";

export function Shell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MobileDrawer open={open} setOpen={setOpen} />
      <div className="site-shell">
        <Sidebar open={open} setOpen={setOpen} />
        <div className="min-w-0">{children}</div>
      </div>
    </>
  );
}
