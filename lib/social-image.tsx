import { ImageResponse } from "next/og";

import type { ContentPage } from "@/lib/site-content";
import { siteConfig } from "@/lib/site-content";

export const socialImageSize = {
  width: 1200,
  height: 630,
};

export const socialImageContentType = "image/png";

type SocialImageCopy = {
  eyebrow: string;
  title: string;
  description: string;
};

function renderSocialImage({ eyebrow, title, description }: SocialImageCopy) {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(circle at top right, rgba(198,255,77,0.28), transparent 24%), radial-gradient(circle at bottom left, rgba(40,193,255,0.24), transparent 30%), linear-gradient(180deg, #f6f0e2 0%, #fffdf7 100%)",
          color: "#121827",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 32,
            borderRadius: 32,
            border: "1px solid rgba(18, 24, 39, 0.12)",
            background: "rgba(255, 255, 255, 0.74)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "72px",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#5e6778",
            }}
          >
            <span
              style={{
                display: "flex",
                height: 18,
                width: 18,
                borderRadius: 999,
                background: "#c6ff4d",
                boxShadow: "0 0 0 8px rgba(198,255,77,0.18)",
              }}
            />
            {eyebrow}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 920 }}>
            <div
              style={{
                fontSize: 78,
                lineHeight: 1,
                fontWeight: 800,
                letterSpacing: "-0.06em",
              }}
            >
              {title}
            </div>

            <div
              style={{
                fontSize: 32,
                lineHeight: 1.35,
                color: "#323b4d",
              }}
            >
              {description}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: 28,
              color: "#20293d",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 58,
                    height: 58,
                    borderRadius: 999,
                    background: "#121827",
                    color: "#fffdf7",
                    fontSize: 24,
                    fontWeight: 800,
                  }}
                >
                MC
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <div style={{ fontSize: 30, fontWeight: 700 }}>{siteConfig.name}</div>
                <div style={{ color: "#5e6778" }}>{siteConfig.tagline}</div>
              </div>
            </div>
            <div>{siteConfig.url.replace(/^https?:\/\//, "")}</div>
          </div>
        </div>
      </div>
    ),
    socialImageSize,
  );
}

export function renderSiteSocialImage() {
  return renderSocialImage({
    eyebrow: "maxclaw.lol",
    title: "MaxClaw",
    description: "Cloud-hosted AI agent by MiniMax with ecosystem guides, comparisons, and model coverage.",
  });
}

export function renderPageSocialImage(page: ContentPage) {
  return renderSocialImage({
    eyebrow: page.eyebrow,
    title: page.shortTitle,
    description: page.description,
  });
}
