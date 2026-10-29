import { FaqPageView } from "@/components/faq-page/faq-page-view";
import { JsonLd } from "@/components/json-ld";
import { fontFaqHeadline } from "@/config/fonts";
import { faqPageContent, faqPageItems } from "@/content/faq-page";
import { buildPageMetadata } from "@/lib/metadata";
import { faqPageJsonLd } from "@/lib/schema";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata(faqPageContent.meta);

export default function FaqPage() {
  return (
    <main className={`faq-page-main ${fontFaqHeadline.variable}`}>
      <JsonLd data={faqPageJsonLd(faqPageItems)} />
      <FaqPageView content={faqPageContent} />
    </main>
  );
}
