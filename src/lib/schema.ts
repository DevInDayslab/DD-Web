import type { CaseStudy, FaqItem, SiteConfig } from "@/types";

export function organizationJsonLd(site: SiteConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    url: site.url,
    email: site.contact.email || undefined,
  };
}

export function faqPageJsonLd(items: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function caseStudyJsonLd(site: SiteConfig, study: CaseStudy) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: study.title,
    description: study.summary,
    url: new URL(`/work/${study.slug}`, site.url).toString(),
    video: {
      "@type": "VideoObject",
      contentUrl: study.video.src,
      thumbnailUrl: study.video.posterSrc,
      encodingFormat: study.video.mimeType,
    },
  };
}
