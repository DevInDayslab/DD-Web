import type { CaseStudyNarrativeContent } from "@/types/case-study-narrative";

/** Billing Baba — rebuild narrative; body copy unchanged from source material. */
export const billingBabaCaseStudyNarrative = {
  blocks: [
    {
      type: "prose",
      id: "context",
      index: { number: "01", title: "Context" },
      headline: "A product that had already had a difficult first chapter.",
      paragraphs: [
        "Billing Baba itself is a different kind of product entirely: a full billing and invoicing platform meant for businesses to actually run their day-to-day finances on, not a consumer-facing app. It had been commissioned separately, through a different development company, before it ever reached us. By the time it did, it had already gone through a difficult first chapter.",
      ],
    },
    {
      type: "billing-baba-section",
      variant: "previous-attempt",
      id: "the-previous-attempt",
      index: { number: "02", title: "The Previous Attempt" },
      headline: "A website in a desktop wrapper is not desktop software.",
      paragraphs: [
        "The brief the client gave his original developer was for real, dedicated desktop software for Windows and macOS, something a business could install and run as genuine native billing software. What he received instead was a web application wrapped in a tool like Electron to make it launchable as a desktop app, which is a meaningfully different thing from the native software he'd asked for and paid for. A wrapped web app can look and even feel similar to native software at a glance, it opens in its own window, it has an icon, it runs without a browser visibly around it, but underneath that surface it's still a website, with all of a website's limitations around performance, offline behavior, and how deeply it can actually integrate with the operating system it's supposedly running on.",
        "On top of that mismatch, the project was never actually finished. It was handed over in a half-built state rather than carried through to something a business could rely on for real invoicing and billing. For someone who isn't deeply technical, that's an extremely difficult thing to catch early, the difference between \"a web app in a desktop wrapper\" and \"real desktop software\" isn't visible from a demo or a few screenshots, it only shows up once you try to actually depend on it. By the time the gap became obvious, trust in outside developers was understandably low, and a half-finished, misrepresented product is a worse starting point than no product at all, since it costs time, money, and confidence before the real work even begins.",
      ],
      pullQuote: {
        quote:
          "A half-finished, misrepresented product is a worse starting point than no product at all.",
        attribution: "From the project notes",
      },
      promised: {
        title: "What was promised",
        items: [
          "Real, dedicated desktop software for Windows and macOS",
          "Genuine native billing software a business could install and run",
          "A finished product you could depend on for real invoicing and billing",
        ],
      },
      delivered: {
        title: "What was delivered",
        items: [
          "Web application wrapped in Electron — launchable window, not native desktop software",
          "Still a website underneath: performance, offline, and OS integration limits",
          "Half-built handover rather than something production-ready",
        ],
      },
    },
    {
      type: "tech-strip",
      id: "stack-strip",
      ariaLabel: "Stack and scope",
      items: [
        "Flutter (single codebase)",
        "Android",
        "iOS",
        "macOS",
        "Windows",
        "Invoicing",
        "Inventory",
        "Tax handling",
        "Multi-user access",
        "Reporting",
      ],
    },
    {
      type: "billing-baba-section",
      variant: "rebuild-timeline",
      id: "starting-from-zero",
      index: { number: "03", title: "Starting From Zero" },
      headline: "We didn't salvage the codebase. We rebuilt it properly.",
      paragraphs: [
        "When the client brought Billing Baba to us, we made a deliberate call early: the existing codebase wasn't something worth salvaging. It had been built as a workaround (a website dressed up as desktop software) rather than as a genuine foundation for the product he actually needed, and patching that kind of foundation tends to cost more in the long run than starting clean. So rather than inherit someone else's shortcuts, we rebuilt Billing Baba from scratch, as a proper, full billing software covering the actual feature set a business like this needs, not a trimmed-down version dressed up to look more complete than it was.",
      ],
      struckLabel: "Inherited Electron-wrapped web codebase",
      timeline: [
        {
          id: "decision",
          label: "Deliberate call",
          detail: "The existing codebase wasn’t something worth salvaging — clean rebuild over patching shortcuts.",
        },
        {
          id: "foundation",
          label: "Flutter · single codebase",
          detail: "Proper, full billing software from scratch: the feature set a business actually needs.",
        },
        {
          id: "outcome",
          label: "6-month timeline",
          detail: "Shipped as real product work, not a dressed-up partial build.",
        },
      ],
    },
    {
      type: "billing-baba-section",
      variant: "feature-grid",
      id: "what-s-in-the-platform",
      index: { number: "04", title: "What's in the Platform" },
      headline: "Full billing software, not a trimmed-down version.",
      paragraphs: [
        "Billing Baba covers the full scope of what a real billing and invoicing platform needs to handle for a business running on it day to day: invoice creation and management, inventory tracking, tax handling, multi-user access so a business's whole team can work from the same system, and reporting so an owner can actually see how the business is doing rather than just processing transactions blind. None of this is unusual for billing software in principle, what mattered here was building all of it properly, natively, and consistently across every platform, rather than the partial, wrapped-web version the client had been left with before.",
      ],
      features: [
        {
          id: "invoicing",
          title: "Invoicing",
          detail:
            "Invoice creation and management — the core of day-to-day billing, built properly rather than as a partial, wrapped-web version.",
        },
        {
          id: "inventory",
          title: "Inventory",
          detail: "Inventory tracking so stock and billing stay aligned for the business.",
        },
        {
          id: "tax",
          title: "Tax handling",
          detail: "Tax handling so transactions and documents stay correct for how the business operates.",
        },
        {
          id: "multi-user",
          title: "Multi-user access",
          detail:
            "Multi-user access so a business's whole team can work from the same system — not isolated copies of data.",
        },
        {
          id: "reporting",
          title: "Reporting",
          detail:
            "Reporting so an owner can actually see how the business is doing rather than just processing transactions blind.",
        },
        {
          id: "native-cross",
          title: "Native · cross-platform",
          detail:
            "Built natively and consistently across every platform — Android, iOS, macOS, and Windows — from one codebase, instead of a wrapped website on desktop.",
        },
      ],
    },
    {
      type: "billing-baba-section",
      variant: "flutter-hub",
      id: "platform-approach",
      index: { number: "05", title: "Platform Approach" },
      headline: "One codebase, four platforms, the same reliable tool everywhere.",
      paragraphs: [
        "Billing Baba runs natively across four platforms, Android, iOS, macOS, and Windows, built from a single Flutter codebase rather than four separate native builds. That's a deliberate choice specific to what this kind of product actually needs. A billing platform's job is to be the same reliable tool wherever a business owner happens to reach for it, their phone at a supplier's warehouse, their Mac at the office, a Windows machine at the counter, with invoicing data, inventory levels, and reports staying perfectly consistent no matter which device it's opened on. A single, well-built shared codebase is what makes that consistency easy to guarantee: one place to fix a bug, one place to ship an improvement, and a genuine guarantee that the Windows version and the Android version behave identically because they're built from the same source, not maintained as four separate products that happen to share a name.",
        "That's a real engineering tradeoff, not a shortcut taken to save time. Building one codebase that performs well natively across a phone operating system, two desktop operating systems, and a tablet-capable layout all at once requires its own discipline, getting platform-specific behavior right (file handling on desktop, offline resilience on mobile, window management vs. touch input) within a shared codebase is its own kind of hard problem, different from building four separate native apps, not easier.",
      ],
      hubLabel: "Flutter",
      hubSublabel: "Single shared codebase",
      platforms: [
        { id: "android", label: "Android" },
        { id: "ios", label: "iOS" },
        { id: "macos", label: "macOS" },
        { id: "windows", label: "Windows" },
      ],
    },
    {
      type: "billing-baba-section",
      variant: "domain-glossary",
      id: "learning-the-domain",
      index: { number: "06", title: "Learning the Domain" },
      headline: "A different kind of project from a consumer app.",
      paragraphs: [
        "One of the real challenges on this project wasn't technical in the usual engineering sense, it was domain knowledge. Billing software runs on its own vocabulary and its own set of rules: invoicing conventions, tax handling, inventory logic, reporting standards that an experienced business owner takes for granted and that don't show up anywhere in a typical consumer app build. Getting this right meant the team had to actually understand how billing software needs to behave, correctly, before writing the features that depend on that understanding, not just translate a feature list into screens and hope the underlying logic held up.",
        "That learning curve was real and worth naming honestly rather than glossing over. The team picked up the domain quickly enough that it didn't slow the build down over a 6-month timeline, but this was a genuinely different kind of project from a social or consumer app, closer to learning a client's industry than building a familiar pattern with new branding. That's part of what made it a substantial build rather than a routine one, and it's also exactly the kind of project that stretches a team's range in a way worth being honest about in a case study rather than making it sound effortless.",
      ],
      paragraphHighlights: [
        {
          paragraphIndex: 0,
          phrases: ["invoicing conventions", "tax handling", "inventory logic", "reporting standards"],
        },
        { paragraphIndex: 1, phrases: ["6-month timeline"] },
      ],
      terms: [
        {
          id: "invoicing-conventions",
          term: "Invoicing conventions",
          definition: "How invoices are structured, numbered, and presented for the business and its customers.",
        },
        {
          id: "tax-handling",
          term: "Tax handling",
          definition: "Rules and calculations so charges, line items, and documents stay compliant.",
        },
        {
          id: "inventory-logic",
          term: "Inventory logic",
          definition: "How stock levels connect to sales, purchases, and billing events.",
        },
        {
          id: "reporting-standards",
          term: "Reporting standards",
          definition: "What owners need to see to judge performance — not just raw transactions.",
        },
      ],
    },
    {
      type: "billing-baba-section",
      variant: "results-strip",
      id: "results",
      index: { number: "07", title: "Results" },
      headline: "Live and in active use.",
      paragraphs: ["Billing Baba is live and in active use today."],
      stats: [
        { id: "live", label: "Product status", value: "Live" },
        { id: "use", label: "Deployment", value: "In active use" },
        { id: "timeline", label: "Build timeline", value: "6 mo" },
        { id: "reach", label: "Platforms shipped", value: "4" },
      ],
    },
  ],
} as const satisfies CaseStudyNarrativeContent;
