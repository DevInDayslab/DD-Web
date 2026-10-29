import { assertUniqueIds, assertUniqueSlugs } from "@/lib/unique";
import type { CaseStudy } from "@/types";

export const caseStudies: readonly CaseStudy[] = [];

assertUniqueIds(caseStudies, "case study");
assertUniqueSlugs(caseStudies, "case study");

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getCaseStudySlugs(): string[] {
  return caseStudies.map((study) => study.slug);
}

export {
  getAllCaseStudyPages,
  getCaseStudyPageBySlug,
  publishedCaseStudySlugs,
} from "@/content/case-studies/pages-registry";
