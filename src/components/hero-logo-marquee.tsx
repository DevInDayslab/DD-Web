"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "motion/react";
import { HeroLogoMarqueeTile } from "@/components/hero-logo-marquee-tile";
import { normalizeMarqueeMotionValue } from "@/lib/hero-marquee-motion";
import type { HeroMarqueeContent, HeroMarqueeLayoutConfig } from "@/types/hero-marquee";

type HeroLogoMarqueeProps = {
  layout: HeroMarqueeLayoutConfig;
  content: HeroMarqueeContent;
};

export function HeroLogoMarquee({ layout, content }: HeroLogoMarqueeProps) {
  const x = useMotionValue(0);
  const segmentRef = useRef<HTMLDivElement>(null);
  const [segmentWidth, setSegmentWidth] = useState(0);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const hoverRef = useRef(false);

  const measureSegment = useCallback(() => {
    const width = segmentRef.current?.getBoundingClientRect().width ?? 0;
    setSegmentWidth(width);
  }, []);

  useEffect(() => {
    measureSegment();
    const observer = new ResizeObserver(measureSegment);
    if (segmentRef.current) {
      observer.observe(segmentRef.current);
    }
    return () => observer.disconnect();
  }, [measureSegment]);

  useEffect(() => {
    if (segmentWidth <= 0) {
      return;
    }

    let frame = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const deltaSeconds = (now - last) / 1000;
      last = now;

      if (!pausedRef.current && !draggingRef.current) {
        const speedScale = segmentWidth / layout.segmentWidthAtBaseline;
        const speed =
          layout.scrollSpeedPxPerSecondAtBaseline * Math.max(speedScale, 0.35);
        let next = x.get() - speed * deltaSeconds;

        if (next <= -segmentWidth) {
          next += segmentWidth;
        }

        x.set(next);
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [layout.segmentWidthAtBaseline, layout.scrollSpeedPxPerSecondAtBaseline, segmentWidth, x]);

  const handlePointerEnter = () => {
    hoverRef.current = true;
    pausedRef.current = true;
  };

  const handlePointerLeave = () => {
    hoverRef.current = false;
    if (!draggingRef.current) {
      pausedRef.current = false;
    }
  };

  const handleDragStart = () => {
    draggingRef.current = true;
    pausedRef.current = true;
  };

  const handleDragEnd = () => {
    draggingRef.current = false;
    if (segmentWidth > 0) {
      normalizeMarqueeMotionValue(x, segmentWidth);
    }
    pausedRef.current = hoverRef.current;
  };

  const renderSegment = (keyPrefix: string) => (
    <div
      ref={keyPrefix === "a" ? segmentRef : undefined}
      className="hero-marquee-segment"
      aria-hidden={keyPrefix === "b" ? true : undefined}
    >
      {layout.tiles.map((tile) => (
        <HeroLogoMarqueeTile
          key={`${keyPrefix}-${tile.id}`}
          tile={tile}
          layout={layout}
          content={content}
        />
      ))}
    </div>
  );

  return (
    <div className="hero-marquee" aria-label={content.ariaLabel} role="region">
      <div className="hero-marquee-frame">
        <div
          className="hero-marquee-viewport"
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
        >
          <motion.div
            className="hero-marquee-track"
            style={{ x }}
            drag="x"
            dragElastic={0.08}
            dragMomentum={false}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            {renderSegment("a")}
            {renderSegment("b")}
          </motion.div>
        </div>
        <div className="hero-marquee-fade hero-marquee-fade-left" aria-hidden />
        <div className="hero-marquee-fade hero-marquee-fade-right" aria-hidden />
      </div>
    </div>
  );
}
