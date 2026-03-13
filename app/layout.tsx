import type { Metadata } from "next";
import { IBM_Plex_Sans, Syne } from "next/font/google";

import "./globals.css";
import { siteConfig } from "@/lib/site-content";
import { Analytics } from "@/components/marketing/analytics";

const bodyFont = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Syne({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.projectName,
  referrer: "origin-when-cross-origin",
  title: {
    default: "MaxClaw | Cloud-hosted AI agent by MiniMax",
    template: "%s | MaxClaw",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.authorName }],
  creator: siteConfig.authorName,
  publisher: siteConfig.organizationName,
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MaxClaw | Cloud-hosted AI agent by MiniMax",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "MaxClaw",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: siteConfig.socialImagePath,
        width: 1200,
        height: 630,
        alt: "MaxClaw cloud-hosted AI agent by MiniMax",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MaxClaw | Cloud-hosted AI agent by MiniMax",
    description: siteConfig.description,
    images: [siteConfig.socialImagePath],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }, { url: "/favicon.ico" }],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
