import { ContactPageView } from "@/components/contact-page/contact-page-view";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/config/site";
import { contactPageContent } from "@/content/contact-page";
import { buildPageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, contactPageJsonLd } from "@/lib/schema";
import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata(contactPageContent.meta);

export default function ContactPage() {
  return (
    <main className="contact-page-main">
      <JsonLd
        data={[
          breadcrumbJsonLd(site, [
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          contactPageJsonLd(site, {
            name: contactPageContent.meta.title,
            description: contactPageContent.meta.description,
            path: contactPageContent.meta.path,
          }),
        ]}
      />
      <ContactPageView content={contactPageContent} />
    </main>
  );
}
