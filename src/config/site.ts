import { env } from "@/config/env";
import type { SiteConfig } from "@/types";

export const site: SiteConfig = {
  name: "DevInDays",
  legalName: "DevInDays",
  url: env.siteUrl || "https://example.com",
  locale: "en",
  defaultOgImage: "/og.png",
  keywords: [],
  metadata: {
    title: "DevInDays",
    description: "",
  },
  contact: {
    email: "",
    formEndpoint: env.formEndpoint,
  },
  booking: {
    provider: "cal",
    label: "Book a Call",
    embedUrl: env.bookingUrl,
  },
  analytics: {
    plausibleDomain: env.plausibleDomain,
    ga4MeasurementId: env.ga4MeasurementId,
  },
  chatgpt: {
    label: "Ask ChatGPT",
    prompt: "",
  },
  video: {
    provider: "cloudflare-stream",
  },
  social: [],
};
