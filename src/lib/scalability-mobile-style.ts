import { scalabilityMobileLayout } from "@/config/scalability-mobile";

export function scalabilityMobileLayoutCssVars(): Record<string, string> {
  const { tokens } = scalabilityMobileLayout;

  return {
    "--dd-scalability-letter-bar-padding-x": `${tokens.letterBarPaddingXPx}px`,
    "--dd-scalability-letter-bar-padding-y": `${tokens.letterBarPaddingYPx}px`,
    "--dd-scalability-letter-bar-gap": `${tokens.letterBarGapPx}px`,
    "--dd-scalability-letter-tile-width": `${tokens.letterTileWidthPx}px`,
    "--dd-scalability-letter-tile-height": `${tokens.letterTileHeightPx}px`,
    "--dd-scalability-letter-tile-gap": `${tokens.letterTileGapPx}px`,
    "--dd-scalability-letter-size": `${tokens.letterFontSizePx}px`,
    "--dd-scalability-letter-line-height": `${tokens.letterLineHeightPx}px`,
    "--dd-scalability-letter-tile-radius": `${tokens.letterTileRadiusPx}px`,
    "--dd-scalability-chevron-width": `${tokens.chevronWidthPx}px`,
    "--dd-scalability-chevron-height": `${tokens.chevronHeightPx}px`,
    "--dd-scalability-chevron-stroke-width": `${tokens.chevronStrokeWidthPx}px`,
    "--dd-scalability-letter-bar-min-width-beyond-body": `${tokens.letterBarMinWidthBeyondBodyPx}px`,
    "--dd-scalability-letter-bar-min-width": "min(100%, var(--dd-scalability-body-max-width))",
  };
}

export function scalabilityMobileLayoutCssBlock(): string {
  const vars = Object.entries(scalabilityMobileLayoutCssVars())
    .map(([key, value]) => `${key}:${value}`)
    .join(";");

  return `@media (max-width: ${scalabilityMobileLayout.breakpointMaxPx}px){.scalability-section{${vars}}}`;
}
