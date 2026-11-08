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
  /** {site} becomes the site's own address, so the prompt points at whichever domain is live. */
  chatGptPrompt:
    "Look up DevInDays, a custom app development studio, at {site}. Read its FAQ at {site}/faq/ and its case studies at {site}/case-studies/. I'm deciding whether to hire them for my software project. Tell me: what they build and for whom, what it costs and how payment works, how long a typical build takes, who owns the code and IP, what support I get after launch, which projects they say are not a good fit, and what proof they show of past work. Be honest about any downsides, and finish with the questions I should ask before booking a call.",
} as const satisfies ChatGptCtaSectionContent;
