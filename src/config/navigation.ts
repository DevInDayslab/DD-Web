import type { NavItem, RouteDefinition } from "@/types";

export const routes = [
  {
    id: "home",
    path: "/",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    id: "case-studies",
    path: "/case-studies",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    id: "faq",
    path: "/faq",
    changeFrequency: "monthly",
    priority: 0.85,
  },
] as const satisfies readonly RouteDefinition[];

export const navigation: NavItem[] = [
  { id: "case-studies", label: "Case Studies", href: "/case-studies" },
  { id: "faqs", label: "FAQs", href: "/faq" },
  { id: "about", label: "About", href: "/#about" },
  { id: "contact", label: "Contact", href: "/#contact" },
];
