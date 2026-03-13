import type { ReactNode } from "react";

import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteHeader } from "@/components/marketing/site-header";

type PageShellProps = {
  currentPath: string;
  children: ReactNode;
};

export function PageShell({ currentPath, children }: PageShellProps) {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(40,193,255,0.20),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(198,255,77,0.24),transparent_32%),linear-gradient(180deg,#f6f0e2_0%,#f2efe6_52%,#ede7d8_100%)]" />
        <div className="grid-overlay absolute inset-0 opacity-70" />
      </div>

      <SiteHeader currentPath={currentPath} />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
