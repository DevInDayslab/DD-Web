"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { FaqChevronIcon } from "@/components/faq-chevron-icon";
import type { FaqSectionContent } from "@/types/faq-section";

type FaqAccordionProps = {
  content: Pick<FaqSectionContent, "defaultOpenItemId" | "items" | "seeAll">;
};

export function FaqAccordion({ content }: FaqAccordionProps) {
  const listId = useId();
  const [openItemId, setOpenItemId] = useState<string | null>(content.defaultOpenItemId);

  const toggleItem = (itemId: string) => {
    setOpenItemId((current) => (current === itemId ? null : itemId));
  };

  return (
    <div className="faq-section-body">
      <div className="faq-accordion" role="presentation">
        {content.items.map((item) => {
          const isOpen = openItemId === item.id;
          const panelId = `${listId}-${item.id}-panel`;
          const triggerId = `${listId}-${item.id}-trigger`;

          return (
            <div
              key={item.id}
              className={`faq-item${isOpen ? " faq-item-open" : ""}`}
            >
              <h3 className="faq-item-heading">
                <button
                  type="button"
                  id={triggerId}
                  className="faq-item-trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleItem(item.id)}
                >
                  <span className="faq-item-question">{item.question}</span>
                  <span className={`faq-item-chevron${isOpen ? " faq-item-chevron-open" : ""}`}>
                    <FaqChevronIcon className="faq-item-chevron-icon" />
                  </span>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={triggerId}
                aria-hidden={!isOpen}
                className="faq-item-panel"
              >
                <div className="faq-item-panel-inner">
                  <p className="faq-item-answer">{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="faq-see-all-wrap">
        <Link className="faq-see-all-link" href={content.seeAll.href} aria-label={content.seeAll.ariaLabel}>
          <span>{content.seeAll.label}</span>
          <span className="faq-see-all-arrow" aria-hidden>
            <svg viewBox="0 0 9 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 2H7.5M7.5 2L5.5 0.2M7.5 2L5.5 3.8"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
}
