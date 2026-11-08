import type { CaseStudyNarrativeContent } from "@/types/case-study-narrative";

/** Full-length text from the case study source material; see `materialPath` on the page. */
export const turboSupplyCaseStudyNarrative = {
  blocks: [
    {
      type: "stats",
      id: "at-a-glance",
      items: [
        { value: "30 min", label: "Delivery promise" },
        { value: "4 weeks", label: "Build to launch" },
        { value: "3", label: "Engineers" },
        { value: "2", label: "Native platforms: Android and iOS" }
      ]
    },
    {
      type: "prose",
      id: "context",
      index: {
        number: "01",
        title: "Context"
      },
      headline: "A real hardware business moving into quick commerce.",
      paragraphs: [
        "Turbo Supply was already a real, operating hardware supply business in Delhi NCR before this app existed, selling general hardware across the kind of range a trade business actually needs, not one narrow category. The business wanted to move into quick commerce specifically: the same 30-minute delivery speed people now expect from groceries, applied to hardware instead."
      ]
    },
    {
      type: "prose",
      id: "the-real-problem-it-solves",
      index: {
        number: "02",
        title: "The Real Problem It Solves"
      },
      headline: "The interesting part isn't the delivery speed. It's what the speed replaces.",
      paragraphs: [
        "The interesting part of this product isn't really the delivery speed on its own, it's what that speed actually changes for the businesses using it. A plumbing, electrical, or general contracting business has traditionally had to choose between two bad options. Turbo Supply offers a third.",
        "That reframes what the app is actually for. It's not competing with a hardware store on convenience alone, it's competing with the idea of holding inventory at all. A small business that can reliably get the right part in 30 minutes has much less reason to keep a stockroom of parts it might need someday, which is a real, ongoing cost saving for the business using it, not just a nicer shopping experience."
      ],
      pullQuote: {
        quote: "It's not competing with a hardware store on convenience alone, it's competing with the idea of holding inventory at all.",
        attribution: "From the project notes"
      }
    },
    {
      type: "options",
      id: "three-options",
      eyebrow: "The choice a trade business faces",
      headline: "Two bad options, and a third.",
      items: [
        {
          id: "hold-stock",
          tag: "Option 1",
          title: "Hold a large inventory",
          body: "Tie up cash and storage space in hardware you might need, stock that mostly sits unused.",
          tone: "muted"
        },
        {
          id: "supply-run",
          tag: "Option 2",
          title: "Run to a hardware store",
          body: "Lose time on-site every time something is missing, waiting on a supply run mid-job.",
          tone: "muted"
        },
        {
          id: "order-fast",
          tag: "Turbo Supply",
          title: "Order what the job needs",
          body: "Order exactly what's needed, exactly when it's needed, and have it arrive fast enough that it doesn't stall the job.",
          tone: "good"
        }
      ]
    },
    {
      type: "tech-strip",
      id: "stack-strip",
      ariaLabel: "Stack and scope",
      items: [
        "Flutter",
        "iOS + Android",
        "Node.js backend",
        "Payment integration",
        "30-minute delivery flow",
        "Hardware catalog"
      ]
    },
    {
      type: "prose",
      id: "the-challenge",
      index: {
        number: "03",
        title: "The Challenge"
      },
      headline: "Getting the right part in 30 minutes only works if you can find the right part.",
      paragraphs: [
        "Quick commerce as a category has mostly been built around groceries and household essentials, products that are small, largely interchangeable, and simple to catalog. General hardware is a different kind of inventory: a huge range of parts, fittings, tools, and materials, many of which look similar but aren't interchangeable, a pipe fitting in the wrong diameter or a cable rated for the wrong load isn't a minor substitution, it's the wrong part entirely. Getting someone the right item in 30 minutes only works if they can correctly find and identify that item in the first place, which matters more here than in a typical quick-commerce catalog where getting a slightly different brand of the same product barely registers as a problem.",
        "On top of that, the buyer on this app isn't the same as a typical quick-commerce shopper. It's often someone mid-job, on-site, who already knows exactly what part they need and wants to find it fast, not browse. The app had to be built around that kind of purposeful, specific search behavior rather than the more exploratory browsing pattern grocery delivery apps are designed around."
      ]
    },
    {
      type: "steps",
      id: "search-first-flow",
      eyebrow: "The flow we built",
      headline: "Built for finding the exact part, fast.",
      items: [
        { title: "Browse the full range", body: "A catalog that covers general hardware across trades, not one narrow category." },
        { title: "Search for the exact part", body: "Clear, well-specified listings, so a known item is found in seconds rather than browsed for." },
        { title: "Check out in a few taps", body: "A straightforward path from search to payment, with payment integration built in from launch." },
        { title: "Track the 30-minute window", body: "An order confirmation that shows when the part will arrive, so the job can plan around it." }
      ]
    },
    {
      type: "prose",
      id: "getting-the-basics-right",
      index: {
        number: "04",
        title: "Getting the Basics Right"
      },
      headline: "A focused, well-executed build, and honest about it.",
      paragraphs: [
        "This wasn't a build that needed a novel technical breakthrough, and there's no value pretending otherwise, it's a focused, well-executed quick-commerce app for a category that hasn't had one built properly for it before. The real work was in structuring the catalog and the ordering flow correctly for what a trade business actually needs: clear, specific, well-categorized listings across a wide hardware range so someone can find the exact part quickly, and a straightforward, fast path from search to checkout built around a genuine 30-minute promise. Built properly, that combination is what actually makes the product valuable day to day, not as a novelty, but as a real alternative to keeping inventory on hand."
      ]
    },
    {
      type: "prose",
      id: "platforms",
      index: {
        number: "05",
        title: "Platforms"
      },
      headline: "Native on both Android and iOS.",
      paragraphs: [
        "Turbo Supply runs natively on both Android and iOS, built in Flutter with a Node.js backend, with payment integration built in from launch."
      ]
    },
    {
      type: "prose",
      id: "launch",
      index: {
        number: "06",
        title: "Launch"
      },
      headline: "Built and launched in four weeks.",
      paragraphs: [
        "We handled the full launch for Turbo Supply, from build through to getting the app live and operational, in 4 weeks with a focused team of 3."
      ]
    },
    {
      type: "prose",
      id: "results",
      index: {
        number: "07",
        title: "Results"
      },
      headline: "Live, and doing the job it was built for.",
      paragraphs: [
        "Turbo Supply is live and operating on Android and iOS. A tradesperson can find the exact part, order it and see the 30-minute window, without holding stock or leaving the job.",
        "It was built and launched in 4 weeks by a team of 3."
      ]
    }
  ]
} as const satisfies CaseStudyNarrativeContent;
