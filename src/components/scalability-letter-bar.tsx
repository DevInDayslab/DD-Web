"use client";

import { useState } from "react";
import { ScalabilityLetterChevron } from "@/components/scalability-letter-chevron";
import { ScalabilityLetterTileView } from "@/components/scalability-letter-tile";
import type { ScalabilitySectionContent } from "@/types/scalability-section";

type ScalabilityLetterBarProps = {
  content: Pick<ScalabilitySectionContent, "letterTiles" | "letterBarAriaLabel">;
};

export function ScalabilityLetterBar({ content }: ScalabilityLetterBarProps) {
  const [hovered, setHovered] = useState(false);
  const tiles = content.letterTiles;

  return (
    <div
      className={
        hovered
          ? "scalability-letter-bar scalability-letter-bar--aligned"
          : "scalability-letter-bar scalability-letter-bar--tilted"
      }
      aria-label={content.letterBarAriaLabel}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
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
    </div>
  );
}
