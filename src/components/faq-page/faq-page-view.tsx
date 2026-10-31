"use client";

import { useMemo, useState } from "react";
import { FaqPageAccordion } from "@/components/faq-page/faq-page-accordion";
import { FaqPageEmptyState } from "@/components/faq-page/faq-page-empty-state";
import { FaqPageHero } from "@/components/faq-page/faq-page-hero";
import type { FaqPageContent } from "@/types/faq-page";

type FaqPageViewProps = {
  content: FaqPageContent;
};

/** Topics worth suggesting when a search finds nothing; only ones that actually return results are shown. */
const SUGGESTED_TERMS = ["pricing", "timeline", "source code", "support", "launch", "payment"] as const;

function normalizeSearchQuery(query: string): string {
  return query.trim().toLowerCase();
}

export function FaqPageView({ content }: FaqPageViewProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSectionId, setActiveSectionId] = useState(content.defaultSectionId);

  const sectionNav = useMemo(
    () => content.sections.map((section) => ({ id: section.id, label: section.label })),
    [content.sections],
  );

  const normalizedQuery = normalizeSearchQuery(searchQuery);

  // Every category stays in the DOM (inactive ones are `hidden`) so crawlers read all answers in the raw HTML.
  // While searching, every category with a match is shown; otherwise only the active tab.
  const panels = useMemo(
    () =>
      content.sections.map((section) => {
        const items = normalizedQuery
          ? section.items.filter(
              (item) =>
                item.question.toLowerCase().includes(normalizedQuery) ||
                item.answer.toLowerCase().includes(normalizedQuery),
            )
          : section.items;
        return { section, items };
      }),
    [content.sections, normalizedQuery],
  );

  const suggestions = useMemo(
    () =>
      SUGGESTED_TERMS.filter((term) =>
        content.sections.some((section) =>
          section.items.some(
            (item) =>
              item.question.toLowerCase().includes(term) || item.answer.toLowerCase().includes(term),
          ),
        ),
      ),
    [content.sections],
  );

  const resultCount = panels.reduce((total, panel) => total + panel.items.length, 0);

  return (
    <div className="faq-page">
      <FaqPageHero
        hero={content.hero}
        categories={sectionNav}
        activeCategoryId={normalizedQuery ? null : activeSectionId}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onCategoryChange={(id) => {
          setSearchQuery("");
          setActiveSectionId(id);
        }}
      />
      <div
        className={`faq-page-results${normalizedQuery && resultCount === 0 ? " faq-page-results--empty" : ""}`}
        aria-live="polite"
      >
        {normalizedQuery && resultCount > 0 ? (
          <p className="faq-page-results-meta">
            {`${resultCount} ${resultCount === 1 ? "result" : "results"} for “${searchQuery.trim()}”`}
          </p>
        ) : null}
        {panels.map(({ section, items }) => {
          const isVisible = normalizedQuery ? items.length > 0 : section.id === activeSectionId;
          return (
            <section
              key={section.id}
              id={`faq-panel-${section.id}`}
              className="faq-page-list"
              role="tabpanel"
              aria-labelledby={`faq-category-${section.id}`}
              hidden={!isVisible}
            >
              <p className="faq-page-category-eyebrow">{section.eyebrow}</p>
              <h2 className="faq-page-category-tagline">{section.tagline}</h2>
              <FaqPageAccordion items={items} emptyMessage="No questions in this section." />
            </section>
          );
        })}
        {normalizedQuery && resultCount === 0 ? (
          <FaqPageEmptyState
            query={searchQuery.trim()}
            suggestions={suggestions}
            onSuggestionSelect={setSearchQuery}
            onClear={() => setSearchQuery("")}
          />
        ) : null}
      </div>
    </div>
  );
}
