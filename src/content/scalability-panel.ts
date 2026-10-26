import type { ScalabilityPanelContent } from "@/types/scalability-panel";

export const scalabilityPanelContent = {
  panelTagline:
    "It means the system can grow without needing to be rebuilt from scratch.",
  pillars: [
    {
      id: "more-users",
      label: "01 — MORE USERS",
      title: "Can it handle 10× more users without slowing down?",
      body:
        "Proper database design, indexing and efficient queries help response times stay predictable as the amount of data grows.",
    },
    {
      id: "more-servers",
      label: "02 — MORE SERVERS",
      title: "Can you add another server without breaking the application?",
      body:
        "Important state can’t be trapped inside one server. Sessions and shared state need to live somewhere every server can access, such as a database or cache like Redis.",
    },
    {
      id: "more-features",
      label: "03 — MORE FEATURES",
      title: "Can you keep adding features without rewriting everything?",
      body:
        "As a product grows, tightly connected code makes every change harder. Clear separation between different parts of the system keeps new features isolated and easier to build.",
    },
  ],
  closingLead: "That’s what we mean when we say scalable.",
  closingBodyLines: [
    "Not a promise.",
    "A system designed with a clear path to growth.",
  ],
  chevronExpandAriaLabel: "Expand scalability details",
  chevronCollapseAriaLabel: "Collapse scalability details",
} as const satisfies ScalabilityPanelContent;
