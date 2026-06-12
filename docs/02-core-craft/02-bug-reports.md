---
description: The anatomy of a bug report developers act on immediately — severity vs priority, evidence standards, and a good-vs-bad example.
keywords: [bug report, defect report, severity vs priority, reproduction steps, bug reporting best practices]
---

# Bug Reports Developers Love

Your bug reports are your reputation. On crowdtesting platforms they are *literally* your rating and your pay (invalid or duplicate reports lower both). With clients, one sloppy report ("login broken, pls fix") undoes ten good ones. A bug report is not a complaint — it's a **gift-wrapped reproduction** that lets a developer go from reading to fixing in minutes.

## The anatomy

```text
Title:        [Checkout] Order total ignores discount when quantity
              changed after applying code

Environment:  Chrome 137 / Windows 11 · staging v2.41.0 · account: test_buyer_03
Severity:     Major          Priority: (suggested) High
Reproducible: Always (5/5 attempts)

Steps to reproduce:
 1. Add "Blue T-Shirt" to cart (qty 1, $20.00)
 2. Apply code SAVE20 → total correctly shows $16.00
 3. Change quantity to 2 in the cart

Actual result:
 Total shows $40.00 — the 20% discount is dropped, with the code
 still displayed as "applied".

Expected result:
 Total $32.00 (2 × $20.00 − 20%), per pricing spec §3.2.

Evidence:
 - Screen recording: link
 - Console: no errors. Network: PATCH /cart/items returns the new
   total without the discount field (response attached) — discount
   appears lost server-side on quantity update, not a display bug.

Notes:
 - Same behavior with other percentage codes; flat-amount codes (SAVE5)
   survive quantity changes. Did not occur on production v2.40.
 - Workaround: re-applying the code restores the correct total.
```

What makes this report excellent — and worth imitating every time:

1. **Title = location + behavior + condition.** Searchable, instantly understandable, distinguishes itself from neighboring bugs.
2. **Numbered steps from a known starting point**, with exact data. "5/5 attempts" tells the developer it's not flaky.
3. **Actual vs expected, with the *why*** — citing the spec kills the "works as intended" debate before it starts.
4. **Evidence that does triage work**: noticing the API response lost the discount field locates the bug server-side. You just saved an hour of developer investigation; that's what clients remember at review time.
5. **Scope notes**: what else is affected, when it regressed, a workaround. The regression note ("not in v2.40") is often the single most valuable line — it narrows the cause to one release's changes.

## Severity vs. priority — know the difference cold

This is a top-five interview question and a daily triage conversation:

- **Severity** = technical impact of the defect. *You* assess it.
- **Priority** = business urgency of fixing it. *Product/client* decides it (you may suggest).

| | **High priority** | **Low priority** |
|---|---|---|
| **High severity** | Checkout charges the wrong amount | App crashes on a 6-year-old OS version with 0.1% of users |
| **Low severity** | Typo in the CEO's name on the homepage of a press-launch day | Misaligned icon in the admin settings footer |

The off-diagonal cells are why both fields exist. Report severity honestly — inflating everything to "Critical" is the fastest way to lose a development team's trust.

A practical severity scale: **Critical** (crash, data loss, security hole, money wrong, no workaround) · **Major** (core function broken, workaround exists) · **Minor** (non-core function impaired) · **Trivial** (cosmetic).

## Evidence standards

- **Screenshot** for visual issues — annotated (arrow/box on the problem; tools: ShareX, Flameshot, CleanShot).
- **Screen recording** for anything involving sequence or timing (Loom, OBS, or built-in OS recorders). Keep it under 60 seconds; start from a meaningful state.
- **Console + network capture** for web apps: DevTools → Console errors, and export the failing request as HAR or cURL. This single habit elevates you above the majority of manual testers.
- **Logs / device info** for mobile: `adb logcat` extract (Android), device model, OS version, app build.
- **IDs, not descriptions, for data**: "order #10293" beats "the order I made earlier."

## Reporting etiquette that keeps clients

- **One defect per report.** Three bugs in one ticket = two bugs forgotten.
- **Search before filing.** Duplicates cost credibility (and on uTest/Test IO, money).
- **Neutral tone, no blame.** "Login fails when…" not "Whoever wrote login clearly never tested it."
- **Report what you saw, including the embarrassing possibility you misunderstood.** "Possibly intended behavior — flagging because it contradicts the Figma" is a perfectly professional report.
- **Close the loop.** When a fix ships, re-test promptly and confirm in the ticket. Unverified fixes are where regressions sleep.

> **The "first bug free" proposal technique**
>
> When bidding on freelance jobs, spend 15 minutes on the client's public site/app and include **one real, well-written mini bug report in your proposal**. It demonstrates your reporting quality, proves you actually looked at *their* product, and converts dramatically better than any paragraph about your skills. Full breakdown in [Winning Proposals](../05-freelancing/03-winning-proposals.md).

## The triage conversation

Filing the bug is half the job; the other half is what happens in triage. Be ready to:

- Defend severity with impact, not emotion ("any cart over $100 is affected — that's 30% of orders per the analytics you shared").
- Accept "won't fix" gracefully when the business context justifies it — then get it *documented* as a known issue so it doesn't resurface as "QA missed this."
- Re-test fixes within one business day. Fast verification keeps the team's rhythm and makes you feel indispensable.

Grab the [bug report template](../08-resources/01-templates.md#bug-report-template) and use it on a [practice site](../08-resources/02-practice-resources.md) today — your first three portfolio artifacts should be bug reports this good.
