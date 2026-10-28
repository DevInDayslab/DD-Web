"use client";

import { useCallback, useMemo, useRef, useState, type CSSProperties } from "react";
import { useAnimate } from "motion/react";
import { WorkCaseMarquee } from "@/components/work-case-marquee";
import { WorkFeaturedCard } from "@/components/work-featured-card";
import {
  WorkGenieCanvas,
  type WorkGenieCanvasHandle,
} from "@/components/work-genie-canvas";
import { workCaseStudyGenieInteraction } from "@/config/work-interaction";
import { workSectionLayout } from "@/config/work-section";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";
import { genieOriginFromRects } from "@/lib/work-genie-origin";
import { openRevealAmount } from "@/lib/work-genie-reveal";
import type { WorkFeaturedCaseStudy, WorkSectionContent } from "@/types/work-section";

type WorkSectionShowcaseProps = {
  content: Pick<
    WorkSectionContent,
    | "defaultCaseStudyId"
    | "caseStudies"
    | "marqueeAriaLabel"
    | "marqueeTiles"
    | "marqueeLogos"
  >;
  phonePlaceholderLabel: string;
};

function logoSrcForCaseStudy(
  content: WorkSectionShowcaseProps["content"],
  caseStudyId: string,
): string | null {
  const tile = content.marqueeTiles.find((entry) => entry.caseStudyId === caseStudyId);
  if (!tile) {
    return null;
  }
  const logo = content.marqueeLogos[tile.logoKey];
  if (!logo || logo.pending || !logo.src) {
    return null;
  }
  return logo.src;
}

function readRadiusPx(element: HTMLElement, fallback: number): number {
  const value = getComputedStyle(element).borderRadius;
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function waitForLayout(): Promise<void> {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => resolve());
    });
  });
}

function measureGenieRects(
  tileElement: HTMLElement,
  cardHost: HTMLDivElement,
): {
  tileRect: DOMRect;
  cardRect: DOMRect;
  iconRadius: number;
  expandedRadius: number;
} {
  const cardSurface = cardHost.querySelector(".work-featured-card") as HTMLElement | null;
  return {
    tileRect: tileElement.getBoundingClientRect(),
    cardRect: cardHost.getBoundingClientRect(),
    iconRadius: readRadiusPx(tileElement, workSectionLayout.marqueeTileRadiusAtBaseline),
    expandedRadius: readRadiusPx(
      cardSurface ?? cardHost,
      workSectionLayout.featuredCardRadiusAtBaseline,
    ),
  };
}

