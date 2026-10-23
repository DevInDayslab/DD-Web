import { ScalabilityLetterChevron } from "@/components/scalability-letter-chevron";
import { ScalabilityLetterTileView } from "@/components/scalability-letter-tile";
import type { ScalabilitySectionContent } from "@/types/scalability-section";

type ScalabilityLetterBarProps = {
  content: Pick<ScalabilitySectionContent, "letterTiles" | "letterBarAriaLabel">;
};

export function ScalabilityLetterBar({ content }: ScalabilityLetterBarProps) {
  return (
    <div className="scalability-letter-bar" aria-label={content.letterBarAriaLabel}>
      <div className="scalability-letter-tiles">
        {content.letterTiles.map((tile, index) => (
          <ScalabilityLetterTileView key={`${tile.letter}-${index}`} tile={tile} />
        ))}
      </div>
      <ScalabilityLetterChevron />
    </div>
  );
}
