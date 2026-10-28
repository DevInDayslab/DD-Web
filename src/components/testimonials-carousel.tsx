"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "motion/react";
import { TestimonialCardText } from "@/components/testimonial-card-text";
import { TestimonialCardVideo } from "@/components/testimonial-card-video";
import { testimonialsSectionLayout } from "@/config/testimonials-section";
import { normalizeMarqueeMotionValue } from "@/lib/hero-marquee-motion";
import type { TestimonialCard, TestimonialsSectionContent } from "@/types/testimonials-section";

type TestimonialsCarouselProps = {
  content: Pick<TestimonialsSectionContent, "carouselAriaLabel" | "cards">;
};

function TestimonialCarouselCard({ card }: { card: TestimonialCard }) {
  if (card.kind === "text") {
    return <TestimonialCardText card={card} />;
  }
  return <TestimonialCardVideo card={card} />;
}

export function TestimonialsCarousel({ content }: TestimonialsCarouselProps) {
  const x = useMotionValue(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const segmentRef = useRef<HTMLDivElement>(null);
  const [segmentWidth, setSegmentWidth] = useState(0);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const hoverRef = useRef(false);
  const layout = testimonialsSectionLayout;

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
  }, [measureSegment, content.cards.length]);

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
      className="testimonials-carousel-segment"
      aria-hidden={keyPrefix === "b" ? true : undefined}
    >
      {content.cards.map((card) => (
        <div key={`${keyPrefix}-${card.id}`} className="testimonials-carousel-item">
          <TestimonialCarouselCard card={card} />
        </div>
      ))}
    </div>
  );

  return (
    <div className="testimonials-carousel" aria-label={content.carouselAriaLabel} role="region">
      <div
        ref={viewportRef}
        className="testimonials-carousel-viewport"
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
      >
        <motion.div
          className="testimonials-carousel-track"
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
  );
}
