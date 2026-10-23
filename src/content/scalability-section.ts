import { scalabilitySectionLetterRotations } from "@/config/scalability-section";
import type { ScalabilitySectionContent } from "@/types/scalability-section";

export const scalabilitySectionContent = {
  eyebrow: "A QUESTION WE GET A LOT",
  headline: "“Will it be scalable?”",
  paragraphs: [
    "We get this question all the time. And honestly, “yes” is a pretty useless answer.",
    "“Scalable” has become one of those words everyone puts into a software brief because it sounds reassuring. But an app doesn’t become scalable just because the developer says it is.",
  ],
  emphasis: "So what does it mean?",
  letterTiles: scalabilitySectionLetterRotations.map((tile) => ({
    letter: tile.letter,
    rotationDeg: tile.rotationDeg,
  })),
  footer: "Here is how we think about systems",
  letterBarAriaLabel: "Scalability",
} as const satisfies ScalabilitySectionContent;
