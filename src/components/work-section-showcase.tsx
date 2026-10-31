"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { WorkCaseMarquee } from "@/components/work-case-marquee";
import { WorkFeaturedCard } from "@/components/work-featured-card";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";
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

const swapEase = [0.22, 1, 0.36, 1] as const;

export function WorkSectionShowcase({ content, phonePlaceholderLabel }: WorkSectionShowcaseProps) {
  const [activeCaseStudyId, setActiveCaseStudyId] = useState(content.defaultCaseStudyId);
  const prefersReducedMotion = usePrefersReducedMotion();

  const caseStudyById = useMemo(() => {
    const map = new Map<string, WorkFeaturedCaseStudy>();
    for (const study of content.caseStudies) {
      map.set(study.id, study);
    }
    return map;
  }, [content.caseStudies]);

  const activeCaseStudy = caseStudyById.get(activeCaseStudyId) ?? content.caseStudies[0];

  return (
    <div className="work-section-showcase">
      <div className="work-featured-card-host">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeCaseStudy.id}
            className="work-featured-card-swap"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14, scale: 0.985, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={
              prefersReducedMotion
                ? undefined
                : { opacity: 0, y: -10, scale: 0.99, filter: "blur(6px)" }
            }
            transition={{ duration: prefersReducedMotion ? 0 : 0.32, ease: swapEase }}
          >
            <WorkFeaturedCard
              caseStudy={activeCaseStudy}
              phonePlaceholderLabel={phonePlaceholderLabel}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <WorkCaseMarquee
        content={content}
        activeCaseStudyId={activeCaseStudyId}
        onCaseStudySelect={(caseStudyId) => setActiveCaseStudyId(caseStudyId)}
      />
    </div>
  );
}
