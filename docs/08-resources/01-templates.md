---
description: Copy-paste templates — bug report, test case, one-page test plan, exploratory charter, daily and weekly status reports, proposal skeleton, and invoice.
keywords: [bug report template, test case template, test plan template, qa status report template, freelance proposal template]
---

# Templates

Every template below is deliberately plain text — paste into Jira, Notion, Sheets, email, or a proposal box and adapt. Each links back to the page that teaches the thinking behind it. Adapt freely; the *fields* are the value, not the formatting.

> **Template truth:** the template is not the work. The template is the starting point for the work. Copy-pasting a bug report template and calling it a day is like copying a recipe and calling yourself a chef.

## Bug report template

*(Thinking: [Bug Reports Developers Love](../02-core-craft/02-bug-reports.md))*

```text
Title:        [Area] Behavior + condition (e.g., "[Checkout] Discount lost when quantity changed after applying code")

Environment:  Browser/OS or device · app version/build · environment (staging/prod) · test account
Severity:     Critical / Major / Minor / Trivial  (+ one-line justification)
Priority:     (suggested — owner decides)
Reproducible: Always / Intermittent (x of y attempts)

Steps to reproduce:
 1.
 2.
 3.

Actual result:

Expected result:        (+ why: spec section, design link, or reasonable-expectation note)

Evidence:     Screenshot(s) / recording link / console errors / failing request (cURL or HAR)

Notes:        Scope (what else affected) · regression info (last version where it worked) ·
              workaround if any
```

> **Bug report template rule:** if you can't fill in every field, you don't understand the bug well enough to report it. Go back and test more.

## Test case template

*(Thinking: [Writing Test Cases](../02-core-craft/01-writing-test-cases.md))*

```text
ID:             TC-<AREA>-<NNN>
Title:          <behavior being verified, one line>
Priority:       High / Medium / Low
Preconditions:  <state, accounts, data needed before step 1>
Test data:      <inputs, kept separate from steps>

Steps:                                  Expected per step:
 1.                                      →
 2.                                      →
 3.                                      →

Postconditions/cleanup:  <data to remove, state to restore>
Status:        Pass / Fail / Blocked    Actual result (if not Pass):
Tags:          smoke / regression / release
```

## One-page test plan

*(Thinking: [Test Plans & Strategy](../02-core-craft/03-test-plans-and-strategy.md))*

```text
TEST PLAN — <product> <release/engagement>          v<1> · <date> · <author>

1. SCOPE         In:                         Out (explicitly):
2. RISKS         Top 3 ranked (likelihood × impact) — effort follows this ranking
3. APPROACH      <manual/exploratory/automation mix; techniques; coverage matrix>
4. ENVIRONMENTS  <URLs, builds, accounts, test data, devices/browsers>
5. SCHEDULE      <day-by-day or milestone outline + status update cadence>
6. DELIVERABLES  <bug reports where; summary report; checklists handed over>
7. ENTRY/EXIT    Start when: <…>            Done when: <…>
8. ASSUMPTIONS   <build dates, fix turnaround, scope-change policy>

Note: Testing reduces risk; it cannot prove the absence of defects. Coverage is
prioritized by the risk ranking above; untested areas are reported as such.
```

## Exploratory session charter + notes

*(Thinking: [Exploratory Testing](../02-core-craft/04-exploratory-testing.md))*

```text
CHARTER:   Explore <target area> with <resources/data/tools> to discover <information sought>
Time-box:  90 min        Build: <version>      Date/Tester:

NOTES (timestamped):
 hh:mm  <action / observation / question / bug-id>

DEBRIEF:
 Bugs filed:        <ids>
 Questions raised:  <for product/dev>
 Coverage:          <what's now covered / explicitly not>
 Next charters:     <spawned follow-ups>
  Gut feel:          <one line on area health>
```

> **Exploratory testing truth:** the "Gut feel" field is the most honest thing in any test plan. Embrace it.

## Status report templates

*(Thinking: [Client Management](../05-freelancing/05-client-management.md))*

```text
EOD UPDATE — <day, date>
✅ Done:      <tests run, areas covered, bugs filed w/ worst severity>
🔄 Next:      <tomorrow's focus>
⚠️ Flagged:   <risks, blockers hit, decisions needed>
❓ Need:      <access/data/answers required, by when>
```

```text
WEEKLY SUMMARY — week of <date>
Coverage:   <X of Y planned cases · Z exploratory sessions · environments/devices>
Findings:   <n> defects (<crit/major/minor>) · <m> fixed & verified
Quality view: <2–3 sentences: what's solid, what's risky, trend vs last week>
Next week:  <plan>
Open needs: <blockers/decisions>
```

## Proposal skeleton

*(Thinking: [Winning Proposals](../05-freelancing/03-winning-proposals.md) — keep total under 200 words)*

```text
<1–2 lines mirroring THEIR problem in your words — no greeting, no name>

<2–4 lines of proof you engaged: a real finding on their product (steps +
recording link), or the specific first risk you'd attack and why>

For this scope I'd: (1) <…>, (2) <…>, (3) <…>, (4) <deliverables + cadence>.
Roughly <hours/timeline>.

Relevant sample: <ONE targeted portfolio link>

<availability + overlap stated in THEIR timezone + start date>

Question: <one question that advances the actual work>
```

## Simple invoice skeleton

*(For direct clients; platforms handle their own. Thinking: [Pricing & Contracts](../05-freelancing/04-pricing-and-contracts.md))*

```text
INVOICE #<YYYY-NNN>                              <your name / business name>
Date: <issue date>      Due: <Net-7/14 date>     <email · address · tax/ID no. if applicable>

Bill to: <client name, company, email>

Description                                   Qty/Hrs    Rate      Amount
QA testing — <engagement, period>             <12.5h>    <$18/hr>  <$225.00>
<fixed-price milestone 2 — regression pass>      1        <$250>    <$250.00>
                                                          TOTAL:    <$475.00>

Payment: <Wise/Payoneer/bank details>          Reference: <invoice #>
Late payments accrue <1.5%/month> after the due date.  Thank you!
```

> **Invoice wisdom:** nothing says "professional" like a clean invoice with a clear payment term. Nothing says "amateur" like chasing it three weeks later because you forgot the due date field.

> **Make them yours**
>
> Copy these into your own template vault (Notion/Drive) and refine after every engagement — the fields you keep adding are your experience accumulating. Within a year, your personalized template set becomes one of your most valuable business assets: instant professionalism at zero marginal cost, and the backbone of the [productized services](../07-career/03-scaling-up.md#move-3--productized-services) you'll eventually sell.
