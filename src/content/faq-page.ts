import { site } from "@/config/site";
import { faqPageSections } from "@/content/faq-page-sections";
import { flattenFaqPageItems } from "@/lib/parse-faq-markdown";
import type { FaqPageContent } from "@/types/faq-page";

export const faqPageContent = {
  meta: {
    title: `FAQ · ${site.name}`,
    description:
      "Scope, pricing, process, and what happens after launch. Answers you can check before the first call.",
    path: "/faq",
  },
  hero: {
    eyebrow: "FAQ",
    headline: "Answers you can check.",
    description:
      "Scope, pricing, process, what happens if something slips. The questions founders actually bring to that first call.",
    searchPlaceholder: "Search questions...",
    searchAriaLabel: "Search frequently asked questions",
  },
  sections: faqPageSections,
  defaultSectionId: "fit-scope",
} as const satisfies FaqPageContent;

export const faqPageItems = flattenFaqPageItems(faqPageSections);
