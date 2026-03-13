import Link from "next/link";

import { PageShell } from "@/components/marketing/page-shell";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <PageShell currentPath="/404">
      <section className="mx-auto flex min-h-[70vh] w-[min(1180px,calc(100%-1.5rem))] items-center py-16">
        <div className="w-full rounded-[40px] border border-[color:var(--line)] bg-white/72 p-8 shadow-[0_24px_80px_rgba(18,24,39,0.08)] backdrop-blur-sm md:p-12">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
            Not found
          </div>
          <h1 className="mt-4 font-display text-5xl font-semibold tracking-[-0.06em] text-[var(--ink)]">
            This MaxClaw page does not exist.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
            Use the homepage, ecosystem guide, or launch status page to jump back into the site.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="signal" size="lg">
              <Link href="/">Back to homepage</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/get-started">Launch Status</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
