import { existsSync } from "node:fs";
import { join } from "node:path";
import { AboutPageView } from "@/components/about-page/about-page-view";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/config/site";
import { aboutPageContent } from "@/content/about-page";
import { getAllCaseStudyPages } from "@/content/case-studies/pages-registry";
import { founderSectionContent } from "@/content/founder-section";
import type { AboutCaseRow } from "@/types/about-page";
import { buildPageMetadata } from "@/lib/metadata";
import { aboutPageJsonLd, breadcrumbJsonLd } from "@/lib/schema";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata(aboutPageContent.meta);

const caseLogos: Record<string, string> = {
  dater: "/logos/marks/dater.webp",
  invigil: "/logos/marks/invigil.webp",
  "billing-baba": "/logos/marks/billing-baba.webp",
  entryticket: "/logos/marks/entry-ticket.webp",
  turbosupply: "/logos/marks/turbosupply.webp",
};

export default function AboutPage() {
  const caseRows: AboutCaseRow[] = getAllCaseStudyPages().map((page) => ({
    slug: page.slug,
    name: page.intro.breadcrumb.projectName,
    industry: page.intro.breadcrumb.industry,
    headline: page.intro.headlineLines.join(" "),
    logoSrc: caseLogos[page.slug] ?? "",
  }));

  // Until the founder photo is added to /public, show a monogram instead of a grey box.
  const hasPortrait = existsSync(join(process.cwd(), "public", founderSectionContent.portrait.src));

  return (
    <main className="ab-main">
      <JsonLd
        data={[
          breadcrumbJsonLd(site, [
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
          aboutPageJsonLd(site, {
            name: aboutPageContent.meta.title,
            description: aboutPageContent.meta.description,
            path: aboutPageContent.meta.path,
          }),
        ]}
      />
      <AboutPageView content={aboutPageContent} caseRows={caseRows} hasPortrait={hasPortrait} />
    </main>
  );
}
