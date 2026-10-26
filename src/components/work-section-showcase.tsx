"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { useAnimate } from "motion/react";
import { WorkCaseMarquee } from "@/components/work-case-marquee";
import { WorkFeaturedCard } from "@/components/work-featured-card";
import { workCaseStudyGenieInteraction } from "@/config/work-interaction";
import { genieOriginFromRects } from "@/lib/work-genie-origin";
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

export function WorkSectionShowcase({ content, phonePlaceholderLabel }: WorkSectionShowcaseProps) {
  const [activeCaseStudyId, setActiveCaseStudyId] = useState(content.defaultCaseStudyId);
  const [cardHostRef, animateCard] = useAnimate<HTMLDivElement>();
  const transitioningRef = useRef(false);

  const caseStudyById = useMemo(() => {
    const map = new Map<string, WorkFeaturedCaseStudy>();
    for (const study of content.caseStudies) {
      map.set(study.id, study);
    }
    return map;
  }, [content.caseStudies]);

  const activeCaseStudy =
    caseStudyById.get(activeCaseStudyId) ?? content.caseStudies[0];

  const handleCaseStudySelect = useCallback(
    async (caseStudyId: string, tileElement: HTMLElement) => {
      if (caseStudyId === activeCaseStudyId || transitioningRef.current) {
        return;
      }

      const nextCaseStudy = caseStudyById.get(caseStudyId);
      if (!nextCaseStudy || !cardHostRef.current) {
        return;
      }

      transitioningRef.current = true;
      const cardHost = cardHostRef.current;
      const tileRect = tileElement.getBoundingClientRect();
      const cardRect = cardHost.getBoundingClientRect();
      const origin = genieOriginFromRects(tileRect, cardRect);

      cardHost.style.transformOrigin = `${origin.xPercent}% ${origin.yPercent}%`;

      const {
        minimizeDurationSeconds,
        expandDurationSeconds,
        minimizeScaleX,
        minimizeScaleY,
        minimizeOpacity,
        minimizeSkewYDeg,
        expandSkewYDeg,
        minimizeEase,
        expandEase,
      } = workCaseStudyGenieInteraction;

      await animateCard(
        cardHost,
        {
          scaleX: minimizeScaleX,
          scaleY: minimizeScaleY,
          opacity: minimizeOpacity,
          skewY: minimizeSkewYDeg,
        },
        { duration: minimizeDurationSeconds, ease: minimizeEase },
      );

      setActiveCaseStudyId(caseStudyId);

      await animateCard(
        cardHost,
        {
          scaleX: 1,
          scaleY: 1,
          opacity: 1,
          skewY: expandSkewYDeg,
        },
        { duration: expandDurationSeconds * 0.35, ease: minimizeEase },
      );

      await animateCard(
        cardHost,
        {
          skewY: 0,
        },
        { duration: expandDurationSeconds * 0.65, ease: expandEase },
      );

      transitioningRef.current = false;
    },
    [activeCaseStudyId, animateCard, caseStudyById],
  );

  return (
    <div className="work-section-showcase">
      <div ref={cardHostRef} className="work-featured-card-host">
        <WorkFeaturedCard
          caseStudy={activeCaseStudy}
          phonePlaceholderLabel={phonePlaceholderLabel}
        />
      </div>
      <WorkCaseMarquee
        content={content}
        activeCaseStudyId={activeCaseStudyId}
        onCaseStudySelect={handleCaseStudySelect}
      />
    </div>
  );
}
