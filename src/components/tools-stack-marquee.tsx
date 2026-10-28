"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "motion/react";
import { ToolsStackMarqueeItem } from "@/components/tools-stack-marquee-item";
import { toolsSectionLayout } from "@/config/tools-section";
import { toolsEdgeFeather } from "@/config/tools-edge-feather";
import { normalizeMarqueeMotionValue } from "@/lib/hero-marquee-motion";
import {
  marqueeEntryEdgePresentation,
  type MarqueeEntryEdgePresentation,
} from "@/lib/marquee-edge-presentation";
import type { ToolsSectionContent } from "@/types/tools-section";

type ToolsStackMarqueeProps = {
  content: Pick<ToolsSectionContent, "marqueeAriaLabel" | "stackItems">;
};

export function ToolsStackMarquee({ content }: ToolsStackMarqueeProps) {
  const x = useMotionValue(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const segmentRef = useRef<HTMLDivElement>(null);
  const [segmentWidth, setSegmentWidth] = useState(0);
  const [entryPresentations, setEntryPresentations] = useState<
    Record<string, MarqueeEntryEdgePresentation>
  >({});
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const hoverRef = useRef(false);
  const layout = toolsSectionLayout;
  const edgeFade = toolsEdgeFeather.entryEdgeFade;

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
    const viewport = viewportRef.current;
    if (!viewport) {
      return;
    }

    let frame = 0;

    const updatePresentations = () => {
      const viewportRect = viewport.getBoundingClientRect();
      const next: Record<string, MarqueeEntryEdgePresentation> = {};

      viewport.querySelectorAll<HTMLElement>("[data-tools-marquee-entry]").forEach((element) => {
        const key = element.dataset.toolsMarqueeEntry;
        if (!key) {
          return;
        }

        const entryRect = element.getBoundingClientRect();
        const centerX = entryRect.left + entryRect.width / 2 - viewportRect.left;
        next[key] = marqueeEntryEdgePresentation(centerX, viewportRect.width, edgeFade);
      });

      setEntryPresentations(next);
      frame = requestAnimationFrame(updatePresentations);
    };

    frame = requestAnimationFrame(updatePresentations);
    return () => cancelAnimationFrame(frame);
  }, [edgeFade, segmentWidth]);

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
      className="tools-stack-marquee-segment"
      aria-hidden={keyPrefix === "b" ? true : undefined}
    >
      {content.stackItems.map((item, index) => {
        const entryKey = `${keyPrefix}-${item.id}`;
        return (
          <ToolsStackMarqueeItem
            key={entryKey}
            entryKey={entryKey}
            item={item}
            showLeadingSeparator={index > 0}
            edgePresentation={entryPresentations[entryKey]}
          />
        );
      })}
    </div>
  );

  return (
    <div className="tools-stack-marquee" aria-label={content.marqueeAriaLabel} role="region">
      <div className="tools-stack-pill">
        <div
          ref={viewportRef}
          className="tools-stack-pill-viewport"
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
        >
          <motion.div
            className="tools-stack-marquee-track"
            style={{ x }}
            drag="x"
            dragElastic={0.06}
            dragMomentum={false}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            {renderSegment("a")}
            {renderSegment("b")}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
