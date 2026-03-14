import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContentPageView } from "@/components/marketing/content-page";
import { pageList, pagesBySlug, siteConfig } from "@/lib/site-content";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return pageList.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = pagesBySlug[slug];

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    keywords: [
      "MaxClaw",
      "MaxClaw AI agent",
      "MiniMax cloud agent",
      page.shortTitle,
      ...(page.comparisonTarget ? [`MaxClaw vs ${page.comparisonTarget}`] : []),
    ],
    alternates: {
      canonical: `/${page.slug}`,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `/${page.slug}`,
      type: "article",
      siteName: siteConfig.name,
      images: [
        {
          url: `/${page.slug}/opengraph-image`,
          alt: `${page.title} on MaxClaw`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [
        {
          url: `/${page.slug}/twitter-image`,
          alt: `${page.title} on MaxClaw`,
        },
      ],
    },
    category: siteConfig.name,
  };
}

export default async function SlugPage({ params }: PageProps) {
  const { slug } = await params;
  const page = pagesBySlug[slug];

  if (!page) {
    notFound();
  }

  return <ContentPageView page={page} />;
}
