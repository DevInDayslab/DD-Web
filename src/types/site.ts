export type ExternalLink = {
  id: string;
  label: string;
  href: string;
};

export type NavItem = {
  id: string;
  label: string;
  href: string;
  external?: boolean;
};

export type RouteDefinition = {
  id: string;
  path: string;
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
};

export type PageMeta = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
};

export type AnalyticsConfig = {
  plausibleDomain: string;
  ga4MeasurementId: string;
};

export type ContactConfig = {
  email: string;
  formEndpoint: string;
};

export type BookingConfig = {
  provider: "cal" | "calendly";
  label: string;
  /** Replaces the custom calendar on the contact page with an iframe when set. Leave empty to keep the custom UI. */
  embedUrl: string;
  /** Public short link to the Google appointment schedule (opens in a new tab). */
  scheduleUrl: string;
  /** The same schedule in its embeddable form, shown inside the project flow. */
  scheduleEmbedUrl: string;
};

export type ChatGptConfig = {
  label: string;
  prompt: string;
};

export type VideoConfig = {
  provider: "cloudflare-stream" | "mux";
};

export type SiteConfig = {
  name: string;
  legalName: string;
  url: string;
  locale: string;
  defaultOgImage: string;
  keywords: string[];
  metadata: {
    title: string;
    description: string;
  };
  contact: ContactConfig;
  booking: BookingConfig;
  analytics: AnalyticsConfig;
  chatgpt: ChatGptConfig;
  video: VideoConfig;
  social: ExternalLink[];
};
