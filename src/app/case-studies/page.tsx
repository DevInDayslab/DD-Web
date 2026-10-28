import { PortfolioPage } from "@/components/portfolio-page";
import { caseStudiesPage } from "@/content/pages/case-studies";
import { buildPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata(caseStudiesPage.meta);

export default function CaseStudiesPage() {
  return (
    <main className="portfolio-page-main">
      <PortfolioPage />
    </main>
  );
}
