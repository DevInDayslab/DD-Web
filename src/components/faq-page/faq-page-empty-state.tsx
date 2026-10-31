"use client";

import Link from "next/link";

type FaqPageEmptyStateProps = {
  query: string;
  suggestions: readonly string[];
  onSuggestionSelect: (term: string) => void;
  onClear: () => void;
};

function EmptyIllustration() {
  return (
    <svg
      className="faq-page-empty-illustration"
      viewBox="0 0 220 150"
      fill="none"
      aria-hidden
    >
      {/* Stacked answer cards */}
      <rect x="44" y="22" width="132" height="86" rx="14" className="faq-page-empty-card faq-page-empty-card--back" />
      <rect x="34" y="34" width="132" height="86" rx="14" className="faq-page-empty-card" />
      <rect x="50" y="52" width="64" height="7" rx="3.5" className="faq-page-empty-line faq-page-empty-line--strong" />
      <rect x="50" y="68" width="96" height="6" rx="3" className="faq-page-empty-line" />
      <rect x="50" y="82" width="80" height="6" rx="3" className="faq-page-empty-line" />
      <rect x="50" y="96" width="52" height="6" rx="3" className="faq-page-empty-line" />

      {/* Magnifier hovering over the cards */}
      <g className="faq-page-empty-lens">
        <circle cx="146" cy="86" r="30" className="faq-page-empty-lens-glass" />
        <circle cx="146" cy="86" r="30" className="faq-page-empty-lens-ring" />
        <path d="M168 108L186 126" className="faq-page-empty-lens-handle" strokeLinecap="round" />
        <path
          d="M139.5 80.5C139.5 76.9 142.4 74.5 146 74.5C149.6 74.5 152.5 76.8 152.5 80.1C152.5 83.9 148.7 84.4 147.5 87.2M146 95.5V95.6"
          className="faq-page-empty-mark"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Small sparkles */}
      <circle cx="22" cy="40" r="3" className="faq-page-empty-dot" />
      <circle cx="198" cy="34" r="2.5" className="faq-page-empty-dot" />
      <circle cx="190" cy="68" r="2" className="faq-page-empty-dot" />
    </svg>
  );
}

export function FaqPageEmptyState({
  query,
  suggestions,
  onSuggestionSelect,
  onClear,
}: FaqPageEmptyStateProps) {
  return (
    <div className="faq-page-empty-state" role="status">
      <EmptyIllustration />
      <h2 className="faq-page-empty-title">
        Nothing matches <em>“{query}”</em>
      </h2>
      <p className="faq-page-empty-copy">
        Try a simpler word, or start from one of the topics people ask about most.
      </p>

      {suggestions.length > 0 ? (
        <ul className="faq-page-empty-chips" aria-label="Suggested searches">
          {suggestions.map((term) => (
            <li key={term}>
              <button
                type="button"
                className="faq-page-empty-chip"
                onClick={() => onSuggestionSelect(term)}
              >
                {term}
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="faq-page-empty-actions">
        <button type="button" className="faq-page-empty-clear" onClick={onClear}>
          Clear search
        </button>
        <span className="faq-page-empty-divider" aria-hidden>
          ·
        </span>
        <Link href="/contact" className="faq-page-empty-contact">
          Ask us directly <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
