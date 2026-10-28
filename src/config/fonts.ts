import {
  Fraunces,
  IBM_Plex_Sans,
  Instrument_Serif,
  Plus_Jakarta_Sans,
  Space_Grotesk,
} from "next/font/google";

export const fontDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const fontSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex",
  display: "swap",
});

export const fontUi = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const fontHeadline = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const fontLetterTiles = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-space-grotesk",
  display: "swap",
});
