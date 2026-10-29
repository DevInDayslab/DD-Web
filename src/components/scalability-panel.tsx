"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ScalabilityLetterChevron } from "@/components/scalability-letter-chevron";
import { ScalabilityLetterTileView } from "@/components/scalability-letter-tile";
import { ScalabilityPillarCard } from "@/components/scalability-pillar-card";
import type { ScalabilitySectionContent } from "@/types/scalability-section";

type ScalabilityPanelProps = {
  content: Pick<
    ScalabilitySectionContent,
    | "letterTiles"
    | "letterBarAriaLabel"
    | "panelTagline"
    | "pillars"
    | "closingLead"
    | "closingBodyLines"
    | "chevronExpandAriaLabel"
    | "chevronCollapseAriaLabel"
    | "footer"
  >;
};

export function ScalabilityPanel({ content }: ScalabilityPanelProps) {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const lettersAligned = expanded || hovered;
  const tiles = content.letterTiles;

  const toggleExpanded = () => setExpanded((value) => !value);

  const alignmentClass = lettersAligned
    ? "scalability-letter-bar--aligned"
    : "scalability-letter-bar--tilted";
  const panelClassName = expanded
    ? `scalability-panel scalability-panel--expanded scalability-letter-bar ${alignmentClass}`
    : `scalability-panel scalability-panel--collapsed scalability-letter-bar ${alignmentClass}`;

  return (
    <div
      className={
        expanded
          ? "scalability-panel-wrap scalability-panel-wrap--expanded"
          : "scalability-panel-wrap"
      }
    >
      <div className={panelClassName} aria-label={content.letterBarAriaLabel}>
        <div
          className="scalability-panel-header"
          onPointerEnter={() => !expanded && setHovered(true)}
          onPointerLeave={() => !expanded && setHovered(false)}
        >
          <div className="scalability-letter-tiles scalability-letter-tiles-wrap">
            {tiles.map((tile, index) => (
              <ScalabilityLetterTileView
                key={`${tile.letter}-${index}`}
                tile={tile}
                hovered={lettersAligned}
                index={index}
                total={tiles.length}
              />
            ))}
          </div>
          <button
            type="button"
            className="scalability-letter-chevron-button"
            onClick={toggleExpanded}
            aria-expanded={expanded}
            aria-label={
              expanded ? content.chevronCollapseAriaLabel : content.chevronExpandAriaLabel
            }
          >
            <ScalabilityLetterChevron />
          </button>
        </div>

        <div
          className="scalability-panel-body-wrap"
          data-expanded={expanded ? "true" : "false"}
          aria-hidden={!expanded}
        >
          <div className="scalability-panel-body-inner">
            <div className="scalability-panel-body">
              <p className="scalability-panel-tagline">{content.panelTagline}</p>

              <ul className="scalability-panel-pillars">
                {content.pillars.map((pillar) => (
                  <li key={pillar.id} className="scalability-panel-pillar-item">
                    <ScalabilityPillarCard pillar={pillar} />
                  </li>
                ))}
              </ul>

              <div className="scalability-panel-closing">
                <p className="scalability-panel-closing-lead">{content.closingLead}</p>
                <div className="scalability-panel-closing-body">
                  {content.closingBodyLines.map((line, index) => (
                    <p key={index} className="scalability-panel-closing-body-line">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {!expanded ? (
          <motion.p
            key="scalability-collapsed-footer"
            className="scalability-footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {content.footer}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
