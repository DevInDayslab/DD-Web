# Case Study: Invigil

## Hero
**Headline:** A civic media platform that had to be six products at once, without feeling like six products stapled together.
**Subhead:** News, social, live TV, an AI newsroom, and an investigation portal, one coherent backend underneath all of it.
**Recording:** walkthrough video (see "What to record" at the bottom).

## Overview
- **Client:** FGCO.IN / AP Media *[Confirm exact legal/display name for publication]*
- **CEO:** Ramesh Babu Pasupaleti
- **Industry:** News & civic media
- **Services:** Full backend development (Python, FastAPI), third-party integrations (e-KYC, Vahan), UI refinement, Android, iOS, Android TV, and web development
- **Timeline:** Started August 2026, built and launched in approximately 3 months
- **Team:** 8 engineers
- **Live:** [theinvigil.com](https://theinvigil.com)

## Context
Invigil is the most ambitious product in our portfolio, and it's worth being direct about that rather than undersell it with a generic description. It's a civic media platform that combines what would normally be five or six separate apps into one: a news platform, a social feed with its own chat, short-form video (teasers), a stories-style format (posters), live TV where channels can broadcast, personal live streaming, live video conferencing, a public investigation portal, a buy-and-sell marketplace, and an AI layer (ViERA) that runs underneath several of these features at once. Few products attempt this much surface area in a single platform, and almost none attempt it while also trying to feel coherent rather than like several apps wearing the same logo.

## The Starting Point
Invigil didn't start as a blank page for us. The client had already worked with a previous developer who had produced a UI prototype, the visual design and screen structure, but hadn't been able to carry it through to a working product. By the time it reached us, what existed was a prototype: a UI without the engineering underneath it to make any of it real.

We made a deliberate choice early on: refine the existing UI rather than throw it out, while keeping its core structure intact, and put our actual effort into building the real product underneath it, the backend, the data model, the integrations, the functionality that turns a set of screens into a working platform. The UI itself is scheduled for a deeper redesign in the next phase, this version intentionally prioritized getting a functioning, launched product into the world over getting every pixel right on the first pass, which was the correct tradeoff for a platform at this stage.

## The Hardest Problem: One Platform, Not Six
The genuinely hard problem on Invigil wasn't any single feature in isolation, a chat system, a live-streaming module, a marketplace, these all exist as solved problems elsewhere. The hard problem was making all of them live inside one coherent platform, sharing one identity system, one trust and moderation layer, and one backend, without the end result feeling like six different apps bolted together under a single name.

That meant building a backend architecture, in Python with FastAPI, designed from the start to support fundamentally different kinds of content and interaction (a news article, a live broadcast, a marketplace listing, an investigation case file, a chat message) through a shared, consistent set of underlying systems: one user identity and trust model that every module reads from, one moderation and safety layer that applies whether the content is a comment or a live stream, and one data layer that a reporter, an everyday user, and an investigation officer all interact with through different permissions rather than different, disconnected systems. Getting the architecture right here mattered more than any individual feature, because a mistake in that foundation would have surfaced as inconsistency everywhere, a trust score that meant something different on the marketplace than it did on the news feed, moderation that caught issues in chat but missed them in live video.

## ViERA: The AI Layer
ViERA is Invigil's AI system, and it runs through several parts of the platform rather than existing as a single bolted-on chatbot feature. It includes a conversational chatbot, an AI news anchor capable of generating news presentation using anyone's provided audio and video, automated fact-checking functionality, and the safety and compliance layer that runs underneath content on the platform. Building this meant treating AI as infrastructure that several features depend on, chat, content generation, fact-checking, rather than as one isolated feature with its own separate pipeline, which is a materially different (and more demanding) integration problem than adding a single AI chat widget to an existing app.

## The Investigation Portal
One of Invigil's more unusual features is a public investigation portal: any user can raise a case, and investigation officers and other agents can work that case within the platform itself. This isn't a feature with an obvious precedent to borrow from, most social or news platforms don't have anything like a formal case-handling workflow built into them, which meant designing the roles, permissions, and workflow around it largely from first principles: who can raise a case, who can see it, how it moves between an officer and an agent, and how that entire workflow stays properly separated from the rest of the platform's more public, social-facing features while still living in the same app.

## Trust, Safety & Verification
Given the range of what Invigil does, verification and trust had to be built as core infrastructure, not an afterthought. The platform includes e-KYC functionality and integration with Vahan (India's vehicle registration database) for relevant verification needs, proper safety and security compliance throughout, and a trust score attached to every user's profile that reflects their standing on the platform. Combined with ViERA's fact-checking layer, this is what allows a platform that includes open user-generated content, live broadcasting, and a public investigation portal to function responsibly rather than becoming an unmoderated free-for-all.

## Roles
Invigil runs on a genuinely wide set of roles, more than any other platform in our portfolio: everyday users, reporters, editors, multiple tiers of admin, investigation officers, and vetted professionals, each with different permissions and different views into the platform depending on what they're actually there to do. Designing for this many distinct roles inside one coherent permission system, rather than effectively building a separate app per role, is part of what made the backend architecture decisions above so consequential.

## Platforms
Invigil runs across Android, iOS, Android TV (for the live TV and broadcast side of the platform), and a full web app, built to work as one consistent experience across all four rather than a mobile-first app with a TV and web app bolted on as afterthoughts.

## Launch
Invigil launched in approximately 3 months from the project's start in August 2026, a genuinely fast timeline given the scope of what shipped, five to six distinct product categories, an AI layer, and a public investigation workflow, in a single launch rather than staged out over a much longer period.

## Results
Invigil is live today at [theinvigil.com](https://theinvigil.com). *[Confirm before publishing: any numbers you're able to share, registered users, content published, investigations raised, etc. If not, this stays as "live and operating" with no figures, not an invented number.]*

## Testimonial
A testimonial from Ramesh Babu Pasupaleti is expected for this one. *[Add once received.]*

## The Relationship Since
This is an ongoing collaboration, not a one-off build. The current version intentionally prioritized getting a working, launched platform out before revisiting the UI in depth, and there's an active next phase planned, likely a substantial redesign pass on top of the product foundation now in place.

## Closing
Live at [theinvigil.com](https://theinvigil.com). *[Add a cross-link to a related case study once appropriate, Dater or Sailor for the multi-role angle, once published.]* Book a Call CTA.

---

## What to record
Given how much is in this platform, the walkthrough should prioritize breadth over depth, showing the range rather than going deep on any single feature:
1. Open into the main feed/news view.
2. Quick cut to a teaser (short-form video) or a poster (story format) being viewed.
3. Quick cut to live TV or a live broadcast in progress.
4. Quick cut to the marketplace.
5. Quick cut to ViERA, ideally the chat interface or the AI anchor feature if it's visually demonstrable.
6. End on a verified profile with a visible trust score, ties back to the trust & safety section.

Given the sheer range of what this platform does, this is the one case study where a slightly longer walkthrough (closer to 30-40 seconds) is justified, trying to compress six product categories into 20 seconds would undersell what's actually there.

---

## Open items before this is finalized
- Confirm exact company name/spelling for publication ("FGCO.IN / AP Media" as given, worth double-checking the authoritative form).
- Results numbers, or confirm it stays as the honest "live and operating" line.
- Testimonial, once received from Ramesh Babu Pasupaleti.
- Confirm which section should carry the page's one full-bleed "statement" treatment: I defaulted to "One Platform, Not Six" (the backend/architecture challenge) over ViERA, since it's the most defensible, hardest-to-replicate technical claim in the whole case study, but ViERA is the more visually interesting one if you'd rather lead with that instead.
