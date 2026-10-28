"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ScalabilityLetterChevron } from "@/components/scalability-letter-chevron";
import { ScalabilityLetterTileView } from "@/components/scalability-letter-tile";
import { ScalabilityPillarCard } from "@/components/scalability-pillar-card";
import { scalabilityLetterBarInteraction } from "@/config/scalability-interaction";
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
  const {
    barHoverScale,
    barHoverSpring,
    chevronRotateSpring,
    panelExpandSpring,
    panelContentFadeSeconds,
    panelContentStaggerSeconds,
  } = scalabilityLetterBarInteraction;
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
      <motion.div
        className={panelClassName}
        aria-label={content.letterBarAriaLabel}
        initial={false}
        animate={{ scale: !expanded && hovered ? barHoverScale : 1 }}
        transition={{ type: "spring", ...barHoverSpring }}
      >
        <div className="scalability-panel-header">
          <div
            className="scalability-letter-tiles scalability-letter-tiles-wrap"
            onPointerEnter={() => !expanded && setHovered(true)}
            onPointerLeave={() => setHovered(false)}
          >
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
          <motion.button
            type="button"
            className="scalability-letter-chevron-button"
            onClick={toggleExpanded}
            aria-expanded={expanded}
            aria-label={
              expanded ? content.chevronCollapseAriaLabel : content.chevronExpandAriaLabel
            }
            initial={false}
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ type: "spring", ...chevronRotateSpring }}
          >
            <ScalabilityLetterChevron />
          </motion.button>
        </div>

        <AnimatePresence initial={false}>
          {expanded ? (
            <motion.div
              key="scalability-panel-body"
              className="scalability-panel-body"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                height: { type: "spring", ...panelExpandSpring },
                opacity: { duration: panelContentFadeSeconds },
              }}
            >
              <motion.p
                className="scalability-panel-tagline"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: panelContentStaggerSeconds,
                  duration: panelContentFadeSeconds,
                }}
              >
                {content.panelTagline}
              </motion.p>

              <motion.ul
                className="scalability-panel-pillars"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: panelContentStaggerSeconds,
                      delayChildren: panelContentStaggerSeconds * 1.5,
                    },
                  },
                }}
              >
                {content.pillars.map((pillar) => (
                  <motion.li
                    key={pillar.id}
                    className="scalability-panel-pillar-item"
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { type: "spring", ...panelExpandSpring },
                      },
                    }}
                  >
                    <ScalabilityPillarCard pillar={pillar} />
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                className="scalability-panel-closing"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: panelContentStaggerSeconds * 4,
                  duration: panelContentFadeSeconds,
                }}
              >
                <p className="scalability-panel-closing-lead">{content.closingLead}</p>
                <div className="scalability-panel-closing-body">
                  {content.closingBodyLines.map((line, index) => (
                    <p key={index} className="scalability-panel-closing-body-line">
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence initial={false}>
        {!expanded ? (
          <motion.p
            key="scalability-collapsed-footer"
            className="scalability-footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: panelContentFadeSeconds }}
          >
            {content.footer}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
