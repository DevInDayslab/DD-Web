"use client";

import type { ReactNode } from "react";
import { CaseStudyScrollReveal } from "@/components/case-study/case-study-scroll-reveal";
import { CaseStudyReductionCardView } from "@/components/case-study/case-study-reduction-card";
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

function EditorialIntroBlock({
  prose,
  reduction,
  blockIndex,
}: {
  prose: CaseStudyNarrativeProseBlock;
  reduction: CaseStudyReductionAuditBlock;
  blockIndex: number;
}) {
  const baseDelay = blockIndex * 0.05;

  return (
    <section
      className="case-study-narrative-section case-study-narrative-editorial"
      aria-labelledby={`narrative-${prose.id}`}
    >
      <div className="case-study-narrative-editorial-column">
        <CaseStudyScrollReveal delay={baseDelay}>
          <SectionIndex index={prose.index} />
          <h2 id={`narrative-${prose.id}`} className="case-study-narrative-editorial-headline">
            {prose.headline}
          </h2>
          <div className="case-study-narrative-editorial-prose">
            {prose.paragraphs.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex}>{paragraph}</p>
            ))}
          </div>
        </CaseStudyScrollReveal>

        {prose.pullQuote ? (
          <CaseStudyScrollReveal
            className="case-study-narrative-editorial-quote-wrap"
            delay={baseDelay + 0.08}
          >
            <blockquote className="case-study-narrative-editorial-quote">
              <p>{prose.pullQuote.quote}</p>
              <footer>{prose.pullQuote.attribution}</footer>
            </blockquote>
          </CaseStudyScrollReveal>
        ) : null}

        <div className="case-study-narrative-editorial-audit" aria-labelledby={`narrative-${reduction.id}`}>
          <CaseStudyScrollReveal delay={baseDelay + 0.12}>
            <p id={`narrative-${reduction.id}`} className="case-study-narrative-editorial-audit-eyebrow">
              {reduction.eyebrow}
            </p>
          </CaseStudyScrollReveal>
          <div className="case-study-reduction-grid">
            {reduction.cards.map((card, cardIndex) => (
              <CaseStudyScrollReveal key={card.id} delay={baseDelay + 0.14 + cardIndex * 0.06}>
                <CaseStudyReductionCardView card={card} />
              </CaseStudyScrollReveal>
            ))}
          </div>
          <CaseStudyScrollReveal delay={baseDelay + 0.22}>
            <p className="case-study-narrative-editorial-audit-caption">{reduction.caption}</p>
          </CaseStudyScrollReveal>
        </div>
      </div>
    </section>
  );
}

function NarrativeBlock({ block, blockIndex }: { block: CaseStudyNarrativeBlock; blockIndex: number }) {
  const baseDelay = blockIndex * 0.05;

  switch (block.type) {
    case "prose":
      return (
        <section className="case-study-narrative-section" aria-labelledby={`narrative-${block.id}`}>
          <CaseStudyScrollReveal delay={baseDelay}>
            <SectionIndex index={block.index} />
            <h2 id={`narrative-${block.id}`} className="case-study-narrative-headline">
              {block.headline}
            </h2>
            <div className="case-study-narrative-prose">
              {block.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex}>{paragraph}</p>
              ))}
            </div>
          </CaseStudyScrollReveal>
          {block.pullQuote ? (
            <CaseStudyScrollReveal className="case-study-narrative-quote-wrap" delay={baseDelay + 0.1}>
              <blockquote className="case-study-narrative-quote">
                <p>{block.pullQuote.quote}</p>
                <footer>{block.pullQuote.attribution}</footer>
              </blockquote>
            </CaseStudyScrollReveal>
          ) : null}
        </section>
      );

    case "reduction-audit":
      return (
        <section className="case-study-narrative-section" aria-labelledby={`narrative-${block.id}`}>
          <CaseStudyScrollReveal delay={baseDelay}>
            <p id={`narrative-${block.id}`} className="case-study-narrative-eyebrow">
              {block.eyebrow}
            </p>
          </CaseStudyScrollReveal>
          <div className="case-study-reduction-grid">
            {block.cards.map((card, cardIndex) => (
              <CaseStudyScrollReveal key={card.id} delay={baseDelay + cardIndex * 0.08}>
                <CaseStudyReductionCardView card={card} />
              </CaseStudyScrollReveal>
            ))}
          </div>
          <CaseStudyScrollReveal delay={baseDelay + 0.15}>
            <p className="case-study-narrative-caption">{block.caption}</p>
          </CaseStudyScrollReveal>
        </section>
      );

    case "platform-roles":
      return <CaseStudyPlatformRolesSection block={block} revealDelay={baseDelay} />;

    case "platform-split":
      return (
        <section className="case-study-narrative-section case-study-platform-split" aria-labelledby={`narrative-${block.id}`}>
          <div className="case-study-platform-copy">
            <CaseStudyScrollReveal delay={baseDelay}>
              <p id={`narrative-${block.id}`} className="case-study-narrative-eyebrow">
                {block.eyebrow}
              </p>
              <h2 className="case-study-narrative-headline">{block.headline}</h2>
              <div className="case-study-narrative-prose">
                {block.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}
              </div>
            </CaseStudyScrollReveal>
          </div>
          <CaseStudyScrollReveal className="case-study-platform-diagram" delay={baseDelay + 0.1}>
            <CaseStudySystemDiagram
              headerLeft={block.diagramHeaderLeft}
              headerRight={block.diagramHeaderRight}
              tiers={block.tiers}
            />
          </CaseStudyScrollReveal>
        </section>
      );

    case "capability-matrix":
      return (
        <section className="case-study-narrative-section" aria-labelledby={`narrative-${block.id}`}>
          <CaseStudyScrollReveal delay={baseDelay}>
            <p id={`narrative-${block.id}`} className="case-study-narrative-eyebrow">
              {block.eyebrow}
            </p>
          </CaseStudyScrollReveal>
          <div className="case-study-capability-matrix">
            {block.rows.map((row, rowIndex) => (
              <CaseStudyScrollReveal
                key={row.id}
                className={`case-study-capability-row case-study-capability-row--${row.tone}`}
                delay={baseDelay + rowIndex * 0.06}
              >
                <p className="case-study-capability-label">
                  <span className="case-study-capability-dot" aria-hidden />
                  {row.label}
                </p>
                <p className="case-study-narrative-body-sm">{row.body}</p>
              </CaseStudyScrollReveal>
            ))}
          </div>
        </section>
      );

    case "matchmaking":
      return <CaseStudyMatchmakingSection block={block} revealDelay={baseDelay} />;

    case "tech-strip":
      return <CaseStudyTechStripSection block={block} revealDelay={baseDelay} />;

    case "launch":
      return <CaseStudyLaunchSection block={block} revealDelay={baseDelay} />;

    default:
      return null;
  }
}

export function CaseStudyNarrative({ content }: CaseStudyNarrativeProps) {
  const nodes: ReactNode[] = [];
  let blockIndex = 0;

  for (let index = 0; index < content.blocks.length; index += 1) {
    const block = content.blocks[index];
    const next = content.blocks[index + 1];

    if (block.type === "prose" && next?.type === "reduction-audit") {
      nodes.push(
        <EditorialIntroBlock
          key={`${block.id}-${next.id}`}
          prose={block}
          reduction={next}
          blockIndex={blockIndex}
        />,
      );
      blockIndex += 1;
      index += 1;
      continue;
    }

    nodes.push(<NarrativeBlock key={block.id} block={block} blockIndex={blockIndex} />);
    blockIndex += 1;
  }

  return <div className="case-study-narrative">{nodes}</div>;
}
