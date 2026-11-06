"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

type CaseStudyScrollRevealCalloutProps = {
  children: ReactNode;
  className?: string;
};

/** One subtle scroll-into-view fade for quotes/callouts only (reduced motion = static). */
export function CaseStudyScrollRevealCallout({
  children,
  className = "",
}: CaseStudyScrollRevealCalloutProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0.88, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
