import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site-content";

const brandIconVersion = "20260314";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f6f0e2",
    theme_color: "#121827",
    icons: [
      {
        src: `/icon.svg?v=${brandIconVersion}`,
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: `/favicon.ico?v=${brandIconVersion}`,
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
