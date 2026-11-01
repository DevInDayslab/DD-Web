export type HeroHeadlineCopy = {
  primary: string;
  secondary: string;
};

export type HeroActionVariant = "primary" | "secondary";

export type HeroActionCopy = {
  id: string;
  label: string;
  href: string;
  variant: HeroActionVariant;
};

export type HeroContentCopy = {
  headline: HeroHeadlineCopy;
  subtitle: string;
  /** Shorter line shown on phones, where the full subtitle reads as a wall of text. */
  subtitleShort?: string;
  actions: readonly HeroActionCopy[];
};
