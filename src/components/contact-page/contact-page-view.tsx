import { ContactPageCrosslinkSection } from "@/components/contact-page/contact-page-crosslink-section";
import { ContactPageHero } from "@/components/contact-page/contact-page-hero";
import { ContactPageLedgerSection } from "@/components/contact-page/contact-page-ledger-section";
import { ContactPageSplitSection } from "@/components/contact-page/contact-page-split-section";
import type { ContactPageContent } from "@/types/contact-page";

type ContactPageViewProps = {
  content: ContactPageContent;
};

export function ContactPageView({ content }: ContactPageViewProps) {
  return (
    <div className="contact-page">
      <ContactPageHero hero={content.hero} />
      <ContactPageSplitSection split={content.split} />
      <ContactPageLedgerSection ledger={content.ledger} />
      <ContactPageCrosslinkSection crosslink={content.crosslink} />
    </div>
  );
}
