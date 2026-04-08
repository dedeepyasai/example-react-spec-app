# Prompt Budget & LLM Usage Guidelines

Purpose: limit LLM spend and keep usage actionable while preserving developer productivity.

Quick rules
- Define a prompt budget per sprint (e.g., 50k tokens/week) and track usage in `.github/memory-bank/llm-usage.log`.
- Require a spec-first workflow: every PR must reference a `specs/<NN>-slug/spec.md`.
- Prefer single, batched generation requests (components + tests + docs) rather than many micro-requests.

How to log calls
- Use the helper `node scripts/logLlmCall.js '{"model":"<name>","tokens":123,"purpose":"generate","spec":"specs/002-.../spec.md"}'` to append an entry to `.github/memory-bank/llm-usage.log`.

When to call the LLM
- Architecture/Design decisions: allowed, prefer senior review.
- New spec -> generate full artifact: allowed and encouraged.
- Small fixes: prefer local lint/tests; call model only when tests fail and a targeted fix is needed.

Enforcement
- Add periodic review of `.github/memory-bank/llm-usage.log` in sprint retro.
- If usage spikes, require PR-level approval from Team Lead before merging further LLM-generated changes.

Contact
- If you need higher budget, raise a request with Team Lead including justification and estimate.
