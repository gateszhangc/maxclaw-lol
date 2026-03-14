import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site-content";

export default function robots(): MetadataRoute.Robots {
  const siteHostname = new URL(siteConfig.url).host;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteHostname,
  };
}
