import type { Metadata } from "next";

import { HomePage } from "@/components/marketing/home-page";
import { siteConfig } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "MaxClaw | Cloud-hosted AI agent by MiniMax",
  description:
    "MaxClaw is the cloud-hosted AI agent by MiniMax. Learn what MaxClaw does, how it compares with other Claw projects, and why MiniMax M2.5 powers its launch story.",
  keywords: siteConfig.keywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MaxClaw | Cloud-hosted AI agent by MiniMax",
    description:
      "Learn what MaxClaw does, where it fits in the Claw ecosystem, and how MiniMax M2.5 powers the product story.",
    url: "/",
    images: [siteConfig.socialImagePath],
  },
  twitter: {
    card: "summary_large_image",
    title: "MaxClaw | Cloud-hosted AI agent by MiniMax",
    description:
      "Learn what MaxClaw does, where it fits in the Claw ecosystem, and how MiniMax M2.5 powers the product story.",
    images: [siteConfig.socialImagePath],
  },
};

export default function Home() {
  return <HomePage />;
}
