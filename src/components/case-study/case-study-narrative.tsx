import type { ReactNode } from "react";
import { CaseStudyReductionCardView } from "@/components/case-study/case-study-reduction-card";
import { CaseStudyReductionCompare } from "@/components/case-study/case-study-reduction-compare";
import { CaseStudyBillingBabaSection } from "@/components/case-study/case-study-billing-baba-section";
import { CaseStudyEntryTicketSection } from "@/components/case-study/case-study-entryticket-section";
import { CaseStudyInvigilSection } from "@/components/case-study/case-study-invigil-section";
import { CaseStudyMatchmakingSection } from "@/components/case-study/case-study-matchmaking-section";
import { CaseStudyTechStripSection } from "@/components/case-study/case-study-tech-strip-section";
import { CaseStudyLaunchSection } from "@/components/case-study/case-study-launch-section";
import { CaseStudyPlatformRolesSection } from "@/components/case-study/case-study-platform-roles-section";
import { CaseStudySystemDiagram } from "@/components/case-study/case-study-system-diagram";
import type {
  CaseStudyNarrativeBlock,
  CaseStudyNarrativeContent,
  CaseStudyReductionAuditBlock,
  CaseStudyNarrativeProseBlock,
  CaseStudySectionIndex,
} from "@/types/case-study-narrative";

type CaseStudyNarrativeProps = {
  content: CaseStudyNarrativeContent;
};

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

