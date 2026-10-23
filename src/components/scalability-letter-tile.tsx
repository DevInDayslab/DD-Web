import type { ScalabilityLetterTile } from "@/types/scalability-section";

type ScalabilityLetterTileProps = {
  tile: ScalabilityLetterTile;
};

export function ScalabilityLetterTileView({ tile }: ScalabilityLetterTileProps) {
  return (
    <span
      className="scalability-letter-tile"
      style={{ transform: `rotate(${tile.rotationDeg}deg)` }}
      aria-hidden
    >
      <span className="scalability-letter-tile-char">{tile.letter}</span>
    </span>
  );
}
