---
description: Practice applications for manual, API, and automation testing; learning resources actually worth your time; and the communities where testers grow.
keywords: [practice testing websites, restful booker, automation practice site, qa learning resources, testing communities]
---

# Practice Resources

You cannot learn testing by reading about testing. These are the targets to practice against, sequenced by what they're good for — plus the learning sources and communities that repay attention. All free unless noted.

> **The great irony of QA practice sites:** they're all broken on purpose. You spend your whole career trying to prevent bugs, then come here to find them in a petting zoo of software failures. Embrace the chaos.

## Practice applications

### For manual / functional / exploratory practice

| Target | URL | Why it's good |
|---|---|---|
| **Automation Exercise** | automationexercise.com | Full e-commerce flows (signup → cart → checkout) — ideal for [Portfolio Project 1](../05-freelancing/01-portfolio.md#project-1--end-to-end-manual-testing-blueprint-the-credibility-anchor) |
| **OWASP Juice Shop** | via owasp.org (run locally/Heroku) | *Deliberately* riddled with bugs incl. security ones — superb for [saboteur-tour](../02-core-craft/04-exploratory-testing.md#testing-tours) practice |
| **The Internet (Heroku)** | the-internet.herokuapp.com | Dozens of isolated UI challenge pages (dynamic loading, iframes, auth) — each is a mini-lesson |
| **DemoQA / DemoBlaze** | demoqa.com · demoblaze.com | Forms, widgets, alerts, a small store — quick reps |
| **ParaBank** | parabank.parasoft.com | Banking flows (transfers, loans) — practice money-math and [state-transition](../01-foundations/04-test-design-techniques.md#state-transition-testing) thinking |

### For API practice

| Target | URL | Why it's good |
|---|---|---|
| **Restful Booker** | restful-booker.herokuapp.com | Auth + CRUD + *intentional bugs to find* — the best single API practice target; pairs with its docs |
| **ReqRes** | reqres.in | Instant, zero-setup request/response practice |
| **Thinking Tester Contact List** | thinking-tester-contact-list.herokuapp.com | Full register/login/CRUD lifecycle — perfect for a [chained Postman collection](../02-core-craft/05-api-testing.md#a-professional-postman-workflow) |
| **Swagger Petstore** | petstore.swagger.io | Practice working *from an OpenAPI spec* — a real client scenario |
| **JSONPlaceholder** | jsonplaceholder.typicode.com | Fake REST API for quick experiments |

> **JSONPlaceholder reality check:** "posts" from users who don't exist, about topics nobody chose, stored on a server that forgets everything. It's the existential crisis of APIs — and the perfect sandbox to break things with zero consequences.

### For automation practice

| Target | URL | Why it's good |
|---|---|---|
| **SauceDemo** | saucedemo.com | Stable login/inventory/checkout + special broken users (`problem_user`, `performance_glitch_user`) — built for [Playwright practice](../03-automation/03-playwright-quickstart.md) |
| **UI Test Automation Playground** | uitestingplayground.com | Each page is a named automation *pitfall* (dynamic IDs, AJAX delays, hidden layers) — the flakiness gymnasium |
| **Automation Exercise** | automationexercise.com | Documented end-to-end scenarios — good for a full POM suite |
| **The Internet (Heroku)** | the-internet.herokuapp.com | The classic locator/waiting drill set |

> **Practice with deliverables, not wandering**
>
> An hour of practice that produces an artifact (test cases, a session sheet, a bug report, a passing CI run) is worth five hours of clicking around. Every practice block should end with something you could — and often will — show a client. That's the entire [portfolio strategy](../05-freelancing/01-portfolio.md) in one habit.

## Learning resources worth your time

- **Syllabi & docs (free, authoritative):** ISTQB CTFL v4.0 syllabus + sample exams (istqb.org / astqb.org) · Playwright docs (playwright.dev — genuinely excellent) · Postman Learning Center · MDN for web fundamentals.
- **Sites & blogs:** Ministry of Testing (the hub of the craft community — articles, courses, events) · Guru99 and Software Testing Help (encyclopedic beginner tutorials) · Test Guild (news + podcasts, strong on automation) · Satisfice (James Bach) and developsense (Michael Bolton) for the thinking-tester school that shaped [exploratory testing](../02-core-craft/04-exploratory-testing.md).
- **Courses:** free YouTube playlists cover Selenium/Playwright/Postman end-to-end; Udemy's frequent ~$12–15 sales make paid courses near-free ([never pay full price](../07-career/01-certifications.md#free-and-cheap-signals-that-also-work), and finish what you start — one completed course beats five abandoned ones).
- **Practice-with-pay:** the [crowdtesting academies](../04-remote-market/02-platforms-and-marketplaces.md#tier-1--crowdtesting-the-apprenticeship-nobody-tells-beginners-about) (uTest Academy, Test IO Academy) are themselves structured courses that route into paid cycles.

> **The learning resource paradox:** you will spend 3 hours reading reviews of practice sites before doing any practice. You will bookmark 40 articles and read none. You will open Playwright docs, close them, open them again, then watch a YouTube tutorial at 1.5x speed instead. This is normal. The fix is picking one thing and doing it for 20 minutes. Just one.

## Communities worth joining

The [isolation tax](../06-remote-work/01-remote-collaboration.md#sustainable-remote-practice) is real; community is the cure, and it's also where referrals, mentors, and "we're hiring" posts appear first:

- **Ministry of Testing** — forums, The Club, local meetups, TestBash events; the friendliest serious community in the field.
- **Reddit** — r/softwaretesting and r/QualityAssurance: career questions answered daily (search before asking; your question has appeared before).
- **Discord/Slack** — Ministry of Testing's club spaces, Test Automation University community, tool-specific servers (Playwright's Discord is active and developer-staffed).
- **LinkedIn** — follow working testers who post real content; comment usefully; this is the same flywheel as the [inbound strategy](../06-remote-work/02-getting-hired.md#where-to-apply-and-the-inbound-flywheel).
- **Local/regional** — Bangladesh has active QA meetups, university testing circles and freelancer groups ([Bangladesh Guide](../07-career/04-bangladesh-guide.md#market-positioning-from-bangladesh)); equivalents exist in most tech hubs. In-person connections convert to opportunities at a rate online ones rarely match.

**A 90-day community plan that works:** join two communities → first month: read and search · second month: answer beginner questions one notch below your level (teaching cements learning) · third month: share one artifact from your [portfolio work](../05-freelancing/01-portfolio.md) and ask for critique. By day 90 you're a recognized name in a small pond — which is exactly the size of pond referrals come from.

> **Community truth:** Ministry of Testing has more QA knowledge than most companies' internal wikis. And it's free. The catch is you have to talk to people. Introverts, I believe in you. Start by lurking — there's no shame in reading everything for six months before typing a single sentence. Eventually, though, type a sentence.
