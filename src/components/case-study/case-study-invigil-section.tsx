import type { CaseStudyInvigilSectionBlock, CaseStudySectionIndex } from "@/types/case-study-narrative";

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

function InvigilConvergenceGraphic({
  products,
  sharedLayers,
  compact = false,
}: {
  products: readonly { id: string; label: string }[];
  sharedLayers: readonly { id: string; label: string }[];
  compact?: boolean;
}) {
  return (
    <div
      className={
        compact
          ? "case-study-invigil-converge case-study-invigil-converge--compact"
          : "case-study-invigil-converge"
      }
    >
      <div className="case-study-invigil-product-cols">
        {products.map((t) => (
          <div key={t.id} className="case-study-invigil-product-col" data-p={t.id}>
            <div className="case-study-invigil-tile">
              <span>{t.label}</span>
            </div>
            <div className="case-study-invigil-beam" aria-hidden />
          </div>
        ))}
      </div>
      <div className="case-study-invigil-core-stack">
        {sharedLayers.map((layer) => (
          <div key={layer.id} className="case-study-invigil-layer-chip">
            {layer.label}
          </div>
        ))}
      </div>
    </div>
  );
}

function InvigilSixProductsBand() {
  const products = [
    { id: "news", label: "News" },
    { id: "social", label: "Social" },
    { id: "live-tv", label: "Live TV" },
    { id: "teasers", label: "Teasers" },
    { id: "marketplace", label: "Marketplace" },
    { id: "investigations", label: "Investigations" },
  ] as const;

  const sharedLayers = [
    { id: "identity", label: "Identity" },
    { id: "trust", label: "Trust" },
    { id: "moderation", label: "Moderation" },
    { id: "data", label: "Data" },
  ] as const;

  return (
    <section
      className="case-study-invigil-band"
      aria-label="Six product surfaces converging on one shared backend"
    >
      <div className="case-study-invigil-band-inner">
        <p className="case-study-invigil-band-kicker">Six surfaces · One backend</p>
        <InvigilConvergenceGraphic products={products} sharedLayers={sharedLayers} compact />
      </div>
    </section>
  );
}

function InvigilOnePlatformSection({ block }: { block: Extract<CaseStudyInvigilSectionBlock, { variant: "one-platform" }> }) {
  const sectionId = `narrative-${block.id}`;
  return (
    <section className="case-study-narrative-section case-study-invigil-one-platform" id={sectionId}>
      <SectionIndex index={block.index} />
      <h2 id={`${sectionId}-headline`} className="case-study-narrative-headline">
        {block.headline}
      </h2>
      <Prose paragraphs={block.paragraphs} />

      <div aria-label="Product tiles converging into shared layers">
        <InvigilConvergenceGraphic products={block.products} sharedLayers={block.sharedLayers} />
      </div>
    </section>
  );
}

