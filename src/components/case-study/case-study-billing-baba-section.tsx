import { Fragment } from "react";
import type { CaseStudyBillingBabaSectionBlock, CaseStudySectionIndex } from "@/types/case-study-narrative";

function SectionIndex({ index }: { index: CaseStudySectionIndex }) {
  return (
    <p className="case-study-narrative-index">
      <span>{index.number}</span>
      <span className="case-study-narrative-index-sep" aria-hidden>
        /
      </span>
      <span>{index.title}</span>
    </p>
  );
}

function Prose({ paragraphs }: { paragraphs: readonly string[] }) {
  return (
    <div className="case-study-narrative-prose">
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}

function PreviousAttemptSection({
  block,
}: {
  block: Extract<CaseStudyBillingBabaSectionBlock, { variant: "previous-attempt" }>;
}) {
  const sid = `narrative-${block.id}`;
  return (
    <section className="case-study-narrative-section case-study-bb-prev" id={sid}>
      <SectionIndex index={block.index} />
      <h2 id={`${sid}-headline`} className="case-study-narrative-headline">
        {block.headline}
      </h2>
      <Prose paragraphs={block.paragraphs} />

      <div className="case-study-bb-prev-split">
        <div className="case-study-bb-prev-card case-study-bb-prev-card--promised">
          <h3 className="case-study-bb-prev-card-title">{block.promised.title}</h3>
          <ul className="case-study-bb-prev-list">
            {block.promised.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="case-study-bb-prev-card case-study-bb-prev-card--delivered">
          <h3 className="case-study-bb-prev-card-title">{block.delivered.title}</h3>
          <ul className="case-study-bb-prev-list">
            {block.delivered.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="case-study-bb-electron-diagram" aria-label="Electron wrapper layers">
            <div className="case-study-bb-electron-window">
              <div className="case-study-bb-electron-chrome" aria-hidden>
                <span className="case-study-bb-electron-dot" />
                <span className="case-study-bb-electron-dot" />
                <span className="case-study-bb-electron-dot" />
              </div>
              <div className="case-study-bb-electron-body">
                <span className="case-study-bb-electron-layer case-study-bb-electron-layer--shell">
                  Electron shell
                </span>
                <span className="case-study-bb-electron-layer case-study-bb-electron-layer--web">Web app</span>
              </div>
            </div>
            <p className="case-study-bb-electron-caption">Website limitations · OS integration gap</p>
          </div>
        </div>
      </div>

      {block.pullQuote ? (
        <blockquote className="case-study-narrative-quote case-study-bb-prev-quote">
          <p>{block.pullQuote.quote}</p>
          <footer>{block.pullQuote.attribution}</footer>
        </blockquote>
      ) : null}
    </section>
  );
}

function RebuildTimelineSection({
  block,
}: {
  block: Extract<CaseStudyBillingBabaSectionBlock, { variant: "rebuild-timeline" }>;
}) {
  const sid = `narrative-${block.id}`;
  return (
    <section className="case-study-narrative-section case-study-bb-rebuild" id={sid}>
      <SectionIndex index={block.index} />
      <h2 id={`${sid}-headline`} className="case-study-narrative-headline">
        {block.headline}
      </h2>
      <Prose paragraphs={block.paragraphs} />

      <div className="case-study-bb-timeline" aria-label="Rebuild timeline">
        <p className="case-study-bb-struck" aria-label="Retired starting point">
          <span className="case-study-bb-struck-label">{block.struckLabel}</span>
        </p>
        <ol className="case-study-bb-timeline-steps">
          {block.timeline.map((step, i) => (
            <li key={step.id} className="case-study-bb-timeline-step">
              <span className="case-study-bb-timeline-num" aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="case-study-bb-timeline-body">
                <p className="case-study-bb-timeline-label">{step.label}</p>
                <p className="case-study-bb-timeline-detail">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function FeatureGridSection({
  block,
}: {
  block: Extract<CaseStudyBillingBabaSectionBlock, { variant: "feature-grid" }>;
}) {
  const sid = `narrative-${block.id}`;
  const group = `bb-features-${block.id}`;
  return (
    <section className="case-study-narrative-section case-study-bb-features" id={sid}>
      <SectionIndex index={block.index} />
      <h2 id={`${sid}-headline`} className="case-study-narrative-headline">
        {block.headline}
      </h2>
      <Prose paragraphs={block.paragraphs} />

      <div className="case-study-bb-feature-shell">
        {block.features.map((f, i) => (
          <input
            key={f.id}
            type="radio"
            name={group}
            value={f.id}
            id={`${sid}-feat-${f.id}`}
            className="case-study-bb-feature-input"
            defaultChecked={i === 0}
          />
        ))}
        <div className="case-study-bb-feature-grid">
          {block.features.map((f) => (
            <label
              key={f.id}
              htmlFor={`${sid}-feat-${f.id}`}
              className={`case-study-bb-feature-tile case-study-bb-feature-tile--${f.id}`}
            >
              <span className="case-study-bb-feature-tile-title">{f.title}</span>
              <span className="case-study-bb-feature-tile-hint">Details</span>
            </label>
          ))}
        </div>
        <div className="case-study-bb-feature-details">
          {block.features.map((f) => (
            <div
              key={f.id}
              className={`case-study-bb-feature-detail case-study-bb-feature-detail--${f.id}`}
              role="region"
              aria-label={f.title}
            >
              <p className="case-study-bb-feature-detail-text">{f.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FlutterHubSection({
  block,
}: {
  block: Extract<CaseStudyBillingBabaSectionBlock, { variant: "flutter-hub" }>;
}) {
  const sid = `narrative-${block.id}`;
  return (
    <section className="case-study-narrative-section case-study-bb-flutter" id={sid}>
      <SectionIndex index={block.index} />
      <h2 id={`${sid}-headline`} className="case-study-narrative-headline">
        {block.headline}
      </h2>
      <Prose paragraphs={block.paragraphs} />

      <div className="case-study-bb-hub" aria-label="Single Flutter codebase, four native targets">
        {block.platforms.map((p) => (
          <div key={p.id} className={`case-study-bb-hub-orb case-study-bb-hub-orb--${p.id}`}>
            <span>{p.label}</span>
          </div>
        ))}
        <div className="case-study-bb-hub-core">
          <span className="case-study-bb-hub-core-label">{block.hubLabel}</span>
          {block.hubSublabel ? (
            <span className="case-study-bb-hub-core-sub">{block.hubSublabel}</span>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function highlightPhrasesInText(text: string, phrases: readonly string[]) {
  if (phrases.length === 0) {
    return text;
  }

  type Segment = { kind: "text" | "mark"; value: string };

  let segments: Segment[] = [{ kind: "text", value: text }];

  for (const phrase of phrases) {
    if (!phrase) continue;
    const next: Segment[] = [];

    for (const seg of segments) {
      if (seg.kind === "mark") {
        next.push(seg);
        continue;
      }

      const idx = seg.value.indexOf(phrase);
      if (idx === -1) {
        next.push(seg);
        continue;
      }

      const before = seg.value.slice(0, idx);
      const mid = seg.value.slice(idx, idx + phrase.length);
      const after = seg.value.slice(idx + phrase.length);

      if (before) next.push({ kind: "text", value: before });
      next.push({ kind: "mark", value: mid });
      if (after) next.push({ kind: "text", value: after });
    }

    segments = next;
  }

  return segments.map((seg, i) =>
    seg.kind === "mark" ? (
      <mark key={i} className="case-study-bb-domain-mark">
        {seg.value}
      </mark>
    ) : (
      <Fragment key={i}>{seg.value}</Fragment>
    ),
  );
}

function DomainGlossarySection({
  block,
}: {
  block: Extract<CaseStudyBillingBabaSectionBlock, { variant: "domain-glossary" }>;
}) {
  const sid = `narrative-${block.id}`;
  const highlightByParagraph = new Map<number, readonly string[]>();
  if (block.paragraphHighlights) {
    for (const h of block.paragraphHighlights) {
      highlightByParagraph.set(h.paragraphIndex, h.phrases);
    }
  }

  return (
    <section className="case-study-narrative-section case-study-bb-domain" id={sid}>
      <SectionIndex index={block.index} />
      <h2 id={`${sid}-headline`} className="case-study-narrative-headline">
        {block.headline}
      </h2>

      <div className="case-study-bb-domain-layout">
        <aside className="case-study-bb-glossary" aria-label="Domain terms">
          <p className="case-study-bb-glossary-title">Terms</p>
          <dl className="case-study-bb-glossary-list">
            {block.terms.map((t) => (
              <div key={t.id} className="case-study-bb-glossary-row">
                <dt className="case-study-bb-glossary-term">{t.term}</dt>
                <dd className="case-study-bb-glossary-def">{t.definition}</dd>
              </div>
            ))}
          </dl>
        </aside>
        <div className="case-study-bb-domain-prose">
          <div className="case-study-narrative-prose">
            {block.paragraphs.map((paragraph, paragraphIndex) => {
              const phrases = highlightByParagraph.get(paragraphIndex) ?? [];
              return (
                <p key={paragraphIndex}>
                  {highlightPhrasesInText(paragraph, phrases)}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ResultsStripSection({
  block,
}: {
  block: Extract<CaseStudyBillingBabaSectionBlock, { variant: "results-strip" }>;
}) {
  const sid = `narrative-${block.id}`;
  return (
    <section className="case-study-narrative-section case-study-bb-results" id={sid}>
      <SectionIndex index={block.index} />
      <h2 id={`${sid}-headline`} className="case-study-narrative-headline">
        {block.headline}
      </h2>
      <Prose paragraphs={block.paragraphs} />

      <div className="case-study-bb-results-strip" role="list" aria-label="Outcomes">
        {block.stats.map((s) => (
          <div key={s.id} className="case-study-bb-result-cell" role="listitem">
            <p className="case-study-bb-result-value">{s.value}</p>
            <p className="case-study-bb-result-label">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

type CaseStudyBillingBabaSectionProps = {
  block: CaseStudyBillingBabaSectionBlock;
};

export function CaseStudyBillingBabaSection({ block }: CaseStudyBillingBabaSectionProps) {
  switch (block.variant) {
    case "previous-attempt":
      return <PreviousAttemptSection block={block} />;
    case "rebuild-timeline":
      return <RebuildTimelineSection block={block} />;
    case "feature-grid":
      return <FeatureGridSection block={block} />;
    case "flutter-hub":
      return <FlutterHubSection block={block} />;
    case "domain-glossary":
      return <DomainGlossarySection block={block} />;
    case "results-strip":
      return <ResultsStripSection block={block} />;
    default: {
      const _exhaustive: never = block;
      return _exhaustive;
    }
  }
}
