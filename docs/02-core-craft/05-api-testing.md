---
description: HTTP fundamentals, a professional Postman workflow, assertion scripts, Newman automation, and why API skills raise your rate fastest.
keywords: [api testing, postman, rest api, http status codes, newman, contract testing]
---

# API Testing

APIs are where modern products actually live — the UI is increasingly a thin skin over HTTP calls. API testing is also the **best effort-to-reward upgrade in QA**: it needs no programming to start, commands meaningfully higher rates than UI-only manual work ($20–55/hr freelance, per this site's market research), and it's the natural bridge toward automation.

## HTTP in ten minutes

Every API interaction is a **request** (method + URL + headers + optional body) and a **response** (status code + headers + body, usually JSON).

**Methods** express intent: `GET` reads (no side effects — *test that twice-calling changes nothing*), `POST` creates, `PUT` replaces, `PATCH` partially updates, `DELETE` removes.

**Status codes you must know cold:**

| Code | Meaning | What a tester checks |
|---|---|---|
| 200 / 201 / 204 | OK / Created / No content | Right code for the right action (create should be 201) |
| 400 | Bad request | Malformed input rejected *with a useful error body* |
| 401 / 403 | Unauthenticated / Unauthorized | The difference! No token vs. wrong permissions — confusing these is a real bug class |
| 404 | Not found | Nonexistent IDs; also that it doesn't leak which IDs *do* exist where that matters |
| 409 / 422 | Conflict / Unprocessable | Duplicates, business-rule violations |
| 429 | Rate limited | Limits enforced, `Retry-After` present |
| 500 / 502 / 503 | Server errors | These appearing from *bad user input* is always a bug — input should yield 4xx, never 5xx |

**The tester's API question list** (this is the actual skill — the tools are trivial):

1. Happy path: correct status, correct body shape, correct data?
2. Each required field missing, null, empty, wrong type, boundary-length?
3. Auth: no token, expired token, *another user's* token (the classic IDOR check: can user A fetch `/users/B/orders`?)
4. Idempotency: same POST sent twice — duplicate created? Double-charged?
5. Does the API response match what the UI displays? (Mismatch = one of them lies)
6. Pagination, sorting, filtering edges: page 0, page 99999, conflicting params
7. Are errors helpful but not *leaky* (no stack traces, no SQL fragments in responses)?

## A professional Postman workflow

1. **Collections as documentation.** Organize requests into folders by resource (`Auth`, `Users`, `Orders`). Name requests behaviorally: "Create order — missing address → 400".
2. **Environments for portability.** Variables for `base_url`, tokens, IDs — switch dev/staging with one dropdown. Never hardcode.
3. **Chained requests.** Login request's test script saves the token (`pm.environment.set("token", ...)`); later requests use `{{token}}`. A collection that runs end-to-end with one click is portfolio gold.
4. **Assertions on every request.** Status, response time, and body shape minimum:

```javascript
pm.test("201 Created", () => pm.response.to.have.status(201));

pm.test("response under 800ms", () => {
  pm.expect(pm.response.responseTime).to.be.below(800);
});

pm.test("order shape is correct", () => {
  const o = pm.response.json();
  pm.expect(o).to.have.property("id");
  pm.expect(o.total).to.be.a("number");
  pm.expect(o.status).to.eql("pending");
  pm.expect(o).to.not.have.property("internalCost"); // leak check!
});
```

That `internalCost` line is worth dwelling on: **asserting what should *not* be in a response** (other users' data, cost fields, debug info) is a habit that finds expensive bugs and almost nobody else's Postman collections have it.

5. **Run headlessly with Newman** — the bridge from "manual API testing" to "automation" in one command:

```bash
npx newman run orders.postman_collection.json -e staging.postman_environment.json
```

Put that in a CI pipeline (see [CI for testers](../03-automation/03-playwright-quickstart.md#wire-it-into-github-actions)) and you've delivered continuous API regression — a deliverable many clients will pay a monthly retainer for.

## Beyond Postman

- **curl** — fluency reading/writing curl commands lets you reproduce bugs straight from DevTools ("Copy as cURL") into bug reports. Developers love receiving a failing curl.
- **REST Assured (Java) / pytest + requests (Python) / Playwright's API mode (TS)** — code-based API tests for when you outgrow collections; they version-control and refactor better.
- **Contract testing** (concept to know): consumer and provider agree on a schema; tools like Pact or schema validation against OpenAPI/Swagger catch breaking changes *before* integration. Importing a client's Swagger file into Postman and generating checks from it is a slick, fast deliverable.
- **GraphQL** — one endpoint, queries in the body; test over-fetching authorization (can a query reach fields the user shouldn't see?), depth/complexity limits, and error masking.

## Practice targets

Free, no signup, designed for this (links in [Practice Resources](../08-resources/02-practice-resources.md)):

- **Restful Booker** — auth, CRUD, plus *intentional bugs* to find and report.
- **ReqRes** — quick request/response practice.
- **Thinking Tester Contact List** — full register/login/CRUD lifecycle, ideal for a chained collection.
- Any public Swagger/OpenAPI spec — practice generating tests from documentation.

The [portfolio section](../05-freelancing/01-portfolio.md) turns these into a hireable artifact: a public collection with environments, assertions, a README, and a Newman run screenshot.

Next: the everyday toolbelt — [Tools of the Trade](./06-tools-of-the-trade.md).
