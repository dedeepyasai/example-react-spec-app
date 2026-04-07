# Developer Onboarding

Quick start:

1. Fork the repo.
2. Clone: `git clone <fork>`
3. Install: `npm install`
4. Run locally: `npm start`
5. Run tests: `npm test` or CI-style `npm run test:ci`

Process highlights:
- Create a feature spec under `specs/<NN>-slug/` before coding.
- Open a feature branch `feature/PROJ-123-short-desc` and include the JIRA key in commits (`PROJ-123: message`).
- Open PR with link to `specs/<NN>-slug/pr-spec.md` and ensure CI passes.
