import type { CaseStudyNarrativeContent } from "@/types/case-study-narrative";

/** Copy from source material; visuals via `turbo-section` blocks. */
export const turboSupplyCaseStudyNarrative = {
  blocks: [
    {
      type: "prose",
      id: "context",
      index: { number: "01", title: "Context" },
      headline: "A real hardware business moving into quick commerce.",
      paragraphs: [
        "Turbo Supply was already a real, operating hardware supply business in Delhi NCR before this app existed, selling general hardware across the kind of range a trade business actually needs, not one narrow category. The business wanted to move into quick commerce specifically: the same 30-minute delivery speed people now expect from groceries, applied to hardware instead.",
      ],
    },
    {
      type: "turbo-section",
      variant: "problem-compare",
      id: "the-real-problem-it-solves",
      index: { number: "02", title: "The Real Problem It Solves" },
      headline: "The interesting part isn't the delivery speed. It's what the speed replaces.",
      paragraphs: [
        "The interesting part of this product isn't really the delivery speed on its own, it's what that speed actually changes for the businesses using it. A plumbing, electrical, or general contracting business has traditionally had to choose between two bad options: hold a large inventory of hardware they might need, tying up cash and storage space in stock that mostly sits unused, or run to a hardware store mid-job every time something's missing, losing time on-site waiting for a supply run. Turbo Supply offers a third option, order exactly what's needed, exactly when it's needed, and have it arrive fast enough that it doesn't stall the job.",
        "That reframes what the app is actually for. It's not competing with a hardware store on convenience alone, it's competing with the idea of holding inventory at all. A small business that can reliably get the right part in 30 minutes has much less reason to keep a stockroom of parts it might need someday, which is a real, ongoing cost saving for the business using it, not just a nicer shopping experience.",
      ],
      left: {
        id: "hold",
        title: "Hold stock",
        body: "Hold a large inventory of hardware they might need, tying up cash and storage space in stock that mostly sits unused",
      },
      right: {
        id: "order",
        title: "Order when needed",
        body: "Order exactly what's needed, exactly when it's needed, and have it arrive fast enough that it doesn't stall the job",
      },
    },
    {
      type: "turbo-section",
      variant: "search-mock",
      id: "the-challenge",
      index: { number: "03", title: "The Challenge" },
      headline: "Getting the right part in 30 minutes only works if you can find the right part.",
      paragraphs: [
        "Quick commerce as a category has mostly been built around groceries and household essentials, products that are small, largely interchangeable, and simple to catalog. General hardware is a different kind of inventory: a huge range of parts, fittings, tools, and materials, many of which look similar but aren't interchangeable, a pipe fitting in the wrong diameter or a cable rated for the wrong load isn't a minor substitution, it's the wrong part entirely. Getting someone the right item in 30 minutes only works if they can correctly find and identify that item in the first place, which matters more here than in a typical quick-commerce catalog where getting a slightly different brand of the same product barely registers as a problem.",
        "On top of that, the buyer on this app isn't the same as a typical quick-commerce shopper. It's often someone mid-job, on-site, who already knows exactly what part they need and wants to find it fast, not browse. The app had to be built around that kind of purposeful, specific search behavior rather than the more exploratory browsing pattern grocery delivery apps are designed around.",
      ],
      mock: {
        /** Illustrative listing only; wording echoes The Challenge (not a real SKU). */
        partName: "Pipe fitting",
        spec: "Diameter match · load rating · category",
        size: "Parts & fittings",
        rating: "Find the exact match first",
      },
    },
    {
      type: "prose",
      id: "getting-the-basics-right",
      index: { number: "04", title: "Getting the Basics Right" },
      headline: "A focused, well-executed build, and honest about it.",
      paragraphs: [
        "This wasn't a build that needed a novel technical breakthrough, and there's no value pretending otherwise, it's a focused, well-executed quick-commerce app for a category that hasn't had one built properly for it before. The real work was in structuring the catalog and the ordering flow correctly for what a trade business actually needs: clear, specific, well-categorized listings across a wide hardware range so someone can find the exact part quickly, and a straightforward, fast path from search to checkout built around a genuine 30-minute promise. Built properly, that combination is what actually makes the product valuable day to day, not as a novelty, but as a real alternative to keeping inventory on hand.",
      ],
    },
    {
      type: "turbo-section",
      variant: "platforms-dual",
      id: "platforms",
      index: { number: "05", title: "Platforms" },
      headline: "Native on both Android and iOS.",
      paragraphs: [
        "Turbo Supply runs natively on both Android and iOS, built in Flutter with a Node.js backend, with payment integration built in from launch.",
      ],
    },
    {
      type: "prose",
      id: "launch",
      index: { number: "06", title: "Launch" },
      headline: "Built and launched in four weeks.",
      paragraphs: [
        "We handled the full launch for Turbo Supply, from build through to getting the app live and operational, in 4 weeks with a focused team of 3.",
      ],
    },
    {
      type: "turbo-section",
      variant: "results-banner",
      id: "results",
      index: { number: "07", title: "Results" },
      headline: "Live and operating.",
      bannerLabel: "Live and operating",
      paragraphs: ["Turbo Supply is live and operating today."],
    },
  ],
} as const satisfies CaseStudyNarrativeContent;
