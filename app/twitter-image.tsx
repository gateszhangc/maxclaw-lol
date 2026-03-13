import { renderSiteSocialImage, socialImageContentType, socialImageSize } from "@/lib/social-image";

export const size = socialImageSize;
export const contentType = socialImageContentType;
export const alt = "MaxClaw cloud-hosted AI agent by MiniMax";

export default function TwitterImage() {
  return renderSiteSocialImage();
}
