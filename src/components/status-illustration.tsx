/** Line illustrations for page-level states (404, error), drawn in the same style as the FAQ empty state. */
export function StatusIllustration({ kind }: { kind: "lost" | "error" }) {
  return (
    <svg className="status-illustration" viewBox="0 0 240 160" fill="none" aria-hidden>
      <rect x="62" y="30" width="120" height="92" rx="16" className="status-card status-card--back" />
      <rect x="52" y="42" width="120" height="92" rx="16" className="status-card" />
      <rect x="68" y="60" width="52" height="7" rx="3.5" className="status-line status-line--strong" />
      <rect x="68" y="76" width="88" height="6" rx="3" className="status-line" />
      <rect x="68" y="90" width="72" height="6" rx="3" className="status-line" />
      <rect x="68" y="104" width="44" height="6" rx="3" className="status-line" />

      {kind === "lost" ? (
        <g className="status-float">
          {/* a compass needle that has lost north */}
          <circle cx="164" cy="98" r="32" className="status-glass" />
          <circle cx="164" cy="98" r="32" className="status-ring" />
          <path d="M164 78L172 98L164 118L156 98Z" className="status-needle" />
          <circle cx="164" cy="98" r="3.2" className="status-pivot" />
        </g>
      ) : (
        <g className="status-float">
          <circle cx="164" cy="98" r="32" className="status-glass" />
          <circle cx="164" cy="98" r="32" className="status-ring" />
          <path d="M164 82V100" className="status-mark" strokeLinecap="round" />
          <path d="M164 111V111.5" className="status-mark" strokeLinecap="round" />
        </g>
      )}

      <circle cx="30" cy="48" r="3" className="status-dot" />
      <circle cx="214" cy="40" r="2.5" className="status-dot" />
      <circle cx="206" cy="134" r="2" className="status-dot" />
    </svg>
  );
}
