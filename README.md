# SQA Guidelines

A practical handbook for **Software Quality Assurance** — covering the testing craft (test design, bug reporting, exploratory testing, API testing, automation) and the complete playbook for turning those skills into **remote QA jobs or a freelance practice**.

Built with [Docusaurus](https://docusaurus.io/) 3.

## What's inside

- **Foundations** — QA vs QC, SDLC/STLC, testing types and levels, test design techniques with worked examples
- **The Core Craft** — test cases, bug reports, lean test plans, exploratory testing (SBTM, heuristics), API testing, the standard toolchain
- **Test Automation** — automation strategy, framework comparison (Playwright/Selenium/Cypress), a hands-on Playwright + CI quickstart, AI in QA
- **The Remote QA Market** — demand trends, platform comparison (marketplaces, crowdtesting, elite networks), honest rate and salary data
- **Freelancing Playbook** — portfolio engineering, profile optimization, winning proposals, pricing and contracts, client management, scam protection
- **Working Remotely** — async-first collaboration, getting hired into remote roles
- **Career Roadmap** — certifications guide, six-month zero-to-first-client roadmap, scaling up, Bangladesh freelancer's guide
- **Resources** — copy-paste templates, practice sites, glossary

The content is synthesized from the deep-research reports in [`References/`](./References/) (ChatGPT and Gemini research, 2024–2026) combined with practitioner knowledge and original analysis.

## Development

Requires Node.js >= 20.

```bash
npm ci            # install dependencies (lockfile-faithful)
npm run start     # local dev server with hot reload
npm run build     # production build into build/ (fails on broken links)
npm run serve     # serve the production build locally
```

## Deployment

Configured for GitHub Pages project hosting (`https://nrshafi.github.io/SQA_Guidelines/`).

Pushes to `main` now deploy automatically through GitHub Actions. Pull requests to `main` also run a build check before merge.

For a manual deploy from your machine:

```bash
GIT_USER=<your GitHub username> npm run deploy
```

This builds the site and pushes it to the `gh-pages` branch. If deploying elsewhere (custom domain, Netlify, Vercel), adjust `url`/`baseUrl` in `docusaurus.config.js`.

## Contributing

The guidelines are a living document. Corrections and improvements are welcome — open an issue or a pull request. Market figures (rates, fees, platform policies) drift over time; PRs that refresh stale numbers are especially appreciated.
