---
description: Hourly vs fixed vs retainer pricing for QA work, scoping that prevents losses, milestone structures, raising rates, and the contract clauses that protect testers.
keywords: [freelance pricing qa, hourly vs fixed price, retainer agreement testing, raising freelance rates, scope creep]
---

# Pricing & Contracts

Pricing isn't just "what number" — it's *which model*, *what's included*, and *what happens when reality deviates from plan*. Testers have a specific occupational hazard here: **testing scope is elastic** ("can you also check the admin panel real quick?") and **testing is blamed retroactively** ("you tested it, why is there a bug?"). Your pricing and paperwork exist to manage both.

## The three models and when each serves you

**Hourly** — best default for: exploratory work, ongoing testing, anything with unclear scope, bug-fix verification cycles (whose volume you can't control). Platforms' tracked-hours protection (Upwork's work diary) makes hourly the *safest* model for beginners. Weakness: caps income at hours worked, and clients sometimes perceive open-endedness — counter that with weekly hour estimates and caps ("expect 12–15h/week; I'll flag before exceeding").

**Fixed-price** — best for: crisply-defined deliverables you've done before ("regression pass on these 80 cases across 4 browsers, twice"). Premium-price it (~20–30% above your hourly × honest estimate) because *you* now carry the risk of surprises. Only viable with the [estimation discipline](../02-core-craft/03-test-plans-and-strategy.md#estimating-testing-time-the-honest-method) — beginners who fixed-price vague scope are donating weekends. **Always milestone it** (see below).

**Retainer** — the goal state: a recurring monthly block ("up to 25 hours: regression each release + exploratory on new features + on-call bug verification, $X/month"). Predictable for both sides; price the block slightly *below* your hourly × hours (you're buying predictability too) but with unused hours non-rollover and overage at full rate. Most retainers begin as a successful hourly engagement plus one sentence from you: "Want to make this a standing arrangement each release?" Ask it. See [Scaling Up](../07-career/03-scaling-up.md).

## Milestones for fixed-price work

Never a single end-loaded payment. A $500 pre-launch engagement structured to keep you safe:

| Milestone | Deliverable | Amount |
|---|---|---|
| 1. Plan approved | One-page test plan + test environment verified working | $100 |
| 2. First pass complete | Functional pass + bug reports delivered | $250 |
| 3. Wrap | Re-test of fixes + regression checklist + summary report | $150 |

Milestone 1 is diagnostic: a client who balks at funding a $100 plan milestone was never going to pay smoothly at the end. Platform escrow (fund-before-work) is non-negotiable — see [Red Flags](./06-red-flags-and-scams.md).

## Scope: define it, then defend it pleasantly

Every engagement gets a written scope — the [one-page plan](../02-core-craft/03-test-plans-and-strategy.md#the-one-page-test-plan) does double duty — with explicit **in**, explicit **out**, assumptions, and a change policy. Then use the magic words when the inevitable arrives:

> "Happy to add the admin panel — it's outside our agreed scope, so let me size it: roughly 6 hours, $90, and it shifts delivery to Thursday. Want me to proceed?"

No resentment, no free work, no conflict — just a quote. Clients respect this far more than silent absorption followed by burnout. The freelancers who get walked over aren't the polite ones; they're the ones with no written scope to point at.

> **The "you tested it, why is there a bug?" clause**
>
> Put expectation language in every scope: *"Testing reduces risk; it cannot prove the absence of defects. Coverage is prioritized by the risk ranking in this plan, and untested areas are listed as such in the summary report."* This sentence — standard in professional services — converts a future blame conversation into a documented, shared understanding. It has saved more freelancer relationships (and payments) than any tool ever will.

## Raising rates

Mechanics that work, drawn from the references' progression data and field practice:

- **New clients are the rate frontier.** Raise your posted rate ~20–30% after reviews #3 and #10, after your first retainer, and after each new capability ships ([API](../02-core-craft/05-api-testing.md), [automation](../03-automation/03-playwright-quickstart.md)). New clients never knew the old number.
- **Existing clients get gentler, dated raises:** "From March 1 my standard rate is $25/hr (from $18). Because we work well together, yours moves to $22." Notice + loyalty discount = nearly zero churn in practice.
- **Stop lowering; start adding.** When a client pushes back on price, adjust *scope*, not rate ("at $300 I can cover checkout and auth; the full pass is $450") — discounting your rate re-anchors every future negotiation, while scope-trimming preserves it.
- The deliberate cheap era of your first contracts ([Rates & Earnings](../04-remote-market/03-rates-and-earnings.md#setting-your-rate--a-method-not-a-number)) should have a calendar end date. Honor it.

## Contract / SOW essentials (beyond platform ToS)

On-platform, the contract is mostly handled; for direct clients you need a simple agreement (templates abound; a lawyer review once is cheap insurance). Either way, ensure *somewhere in writing*:

1. Scope in/out + change policy (your plan)
2. Deliverables and acceptance criteria ("testing is complete when…" — your exit criteria)
3. Payment terms: amounts, milestones, currency, due dates, late-payment terms (direct clients: 50% upfront for first engagements; Net-7 or Net-14, never Net-60)
4. **Access & prerequisites**: client provides environment, accounts, test data by date X; *delays extend the timeline* (the #1 fixed-price killer)
5. Confidentiality both ways — and your [AI-tool usage line](../03-automation/04-ai-in-qa.md#where-ai-fails-dangerously)
6. IP: work product transfers on payment; your pre-existing frameworks/templates stay yours (this clause is what lets you reuse your regression-suite skeleton across clients)
7. Mutual termination notice (e.g., 7 days) — sized so neither side is trapped

## Money hygiene

Track *effective* hourly (earnings ÷ ALL hours incl. proposals and admin) monthly — it's your real business dashboard and tells you when to raise rates or fire a high-maintenance client. Reserve a tax fraction from every payout in a separate account from day one (Bangladesh specifics: [Bangladesh Guide](../07-career/04-bangladesh-guide.md)). Invoice direct clients like a grown-up business: numbered invoices, clear line items, due dates — template in [Templates](../08-resources/01-templates.md#simple-invoice-skeleton).

Next: the skills that make clients *stay* — [Client Management](./05-client-management.md).