function NarrativeToc({ blocks }: { blocks: readonly CaseStudyNarrativeBlock[] }) {
  const entries: { id: string; index: CaseStudySectionIndex }[] = [];

  for (const block of blocks) {
    if (block.type === "prose" && block.index) {
      entries.push({ id: block.id, index: block.index });
      continue;
    }
    if (block.type === "tech-strip" && block.index) {
      entries.push({ id: block.id, index: block.index });
      continue;
    }
    if (block.type === "reduction-audit" && block.index) {
      entries.push({ id: block.id, index: block.index });
      continue;
    }
    if (block.type === "platform-split" && block.index) {
      entries.push({ id: block.id, index: block.index });
      continue;
    }
    if (block.type === "platform-roles" && block.index) {
      entries.push({ id: block.id, index: block.index });
      continue;
    }
    if (block.type === "matchmaking" && block.index) {
      entries.push({ id: block.id, index: block.index });
      continue;
    }
    if (block.type === "launch" && block.index) {
      entries.push({ id: block.id, index: block.index });
      continue;
    }
    if (block.type === "invigil-section" && "index" in block && block.index) {
      entries.push({ id: block.id, index: block.index });
      continue;
    }
    if (block.type === "billing-baba-section" && "index" in block && block.index) {
      entries.push({ id: block.id, index: block.index });
      continue;
    }
    if (block.type === "entryticket-section" && "index" in block && block.index) {
      entries.push({ id: block.id, index: block.index });
      continue;
    }
  }

  if (entries.length === 0) {
    return null;
  }

  return (
    <nav className="case-study-narrative-toc" aria-label="Case study sections">
      <p className="case-study-narrative-toc-label">In this case study</p>
      <ol className="case-study-narrative-toc-list">
        {entries.map((item) => (
          <li key={item.id}>
            <a className="case-study-narrative-toc-link" href={`#narrative-${item.id}`}>
              <span className="case-study-narrative-toc-num">{item.index.number}</span>
              <span className="case-study-narrative-toc-title">{item.index.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function ProseParagraphs({ paragraphs }: { paragraphs: readonly string[] }) {
  return (
    <>
      {paragraphs.map((paragraph, paragraphIndex) => (
        <p key={paragraphIndex}>{paragraph}</p>
      ))}
    </>
  );
}

function EditorialIntroBlock({
  prose,
  reduction,
}: {
  prose: CaseStudyNarrativeProseBlock;
  reduction: CaseStudyReductionAuditBlock;
}) {
  return (
    <section
      className="case-study-narrative-section case-study-narrative-editorial"
      id={`narrative-${prose.id}`}
      aria-labelledby={`narrative-${prose.id}-headline`}
    >
      <div className="case-study-narrative-editorial-column">
        <SectionIndex index={prose.index} />
        <h2 id={`narrative-${prose.id}-headline`} className="case-study-narrative-editorial-headline">
          {prose.headline}
        </h2>
        <div className="case-study-narrative-editorial-prose">
          <ProseParagraphs paragraphs={prose.paragraphs} />
        </div>

        {prose.pullQuote ? (
          <div className="case-study-narrative-editorial-quote-wrap">
            <blockquote className="case-study-narrative-editorial-quote">
              <p>{prose.pullQuote.quote}</p>
              <footer>{prose.pullQuote.attribution}</footer>
            </blockquote>
          </div>
        ) : null}

        <div
          className="case-study-narrative-editorial-audit"
          aria-labelledby={`narrative-${reduction.id}`}
        >
          <p id={`narrative-${reduction.id}`} className="case-study-narrative-editorial-audit-eyebrow">
            {reduction.eyebrow}
          </p>
          <div className="case-study-reduction-grid">
            {reduction.cards.map((card) => (
              <CaseStudyReductionCardView key={card.id} card={card} />
            ))}
          </div>
          <p className="case-study-narrative-editorial-audit-caption">{reduction.caption}</p>
        </div>
      </div>
    </section>
  );
}

function NarrativeBlock({ block }: { block: CaseStudyNarrativeBlock }) {
  switch (block.type) {
    case "prose":
      return (
        <section
          className="case-study-narrative-section"
          id={`narrative-${block.id}`}
          aria-labelledby={`narrative-${block.id}-headline`}
        >
          <SectionIndex index={block.index} />
          <h2 id={`narrative-${block.id}-headline`} className="case-study-narrative-headline">
            {block.headline}
          </h2>
          <div className="case-study-narrative-prose">
            <ProseParagraphs paragraphs={block.paragraphs} />
          </div>
          {block.pullQuote ? (
            <div className="case-study-narrative-quote-wrap">
              <blockquote className="case-study-narrative-quote">
                <p>{block.pullQuote.quote}</p>
                <footer>{block.pullQuote.attribution}</footer>
              </blockquote>
            </div>
          ) : null}
        </section>
      );

    case "reduction-audit": {
      const headingId = `narrative-${block.id}-eyebrow`;
      const presentation = block.presentation ?? "grid";
      return (
        <section
          className="case-study-narrative-section"
          id={`narrative-${block.id}`}
          aria-labelledby={block.index ? `narrative-${block.id}-index` : headingId}
        >
          {block.index ? (
            <p id={`narrative-${block.id}-index`} className="case-study-narrative-index">
              <span>{block.index.number}</span>
              <span className="case-study-narrative-index-sep" aria-hidden>
                /
              </span>
              <span>{block.index.title}</span>
            </p>
          ) : null}
          {presentation === "compare" ? (
            <>
              <p id={headingId} className="case-study-narrative-eyebrow">
                {block.eyebrow}
              </p>
              <CaseStudyReductionCompare v1={block.cards[0]} v2={block.cards[1]} />
              <p className="case-study-narrative-caption case-study-narrative-caption--compare">
                {block.caption}
              </p>
            </>
          ) : (
            <>
              <p id={headingId} className="case-study-narrative-eyebrow">
                {block.eyebrow}
              </p>
              <div className="case-study-reduction-grid">
                {block.cards.map((card) => (
                  <CaseStudyReductionCardView key={card.id} card={card} />
                ))}
              </div>
              <p className="case-study-narrative-caption">{block.caption}</p>
            </>
          )}
        </section>
      );
    }

    case "platform-roles":
      return (
        <div className="case-study-narrative-section-anchor" id={`narrative-${block.id}`}>
          <CaseStudyPlatformRolesSection block={block} />
        </div>
      );

    case "platform-split":
      return (
        <section
          className="case-study-narrative-section case-study-platform-split"
          id={`narrative-${block.id}`}
          aria-labelledby={`narrative-${block.id}-headline`}
        >
          <div className="case-study-platform-copy">
            {block.index ? <SectionIndex index={block.index} /> : null}
            <p className="case-study-narrative-eyebrow">{block.eyebrow}</p>
            <h2 id={`narrative-${block.id}-headline`} className="case-study-narrative-headline">
              {block.headline}
            </h2>
            <div className="case-study-narrative-prose">
              <ProseParagraphs paragraphs={block.paragraphs} />
            </div>
          </div>
          <div className="case-study-platform-diagram">
            <CaseStudySystemDiagram
              headerLeft={block.diagramHeaderLeft}
              headerRight={block.diagramHeaderRight}
              tiers={block.tiers}
            />
          </div>
        </section>
      );

    case "capability-matrix":
      return (
        <section className="case-study-narrative-section" aria-labelledby={`narrative-${block.id}`}>
          <p id={`narrative-${block.id}`} className="case-study-narrative-eyebrow">
            {block.eyebrow}
          </p>
          <div className="case-study-capability-matrix">
            {block.rows.map((row) => (
              <div
                key={row.id}
                className={`case-study-capability-row case-study-capability-row--${row.tone}`}
              >
                <p className="case-study-capability-label">
                  <span className="case-study-capability-dot" aria-hidden />
                  {row.label}
                </p>
                <p className="case-study-narrative-body-sm">{row.body}</p>
              </div>
            ))}
          </div>
        </section>
      );

    case "matchmaking":
      return (
        <div className="case-study-narrative-section-anchor" id={`narrative-${block.id}`}>
          <CaseStudyMatchmakingSection block={block} />
        </div>
      );

    case "tech-strip":
      return (
        <div className="case-study-narrative-section-anchor" id={`narrative-${block.id}`}>
          <CaseStudyTechStripSection block={block} />
        </div>
      );

    case "launch":
      return (
        <div className="case-study-narrative-section-anchor" id={`narrative-${block.id}`}>
          <CaseStudyLaunchSection block={block} />
        </div>
      );

    case "invigil-section":
      return <CaseStudyInvigilSection block={block} />;

    case "billing-baba-section":
      return <CaseStudyBillingBabaSection block={block} />;

    case "entryticket-section":
      return <CaseStudyEntryTicketSection block={block} />;

    default:
      return null;
  }
}

export function CaseStudyNarrative({ content }: CaseStudyNarrativeProps) {
  const nodes: ReactNode[] = [];

  for (let index = 0; index < content.blocks.length; index += 1) {
    const block = content.blocks[index];
    const next = content.blocks[index + 1];

    if (block.type === "prose" && next?.type === "reduction-audit") {
      nodes.push(
        <EditorialIntroBlock key={`${block.id}-${next.id}`} prose={block} reduction={next} />,
      );
      index += 1;
      continue;
    }

    nodes.push(<NarrativeBlock key={block.id} block={block} />);
  }

  return (
    <div className="case-study-narrative">
      <NarrativeToc blocks={content.blocks} />
      {nodes}
    </div>
  );
}
