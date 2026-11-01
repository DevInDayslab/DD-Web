import { HeroActions } from "@/components/hero-actions";
import type { HeroContentCopy } from "@/types/hero-content";

export type HeroContentStageProps = HeroContentCopy;

export function HeroContentStage({ headline, subtitle, subtitleShort, actions }: HeroContentStageProps) {
  return (
    <div className="hero-content-stage">
      <h1 className="hero-headline">
        <span className="hero-headline-primary">{headline.primary}</span>
        <span className="hero-headline-secondary">{headline.secondary}</span>
      </h1>
      <p className="hero-subtitle">
        {subtitleShort ? (
          <>
            <span className="hero-subtitle-full">{subtitle}</span>
            <span className="hero-subtitle-short">{subtitleShort}</span>
          </>
        ) : (
          subtitle
        )}
      </p>
      <HeroActions actions={actions} />
    </div>
  );
}
