import { site } from "@/config/site";
import type { PricingSectionContent } from "@/types/pricing-section";

const bookingHref = site.booking.embedUrl || "/#book";

export const pricingSectionContent = {
  title: "Start with what you actually need.",
  subtitle: "The scope changes. The engineering standard doesn’t.",
  tabsAriaLabel: "Pricing tiers",
  defaultTierId: "mvp",
  tiers: [
    {
      id: "mvp",
      tabLabel: "MVP Build",
      title: "MVP Build",
      durationBadge: "~3–4 Weeks",
      features: [
        "End-to-end UI/UX & development for the complete MVP",
        "One integrated payment/subscription setup",
        "Clean, indexed architecture ready to scale",
        "Production-grade secure user authentication",
        "App Store & Google Play submission",
        "100% IP & source code ownership upon completion",
        "30 days of dedicated post-launch engineering support",
      ],
      investmentLabel: "TIER INVESTMENT",
      price: "From $3,950",
      ctaLabel: "Start Project",
      ctaHref: bookingHref,
      ctaAriaLabel: "Start an MVP Build project",
    },
    {
      id: "full-product",
      tabLabel: "Full Product",
      title: "Full Product",
      durationBadge: "8–12 Weeks",
      features: [
        "Full feature set and multiple user roles",
        "Custom marketing landing page",
        "Complete payment infrastructure",
        "Full admin dashboard for operational control",
        "Architecture stress-tested under load",
        "Zero-downtime deployment pipeline (CI/CD) setup",
        "Live telemetry and crash monitoring integration",
        "Advanced third-party API integrations",
      ],
      investmentLabel: "TIER INVESTMENT",
      price: "From $13,900",
      ctaLabel: "Start Project",
      ctaHref: bookingHref,
      ctaAriaLabel: "Start a full product build",
    },
    {
      id: "custom",
      tabLabel: "Custom",
      title: "Custom",
      durationBadge: "Let's talk",
      features: [
        "Dedicated engineering team integration",
        "Complex machine learning / AI pipelines",
        "Enterprise-grade security and compliance",
        "High-concurrency infrastructure",
        "Custom SLA and support tiers",
      ],
      investmentLabel: "TIER INVESTMENT",
      price: "Custom Scope",
      priceSubtitle: "Tailored to your architecture.",
      ctaLabel: "Book a Consultation",
      ctaHref: bookingHref,
      ctaAriaLabel: "Book a consultation for a custom scope",
    },
  ],
} as const satisfies PricingSectionContent;
