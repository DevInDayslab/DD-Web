import { HeroArchitecturalFlanks } from "@/components/hero-architectural-flanks";
import { HeroContourLines } from "@/components/hero-contour-lines";
import { HeroContentStage } from "@/components/hero-content-stage";
import { HeroLogoMarquee } from "@/components/hero-logo-marquee";
import { heroContours } from "@/config/hero-contours";
import { heroMarqueeLayout } from "@/config/hero-marquee";
import { heroMarqueeContent } from "@/content/hero/marquee";
import type { HeroContentCopy } from "@/types/hero-content";
import type { HeroFlanksConfig } from "@/types/hero";

type HeroSectionProps = {
  flanks: HeroFlanksConfig;
  content: HeroContentCopy;
};

export function HeroSection({ flanks, content }: HeroSectionProps) {
  return (
    <section className="hero-section relative overflow-x-hidden">
      <HeroArchitecturalFlanks config={flanks} />
      <HeroContourLines config={heroContours} />
      <HeroLogoMarquee layout={heroMarqueeLayout} content={heroMarqueeContent} />
      <HeroContentStage {...content} />
    </section>
  );
}
