import { HeroActions } from "@/components/hero-actions";
import type { HeroContentCopy } from "@/types/hero-content";

export type HeroContentStageProps = HeroContentCopy;

export function HeroContentStage({ headline, subtitle, actions }: HeroContentStageProps) {
  return (
    <div className="hero-content-stage">
      <h1 className="hero-headline">
        <span className="hero-headline-primary">{headline.primary}</span>
        <span className="hero-headline-secondary">{headline.secondary}</span>
      </h1>
      <p className="hero-subtitle">{subtitle}</p>
      <HeroActions actions={actions} />
    </div>
  );
}
