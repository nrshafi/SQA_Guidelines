---
description: The standard QA toolchain — issue trackers, test management, Git, browser DevTools, SQL, and screen capture — and how deep you actually need to go in each.
keywords: [qa tools, jira, testrail, git for testers, browser devtools, sql for testers]
---

# Tools of the Trade

Job posts list tool soup: "JIRA, TestRail, Git, Postman, SQL, Jenkins…" Here's the honest map of what each category is, how deep you must go, and which ones are résumé keywords versus daily survival skills.

## Issue tracking — JIRA and friends

**Daily survival skill.** JIRA dominates; ClickUp, Linear, Trello, Asana, GitHub Issues fill the rest. What you actually need:

- Create well-formed issues (your [bug report anatomy](./02-bug-reports.md) maps directly onto JIRA fields).
- Navigate boards and sprints; understand workflow states (Open → In Progress → In Review → Done) and *who moves tickets when*.
- Link issues (bug *blocks* story, bug *relates to* bug) and search with basic JQL: `project = SHOP AND type = Bug AND status != Done ORDER BY priority DESC`.

Get free hands-on practice: JIRA's free tier supports up to 10 users — create a project and run your practice testing through it; "comfortable with JIRA workflows and JQL" then becomes a true statement in your profile.

## Test management — TestRail, Zephyr, Xray, Qase

**Know one, understand the concepts.** They all model the same things: test cases → suites/plans → runs → results, with reporting on top. TestRail is the most-cited in job posts; Qase and TestLink have free tiers to learn the concepts. For small freelance clients, a disciplined **Google Sheet** (cases as rows; run columns per release) is genuinely fine — clients can open it, comment on it, and you waste zero budget on tooling. Offer the upgrade when the suite outgrows the sheet.

## Git — yes, even for manual testers

**Increasingly non-negotiable.** You need Git to: pull the automation repo, version your own test artifacts, contribute fixes to test data, and speak the team's language ("which branch is this build from?").

Survival set: `clone`, `pull`, `add`, `commit`, `push`, `checkout -b`, plus opening a pull request in the GitHub/GitLab UI and resolving a trivial conflict without panic. That's a weekend of practice. Your [portfolio](../05-freelancing/01-portfolio.md) living on GitHub kills two birds: public proof of work *and* proof of Git literacy.

## Browser DevTools — the manual tester's superpower

**The highest-leverage skill on this page.** Every senior web tester lives in DevTools (F12):

- **Console** — JavaScript errors. A "nothing happens when I click" bug report that includes the console exception is triaged in minutes instead of days.
- **Network** — see every request: status codes, payloads, timing. Distinguish "frontend shows wrong data" from "backend returns wrong data" — that distinction is the difference between a vague bug and a [located one](./02-bug-reports.md). Right-click → *Copy as cURL* to attach a reproduction.
- **Device toolbar** — emulate phones/tablets and throttle to slow 3G. Half of all timing bugs only appear on slow networks; *throttled testing should be part of every regression pass*.
- **Elements** — inspect the DOM; this is also where you learn the CSS selectors that [automation](../03-automation/03-playwright-quickstart.md) depends on.
- **Application** — cookies, localStorage, session data: what survives logout? (Sometimes the answer is a security bug.)

## SQL — enough to verify the backend

**One honest week of study.** The UI says "saved" — did it actually save? Backend validation queries:

```sql
-- Did the order really get created with the right total?
SELECT id, status, total_cents FROM orders
WHERE user_id = 1043 ORDER BY created_at DESC LIMIT 5;

-- Are there duplicate emails the unique-constraint should prevent?
SELECT email, COUNT(*) FROM users GROUP BY email HAVING COUNT(*) > 1;

-- Did the cascade delete orphan anything?
SELECT oi.* FROM order_items oi
LEFT JOIN orders o ON o.id = oi.order_id WHERE o.id IS NULL;
```

`SELECT`, `WHERE`, `JOIN`, `GROUP BY/HAVING`, `ORDER BY`, `COUNT/SUM` — that's 90% of testing SQL. Practice free on any SQL sandbox; never run `UPDATE`/`DELETE` on a shared environment without explicit permission (ask for read-only credentials — it protects *you*).

## Screen capture & recording

Your evidence pipeline (see [bug report evidence standards](./02-bug-reports.md#evidence-standards)): an annotating screenshot tool (ShareX or Flameshot — both free), a recorder (Loom's free tier, OBS, or OS built-ins), and a habit of capturing *before* you need to. On mobile: built-in recorders plus `adb` for Android logs.

## CI/CD awareness — Jenkins, GitHub Actions, GitLab CI

**Conceptual now, practical later.** Understand the shape: code push → pipeline runs build + tests → results gate the merge/deploy. Be able to read a pipeline result page and answer "did my tests run, and what failed?" You'll graduate to *writing* pipeline configs in the [automation section](../03-automation/03-playwright-quickstart.md).

## The honest priority order

For a beginner aiming at remote/freelance work, master in this order:

1. **DevTools** (days, instantly differentiating)
2. **JIRA + a test management approach** (days)
3. **Postman** ([API testing](./05-api-testing.md) — a week to competence)
4. **Git basics** (a weekend)
5. **SQL basics** (a week)
6. **One automation framework** (months — [start here](../03-automation/01-when-to-automate.md))

Tools are the easy part; they're listed in job posts because they're easy to filter on. What's hard — and what this section's other pages teach — is the judgment about *what to check*. A tester with great judgment and a Google Sheet beats a TestRail-certified checklist-follower every single time.
