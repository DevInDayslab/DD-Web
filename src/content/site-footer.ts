import { site } from "@/config/site";
import type { SiteFooterContent } from "@/types/site-footer";

const bookingHref = site.booking.embedUrl || "/#book";

export const siteFooterContent = {
  brand: {
    name: site.name,
    tagline: "Engineering studio for founders building something real",
  },
  cta: {
    headline: "Let’s get you to launch day.",
    subtext: "Grab 30 minutes directly with the founder",
    buttonLabel: site.booking.label,
    buttonHref: bookingHref,
    buttonAriaLabel: "Book a call with the DevInDays founder",
  },
  navLinks: [
    { id: "home", label: "Home", href: "/" },
    { id: "case-studies", label: "Case Studies", href: "/case-studies" },
    { id: "pricing", label: "Pricing", href: "/#pricing" },
    { id: "faq", label: "FAQ", href: "/#faq" },
    { id: "about", label: "About", href: "/about" },
    {
      id: "book",
      label: site.booking.label,
      href: bookingHref,
      external: Boolean(site.booking.embedUrl),
    },
  ],
  navSeparator: "·",
  socialLinks: [
    { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/raghav-kaushik-718058301/" },
    { id: "instagram", label: "Instagram", href: "https://instagram.com" },
    { id: "github", label: "GitHub", href: "https://github.com" },
  ],
  socialSeparator: "/",
  copyright: `© ${new Date().getFullYear()} DevInDays. All rights reserved.`,
} as const satisfies SiteFooterContent;
