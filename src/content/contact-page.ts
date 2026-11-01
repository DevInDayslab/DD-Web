import { site } from "@/config/site";
import type { ContactPageContent } from "@/types/contact-page";

export const contactPageContent = {
  meta: {
    title: "Contact",
    description: "Book a call or send a message. Tell us what you're building.",
    path: "/contact",
  },
  hero: {
    eyebrow: "Contact",
    headline: "Tell us what you're building.",
    subhead:
      "The founder replies within 48 hours. No sales reps, no pitch deck, just an honest read on whether we're the right team for it.",
  },
  details: [
    {
      id: "email",
      label: "Email",
      value: "contact@devindays.com",
      href: "mailto:contact@devindays.com",
      copyable: true,
    },
    {
      id: "call",
      label: "Intro call",
      value: "30 minutes, with the founder",
    },
    {
      id: "studio",
      label: "Studio",
      value: "Delhi, India. Working with founders worldwide.",
    },
  ],
  trust: {
    label: "Products we've shipped",
    logos: [
      { src: "/logos/marks/dater.png", alt: "Dater" },
      { src: "/logos/marks/invigil.png", alt: "InViGiL" },
      { src: "/logos/marks/billing-baba.png", alt: "Billing Baba" },
      { src: "/logos/marks/entry-ticket.png", alt: "EntryTicket" },
      { src: "/logos/marks/turbosupply.png", alt: "Turbo Supply" },
      { src: "/logos/marks/homeyfixit.png", alt: "HomeyFixIt" },
    ],
  },
  split: {
    bookCall: {
      title: "Book a call",
      description:
        "Thirty minutes with the founder. Tell us what you're building and we'll give you an honest answer on fit, scope and rough timeline.",
      widget: {
        eyebrow: "Intro call",
        title: "30-minute intro call",
        durationLabel: "30 min",
        slotsHeadingPrefix: "Times for",
        timeSlots: [
          { id: "930", label: "09:30 AM EST" },
          { id: "1100", label: "11:00 AM EST" },
          { id: "1430", label: "02:30 PM EST" },
          { id: "1600", label: "04:00 PM EST" },
        ],
      },
    },
    message: {
      title: "Send a message",
      description:
        "Share the basics and we'll reply with a few questions and a first read on your idea.",
      fields: [
        {
          id: "name",
          label: "Your name",
          placeholder: "Alex Vance",
          required: true,
          type: "text",
          autoComplete: "name",
        },
        {
          id: "email",
          label: "Work email",
          placeholder: "you@company.com",
          required: true,
          type: "email",
          autoComplete: "email",
        },
        {
          id: "company",
          label: "Company or project",
          optionalSuffix: "(optional)",
          placeholder: "Acme Labs",
          required: false,
          type: "text",
          autoComplete: "organization",
        },
        {
          id: "message",
          label: "About the project",
          placeholder:
            "What are you building, who is it for, and when would you like to launch?",
          required: true,
          type: "textarea",
        },
      ],
      projectTypes: {
        label: "What do you need?",
        optionalSuffix: "(optional)",
        options: ["Mobile app", "Web platform", "New MVP", "Rebuild or takeover", "Not sure yet"],
      },
      submitLabel: "Send message",
      submitAriaLabel: "Submit contact message",
      footerNote: "We reply within 48 hours, usually sooner.",
      formSubject: "DevInDays contact form",
      successMessage: "Thanks, we've got your message. We'll reply within 48 hours.",
      success: {
        title: "Thanks, we've got your message.",
        body: "We'll reply within 48 hours, usually sooner. In the meantime, take a look at what we've shipped.",
        resetLabel: "Send another message",
        linkLabel: "See our work",
        linkHref: "/case-studies",
      },
      errorMessage: "That didn't send. Please check your connection and try again.",
      missingRequiredMessage: "Please add your name, email and a few words about the project.",
    },
  },
  nextSteps: {
    heading: "What happens next",
    steps: [
      {
        title: "Tell us about the project",
        body: "Book a time or send a note. We reply within 48 hours.",
      },
      {
        title: "Talk to the founder",
        body: "A 30-minute conversation, not a sales pitch. We work out what you need and whether we're a fit.",
      },
      {
        title: "Get a clear proposal",
        body: "A feature list, a realistic timeline and a fixed quote, shortly after the call.",
      },
    ],
  },
  crosslink: {
    introText: "Want to see our work first?",
    linkLabel: "Browse case studies →",
    linkHref: "/case-studies",
    metrics: [
      {
        id: "scope",
        label: "",
        title: "Fixed scope, fixed price",
        description:
          "A written scope and a day-by-day timeline. Anything new is added only when we both sign off.",
      },
      {
        id: "ownership",
        label: "",
        title: "You own everything",
        description:
          "Source code, designs and infrastructure are yours from final payment, written into the contract.",
      },
      {
        id: "founders",
        label: "",
        title: "Founders on every project",
        description: "A direct line to Raghav and Ishu for the whole engagement, not an account manager.",
      },
    ],
  },
} as const satisfies ContactPageContent;
