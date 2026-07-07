import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "./constants";

interface BuildMetadataArgs {
  title: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}

/**
 * Builds a consistent Metadata object for every route.
 * Ensures every page ships a canonical URL, OpenGraph, and Twitter card
 * without each page having to repeat that boilerplate.
 */
export function buildMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = "",
  noIndex = false,
}: BuildMetadataArgs): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
    },
  };
}
