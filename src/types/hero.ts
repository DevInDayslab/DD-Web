export type HeroFlankPanel = {
  width: number;
  height: number;
  top: number;
  blur: number;
  borderRadius: string;
  gradient: string;
};

export type HeroFlanksConfig = {
  panel: HeroFlankPanel;
  left: {
    inset: number;
  };
  right: {
    inset: number;
  };
};
