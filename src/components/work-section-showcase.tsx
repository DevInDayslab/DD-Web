"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { WorkCaseMarquee } from "@/components/work-case-marquee";
import { WorkFeaturedCardContent } from "@/components/work-featured-card";
import type { WorkFeaturedCaseStudy, WorkSectionContent } from "@/types/work-section";

type WorkSectionShowcaseProps = {
  content: Pick<
    WorkSectionContent,
    | "defaultCaseStudyId"
    | "caseStudies"
    | "marqueeAriaLabel"
    | "marqueeTiles"
    | "marqueeLogos"
  >;
  phonePlaceholderLabel: string;
};

/** Same feel as the pricing tiers: the card stays put, its content blur-fades, and the height morphs. */
const heightMorphSeconds = 0.6;
const heightEase = [0.22, 1, 0.36, 1] as const;

export function WorkSectionShowcase({ content, phonePlaceholderLabel }: WorkSectionShowcaseProps) {
  const [activeCaseStudyId, setActiveCaseStudyId] = useState(content.defaultCaseStudyId);
  const reducedMotion = useReducedMotion();
  const cardRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [cardHeight, setCardHeight] = useState<number | null>(null);

  const caseStudyById = useMemo(() => {
    const map = new Map<string, WorkFeaturedCaseStudy>();
    for (const study of content.caseStudies) {
      map.set(study.id, study);
    }
    return map;
  }, [content.caseStudies]);

  const activeCaseStudy = caseStudyById.get(activeCaseStudyId) ?? content.caseStudies[0];

  // Measure the incoming content so the card can morph to its height (never below the design min-height).
  useEffect(() => {
    const card = cardRef.current;
    const stage = stageRef.current;
    if (!card || !stage) {
      return;
    }
    const update = () => {
      const style = getComputedStyle(card);
      const chrome =
        Number.parseFloat(style.paddingTop) +
        Number.parseFloat(style.paddingBottom) +
        Number.parseFloat(style.borderTopWidth) +
        Number.parseFloat(style.borderBottomWidth);
      const minHeight = Number.parseFloat(style.minHeight) || 0;
      setCardHeight(Math.max(minHeight, stage.offsetHeight + chrome));
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(stage);
    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  const handleCaseStudySelect = useCallback(
    (caseStudyId: string) => {
      if (caseStudyId !== activeCaseStudyId && caseStudyById.has(caseStudyId)) {
        setActiveCaseStudyId(caseStudyId);
      }
    },
    [activeCaseStudyId, caseStudyById],
  );

  return (
    <div className="work-section-showcase">
      <div className="work-featured-card-host">
        <motion.article
          ref={cardRef}
          className="work-featured-card"
          aria-live="polite"
          initial={false}
          animate={cardHeight === null ? undefined : { height: cardHeight }}
          transition={
            reducedMotion ? { duration: 0 } : { duration: heightMorphSeconds, ease: heightEase }
          }
        >
          <div ref={stageRef} className="work-featured-card-stage">
            <WorkFeaturedCardContent
              caseStudy={activeCaseStudy}
              phonePlaceholderLabel={phonePlaceholderLabel}
            />
          </div>
        </motion.article>
      </div>
      <WorkCaseMarquee
        content={content}
        activeCaseStudyId={activeCaseStudyId}
        onCaseStudySelect={handleCaseStudySelect}
      />
    </div>
  );
}
