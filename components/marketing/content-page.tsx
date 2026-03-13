import Link from "next/link";
import { ArrowRight, CornerDownRight } from "lucide-react";

import type { ContentPage } from "@/lib/site-content";
import { pageList, pagesBySlug, siteConfig, siteUrl } from "@/lib/site-content";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageShell } from "@/components/marketing/page-shell";
import { StructuredData } from "@/components/marketing/structured-data";

type ContentPageProps = {
  page: ContentPage;
};

export function ContentPageView({ page }: ContentPageProps) {
  const relatedPages = page.relatedSlugs
    .map((slug) => pagesBySlug[slug])
    .filter((entry): entry is ContentPage => Boolean(entry));

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.shortTitle,
        item: `${siteUrl}/${page.slug}`,
      },
    ],
  };

  const faqData =
    page.faqs && page.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: page.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  const articleData = {
    "@context": "https://schema.org",
    "@type": page.comparisonTarget ? "TechArticle" : "Article",
    headline: page.title,
    description: page.description,
    url: `${siteUrl}/${page.slug}`,
    mainEntityOfPage: `${siteUrl}/${page.slug}`,
    author: {
      "@type": "Person",
      name: siteConfig.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.organizationName,
    },
    about: [siteConfig.name, page.shortTitle, page.comparisonTarget].filter(Boolean),
  };

  return (
    <PageShell currentPath={`/${page.slug}`}>
      <StructuredData data={faqData ? [breadcrumbData, articleData, faqData] : [breadcrumbData, articleData]} />

      <section className="mx-auto flex w-[min(1180px,calc(100%-1.5rem))] flex-col gap-10 pb-12 pt-14 md:pt-18">
        <div className="space-y-6 rounded-[36px] border border-[color:var(--line)] bg-white/72 p-7 shadow-[0_24px_80px_rgba(18,24,39,0.08)] backdrop-blur-sm md:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="signal">{page.eyebrow}</Badge>
            <Badge variant="outline">{page.shortTitle}</Badge>
          </div>

          <div className="space-y-4">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
              <Link href="/" className="transition hover:text-[var(--ink)]">
                Home
              </Link>{" "}
              <span className="px-2">/</span>
              <span className="text-[var(--muted-strong)]">{page.shortTitle}</span>
            </div>
            <h1
              className="max-w-4xl font-display text-4xl font-semibold tracking-[-0.05em] text-[var(--ink)] md:text-6xl"
              data-testid={`page-title-${page.slug}`}
            >
              {page.title}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
              {page.intro}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild variant="signal" size="lg">
              <Link href={page.cta.primaryHref}>
                {page.cta.primaryLabel}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/claw-ecosystem">View ecosystem</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {page.summary.map((stat) => (
            <Card key={stat.label} className="h-full">
              <CardHeader>
                <CardDescription className="text-xs uppercase tracking-[0.2em]">
                  {stat.label}
                </CardDescription>
                <CardTitle className="text-3xl md:text-[2rem]">{stat.value}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-7 text-[var(--muted)]">{stat.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {page.matrix ? (
          <section className="rounded-[36px] border border-[color:var(--line)] bg-[rgba(11,16,32,0.95)] p-6 text-white shadow-[0_28px_90px_rgba(18,24,39,0.18)] md:p-8">
            <div className="max-w-2xl space-y-3">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                At a glance
              </div>
              <h2 className="font-display text-3xl tracking-[-0.04em] md:text-4xl">
                MaxClaw vs {page.comparisonTarget}
              </h2>
              <p className="text-sm leading-7 text-white/72 md:text-base">
                Use this simplified decision table to sort cloud convenience from the specific
                advantages of {page.comparisonTarget}.
              </p>
            </div>

            <div className="mt-6 overflow-x-auto" data-testid={`matrix-${page.slug}`}>
              <table className="min-w-full border-separate border-spacing-y-3 text-left">
                <thead>
                  <tr className="text-xs uppercase tracking-[0.2em] text-white/45">
                    <th className="min-w-44 px-4">Metric</th>
                    <th className="min-w-64 px-4">MaxClaw</th>
                    <th className="min-w-64 px-4">{page.comparisonTarget}</th>
                  </tr>
                </thead>
                <tbody>
                  {page.matrix.map((row) => (
                    <tr key={row.metric}>
                      <td className="rounded-l-[22px] border border-white/10 bg-white/5 px-4 py-4 text-sm font-semibold text-white">
                        {row.metric}
                      </td>
                      <td className="border-y border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-white/78">
                        {row.maxclaw}
                      </td>
                      <td className="rounded-r-[22px] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-white/78">
                        {row.other}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ) : null}

        <div className="grid gap-6">
          {page.sections.map((section) => (
            <section
              key={section.title}
              className="rounded-[32px] border border-[color:var(--line)] bg-white/70 p-6 shadow-[0_18px_65px_rgba(18,24,39,0.06)] backdrop-blur-sm md:p-8"
            >
              <div className="max-w-3xl space-y-3">
                {section.eyebrow ? (
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                    {section.eyebrow}
                  </div>
                ) : null}
                <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
                  {section.title}
                </h2>
                <p className="text-base leading-8 text-[var(--muted)]">{section.description}</p>
              </div>

              {section.bullets ? (
                <ul className="mt-6 grid gap-3 md:grid-cols-2">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-[22px] border border-[color:var(--line)] bg-[rgba(18,24,39,0.03)] p-4 text-sm leading-7 text-[var(--muted-strong)]"
                    >
                      <span className="inline-flex gap-3">
                        <CornerDownRight className="mt-1 size-4 shrink-0 text-[var(--muted)]" />
                        <span>{bullet}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {section.cards ? (
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {section.cards.map((card) => (
                    <Card key={card.title} className="h-full">
                      <CardHeader>
                        <CardTitle className="text-2xl">{card.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm leading-7 text-[var(--muted)]">{card.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : null}
            </section>
          ))}
        </div>

        {page.faqs ? (
          <section className="rounded-[36px] border border-[color:var(--line)] bg-white/72 p-6 shadow-[0_22px_70px_rgba(18,24,39,0.08)] backdrop-blur-sm md:p-8">
            <div className="max-w-2xl space-y-3">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                FAQ
              </div>
              <h2 className="font-display text-3xl tracking-[-0.04em] text-[var(--ink)]">
                Quick questions about {page.shortTitle}
              </h2>
            </div>
            <Accordion type="single" collapsible className="mt-6 space-y-3">
              {page.faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        ) : null}

        <section className="grid gap-5 md:grid-cols-[1.5fr_1fr]">
          <div className="rounded-[36px] border border-[color:var(--line)] bg-[rgba(11,16,32,0.96)] p-7 text-white shadow-[0_30px_90px_rgba(18,24,39,0.22)] md:p-8">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
              Next step
            </div>
            <h2 className="mt-3 font-display text-3xl tracking-[-0.04em]">
              {page.cta.title}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72 md:text-base">
              {page.cta.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="signal" size="lg">
                <Link href={page.cta.primaryHref}>{page.cta.primaryLabel}</Link>
              </Button>
              {page.cta.secondaryHref && page.cta.secondaryLabel ? (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/20 bg-white/6 text-white hover:bg-white/12"
                >
                  <Link href={page.cta.secondaryHref}>{page.cta.secondaryLabel}</Link>
                </Button>
              ) : null}
            </div>
          </div>

          <div className="rounded-[36px] border border-[color:var(--line)] bg-white/72 p-6 shadow-[0_20px_65px_rgba(18,24,39,0.08)] backdrop-blur-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
              Related reads
            </div>
            <div className="mt-5 space-y-3">
              {relatedPages.map((related) => (
                <Link
                  key={related.slug}
                  href={`/${related.slug}`}
                  className="block rounded-[22px] border border-[color:var(--line)] bg-[rgba(18,24,39,0.03)] p-4 transition hover:-translate-y-0.5 hover:bg-[rgba(18,24,39,0.06)]"
                >
                  <div className="font-display text-xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
                    {related.shortTitle}
                  </div>
                  <div className="mt-2 text-sm leading-7 text-[var(--muted)]">
                    {related.description}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
          {pageList.map((entry) => (
            <Link
              key={entry.slug}
              href={`/${entry.slug}`}
              className="rounded-full border border-[color:var(--line)] bg-white/58 px-3 py-2 transition hover:bg-white"
            >
              {entry.shortTitle}
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
