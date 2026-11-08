import type { Metadata } from "next";
import { site } from "@/config/site";
import type { PageMeta } from "@/types";

export function absoluteUrl(path: string): string {
  const withSlash = path === "/" || path.endsWith("/") || /\.[a-z0-9]+$/i.test(path) ? path : `${path}/`;
  return new URL(withSlash, site.url).toString();
}

const ogLocale = site.locale.replace("-", "_");

const robots: Metadata["robots"] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export function buildPageMetadata(meta: PageMeta): Metadata {
  const title = meta.title || site.metadata.title;
  const description = meta.description || site.metadata.description;
  const image = absoluteUrl(meta.ogImage || site.defaultOgImage);
  const url = absoluteUrl(meta.path);
  // The home page carries its own full title; every other page gets the brand suffix from the root template.
  const pageTitle = meta.path === "/" ? { absolute: title } : title;
  const socialTitle = meta.path === "/" ? title : `${title} | ${site.name}`;

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: url,
      languages: { [site.locale]: url, "x-default": url },
    },
    openGraph: {
      type: "website",
      url,
      siteName: site.name,
      title: socialTitle,
      description,
      locale: ogLocale,
      images: [{ url: image, width: 1200, height: 630, alt: socialTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
    robots,
  };
}

export function buildRootMetadata(): Metadata {
  const image = absoluteUrl(site.defaultOgImage);

  return {
    metadataBase: new URL(site.url),
    title: {
      default: site.metadata.title,
      template: `%s | ${site.name}`,
    },
    description: site.metadata.description,
    applicationName: site.name,
    authors: [{ name: site.founder.name, url: site.url }],
    creator: site.founder.name,
    publisher: site.legalName,
    formatDetection: { email: false, address: false, telephone: false },
    robots,
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: ogLocale,
      url: site.url,
      title: site.metadata.title,
      description: site.metadata.description,
      images: [{ url: image, width: 1200, height: 630, alt: site.metadata.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: site.metadata.title,
      description: site.metadata.description,
      images: [image],
    },
  };
}
