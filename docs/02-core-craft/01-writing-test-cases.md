---
description: How to write test cases that anyone can execute and clients can audit — anatomy, good vs bad examples, and when a checklist beats a script.
keywords: [test cases, test case writing, test steps, expected results, test management]
---

# Writing Test Cases

A test case is a *recipe for a verdict*: anyone on the team should be able to follow it and arrive at the same pass/fail conclusion you would. For freelancers, test cases are doubly important — they're also **evidence of work done** and frequently the deliverable itself ("write a regression suite for my app" is a common fixed-price gig).

## Anatomy of a professional test case

| Field | Purpose | Example |
|---|---|---|
| **ID** | Stable reference for reports and bugs | `TC-CHK-012` |
| **Title** | One line, behavior-focused | "Checkout rejects expired card with clear message" |
| **Preconditions** | State required before step 1 | "User logged in; cart contains 1 item; test card 4000-0000-0000-0069 available" |
| **Steps** | Numbered, atomic actions | 1. Go to checkout → 2. Enter expired card → 3. Click Pay |
| **Test data** | Inputs, separated from steps so they're swappable | Card number, expiry 01/2020 |
| **Expected result** | Observable, specific outcome per critical step | "Inline error 'Your card has expired.' appears; no charge created in Stripe dashboard; user remains on payment step" |
| **Priority** | Run order under time pressure | High |
| **Actual result / status** | Filled at execution time | Pass / Fail / Blocked + notes |

The field that separates professionals from beginners is **expected result**. Compare:

- ❌ "Payment doesn't work" → not checkable.
- ❌ "Error is shown" → which error? Where? Is a silent charge still created?
- ✅ "Inline error 'Your card has expired.' appears under the card field; Pay button re-enables; no transaction appears in the payment dashboard."

Specific expectations catch *partial* failures — the UI shows an error **and** the customer got charged anyway is a real (and expensive) class of bug that vague test cases sail past.

> **The paradox of good test cases:** the better they are, the less anyone reads them. But when things go wrong, suddenly everyone's a test case expert.

## Worked example

```text
ID:            TC-AUTH-003
Title:         Login locks account after 5 consecutive failed attempts
Priority:      High
Preconditions: Account testuser01 exists, unlocked, known password
Test data:     Wrong password: "WrongPass1!"  Correct password: (from vault)

Steps:
 1. Navigate to /login
 2. Enter testuser01 + wrong password, submit          → "Invalid credentials" shown
 3. Repeat step 2 four more times (attempts 2–5)       → Same error attempts 2–4;
                                                          attempt 5 shows "Account locked.
                                                          Try again in 15 minutes."
 4. Enter testuser01 + CORRECT password, submit        → Login refused with lockout
                                                          message (not "invalid credentials")
 5. Wait 15 minutes (or reset via admin), retry step 4 → Login succeeds

Notes: Verify lockout is per-account, not per-IP, by attempting from a second
browser profile at step 4.
```

Notice what the techniques from [Test Design](../01-foundations/04-test-design-techniques.md) contributed: the boundary (attempt 4 vs 5), the state transition (locked → unlocked), and the sneaky extra check in step 4 that most testers miss — correct credentials *during* lockout.

## Test cases vs. checklists — choose deliberately

Full step-by-step cases are expensive to write and maintain. Professionals match the format to the context:

| Use **detailed test cases** when… | Use **checklists** when… |
|---|---|
| Compliance/audit requires traceability | Exploring a new feature quickly |
| Steps are non-obvious (complex setup, exact data) | The team is small and fast-moving |
| Others (or future-you) must execute identically | You'll be the only executor |
| The client is paying for the artifact | The client is paying for found bugs |

A checklist item like "✔ Discount codes: valid/expired/invalid/empty/stacking" carries an experienced tester as far as five written cases — in a tenth of the writing time. Many freelance engagements are best served by a **hybrid**: detailed cases for the 20% of flows that are critical (payments, auth, data loss), checklists for the rest.

## Organizing suites

Group by feature area, then by flow. A typical e-commerce suite:

```text
Suite: Authentication      (12 cases)
Suite: Product browsing    (8)
Suite: Cart                (10)
Suite: Checkout & payment  (18)   ← most cases where the money is
Suite: Orders & refunds    (9)
Suite: Smoke               (10)   ← cross-cutting, run on every build
```

Tag cases with `smoke` / `regression` / `release` so you can pull the right subset under deadline. In tools: TestRail, Zephyr, Xray, Qase, or TestLink are the common managers — but a well-structured **Google Sheet is completely acceptable** for small clients and has the advantage that clients can open it. Don't let tool snobbery delay delivery.

> **Test suite organization tip:** if you can't find a test case in under 5 seconds, neither can the auditor.

> **Freelancer angle: the suite as a product**
>
> A reusable "e-commerce regression suite skeleton" (60–80 well-organized cases with placeholders) is one of the highest-leverage assets you can build. Each new client gets a tailored copy in hours instead of days, and "I have a battle-tested checkout regression framework I'll adapt to your store" is a proposal line that wins jobs. Build it once from the [portfolio projects](../05-freelancing/01-portfolio.md).

## Common mistakes

1. **Testing the test case.** Writing steps so rigid that you stop noticing everything outside them. Stay observant; log what you see, not just what you sought.
2. **One giant case.** "Test checkout" with 40 steps fails at step 12 and blocks the remaining 28. Keep cases independently runnable.
3. **Expected results copied from the UI you observed** rather than derived from requirements — that's how bugs get enshrined as "expected."
4. **No maintenance plan.** Suites rot. Schedule a pruning pass each release; delete or fix anything stale. A 300-case suite nobody trusts is worth less than 60 cases everyone does.
5. **Writing cases for things a machine should check.** If it's run every build and never changes, it belongs in [automation](../03-automation/01-when-to-automate.md).

> **Maintenance reality check:** the best test suites evolve. The worst ones become archaeological artifacts that nobody dares delete but nobody dares trust.

A copy-paste test case template lives in [Templates](../08-resources/01-templates.md). Next up: the artifact that defines your reputation — [Bug Reports](./02-bug-reports.md).
