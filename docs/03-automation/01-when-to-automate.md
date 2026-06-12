---
description: Automation is an investment with a payback period — what to automate first, what to never automate, and how to avoid the flaky-suite death spiral.
keywords: [test automation strategy, what to automate, test pyramid, flaky tests, automation roi]
---

# When (and What) to Automate

Automation roughly doubles freelance QA rates — the market data in this repo's references puts manual work at $5–35/hr and automation at $20–90/hr. But the skill that actually earns senior rates isn't writing scripts; it's **knowing which scripts are worth writing**. Plenty of teams have been made *slower* by automation: a thousand flaky tests nobody trusts is negative value.

> **The QA math no one warns you about:** if your automation saves 10 hours a week but costs 12 hours a week to maintain, you haven't automated — you've just created a second job with worse hours.

## The economics in one model

A manual check costs its execution time, every time. An automated check costs **build time + maintenance**, then runs nearly free. So automation pays when:

> (runs per month × manual minutes) sustained over the feature's lifetime ＞ build hours + (maintenance hours × months)

That model produces the classic priorities:

**Automate first (high run-rate, stable, objective):**
- The **smoke suite** — runs on every build, by definition the highest run-rate in the system.
- **Critical-path regression** — login, search, add-to-cart, checkout, the flows whose breakage is an emergency.
- **API checks** — fast, stable (no UI churn), high signal. Often the best *first* automation a freelancer delivers (see [Newman](../02-core-craft/05-api-testing.md#a-professional-postman-workflow)).
- **Data-driven repetition** — the same form with 50 input variants; machines exist for this.
- Anything you've now manually executed three times and expect to execute again.

**Automate never (or last):**
- **Exploratory investigation** — by definition can't be scripted; see [exploratory testing](../02-core-craft/04-exploratory-testing.md).
- **Visual/UX judgment** — "does this feel right?" (screenshot-diff tools check *changed*, not *good*).
- **Features still churning weekly** — you'll rewrite the test five times before it earns back its cost. Wait for stability.
- **One-off checks** — the script costs 20× the manual look.
- **The rarely-touched admin corner** — run-rate too low to ever pay back.

> **Also never automate:** the test that verifies the placeholder text says "Enter your name here." Someone will change the copy, the test will fail, and you'll spend twenty minutes proving the copywriter is not, technically, a bug.

## The pyramid (and why E2E-everything fails)

The **test pyramid** — many unit tests, fewer integration/API tests, few E2E UI tests — is an economics diagram, not an ideology. Each layer up runs slower, fails for more unrelated reasons, and costs more to maintain. Teams that automate *everything* through the browser build an "ice-cream cone" (inverted pyramid) and spend their lives re-running and debugging flaky UI suites.

Your practical takeaways as the QA on a small team:

- Push checks **down** the stack: if an API test can catch it, don't write a UI test for it.
- Keep the E2E layer to the **dozens, not hundreds** — the critical user journeys only.
- When you inherit an ice-cream cone, the consulting move is triage: identify the 20 E2E tests that matter, delete or quarantine the flaky rest, backfill with API checks. "I deleted 400 of your tests and your pipeline is now trustworthy" is a war story that wins interviews.

## Flakiness: the silent suite-killer

A test that fails 1-in-20 runs for non-bug reasons teaches the team to ignore red builds — at which point the suite's value is **zero**. Flakiness is not a cosmetic problem; it is *the* automation problem. Causes and fixes:

| Cause | Smell | Fix |
|---|---|---|
| Timing assumptions | `sleep(3000)` everywhere | Auto-waiting frameworks (Playwright), explicit waits on conditions, never on clocks |
| Test interdependence | Passes alone, fails in suite | Each test creates its own data, owns its own state |
| Shared environments | Fails when staging is busy | Isolated test data namespaces; API-seeded fixtures |
| Brittle selectors | Breaks on every UI tweak | Stable `data-testid` attributes; role/text selectors |
| Real external services | Fails when third party hiccups | Mock at the boundary for E2E; test the real integration separately |

Adopt a **zero-tolerance quarantine policy**: a flaky test gets fixed or removed within the sprint. Suites are trust instruments; protect the trust.

> **The five stages of flaky test grief:** denial ("it passed locally"), anger ("who wrote this"), bargaining ("what if I just add a retry"), depression ("nothing matters"), and acceptance ("I'm deleting it").

## A realistic adoption sequence for a small client

This sequence is the proposal you'll make, repeatedly, for the rest of your career:

1. **Week 1:** Manual exploration + a written smoke checklist (you must *understand* before you automate).
2. **Week 2:** Automate the API layer of the smoke checklist (Newman or Playwright API) — cheap, stable, immediate CI value.
3. **Weeks 3–4:** Automate the 5–10 critical UI journeys. Wire into [CI](./03-playwright-quickstart.md#wire-it-into-github-actions) so they run on every push.
4. **Ongoing (retainer):** Each release — extend coverage for new features, maintain selectors, review failures, and spend the *saved* manual time on exploratory charters over new risk.

Note the shape: automation doesn't eliminate your role; it **upgrades** it from re-clicking to engineering plus investigation — and converts a one-off gig into recurring work.

## Should *you* learn automation?

Yes — but in the right order. Automation skills compound on top of testing judgment, not instead of it. An automation engineer who can't [design tests](../01-foundations/04-test-design-techniques.md) just produces fast, comprehensive verification of the wrong things. The [Six-Month Roadmap](../07-career/02-six-month-roadmap.md) deliberately sequences manual craft (months 0–4) before automation (months 6+), and the next page helps you pick your framework: [Choosing a Framework](./02-choosing-a-framework.md).

> **Bottom line:** the goal isn't to write more tests. The goal is to sleep better on release night.
