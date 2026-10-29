"use client";

import { useMemo, useState } from "react";
import { FaqPageAccordion } from "@/components/faq-page/faq-page-accordion";
import { FaqPageHero } from "@/components/faq-page/faq-page-hero";
import type { FaqPageContent } from "@/types/faq-page";

type FaqPageViewProps = {
  content: FaqPageContent;
};

function normalizeSearchQuery(query: string): string {
  return query.trim().toLowerCase();
}

export function FaqPageView({ content }: FaqPageViewProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSectionId, setActiveSectionId] = useState(content.defaultSectionId);

  const activeSection =
    content.sections.find((section) => section.id === activeSectionId) ?? content.sections[0];

  const sectionNav = useMemo(
    () => content.sections.map((section) => ({ id: section.id, label: section.label })),
    [content.sections],
  );

  const visibleItems = useMemo(() => {
    const normalizedQuery = normalizeSearchQuery(searchQuery);

    return activeSection.items.filter((item) => {
      if (!normalizedQuery) {
        return true;
      }

      return (
        item.question.toLowerCase().includes(normalizedQuery) ||
        item.answer.toLowerCase().includes(normalizedQuery)
      );
    });
  }, [activeSection.items, searchQuery]);

  return (
    <div className="faq-page">
      <FaqPageHero
        hero={content.hero}
        categories={sectionNav}
        activeCategoryId={activeSection.id}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onCategoryChange={setActiveSectionId}
      />
      <section
        id="faq-page-list"
        className="faq-page-list"
        role="tabpanel"
        aria-labelledby={`faq-category-${activeSection.id}`}
      >
        <h2 className="faq-page-list-heading">{activeSection.label}</h2>
        <FaqPageAccordion
          items={visibleItems}
          emptyMessage="No questions match your search in this section."
        />
      </section>
    </div>
  );
}
