import { site } from "@/config/site";
import { faqPageSections } from "@/content/faq-page-sections";
import { flattenFaqPageItems } from "@/lib/parse-faq-markdown";
import type { FaqPageCategorySection, FaqPageContent } from "@/types/faq-page";

/** The four FAQ categories shown on the page. Each pulls its questions from one or more raw sections. */
const faqCategoryDefinitions = [
  {
    id: "fit-proof",
    label: "Fit & Proof",
    eyebrow: "01 — FIT & COMMERCIALS",
    tagline: "Commercial parameters, scope boundaries, and team fit.",
    sectionIds: ["fit-scope", "experience-proof"],
  },
  {
    id: "capabilities-process",
    label: "Capabilities & Process",
    eyebrow: "02 — CAPABILITIES & PROCESS",
    tagline: "What we build with, and how a project actually runs.",
    sectionIds: ["technical-capabilities", "process-communication"],
  },
  {
    id: "pricing-engagement",
    label: "Pricing & Engagement",
    eyebrow: "03 — PRICING & ENGAGEMENT",
    tagline: "What it costs, what's included, and how we work together.",
    sectionIds: ["pricing-engagement"],
  },
  {
    id: "launch-ownership",
    label: "Launch & Ownership",
    eyebrow: "04 — LAUNCH & OWNERSHIP",
    tagline: "What happens at go-live, and who owns everything after.",
    sectionIds: ["launch-post-launch-operations", "ownership-legal"],
  },
] as const;

const faqPageCategories: readonly FaqPageCategorySection[] = faqCategoryDefinitions.map(
  (category) => ({
    id: category.id,
    label: category.label,
    eyebrow: category.eyebrow,
    tagline: category.tagline,
    items: category.sectionIds.flatMap(
      (sectionId) => faqPageSections.find((section) => section.id === sectionId)?.items ?? [],
    ),
  }),
);

export const faqPageContent = {
  meta: {
    title: "FAQ",
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
  sections: faqPageCategories,
  defaultSectionId: faqPageCategories[0].id,
} as const satisfies FaqPageContent;

export const faqPageItems = flattenFaqPageItems(faqPageSections);
