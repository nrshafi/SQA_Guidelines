---
description: Zero to a running Playwright suite with Page Object Model and GitHub Actions CI — the exact skeleton to reuse for portfolio and client work.
keywords: [playwright tutorial, page object model, playwright typescript, github actions tests, playwright ci]
---

# Playwright Quickstart

This page takes you from nothing to a small, professional-grade suite: real tests, Page Object Model structure, and CI running on every push. It's deliberately the same skeleton you'll use for [Portfolio Project 3](../05-freelancing/01-portfolio.md) and for real client work.

## Setup (10 minutes)

Prereq: Node.js 20+. Then:

```bash
mkdir pw-demo && cd pw-demo
npm init playwright@latest
# choose: TypeScript, tests folder, GitHub Actions workflow = YES, install browsers
npx playwright test          # run the example specs
npx playwright show-report   # view the HTML report
```

You already have a runnable suite and a CI workflow file. Now make it yours.

> **The "it works on my machine" guarantee:** Playwright solves this by running on their machines instead. Which is both better and slightly unsettling.

## First real test

Playwright's selling points in five lines — auto-waiting, user-facing locators, web-first assertions:

```typescript title="tests/login.spec.ts"
import { test, expect } from "@playwright/test";

test("valid login lands on inventory", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();

  await expect(page).toHaveURL(/inventory/);
  await expect(page.getByText("Products")).toBeVisible();
});

test("locked-out user sees explanatory error", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.getByPlaceholder("Username").fill("locked_out_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.getByText(/locked out/i)).toBeVisible();
});
```

Notice there are no `sleep()` calls and no fragile CSS chains. Also notice the test password is literally `secret_sauce` — because in QA, even the demo credentials are a little too honest. **Locator priority order:** `getByRole` / `getByLabel` / `getByPlaceholder` / `getByText` first (they test accessibility for free), `data-testid` for things without semantic handles, raw CSS/XPath as a last resort. If you can't locate something semantically, that's frequently an accessibility finding worth reporting — two deliverables from one struggle.

## Page Object Model — structure that survives change

POM separates *where things are* (page classes) from *what you're checking* (specs). When the UI changes, you fix one page class, not forty tests.

```typescript title="pages/LoginPage.ts"
import { Page, Locator, expect } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly error: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.getByPlaceholder("Username");
    this.password = page.getByPlaceholder("Password");
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.error = page.locator("[data-test='error']");
  }

  async goto() {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async login(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginButton.click();
  }
}
```

```typescript title="tests/login-pom.spec.ts"
import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("standard user logs in", async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login("standard_user", "secret_sauce");
  await expect(page).toHaveURL(/inventory/);
});
```

Keep assertions in specs (not page objects), keep page methods *intent-named* (`login`, not `fillAndClick`), and resist over-abstracting until duplication actually hurts.

> **The abstraction trap:** Every Page Object starts as a clean abstraction. Then someone adds a `loginIfUserIsNotAlreadyLoggedInAndAlsoHandleTheWeirdCookieBanner` method, and suddenly you've built a framework instead of a test suite. Resistance is not futile — it's a best practice.

## API tests in the same suite

One framework, both layers — this is the [pyramid](./01-when-to-automate.md#the-pyramid-and-why-e2e-everything-fails) in practice:

```typescript title="tests/api/bookings.spec.ts"
import { test, expect } from "@playwright/test";

test("created booking is retrievable", async ({ request }) => {
  const create = await request.post(
    "https://restful-booker.herokuapp.com/booking",
    { data: { firstname: "Ada", lastname: "Lovelace", totalprice: 250,
        depositpaid: true,
        bookingdates: { checkin: "2026-07-01", checkout: "2026-07-05" } } }
  );
  expect(create.status()).toBe(200);
  const { bookingid } = await create.json();

  const get = await request.get(
    `https://restful-booker.herokuapp.com/booking/${bookingid}`
  );
  expect(get.status()).toBe(200);
  expect((await get.json()).firstname).toBe("Ada");
});
```

## Wire it into GitHub Actions

The init script already generated `.github/workflows/playwright.yml`; this trimmed version is the part worth understanding:

```yaml title=".github/workflows/playwright.yml"
name: tests
on:
  push:
    branches: [main]
  pull_request:

jobs:
  e2e:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: npx playwright test
      - uses: actions/upload-artifact@v4
        if: failure()
        with:
          name: playwright-report
          path: playwright-report/
```

Every push now runs the suite; failures upload the HTML report + traces. Open a failing run's trace (`npx playwright show-trace`) and you get time-travel debugging: DOM snapshots, console, and network at every step. **A green Actions badge on a portfolio repo is, for hiring purposes, the difference between "wrote some scripts" and "runs automation in CI."**

> **CI truth:** The first time your tests run in GitHub Actions, they will fail. Not because of the code — because of the environment. The gap between "localhost" and "ubuntu-latest" is where hope goes to be refactored. Embrace it early and often.

## Habits that keep suites trustworthy

- Each test **creates its own data** and can run alone, in any order.
- Tag and quarantine flaky tests immediately (`test.fixme()`); fix or delete within the sprint — see the [zero-tolerance policy](./01-when-to-automate.md#flakiness-the-silent-suite-killer).
- Keep secrets in environment variables / CI secrets, never in the repo (clients *will* check).
- Review the report weekly with the client — automation that nobody looks at is theater.

## Where to go deeper

The official Playwright docs are genuinely excellent (rare praise). Practice targets sized for this skeleton: SauceDemo, Automation Exercise, UI Test Automation Playground, Restful Booker — all listed with notes in [Practice Resources](../08-resources/02-practice-resources.md). When this skeleton feels comfortable, you're ready to package it as [Portfolio Project 3](../05-freelancing/01-portfolio.md#project-3--automated-regression-workspace-the-rate-raiser).

Next: the topic every client asks about now — [AI in QA](./04-ai-in-qa.md).
