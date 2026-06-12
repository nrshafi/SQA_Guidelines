---
description: How software actually gets built and shipped, where testing plugs in, and how Agile and DevOps change a tester's daily work.
keywords: [sdlc, stlc, agile testing, scrum for testers, shift left, devops testing]
---

# The SDLC and STLC

You can't test well inside a process you don't understand. Clients won't explain their workflow to you — they expect you to slot in. This page gives you the working knowledge to do that.

## The SDLC in one minute

The **Software Development Life Cycle** is the path from idea to running software: requirements → design → implementation → testing → release → maintenance. Two delivery models matter in practice:

- **Waterfall (sequential).** Each stage completes before the next begins; testing is a late phase. Still common in regulated domains (banking cores, medical devices, government). Heavy documentation, formal sign-offs.
- **Agile (iterative).** Work ships in 1–4 week increments. Testing happens *inside* every increment, continuously. This is the dominant model in startups and SaaS — which is to say, the dominant model among remote/freelance clients.

:::note What this means for you

Almost every freelance client works in some flavor of Agile (often a loose one). They will not hand you a requirements document. You'll get user stories, Figma links, half-written Notion pages, or a Slack message that says "can you test the new checkout?" Part of your value is *creating* the missing structure: turning vague intentions into explicit, checkable expectations.

:::

## Scrum vocabulary you'll be expected to know

Most teams use Scrum or something Scrum-shaped. The terms you'll hear daily:

| Term | Meaning | Where you fit |
|---|---|---|
| **Sprint** | A fixed iteration (usually 2 weeks) | You test stories as they're finished — not at the sprint's end |
| **User story** | A small requirement: "As a user, I can reset my password" | Your test basis. If it has no acceptance criteria, push for them |
| **Acceptance criteria** | The conditions that make a story "done" | Your minimum checklist — then you test *beyond* it |
| **Backlog refinement** | Reviewing and clarifying upcoming work | The cheapest place to find defects: ask "what should happen when…?" before code exists |
| **Stand-up** | Short daily sync (or async post) | Report: tested yesterday, testing today, blockers |
| **Definition of Done** | Team-wide quality bar for any story | Get testing written into it ("tested on staging, no open critical bugs") |
| **Defect triage** | Deciding which bugs get fixed when | You supply severity and evidence; product decides priority. See [Bug Reports](../02-core-craft/02-bug-reports.md) |

## The STLC — the testing lifecycle

Inside any delivery model, testing itself follows a repeatable arc, the **Software Testing Life Cycle**:

1. **Requirement analysis.** Read the story/spec/design. List what's testable, what's ambiguous, what's missing. *Output: questions and a test basis.*
2. **Test planning.** Decide scope, approach, environments, and exit criteria. For a freelancer this can be one page — see [Test Plans](../02-core-craft/03-test-plans-and-strategy.md). *Output: a plan someone agreed to.*
3. **Test design.** Turn the basis into concrete test cases and charters using [test design techniques](./04-test-design-techniques.md). *Output: test cases / checklists.*
4. **Environment setup.** Test data, accounts, devices, builds. Often the most painful step; budget time for it.
5. **Execution.** Run tests, log defects, retest fixes. *Output: results and bug reports.*
6. **Closure.** Summarize: what was covered, what was found, what remains risky. *Output: a test summary report — the artifact clients actually remember.*

In Agile, this whole cycle compresses into days and repeats every sprint. The phases don't disappear; they just get lighter and overlap.

## Shift-left and shift-right (and why clients pay for them)

- **Shift-left** = move quality work earlier. Review acceptance criteria before development, test API contracts before the UI exists, automate checks that run on every code push. Each defect prevented here is the cheapest defect of all.
- **Shift-right** = keep verifying after release. Monitor logs and error rates, test in production safely (feature flags, canary releases), watch real user behavior.

As a freelancer you can productize both ends: "I'll review your user stories for testability" (left) and "I'll do a weekly production smoke test and report" (right) are both lightweight, recurring, retainer-friendly services.

## V-Model: worth knowing for interviews

Interviewers (and ISTQB exams) still ask about the **V-Model**: each development stage on the left arm pairs with a test level on the right arm — requirements ↔ acceptance testing, design ↔ system testing, detailed design ↔ integration testing, coding ↔ unit testing. Its lasting insight: *test design can start as soon as its paired document exists*, long before any code runs. That idea — testing artifacts, not just software — survives in every modern process.

## Practical takeaways

- Ask for the team's workflow on day one: where work is tracked, what "done" means, when releases happen, who decides bug priority.
- Anchor your testing to *acceptance criteria* when they exist, and write them yourself (then confirm with the client) when they don't.
- Time your testing to the team's rhythm. Testing a story three days after the developer moved on forces expensive context-switching; same-day feedback makes you feel like a teammate, not an auditor.

Next: [Testing Types and Levels](./03-testing-types-and-levels.md) — the map of what kinds of testing exist and which ones pay.
