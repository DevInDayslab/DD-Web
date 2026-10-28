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
  actions: readonly HeroActionCopy[];
};
