import type { AboutPageContent } from "@/types/about-page";

export const aboutPageContent = {
  meta: {
    title: "About: A Founder-Led App Development Studio",
    description:
      "DevInDays is a small, founder-led software studio. One person accountable from scope to launch, a dedicated team building your app, and you own all the code.",
    path: "/about",
    ogImage: "/og/about.png",
  },
  hero: {
    eyebrow: "About",
    headline: "A small studio that stays accountable.",
    lede: "DevInDays builds mobile and web products for founders and businesses. The person on your first call is the person accountable for the build, from scope to launch and after.",
  },
  letter: {
    heading: "Who you’re actually working with",
    intro: "Hey, I’m Raghav, founder of DevInDays.",
    portraitFallbackCaption: "Raghav, founder",
    paragraphs: [
      "I stay personally involved in every project we take on, from architecture and product decisions to scope and the details that matter before launch.",
      "I’m supported by a small team of engineers I trust, with experience building marketplaces, delivery platforms, matchmaking apps, and other real-world products.",
      "You work directly with the person accountable for your product, backed by a team that knows how to build and ship it.",
    ],
  },
  build: {
    heading: "What we build",
    body: "Mobile, web and desktop products across industries. If it runs on a screen, we have likely built something close to it.",
    groups: [
      {
        label: "Consumer apps",
        items: [
          "Matchmaking and dating",
          "Social and community",
          "Wellness and companions",
          "Home services",
          "Events and ticketing",
        ],
      },
      {
        label: "Marketplaces and delivery",
        items: [
          "Marketplaces",
          "Delivery and quick commerce",
          "On-demand services",
          "Logistics and supply",
        ],
      },
      {
        label: "Business software",
        items: [
          "Billing and invoicing",
          "Internal tools",
          "Operations and admin dashboards",
          "Workflow automation",
          "Desktop and web platforms",
        ],
      },
      {
        label: "AI-powered products",
        items: [
          "AI companions and assistants",
          "AI newsrooms and media verification",
          "Recommendation and matching",
          "Conversational interfaces",
          "Document and media processing",
        ],
      },
    ],
    footnote: "Not on the list? If you can describe it, we can scope it and build it.",
  },
  beliefs: {
    heading: "What we believe",
    items: [
      {
        title: "You should see real progress every week.",
        body: "Not a status update. At least once a week you get a working build you can open and use, tested on real devices before it reaches you, so surprises show up early while they are still easy to fix.",
      },
      {
        title: "What we build is yours, completely.",
        body: "Full IP and source code ownership on every project. Nothing is held back, and nothing locks you in to us after launch.",
      },
      {
        title: "Saying no is part of the job.",
        body: "If we are not the right team, or the idea needs a different first step, we tell you on the first call. A good fit on both sides matters more than a signed project.",
      },
      {
        title: "Launch is the middle, not the end.",
        body: "We submit to the stores, watch what happens when real users arrive, and stay on for post-launch engineering support, so the product keeps working after the celebration.",
      },
    ],
  },
  work: {
    heading: "Selected work",
    body: "A few of the products we have built, from a first version to a full multi-platform rebuild.",
    linkLabel: "See all case studies",
    linkHref: "/case-studies",
    moreLabel: "More we have built",
    moreLogos: [
      { src: "/logos/marks/navnirvana.png", alt: "NavNirvana" },
      { src: "/logos/marks/myndfe.png", alt: "Myndfe" },
      { src: "/logos/marks/homeyfixit.png", alt: "HomeyFixIt" },
      { src: "/logos/marks/makemyjodi.png", alt: "MakeMyJodi" },
      { src: "/logos/marks/sailor.png", alt: "Sailor" },
      { src: "/logos/marks/krexhe.png", alt: "Krexhe" },
      { src: "/logos/marks/tecxi.png", alt: "TecXi" },
      { src: "/logos/marks/trustai.png", alt: "TrustAI" },
    ],
    nextLabel: "You?",
    nextAriaLabel: "Yours could be next. Send us a message",
    nextHref: "/contact#message",
  },
  closing: {
    heading: "Tell us what you’re building.",
    body: "The founder replies within 48 hours with an honest read on fit, scope and timeline.",
    primaryLabel: "Start Project",
    secondaryLabel: "Send a message",
    secondaryHref: "/contact#message",
  },
} as const satisfies AboutPageContent;
