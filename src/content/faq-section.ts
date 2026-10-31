import { faqPageItems } from "@/content/faq-page";
import type { FaqSectionContent } from "@/types/faq-section";

/** Homepage answers come from the full FAQ so the two can never disagree. */
function faqAnswer(id: string): string {
  const item = faqPageItems.find((entry) => entry.id === id);
  if (!item) {
    throw new Error(`Unknown FAQ item: ${id}`);
  }
  return item.answer;
}

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
        faqAnswer("who-actually-works-on-my-project"),
    },
    {
      id: "scope-changes",
      question: "What if we need to change the scope halfway through?",
      answer:
        faqAnswer("what-happens-if-the-project-needs-to-change-scope-halfway-through"),
    },
    {
      id: "after-launch",
      question: "What happens after launch day?",
      answer:
        faqAnswer("what-happens-after-the-app-launches"),
    },
  ],
  seeAll: {
    label: "See all FAQs",
    href: "/faq",
    ariaLabel: "See all frequently asked questions",
  },
} as const satisfies FaqSectionContent;
