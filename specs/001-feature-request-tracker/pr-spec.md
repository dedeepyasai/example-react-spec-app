**Title:** Feature Request Tracker implementation
**JIRA:** PROJ-101

## Summary

Implements a small one-page feature tracker using local React state. See `spec.md` for acceptance criteria.

## Files changed
- Added `src/components/FeatureTracker.jsx`
- Added `src/components/AddFeatureForm.jsx`
- Added `src/components/FeatureCard.jsx`
- Added `src/components/feature-tracker.css`
- Added `src/App.js` entry to mount the component

## How to test (manual)

1. `npm install`
2. `npm start`
3. Open app and add a feature: verify card appears with timestamp

## Tests
No automated tests added for this POC. Manual QA steps included in `test-report.md`.

## Rollback
Remove the component imports from `src/App.js` and delete created files.
