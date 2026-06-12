---
description: The three-project portfolio that substitutes for experience — manual testing blueprint, API suite, and automation workspace — plus GitHub and Notion presentation.
keywords: [qa portfolio, testing portfolio projects, qa portfolio github, notion qa portfolio, tester portfolio without experience]
---

# Portfolio Engineering

With zero work history, your portfolio **is** your work history. It's the answer to the chicken-and-egg problem ("need experience to get hired, need hiring to get experience"): you manufacture the experience in public. Clients don't actually require that someone *paid* you before — they require evidence you can do the work. Evidence is manufacturable. Here's the three-project structure (from the Gemini reference, hardened with practitioner detail) that covers the full skill story.

## Project 1 — End-to-End Manual Testing Blueprint (the credibility anchor)

**Target:** a deliberately imperfect public app — *Automation Exercise* (e-commerce), *Restful Booker*'s UI, or any app from the [practice list](../08-resources/02-practice-resources.md).

**Deliverables (a public Notion page or Google Drive folder):**

1. **A one-page test plan** — scope, risk ranking, browser/device matrix, approach. Use the [template](../08-resources/01-templates.md#one-page-test-plan). This artifact alone outclasses most applicants, because nobody else includes *planning*.
2. **30 test cases** — organized by suite; show your [design techniques](../01-foundations/04-test-design-techniques.md) explicitly: include a boundary table and one decision table, labeled as such. Reviewers who know QA will notice; reviewers who don't will still see structure.
3. **A defect log with 5+ professional bug reports** — full [anatomy](../02-core-craft/02-bug-reports.md): environment, steps, actual vs expected, severity *with one-line justification*, annotated screenshots, and at least one screen recording. Include one report where you captured the failing network request — that's the detail that reads as senior.
4. **Two exploratory session sheets** — charters, timestamped notes, debrief ([format](../02-core-craft/04-exploratory-testing.md#session-notes-that-justify-invoices)). Almost no beginner portfolios have these; they signal *structured thinking under freedom*, which is what clients are actually buying.
5. **A test summary report** — coverage, findings by severity, residual-risk opinion. The artifact a client would forward to their co-founder.

## Project 2 — API Request & Response Suite (the differentiator)

**Target:** *Restful Booker* API, *ReqRes*, or *Thinking Tester Contact List API*.

**Deliverables (a public GitHub repo):**

1. A **Postman collection** organized by resource folders, with environments (no hardcoded URLs/tokens), chained auth, and **assertions on every request** — status, schema shape, response time, and at least one *negative-space* check (field that must NOT appear) as shown in [API Testing](../02-core-craft/05-api-testing.md).
2. Negative-case folders: missing fields, wrong types, invalid auth, nonexistent IDs — each named behaviorally ("Create booking — checkout before checkin → 400").
3. A **Newman run** documented in the README (command + screenshot or CI badge).
4. A short **findings note**: anything inconsistent you discovered (Restful Booker has real quirks to find — finding them is the point).

## Project 3 — Automated Regression Workspace (the rate-raiser)

**Target:** *SauceDemo*, *UI Test Automation Playground*, or *Automation Exercise*.

**Deliverables (a public GitHub repo — this is the [Playwright Quickstart](../03-automation/03-playwright-quickstart.md) skeleton, finished):**

1. 8–12 Playwright tests in TypeScript covering the critical journeys, **Page Object Model** structure, no sleeps, semantic locators.
2. **GitHub Actions workflow** running on every push, with the HTML report uploaded as artifact — the green badge in the README is the single most persuasive pixel in your whole portfolio.
3. A README that explains *why*: what's covered and what's deliberately not (linking your thinking to the [automation economics](../03-automation/01-when-to-automate.md)). One paragraph of strategy outweighs ten more tests.

:::tip The meta-skill being demonstrated

Each project's README should read like a client deliverable, not a homework submission. You are not showing that you can follow tutorials; you're simulating — accurately — what working with you feels like: planning, structure, evidence, judgment, handover quality. Write every artifact for the imaginary client who paid for it.

:::

## Presentation layer

**GitHub** (technical audience): pin the three repos; profile README with a 3-line intro, your testing philosophy in one sentence, toolchain, and links. Repos need: descriptive about-line, real README with screenshots, sensible folder structure, and *recent commits* — a portfolio last touched 8 months ago whispers "abandoned."

**Notion** (non-technical clients — most freelance buyers!): a public page, gallery view, one card per project: scope, what you did, *3 sample findings*, link to full artifacts. Lead with outcomes ("found 14 defects including 2 payment-blocking") not tools. This is the link you put in proposals — founders click Notion; they bounce off GitHub.

**Platform portfolios** (Upwork/Fiverr): upload the *visual* artifacts — annotated screenshots of bug reports, the test plan PDF, the green CI badge screenshot. Each portfolio item gets a one-line outcome caption.

## Credibility add-ons (cheap, compounding)

- **Crowdtesting record:** "60+ approved bugs across 14 commercial apps (uTest)" turns the portfolio from simulation into track record — see [platform ladder](../04-remote-market/02-platforms-and-marketplaces.md#tier-1--crowdtesting-the-apprenticeship-nobody-tells-beginners-about).
- **Open-source bug reports:** file 3–5 excellent issues against active OSS projects; link them. Public, verifiable, real.
- **A short demo video:** 3 minutes, you walking through one bug discovery — proves communication skills no document can.

## Cadence and scope control

Total build time: roughly 60–80 focused hours across [roadmap](../07-career/02-six-month-roadmap.md) months 2–4. The trap is polishing Project 1 forever — set a two-week deadline per project, ship imperfect, iterate later. A complete portfolio at 80% polish beats a perfect Project 1 and two empty repos by a mile.

Next: making strangers find and trust it — [Profile Optimization](./02-profile-optimization.md).
