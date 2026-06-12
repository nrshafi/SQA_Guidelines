---
description: Session-based exploratory testing — charters, heuristics like SFDIPOT and RCRCRC, testing tours, and how to sell exploratory work to clients.
keywords: [exploratory testing, session based test management, test charters, testing heuristics, SFDIPOT, RCRCRC]
---

# Exploratory Testing

Exploratory testing is **simultaneous learning, test design, and execution** — you investigate the product and let what you find steer where you look next. It is not "random clicking." Done professionally, it is structured, accountable, and finds the bugs scripted suites are structurally blind to: the weird interactions, the timing issues, the "wait, why did that happen?" class of defect.

It's also the discipline that most clearly separates skilled testers in a market full of checklist-followers — and unlike automation, it requires zero programming to excel at.

> **In one sentence:** you click things until something breaks, but you do it *systematically*. The "systematically" part is what makes it a skill and not just chaos.

## Session-Based Test Management (SBTM)

The framework that makes exploration auditable (crucial when someone is paying by the hour):

- **Charter** — a one-sentence mission for the session.
- **Time-box** — 60–120 uninterrupted minutes (90 is the sweet spot).
- **Session notes** — running log of what you tried, saw, and wondered.
- **Debrief** — outcomes: bugs filed, questions raised, coverage achieved, follow-up charters spawned.

### Charter format

> **Explore** ⟨target area⟩ **with** ⟨resources/tools/data⟩ **to discover** ⟨kind of information⟩

Examples that show the range:

- *Explore the checkout discount logic with boundary-value codes and quantity changes to discover pricing calculation errors.*
- *Explore profile image upload with malformed, oversized, and duplicate files to discover validation and error-handling gaps.*
- *Explore the order history page with a 5,000-order account to discover performance and pagination problems.*
- *Explore session handling with two browsers and mid-flow logouts to discover state and security issues.*

### Session notes that justify invoices

```text
CHARTER: Explore cart/discount interactions … (90 min, build 2.41)
14:02 valid code on empty cart → blocked, good
14:09 code + qty change → DISCOUNT DROPPED → BUG-231 filed (15 min detour)
14:31 two codes sequentially → second silently replaces first; spec unclear → QUESTION for PO
14:48 code, then remove qualifying item → discount stays on ineligible cart → BUG-232
15:10 expired code at exactly midnight boundary → correct rejection
…
DEBRIEF: 2 bugs (1 major), 1 spec question, coverage: codes×quantity ✅,
codes×shipping ❌ (next charter). Feel: pricing engine fragile around state changes.
```

That artifact converts "I poked around for a while" into accountable, resumable, client-visible work. Three such session sheets are worth more in your [portfolio](../05-freelancing/01-portfolio.md) than fifty generic test cases.

> **The invoice test:** if your session notes would look suspicious on an invoice, you didn't do enough documenting. If they look suspicious on a *resume*, you did.

## Heuristics that guide where to look

Heuristics are experience compressed into prompts. The two worth memorizing:

**SFDIPOT (San Francisco Depot)** — product coverage angles: **S**tructure (what it's made of — pages, components, files) · **F**unction (what it does) · **D**ata (what it processes — inputs, outputs, lifecycles) · **I**nterfaces (APIs, imports, integrations) · **P**latform (browsers, OSes, devices, dependencies) · **O**perations (how real users actually use it — profiles, workflows, extremes) · **T**ime (timeouts, concurrency, timezones, schedules, DST).

Stuck mid-session? Walk the letters: "Have I tested how *time* affects this? What about unusual *operations* — power users with 10,000 records?"

**RCRCRC (Karen Johnson)** — what to cover in a *regression* pass when time is short: **R**ecent (what changed) · **C**ore (what must never break) · **R**isky (historically fragile areas) · **C**onfiguration (environment-sensitive behavior) · **R**epaired (recently fixed — fixes regress) · **C**hronic (the bugs that keep coming back).

When a client says "we ship Friday, you have one day," RCRCRC *is* your test plan.

> **SFDIPOT decoded:** if you ever forget what it stands for, just remember — "Something's Fishy, Definitely Investigate, Probable Outage, Terrible." You'll cover roughly the same angles, and nobody will quiz you on the acronym during the debrief.

## Testing tours

Borrowed from James Whittaker — themed walks through a product, great for structuring early sessions on an unfamiliar app:

| Tour | You act like… | Finds |
|---|---|---|
| **Money tour** | A buyer doing everything that touches revenue | The bugs that cost the client real money |
| **Landmark tour** | A visitor hitting every major feature once | Orientation + smoke-level issues |
| **Garbage-collector tour** | A janitor opening every screen, even obscure ones | Abandoned, broken corners |
| **Saboteur tour** | A hostile user feeding it [error-guessing attacks](../01-foundations/04-test-design-techniques.md#error-guessing--experience-based-attacks) | Validation and robustness gaps |
| **Back-alley tour** | Someone using only the *least*-used features | Untested-by-anyone functionality |
| **Supermodel tour** | Someone who only looks at appearance | Visual/layout/responsive issues |

A first engagement with any new client maps neatly to: Landmark → Money → Saboteur, one session each. You'll have a credible read on product quality — and usually a fistful of bugs — within three sessions.

> **The Garbage Collector tour** — also known as "what happens if I open every screen, even the one that hasn't been touched since 2019." Turns out, not great.

## Exploratory + scripted: the right blend

These are complementary, not competing:

- **Scripted/automated** checks defend *known* expectations cheaply and repeatably.
- **Exploratory** sessions discover *unknown* problems and generate the knowledge that future scripts encode.

A healthy rhythm for a small product team: automation guards the critical paths on every build; humans spend their scarce attention on charters over new features and risk hotspots. When you advise a client to stop paying you to manually re-click the same 80 regression steps every week and let you automate them — spending the freed hours on exploration instead — you have just described a **better service at a defensible retainer**, and you sound like a quality partner rather than a clicking service. That conversation is how freelance testers graduate into long-term engagements.

## Practice drill

Pick a [practice app](../08-resources/02-practice-resources.md). Run three 90-minute sessions: Landmark tour, Money tour, then one SFDIPOT-driven charter on its riskiest feature. Produce session sheets like the example above. You now own the single most persuasive artifact type a beginner can show: evidence of *structured thinking under freedom*.

Next: where much of the high-value work actually lives — [API Testing](./05-api-testing.md).