export function WorkSectionShowcase({ content, phonePlaceholderLabel }: WorkSectionShowcaseProps) {
  const [activeCaseStudyId, setActiveCaseStudyId] = useState(content.defaultCaseStudyId);
  const [genieActive, setGenieActive] = useState(false);
  const [genieCardOpacity, setGenieCardOpacity] = useState(0);
  const [genieSourceTileId, setGenieSourceTileId] = useState<string | null>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const genieRef = useRef<WorkGenieCanvasHandle>(null);
  const [cardHostRef, animateCard] = useAnimate<HTMLDivElement>();
  const transitioningRef = useRef(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const caseStudyById = useMemo(() => {
    const map = new Map<string, WorkFeaturedCaseStudy>();
    for (const study of content.caseStudies) {
      map.set(study.id, study);
    }
    return map;
  }, [content.caseStudies]);

  const activeCaseStudy =
    caseStudyById.get(activeCaseStudyId) ?? content.caseStudies[0];

  const syncOpenCrossfade = useCallback((progress: number) => {
    setGenieCardOpacity(openRevealAmount(progress));
  }, []);

  const runCssGenieFallback = useCallback(
    async (caseStudyId: string, tileElement: HTMLElement) => {
      if (!cardHostRef.current) {
        return;
      }

      const cardHost = cardHostRef.current;
      const tileRect = tileElement.getBoundingClientRect();
      const cardRect = cardHost.getBoundingClientRect();
      const origin = genieOriginFromRects(tileRect, cardRect);

      cardHost.style.transformOrigin = `${origin.xPercent}% ${origin.yPercent}%`;

      const {
        minimizeDurationSeconds,
        expandDurationSeconds,
        minimizeScaleX,
        minimizeScaleY,
        minimizeOpacity,
        minimizeSkewYDeg,
        expandSkewYDeg,
        minimizeEase,
        expandEase,
      } = workCaseStudyGenieInteraction;

      await animateCard(
        cardHost,
        {
          scaleX: minimizeScaleX,
          scaleY: minimizeScaleY,
          opacity: minimizeOpacity,
          skewY: minimizeSkewYDeg,
        },
        { duration: minimizeDurationSeconds, ease: minimizeEase },
      );

      setActiveCaseStudyId(caseStudyId);
      await waitForLayout();

      await animateCard(
        cardHost,
        {
          scaleX: 1,
          scaleY: 1,
          opacity: 1,
          skewY: expandSkewYDeg,
        },
        { duration: expandDurationSeconds * 0.35, ease: minimizeEase },
      );

      await animateCard(
        cardHost,
        { skewY: 0 },
        { duration: expandDurationSeconds * 0.65, ease: expandEase },
      );
    },
    [animateCard, cardHostRef],
  );

  const handleCaseStudySelect = useCallback(
    async (caseStudyId: string, tileElement: HTMLElement) => {
      if (caseStudyId === activeCaseStudyId || transitioningRef.current) {
        return;
      }

      const nextCaseStudy = caseStudyById.get(caseStudyId);
      if (!nextCaseStudy || !cardHostRef.current || !showcaseRef.current) {
        return;
      }

      transitioningRef.current = true;
      const tileConfig = content.marqueeTiles.find((tile) => tile.caseStudyId === caseStudyId);
      setGenieSourceTileId(tileConfig?.id ?? null);
      setGenieActive(true);
      setGenieCardOpacity(0);

      const cardHost = cardHostRef.current;
      let { tileRect, cardRect, iconRadius, expandedRadius } = measureGenieRects(
        tileElement,
        cardHost,
      );
      const imageSrc = logoSrcForCaseStudy(content, caseStudyId);

      const canUseWebGl =
        !prefersReducedMotion &&
        genieRef.current?.isSupported() &&
        cardRect.width > 0 &&
        tileRect.width > 0;

      if (canUseWebGl && genieRef.current) {
        try {
          await genieRef.current.runPhase({
            tileRect,
            cardRect,
            iconRadius,
            expandedRadius,
            imageSrc: null,
            phase: "toTile",
          });

          setActiveCaseStudyId(caseStudyId);
          await waitForLayout();

          ({ tileRect, cardRect, iconRadius, expandedRadius } = measureGenieRects(
            tileElement,
            cardHost,
          ));

          await genieRef.current.runPhase({
            tileRect,
            cardRect,
            iconRadius,
            expandedRadius,
            imageSrc,
            phase: "toCard",
            onProgress: (progress) => {
              syncOpenCrossfade(progress);
            },
          });

          setGenieCardOpacity(1);
        } catch {
          setGenieActive(false);
          setGenieCardOpacity(1);
          await runCssGenieFallback(caseStudyId, tileElement);
        } finally {
          setGenieActive(false);
          setGenieCardOpacity(1);
          setGenieSourceTileId(null);
        }
      } else {
        setGenieActive(false);
        setGenieCardOpacity(1);
        await runCssGenieFallback(caseStudyId, tileElement);
        setGenieSourceTileId(null);
      }

      transitioningRef.current = false;
    },
    [
      activeCaseStudyId,
      cardHostRef,
      caseStudyById,
      content,
      prefersReducedMotion,
      runCssGenieFallback,
      syncOpenCrossfade,
    ],
  );

  const cardHostClassName = genieActive
    ? "work-featured-card-host work-featured-card-host--genie-transition"
    : "work-featured-card-host";

  return (
    <div ref={showcaseRef} className="work-section-showcase">
      <WorkGenieCanvas
        ref={genieRef}
        className={
          genieActive
            ? "work-genie-canvas work-genie-canvas--active"
            : "work-genie-canvas"
        }
      />
      <div
        ref={cardHostRef}
        className={cardHostClassName}
        style={
          genieActive
            ? ({
                "--dd-work-genie-card-opacity": genieCardOpacity,
              } as CSSProperties)
            : undefined
        }
      >
        <WorkFeaturedCard
          caseStudy={activeCaseStudy}
          phonePlaceholderLabel={phonePlaceholderLabel}
        />
      </div>
      <WorkCaseMarquee
        content={content}
        activeCaseStudyId={activeCaseStudyId}
        genieSourceTileId={genieSourceTileId}
        onCaseStudySelect={handleCaseStudySelect}
      />
    </div>
  );
}
