export type HeroContourLayer = {
  id: string;
  widthAtBaseline: number;
  heightAtBaseline: number;
  leftAtBaseline: number;
  topAtBaseline: number;
  radiusAtBaseline: number;
  strokeOpacity: number;
};

export type HeroContourConfig = {
  containerWidthAtBaseline: number;
  containerHeightAtBaseline: number;
  containerTopAtBaseline: number;
  opacity: number;
  strokeRgb: string;
  layers: readonly HeroContourLayer[];
};
