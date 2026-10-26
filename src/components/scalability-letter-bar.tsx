"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ScalabilityLetterChevron } from "@/components/scalability-letter-chevron";
import { ScalabilityLetterTileView } from "@/components/scalability-letter-tile";
import { scalabilityLetterBarInteraction } from "@/config/scalability-interaction";
import type { ScalabilitySectionContent } from "@/types/scalability-section";

type ScalabilityLetterBarProps = {
  content: Pick<ScalabilitySectionContent, "letterTiles" | "letterBarAriaLabel">;
};

export function ScalabilityLetterBar({ content }: ScalabilityLetterBarProps) {
  const [hovered, setHovered] = useState(false);
  const { barHoverScale, barHoverSpring } = scalabilityLetterBarInteraction;
  const tiles = content.letterTiles;

  return (
    <motion.div
      className={
        hovered
          ? "scalability-letter-bar scalability-letter-bar--aligned"
          : "scalability-letter-bar scalability-letter-bar--tilted"
      }
      aria-label={content.letterBarAriaLabel}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      initial={false}
      animate={{ scale: hovered ? barHoverScale : 1 }}
      transition={{ type: "spring", ...barHoverSpring }}
    >
      <div className="scalability-letter-tiles">
        {tiles.map((tile, index) => (
          <ScalabilityLetterTileView
            key={`${tile.letter}-${index}`}
            tile={tile}
            hovered={hovered}
            index={index}
            total={tiles.length}
          />
        ))}
      </div>
      <ScalabilityLetterChevron />
    </motion.div>
  );
}
