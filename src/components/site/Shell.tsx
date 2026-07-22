import { ReactNode } from "react";
import { Masthead } from "./Masthead";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell flex min-h-dvh flex-col">
      <Masthead />
      <div className="min-w-0 flex flex-1 flex-col">{children}</div>
    </div>
  );
}
