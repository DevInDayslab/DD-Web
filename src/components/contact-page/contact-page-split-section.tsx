import { ContactPageBookingWidget } from "@/components/contact-page/contact-page-booking-widget";
import { ContactPageMessageForm } from "@/components/contact-page/contact-page-message-form";
import type { ContactPageSplitContent } from "@/types/contact-page";

type ContactPageSplitSectionProps = {
  split: ContactPageSplitContent;
};

export function ContactPageSplitSection({ split }: ContactPageSplitSectionProps) {
  return (
    <section className="contact-page-split" aria-label="Contact options">
      <div className="contact-page-split-inner">
        <div className="contact-page-split-column contact-page-split-column--book">
          <h2 className="contact-page-split-title">{split.bookCall.title}</h2>
          <p className="contact-page-split-description">{split.bookCall.description}</p>
          <ContactPageBookingWidget content={split.bookCall} />
        </div>

        <div className="contact-page-split-divider" aria-hidden />

        <div className="contact-page-split-column contact-page-split-column--message">
          <h2 className="contact-page-split-title">{split.message.title}</h2>
          <p className="contact-page-split-description">{split.message.description}</p>
          <ContactPageMessageForm content={split.message} />
        </div>
      </div>
    </section>
  );
}
