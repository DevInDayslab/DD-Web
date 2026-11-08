import { env } from "@/config/env";
import type { SiteConfig } from "@/types";

export const site: SiteConfig = {
  name: "DevInDays",
  legalName: "DevInDays",
  url: env.siteUrl || "https://www.devindays.com",
  locale: "en-US",
  defaultOgImage: "/og/home.png",
  servesCountries: ["US", "CA", "GB", "AU", "IE", "DE", "NL", "NZ"],
  founder: {
    name: "Raghav Kaushik",
    jobTitle: "Founder",
    sameAs: ["https://www.linkedin.com/in/raghav-kaushik-718058301/"],
  },
  metadata: {
    title: "App Development Agency for Startups | DevInDays",
    description:
      "Custom iOS, Android and web app development for founders and businesses. MVPs from $3,950, full products from $13,900, and you own 100% of the code.",
  },
  contact: {
    email: "",
    formEndpoint: env.formEndpoint,
  },
  booking: {
    provider: "cal",
    label: "Book a Call",
    embedUrl: env.bookingUrl,
    scheduleUrl: env.bookingScheduleUrl || "https://calendar.app.google/4RdNzWmSxNkuFiTA6",
    scheduleEmbedUrl:
      env.bookingScheduleEmbedUrl ||
      "https://calendar.google.com/calendar/appointments/schedules/AcZssZ32bNgloJ8lx-STfdPOhGLTCpTQAF-5AF4Q7tvn8YEI6aPEV2mj6E8ZtUlSjpXK5D5aTGFKM2aH?gv=true",
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
