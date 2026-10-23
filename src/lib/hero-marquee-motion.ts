import type { MotionValue } from "motion/react";

export function wrapMarqueeOffset(value: number, segmentWidth: number): number {
  if (segmentWidth <= 0) {
    return value;
  }

  let next = value;

  while (next <= -segmentWidth) {
    next += segmentWidth;
  }

  while (next > 0) {
    next -= segmentWidth;
  }

  return next;
}

export function normalizeMarqueeMotionValue(x: MotionValue<number>, segmentWidth: number) {
  x.set(wrapMarqueeOffset(x.get(), segmentWidth));
}
