# Testing

Run unit tests locally:

```
npm install
npm test
```

Run CI-style tests (coverage, no watch):

```
npm run test:ci
```

CI pipeline (see `.github/workflows/ci.yml`) runs `npm run test:ci` and `npm run build`. CI job artifacts (coverage, reports) should be linked in `specs/<NN>/test-report.md`.
