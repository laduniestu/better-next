import { APP_NAME } from "@/constant";
import env from "@/env";
import type { Metadata } from "next/types";

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: env.NEXT_PUBLIC_APP_URL,
      images: "/og.jpg",
      siteName: APP_NAME,
      ...override.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      creator: "@laduniestu",
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: "/og.jpg",
      ...override.twitter,
    },
    metadataBase: override.metadataBase ?? new URL(env.NEXT_PUBLIC_APP_URL),
  };
}
