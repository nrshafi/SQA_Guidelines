---
description: The consolidated zero-to-first-paid-client roadmap — six phases with weekly actions, deliverables, realistic income, and the failure modes that derail each phase.
keywords: [qa roadmap, become qa tester 6 months, first freelance client, qa career path beginner, zero to qa]
---

# The Six-Month Roadmap

All three research reports behind this site independently converge on the same shape: **a disciplined beginner can reach their first paid QA work in 4–6 months.** This page merges their phase plans into one roadmap and wires each phase to the site's deeper guides. Two honesty notes before the plan: the variance is real (some land work in month 3; some need month 9 — the plan survives both), and the phases *overlap* — this is a pipeline, not a relay race.

**Weekly commitment assumed: 10–15 focused hours.** Halve the hours, roughly double the calendar.

## Phase 1 — Foundation (Months 0–2) · Income: $0

**Mission: learn to think like a tester, not just click like one.**

- Work through [Foundations](../01-foundations/01-what-is-sqa.md) — especially [test design techniques](../01-foundations/04-test-design-techniques.md); do every worked example yourself.
- Read the free **ISTQB CTFL v4.0 syllabus** (it's a decent curriculum even if you never sit the exam).
- Daily-driver tools setup: JIRA free tier, Postman, browser [DevTools habits](../02-core-craft/06-tools-of-the-trade.md#browser-devtools--the-manual-testers-superpower), Git basics, a screenshot/recorder pipeline.
- **Register on uTest and Test IO; complete both academies** — free, structured, and they start your rating clock early.
- Practice on [practice apps](../08-resources/02-practice-resources.md): write your first 20 test cases and 5 bug reports to this site's [templates](../08-resources/01-templates.md). They'll be mediocre; that's the point of practice.

*Failure mode to dodge:* tutorial purgatory — consuming courses without producing artifacts. The ratio to enforce: one hour producing per hour consuming.

> **Your bank account during Phase 1:** $0.00. Your LinkedIn headline: "Aspiring QA Professional." Your imposter syndrome: off the charts. This is exactly where everyone starts — even the people who now charge $150/hour.

## Phase 2 — Skill Building (Months 2–4) · Income: $50–300/mo

**Mission: convert knowledge into evidence; earn first crowdtesting dollars.**

- Build [Portfolio Projects 1 and 2](../05-freelancing/01-portfolio.md) — the manual blueprint and the API suite — to a two-week deadline each.
- Take paid uTest/Test IO cycles seriously: every approved bug is income *plus* rating *plus* a resume line. Fill your device profile exhaustively (invitations scale with devices).
- Add [SQL basics](../02-core-craft/06-tools-of-the-trade.md#sql--enough-to-verify-the-backend) and run three structured [exploratory sessions](../02-core-craft/04-exploratory-testing.md) with real session sheets.
- File 3–5 excellent bugs against open-source projects (public, verifiable credibility).

*Failure mode:* perfectionism on Project 1 while Projects 2–3 and the income clock stall. Ship at 80%.

## Phase 3 — Certification (Month 3–4, optional, parallel) · Income: continues

**Mission: one cheap credential, zero momentum loss.**

- Decide using the [certification logic](./01-certifications.md). If yes: 3–4 weeks of evening prep from official sample exams; sit **CTFL v4.0 via the cheapest national board (~$75)**.
- Add an AT*SQA micro-credential ($59) only if a specific niche (API, Agile) needs the keyword.

*Failure mode:* treating the exam as a prerequisite to bidding. It is not; Phases 4–5 don't wait for it.

> **Certification reality:** You will study for weeks, sit the exam, pass it, and then realize nobody cares. Just kidding — it *does* help. But the piece of paper is the least impressive thing on your resume compared to the bugs you've actually filed.

## Phase 4 — Profile & Presence (Months 3–4, parallel) · Income: $150–400/mo

**Mission: become findable and credible.**

- Build the [Upwork profile](../05-freelancing/02-profile-optimization.md) to 100% (the callback-doubling stat is real) + one productized Fiverr gig + the Notion portfolio front door.
- Publish [Portfolio Project 3](../05-freelancing/01-portfolio.md#project-3--automated-regression-workspace-the-rate-raiser) (the Playwright/CI repo) if your automation study has started; otherwise schedule it for Phase 6.
- LinkedIn: headline, about, featured links; start the weekly-post habit ([inbound flywheel](../06-remote-work/02-getting-hired.md#where-to-apply-and-the-inbound-flywheel)).

*Failure mode:* profile procrastination disguised as craft ("I'll bid when I'm ready"). Ready is a decision, not a feeling.

## Phase 5 — First Clients (Months 4–6) · Income: $200–500/mo

**Mission: convert evidence into contracts and reviews.**

- 15–25 [targeted proposals weekly](../05-freelancing/03-winning-proposals.md), entry-level filters, small fixed-price jobs ($50–150) and the **starter-audit** offer. Use the first-bug technique on every bid where a public product exists.
- Track the funnel (sent → viewed → replied → won) and debug the leaking stage, not your morale.
- Deliver each win with the full [client-management rhythm](../05-freelancing/05-client-management.md): plan first, daily four-liners, overshoot the finish, earn the review properly.
- Keep crowdtesting income alive in parallel; drop it only when contract work crowds it out.
- Screen everything against the [red flags](../05-freelancing/06-red-flags-and-scams.md).

*Failure mode:* 50 generic proposals instead of 15 engineered ones — volume never fixes conversion.

## Phase 6 — Automation & Scaling (Months 6+) · Income: $800–2,000+/mo

**Mission: exit the commodity tier.**

- Go deep on [automation](../03-automation/01-when-to-automate.md): TypeScript + [Playwright](../03-automation/03-playwright-quickstart.md), POM, CI. Ship Project 3 if not done; pitch your existing manual clients the [automation adoption sequence](../03-automation/01-when-to-automate.md#a-realistic-adoption-sequence-for-a-small-client) — your first automation client is usually a current manual client.
- Raise rates on the [ladder](../05-freelancing/04-pricing-and-contracts.md#raising-rates); convert the best relationships to [retainers](../05-freelancing/05-client-management.md#from-gig-to-retainer).
- Pick a specialization bet (API, mobile, accessibility, performance) per the [bifurcation logic](../04-remote-market/01-market-overview.md#the-bifurcation--and-your-strategy) — and start the [scaling moves](./03-scaling-up.md).
- Optionally open the employment track in parallel ([Getting Hired](../06-remote-work/02-getting-hired.md)) — the two tracks reinforce each other.

## The dashboard

Five numbers, reviewed weekly, that predict whether the roadmap is working:

1. **Artifacts shipped** (cases, reports, sessions, repos) — Phase 1–4 health
2. **Approved crowdtesting bugs + rating** — Phase 2–3 health
3. **Proposal funnel rates** — Phase 5 health
4. **Reviews + repeat/retainer count** — Phase 5–6 health
5. **Effective hourly rate** (all earnings ÷ all hours) — the trendline that should bend upward from month 5

> **About those five dashboard numbers:** you will stare at them weekly, obsess over them, and feel either validated or devastated depending on which one you looked at last. This is normal. The numbers are not your self-worth — they are your feedback loop. Treat them like bug reports, not performance reviews.

> **If you're behind schedule**
>
> The roadmap fails gracefully: every phase produces durable assets (skills, artifacts, ratings, relationships) even when the next phase stalls. Behind ≠ broken. The only true failure states are stopping entirely — or spending month 9 still exclusively in commodity manual work with no specialization plan. Everything else is variance.
