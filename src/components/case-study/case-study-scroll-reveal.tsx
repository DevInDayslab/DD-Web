"use client";

import { motion } from "motion/react";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";
import type { ReactNode } from "react";

type CaseStudyScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function CaseStudyScrollReveal({
  children,
  className = "",
  delay: _delay = 0,
}: CaseStudyScrollRevealProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
