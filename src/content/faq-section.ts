import type { FaqSectionContent } from "@/types/faq-section";

export const faqSectionContent = {
  title: "Clear the air before we talk.",
  items: [
    {
      id: "source-code",
      question: "Do we own the source code?",
      answer:
        "100%. Upon final payment, the IP, repositories, and infrastructure are completely yours. We don't hold code hostage or charge licensing fees for work you paid for.",
    },
    {
      id: "communication",
      question: "Who will I actually be communicating with?",
      answer:
        "Placeholder — you'll replace this with final copy when the full FAQ material is ready.",
    },
    {
      id: "scope-changes",
      question: "What if we need to change the scope halfway through?",
      answer:
        "Placeholder — you'll replace this with final copy when the full FAQ material is ready.",
    },
    {
      id: "after-launch",
      question: "What happens after launch day?",
      answer:
        "Placeholder — you'll replace this with final copy when the full FAQ material is ready.",
    },
  ],
  seeAll: {
    label: "See all FAQs",
    href: "/faq",
    ariaLabel: "See all frequently asked questions",
  },
} as const satisfies FaqSectionContent;
