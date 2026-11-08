import { JsonLd } from "@/components/json-ld";
import { PortfolioPage } from "@/components/portfolio-page";
import { site } from "@/config/site";
import { caseStudiesPage } from "@/content/pages/case-studies";
import { buildPageMetadata } from "@/lib/metadata";
import { getAllCaseStudyPages } from "@/content/case-studies/pages-registry";
import { breadcrumbJsonLd, caseStudyCollectionJsonLd } from "@/lib/schema";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata(caseStudiesPage.meta);

export default function CaseStudiesPage() {
  return (
    <main className="portfolio-page-main">
      <JsonLd
        data={[
          breadcrumbJsonLd(site, [
            { name: "Home", path: "/" },
            { name: "Case Studies", path: "/case-studies" },
          ]),
          caseStudyCollectionJsonLd(
            site,
            {
              name: caseStudiesPage.meta.title,
              description: caseStudiesPage.meta.description,
              path: caseStudiesPage.meta.path,
            },
            getAllCaseStudyPages().map((page) => ({
              name: page.intro.breadcrumb.projectName,
              description: page.meta.description,
              path: page.meta.path,
            })),
          ),
        ]}
      />
      <PortfolioPage />
    </main>
  );
}
