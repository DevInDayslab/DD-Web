import type { ChatGptCtaSectionContent } from "@/types/chatgpt-cta-section";

export const chatgptCtaSectionContent = {
  badge: "STILL NOT SURE?",
  headline: {
    lineOneBefore: "Ask ",
    headlineBrand: "ChatGPT",
    lineOneAfter: " if we’re",
    lineTwo: "actually a fit.",
  },
  ctaLabel: "Ask ChatGPT",
  ctaAriaLabel: "Ask ChatGPT if DevInDays is a fit for your project",
  chatGptPrompt:
    "Is DevInDays a good fit for my software project? Summarize what they do, who they work best with, and what I should know before booking a call.",
} as const satisfies ChatGptCtaSectionContent;
