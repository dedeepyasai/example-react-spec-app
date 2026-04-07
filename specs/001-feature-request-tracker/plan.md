## Implementation Plan

Files to add:
- `src/components/FeatureTracker.jsx`
- `src/components/AddFeatureForm.jsx`
- `src/components/FeatureCard.jsx`
- `src/components/feature-tracker.css`

State:
- `features` array stored in `FeatureTracker` using `useState`.

Behavior:
- `AddFeatureForm` will call `onAdd(feature)` with `{id, title, description, createdAt}` and `FeatureTracker` will prepend it.

Testing:
- Manual: add features and verify card rendering and order.
