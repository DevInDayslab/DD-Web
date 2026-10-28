"use client";

import { motion } from "motion/react";
import { scalabilityLetterBarInteraction } from "@/config/scalability-interaction";
import type { ScalabilityLetterTile } from "@/types/scalability-section";

type ScalabilityLetterTileProps = {
  tile: ScalabilityLetterTile;
  hovered: boolean;
  index: number;
  total: number;
};

export function ScalabilityLetterTileView({
  tile,
  hovered,
  index,
  total,
}: ScalabilityLetterTileProps) {
  const {
    alignStaggerSeconds,
    untiltStaggerSeconds,
    alignSpring,
    untiltSpring,
    alignScaleKeyframes,
    alignScaleTimes,
    alignLiftPx,
    alignMotionDurationSeconds,
  } = scalabilityLetterBarInteraction;

  const alignDelay = index * alignStaggerSeconds;
  const untiltDelay = (total - 1 - index) * untiltStaggerSeconds;
  const delay = hovered ? alignDelay : untiltDelay;
  const spring = hovered ? alignSpring : untiltSpring;

  return (
    <motion.span
      className="scalability-letter-tile"
      initial={false}
      animate={{
        rotate: hovered ? 0 : tile.rotationDeg,
        y: hovered ? [0, -alignLiftPx, 0] : 0,
        scale: hovered ? [...alignScaleKeyframes] : 1,
      }}
      transition={{
        rotate: { type: "spring", ...spring, delay },
        y: {
          duration: alignMotionDurationSeconds,
          ease: [0.22, 1, 0.36, 1],
          delay,
        },
        scale: {
          duration: alignMotionDurationSeconds,
          times: [...alignScaleTimes],
          ease: [0.22, 1, 0.36, 1],
          delay,
        },
      }}
      aria-hidden
    >
      <span className="scalability-letter-tile-char">{tile.letter}</span>
    </motion.span>
  );
}
