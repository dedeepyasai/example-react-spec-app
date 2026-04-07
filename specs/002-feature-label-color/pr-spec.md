**Title:** Implement Label Color for Feature Cards
**JIRA:** PROJ-102

## Summary

Adds a `Label Color` input to the add-feature form and displays a small colored rectangle on each feature card reflecting the selected color.

## Files changed
- `src/components/AddFeatureForm.jsx` (add color picker and include `labelColor` in feature object)
- `src/components/FeatureCard.jsx` (render color rectangle)
- `src/components/feature-tracker.css` (styles)

## How to test (manual)
1. `npm install`
2. `npm start`
3. Open the app, set `Label Color`, add a feature with a title, and verify the card shows the color rectangle in the top-right.

## Automated tests
- Unit test added/updated: `src/components/__tests__/FeatureTracker.test.jsx` verifies color rectangle background matches selected color.

## Rollback
- Revert the component changes and remove added tests if necessary.
