import type { MetadataRoute } from "next";

import { pageList, siteConfig } from "@/lib/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...pageList.map((page) => ({
      url: `${siteConfig.url}/${page.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: page.slug === "get-started" ? 0.8 : 0.9,
    })),
  ];
}
