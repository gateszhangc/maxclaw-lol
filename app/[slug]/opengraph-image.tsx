import { notFound } from "next/navigation";

import { pagesBySlug } from "@/lib/site-content";
import { renderPageSocialImage, socialImageContentType, socialImageSize } from "@/lib/social-image";

type ImageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const size = socialImageSize;
export const contentType = socialImageContentType;

export default async function PageOpenGraphImage({ params }: ImageProps) {
  const { slug } = await params;
  const page = pagesBySlug[slug];

  if (!page) {
    notFound();
  }

  return renderPageSocialImage(page);
}
