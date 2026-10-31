import type { FaqPageSection } from "@/types/faq-page";
import { assertUniqueIds } from "@/lib/unique";

export const faqPageSections = [
  {
    id: "fit-scope",
    label: "Fit & Scope",
    items: [
      {
        id: "who-is-devindays-for",
        question: "Who is DevInDays for?",
        answer:
          "DevInDays is built for founders and businesses who need a real, working product, not a rushed prototype or a coded shell handed off without support. If you need something built properly, by a team that stays accountable past launch, that's exactly who we work with.",
      },
      {
        id: "what-type-of-businesses-does-devindays-work-with",
        question: "What type of businesses does DevInDays work with?",
        answer:
          "We mostly work with two kinds of clients: seed-stage founders building a consumer app from scratch, and established businesses building internal tools or operational software to run part of their business more efficiently.",
      },
      {
        id: "do-you-work-with-early-stage-startups-with-no-funding-yet",
        question: "Do you work with early-stage startups with no funding yet?",
        answer:
          "Yes, absolutely. Our MVP Build tier exists specifically for founders who want to prove an idea works with real users before raising funding or committing to a larger budget.",
      },
      {
        id: "do-you-work-with-established-businesses-not-just-startups",
        question: "Do you work with established businesses, not just startups?",
        answer:
          "Yes. A good number of our projects are for businesses that already exist and are digitizing or automating something that's currently manual.",
      },
      {
        id: "what-kind-of-projects-are-not-a-good-fit-for-devindays",
        question: "What kind of projects are not a good fit for DevInDays?",
        answer:
          "We're honest about this: large enterprise software for organizations with their own internal engineering teams, and highly regulated products that need compliance work we haven't done before, aren't a good fit for us. We'd rather tell you that upfront than take on something we can't do justice to.",
      },
      {
        id: "does-devindays-build-multi-sided-platforms-and-marketplaces",
        question: "Does DevInDays build multi-sided platforms and marketplaces?",
        answer:
          "Yes. Sailor is a multi-role delivery marketplace where customers, riders, merchants, and admins all coordinate in real time. Invigil goes further still, combining investigation-case funding, media publishing, and social features across several more roles.",
      },
      {
        id: "does-devindays-build-home-service-booking-apps-like-urbanclap",
        question: "Does DevInDays build home-service booking apps, like UrbanClap?",
        answer:
          "Yes. HomeyFixIt lets users book vetted professionals, carpenters, plumbers, cleaners, and more, with scheduling and provider management built in.",
      },
      {
        id: "can-devindays-build-an-app-like-uber-airbnb-or-eatclub",
        question: "Can DevInDays build an app like Uber, Airbnb, or EatClub?",
        answer:
          "We build the underlying pattern those apps run on: several roles that need to coordinate in real time rather than just use the app independently. Sailor is a live example of exactly that, with customers, riders, merchants, and admins all working together. If you have a specific idea along these lines, it's usually a Full Product-tier conversation, and we'd love to talk it through on a call.",
      },
      {
        id: "can-devindays-build-a-product-similar-to-an-existing-app",
        question: "Can DevInDays build a product similar to an existing app?",
        answer:
          "Yes. We can build products that use similar underlying workflows to an existing application, but we don't simply copy another company's product. We scope the features, user roles, business rules, integrations, and design around your own requirements.",
      },
      {
        id: "does-devindays-build-internal-business-tools-not-just-consumer-apps",
        question: "Does DevInDays build internal business tools, not just consumer apps?",
        answer:
          "Yes. Admin dashboards and internal platforms are a core part of what we build, not an afterthought. Invigil's internal tooling alone spans reporters, editors, multiple tiers of admin, and investigation officers, all with different permissions and workflows.",
      },
      {
        id: "what-does-devindays-not-specialize-in",
        question: "What does DevInDays not specialize in?",
        answer:
          "We're not set up to be an enterprise systems integrator for large organizations with heavy procurement and compliance requirements. We're best suited to founders and businesses who want a small, accountable team to take a defined product, from an idea or an existing codebase, through to launch.",
      },
      {
        id: "does-devindays-guarantee-that-my-app-will-succeed",
        question: "Does DevInDays guarantee that my app will succeed?",
        answer:
          "No, and we wouldn't want to promise that. We're responsible for building and delivering a great product, but things like market demand and user acquisition depend on factors outside the product itself, and we won't pretend otherwise.",
      },
      {
        id: "what-industries-do-you-have-experience-in",
        question: "What industries do you have experience in?",
        answer:
          "We've shipped real work in delivery and logistics, dating, matrimonial, social, news and media, home services, quick commerce, event booking, and therapist discovery and wellness platforms, and that list keeps growing as we take on new projects.",
      },
    ],
  },
  {
    id: "experience-proof",
    label: "Experience & Proof",
    items: [
      {
        id: "what-products-has-devindays-actually-shipped",
        question: "What products has DevInDays actually shipped?",
        answer:
          "Take a look at our [case studies](/case-studies): Dater, HomeyFixIt, Sailor, MakeMyJodi, Nazdikwala, Billing Baba, TurboSupply, EntryTicket, Myndfe, TrustAI, Homingo, and others. Selected projects have detailed case studies, with additional project details available on request.",
      },
      {
        id: "which-of-your-products-are-publicly-available",
        question: "Which of your products are publicly available?",
        answer:
          "A few you can check right now: [Dater](https://dater.social), [Sailor](https://sailordeliveryservices.com), [HomeyFixIt](https://homeyfixit.com), [MakeMyJodi](https://www.makemyjodi.com), [Billing Baba](https://billingbaba.com), and [Invigil](https://theinvigil.com). Myndfe is on a public waitlist at [myndfe.com](https://myndfe.com). The full, current list with every verified link lives on [case studies](/case-studies), that's the right place for it, not a growing link list here.",
      },
      {
        id: "how-many-products-has-devindays-delivered",
        question: "How many products has DevInDays delivered?",
        answer:
          "We've shipped products across mobile, web, and operational platforms for founders and established businesses. The [case studies](/case-studies) page is the best place to see the current portfolio and the products we've publicly documented.",
      },
      {
        id: "can-i-see-the-technology-used-in-your-previous-projects",
        question: "Can I see the technology used in your previous projects?",
        answer:
          "Yes, each case study lists the actual stack we used for that build.",
      },
      {
        id: "does-devindays-have-experience-building-products-with-multiple-user-roles",
        question: "Does DevInDays have experience building products with multiple user roles?",
        answer:
          "Yes. Sailor runs on four roles working together in real time: customer, rider, merchant, and admin. Invigil goes well beyond that, with reporters, editors, multiple tiers of admin, regular users, investigation officers, and vetted professionals all operating within the same platform.",
      },
      {
        id: "what-s-the-most-complex-product-devindays-has-built",
        question: "What's the most complex product DevInDays has built?",
        answer:
          "Invigil. It's a civic media platform combining verified news, social feeds, an AI newsroom (ViERA, including an AI news anchor, chat, media verification, and translation), live TV and channels, short-form video, a buy-and-sell marketplace, and an escrow-protected investigation portal, all under one roof, with distinct roles for reporters, editors, multiple admin tiers, investigation officers, vetted professionals, and everyday users.",
      },
      {
        id: "can-i-see-examples-of-your-ui-ux-work",
        question: "Can I see examples of your UI/UX work?",
        answer:
          "Yes, there are screenshots and detail in every case study. Dater is a good one to look at for interaction design specifically: it replaces the typical swipe-and-scroll dating feed with a feed-based matchmaking mechanism, alongside chat and a friend list.",
      },
      {
        id: "who-is-behind-devindays",
        question: "Who is behind DevInDays?",
        answer:
          "Our founder, Raghav. You can read more about his background and how projects actually get staffed on the [About](/#about) section.",
      },
      {
        id: "can-i-speak-to-someone-who-actually-builds-the-product",
        question: "Can I speak to someone who actually builds the product?",
        answer:
          "Yes. Raghav is directly involved in scope and architecture, and the engineering team actually working on your product is introduced as part of the engagement. You aren't handed off to a separate delivery team after the sales call.",
      },
    ],
  },
  {
    id: "technical-capabilities",
    label: "Technical Capabilities",
    items: [
      {
        id: "what-technologies-does-devindays-use",
        question: "What technologies does DevInDays use?",
        answer:
          "We work across Flutter, Kotlin, and Swift/SwiftUI for mobile, React Native when cross-platform with native modules makes sense, Node.js, Python/FastAPI, and PHP for backend, PostgreSQL and MongoDB for databases, and AWS, Firebase, or Supabase for infrastructure. The stack isn't fixed in advance. We choose technologies based on the product's requirements, existing systems, team needs, and long-term maintenance considerations.",
      },
      {
        id: "does-devindays-handle-the-backend-and-database",
        question: "Does DevInDays handle the backend and database?",
        answer:
          "Yes. Backend development, database design, authentication, and deployment can all be included, and we'll confirm exactly what's covered together during discovery.",
      },
      {
        id: "can-devindays-take-over-an-existing-app-or-codebase",
        question: "Can DevInDays take over an existing app or codebase?",
        answer:
          "Yes, happy to. We'll audit the existing code first so we can give you an honest, accurate quote rather than guessing.",
      },
      {
        id: "can-devindays-fix-or-audit-code-another-agency-built",
        question: "Can DevInDays fix or audit code another agency built?",
        answer:
          "Yes. If you just want an honest second opinion on an existing codebase, we can scope that as its own standalone engagement.",
      },
      {
        id: "does-devindays-build-ai-powered-features",
        question: "Does DevInDays build AI-powered features?",
        answer:
          "Yes. Myndfe includes an AI companion, while Invigil includes ViERA, an AI newsroom with features including an AI news anchor, chat, media verification, and translation. We've also built recommendation and matching logic, conversational assistants, and document or media processing into products where those capabilities were required.",
      },
      {
        id: "does-devindays-build-web-apps-or-only-mobile",
        question: "Does DevInDays build web apps, or only mobile?",
        answer:
          "Both. We build web apps just as regularly as mobile ones.",
      },
      {
        id: "can-we-provide-the-designs-and-have-devindays-handle-development",
        question: "Can we provide the designs and have DevInDays handle development?",
        answer:
          "Yes. We can work from an existing Figma design system, or take responsibility for both product design and engineering. During discovery, we'll review your designs to make sure the UX and technical requirements are clear before development begins.",
      },
      {
        id: "can-devindays-handle-both-design-and-development",
        question: "Can DevInDays handle both design and development?",
        answer:
          "Yes. UI/UX design and engineering are handled as one engagement, which is the standard approach for our MVP and Full Product builds.",
      },
    ],
  },
  {
    id: "process-communication",
    label: "Process & Communication",
    items: [
      {
        id: "what-happens-after-i-book-a-call",
        question: "What happens after I book a call?",
        answer:
          "You'll have a 30-minute conversation with our founder directly, not a sales rep, so we can properly understand what you're trying to build. If it feels like a good fit on both sides, we'll follow up shortly after with a scoped feature list, a realistic timeline, and a fixed quote.",
      },
      {
        id: "who-actually-works-on-my-project",
        question: "Who actually works on my project?",
        answer:
          "Our founder is personally involved in the architecture and scope decisions on every project we take on, and a small, dedicated team of engineers handles the actual build.",
      },
      {
        id: "can-devindays-work-alongside-our-existing-team",
        question: "Can DevInDays work alongside our existing team?",
        answer:
          "Yes. We can take ownership of a defined product area, work alongside your existing engineering team, or handle a complete product independently. The exact collaboration model gets agreed during discovery.",
      },
      {
        id: "how-involved-am-i-expected-to-be-during-development",
        question: "How involved am I expected to be during development?",
        answer:
          "Most of your time goes into the scoping conversation up front and weekly check-ins after that. We don't need you in daily standups, but we do ask for timely feedback whenever we send something over for your review, so the schedule stays on track.",
      },
      {
        id: "how-often-do-i-see-progress-or-working-builds",
        question: "How often do I see progress or working builds?",
        answer:
          "At least once a week, you'll see something real, not just a status update, an actual working build.",
      },
      {
        id: "who-owns-the-product-decisions-me-or-devindays",
        question: "Who owns the product decisions, me, or DevInDays?",
        answer:
          "You do, always. We'll be honest and push back if we think something's the wrong call, but the final decision is yours.",
      },
      {
        id: "how-does-testing-and-qa-work-before-i-see-something",
        question: "How does testing and QA work before I see something?",
        answer:
          "Before anything is marked ready for your review, our team tests it on real devices and checks it against the agreed functionality and common edge cases, so what you see is already in good shape.",
      },
      {
        id: "what-happens-if-the-project-needs-to-change-scope-halfway-through",
        question: "What happens if the project needs to change scope halfway through?",
        answer:
          "That happens more often than you'd think, and it's not a problem. We'll walk you through exactly how it affects the timeline and the price before we move forward, so there are no surprises later.",
      },
      {
        id: "what-happens-if-the-project-runs-behind-schedule",
        question: "What happens if the project runs behind schedule?",
        answer:
          "If something looks like it's going to run behind, you'll hear about it as soon as we see it coming, not at the deadline. We don't attach penalties or guarantees to a missed date, but you'll always get an honest heads-up and a clear picture of what it means for the timeline before it becomes a surprise.",
      },
      {
        id: "what-does-production-ready-mean-at-devindays",
        question: "What does \"production-ready\" mean at DevInDays?",
        answer:
          "It means the full checklist is done, not just the visible parts: agreed functionality fully built, tested on real devices, proper handling for errors and empty or loading states (not just the happy path), authentication and authorization done properly, the real API and database wired in rather than mocked, everything configured for production, deployed, and prepared and submitted to the relevant app store where app-store distribution is part of the project scope, and handed over with documentation. The exact checklist gets defined with you during scoping, since it depends on what your product actually needs.",
      },
      {
        id: "do-you-provide-documentation-for-the-final-product",
        question: "Do you provide documentation for the final product?",
        answer:
          "Yes, always. Proper documentation is a standard part of every handover, not an extra.",
      },
    ],
  },
  {
    id: "pricing-engagement",
    label: "Pricing & Engagement",
    items: [
      {
        id: "how-much-does-devindays-charge-to-build-an-app",
        question: "How much does DevInDays charge to build an app?",
        answer:
          "MVP Build starts from $3,950 and typically takes 2-3 weeks. Full Product starts from $13,900 and takes 6-8 weeks. Custom projects are scoped individually, so we'd love to get on a call and give you an honest quote.",
      },
      {
        id: "what-s-included-in-the-mvp-build-price",
        question: "What's included in the MVP Build price?",
        answer:
          "A complete, real product people can actually use, not a stripped-down version of something bigger: end-to-end UI/UX design and development, one integrated payment or subscription setup, a properly indexed database, production-grade secure user authentication, App Store and Google Play submission, full IP and source code ownership once we're done, and 30 days of post-launch support.",
      },
      {
        id: "what-s-not-included-in-the-mvp-build-price",
        question: "What's NOT included in the MVP Build price?",
        answer:
          "Two kinds of things that come with Full Product instead. The operational layer: a full admin dashboard, infrastructure stress-tested under load, a CI/CD deployment pipeline, active real-time monitoring, and deeper third-party integrations. And the product layer: the sub-features and refinements that round out something already in the MVP into a fuller day-to-day experience.",
      },
      {
        id: "when-should-i-choose-full-product-instead-of-mvp-build",
        question: "When should I choose Full Product instead of MVP Build?",
        answer:
          "MVP Build gets you a complete, fully working app your users can start using right away, built properly from day one. Full Product goes further in two ways. It adds the operational layer you need to actually run the business: a full admin dashboard, architecture stress-tested under load rather than just designed for it, a CI/CD pipeline, active monitoring, and deeper integrations. And it adds product depth: the sub-features layered onto something already in the MVP that make the day-to-day experience feel complete rather than basic. The real question is whether you're validating the core idea first, or building something you intend to run and scale right away.",
      },
      {
        id: "what-kind-of-project-can-i-build-with-a-15-000-to-30-000-budget",
        question: "What kind of project can I build with a $15,000 to $30,000 budget?",
        answer:
          "Projects in this range usually make sense once a product needs real operational infrastructure and extra product depth on top of the core app: things like an admin system, stress-tested architecture, active monitoring, multiple integrations, or additional sub-features that round out the experience. We'll figure out the right scope together during discovery.",
      },
      {
        id: "is-pricing-fixed-or-can-it-change-during-the-project",
        question: "Is pricing fixed, or can it change during the project?",
        answer:
          "It's fixed to whatever scope we agree on at the start. If you'd like to add something mid-project, we'll always tell you honestly what it costs and how it affects the timeline before moving ahead, never after.",
      },
      {
        id: "do-you-require-full-payment-upfront",
        question: "Do you require full payment upfront?",
        answer:
          "No. Payment is split across the project: 30% to get started, 40% at a build milestone, and the final 30% on delivery.",
      },
      {
        id: "does-devindays-work-with-international-clients",
        question: "Does DevInDays work with international clients?",
        answer:
          "Yes, this is standard for us now. Pricing is in USD, and we regularly work with founders and businesses outside India.",
      },
      {
        id: "what-does-the-custom-tier-actually-include",
        question: "What does the Custom tier actually include?",
        answer:
          "This is where we go further: dedicated engineering team integration, complex machine learning or AI pipelines, enterprise-grade security and compliance work, high-concurrency infrastructure, and custom SLA or support arrangements.",
      },
    ],
  },
  {
    id: "launch-post-launch-operations",
    label: "Launch & Post-Launch Operations",
    items: [
      {
        id: "what-happens-after-the-app-launches",
        question: "What happens after the app launches?",
        answer:
          "We submit it to the App Store and/or Google Play, hand over the source code and full IP, provide documentation, and stay with you through a defined post-launch support window for any fixes or questions.",
      },
      {
        id: "what-happens-if-the-app-store-rejects-the-app",
        question: "What happens if the App Store rejects the app?",
        answer:
          "We take care of it. We review the reason for the rejection, fix what's needed, and resubmit, all within your included support window.",
      },
      {
        id: "how-do-you-monitor-for-crashes-after-launch",
        question: "How do you monitor for crashes after launch?",
        answer:
          "We set up crash reporting on every build, so crashes and errors can be identified and traced after launch. Active real-time monitoring and ongoing telemetry are included as standard on Full Product and above, and can be arranged on request for MVP Build.",
      },
      {
        id: "are-push-notifications-email-or-sms-part-of-what-you-build",
        question: "Are push notifications, email, or SMS part of what you build?",
        answer:
          "Yes, whenever your product needs them. We scope these in as part of the build.",
      },
      {
        id: "are-you-actually-watching-the-system-on-launch-day",
        question: "Are you actually watching the system on launch day?",
        answer:
          "Real-time launch-day monitoring is standard on Full Product and above, and can be arranged on request for MVP Build if set up ahead of time. Either way, any issue you flag during the support window is reviewed and addressed according to its severity.",
      },
      {
        id: "who-pays-for-cloud-hosting-costs-and-how-are-they-controlled-as-usage-grows",
        question: "Who pays for cloud/hosting costs, and how are they controlled as usage grows?",
        answer:
          "You own and pay for your own infrastructure, your AWS, Firebase, or Supabase account, under your name, and we design it to stay cost-efficient at whatever usage level you're actually at.",
      },
      {
        id: "what-specifically-changes-once-the-app-gets-real-traction",
        question: "What specifically changes once the app gets real traction?",
        answer:
          "We avoid architectural decisions that unnecessarily block future growth, on every build. Full Product and Custom builds go further by stress-testing, monitoring, and verifying the infrastructure under realistic load, adding live telemetry and a CI/CD pipeline for ongoing releases.",
      },
      {
        id: "is-post-launch-support-included-or-is-it-a-separate-cost",
        question: "Is post-launch support included, or is it a separate cost?",
        answer:
          "It's included: 30 days with MVP Build, and longer with Full Product.",
      },
    ],
  },
  {
    id: "ownership-legal",
    label: "Ownership & Legal",
    items: [
      {
        id: "do-i-own-the-source-code",
        question: "Do I own the source code?",
        answer:
          "Yes, 100%, once final payment is made, and this is written into the contract every client signs with us.",
      },
      {
        id: "do-you-retain-any-rights-to-what-you-build-for-me",
        question: "Do you retain any rights to what you build for me?",
        answer:
          "The only thing we hold onto is the right to feature the finished work in our own portfolio and case studies. Everything else, the code, the IP, the infrastructure, is entirely yours.",
      },
      {
        id: "is-there-a-contract-and-what-does-it-cover",
        question: "Is there a contract, and what does it cover?",
        answer:
          "Yes, every client signs one before work begins. It covers IP ownership and transfer, scope, payment terms, and our right to showcase the finished work in our portfolio.",
      },
      {
        id: "what-happens-to-my-data-and-credentials-after-the-project-ends",
        question: "What happens to my data and credentials after the project ends?",
        answer:
          "Everything stays under your ownership the whole way through: your accounts, your infrastructure, nothing held on our end.",
      },
      {
        id: "can-i-take-my-app-to-another-developer-later-without-issues",
        question: "Can I take my app to another developer later without issues?",
        answer:
          "Yes. Since you own the full source code and get proper documentation, any developer can pick up where we left off.",
      },
    ],
  },
] satisfies readonly FaqPageSection[];

assertUniqueIds(
  faqPageSections.flatMap((section) => [...section.items]),
  "faq-page",
);
