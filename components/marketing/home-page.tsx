import Link from "next/link";
import { ArrowRight, Check, Orbit } from "lucide-react";

import {
  deploymentSteps,
  featureCards,
  featuredRoutes,
  heroStats,
  homeComparisonRows,
  homeFaqs,
  pillarCards,
  searchIntentCards,
  siteConfig,
  siteUrl,
  technologyCards,
  useCases,
} from "@/lib/site-content";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageShell } from "@/components/marketing/page-shell";
import { StructuredData } from "@/components/marketing/structured-data";

export function HomePage() {
  const softwareAppData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "MaxClaw",
    applicationCategory: "AI Agent Platform",
    applicationSubCategory: "Cloud AI agent",
    operatingSystem: "Cloud (Web-based)",
    url: siteUrl,
    description: siteConfig.description,
    image: `${siteUrl}${siteConfig.socialImagePath}`,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    creator: {
      "@type": "Organization",
      name: siteConfig.organizationName,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Public messaging positions MaxClaw as accessible to start and cost-efficient at scale.",
    },
    featureList: featureCards.map((feature) => feature.title),
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.organizationName,
    url: siteUrl,
    description: "MiniMax is the company behind MaxClaw and the MiniMax M2.5 model line.",
    brand: siteConfig.name,
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteUrl,
    description: siteConfig.description,
    inLanguage: "en-US",
    about: siteConfig.keywords.slice(0, 6),
    publisher: {
      "@type": "Organization",
      name: siteConfig.organizationName,
    },
  };

  const webPageData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "What is MaxClaw?",
    url: siteUrl,
    description: siteConfig.description,
    about: [
      "MaxClaw",
      "MiniMax",
      "cloud AI agent",
      "OpenClaw alternative",
    ],
    primaryImageOfPage: `${siteUrl}${siteConfig.socialImagePath}`,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteUrl,
    },
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <PageShell currentPath="/">
      <StructuredData data={[websiteData, webPageData, organizationData, softwareAppData, faqData]} />

      <section className="mx-auto flex w-[min(1180px,calc(100%-1.5rem))] flex-col gap-8 pb-12 pt-12 md:gap-12 md:pt-18">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[40px] border border-[color:var(--line)] bg-white/72 p-7 shadow-[0_24px_80px_rgba(18,24,39,0.08)] backdrop-blur-sm md:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="signal">Cloud-hosted AI agent by MiniMax</Badge>
              <Badge variant="outline">Keyword focus: maxclaw</Badge>
            </div>

            <h1
              className="mt-6 max-w-4xl text-balance font-display text-5xl font-semibold tracking-[-0.07em] text-[var(--ink)] md:text-7xl"
              data-testid="hero-title"
            >
              MaxClaw is MiniMax&apos;s cloud AI agent for zero-ops deployment.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              Use this MaxClaw guide to understand what the product is, how the MiniMax cloud AI
              agent works, why teams evaluate it against OpenClaw, and which capabilities make
              MaxClaw relevant for always-on, messaging-native workflows.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="signal" size="lg">
                <a href={siteConfig.launchStatusUrl} data-testid="primary-cta">
                  Launch Status
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/claw-ecosystem">Explore Ecosystem</Link>
              </Button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[24px] border border-[color:var(--line)] bg-[rgba(18,24,39,0.03)] p-4"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                    {stat.label}
                  </div>
                  <div className="mt-2 font-display text-3xl font-semibold tracking-[-0.05em] text-[var(--ink)]">
                    {stat.value}
                  </div>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[40px] border border-[color:var(--line)] bg-[rgba(11,16,32,0.96)] p-7 text-white shadow-[0_30px_100px_rgba(18,24,39,0.18)] md:p-9">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(198,255,77,0.18),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(40,193,255,0.22),transparent_32%)]" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <Badge variant="subtle" className="border-white/10 bg-white/8 text-white/72">
                  Signal board
                </Badge>
                <Orbit className="size-5 text-[var(--signal)]" />
              </div>

              <div className="mt-6 rounded-[28px] border border-white/10 bg-white/5 p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
                  Positioning
                </div>
                <div className="mt-3 font-display text-3xl tracking-[-0.05em]">
                  Managed cloud layer for the Claw movement
                </div>
                <p className="mt-4 text-sm leading-7 text-white/72">
                  MaxClaw is compelling when a team wants agent behavior now and does not want to
                  own servers, model routing, or connector infrastructure first.
                </p>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  "One-click deployment instead of manual setup",
                  "Long context and persistent memory narrative",
                  "Messaging-native operation in Telegram, Discord, and Slack",
                  "Lower model-cost story for always-on automation",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[22px] border border-white/10 bg-white/5 px-4 py-4"
                  >
                    <span className="mt-0.5 grid size-6 place-items-center rounded-full bg-[var(--signal)] text-[var(--ink)]">
                      <Check className="size-3.5" />
                    </span>
                    <span className="text-sm leading-7 text-white/76">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section
          className="grid gap-5 rounded-[40px] border border-[color:var(--line)] bg-white/72 p-7 shadow-[0_24px_80px_rgba(18,24,39,0.08)] backdrop-blur-sm md:p-10"
          data-testid="search-intent-section"
        >
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
              What is MaxClaw?
            </div>
            <h2 className="font-display text-4xl font-semibold tracking-[-0.05em] text-[var(--ink)] md:text-5xl">
              The shortest useful answer for someone searching MaxClaw
            </h2>
            <p className="text-base leading-8 text-[var(--muted)]">
              MaxClaw is a cloud AI agent from MiniMax. The search intent around MaxClaw usually
              comes down to three questions: what it is, why teams compare it with OpenClaw, and
              whether the managed cloud model is worth the trade-off.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {searchIntentCards.map((card) => (
              <Card key={card.title} className="h-full">
                <CardHeader>
                  {card.tag ? <Badge variant="outline">{card.tag}</Badge> : null}
                  <CardTitle>{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-7 text-[var(--muted)]">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="features" className="grid gap-5" data-testid="features-section">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
              Core features
            </div>
            <h2 className="font-display text-4xl font-semibold tracking-[-0.05em] text-[var(--ink)] md:text-5xl">
              What makes MaxClaw feel like a product, not just a framework
            </h2>
            <p className="text-base leading-8 text-[var(--muted)]">
              The core pitch is not technical novelty on its own. It is reducing the friction
              between wanting an AI agent and actually operating one in the real world.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featureCards.map((feature) => (
              <Card key={feature.title} className="h-full">
                <CardHeader>
                  {feature.tag ? <Badge variant="outline">{feature.tag}</Badge> : null}
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-7 text-[var(--muted)]">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="technology" className="rounded-[40px] border border-[color:var(--line)] bg-white/72 p-7 shadow-[0_24px_80px_rgba(18,24,39,0.08)] backdrop-blur-sm md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="space-y-4">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                Technology stack
              </div>
              <h2 className="font-display text-4xl font-semibold tracking-[-0.05em] text-[var(--ink)] md:text-5xl">
                MiniMax M2.5 is the engine behind the product promise
              </h2>
              <p className="text-base leading-8 text-[var(--muted)]">
                MaxClaw&apos;s strongest claims all trace back to the same technical center line: a
                model architecture designed to keep long-context, tool-using agents affordable
                enough to stay on.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {technologyCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[28px] border border-[color:var(--line)] bg-[rgba(18,24,39,0.03)] p-5"
                >
                  <div className="font-display text-2xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
                    {card.title}
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          {pillarCards.map((pillar) => (
            <Card key={pillar.title} className="h-full bg-[rgba(11,16,32,0.95)] text-white">
              <CardHeader>
                <div className="text-xs uppercase tracking-[0.2em] text-white/45">
                  Advantage pillar
                </div>
                <CardTitle className="text-white">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-7 text-white/72">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section
          id="comparison"
          className="rounded-[40px] border border-[color:var(--line)] bg-white/72 p-7 shadow-[0_24px_80px_rgba(18,24,39,0.08)] backdrop-blur-sm md:p-10"
        >
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
              Ecosystem comparison
            </div>
            <h2 className="font-display text-4xl font-semibold tracking-[-0.05em] text-[var(--ink)] md:text-5xl">
              MaxClaw sits at the managed-cloud center of the category
            </h2>
            <p className="text-base leading-8 text-[var(--muted)]">
              The reason to compare Claw variants is not to pick a winner in the abstract. It is to
              choose the operating model that matches your workflow and tolerance for infrastructure.
            </p>
          </div>

          <div className="mt-7 overflow-x-auto" data-testid="ecosystem-table">
            <table className="min-w-full border-separate border-spacing-y-3 text-left">
              <thead>
                <tr className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  <th className="min-w-40 px-4">Metric</th>
                  <th className="min-w-52 px-4">MaxClaw</th>
                  <th className="min-w-52 px-4">OpenClaw</th>
                  <th className="min-w-52 px-4">KimiClaw</th>
                  <th className="min-w-52 px-4">ZeroClaw</th>
                  <th className="min-w-52 px-4">PicoClaw</th>
                </tr>
              </thead>
              <tbody>
                {homeComparisonRows.map((row) => (
                  <tr key={row.metric}>
                    <td className="rounded-l-[22px] border border-[color:var(--line)] bg-[rgba(18,24,39,0.03)] px-4 py-4 text-sm font-semibold text-[var(--ink)]">
                      {row.metric}
                    </td>
                    <td className="border-y border-[color:var(--line)] bg-[rgba(198,255,77,0.18)] px-4 py-4 text-sm leading-7 text-[var(--ink)]">
                      {row.maxclaw}
                    </td>
                    <td className="border-y border-[color:var(--line)] bg-white/66 px-4 py-4 text-sm leading-7 text-[var(--muted-strong)]">
                      {row.openclaw}
                    </td>
                    <td className="border-y border-[color:var(--line)] bg-white/66 px-4 py-4 text-sm leading-7 text-[var(--muted-strong)]">
                      {row.kimi}
                    </td>
                    <td className="border-y border-[color:var(--line)] bg-white/66 px-4 py-4 text-sm leading-7 text-[var(--muted-strong)]">
                      {row.zero}
                    </td>
                    <td className="rounded-r-[22px] border border-[color:var(--line)] bg-white/66 px-4 py-4 text-sm leading-7 text-[var(--muted-strong)]">
                      {row.pico}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid gap-5 xl:grid-cols-4">
          {useCases.map((item) => (
            <Card key={item.title} className="h-full">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-7 text-[var(--muted)]">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="rounded-[40px] border border-[color:var(--line)] bg-[rgba(11,16,32,0.96)] p-7 text-white shadow-[0_30px_100px_rgba(18,24,39,0.2)] md:p-10">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
              Reading paths
            </div>
            <h2 className="font-display text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Build topical depth, not just a landing page
            </h2>
            <p className="text-base leading-8 text-white/72">
              The reference site wins because it combines a strong homepage with comparison pages,
              ecosystem context, and model-level research. This build follows that same search-first
              architecture.
            </p>
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featuredRoutes.map((route) => (
              <Link
                key={route.title}
                href={route.tag || "/"}
                className="rounded-[28px] border border-white/10 bg-white/6 p-5 transition hover:-translate-y-1 hover:bg-white/10"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
                  {route.tag}
                </div>
                <div className="mt-3 font-display text-2xl font-semibold tracking-[-0.04em] text-white">
                  {route.title}
                </div>
                <p className="mt-3 text-sm leading-7 text-white/72">{route.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section id="deploy" className="rounded-[40px] border border-[color:var(--line)] bg-white/72 p-7 shadow-[0_24px_80px_rgba(18,24,39,0.08)] backdrop-blur-sm md:p-10">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
              Deployment flow
            </div>
            <h2 className="font-display text-4xl font-semibold tracking-[-0.05em] text-[var(--ink)] md:text-5xl">
              The public workflow is designed to feel operational in minutes
            </h2>
            <p className="text-base leading-8 text-[var(--muted)]">
              MaxClaw&apos;s market position depends on collapsing deployment complexity. These are the
              steps the current site architecture is optimized to support.
            </p>
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {deploymentSteps.map((step) => (
              <Card key={step.title} className="h-full">
                <CardHeader>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-7 text-[var(--muted)]">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="faq" className="rounded-[40px] border border-[color:var(--line)] bg-white/72 p-7 shadow-[0_24px_80px_rgba(18,24,39,0.08)] backdrop-blur-sm md:p-10" data-testid="faq-section">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
              FAQ
            </div>
            <h2 className="font-display text-4xl font-semibold tracking-[-0.05em] text-[var(--ink)] md:text-5xl">
              Common questions behind the keyword
            </h2>
            <p className="text-base leading-8 text-[var(--muted)]">
              This FAQ is structured for both search clarity and fast product evaluation, which is
              exactly what a keyword-focused MaxClaw site needs.
            </p>
          </div>
          <Accordion type="single" collapsible className="mt-7 space-y-3">
            {homeFaqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="rounded-[44px] border border-[color:var(--line)] bg-[rgba(11,16,32,0.96)] p-7 text-white shadow-[0_30px_110px_rgba(18,24,39,0.22)] md:p-10">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
              Final CTA
            </div>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
              Use this build as the search front door for MaxClaw.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/72 md:text-lg">
              The current launch endpoint stays internal on purpose. The structure is ready for a
              real deployment link later, but already strong enough to support homepage SEO,
              comparison intent, and keyword education now.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild variant="signal" size="lg">
              <Link href={siteConfig.ctaPath}>Open Launch Status</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 bg-white/6 text-white hover:bg-white/12"
            >
              <Link href="/minimax-m25-model">Read the Model Page</Link>
            </Button>
          </div>
        </section>
      </section>
    </PageShell>
  );
}
