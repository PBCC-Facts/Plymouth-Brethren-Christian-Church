"use client";

import { ReactNode, useState } from "react";
import { Masthead } from "./Masthead";
import { MobileDrawer } from "./MobileDrawer";

export function Shell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MobileDrawer open={open} setOpen={setOpen} />
      <div className="site-shell flex min-h-dvh flex-col">
        <Masthead open={open} setOpen={setOpen} />
        <div className="min-w-0 flex flex-1 flex-col">{children}</div>
      </div>
    </>
  );
}
