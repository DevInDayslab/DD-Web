import { daterCaseStudyPage } from "@/content/case-studies/dater-page";
import type { CaseStudyPageContent } from "@/types/case-study-page";

const caseStudyPagesBySlug: Record<string, CaseStudyPageContent> = {
  [daterCaseStudyPage.slug]: daterCaseStudyPage,
};

export const publishedCaseStudySlugs = Object.keys(caseStudyPagesBySlug);

export function getCaseStudyPageBySlug(slug: string): CaseStudyPageContent | undefined {
  return caseStudyPagesBySlug[slug];
}

export function getAllCaseStudyPages(): CaseStudyPageContent[] {
  return Object.values(caseStudyPagesBySlug);
}
