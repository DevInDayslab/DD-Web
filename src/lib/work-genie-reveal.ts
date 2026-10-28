import { workCaseStudyGenieInteraction } from "@/config/work-interaction";

/** 0 at start of open genie → 1 when real card should fully replace WebGL. */
export function openRevealAmount(progress: number): number {
  const { openCardRevealStartProgress } = workCaseStudyGenieInteraction;
  if (progress <= openCardRevealStartProgress) {
    return 0;
  }
  const t = (progress - openCardRevealStartProgress) / (1 - openCardRevealStartProgress);
  const eased = t * t * (3 - 2 * t);
  return Math.min(1, Math.max(0, eased));
}
