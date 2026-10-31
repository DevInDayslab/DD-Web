import { JsonLd } from "@/components/json-ld";
import { PortfolioPage } from "@/components/portfolio-page";
import { site } from "@/config/site";
import { caseStudiesPage } from "@/content/pages/case-studies";
import { buildPageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/schema";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata(caseStudiesPage.meta);

export default function CaseStudiesPage() {
  return (
    <main className="portfolio-page-main">
      <JsonLd
        data={breadcrumbJsonLd(site, [
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
        ])}
      />
      <PortfolioPage />
    </main>
  );
}
