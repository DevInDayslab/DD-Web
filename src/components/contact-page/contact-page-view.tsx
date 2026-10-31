import { ContactPageCrosslinkSection } from "@/components/contact-page/contact-page-crosslink-section";
import { ContactPageMain } from "@/components/contact-page/contact-page-main";
import type { ContactPageContent } from "@/types/contact-page";

type ContactPageViewProps = {
  content: ContactPageContent;
};

export function ContactPageView({ content }: ContactPageViewProps) {
  return (
    <div className="contact-page">
      <ContactPageMain content={content} />
      <ContactPageCrosslinkSection crosslink={content.crosslink} />
    </div>
  );
}
