"use client";

import { useEffect, useRef } from "react";
import type { FaqPageCategory, FaqPageHeroContent } from "@/types/faq-page";

type FaqPageHeroProps = {
  hero: FaqPageHeroContent;
  categories: readonly FaqPageCategory[];
  /** Null while searching: results span every category, so no tab is selected. */
  activeCategoryId: string | null;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onCategoryChange: (categoryId: string) => void;
};

function SearchIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className="faq-page-search-icon">
      <circle cx="9" cy="9" r="5.75" stroke="currentColor" strokeWidth="1.6" />
      <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ClearIcon() {
  return (
    <svg viewBox="0 0 12 12" fill="none" aria-hidden width="10" height="10">
      <path d="M2 2L10 10M10 2L2 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function FaqPageHero({
  hero,
  categories,
  activeCategoryId,
  searchQuery,
  onSearchChange,
  onCategoryChange,
}: FaqPageHeroProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  // Press "/" anywhere on the page to jump to search.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const typing =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target?.isContentEditable;
      if (event.key === "/" && !typing && !event.metaKey && !event.ctrlKey && !event.altKey) {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <section className="faq-page-hero" aria-labelledby="faq-page-title">
      <div className="faq-page-hero-copy">
        <p className="faq-page-hero-eyebrow">{hero.eyebrow}</p>
        <h1 id="faq-page-title" className="faq-page-hero-headline">
          {hero.headline}
        </h1>
        <p className="faq-page-hero-description">{hero.description}</p>
      </div>

      {/* Search and tabs share one column, so the search bar is exactly as wide as the tab row. */}
      <div className="faq-page-hero-controls">
        <div className="faq-page-search" role="search">
          <SearchIcon />
          <input
            ref={inputRef}
            type="search"
            className="faq-page-search-input"
            placeholder={hero.searchPlaceholder}
            aria-label={hero.searchAriaLabel}
            value={searchQuery}
            onChange={(event) => onSearchChange(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                if (searchQuery) {
                  onSearchChange("");
                } else {
                  inputRef.current?.blur();
                }
              }
            }}
            autoComplete="off"
            spellCheck={false}
            enterKeyHint="search"
          />
          {searchQuery ? (
            <button
              type="button"
              className="faq-page-search-clear"
              aria-label="Clear search"
              onClick={() => {
                onSearchChange("");
                inputRef.current?.focus();
              }}
            >
              <ClearIcon />
            </button>
          ) : (
            <kbd className="faq-page-search-hint" aria-hidden>
              /
            </kbd>
          )}
        </div>

        <div className="faq-page-hero-categories" role="tablist" aria-label="FAQ categories">
          {categories.map((category) => {
            const isActive = category.id === activeCategoryId;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                id={`faq-category-${category.id}`}
                aria-selected={isActive}
                aria-controls={`faq-panel-${category.id}`}
                className={`faq-page-hero-category${isActive ? " faq-page-hero-category--active" : ""}`}
                onClick={() => onCategoryChange(category.id)}
              >
                {category.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
