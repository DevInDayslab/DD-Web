import type { CaseStudyNarrativeContent } from "@/types/case-study-narrative";

/** Full-length text from the case study source material; see `materialPath` on the page. */
export const entryTicketCaseStudyNarrative = {
  blocks: [
    {
      type: "prose",
      id: "context",
      index: {
        number: "01",
        title: "Context"
      },
      headline: "Build something new on top of something that already works.",
      paragraphs: [
        "EntryTicket already had a working ticket-booking platform, a live website handling real events, real bookings, and real money, with an in-house development team maintaining it. What it didn't have was a native mobile app, and for a product like event ticketing, that gap matters more than it might for other categories. Buying a ticket is often a fast, last-minute decision, someone hears about an event, wants to lock in a seat before it sells out, and a mobile website asks them to do that through a browser, with all the friction that comes with it, slower load times, no saved payment details, no persistent login, no way to get a push notification when an event they're interested in opens up. A native app removes almost all of that friction, which for a ticketing platform translates directly into completed bookings instead of abandoned ones.",
        "So this wasn't a \"build us an app\" brief in the usual sense, where the product itself is new. It was \"take something that already works and already has its own identity, and give it a native mobile experience that feels like a natural extension of it, not a separate product wearing the same logo.\""
      ]
    },
    {
      type: "prose",
      id: "the-challenge",
      index: {
        number: "02",
        title: "The Challenge"
      },
      headline: "The brief was really a constraint.",
      paragraphs: [
        "The real challenge here wasn't designing a new product, EntryTicket already knew what EntryTicket was. It was building something new on top of something that already existed and couldn't be disrupted in the process. The website was live, actively processing real bookings, and the backend behind it was built in PHP by a team that understood it intimately. A mobile app that required a backend rewrite, or that ran its own separate system alongside the existing one, would have created exactly the kind of fragmentation EntryTicket was trying to avoid, two platforms with two sources of truth, ticket inventory that could drift out of sync, bookings that behaved differently depending on where they came from.",
        "The brief was really a constraint: build a fully native, fully functional mobile app, without touching the stability of the live website, and without creating a second, divergent version of EntryTicket's backend logic."
      ],
      pullQuote: {
        quote: "The brief was really a constraint.",
        attribution: "From the project notes"
      }
    },
    {
      type: "tech-strip",
      id: "stack-strip",
      ariaLabel: "Stack and scope",
      items: [
        "Flutter",
        "iOS + Android",
        "PHP backend integration",
        "Booking & payment APIs",
        "Ticket inventory sync",
        "Existing design system"
      ]
    },
    {
      type: "prose",
      id: "working-with-an-existing-backend",
      index: {
        number: "03",
        title: "Working With an Existing Backend"
      },
      headline: "The part that looks least impressive in a screenshot and matters most underneath.",
      paragraphs: [
        "This was the hardest part of the build, and it's also the part of this project that looks least impressive from a screenshot and matters the most underneath one. The existing backend was built in PHP, designed around the website's needs, not a mobile app's. Making it usable for a native mobile client meant going into that existing system and building out the API layer it needed, authentication, booking flows, payment handling, ticket inventory, event data, all of it needing to behave identically whether the request came from the website or from the new app, so that a seat booked on mobile was immediately and correctly reflected as unavailable on web, and vice versa, with no lag and no edge case where the same ticket could be sold twice.",
        "That's a meaningfully different kind of hard problem than building something from scratch. There's no blank canvas to design around, every decision has to work within constraints set by a system someone else built, for a different purpose, that's already live in production. Get it wrong and you don't just ship a bug, you risk double-booked seats or broken payments on a platform that already has real customers using it today. Getting it right required working closely with people who already understood that backend better than we did when we started, which is exactly what happened next."
      ]
    },
    {
      type: "prose",
      id: "working-with-their-in-house-team",
      index: {
        number: "04",
        title: "Working With Their In-House Team"
      },
      headline: "A collaboration, not a handoff.",
      paragraphs: [
        "EntryTicket has its own development team maintaining the web platform, and this build only worked because it was a genuine collaboration with them rather than a handoff. We didn't build the app in isolation and deliver it at the end, we worked alongside their existing developers throughout, making sure every API change, every data flow, and every design decision stayed in sync with how the web platform already worked and was already being maintained.",
        "This mattered for two reasons. Practically, nobody understood the existing backend's quirks and history better than the people who'd built and maintained it, and that knowledge shortened the path to getting the integration right. And longer-term, building this way meant EntryTicket's own team came out of the project able to maintain and extend the mobile app themselves, not dependent on an outside team for every future change, which is part of why this has turned into an ongoing relationship rather than a single project."
      ]
    },
    {
      type: "prose",
      id: "design-matched-not-reinvented",
      index: {
        number: "05",
        title: "Design, Matched Not Reinvented"
      },
      headline: "Consistency with the brand mattered more than originality.",
      paragraphs: [
        "The app's design deliberately adheres to EntryTicket's existing design language rather than introducing a new one. This wasn't a brief to reimagine what EntryTicket looks like, it was a brief to extend what already existed onto a new platform convincingly enough that a user moving between the website and the app wouldn't feel like they'd landed on a different product. That meant working within their existing visual identity, color system, and interaction patterns, and adapting those specifically for what a native mobile app needs rather than treating the web design as something to port over unchanged. Consistency with the brand mattered more than originality here, and that was the right call for a platform that already had real users who already knew what EntryTicket looked and felt like."
      ]
    },
    {
      type: "prose",
      id: "what-s-in-the-app",
      index: {
        number: "06",
        title: "What's in the App"
      },
      headline: "Scoped to where a native app actually changes the experience.",
      paragraphs: [
        "The app covers the consumer-facing side of EntryTicket end to end: browsing and discovering events, selecting tickets, completing a booking, and getting a ticket onto your phone in a way that's actually usable at the door. The organizer-facing side, event creation and management, already existed as a mature, working tool on the web platform, and there was no reason to rebuild what wasn't broken. This project was scoped specifically around giving consumers a native experience, not around re-platforming the entire product, which is part of why a 3-week timeline was realistic: the scope was deliberately focused on where a native app actually changes the experience for the better."
      ]
    },
    {
      type: "prose",
      id: "launch",
      index: {
        number: "07",
        title: "Launch"
      },
      headline: "Published and live.",
      paragraphs: [
        "EntryTicket's mobile app is published and live."
      ]
    },
    {
      type: "prose",
      id: "an-ongoing-relationship",
      index: {
        number: "08",
        title: "An Ongoing Relationship"
      },
      headline: "Not a one-off build.",
      paragraphs: [
        "This wasn't a one-off build. DevInDays is continuing to work with EntryTicket long-term, with more mobile products already lined up for the coming months. That's not incidental to this case study, it's part of what makes it a meaningful one: a client who's already seen the first build through to launch and chosen to keep building with the same team is a stronger signal than almost anything else in a portfolio."
      ]
    },
    {
      type: "prose",
      id: "results",
      index: {
        number: "09",
        title: "Results"
      },
      headline: "Live today.",
      paragraphs: [
        "EntryTicket's mobile app is live today."
      ]
    }
  ]
} as const satisfies CaseStudyNarrativeContent;
