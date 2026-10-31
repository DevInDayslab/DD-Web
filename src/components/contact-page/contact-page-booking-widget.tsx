"use client";

import { BookingPicker } from "@/components/booking-picker";
import { useOptionalProjectQualifier } from "@/components/project-qualifier/project-qualifier-provider";
import type { ContactPageBookCallContent } from "@/types/contact-page";
import { useState } from "react";

type ContactPageBookingWidgetProps = {
  content: ContactPageBookCallContent;
};

function ClockIcon() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" aria-hidden>
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 4.8V8l2.2 1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** Pick a time here and the full-screen flow opens with it already chosen. */
export function ContactPageBookingWidget({ content }: ContactPageBookingWidgetProps) {
  const qualifier = useOptionalProjectQualifier();
  const [value, setValue] = useState("");

  return (
    <div className="contact-page-booking-card">
      <div className="contact-page-booking-card-header">
        <div className="contact-page-booking-card-copy">
          <p className="contact-page-booking-card-eyebrow">{content.widget.eyebrow}</p>
          <p className="contact-page-booking-card-title">{content.widget.title}</p>
        </div>
        <span className="contact-page-booking-duration">
          <ClockIcon />
          {content.widget.durationLabel}
        </span>
      </div>

      <BookingPicker
        value={value}
        onChange={setValue}
        onPick={(iso) => {
          if (qualifier) {
            // A beat so the choice registers before the flow opens over it.
            window.setTimeout(() => qualifier.open({ slot: iso }), 240);
          }
        }}
      />
    </div>
  );
}
