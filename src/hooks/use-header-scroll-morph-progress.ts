"use client";

import { headerScrollMorph } from "@/config/navigation";
import {
  type MotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useState } from "react";

export function useHeaderScrollMorphProgress(): MotionValue<number> {
  const prefersReducedMotion = useReducedMotion();
  const { scrollThresholdPx, scrollRangePx, spring, scrollUpFollowsScrollTarget } = headerScrollMorph;
  const { scrollY } = useScroll();

  const scrollProgress = useTransform(
    scrollY,
    [scrollThresholdPx, scrollThresholdPx + scrollRangePx],
    [0, 1],
    { clamp: true },
  );

  const springProgress = useSpring(scrollProgress, spring);

  const asymmetricProgress = useTransform([scrollProgress, springProgress], (values) => {
    const target = values[0] as number;
    const sprung = values[1] as number;
    if (!scrollUpFollowsScrollTarget) {
      return sprung;
    }
    // Down: spring lags behind target (smooth pill in). Up: target drops first (fast expand).
    return Math.min(target, sprung);
  });

  const reducedProgress = useTransform(scrollY, (y) => (y > scrollThresholdPx ? 1 : 0));

  return (prefersReducedMotion ? reducedProgress : asymmetricProgress) as MotionValue<number>;
}

export function useHeaderScrollMorphFloating(progress: MotionValue<number>, threshold = 0.88) {
  const [floating, setFloating] = useState(false);

  useMotionValueEvent(progress, "change", (value) => {
    setFloating(value >= threshold);
  });

  return floating;
}
