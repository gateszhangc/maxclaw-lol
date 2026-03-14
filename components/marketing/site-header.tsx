import Link from "next/link";

import { comparisonLinks, headerLinks, siteConfig } from "@/lib/site-content";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type SiteHeaderProps = {
  currentPath: string;
};

export function SiteHeader({ currentPath }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto mt-4 flex w-[min(1180px,calc(100%-1.5rem))] items-center justify-between rounded-full border border-[color:var(--line)] bg-white/78 px-4 py-3 shadow-[0_12px_50px_rgba(18,24,39,0.08)] backdrop-blur-xl md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-full bg-[var(--ink)] text-sm font-bold text-[var(--paper)]">
            MX
          </span>
          <span className="hidden md:block">
            <span className="font-display text-lg font-semibold tracking-[-0.04em] text-[var(--ink)]">
              {siteConfig.name}
            </span>
            <span className="block text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              Cloud AI agent by MiniMax
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {headerLinks.map((link) => {
            const active = link.href.includes("#")
              ? currentPath === "/"
              : currentPath === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium text-[var(--muted-strong)] transition hover:bg-black/5 hover:text-[var(--ink)]",
                  active && "bg-black/5 text-[var(--ink)]",
                )}
              >
                {link.label}
              </Link>
            );
          })}

          <details className="group relative">
            <summary className="summary-reset cursor-pointer rounded-full px-4 py-2 text-sm font-medium text-[var(--muted-strong)] transition hover:bg-black/5 hover:text-[var(--ink)]">
              Comparisons
            </summary>
            <div className="absolute right-0 top-[calc(100%+0.85rem)] w-80 rounded-[26px] border border-[color:var(--line)] bg-white/92 p-3 shadow-[0_24px_70px_rgba(18,24,39,0.12)] backdrop-blur-xl">
              {comparisonLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-[18px] px-4 py-3 transition hover:bg-black/5"
                >
                  <div className="text-sm font-semibold text-[var(--ink)]">{link.label}</div>
                  <div className="mt-1 text-xs leading-6 text-[var(--muted)]">
                    {link.description}
                  </div>
                </Link>
              ))}
            </div>
          </details>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="signal" size="sm" className="hidden md:inline-flex">
            <a href={siteConfig.launchStatusUrl}>Launch Status</a>
          </Button>

          <details className="relative lg:hidden">
            <summary className="summary-reset inline-flex size-10 cursor-pointer items-center justify-center rounded-full border border-[color:var(--line)] bg-white/70 text-[var(--ink)]">
              <span className="sr-only">Toggle navigation</span>
              <span className="text-lg leading-none">+</span>
            </summary>
            <div className="absolute right-0 top-[calc(100%+0.85rem)] w-72 rounded-[26px] border border-[color:var(--line)] bg-white/92 p-3 shadow-[0_24px_70px_rgba(18,24,39,0.12)] backdrop-blur-xl">
              <div className="space-y-1">
                {[...headerLinks, ...comparisonLinks].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-[18px] px-4 py-3 text-sm font-medium text-[var(--ink)] transition hover:bg-black/5"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-3">
                <Button asChild variant="signal" className="w-full">
                  <a href={siteConfig.launchStatusUrl}>Launch Status</a>
                </Button>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
