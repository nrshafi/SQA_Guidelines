---
description: The anatomy of proposals that win QA contracts — a six-part structure, an annotated real example, the first-bug technique, and Connects budgeting.
keywords: [upwork proposal qa, freelance proposal example, cover letter testing job, how to win upwork jobs]
---

# Winning Proposals

Proposals are where freelancing is actually won and lost. The math is brutal — popular QA posts draw 20–50+ bids — but the competition is weaker than the count suggests: most bids are copy-pasted "Dear Hiring Manager, I am expert in manual and automation testing" templates that clients skim-delete. A proposal that demonstrates **you read the post, looked at their product, and already started thinking** beats 90% of the field regardless of your experience level.

## The six-part anatomy

1. **Mirror their problem (1–2 lines).** Restate their situation in *your* words — proof of reading, not a greeting. No "Dear Sir," no "I hope this finds you well," no your-name-and-title. The first line shows in their inbox preview; spend it on them.
2. **Evidence you've already engaged (2–4 lines).** The killer move for QA specifically — see the first-bug technique below.
3. **Your approach, concretely (3–5 lines).** Not "I will test thoroughly" but *what you'd actually do*: which flows first, what you'd deliver, on what cadence. This is a miniature [test plan](../02-core-craft/03-test-plans-and-strategy.md) and it's what sounding-senior means.
4. **Targeted proof (1–2 lines + link).** One relevant portfolio artifact — the [Notion page](./01-portfolio.md#presentation-layer), not five links. Relevance beats volume: e-commerce job → e-commerce project.
5. **Logistics (1–2 lines).** Availability, timezone overlap stated in *their* timezone, start date.
6. **A question that advances the work (1 line).** Ends the proposal as the beginning of a working conversation: "Is the staging environment behind a VPN, or can I start against a test account?"

Total: **under 200 words.** Long proposals signal that working with you will involve reading long messages.

## The first-bug technique

If the job post names or implies a public product, spend 15–20 minutes on it before bidding and include **one real finding, professionally formatted**, in the proposal:

> While writing this I spent 15 minutes on your site. One finding: on mobile Safari (iPhone 13, iOS 18), the coupon field in checkout accepts input but the Apply button stays disabled until the page is rotated — likely costing conversions. Steps + screen recording: [link]. The full pass would catch this class of issue systematically.

Why it converts so well: it's *unfakeable* proof of competence (no credential debates), demonstrates your actual deliverable quality, creates reciprocity, and instantly reframes the conversation from "who should I hire?" to "what else would this person find?" One genuine minor bug outperforms any paragraph about your dedication. (Don't manufacture drama out of nothing — if you find no issue, point out something specific you'd prioritize testing and why.)

## Annotated example

Job post: *"Need QA tester for our React web app (B2B invoicing SaaS) before launch next month. Manual testing, maybe ongoing. Budget: $500."*

```text
Pre-launch testing for an invoicing product is mostly about protecting
two things: money math and data trust. That's where I'd focus.        ← mirrors + reframes with insight

I looked at your public site and signed up for the trial. One early
finding: creating an invoice with a 100%-discount line item shows
total "-0.00" — small, but exactly the category of arithmetic edge
case that erodes trust in an invoicing tool (steps + recording: link). ← engagement + competence proof

For the $500 scope I'd propose: (1) one-page test plan for your
sign-off, (2) functional pass on invoice creation→send→payment
recording, (3) boundary testing on amounts, taxes, currencies,
(4) regression checklist you keep after launch, (5) prioritized bug
reports + summary. Roughly 25 hours across 2 weeks, daily updates.   ← concrete approach, scoped to budget

Relevant sample — full test suite + defect log for a demo e-commerce
product (similar money-math risks): [Notion link]                     ← one targeted proof

I'm GMT+6 with 09:00–13:00 ET overlap daily; can start Monday.        ← logistics, their timezone

Question: should invoice PDFs and email delivery be in scope, or is
that handled by a third party you trust?                              ← advances the actual work
```

~180 words. Every line either proves something or moves the engagement forward.

## Selection discipline: which jobs to bid on

Proposals cost Connects (real money) and hope (realer money). Filters that protect both:

**Bid:** posted under 24h ago (under 4h is gold) · 5–15 existing proposals · client has payment verified + hire history (or is brand-new with a *detailed* post — new clients are underrated; everyone has a first hire) · scope you can crush · budget within 2x of sane.

**Skip:** 50+ proposals (lottery) · vague one-liners ("test my app $10") · any [red flag](./06-red-flags-and-scams.md) · "easy job, 5 minutes" (it never is) · invitations to interview that smell like free consulting.

A useful weekly budget while launching: 15–25 targeted proposals. Track them in a sheet (job, date, Connects, viewed?, replied?, won?) — your *viewed rate* diagnoses your first line, your *reply rate* diagnoses the body, and both improve fast with iteration.

## After you hit send

- **Reply speed wins ties.** Clients message 3–5 finalists; first competent responder gets a real edge. Notifications on during launch months.
- **The interview is a discovery call.** Ask about their release cadence, current bug process, biggest quality fear. You're demonstrating [client management](./05-client-management.md) before being hired — and qualifying *them* too.
- **Confirm scope in writing** before accepting: deliverables, timeline, what's out. The proposal got you chosen; the written scope keeps you paid. Details in [Pricing & Contracts](./04-pricing-and-contracts.md).

:::tip Volume never fixes a conversion problem

If 30 proposals produce zero replies, the 31st identical one won't either. Diagnose in order: (1) job selection — too crowded/too senior? (2) first line — generic? (3) proof — irrelevant or missing? (4) profile — does the click-through kill it (see [Profile Optimization](./02-profile-optimization.md))? Fix the funnel stage that's actually leaking, then resume volume.

:::
