---
description: Equivalence partitioning, boundary value analysis, decision tables, state transitions, and pairwise testing — with worked examples you can reuse in interviews and real projects.
keywords: [test design techniques, boundary value analysis, equivalence partitioning, decision table, state transition testing, pairwise]
---

# Test Design Techniques

Here's the difference between an amateur and a professional tester in one sentence: the amateur tests inputs they happen to think of; the professional uses **techniques that systematically find the inputs most likely to break things** — and can explain *why* each test exists.

These techniques are the core of ISTQB exams, the most common QA interview questions, and — more importantly — the actual daily thinking of good testers. Each one below comes with a worked example. Steal them.

## Equivalence Partitioning (EP)

**Idea:** divide all possible inputs into groups (*partitions*) that the system should treat identically. Test one value per partition — testing a second value from the same partition almost never finds a new bug.

**Worked example — a discount-code field that accepts codes for 10–50% off:**

| Partition | Example value | Expected |
|---|---|---|
| Valid code, active | `SAVE20` | Discount applied |
| Valid format, expired | `SUMMER24` | "Code expired" message |
| Valid format, nonexistent | `XXXXXX` | "Invalid code" message |
| Empty input | `` (blank) | Button disabled or validation message |
| Wrong format (symbols) | `S@VE!!` | Validation message, no server error |

Five tests, five distinct behaviors. A naive tester might try twenty random codes and cover only two of these partitions.

## Boundary Value Analysis (BVA)

**Idea:** bugs cluster at the *edges* of partitions, because developers write `>` when they mean `>=`. For every boundary, test the boundary value, just below it, and just above it.

**Worked example — quantity field allowing 1–99 items:**

Test: `0` (reject), `1` (accept), `2` (accept), `98` (accept), `99` (accept), `100` (reject). Add the nasty cousins: `-1`, `1.5`, `01`, empty, non-numeric, and `999999999999` (overflow).

:::tip Interview gold

"How would you test a field that accepts ages 18–60?" is one of the most common QA interview questions on Earth. The expected answer is exactly EP + BVA: partitions (valid 18–60, below, above, non-numeric, empty) and boundaries (17, 18, 19, 59, 60, 61). Mention overflow values and leading zeros and you're ahead of most candidates.

:::

## Decision Tables

**Idea:** when behavior depends on *combinations* of conditions, enumerate the combinations in a table so none get missed.

**Worked example — free shipping rule: "Free shipping for premium members, or for orders over $100, except oversized items."**

| # | Premium? | Order over $100? | Oversized? | Expected shipping |
|---|---|---|---|---|
| 1 | Yes | Yes | No | Free |
| 2 | Yes | No | No | Free |
| 3 | No | Yes | No | Free |
| 4 | No | No | No | Paid |
| 5 | Yes | Yes | Yes | Paid |
| 6 | Yes | No | Yes | Paid |
| 7 | No | Yes | Yes | Paid |
| 8 | No | No | Yes | Paid |

Eight rows, complete coverage of the rule, and — frequently — the act of building the table exposes that the *requirement itself* is ambiguous ("wait, does premium override oversized?"). Finding requirement bugs before code exists is peak shift-left.

## State Transition Testing

**Idea:** model the system as states and the events that move between them; test the valid transitions *and* the invalid ones.

**Worked example — an order lifecycle:** `Cart → Placed → Paid → Shipped → Delivered`, with `Cancelled` reachable from Placed and Paid only.

- Valid paths: place → pay → ship → deliver; place → cancel; pay → cancel.
- Invalid events worth testing: cancel after shipping (must be rejected), pay twice (idempotency!), deliver without shipping, refresh/back-button during payment (the classic double-charge bug), webhook arriving out of order.

State transition thinking is *the* technique for payments, bookings, subscriptions, and document workflows — exactly the systems clients care most about.

## Pairwise (Combinatorial) Testing

**Idea:** when configurations explode (3 browsers × 4 OSes × 3 user roles × 2 languages = 72 combos), research shows most bugs involve interactions of just **two** parameters. A pairwise set covers every *pair* of values in a fraction of the combinations — typically cutting 72 combos down to about 12–15.

Use a free tool like PICT (Microsoft, command-line) or an online pairwise generator. When a client asks for "testing on all devices," a pairwise matrix is how you scope it affordably — and showing one in a proposal signals real expertise.

## Error Guessing & Experience-Based Attacks

Formal name for an informal skill: attacking inputs with the things that *always* break software. Build your personal attack list; here's a starter:

- Empty, null, whitespace-only, very long strings (10k chars)
- `0`, negative numbers, decimals where integers are expected, numbers with leading zeros
- Special characters: `' " < > & % \ /` — and emoji 🧨
- The same record edited in two tabs; double-clicking submit; back button after submit
- Date edges: Feb 29, Dec 31→Jan 1, timezone boundaries, DST transitions, dates in the past where future is expected
- Uploads: 0-byte file, wrong extension, huge file, filename with spaces/unicode
- Network: slow 3G throttling, dropped connection mid-request, airplane mode mid-sync (mobile)
- Strings that are also code: `<script>alert(1)</script>`, `Robert'); DROP TABLE users;--` (the gentle versions of security testing)

## Choosing a technique — quick decision guide

| Situation | Reach for |
|---|---|
| A field with ranges or formats | EP + BVA |
| Business rules with multiple conditions | Decision table |
| Anything with a lifecycle (orders, accounts, documents) | State transitions |
| Configuration/device matrix | Pairwise |
| "This area feels fragile" | Error guessing + an [exploratory charter](../02-core-craft/04-exploratory-testing.md) |
| A spec exists | All of the above, *applied to the spec before code arrives* |

## Practice assignment

Take the signup form of any [practice site](../08-resources/02-practice-resources.md) and produce: the partitions, the boundary tests, one decision table (e.g., password rules), and ten error-guessing attacks. That single document — cleaned up — is portfolio material, and exactly what we'll use in [Writing Test Cases](../02-core-craft/01-writing-test-cases.md).
