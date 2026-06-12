---
description: The QA terms you'll meet in job posts, interviews, and client calls — defined in plain language with links to the deeper guides.
keywords: [qa glossary, software testing terms, testing terminology, qa definitions]
---

# Glossary

Plain-language definitions of the terms you'll actually meet in job posts, interviews, tickets, and client calls. Terms link to the page that treats them in depth.

> **A word about glossaries:** If you've ever read "SDLC/STLC" and your brain briefly read it as a Star Wars droid, you're in the right place.

### Core concepts

- **Acceptance criteria** — The conditions a user story must meet to be considered done; your minimum test basis. ([SDLC & STLC](../01-foundations/02-sdlc-and-stlc.md))
- **Defect / bug** — A flaw causing the system to behave differently than required or reasonably expected. ([Bug Reports](../02-core-craft/02-bug-reports.md))
- **Quality Assurance (QA)** — Process-focused work to prevent defects. **Quality Control (QC)** — product-focused checking. **Testing** — the investigation that powers both. ([What Is SQA](../01-foundations/01-what-is-sqa.md))
- **SDLC / STLC** — Software Development / Testing Life Cycle. ([page](../01-foundations/02-sdlc-and-stlc.md))
- **Severity vs Priority** — Technical impact (tester assesses) vs business urgency (product decides). ([the matrix](../02-core-craft/02-bug-reports.md#severity-vs-priority--know-the-difference-cold))
- **Shift-left / shift-right** — Moving quality work earlier (requirements, contracts) / later (production monitoring) than the traditional test phase.
- **Test basis** — Whatever you derive tests from: specs, stories, designs, or reasonable expectation.
- **Test oracle** — The principle/source that tells you what *correct* looks like. The hardest problem in testing; also why [AI can't fully replace testers](../03-automation/04-ai-in-qa.md#where-ai-fails-dangerously).

> **Acronym overload?** You'll get used to it. Eventually you'll start abbreviating grocery lists. "Pick up B-R-E-A-D on the way home."

### Test types & levels

- **Smoke test** — Broad, shallow pass over critical paths on each new build. **Sanity test** — narrow check of one fix/feature.
- **Regression testing** — Re-verifying existing behavior after changes; the most-purchased freelance testing service. ([types](../01-foundations/03-testing-types-and-levels.md))
- **Re-testing (confirmation)** — Re-running the failed scenario to verify its fix (distinct from regression).
- **Unit / Integration / System / Acceptance (UAT)** — The four classic test levels, smallest scope to largest. ([levels](../01-foundations/03-testing-types-and-levels.md#test-levels-where-in-the-system-you-test))
- **Exploratory testing** — Simultaneous learning, design, and execution, structured by charters. ([page](../02-core-craft/04-exploratory-testing.md))
- **Black-box / white-box** — Testing without / with knowledge of internal code structure. **Grey-box** — partial knowledge (e.g., you can read the API contracts).
- **Non-functional testing** — Performance, security, usability, accessibility, reliability — *how well* rather than *what*. ([table](../01-foundations/03-testing-types-and-levels.md#non-functional-types-how-well-it-works))
- **WCAG / EAA** — Web Content Accessibility Guidelines / European Accessibility Act (enforceable mid-2025; the demand driver for accessibility testing).

> **Naming convention truth:** "Smoke testing" sounds like something that requires a fire extinguisher. "Sanity testing" sounds like a wellness check. Both are just polite ways of saying "let's see if this thing explodes."

### Test design

- **Equivalence partitioning (EP)** — Group inputs the system treats identically; test one per group. ([worked example](../01-foundations/04-test-design-techniques.md#equivalence-partitioning-ep))
- **Boundary value analysis (BVA)** — Test at, just below, and just above every limit — where the bugs cluster.
- **Decision table** — Enumerated combinations of conditions → expected outcomes; also exposes ambiguous requirements.
- **State transition testing** — Model states + events; test valid *and invalid* transitions.
- **Pairwise testing** — Cover every *pair* of parameter values to tame configuration explosions.
- **Error guessing** — Experience-driven attacks (nulls, overflows, double-submits, Feb 29…). ([attack list](../01-foundations/04-test-design-techniques.md#error-guessing--experience-based-attacks))
- **Test charter** — A one-sentence exploratory mission: *explore X with Y to discover Z*.
- **SBTM** — Session-Based Test Management: time-boxed, note-taking, debriefed exploration. ([page](../02-core-craft/04-exploratory-testing.md#session-based-test-management-sbtm))
- **RCRCRC / SFDIPOT** — Heuristics for regression scope / product coverage. ([heuristics](../02-core-craft/04-exploratory-testing.md#heuristics-that-guide-where-to-look))

### Automation & technical

- **Test pyramid** — Many unit, fewer integration, few E2E tests — an economics diagram. The inverted version ("ice-cream cone") is an anti-pattern. ([page](../03-automation/01-when-to-automate.md#the-pyramid-and-why-e2e-everything-fails))
- **Flaky test** — Passes/fails inconsistently without code changes; the silent killer of suite trust. ([causes & fixes](../03-automation/01-when-to-automate.md#flakiness-the-silent-suite-killer))
- **Locator / selector** — How automation finds elements (role, text, test-id, CSS, XPath). Stable locators = maintainable suites.
- **Page Object Model (POM)** — Pattern separating *where things are* from *what you assert*. ([example](../03-automation/03-playwright-quickstart.md#page-object-model--structure-that-survives-change))
- **CI/CD** — Continuous Integration/Delivery: pipelines that build, test, and ship on every change; where automated suites live. ([GitHub Actions example](../03-automation/03-playwright-quickstart.md#wire-it-into-github-actions))
- **API / REST / endpoint** — How services talk over HTTP. ([API Testing](../02-core-craft/05-api-testing.md))
- **Idempotency** — Same request repeated → same result, no duplicates. The double-charge bug class.
- **IDOR** — Insecure Direct Object Reference: user A reading user B's data by changing an ID — the first security check every API tester should run.
- **Contract testing** — Verifying services honor an agreed schema (Pact, OpenAPI validation) before integration.
- **HAR file** — Recorded network traffic exported from DevTools; gold-standard bug evidence.
- **Self-healing locators / agentic testing** — AI-era tooling that adapts selectors / drives apps autonomously; evaluate skeptically. ([AI in QA](../03-automation/04-ai-in-qa.md))

> **The test pyramid exists** because someone, somewhere, decided to write 200 Selenium tests and zero unit tests. We don't talk about that person. We just fix the pyramid and move on.

### Process & market

- **Agile / Scrum / sprint / stand-up / backlog** — The iterative delivery vocabulary. ([crash table](../01-foundations/02-sdlc-and-stlc.md#scrum-vocabulary-youll-be-expected-to-know))
- **Definition of Done (DoD)** — Team-wide completion bar for any story; get testing written into it.
- **Triage** — Deciding which defects get fixed, when, by whom.
- **Crowdtesting** — Distributed paid testing via platforms (uTest, Test IO, Testbirds, Testlio); pay-per-bug or hourly. ([tier guide](../04-remote-market/02-platforms-and-marketplaces.md#tier-1--crowdtesting-the-apprenticeship-nobody-tells-beginners-about))
- **Connects / JSS** — Upwork's bidding tokens / Job Success Score.
- **Retainer** — Recurring monthly engagement block; the freelancer's income floor. ([math](../07-career/03-scaling-up.md#move-1--the-retainer-floor))
- **Scope creep** — Unpaid expansion of agreed work; cured with written scope + the [magic words](../05-freelancing/04-pricing-and-contracts.md#scope-define-it-then-defend-it-pleasantly).
- **SOW / NDA** — Statement of Work (scope contract) / Non-Disclosure Agreement.
- **ISTQB / CTFL** — The international tester certification body / its Foundation Level exam. ([honest guide](../07-career/01-certifications.md))
- **ERQ account** — Exporter's Retention Quota account: lets Bangladeshi service exporters hold earnings in USD. ([Bangladesh Guide](../07-career/04-bangladesh-guide.md))
- **TaaS / device farm** — Testing-as-a-Service; cloud device fleets (BrowserStack, Sauce Labs, AWS Device Farm) replacing physical labs.
