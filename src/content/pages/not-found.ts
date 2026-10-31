import type { PageCopy } from "@/types";

export const notFoundPage = {
  meta: {
    title: "Page not found",
    description: "This page doesn't exist or has moved.",
    path: "/404",
  },
  eyebrow: "Error 404",
  title: "This page wandered off.",
  description:
    "The link may be old or mistyped. Here's where most people were headed.",
  action: {
    label: "Back to home",
    href: "/",
  },
  links: [
    { label: "Case studies", href: "/case-studies" },
    { label: "FAQs", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
} as const satisfies PageCopy & {
  eyebrow: string;
  title: string;
  description: string;
  action: { label: string; href: string };
  links: readonly { label: string; href: string }[];
};
