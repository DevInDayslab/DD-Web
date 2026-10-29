import { site } from "@/config/site";
import type { ContactPageContent } from "@/types/contact-page";

export const contactPageContent = {
  meta: {
    title: `Contact · ${site.name}`,
    description: "Book a call or send a message. Tell us what you're building.",
    path: "/contact",
  },
  hero: {
    eyebrow: "Contact",
    headline: "Tell us what you're building.",
    subhead: "Book a call or send a message.",
  },
  split: {
    bookCall: {
      title: "Book a Call",
      description:
        "30 minutes with Raghav. Tell us what you're trying to build, and we'll tell you honestly whether we're the right fit for it.",
      widget: {
        eyebrow: "Direct intake",
        title: "Discovery & Architecture Session",
        durationLabel: "30 Mins",
        slotsHeadingPrefix: "Available slots for",
        timeSlots: [
          { id: "930", label: "09:30 AM EST" },
          { id: "1100", label: "11:00 AM EST" },
          { id: "1430", label: "02:30 PM EST" },
          { id: "1600", label: "04:00 PM EST" },
        ],
      },
    },
    message: {
      title: "Send a Message",
      description:
        "Prefer writing asynchronous specifications? Drop us your product parameters and we will follow up with notes.",
      fields: [
        {
          id: "name",
          label: "Full name",
          placeholder: "e.g., Alex Vance",
          required: true,
          type: "text",
          autoComplete: "name",
        },
        {
          id: "email",
          label: "Work email",
          placeholder: "alex@company.com",
          required: true,
          type: "email",
          autoComplete: "email",
        },
        {
          id: "company",
          label: "Company / project name",
          optionalSuffix: "(optional)",
          placeholder: "e.g., Acme Labs",
          required: false,
          type: "text",
          autoComplete: "organization",
        },
        {
          id: "message",
          label: "What are you building?",
          placeholder:
            "Briefly describe the product, platform architecture, or system requirements...",
          required: true,
          type: "textarea",
        },
      ],
      submitLabel: "Submit Message",
      submitAriaLabel: "Submit contact message",
      footerNote: "We reply within 24 hours.",
      formSubject: "DevInDays contact form",
      successMessage: "Message sent. We'll follow up within 24 hours.",
      errorMessage: "Something went wrong. Please try again.",
      missingRequiredMessage: "Please fill in all required fields.",
    },
  },
  ledger: {
    architects: {
      heading: "No account managers. No junior hand-offs.",
      body:
        "When you reach out, you speak directly with the people building your system. Raghav (Founder) leads project scope, technical schema, and engineering velocity, while Ishu (Technical Lead) oversees mobile systems and AI pipelines. You are collaborating with principals from day one.",
      avatars: [
        { initials: "RK", variant: "primary" },
        { initials: "IS", variant: "secondary" },
      ],
      footerLabel: "Raghav & Ishu • Active Founders",
    },
    logistics: {
      heading: "Headquartered in Delhi. Operating globally.",
      body:
        "We partner with fast-moving founders and engineering leadership across San Francisco, London, Berlin, and Singapore. All standard product pricing, deliverables, sprints, and contracts are transparently billed in USD.",
      metaRows: [
        {
          label: "General Inquiries",
          value: "contact@devindays.com",
          href: "mailto:contact@devindays.com",
        },
        {
          label: "Typical Sprint Velocity",
          value: "21–30 calendar days",
        },
      ],
    },
  },
  crosslink: {
    introText: "Rather review past architecture before reaching out?",
    linkLabel: "Browse verified case studies →",
    linkHref: "/case-studies",
    metrics: [
      {
        id: "metric-01",
        label: "METRIC 01",
        title: "100% On-Time Delivery",
        description:
          "Fixed scopes, explicit day-by-day Gantt charts, zero feature creep without mutual sign-off.",
      },
      {
        id: "metric-02",
        label: "METRIC 02",
        title: "Full IP Transfer",
        description:
          "All git commits, Figma schemas, and cloud deployment pipelines belong 100% to you.",
      },
      {
        id: "metric-03",
        label: "METRIC 03",
        title: "Direct Founder Access",
        description:
          "Dedicated Slack channel with Raghav and Ishu for the duration of the engagement.",
      },
    ],
  },
} as const satisfies ContactPageContent;
