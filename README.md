# Prarup Manandhar — Portfolio

A production-ready static portfolio built with Astro and Tailwind CSS.

## Local development

Requirements:

- Node.js 20 or newer
- pnpm 9 or newer

Install and run:

```bash
pnpm install
pnpm dev
```

The local site runs at `http://localhost:4321`.

## Production build

```bash
pnpm build
pnpm preview
```

The optimized static site is written to `dist/`.

## Deployment

The site deploys to GitHub Pages at `https://prarupmanandhar.com.np`.

Every push to `main` runs `.github/workflows/deploy-pages.yml`, which installs dependencies,
builds the Astro project, uploads `dist/`, and deploys the result to GitHub Pages.

The custom domain remains configured in GitHub Pages settings. `public/CNAME` preserves the
domain in the generated static output for compatibility with branch-based Pages tooling.

## Before publishing

- Confirm the USAA end date shown as July 2026.
- Confirm that the generalized Fidelity description is appropriate for public use.
- Review the anonymized case studies for compliance with employer confidentiality policies.

The contact experience uses direct email and LinkedIn links, so no form service, database, or secret configuration is required.
