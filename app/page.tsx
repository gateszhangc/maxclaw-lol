import type { Metadata } from "next";

import { HomePage } from "@/components/marketing/home-page";
import { siteConfig } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "What Is MaxClaw? MiniMax cloud AI agent overview",
  description:
    "Learn what MaxClaw is, how the MiniMax cloud AI agent works, which MaxClaw features matter most, and how MaxClaw compares with OpenClaw and other Claw projects.",
  keywords: siteConfig.keywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "What Is MaxClaw? MiniMax cloud AI agent overview",
    description:
      "Understand what MaxClaw is, where it fits in the Claw ecosystem, and why MiniMax M2.5 powers the MaxClaw story.",
    url: "/",
    images: [
      {
        url: siteConfig.socialImagePath,
        alt: "MaxClaw AI agent homepage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is MaxClaw? MiniMax cloud AI agent overview",
    description:
      "Understand what MaxClaw is, where it fits in the Claw ecosystem, and why MiniMax M2.5 powers the MaxClaw story.",
    images: [
      {
        url: siteConfig.socialImagePath,
        alt: "MaxClaw AI agent homepage",
      },
    ],
  },
};

export default function Home() {
  return <HomePage />;
}
