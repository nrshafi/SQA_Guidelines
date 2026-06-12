---
description: Risk-based test planning that fits on one page — what to test, what to skip, and how to get clients to sign off on scope.
keywords: [test plan, test strategy, risk based testing, test scope, exit criteria]
---

# Test Plans & Strategy

A test plan answers one question: **given limited time, what will we test, how, and how will we know we're done?** For enterprise audits that takes thirty pages. For a freelance engagement it should take one — and that one page might be the most commercially important document you produce, because *it's what protects you when a bug ships in something you were never asked to test.*

## Risk-based thinking first

You cannot test everything, so rank what matters. Score each product area on two axes:

- **Likelihood of failure** — new code, complex logic, frequent past bugs, many integrations, rushed timeline.
- **Impact of failure** — money handled, data destroyed, legal exposure, user trust, visibility.

| | Low impact | High impact |
|---|---|---|
| **Likely to fail** | Test if time allows | **Test first, test deepest** |
| **Unlikely to fail** | Skim or skip — *say so in the plan* | Smoke-level checks |

Payments, authentication, data import/export, and anything touching personal data almost always land in the top-right cell. The marketing pages almost never do. Writing this down — and getting the client to nod at it — converts your private judgment into agreed scope.

> **The marketing page paradox:** everyone wants to test it thoroughly because it's the first thing users see. Nobody wants to pay for it. Accept that the hero banner will ship with a typo and move on.

## The one-page test plan

This structure has survived hundreds of real engagements. Full copy-paste version in [Templates](../08-resources/01-templates.md#one-page-test-plan).

```text
TEST PLAN — <Product> <release/engagement>            v1 · <date> · <your name>

1. SCOPE          Features in: checkout v2, saved cards. Out: admin panel,
                  emails (client confirms these are unchanged).
2. RISKS          Top 3: payment mischarge (high/high), card vault security,
                  regression in order history. Plan weights effort accordingly.
3. APPROACH       Manual functional + exploratory on risk areas; regression
                  checklist (80 items) before sign-off; API checks on /orders;
                  compatibility: Chrome, Safari, iOS Safari, Android Chrome
                  (per client analytics top-4).
4. ENVIRONMENTS   staging.example.com build ≥ 2.41; test cards via Stripe
                  test mode; 2 test accounts (fresh + with history).
5. SCHEDULE       Mon–Tue new features · Wed regression · Thu fixes re-test
                  · Fri report. Daily 5-line status at 17:00 my time.
6. DELIVERABLES   Bug reports in Jira; test summary report (PDF);
                  updated regression checklist.
7. ENTRY/EXIT     Start when build deployed + accounts ready.
                  Done when: all planned cases run, no open Critical/Major,
                  client reviews known-issues list.
8. ASSUMPTIONS    Build is feature-complete Monday; bugs fixed within 48h
                  re-enter testing; scope changes re-quoted per change policy.
```

Eight sections, one page. Each exists because its absence has burned freelancers before:

- **Scope "out" list** — the single most protective sentence you can write. When the admin panel breaks in week 3, this line is the difference between "as agreed, that was out of scope — happy to quote it" and an unpaid weekend.
- **Exit criteria** — without them, engagements end with "just one more look?" forever. Define done *before* you start.
- **Assumptions** — late builds and slow fixes are the two ways fixed-price testing gigs go underwater. Name them.

> **Uncomfortable truth:** every one of those eight sections exists because someone, somewhere, once skipped it and spent a week doing unpaid detective work. Don't be that someone.

## Test strategy vs. test plan

Loosely: **strategy** is the durable how-we-test (levels, automation philosophy, environments, tooling) — set once per product; the **plan** is the per-release/per-engagement instance. Small clients don't need the distinction; just know that when an interviewer asks, strategy = org-level approach, plan = project-level execution.

## Estimating testing time (the honest method)

Beginners chronically underestimate. A defensible model:

1. List test charters/suites and assign **session counts** (one session = ~90 focused minutes). A medium feature is rarely less than 2 sessions; checkout flows are 4–8.
2. Add **30% for environment friction** (broken builds, missing data, access waits). This is not padding; it is the empirical tax of real projects.
3. Add **one re-test cycle** — bugs *will* come back to verify (about 25–40% of initial execution time).
4. Reporting and communication: **10%**.

So "test our new checkout" ≈ 6 sessions × 1.5h = 9h, +30% friction ≈ 12h, + re-test ~4h, + reporting ~1.5h → **quote ~17–18 hours, not the 8 your optimism suggested.** Your future self will thank you. Pricing models that wrap around this estimate live in [Pricing & Contracts](../05-freelancing/04-pricing-and-contracts.md).

> **Estimation survival rule:** take your honest best guess, multiply by two, then halve it so you sound reasonable. You'll still be wrong, but at least you'll be wrong in a range the client can absorb.

## The test summary report — the artifact clients remember

End every engagement with a short report; it's the thing clients forward to their boss or co-founder, and it's what they remember when deciding whether to rehire you:

```text
TEST SUMMARY — Checkout v2 · 12–16 May
Coverage:  84 planned checks run (100%); 11 exploratory sessions on
           payment edge cases; 4 browsers/devices.
Results:   23 defects (2 Critical — both fixed & verified; 6 Major —
           5 fixed, 1 deferred with workaround; 15 Minor/Trivial).
Quality view: Checkout core flows are solid. Residual risk: discount-code
           edge cases (3 of 6 Major bugs clustered there) — recommend
           one follow-up session after the pricing refactor.
Known issues list: attached.
```

> **Why the summary report matters more than the testing:** testing finds bugs; the report convinces someone to fix them. A beautiful 200-hour engagement means nothing if the final PDF reads like it was written during a power outage. Spend the extra hour on the report.

> **Original insight: the plan is a sales tool**
>
> Most freelancers treat plans as bureaucracy. Reframe: a crisp one-page plan delivered *within 24 hours of the discovery call* is the strongest "hire me" signal that exists in this market — it proves structured thinking before any money moves, and it quietly sets the professional terms (scope, change policy, daily reports) that protect you later. Several sections of the [proposal playbook](../05-freelancing/03-winning-proposals.md) are built around exactly this move.

Next: the highest-skill manual discipline — [Exploratory Testing](./04-exploratory-testing.md).
