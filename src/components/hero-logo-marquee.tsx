"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { HeroLogoMarqueeTile } from "@/components/hero-logo-marquee-tile";
import { heroEdgeFeather } from "@/config/hero-edge-feather";
import { marqueeTileEdgePresentation } from "@/lib/hero-marquee-edge-presentation";
import { heroMarqueeOuterLiftFactor } from "@/lib/hero-marquee-tile-lift";
import { heroMarqueeTileTransform } from "@/lib/hero-marquee-tile-transform";
import { heroMobileLayoutMediaQuery } from "@/lib/hero-mobile-style";
import { useMediaQuery } from "@/lib/use-media-query";
import type { HeroMarqueeContent, HeroMarqueeLayoutConfig } from "@/types/hero-marquee";

const showHeroMarqueeEdgeOverlays =
  heroEdgeFeather.marquee.edgeTintStrength > 0 && heroEdgeFeather.marquee.edgeBlurPx > 0;

type HeroLogoMarqueeProps = {
  layout: HeroMarqueeLayoutConfig;
  content: HeroMarqueeContent;
};

type TileMetric = {
  element: HTMLElement;
  centerInTrack: number;
  rotationDeg: number;
};

export function HeroLogoMarquee({ layout, content }: HeroLogoMarqueeProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const segmentRef = useRef<HTMLDivElement>(null);
  const [segmentWidth, setSegmentWidth] = useState(0);
  // Stays false until the tiles have been laid out on the curve, so the flat server markup is never shown.
  const [ready, setReady] = useState(false);
  // How far through one segment the track has travelled (0 to 1). Kept outside the effect so a
  // re-measure, resize or hot reload continues from the same spot instead of snapping back to the start.
  const phaseRef = useRef(0);
  const isCompact = useMediaQuery(heroMobileLayoutMediaQuery());
  const tiles = isCompact ? layout.mobile.tiles : layout.tiles;
  const layoutMode = isCompact ? "flow" : "absolute";

  const measureSegment = useCallback(() => {
    // Layout width, not getBoundingClientRect: an animated or scaled ancestor must not change the loop length.
    const element = segmentRef.current;
    const width = element ? Number.parseFloat(getComputedStyle(element).width) : 0;
    setSegmentWidth(Number.isFinite(width) ? width : 0);
  }, []);

  useEffect(() => {
    measureSegment();
    const observer = new ResizeObserver(measureSegment);
    if (segmentRef.current) {
      observer.observe(segmentRef.current);
    }
    return () => observer.disconnect();
  }, [measureSegment, isCompact]);

  // One animation loop moves the track and restyles tiles straight on the DOM. No React state
  // changes per frame, so nothing re-renders mid-scroll and tile styling never lags the track.
  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track || segmentWidth <= 0) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let offset = -phaseRef.current * segmentWidth;
    let viewportWidth = 0;
    let metrics: TileMetric[] = [];
    let visible = true;
    let frame = 0;
    let last = performance.now();

    const measure = () => {
      const viewportRect = viewport.getBoundingClientRect();
      viewportWidth = viewportRect.width;
      metrics = Array.from(
        viewport.querySelectorAll<HTMLElement>("[data-hero-marquee-tile]"),
      ).map((element) => {
        const rect = element.getBoundingClientRect();
        return {
          element,
          centerInTrack: rect.left + rect.width / 2 - viewportRect.left - offset,
          rotationDeg: Number(element.dataset.rotation ?? 0),
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
        const lift = heroMarqueeOuterLiftFactor(
          Math.min(1, Math.max(0, centerX / viewportWidth)),
          layout.outerLiftZoneFractionAtBaseline,
        );
        const edge = marqueeTileEdgePresentation(centerX, viewportWidth);
        metric.element.style.transform = heroMarqueeTileTransform(
          lift,
          metric.rotationDeg,
          edge.scale,
          layoutMode,
        );
        metric.element.style.opacity = String(edge.opacity);
      }
    };

    const tick = (now: number) => {
      const deltaSeconds = Math.min((now - last) / 1000, 0.05);
      last = now;

      if (visible && !reducedMotion) {
        const speed = isCompact
          ? layout.mobile.scrollSpeedPxPerSecond
          : layout.scrollSpeedPxPerSecondAtBaseline *
            (segmentWidth / layout.segmentWidthAtBaseline);
        offset -= speed * deltaSeconds;
        if (offset <= -segmentWidth) {
          offset += segmentWidth;
        }
        phaseRef.current = -offset / segmentWidth;
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
    // Reveal only if this run survives two frames. A change of layout mode (the media query settles right
    // after mount) re-runs the effect and cancels this, so the first visible frame is already curved.
    let revealFrame = requestAnimationFrame(() => {
      revealFrame = requestAnimationFrame(() => setReady(true));
    });
    return () => {
      cancelAnimationFrame(revealFrame);
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [
    isCompact,
    layout.mobile.scrollSpeedPxPerSecond,
    layout.outerLiftZoneFractionAtBaseline,
    layout.scrollSpeedPxPerSecondAtBaseline,
    layout.segmentWidthAtBaseline,
    layoutMode,
    segmentWidth,
  ]);

  const renderSegment = (keyPrefix: string) => (
    <div
      ref={keyPrefix === "a" ? segmentRef : undefined}
      className={
        isCompact ? "hero-marquee-segment hero-marquee-segment--flow" : "hero-marquee-segment"
      }
      aria-hidden={keyPrefix === "b" ? true : undefined}
    >
      {tiles.map((tile) => (
        <HeroLogoMarqueeTile
          key={`${keyPrefix}-${tile.id}`}
          tile={tile}
          layout={layout}
          content={content}
          layoutMode={layoutMode}
          presentationKey={`${keyPrefix}-${tile.id}`}
        />
      ))}
    </div>
  );

  return (
    <div
      className="hero-marquee"
      aria-label={content.ariaLabel}
      role="region"
      data-ready={ready ? "" : undefined}
    >
      <div className="hero-marquee-frame">
        <div ref={viewportRef} className="hero-marquee-viewport">
          <div ref={trackRef} className="hero-marquee-track">
            {renderSegment("a")}
            {renderSegment("b")}
          </div>
        </div>
        {showHeroMarqueeEdgeOverlays ? (
          <>
            <div className="hero-marquee-edge-soft hero-marquee-edge-soft-left" aria-hidden />
            <div className="hero-marquee-edge-soft hero-marquee-edge-soft-right" aria-hidden />
          </>
        ) : null}
      </div>
    </div>
  );
}
