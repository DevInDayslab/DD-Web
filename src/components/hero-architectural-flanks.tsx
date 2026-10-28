import type { HeroFlanksConfig } from "@/types/hero";

type HeroArchitecturalFlanksProps = {
  config: HeroFlanksConfig;
};

export function HeroArchitecturalFlanks({ config }: HeroArchitecturalFlanksProps) {
  void config;
  return (
    <div className="hero-flanks" aria-hidden>
      <div className="hero-flank hero-flank-left" />
      <div className="hero-flank hero-flank-right" />
    </div>
  );
}
