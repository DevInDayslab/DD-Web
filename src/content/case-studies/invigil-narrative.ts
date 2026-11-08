import type { CaseStudyNarrativeContent } from "@/types/case-study-narrative";

/** Full-length text from the case study source material; see `materialPath` on the page. */
export const invigilCaseStudyNarrative = {
  blocks: [
    {
      type: "stats",
      id: "at-a-glance",
      items: [
        { value: "~3 months", label: "Start to launch" },
        { value: "8", label: "Engineers" },
        { value: "Aug 2026", label: "Project start" }
      ]
    },
    {
      type: "prose",
      id: "context",
      index: {
        number: "01",
        title: "Context"
      },
      headline: "The most ambitious product in our portfolio.",
      paragraphs: [
        "Invigil is the most ambitious product in our portfolio, and it's worth being direct about that rather than undersell it with a generic description. It's a civic media platform that combines what would normally be five or six separate apps into one: a news platform, a social feed with its own chat, short-form video (teasers), a stories-style format (posters), live TV where channels can broadcast, personal live streaming, live video conferencing, a public investigation portal, a buy-and-sell marketplace, and an AI layer (ViERA) that runs underneath several of these features at once. Few products attempt this much surface area in a single platform, and almost none attempt it while also trying to feel coherent rather than like several apps wearing the same logo."
      ],
      pullQuote: {
        quote: "Few products attempt this much surface area in a single platform.",
        attribution: "From the project notes"
      }
    },
    {
      type: "prose",
      id: "the-starting-point",
      index: {
        number: "02",
        title: "The Starting Point"
      },
      headline: "We refined the prototype's UI and built the real product underneath it.",
      paragraphs: [
        "Invigil didn't start as a blank page for us. The client had already worked with a previous developer who had produced a UI prototype, the visual design and screen structure, but hadn't been able to carry it through to a working product. By the time it reached us, what existed was a prototype: a UI without the engineering underneath it to make any of it real.",
        "We made a deliberate choice early on: refine the existing UI rather than throw it out, while keeping its core structure intact, and put our actual effort into building the real product underneath it, the backend, the data model, the integrations, the functionality that turns a set of screens into a working platform. The UI itself is scheduled for a deeper redesign in the next phase, this version intentionally prioritized getting a functioning, launched product into the world over getting every pixel right on the first pass, which was the correct tradeoff for a platform at this stage."
      ]
    },
    {
      type: "tech-strip",
      id: "stack-strip",
      ariaLabel: "Stack and scope",
      items: [
        "Python + FastAPI",
        "Android",
        "iOS",
        "Android TV",
        "Web",
        "e-KYC",
        "Vahan integration",
        "ViERA AI layer",
        "Live broadcasting",
        "Trust score"
      ]
    },
    {
      type: "prose",
      id: "the-hardest-problem-one-platform-not-six",
      index: {
        number: "03",
        title: "The Hardest Problem: One Platform, Not Six"
      },
      headline: "One platform, not six.",
      paragraphs: [
        "The genuinely hard problem on Invigil wasn't any single feature in isolation, a chat system, a live-streaming module, a marketplace, these all exist as solved problems elsewhere. The hard problem was making all of them live inside one coherent platform, sharing one identity system, one trust and moderation layer, and one backend, without the end result feeling like six different apps bolted together under a single name.",
        "That meant building a backend architecture, in Python with FastAPI, designed from the start to support fundamentally different kinds of content and interaction (a news article, a live broadcast, a marketplace listing, an investigation case file, a chat message) through a shared, consistent set of underlying systems: one user identity and trust model that every module reads from, one moderation and safety layer that applies whether the content is a comment or a live stream, and one data layer that a reporter, an everyday user, and an investigation officer all interact with through different permissions rather than different, disconnected systems. Getting the architecture right here mattered more than any individual feature, because a mistake in that foundation would have surfaced as inconsistency everywhere, a trust score that meant something different on the marketplace than it did on the news feed, moderation that caught issues in chat but missed them in live video."
      ]
    },
    {
      type: "prose",
      id: "viera-the-ai-layer",
      index: {
        number: "04",
        title: "ViERA: The AI Layer"
      },
      headline: "AI as infrastructure, not a chatbot bolted on.",
      paragraphs: [
        "ViERA is Invigil's AI system, and it runs through several parts of the platform rather than existing as a single bolted-on chatbot feature. It includes a conversational chatbot, an AI news anchor capable of generating news presentation using anyone's provided audio and video, automated fact-checking functionality, and the safety and compliance layer that runs underneath content on the platform. Building this meant treating AI as infrastructure that several features depend on, chat, content generation, fact-checking, rather than as one isolated feature with its own separate pipeline, which is a materially different (and more demanding) integration problem than adding a single AI chat widget to an existing app."
      ]
    },
    {
      type: "prose",
      id: "the-investigation-portal",
      index: {
        number: "05",
        title: "The Investigation Portal"
      },
      headline: "A case workflow with no obvious precedent.",
      paragraphs: [
        "One of Invigil's more unusual features is a public investigation portal: any user can raise a case, and investigation officers and other agents can work that case within the platform itself. This isn't a feature with an obvious precedent to borrow from, most social or news platforms don't have anything like a formal case-handling workflow built into them, which meant designing the roles, permissions, and workflow around it largely from first principles: who can raise a case, who can see it, how it moves between an officer and an agent, and how that entire workflow stays properly separated from the rest of the platform's more public, social-facing features while still living in the same app."
      ]
    },
    {
      type: "prose",
      id: "trust-safety-verification",
      index: {
        number: "06",
        title: "Trust, Safety & Verification"
      },
      headline: "Trust built in as core infrastructure.",
      paragraphs: [
        "Given the range of what Invigil does, verification and trust had to be built as core infrastructure, not an afterthought. The platform includes e-KYC functionality and integration with Vahan (India's vehicle registration database) for relevant verification needs, proper safety and security compliance throughout, and a trust score attached to every user's profile that reflects their standing on the platform. Combined with ViERA's fact-checking layer, this is what allows a platform that includes open user-generated content, live broadcasting, and a public investigation portal to function responsibly rather than becoming an unmoderated free-for-all."
      ]
    },
    {
      type: "prose",
      id: "roles",
      index: {
        number: "07",
        title: "Roles"
      },
      headline: "More roles than any other platform we've built.",
      paragraphs: [
        "Invigil runs on a genuinely wide set of roles, more than any other platform in our portfolio: everyday users, reporters, editors, multiple tiers of admin, investigation officers, and vetted professionals, each with different permissions and different views into the platform depending on what they're actually there to do. Designing for this many distinct roles inside one coherent permission system, rather than effectively building a separate app per role, is part of what made the backend architecture decisions above so consequential."
      ]
    },
    {
      type: "prose",
      id: "platforms",
      index: {
        number: "08",
        title: "Platforms"
      },
      headline: "Four platforms, one consistent experience.",
      paragraphs: [
        "Invigil runs across Android, iOS, Android TV (for the live TV and broadcast side of the platform), and a full web app, built to work as one consistent experience across all four rather than a mobile-first app with a TV and web app bolted on as afterthoughts."
      ]
    },
    {
      type: "prose",
      id: "launch",
      index: {
        number: "09",
        title: "Launch"
      },
      headline: "Shipped in a single launch, in about three months.",
      paragraphs: [
        "Invigil launched in approximately 3 months from the project's start in August 2026, a genuinely fast timeline given the scope of what shipped, five to six distinct product categories, an AI layer, and a public investigation workflow, in a single launch rather than staged out over a much longer period."
      ]
    },
    {
      type: "prose",
      id: "results",
      index: {
        number: "10",
        title: "Results"
      },
      headline: "A full platform, live from the first release.",
      paragraphs: [
        "Invigil is live at Theinvigil.com. Its product categories, the AI layer and the public investigation workflow all launched together in a single release, rather than being staged out over a much longer timeline.",
        "The foundation is in place and the collaboration continues, with the next phase building on top of it."
      ]
    },
    {
      type: "prose",
      id: "the-relationship-since",
      index: {
        number: "11",
        title: "The Relationship Since"
      },
      headline: "An ongoing collaboration, with a redesign phase planned.",
      paragraphs: [
        "This is an ongoing collaboration, not a one-off build. The current version intentionally prioritized getting a working, launched platform out before revisiting the UI in depth, and there's an active next phase planned, likely a substantial redesign pass on top of the product foundation now in place."
      ]
    }
  ]
} as const satisfies CaseStudyNarrativeContent;
