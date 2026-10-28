import type { FounderSectionContent } from "@/types/founder-section";

export const founderSectionContent = {
  title: "Who you’re actually working with",
  intro: "Hey, I’m Raghav, founder of DevInDays.",
  bodyParagraphs: [
    "I stay personally involved in every project we take on, from architecture and product decisions to scope and the details that matter before launch.",
    "I’m supported by a small team of engineers I trust, with experience building marketplaces, delivery platforms, matchmaking apps, and other real-world products.",
    "You work directly with the person accountable for your product, backed by a team that knows how to build and ship it.",
  ],
  signoff: {
    signatureImageSrc: "/founder/signature.png",
    name: "Raghav",
    role: "Founder, DevInDays",
  },
  portrait: {
    src: "/founder/portrait.jpg",
    alt: "Raghav, founder of DevInDays",
    width: 840,
    height: 964,
  },
  portraitPlaceholderLabel: "Founder portrait",
} as const satisfies FounderSectionContent;
