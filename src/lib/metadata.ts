import type { Metadata } from "next";
import { site } from "@/config/site";
import type { PageMeta } from "@/types";

function absoluteUrl(path: string): string {
  return new URL(path, site.url).toString();
}

export function buildPageMetadata(meta: PageMeta): Metadata {
  const title = meta.title || site.metadata.title;
  const pageTitle = meta.path === "/" ? { absolute: title } : title;
  const description = meta.description || site.metadata.description;
  const ogImage = meta.ogImage || site.defaultOgImage;
  const url = absoluteUrl(meta.path);

  return {
    title: pageTitle,
    description,
    keywords: site.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      siteName: site.name,
      title,
      description,
      locale: site.locale,
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export function buildRootMetadata(): Metadata {
  return {
    metadataBase: new URL(site.url),
    title: {
      default: site.metadata.title,
      template: `%s · ${site.name}`,
    },
    description: site.metadata.description,
    keywords: site.keywords,
    applicationName: site.name,
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: site.locale,
      url: site.url,
      title: site.metadata.title,
      description: site.metadata.description,
      images: site.defaultOgImage ? [{ url: site.defaultOgImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: site.metadata.title,
      description: site.metadata.description,
      images: site.defaultOgImage ? [site.defaultOgImage] : undefined,
    },
  };
}
