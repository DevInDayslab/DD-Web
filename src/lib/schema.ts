import type { FaqItem, SiteConfig } from "@/types";

function absolute(site: SiteConfig, path: string): string {
  return new URL(path, site.url).toString();
}

export function organizationJsonLd(site: SiteConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    url: site.url,
    description: site.metadata.description,
    email: site.contact.email || undefined,
    areaServed: "Worldwide",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Delhi",
      addressCountry: "IN",
    },
    sameAs: site.social.length > 0 ? site.social.map((link) => link.href) : undefined,
  };
}

/** Turns the FAQ's inline markdown into plain text for structured data, keeping link targets as full URLs. */
function plainTextAnswer(site: SiteConfig, text: string): string {
  return text
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, label: string, href: string) => {
      const url = href.startsWith("/") ? absolute(site, href) : href;
      return `${label} (${url})`;
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
      item: absolute(site, crumb.path.endsWith("/") ? crumb.path : `${crumb.path}/`),
    })),
  };
}

export function caseStudyJsonLd(
  site: SiteConfig,
  study: { name: string; description: string; path: string },
) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: study.name,
    description: study.description,
    url: absolute(site, study.path.endsWith("/") ? study.path : `${study.path}/`),
    publisher: { "@type": "Organization", name: site.legalName, url: site.url },
  };
}