function InvigilVieraSection({ block }: { block: Extract<CaseStudyInvigilSectionBlock, { variant: "viera-panels" }> }) {
  const sectionId = `narrative-${block.id}`;
  const groupName = `invigil-viera-${block.id}`;
  return (
    <section className="case-study-narrative-section case-study-invigil-viera" id={sectionId}>
      <SectionIndex index={block.index} />
      <h2 id={`${sectionId}-headline`} className="case-study-narrative-headline">
        {block.headline}
      </h2>
      <Prose paragraphs={block.paragraphs} />

      <div className="case-study-invigil-viera-panel-shell" role="region" aria-label="ViERA components">
        {block.parts.map((part, i) => (
          <input
            key={part.id}
            type="radio"
            name={groupName}
            value={part.id}
            id={`${sectionId}-viera-${part.id}`}
            className="case-study-invigil-viera-input"
            defaultChecked={i === 0}
          />
        ))}
        <div className="case-study-invigil-viera-tabs" role="tablist" aria-label="ViERA parts">
          {block.parts.map((part) => (
            <label
              key={part.id}
              htmlFor={`${sectionId}-viera-${part.id}`}
              className="case-study-invigil-viera-tab"
            >
              {part.tabLabel}
            </label>
          ))}
        </div>
        <div className="case-study-invigil-viera-panels">
          {block.parts.map((part) => (
            <div
              key={part.id}
              className={`case-study-invigil-viera-panel case-study-invigil-viera-panel--${part.id}`}
              role="tabpanel"
              id={`${sectionId}-panel-${part.id}`}
              aria-labelledby={`${sectionId}-viera-${part.id}`}
            >
              <h3 className="case-study-invigil-viera-panel-title">{part.title}</h3>
              <p className="case-study-invigil-viera-panel-body">{part.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InvigilInvestigationSection({
  block,
}: {
  block: Extract<CaseStudyInvigilSectionBlock, { variant: "investigation-timeline" }>;
}) {
  const sectionId = `narrative-${block.id}`;
  return (
    <section className="case-study-narrative-section case-study-invigil-investigation" id={sectionId}>
      <SectionIndex index={block.index} />
      <h2 id={`${sectionId}-headline`} className="case-study-narrative-headline">
        {block.headline}
      </h2>
      <Prose paragraphs={block.paragraphs} />

      <ol className="case-study-invigil-timeline" aria-label="Investigation case workflow">
        {block.steps.map((step, i) => (
          <li key={step.id} className="case-study-invigil-timeline-step">
            <span className="case-study-invigil-timeline-marker" aria-hidden>
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="case-study-invigil-timeline-body">
              <p className="case-study-invigil-timeline-title">{step.title}</p>
              <p className="case-study-invigil-timeline-detail">{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function InvigilRolesSection({ block }: { block: Extract<CaseStudyInvigilSectionBlock, { variant: "roles-matrix" }> }) {
  const sectionId = `narrative-${block.id}`;
  const groupName = `invigil-role-${block.id}`;
  return (
    <section className="case-study-narrative-section case-study-invigil-roles" id={sectionId}>
      <SectionIndex index={block.index} />
      <h2 id={`${sectionId}-headline`} className="case-study-narrative-headline">
        {block.headline}
      </h2>
      <Prose paragraphs={block.paragraphs} />

      <div className="case-study-invigil-roles-shell" role="region" aria-label="Role permissions">
        {block.roles.map((role, i) => (
          <input
            key={role.id}
            type="radio"
            name={groupName}
            value={role.id}
            id={`${sectionId}-role-${role.id}`}
            className="case-study-invigil-role-input"
            defaultChecked={i === 0}
          />
        ))}
        <div className="case-study-invigil-role-picker" role="radiogroup" aria-label="Select a role">
          {block.roles.map((role) => (
            <label key={role.id} htmlFor={`${sectionId}-role-${role.id}`} className="case-study-invigil-role-chip">
              {role.label}
            </label>
          ))}
        </div>
        <div className="case-study-invigil-role-details">
          {block.roles.map((role) => (
            <div
              key={role.id}
              className={`case-study-invigil-role-detail case-study-invigil-role-detail--${role.id}`}
              role="region"
              aria-label={`${role.label} permissions`}
            >
              <div className="case-study-invigil-role-column">
                <p className="case-study-invigil-role-column-label">Can see</p>
                <ul className="case-study-invigil-role-list">
                  {role.canSee.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="case-study-invigil-role-column">
                <p className="case-study-invigil-role-column-label">Can do</p>
                <ul className="case-study-invigil-role-list">
                  {role.canDo.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InvigilPlatformFramesSection({
  block,
}: {
  block: Extract<CaseStudyInvigilSectionBlock, { variant: "platform-frames" }>;
}) {
  const sectionId = `narrative-${block.id}`;
  return (
    <section className="case-study-narrative-section case-study-invigil-platforms" id={sectionId}>
      <SectionIndex index={block.index} />
      <h2 id={`${sectionId}-headline`} className="case-study-narrative-headline">
        {block.headline}
      </h2>
      <Prose paragraphs={block.paragraphs} />

      <div className="case-study-invigil-device-grid" aria-label="Client platforms">
        {block.devices.map((d) => (
          <div key={d.id} className={`case-study-invigil-device case-study-invigil-device--${d.id}`}>
            <div className="case-study-invigil-device-chrome" aria-hidden />
            <div className="case-study-invigil-device-screen">
              <p className="case-study-invigil-device-label">{d.label}</p>
              <p className="case-study-invigil-device-detail">{d.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function InvigilResultsStatsSection({
  block,
}: {
  block: Extract<CaseStudyInvigilSectionBlock, { variant: "results-stats" }>;
}) {
  const sectionId = `narrative-${block.id}`;
  return (
    <section className="case-study-narrative-section case-study-invigil-results" id={sectionId}>
      <SectionIndex index={block.index} />
      <h2 id={`${sectionId}-headline`} className="case-study-narrative-headline">
        {block.headline}
      </h2>
      <Prose paragraphs={block.paragraphs} />

      <div className="case-study-invigil-stats" role="list" aria-label="Project results">
        {block.stats.map((s) => (
          <div key={s.id} className="case-study-invigil-stat" role="listitem">
            <p className="case-study-invigil-stat-value">{s.value}</p>
            <p className="case-study-invigil-stat-label">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

type CaseStudyInvigilSectionProps = {
  block: CaseStudyInvigilSectionBlock;
};

export function CaseStudyInvigilSection({ block }: CaseStudyInvigilSectionProps) {
  switch (block.variant) {
    case "six-products-band":
      return <InvigilSixProductsBand />;
    case "one-platform":
      return <InvigilOnePlatformSection block={block} />;
    case "viera-panels":
      return <InvigilVieraSection block={block} />;
    case "investigation-timeline":
      return <InvigilInvestigationSection block={block} />;
    case "roles-matrix":
      return <InvigilRolesSection block={block} />;
    case "platform-frames":
      return <InvigilPlatformFramesSection block={block} />;
    case "results-stats":
      return <InvigilResultsStatsSection block={block} />;
    default: {
      const _exhaustive: never = block;
      return _exhaustive;
    }
  }
}
