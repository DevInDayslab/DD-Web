import type { FaqItem, SiteConfig } from "@/types";

/** Stable identifiers so every page's structured data points at the same organization. */
function orgId(site: SiteConfig): string {
  return `${new URL("/", site.url).toString()}#organization`;
}

function websiteId(site: SiteConfig): string {
  return `${new URL("/", site.url).toString()}#website`;
}

function personId(site: SiteConfig): string {
  return `${new URL("/", site.url).toString()}#founder`;
}

function url(site: SiteConfig, path: string): string {
  return new URL(path.endsWith("/") ? path : `${path}/`, site.url).toString();
}

function imageUrl(site: SiteConfig, path: string): string {
  return new URL(path, site.url).toString();
}

const COUNTRY_NAMES: Record<string, string> = {
  US: "United States",
  CA: "Canada",
  GB: "United Kingdom",
  AU: "Australia",
  IE: "Ireland",
  DE: "Germany",
  NL: "Netherlands",
  NZ: "New Zealand",
};

export function organizationJsonLd(site: SiteConfig) {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": orgId(site),
    name: site.legalName,
    url: site.url,
    logo: {
      "@type": "ImageObject",
      url: imageUrl(site, "/logo.png"),
      width: 512,
      height: 512,
    },
    image: imageUrl(site, site.defaultOgImage),
    description: site.metadata.description,
    slogan: "Turn your idea into a product built to last.",
    email: site.contact.email || undefined,
    founder: { "@id": personId(site) },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Delhi",
      addressCountry: "IN",
    },
    areaServed: site.servesCountries.map((code) => ({
      "@type": "Country",
      name: COUNTRY_NAMES[code] ?? code,
    })),
    knowsAbout: [
      "Mobile app development",
      "iOS app development",
      "Android app development",
      "MVP development",
      "Web application development",
      "Flutter",
      "Swift and SwiftUI",
      "Kotlin",
      "Node.js",
    ],
    sameAs: site.founder.sameAs.length > 0 ? site.founder.sameAs : undefined,
  };
}

export function founderJsonLd(site: SiteConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId(site),
    name: site.founder.name,
    jobTitle: site.founder.jobTitle,
    worksFor: { "@id": orgId(site) },
    url: url(site, "/about"),
    sameAs: site.founder.sameAs,
  };
}

export function websiteJsonLd(site: SiteConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId(site),
    url: site.url,
    name: site.name,
    inLanguage: site.locale,
    publisher: { "@id": orgId(site) },
  };
}

export type OfferTier = {
  name: string;
  description: string;
  /** Lowest price in US dollars, when the tier has a published starting price. */
  fromPriceUsd?: number;
};

/** The three build tiers as a catalog of services, with the published "from" prices. */
export function serviceCatalogJsonLd(site: SiteConfig, tiers: readonly OfferTier[]) {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "App development services",
    url: `${url(site, "/")}#pricing`,
    itemListElement: tiers.map((tier) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: tier.name,
        description: tier.description,
        serviceType: "Custom app development",
        provider: { "@id": orgId(site) },
      },
      ...(tier.fromPriceUsd
        ? {
            priceCurrency: "USD",
            priceSpecification: {
              "@type": "PriceSpecification",
              minPrice: tier.fromPriceUsd,
              priceCurrency: "USD",
            },
          }
        : {}),
    })),
  };
}

export function videoJsonLd(
  site: SiteConfig,
  video: {
    name: string;
    description: string;
    thumbnailPath: string;
    contentPath: string;
    uploadDate: string;
    durationSeconds: number;
    transcript: string;
  },
) {
  const minutes = Math.floor(video.durationSeconds / 60);
  const seconds = video.durationSeconds % 60;
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.name,
    description: video.description,
    thumbnailUrl: imageUrl(site, video.thumbnailPath),
    contentUrl: imageUrl(site, video.contentPath),
    uploadDate: video.uploadDate,
    duration: `PT${minutes > 0 ? `${minutes}M` : ""}${seconds}S`,
    transcript: video.transcript,
    inLanguage: "en",
    publisher: { "@id": orgId(site) },
  };
}

/** Turns the FAQ's inline markdown into plain text for structured data, keeping link targets as full URLs. */
function plainTextAnswer(site: SiteConfig, text: string): string {
  return text
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, label: string, href: string) => {
      const target = href.startsWith("/") ? new URL(href, site.url).toString() : href;
      return `${label} (${target})`;
    })
    .replace(/\*\*(.+?)\*\*/g, "$1");
}

export function faqPageJsonLd(site: SiteConfig, items: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: plainTextAnswer(site, item.answer),
      },
    })),
  };
}

export type BreadcrumbCrumb = { name: string; path: string };

export function breadcrumbJsonLd(site: SiteConfig, crumbs: readonly BreadcrumbCrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: url(site, crumb.path),
    })),
  };
}

type PageSchemaInput = { name: string; description: string; path: string };

export function aboutPageJsonLd(site: SiteConfig, page: PageSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: page.name,
    description: page.description,
    url: url(site, page.path),
    inLanguage: site.locale,
    isPartOf: { "@id": websiteId(site) },
    about: { "@id": orgId(site) },
    mainEntity: { "@id": orgId(site) },
  };
}

export function contactPageJsonLd(site: SiteConfig, page: PageSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: page.name,
    description: page.description,
    url: url(site, page.path),
    inLanguage: site.locale,
    isPartOf: { "@id": websiteId(site) },
    about: { "@id": orgId(site) },
  };
}

export function caseStudyCollectionJsonLd(
  site: SiteConfig,
  page: PageSchemaInput,
  studies: readonly { name: string; description: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: page.name,
    description: page.description,
    url: url(site, page.path),
    inLanguage: site.locale,
    isPartOf: { "@id": websiteId(site) },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: studies.map((study, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: url(site, study.path),
        name: study.name,
      })),
    },
  };
}

export function caseStudyJsonLd(
  site: SiteConfig,
  study: {
    name: string;
    headline: string;
    description: string;
    path: string;
    imagePath: string;
    industry: string;
    liveUrl?: string;
  },
) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: study.headline,
    headline: study.headline,
    description: study.description,
    url: url(site, study.path),
    mainEntityOfPage: url(site, study.path),
    inLanguage: site.locale,
    image: imageUrl(site, study.imagePath),
    genre: "Case study",
    about: {
      "@type": "SoftwareApplication",
      name: study.name,
      applicationCategory: study.industry,
      ...(study.liveUrl ? { url: study.liveUrl } : {}),
    },
    isPartOf: { "@id": websiteId(site) },
    author: { "@id": orgId(site) },
    publisher: { "@id": orgId(site) },
  };
}
