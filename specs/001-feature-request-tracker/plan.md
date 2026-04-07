## Implementation Plan

Files to add:
- `src/components/FeatureTracker.jsx`
- `src/components/AddFeatureForm.jsx`
- `src/components/FeatureCard.jsx`
- `src/components/feature-tracker.css`
Additional change:
- Add `labelColor` string field to the feature object and pass it from `AddFeatureForm` to `FeatureTracker` and `FeatureCard`.
- Add a color picker input (`Label Color`) to `AddFeatureForm` using native `<input type="color">`.
- Render a small color rectangle in the top-right corner of each `FeatureCard` using `feature.labelColor`.

Accessibility:
- Ensure the color picker has an accessible label `Label Color` and use `aria-label` where appropriate.

State:
- `features` array stored in `FeatureTracker` using `useState`.

Behavior:
- `AddFeatureForm` will call `onAdd(feature)` with `{id, title, description, createdAt}` and `FeatureTracker` will prepend it.

Testing:
- Manual: add features and verify card rendering and order.
