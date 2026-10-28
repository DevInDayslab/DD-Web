"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "motion/react";
import { WorkCaseMarqueeTile } from "@/components/work-case-marquee-tile";
import { workSectionLayout } from "@/config/work-section";
import { normalizeMarqueeMotionValue } from "@/lib/hero-marquee-motion";
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
  const x = useMotionValue(0);
  const segmentRef = useRef<HTMLDivElement>(null);
  const [segmentWidth, setSegmentWidth] = useState(0);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const hoverRef = useRef(false);
  const dragStartXRef = useRef(0);
  const layout = workSectionLayout;

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
        const speed =
          layout.marqueeScrollSpeedPxPerSecondAtBaseline *
          (segmentWidth / layout.marqueeSegmentWidthAtBaseline);
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
  }, [
    layout.marqueeScrollSpeedPxPerSecondAtBaseline,
    layout.marqueeSegmentWidthAtBaseline,
    segmentWidth,
    x,
  ]);

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
    dragStartXRef.current = x.get();
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
      className="work-marquee-segment"
      aria-hidden={keyPrefix === "b" ? true : undefined}
    >
      {content.marqueeTiles.map((tile) => {
        const logo = content.marqueeLogos[tile.logoKey];
        if (!logo) {
          return null;
        }

        return (
          <WorkCaseMarqueeTile
            key={`${keyPrefix}-${tile.id}`}
            tile={tile}
            logo={logo}
            isActive={tile.caseStudyId === activeCaseStudyId}
            isGenieSource={tile.id === genieSourceTileId}
            onSelect={onCaseStudySelect}
          />
        );
      })}
    </div>
  );

  return (
    <div className="work-marquee" aria-label={content.marqueeAriaLabel} role="region">
      <div
        className="work-marquee-viewport"
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
      >
        <motion.div
          className="work-marquee-track"
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
    </div>
  );
}
