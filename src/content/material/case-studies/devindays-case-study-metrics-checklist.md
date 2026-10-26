# DevInDays — Case Study Metrics Checklist

Same rule as the rest of this project: real number or honest omission, never a placeholder dressed up as data. Each box is something to go confirm with the client or pull from your own dashboards before it goes on the page.

This checklist exists because two independent ChatGPT reviews of the site copy (one of the old live site, one of the new draft content) landed on the same gap: the case studies demonstrate delivery ("it shipped, it's live") far better than they demonstrate business outcomes. This is the punch list to close that gap.

---

## ☐ Dater
- ☐ App Store rating + review count
- ☐ Google Play rating + review count
- ☐ Total downloads (iOS + Android, combined or split)
- ☐ Registered users / profiles created
- ☐ Matches made or friend requests sent (shows the feed-ranking logic actually working, not just shipped)
- ☐ Messages sent / active conversations
- ☐ % of users who return after day 1 (even a rough retention number, if tracked)
- ☐ Time since launch (so any number has a timeframe attached — "12,000 downloads" means something different at 2 months vs. 8)

## ☐ Invigil
- ☐ Registered users
- ☐ Articles / posts published
- ☐ Investigation cases raised through the portal
- ☐ Concurrent livestream count, or total livestreams run
- ☐ Marketplace listings created
- ☐ ViERA usage — chat sessions, AI anchor segments generated, anything that shows the AI layer getting real use
- ☐ Platform breakdown — rough split of usage across Android / iOS / Android TV / web
- ☐ Time since launch
- ☐ Explicit split of what's third-party-integrated (e-KYC, Vahan) vs. built in-house — not a metric exactly, but belongs next to these numbers so nothing reads as overclaimed

## ☐ Billing Baba
- ☐ Businesses onboarded
- ☐ Invoices generated / processed since launch
- ☐ Platform split — rough usage across Android / iOS / macOS / Windows (tests whether the "one codebase, four platforms" bet actually paid off in real usage)
- ☐ Any reduction in manual work the client has mentioned anecdotally (e.g. "used to take X, now takes Y") — only if the client has actually said this, not inferred
- ☐ Time since launch

## ☐ EntryTicket
- ☐ Bookings processed through the app
- ☐ App share of total bookings vs. web (this is the single best number for this case study — it directly answers "did going native actually move bookings")
- ☐ Downloads (iOS + Android)
- ☐ App Store / Google Play rating, once links exist
- ☐ Any measurable drop in booking abandonment or increase in completed bookings, if the client's own analytics show it
- ☐ Time since launch

## ☐ TurboSupply
- ☐ Orders delivered
- ☐ Actual average delivery time vs. the 30-minute promise (this is the most important single number here — it's the entire value proposition)
- ☐ Repeat order rate among trade customers (directly tests the "stop holding inventory" thesis)
- ☐ Number of SKUs / categories live in the catalog
- ☐ Time since launch

## Cross-cutting — applies to all five
- ☐ A testimonial — still marked pending on every one; higher priority than any single metric above
- ☐ One architecture-specific sentence substantiating whatever "scalable" or technical claim is already in the copy (PostGIS scoring, shared identity model, etc.) — not a metric, but sits in the same "evidence, not claims" bucket
- ☐ One line on what was deferred to v2 — already present for Invigil, worth adding to the other four

---

## On sourcing these
Anything from your own infra (crash reporting, backend logs, Firebase/Supabase analytics) you can likely pull yourself without waiting on the client. App Store/Play ratings are public, zero approval needed, pull those today. Everything else (business-side numbers like invoices processed, repeat orders, booking splits) needs a quick ask to each client, worth bundling with the testimonial request so it's one conversation, not two.

## Ground rule
If a number genuinely isn't tracked or available, the case study stays on the honest "live and operating" / "live today" phrasing already in the draft copy. Don't fill a gap with an invented or rounded-up figure, that's the exact failure mode both ChatGPT reviews were testing for, and an unverifiable number damages trust more than an honest omission does.
