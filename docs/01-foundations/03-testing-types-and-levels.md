---
description: The map of testing — levels from unit to acceptance, functional vs non-functional types, and which specializations actually pay in the remote market.
keywords: [testing types, test levels, functional testing, non-functional testing, regression, smoke testing]
---

# Testing Types and Levels

Job posts say things like "need regression + smoke + UAT before Friday." This page is the map that makes those words concrete — and shows which territories on the map pay best for remote workers.

## Test levels: *where* in the system you test

| Level | What's verified | Who usually does it |
|---|---|---|
| **Unit** | A single function/class in isolation | Developers (you'll rarely write these as QA, but should read them) |
| **Integration** | Components talking to each other — API ↔ database, service ↔ service | Developers + QA; this is where [API testing](../02-core-craft/05-api-testing.md) lives |
| **System / E2E** | The whole assembled product, through real user flows | QA — your home turf |
| **Acceptance (UAT)** | "Does this meet the business need?" — validated against requirements | QA facilitating users/stakeholders; freelancers often run this for non-technical founders |

The classic **test pyramid** says: many fast unit tests at the bottom, fewer integration tests in the middle, few expensive E2E tests on top. You'll meet teams whose pyramid is upside down (everything manual, everything E2E) — recognizing that, and gently fixing it, is consultant-level value.

## Functional types: *what behavior* you check

- **Smoke testing** — a short, broad pass over critical paths ("does the app start, can you log in, can you check out?"). Run on every new build; if smoke fails, deeper testing is pointless. Typically 15–30 minutes, heavily scripted, ideal to automate first.
- **Sanity testing** — a narrow, focused check that a specific fix or feature works before deeper effort.
- **Regression testing** — re-verifying that existing behavior still works after changes. This is the single most commonly purchased testing service on freelance platforms, and the strongest candidate for [automation](../03-automation/01-when-to-automate.md).
- **Re-testing (confirmation)** — running the exact failed scenario again after a fix. Not the same as regression: re-testing checks the fix; regression checks the collateral damage.
- **Exploratory testing** — simultaneous learning, test design, and execution. The highest-skill manual discipline; gets [its own page](../02-core-craft/04-exploratory-testing.md).
- **Compatibility testing** — same behavior across browsers, OSes, devices, screen sizes. Sells well as a packaged freelance service ("cross-browser testing of your site on 8 browser/device combos").
- **Localization testing** — translations, formats (dates, currency), right-to-left layouts. Pays a premium when you have the language skills.

## Non-functional types: *how well* it works

| Type | Question | Entry difficulty | Typical freelance rates* |
|---|---|---|---|
| **Performance / load** | Does it stay fast under 1, 100, 10,000 users? (JMeter, k6, Locust, Gatling) | High — needs scripting + metrics literacy | $40–120/hr |
| **Security (basic)** | Is it vulnerable to OWASP Top 10 issues? (Burp Suite, OWASP ZAP) | Very high — deep specialization | $50–200/hr |
| **Usability** | Can a real person accomplish their goal without confusion? | Low — pays modestly, great portfolio builder | Often per-study ($15–30) |
| **Accessibility** | Does it work with screen readers, keyboard-only, sufficient contrast? (WCAG 2.1/2.2, axe) | Moderate — learnable in weeks | Growing premium |
| **Reliability / recovery** | What happens on crash, disconnect, retry? | Moderate | Bundled into general QA |

<small>*Blended ranges from the market research in this repo's References folder (2024–2026); treat as directional, not promised.</small>

:::tip The accessibility opportunity

The **European Accessibility Act** became enforceable in mid-2025, making WCAG compliance a legal requirement for many digital products sold in the EU. Demand for accessibility testers jumped, and crowdtesting platforms (Testbirds, Testlio) actively recruit for paid accessibility runs. It's one of the few specializations that is simultaneously **in demand, learnable without coding, and not yet saturated**. If you're a manual tester looking for an edge, this is arguably the best value-per-study-hour available right now.

:::

## Specialization economics — where the money concentrates

Synthesizing the rate data across this site's three reference reports:

| Work type | Earning band (freelance) | Beginner-friendly? | Competition |
|---|---|---|---|
| Manual / functional | $5–35/hr | ✅ easiest entry | Brutal |
| Usability / UAT | $10–30/hr or per-study | ✅ | High |
| Game testing | $10–30/hr | ✅ (fun-seeking crowd) | Brutal, low pay |
| Mobile app testing | $10–45/hr | 🟡 needs device setup | High |
| API testing | $20–55/hr | 🟡 conceptual, not hard | Moderate |
| Automation (web) | $20–90/hr | ❌ needs programming | Moderate |
| Performance / load | $40–120/hr | ❌ | Low |
| Security | $50–200/hr | ❌❌ | Low |
| Accessibility | rising | 🟡 | Low (for now) |

The pattern: **pay scales with the size of the audience that *can't* do the work.** Anyone can click through an app; far fewer can script a realistic load profile or audit WCAG compliance. Your career strategy, condensed: *enter through manual testing, but never plan to stay there.* The [Six-Month Roadmap](../07-career/02-six-month-roadmap.md) sequences exactly this.

## Answering the client question "what testing do I need?"

Freelance clients ask this constantly. A defensible default answer for a typical web/mobile product:

1. **Smoke suite** on every build (automate early),
2. **Functional testing of new features** against acceptance criteria,
3. **Regression pass** before each release (risk-based scope — see [RCRCRC](../02-core-craft/04-exploratory-testing.md#heuristics-that-guide-where-to-look)),
4. **One compatibility pass** on the top browsers/devices from their actual analytics,
5. **Exploratory sessions** on high-risk areas (payments, auth, data import/export),
6. Non-functional checks **proportional to risk** — a load test before a marketing launch, accessibility if they sell into the EU/US public sector.

Being able to rattle that off, scoped to their product, is exactly what makes you sound senior in a discovery call.

Next: [Test Design Techniques](./04-test-design-techniques.md) — how professionals choose *which* inputs to test instead of testing randomly.
