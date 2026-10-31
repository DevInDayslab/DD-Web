import { env } from "@/config/env";
import type { SiteConfig } from "@/types";

export const site: SiteConfig = {
  name: "DevInDays",
  legalName: "DevInDays",
  url: env.siteUrl || "https://www.devindays.com",
  locale: "en",
  defaultOgImage: "/og.png",
  keywords: [
    "app development agency",
    "custom software development",
    "mobile app development",
    "MVP development",
    "iOS and Android apps",
    "Delhi software studio",
  ],
  metadata: {
    title: "DevInDays — Custom App & Software Development Studio",
    description:
      "DevInDays is a custom software studio in Delhi building mobile and web products for founders and businesses. MVP Build from $3,950, Full Product from $13,900. Full IP and source code ownership on every project.",
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
