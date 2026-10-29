"use client";

import { useId, useState } from "react";
import { FaqChevronIcon } from "@/components/faq-chevron-icon";
import { FaqInlineMarkdown } from "@/components/faq-inline-markdown";
import type { FaqPageItem } from "@/types/faq-page";

type FaqPageAccordionProps = {
  items: readonly FaqPageItem[];
  emptyMessage: string;
};

export function FaqPageAccordion({ items, emptyMessage }: FaqPageAccordionProps) {
  const listId = useId();
  const [openItemIds, setOpenItemIds] = useState<ReadonlySet<string>>(() => new Set());

  const toggleItem = (itemId: string) => {
    setOpenItemIds((current) => {
      const next = new Set(current);
      if (next.has(itemId)) {
        next.delete(itemId);
      } else {
        next.add(itemId);
      }
      return next;
    });
  };

  if (items.length === 0) {
    return <p className="faq-page-empty">{emptyMessage}</p>;
  }

  return (
    <div className="faq-page-accordion" role="presentation">
      {items.map((item) => {
        const isOpen = openItemIds.has(item.id);
        const panelId = `${listId}-${item.id}-panel`;
        const triggerId = `${listId}-${item.id}-trigger`;

        return (
          <div key={item.id} className={`faq-item${isOpen ? " faq-item-open" : ""}`}>
            <h2 className="faq-item-heading">
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
            </h2>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              aria-hidden={!isOpen}
              className="faq-item-panel"
            >
              <div className="faq-item-panel-inner">
                <FaqInlineMarkdown text={item.answer} className="faq-item-answer" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
