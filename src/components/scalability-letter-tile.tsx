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
      }}
      transition={{
        rotate: { type: "spring", ...spring, delay },
      }}
      aria-hidden
    >
      <span className="scalability-letter-tile-char">{tile.letter}</span>
    </motion.span>
  );
}
