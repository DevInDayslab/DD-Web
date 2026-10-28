import type { ProjectQualifierContent } from "@/types/project-qualifier";

export const projectQualifierContent = {
  brandName: "DevInDays",
  stepBadgeTemplate: "{current} / {total}",
  continueLabel: "Continue",
  submitLabel: "Submit",
  closeLabel: "Close project qualifier",
  keyboardHint: {
    press: "Press",
    enter: "Enter ↵",
    orClickContinue: "or click Continue",
  },
  successTitle: "Thanks — we received your details.",
  successBody: "We will review your project and follow up by email shortly.",
  successCloseLabel: "Close",
  steps: [
    {
      id: "fullName",
      kind: "text",
      question: "Full Name",
      description:
        "Let us know who we will be collaborating with on engineering architecture.",
      placeholder: "e.g., Jane Doe",
      inputMode: "text",
    },
    {
      id: "workEmail",
      kind: "text",
      question: "Work Email",
      description: "Where should we send project updates and next steps?",
      placeholder: "name@company.com",
      inputMode: "email",
    },
    {
      id: "companyName",
      kind: "text",
      question: "Company or Product Name",
      description: "What are we building together?",
      placeholder: "e.g., Acme Corp",
      inputMode: "text",
    },
    {
      id: "websiteOrFigma",
      kind: "text",
      question: "Website or Figma Link (Optional)",
      description: "Share any existing references that help us understand scope.",
      placeholder: "Paste URL here...",
      inputMode: "url",
      optional: true,
    },
    {
      id: "projectStage",
      kind: "choice",
      question: "What is the current stage of the project?",
      description: "This helps us recommend the right engagement model.",
      options: [
        { id: "idea", label: "Idea / rough specification" },
        { id: "designed", label: "Designed, no code yet" },
        { id: "partial", label: "Partially built / legacy system" },
        { id: "live", label: "Live and scaling" },
      ],
    },
    {
      id: "budget",
      kind: "budget",
      question: "What is your allocated budget for this engagement?",
      description: "Drag the slider to the range that best matches your plan.",
      options: [
        { id: "under-4k", label: "Under $4,000" },
        { id: "4k-14k", label: "$4,000 – $14,000" },
        { id: "14k-plus", label: "$14,000+" },
      ],
    },
    {
      id: "timeline",
      kind: "choice",
      question: "What is your target timeline for delivery?",
      description: "We will align scope and resourcing to your target window.",
      options: [
        { id: "immediate", label: "Immediate (Within 4 weeks)" },
        { id: "one-two-months", label: "1–2 months" },
        { id: "q4-q1", label: "Q4 2026 / Q1 2027" },
        { id: "flexible", label: "Flexible" },
      ],
    },
  ],
} as const satisfies ProjectQualifierContent;
