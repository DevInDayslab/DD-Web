"use client";

import { WorkCaseMarqueeTile } from "@/components/work-case-marquee-tile";
import type { WorkSectionContent } from "@/types/work-section";

type WorkCaseMarqueeProps = {
  content: Pick<WorkSectionContent, "marqueeAriaLabel" | "marqueeTiles" | "marqueeLogos">;
  activeCaseStudyId: string;
  genieSourceTileId?: string | null;
  onCaseStudySelect: (caseStudyId: string, tileElement: HTMLElement) => void;
};

export function WorkCaseMarquee({
  content,
  activeCaseStudyId,
  genieSourceTileId = null,
  onCaseStudySelect,
}: WorkCaseMarqueeProps) {
  return (
    <div className="work-marquee" aria-label={content.marqueeAriaLabel} role="region">
      <div className="work-marquee-viewport work-marquee-viewport--static">
        <div className="work-marquee-row">
          {content.marqueeTiles.map((tile) => {
            const logo = content.marqueeLogos[tile.logoKey];
            if (!logo) {
              return null;
            }

            return (
              <WorkCaseMarqueeTile
                key={tile.id}
                tile={tile}
                logo={logo}
                isActive={tile.caseStudyId === activeCaseStudyId}
                isGenieSource={tile.id === genieSourceTileId}
                onSelect={onCaseStudySelect}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
