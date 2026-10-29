"use client";

import type { FaqPageCategory, FaqPageHeroContent } from "@/types/faq-page";

type FaqPageHeroProps = {
  hero: FaqPageHeroContent;
  categories: readonly FaqPageCategory[];
  activeCategoryId: string;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onCategoryChange: (categoryId: string) => void;
};

export function FaqPageHero({
  hero,
  categories,
  activeCategoryId,
  searchQuery,
  onSearchChange,
  onCategoryChange,
}: FaqPageHeroProps) {
  return (
    <section className="faq-page-hero" aria-labelledby="faq-page-title">
      <div className="faq-page-hero-copy">
        <p className="faq-page-hero-eyebrow">{hero.eyebrow}</p>
        <h1 id="faq-page-title" className="faq-page-hero-headline">
          {hero.headline}
        </h1>
        <p className="faq-page-hero-description">{hero.description}</p>
        <label className="faq-page-hero-search">
          <span className="sr-only">{hero.searchAriaLabel}</span>
          <input
            type="search"
            className="faq-page-hero-search-input"
            placeholder={hero.searchPlaceholder}
            value={searchQuery}
            onChange={(event) => onSearchChange(event.target.value)}
            autoComplete="off"
            enterKeyHint="search"
          />
        </label>
      </div>

      <div
        className="faq-page-hero-categories"
        role="tablist"
        aria-label="FAQ categories"
      >
        {categories.map((category) => {
          const isActive = category.id === activeCategoryId;
          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              id={`faq-category-${category.id}`}
              aria-selected={isActive}
              aria-controls="faq-page-list"
              className={`faq-page-hero-category${isActive ? " faq-page-hero-category--active" : ""}`}
              onClick={() => onCategoryChange(category.id)}
            >
              {category.label}
            </button>
          );
        })}
      </div>
    </section>
  );
}
