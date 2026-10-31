import { FaqPageView } from "@/components/faq-page/faq-page-view";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/config/site";
import { faqPageContent, faqPageItems } from "@/content/faq-page";
import { buildPageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/schema";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata(faqPageContent.meta);

export default function FaqPage() {
  return (
    <main className="faq-page-main">
      <JsonLd
        data={[
          breadcrumbJsonLd(site, [
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
          faqPageJsonLd(site, faqPageItems),
        ]}
      />
      <FaqPageView content={faqPageContent} />
    </main>
  );
}
