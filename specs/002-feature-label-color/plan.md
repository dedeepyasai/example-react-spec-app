## Implementation Plan

Files to change / verify:
- `src/components/AddFeatureForm.jsx` — add `Label Color` color-picker input, maintain `labelColor` state, include it in created feature object.
- `src/components/FeatureCard.jsx` — render small color rectangle at top-right using `feature.labelColor`.
- `src/components/feature-tracker.css` — small styles for the rectangle if needed.

State:
- `features` array stored in `FeatureTracker` using `useState` (no backend persistence).

Behavior:
- `AddFeatureForm` will call `onAdd(feature)` with `{id, title, description, createdAt, labelColor}` and `FeatureTracker` will prepend it.

Accessibility:
- Ensure the color picker has an accessible label `Label Color` and use `aria-label` as needed.

Testing:
- Unit test: create a feature with a color and assert a labeled color rectangle is rendered with the correct background color.
- Manual: add features with different colors and verify the rectangle appears and matches selection.
