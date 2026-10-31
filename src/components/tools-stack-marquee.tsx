"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ToolsStackMarqueeItem } from "@/components/tools-stack-marquee-item";
import { toolsSectionLayout } from "@/config/tools-section";
import { toolsEdgeFeather } from "@/config/tools-edge-feather";
import { marqueeEntryEdgePresentation } from "@/lib/marquee-edge-presentation";
import type { ToolsSectionContent } from "@/types/tools-section";

type ToolsStackMarqueeProps = {
  content: Pick<ToolsSectionContent, "marqueeAriaLabel" | "stackItems">;
};

type EntryMetric = {
  element: HTMLElement;
  centerInTrack: number;
};

export function ToolsStackMarquee({ content }: ToolsStackMarqueeProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const segmentRef = useRef<HTMLDivElement>(null);
  const [segmentWidth, setSegmentWidth] = useState(0);
  const layout = toolsSectionLayout;
  const edgeFade = toolsEdgeFeather.entryEdgeFade;

  const measureSegment = useCallback(() => {
    setSegmentWidth(segmentRef.current?.getBoundingClientRect().width ?? 0);
  }, []);

  useEffect(() => {
    measureSegment();
    const observer = new ResizeObserver(measureSegment);
    if (segmentRef.current) {
      observer.observe(segmentRef.current);
    }
    return () => observer.disconnect();
  }, [measureSegment]);

  // One loop moves the track and restyles entries directly on the DOM, so there is no per-frame
  // React render and the edge fade always matches the track position.
  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track || segmentWidth <= 0) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let offset = 0;
    let viewportWidth = 0;
    let metrics: EntryMetric[] = [];
    let visible = true;
    let frame = 0;
    let last = performance.now();

    const measure = () => {
      const viewportRect = viewport.getBoundingClientRect();
      viewportWidth = viewportRect.width;
      metrics = Array.from(
        viewport.querySelectorAll<HTMLElement>("[data-tools-marquee-entry]"),
      ).map((element) => {
        const rect = element.getBoundingClientRect();
        return {
          element,
          centerInTrack: rect.left + rect.width / 2 - viewportRect.left - offset,
        };
      });
    };

    const paint = () => {
      track.style.transform = `translate3d(${offset}px, 0, 0)`;
      if (viewportWidth <= 0) {
        return;
      }
      for (const metric of metrics) {
        const centerX = metric.centerInTrack + offset;
        if (centerX < -viewportWidth * 0.2 || centerX > viewportWidth * 1.2) {
          continue;
        }
        const edge = marqueeEntryEdgePresentation(centerX, viewportWidth, edgeFade);
        metric.element.style.opacity = String(edge.opacity);
        metric.element.style.transform = `scale(${edge.scale})`;
      }
    };

    const tick = (now: number) => {
      const deltaSeconds = Math.min((now - last) / 1000, 0.05);
      last = now;

      if (visible && !reducedMotion) {
        const speed =
          layout.marqueeScrollSpeedPxPerSecondAtBaseline *
          (segmentWidth / layout.marqueeSegmentWidthAtBaseline);
        offset -= speed * deltaSeconds;
        if (offset <= -segmentWidth) {
          offset += segmentWidth;
        }
        paint();
      }

      frame = requestAnimationFrame(tick);
    };

    measure();
    paint();

    const resizeObserver = new ResizeObserver(() => {
      measure();
      paint();
    });
    resizeObserver.observe(viewport);

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? true;
      last = performance.now();
    });
    intersectionObserver.observe(viewport);

    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [
    edgeFade,
    layout.marqueeScrollSpeedPxPerSecondAtBaseline,
    layout.marqueeSegmentWidthAtBaseline,
    segmentWidth,
  ]);

  const renderSegment = (keyPrefix: string) => (
    <div
      ref={keyPrefix === "a" ? segmentRef : undefined}
      className="tools-stack-marquee-segment"
      aria-hidden={keyPrefix === "b" ? true : undefined}
    >
      {content.stackItems.map((item, index) => (
        <ToolsStackMarqueeItem
          key={`${keyPrefix}-${item.id}`}
          entryKey={`${keyPrefix}-${item.id}`}
          item={item}
          showLeadingSeparator={index > 0}
        />
      ))}
    </div>
  );

  return (
    <div className="tools-stack-marquee" aria-label={content.marqueeAriaLabel} role="region">
      <div className="tools-stack-pill">
        <div ref={viewportRef} className="tools-stack-pill-viewport">
          <div ref={trackRef} className="tools-stack-marquee-track">
            {renderSegment("a")}
            {renderSegment("b")}
          </div>
        </div>
      </div>
    </div>
  );
}
