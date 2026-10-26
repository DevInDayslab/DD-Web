# Case Study: Dater

## Hero
**Headline:** A dating app built around a feed, not a swipe.
**Subhead:** Native iOS and Android, built end-to-end, from matchmaking logic to trust and safety.
**Recording:** walkthrough video (see "What to record" at the bottom).

## Overview
- **Client:** Datify Network Private Limited
- **Industry:** Dating / Social
- **Services:** Product design, iOS development (Swift/SwiftUI), Android development (Kotlin), backend development (Node.js), trust & safety integration
- **Timeline:** ~2.5 months for v1, plus a focused 1-month v2 pass
- **Team:** Founder-led, with a team of 4 engineers
- **Live:** [dater.social](https://dater.social)

## Context
Dater's founder had tried to get this built before. He'd gone through other developers along the way, and each attempt got him closer to having an app, but never closer to having the app he actually wanted. The gap wasn't features, the briefs had probably listed most of the same screens every time, it was that none of those builds felt like a finished product. They felt like a list of requirements that had been checked off rather than a product that had been considered.

That's the state he was in when he came to DevInDays: not looking for someone to tell him what a dating app needs, he already knew that, but looking for a team that could actually execute on it properly, end to end, without the result needing a second or third rebuild. That's the brief we took on, and it's the same reason this case study exists, the difference between an app that technically works and one that's actually ready to launch with is almost entirely in the execution, not the concept.

## The Challenge
The real problem wasn't a missing feature, it was consistency. Dating apps are a strange category to build for, because the entire product is judged on feel, not function, in a way most software isn't. Two apps can offer the exact same feature set (matching, chat, profiles, verification) and one will feel trustworthy and considered while the other feels thrown together, and the difference is almost never in the feature list. It's in the hundred small decisions that sit underneath it: how a transition behaves, how forgiving the interface is when someone does something unexpected, whether a screen feels like it belongs to the same app as the one before it.

That was the brief in practice: not "build a dating app," but "build a dating app where every screen feels like it was made by the same team with the same standard," which is a much harder thing to brief, measure, or even describe, and a much easier thing to feel the absence of. The earlier attempts hadn't failed on any single feature. They'd failed on that standard, inconsistently, screen by screen.

## Getting to Simple
We built the first version over about 2.5 months, treating it as a real, working product from day one rather than a prototype to be thrown away later. Once it was in front of real use, the gap became obvious fast: it had more going on than a first-time user could comfortably take in. Too many decisions landed on screen at once, too many paths to get from opening the app to an actual conversation, and every extra decision point is a place where someone either drops off or just gets a slightly worse impression of the product.

So we spent a second, more focused phase, roughly a month, not adding anything, stripping back. Fewer choices per screen, clearer paths through the app, a more direct route from opening it to a real conversation happening. This is the part of a build that's easy to skip and expensive to skip: it's much faster to ship a v1 with every feature visible at once than to go back and decide what to hide, defer, or cut entirely. The discipline here wasn't technical, it was editorial, deciding what Dater didn't need to show someone in their first thirty seconds in the app, even if the feature itself was built and working.

## Platform Approach
Most apps at this budget reach for a single cross-platform codebase, one shared layer that ships to both iOS and Android at once. We didn't, and that was a deliberate call, not a default. Dater is built natively: Swift and SwiftUI on iOS, Kotlin on Android, kept genuinely separate rather than unified under one shared framework.

The reasoning is simple once you look at it from the user's side rather than the build's side. iOS and Android users have different expectations for how an app should move, respond, and behave, down to things like gesture handling, animation timing, and how the keyboard interacts with a screen. A shared cross-platform codebase tends to average those differences out, it ends up consistent with itself across platforms, but slightly off from what a native user on either platform actually expects. Keeping the codebases separate cost more engineering time upfront, two implementations of every screen instead of one, but it meant each platform could feel like it genuinely belonged there, rather than feeling like a port.

## Roles
Dater runs on two roles, kept deliberately simple rather than over-engineered for a scale the product wasn't at yet.

**Users** get the full consumer experience: feed-based matching, chat, friend requests with the ability to attach a comment rather than just a generic like, stories, and the ability to switch cities when traveling so matching stays relevant to wherever someone actually is.

**Admins** get a moderation and analytics layer, built to be simple rather than exhaustive: enough to review flagged content quickly, act on it, and understand how the platform is actually being used day to day. There was no value in building an elaborate internal tool for a two-person admin team to get lost in, the goal was to give them exactly what they needed to keep the platform safe and understand its usage, nothing more speculative than that.

## The Hardest Problem: Matchmaking
The hardest part of this build wasn't infrastructure, it wasn't even the native-platform split, it was the matchmaking logic itself. Dater replaces the typical swipe mechanic with a feed, and that single decision changes everything about what the ranking logic has to do. On a swipe-based app, the user does the ranking themselves, one profile at a time, in real time, swipe by swipe. On a feed, the app has to do that ranking in advance, which means the system has to make a judgment call about relevance before the user ever sees a single profile. There's nowhere to hide a weak ranking algorithm behind a swipe gesture, the feed exposes it immediately.

We built a custom scoring system that weighs several signals against each other rather than relying on one or two simple filters, combined with PostGIS for genuinely location-aware matching, so that distance isn't just a cutoff filter applied after the fact but one of the actual signals contributing to the ranking itself. The result is that results are ranked by relevance and proximity together, as one combined score, rather than as two separate filters stacked on top of each other, which is a meaningfully different (and harder) problem than it sounds like from the outside. Getting this right was less about any single clever piece of code and more about tuning how the different signals should be weighted against each other so the feed actually felt relevant rather than just technically sorted.

## Trust & Safety
Verification runs on AWS Rekognition, handling three distinct jobs: liveness detection to confirm there's an actual person behind a profile photo and not a static image, NSFW detection on uploaded content before it ever becomes visible to another user, and automated moderation flagging that surfaces likely issues before a human reviewer ever has to look at them.

This entire layer runs quietly in the background. It's one of the parts of the build that users never see or think about directly, there's no screen that says "verification happening," it just works or it doesn't, but it's most of what actually makes a platform like this safe to use at all. A dating app with weak trust and safety infrastructure isn't a worse dating app, it's a dangerous one, and this was treated as core infrastructure from the start rather than a feature bolted on after launch.

## Infrastructure
Everything runs on AWS, which was chosen for the same reason as the rest of the stack: it's what the product actually needed given its combination of media handling, Rekognition integration, and location-based queries, not a default reached for out of habit. Infrastructure decisions on this build followed the same principle as everything else in it, built for what the product is, not for what's fastest to set up or most familiar to default to.

## Launch
Dater launched on both the App Store and Google Play, with in-app purchases and subscriptions built in from day one for the premium tier, rather than retrofitted after an initial free-only launch. Having that monetization layer in place at launch, not added later as a v2 feature, meant the business model was validated alongside the product itself rather than treated as a separate problem to solve after the fact.

## Results
Dater is live today on both platforms. *[Confirm before publishing: any numbers you're able to share, downloads, active users, App Store rating. If not, this stays as "live and operating" with no figures, not an invented number.]*

## Testimonial
*[Pending, you mentioned you'll get one from Datify. Add once received, skip the section entirely until then rather than placeholder text.]*

## Closing
Live at [dater.social](https://dater.social). *[Add a cross-link to a related case study once another is written, e.g. Sailor or Invigil for the roles/trust-and-safety angle.]* Book a Call CTA.

---

## What to record
One continuous or lightly-cut walkthrough, 20 to 30 seconds, in this order:
1. Open the app straight into the feed, this is the moment that shows "not a swipe" before you say a word about it.
2. Scroll the feed, then send a friend request with a personal comment attached (shows the comment feature doing real work, not just a generic "like").
3. Cut to the request being accepted and a real chat opening.
4. Quick cut to a story being posted or viewed.
5. Quick cut to the "switch city" flow.
6. End on a verified profile badge, it ties the walkthrough back to the trust and safety section without needing a caption.

Keep it silent or near-silent, no flashy transitions, matches the flat, considered feel of the rest of the site.
