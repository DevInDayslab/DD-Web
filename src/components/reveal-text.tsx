"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ElementType } from "react";

type RevealTextProps = {
  text: string;
  as?: ElementType;
  className?: string;
  id?: string;
  /** Seconds before the first word starts. */
  delay?: number;
  /** Seconds between words. */
  stagger?: number;
};

/**
 * Words rise and un-blur one after another. Used for headlines that should feel set in place,
 * not just appear. Falls back to plain text with reduced motion.
 */
export function RevealText({
  text,
  as: Tag = "span",
  className,
  id,
  delay = 0,
  stagger = 0.035,
}: RevealTextProps) {
  const reduced = useReducedMotion();
  const words = text.split(" ");

  if (reduced) {
    return (
      <Tag className={className} id={id}>
        {text}
      </Tag>
    );
  }

  return (
    <Tag className={className} id={id} aria-label={text}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          aria-hidden
          className="reveal-word"
          initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            delay: delay + index * stagger,
            type: "spring",
            stiffness: 260,
            damping: 26,
            mass: 0.8,
            filter: { duration: 0.35, delay: delay + index * stagger },
          }}
        >
          {word}
          {index < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </Tag>
  );
}
