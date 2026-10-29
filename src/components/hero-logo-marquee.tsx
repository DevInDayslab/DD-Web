"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "motion/react";
import { HeroLogoMarqueeTile } from "@/components/hero-logo-marquee-tile";
import { heroEdgeFeather } from "@/config/hero-edge-feather";
import { heroMarqueeOuterLiftFactor } from "@/lib/hero-marquee-tile-lift";
import {
  marqueeTileEdgePresentation,
  type MarqueeTileEdgePresentation,
} from "@/lib/hero-marquee-edge-presentation";
import { heroMobileLayoutMediaQuery } from "@/lib/hero-mobile-style";
import { useMediaQuery } from "@/lib/use-media-query";
import type { HeroMarqueeContent, HeroMarqueeLayoutConfig } from "@/types/hero-marquee";

const showHeroMarqueeEdgeOverlays =
  heroEdgeFeather.marquee.edgeTintStrength > 0 && heroEdgeFeather.marquee.edgeBlurPx > 0;

type HeroLogoMarqueeProps = {
  layout: HeroMarqueeLayoutConfig;
  content: HeroMarqueeContent;
};

export function HeroLogoMarquee({ layout, content }: HeroLogoMarqueeProps) {
  const x = useMotionValue(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const segmentRef = useRef<HTMLDivElement>(null);
  const [segmentWidth, setSegmentWidth] = useState(0);
  const [tilePresentations, setTilePresentations] = useState<
    Record<string, MarqueeTileEdgePresentation>
  >({});
  const [tileLiftFactors, setTileLiftFactors] = useState<Record<string, number>>({});
  const isCompact = useMediaQuery(heroMobileLayoutMediaQuery());
  const tiles = isCompact ? layout.mobile.tiles : layout.tiles;
  const layoutMode = isCompact ? "flow" : "absolute";

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
  }, [measureSegment, isCompact]);

  useEffect(() => {
    x.set(0);
  }, [isCompact, x]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) {
      return;
    }

    let frame = 0;

    const updateTilePresentations = () => {
      const viewportRect = viewport.getBoundingClientRect();
      const next: Record<string, MarqueeTileEdgePresentation> = {};
      const nextLift: Record<string, number> = {};

      if (viewportRect.width <= 0) {
        frame = requestAnimationFrame(updateTilePresentations);
        return;
      }

      viewport.querySelectorAll<HTMLElement>("[data-hero-marquee-tile]").forEach((element) => {
        const key = element.dataset.heroMarqueeTile;
        if (!key) {
          return;
        }

        const tileRect = element.getBoundingClientRect();
        const centerX = tileRect.left + tileRect.width / 2 - viewportRect.left;
        const positionInViewport = Math.min(
          1,
          Math.max(0, centerX / viewportRect.width),
        );

        next[key] = marqueeTileEdgePresentation(centerX, viewportRect.width);
        nextLift[key] = heroMarqueeOuterLiftFactor(
          positionInViewport,
          layout.outerLiftZoneFractionAtBaseline,
        );
      });

      setTilePresentations(next);
      setTileLiftFactors(nextLift);
      frame = requestAnimationFrame(updateTilePresentations);
    };

    frame = requestAnimationFrame(updateTilePresentations);
    return () => cancelAnimationFrame(frame);
  }, [isCompact, layout.outerLiftZoneFractionAtBaseline, segmentWidth]);

  useEffect(() => {
    if (segmentWidth <= 0) {
      return;
    }

    let frame = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const deltaSeconds = (now - last) / 1000;
      last = now;

      const speed = isCompact
        ? layout.mobile.scrollSpeedPxPerSecond
        : layout.scrollSpeedPxPerSecondAtBaseline *
          (segmentWidth / layout.segmentWidthAtBaseline);
      let next = x.get() - speed * deltaSeconds;

      if (next <= -segmentWidth) {
        next += segmentWidth;
      }

      x.set(next);

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [
    isCompact,
    layout.mobile.scrollSpeedPxPerSecond,
    layout.scrollSpeedPxPerSecondAtBaseline,
    layout.segmentWidthAtBaseline,
    segmentWidth,
    x,
  ]);

  const renderSegment = (keyPrefix: string) => (
    <div
      ref={keyPrefix === "a" ? segmentRef : undefined}
      className={
        isCompact ? "hero-marquee-segment hero-marquee-segment--flow" : "hero-marquee-segment"
      }
      aria-hidden={keyPrefix === "b" ? true : undefined}
    >
      {tiles.map((tile) => {
        const presentationKey = `${keyPrefix}-${tile.id}`;
        return (
          <HeroLogoMarqueeTile
            key={presentationKey}
            tile={tile}
            layout={layout}
            content={content}
            layoutMode={layoutMode}
            presentationKey={presentationKey}
            liftFactor={tileLiftFactors[presentationKey] ?? 0}
            edgePresentation={tilePresentations[presentationKey]}
          />
        );
      })}
    </div>
  );

  return (
    <div className="hero-marquee" aria-label={content.ariaLabel} role="region">
      <div className="hero-marquee-frame">
        <div ref={viewportRef} className="hero-marquee-viewport">
          <motion.div className="hero-marquee-track" style={{ x }}>
            {renderSegment("a")}
            {renderSegment("b")}
          </motion.div>
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
