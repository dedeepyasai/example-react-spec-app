# Technical Overview

Stack: React (CRA), Node for tooling, GitHub Actions CI for tests and quality gates.

Entrypoints: `src/index.js`, `src/App.js`.

Place components in `src/components/` and feature specs in `specs/`.

CI: see `.github/workflows/ci.yml` — it runs tests (`npm run test:ci`) and build.
