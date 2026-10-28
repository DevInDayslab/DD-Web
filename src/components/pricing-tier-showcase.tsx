"use client";

import { useMemo, useState } from "react";
import { QualifierCta } from "@/components/project-qualifier/qualifier-cta";
import { AnimatePresence, motion } from "motion/react";
import { PricingCheckIcon } from "@/components/pricing-check-icon";
import type { PricingSectionContent, PricingTier, PricingTierId } from "@/types/pricing-section";

const tabSpring = { type: "spring" as const, stiffness: 520, damping: 38, mass: 0.75 };
const panelSpring = { type: "spring" as const, stiffness: 340, damping: 32, mass: 0.9 };
const surfaceLayoutTransition = { layout: { type: "spring" as const, stiffness: 280, damping: 32 } };

const panelVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.045, delayChildren: 0.05 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.12, ease: [0.4, 0, 1, 1] as const },
  },
};

const scopeColumnVariants = {
  hidden: { opacity: 0, x: -18, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: panelSpring,
  },
};

const priceCardVariants = {
  hidden: { opacity: 0, x: 18, scale: 0.97, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { ...panelSpring, delay: 0.06 },
  },
};

const featureItemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 420, damping: 30 },
  },
};

type PricingTierShowcaseProps = {
  content: Pick<
    PricingSectionContent,
    "tabsAriaLabel" | "defaultTierId" | "tiers"
  >;
};

export function PricingTierShowcase({ content }: PricingTierShowcaseProps) {
  const [activeTierId, setActiveTierId] = useState<PricingTierId>(content.defaultTierId);

  const activeTier = useMemo(
    () => content.tiers.find((tier) => tier.id === activeTierId) ?? content.tiers[0],
    [activeTierId, content.tiers],
  );

  return (
    <>
      <div className="pricing-tabs-block">
        <motion.div
          className="pricing-tabs"
          role="tablist"
          aria-label={content.tabsAriaLabel}
          layout
          transition={surfaceLayoutTransition.layout}
        >
          {content.tiers.map((tier) => {
            const isActive = tier.id === activeTierId;
            return (
              <motion.button
                key={tier.id}
                type="button"
                role="tab"
                id={`pricing-tab-${tier.id}`}
                aria-selected={isActive}
                aria-controls={`pricing-panel-${tier.id}`}
                className={`pricing-tab${isActive ? " pricing-tab-active" : ""}`}
                onClick={() => setActiveTierId(tier.id)}
                whileTap={{ scale: 0.97 }}
                layout="position"
                transition={tabSpring}
              >
                {isActive ? (
                  <motion.span
                    layoutId="pricing-tab-active-pill"
                    className="pricing-tab-active-bg"
                    transition={tabSpring}
                  />
                ) : null}
                <motion.span
                  className="pricing-tab-label"
                  animate={{
                    scale: isActive ? 1 : 0.98,
                    opacity: isActive ? 1 : 0.88,
                  }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  {tier.tabLabel}
                </motion.span>
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      <motion.div
        className="pricing-surface"
        layout
        transition={surfaceLayoutTransition.layout}
        data-tier={activeTier.id}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeTier.id}
            id={`pricing-panel-${activeTier.id}`}
            role="tabpanel"
            aria-labelledby={`pricing-tab-${activeTier.id}`}
            className="pricing-surface-panel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.14 } }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <PricingTierPanel tier={activeTier} />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </>
  );
}

function PricingTierPanel({ tier }: { tier: PricingTier }) {
  return (
    <motion.div
      className="pricing-tier-layout"
      layout
      transition={surfaceLayoutTransition.layout}
      variants={panelVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="pricing-tier-scope" variants={scopeColumnVariants}>
        <div className="pricing-tier-header">
          <h3 className="pricing-tier-title">{tier.title}</h3>
          <span className="pricing-tier-duration">{tier.durationBadge}</span>
        </div>
        <motion.ul
          className="pricing-feature-list"
          variants={{
            visible: { transition: { staggerChildren: 0.035, delayChildren: 0.1 } },
          }}
        >
          {tier.features.map((feature) => (
            <motion.li key={feature} className="pricing-feature-item" variants={featureItemVariants}>
              <PricingCheckIcon />
              <span>{feature}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      <motion.div className="pricing-price-card" variants={priceCardVariants}>
        <div className="pricing-price-card-glow" aria-hidden />
        <p className="pricing-investment-label">{tier.investmentLabel}</p>
        <p className="pricing-price">{tier.price}</p>
        {tier.priceSubtitle ? (
          <p className="pricing-price-subtitle">{tier.priceSubtitle}</p>
        ) : null}
        <QualifierCta
          className="pricing-cta"
          href={tier.ctaHref}
          label={tier.ctaLabel}
          ariaLabel={tier.ctaAriaLabel}
        >
          <span>{tier.ctaLabel}</span>
          <span className="pricing-cta-icon" aria-hidden>
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </QualifierCta>
      </motion.div>
    </motion.div>
  );
}
