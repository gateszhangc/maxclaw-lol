import Link from "next/link";

import { footerGroups, siteConfig } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--line)] bg-[rgba(255,255,255,0.62)]">
      <div className="mx-auto flex w-[min(1180px,calc(100%-1.5rem))] flex-col gap-10 py-12 md:flex-row md:justify-between">
        <div className="max-w-md">
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-full bg-[var(--ink)] text-sm font-bold text-[var(--paper)]">
              MX
            </span>
            <div>
              <div className="font-display text-xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
                {siteConfig.name}
              </div>
              <div className="text-sm text-[var(--muted)]">{siteConfig.tagline}</div>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--muted)]">
            A search-first product site for understanding MaxClaw, the wider Claw ecosystem,
            and the MiniMax model layer that powers it.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                {group.title}
              </h2>
              <div className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm font-medium text-[var(--ink)] transition hover:text-[var(--muted-strong)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
