function readPublicEnv(name: string): string {
  const value = process.env[name];
  return typeof value === "string" ? value : "";
}

export const env = {
  siteUrl: readPublicEnv("NEXT_PUBLIC_SITE_URL"),
  formEndpoint: readPublicEnv("NEXT_PUBLIC_FORMSPREE_ENDPOINT"),
  bookingUrl: readPublicEnv("NEXT_PUBLIC_BOOKING_URL"),
  bookingScheduleUrl: readPublicEnv("NEXT_PUBLIC_BOOKING_SCHEDULE_URL"),
  bookingScheduleEmbedUrl: readPublicEnv("NEXT_PUBLIC_BOOKING_SCHEDULE_EMBED_URL"),
  plausibleDomain: readPublicEnv("NEXT_PUBLIC_PLAUSIBLE_DOMAIN"),
  ga4MeasurementId: readPublicEnv("NEXT_PUBLIC_GA4_ID"),
} as const;
