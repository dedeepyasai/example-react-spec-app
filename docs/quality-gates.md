# Code Quality Gates

We use CI to enforce basic quality gates. Minimum expectations:

- Unit tests must pass in CI (`npm run test:ci`).
- Build must complete successfully (`npm run build`).
- Static analysis/coverage: track via Sonar or similar (not configured in this POC).

If Sonar/coverage is configured, the PR must meet the configured Quality Gate or have an approved exception recorded in `.github/memory-bank/systemPatterns.md`.
# Code Quality Gates

- Linting and unit tests must pass.
- Sonar/CodeQL must not introduce new critical issues.
- Exceptions require Team Lead approval and entry in `.github/memory-bank/systemPatterns.md`.
