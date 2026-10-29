import { CaseStudyPageView } from "@/components/case-study/case-study-page-view";
import {
  getCaseStudyPageBySlug,
  publishedCaseStudySlugs,
} from "@/content/case-studies/pages-registry";
import { buildPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type CaseStudyDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return publishedCaseStudySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CaseStudyDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = getCaseStudyPageBySlug(slug);
  if (!content) {
    return {};
  }
  return buildPageMetadata(content.meta);
}

export default async function CaseStudyDetailPage({ params }: CaseStudyDetailPageProps) {
  const { slug } = await params;
  const content = getCaseStudyPageBySlug(slug);
  if (!content) {
    notFound();
  }

  return (
    <main className="case-study-page-main">
      <CaseStudyPageView content={content} />
    </main>
  );
}
