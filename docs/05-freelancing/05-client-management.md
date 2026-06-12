---
description: Discovery questions, status reporting cadence, expectation management, review generation, and turning one-off testing gigs into long-term relationships.
keywords: [client management freelance, status report qa, client communication testing, getting reviews upwork, client retention]
---

# Client Management

Repeat clients are the entire economics of successful freelancing: no bidding cost, no Connects, no trust-building from zero, often better rates. And here's the leverage specific to QA — **most clients have never worked with a *good* tester before.** Their bar is "found some bugs, sort of communicated." Clearing it isn't enough; resetting it is the goal, because the freelancer who resets a client's expectations owns that client.

## The discovery call: qualify and impress

Before any engagement, get answers to these (it takes ten minutes and instantly differentiates you):

1. What does the product do, and who uses it? (Risk context)
2. What prompted hiring QA *now*? (Launch? Bug embarrassment? Investor demo? — this is the real success criterion)
3. What's the release process — how often, who decides go/no-go?
4. Where is work tracked, and how do you want bugs reported? (Their Jira? Your sheet?)
5. What's been the worst bug so far? (Tells you where the bodies are buried and what they fear)
6. Which browsers/devices do your *actual* users use? (Analytics beat assumptions)
7. Who answers my questions, and how fast — Slack? Email? (Sets the communication contract)
8. What does "done" look like for this engagement? (Their words — then you write the [exit criteria](../02-core-craft/03-test-plans-and-strategy.md))

Question 2 is the one beginners skip and seniors lean on: a client whose investor demo is in 12 days needs *different testing* (demo-path bulletproofing) than one hardening for scale. Testing the right thing for the wrong goal is still failure.

## The operating rhythm: visibility is the product

Remote clients can't see you work; silence reads as absence. The cure costs five minutes a day:

```text
EOD update — Tue 14 May
✅ Done:      Checkout functional pass (32/32 cases) · 6 bugs filed (1 major: BUG-214 discount drop)
🔄 Tomorrow:  Saved-cards flows + start cross-browser pass
⚠️ Flagged:   Staging was down 13:00–14:30 (lost ~1.5h) · BUG-209 needs product decision (see ticket)
❓ Need:      Test account with order history — blocking refund tests after tomorrow
```

Done / next / flagged / need — four lines, same time every day, zero surprises. This single habit generates more rehires than any technical skill, because what clients are actually buying from a remote freelancer is **the feeling that things are handled.** A weekly version (with numbers: cases run, bugs by severity, risk summary) goes to less-involved clients; template in [Templates](../08-resources/01-templates.md#status-report-templates).

Three companion habits:

- **Never sit on a blocker.** Blocked 30+ minutes by access/environment/ambiguity → flag it immediately with what you're doing meanwhile. The phrase "I lost two days waiting but didn't want to bother you" has ended a thousand freelance relationships.
- **Bad news early, with options.** "Testing is revealing more payment edge-case bugs than scoped — we can (a) extend 3 days, (b) ship with documented known issues, (c) cut the BNPL flows from this release. My read: (b) is defensible except for the two majors." You just became an advisor, not a vendor.
- **Translate severity into business.** "BUG-214 drops discounts on quantity change — any promo-driven cart is affected; during your planned sale that's direct revenue loss." Clients act on money; developers act on [reproductions](../02-core-craft/02-bug-reports.md). Speak both dialects.

## Boundaries that preserve the relationship

- **Scope changes get the magic words** — pleasant, immediate re-quoting ([script here](./04-pricing-and-contracts.md#scope-define-it-then-defend-it-pleasantly)). Resentful silent absorption is how good engagements rot.
- **Availability is defined, not infinite.** State working hours and response expectations in the kickoff ("Slack replies within 4 business hours, 09:00–18:00 GMT+6; for release-day emergencies, here's what counts as one"). Clients respect declared boundaries and trample undeclared ones.
- **The "quick favor" gets a friendly meter.** Two free quick favors per engagement is good relationship lubricant; the third gets "happy to — I'll add it to Friday's invoice as a 30-min item, that ok?"

## Engineering the review

Reviews are the compounding asset; treat their generation as part of delivery, not luck:

1. **Overshoot the finish.** Deliver the summary report *plus one unasked-for artifact* — a regression checklist they keep, a 5-minute Loom walking through the top findings. End-of-engagement delight is what reviews are written about (recency bias is your friend).
2. **Close with a wrap message** that makes reviewing easy: "It's been a pleasure — everything's delivered and documented. If you were happy with the work, a short review genuinely helps an independent tester; either way I'd love feedback. I'm closing the contract from my side so you're not billed further." (That last clause itself earns five-star comments.)
3. **Never buy, swap, or pressure** — platforms detect and ban it, and one manipulated review costs more than ten earned ones. Just ask once, well, at the peak moment.
4. **Mine the review for marketing.** "Found critical payment bugs two days before our launch" is a client quote that belongs (with permission) in your [profile overview](./02-profile-optimization.md).

## From gig to retainer

The conversion script, deployed at wrap-up of any successful engagement:

> "As you keep shipping, the same risks return with every release. Most of my clients move to a standing arrangement — for example, 15 hours each release cycle: regression on the critical paths, exploratory on whatever's new, and same-day verification of your bug fixes. Want me to sketch what that'd look like for your cadence?"

It converts shockingly often, because the alternative (re-finding a trusted tester later) is exactly the pain they hired you to end. Three or four retainers is a stable income floor — the full arithmetic is in [Scaling Up](../07-career/03-scaling-up.md).

## Firing a client (yes, really)

Some clients cost more than they pay: chronic scope-bullying, abusive tone, perpetual late payment, demands that risk your platform standing. The professional exit: finish current commitments, deliver everything documented, decline the next engagement with bland grace ("my availability's changed — I can recommend looking for X skills for this work"). Your calendar is inventory; the hours a bad client occupies are hours a good one can't buy. The [red flags page](./06-red-flags-and-scams.md) helps you avoid acquiring them in the first place.
