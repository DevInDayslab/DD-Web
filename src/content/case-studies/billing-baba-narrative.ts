import type { CaseStudyNarrativeContent } from "@/types/case-study-narrative";

/** Full-length text from the case study source material; see `materialPath` on the page. */
export const billingBabaCaseStudyNarrative = {
  blocks: [
    {
      type: "prose",
      id: "context",
      index: {
        number: "01",
        title: "Context"
      },
      headline: "A product that had already had a difficult first chapter.",
      paragraphs: [
        "Billing Baba itself is a different kind of product entirely: a full billing and invoicing platform meant for businesses to actually run their day-to-day finances on, not a consumer-facing app. It had been commissioned separately, through a different development company, before it ever reached us. By the time it did, it had already gone through a difficult first chapter."
      ]
    },
    {
      type: "prose",
      id: "the-previous-attempt",
      index: {
        number: "02",
        title: "The Previous Attempt"
      },
      headline: "A website in a desktop wrapper is not desktop software.",
      paragraphs: [
        "The brief the client gave his original developer was for real, dedicated desktop software for Windows and macOS, something a business could install and run as genuine native billing software. What he received instead was a web application wrapped in a tool like Electron to make it launchable as a desktop app, which is a meaningfully different thing from the native software he'd asked for and paid for. A wrapped web app can look and even feel similar to native software at a glance, it opens in its own window, it has an icon, it runs without a browser visibly around it, but underneath that surface it's still a website, with all of a website's limitations around performance, offline behavior, and how deeply it can actually integrate with the operating system it's supposedly running on.",
        "On top of that mismatch, the project was never actually finished. It was handed over in a half-built state rather than carried through to something a business could rely on for real invoicing and billing. For someone who isn't deeply technical, that's an extremely difficult thing to catch early, the difference between \"a web app in a desktop wrapper\" and \"real desktop software\" isn't visible from a demo or a few screenshots, it only shows up once you try to actually depend on it. By the time the gap became obvious, trust in outside developers was understandably low, and a half-finished, misrepresented product is a worse starting point than no product at all, since it costs time, money, and confidence before the real work even begins."
      ],
      pullQuote: {
        quote: "A half-finished, misrepresented product is a worse starting point than no product at all.",
        attribution: "From the project notes"
      }
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
        "Reporting"
      ]
    },
    {
      type: "prose",
      id: "starting-from-zero",
      index: {
        number: "03",
        title: "Starting From Zero"
      },
      headline: "We didn't salvage the codebase. We rebuilt it properly.",
      paragraphs: [
        "When the client brought Billing Baba to us, we made a deliberate call early: the existing codebase wasn't something worth salvaging. It had been built as a workaround (a website dressed up as desktop software) rather than as a genuine foundation for the product he actually needed, and patching that kind of foundation tends to cost more in the long run than starting clean. So rather than inherit someone else's shortcuts, we rebuilt Billing Baba from scratch, as a proper, full billing software covering the actual feature set a business like this needs, not a trimmed-down version dressed up to look more complete than it was."
      ]
    },
    {
      type: "prose",
      id: "what-s-in-the-platform",
      index: {
        number: "04",
        title: "What's in the Platform"
      },
      headline: "Full billing software, not a trimmed-down version.",
      paragraphs: [
        "Billing Baba covers the full scope of what a real billing and invoicing platform needs to handle for a business running on it day to day: invoice creation and management, inventory tracking, tax handling, multi-user access so a business's whole team can work from the same system, and reporting so an owner can actually see how the business is doing rather than just processing transactions blind. None of this is unusual for billing software in principle, what mattered here was building all of it properly, natively, and consistently across every platform, rather than the partial, wrapped-web version the client had been left with before."
      ]
    },
    {
      type: "prose",
      id: "platform-approach",
      index: {
        number: "05",
        title: "Platform Approach"
      },
      headline: "One codebase, four platforms, the same reliable tool everywhere.",
      paragraphs: [
        "Billing Baba runs natively across four platforms, Android, iOS, macOS, and Windows, built from a single Flutter codebase rather than four separate native builds. That's a deliberate choice specific to what this kind of product actually needs. A billing platform's job is to be the same reliable tool wherever a business owner happens to reach for it, their phone at a supplier's warehouse, their Mac at the office, a Windows machine at the counter, with invoicing data, inventory levels, and reports staying perfectly consistent no matter which device it's opened on. A single, well-built shared codebase is what makes that consistency easy to guarantee: one place to fix a bug, one place to ship an improvement, and a genuine guarantee that the Windows version and the Android version behave identically because they're built from the same source, not maintained as four separate products that happen to share a name.",
        "That's a real engineering tradeoff, not a shortcut taken to save time. Building one codebase that performs well natively across a phone operating system, two desktop operating systems, and a tablet-capable layout all at once requires its own discipline, getting platform-specific behavior right (file handling on desktop, offline resilience on mobile, window management vs. touch input) within a shared codebase is its own kind of hard problem, different from building four separate native apps, not easier."
      ]
    },
    {
      type: "prose",
      id: "learning-the-domain",
      index: {
        number: "06",
        title: "Learning the Domain"
      },
      headline: "A different kind of project from a consumer app.",
      paragraphs: [
        "One of the real challenges on this project wasn't technical in the usual engineering sense, it was domain knowledge. Billing software runs on its own vocabulary and its own set of rules: invoicing conventions, tax handling, inventory logic, reporting standards that an experienced business owner takes for granted and that don't show up anywhere in a typical consumer app build. Getting this right meant the team had to actually understand how billing software needs to behave, correctly, before writing the features that depend on that understanding, not just translate a feature list into screens and hope the underlying logic held up.",
        "That learning curve was real and worth naming honestly rather than glossing over. The team picked up the domain quickly enough that it didn't slow the build down over a 6-month timeline, but this was a genuinely different kind of project from a social or consumer app, closer to learning a client's industry than building a familiar pattern with new branding. That's part of what made it a substantial build rather than a routine one, and it's also exactly the kind of project that stretches a team's range in a way worth being honest about in a case study rather than making it sound effortless."
      ]
    },
    {
      type: "prose",
      id: "results",
      index: {
        number: "07",
        title: "Results"
      },
      headline: "Live and in active use.",
      paragraphs: [
        "Billing Baba is live and in active use today."
      ]
    }
  ]
} as const satisfies CaseStudyNarrativeContent;
