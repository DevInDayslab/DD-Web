import { billingBabaCaseStudyPage } from "@/content/case-studies/billing-baba";
import { daterCaseStudyPage } from "@/content/case-studies/dater-page";
import { entryTicketCaseStudyPage } from "@/content/case-studies/entryticket";
import { invigilCaseStudyPage } from "@/content/case-studies/invigil";
import { turboSupplyCaseStudyPage } from "@/content/case-studies/turbosupply-page";
import type { CaseStudyPageContent } from "@/types/case-study-page";

/** Order here is the order of the sitemap and the previous/next links. */
const caseStudyPages: readonly CaseStudyPageContent[] = [
  daterCaseStudyPage,
  invigilCaseStudyPage,
  billingBabaCaseStudyPage,
  entryTicketCaseStudyPage,
  turboSupplyCaseStudyPage,
];

const caseStudyPagesBySlug: Record<string, CaseStudyPageContent> = Object.fromEntries(
  caseStudyPages.map((page) => [page.slug, page]),
);

export const publishedCaseStudySlugs = Object.keys(caseStudyPagesBySlug);

export function getCaseStudyPageBySlug(slug: string): CaseStudyPageContent | undefined {
  return caseStudyPagesBySlug[slug];
}

export function getAllCaseStudyPages(): CaseStudyPageContent[] {
  return [...caseStudyPages];
}
