import { ContactPageView } from "@/components/contact-page/contact-page-view";
import { contactPageContent } from "@/content/contact-page";
import { buildPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata(contactPageContent.meta);

export default function ContactPage() {
  return (
    <main className="contact-page-main">
      <ContactPageView content={contactPageContent} />
    </main>
  );
}
