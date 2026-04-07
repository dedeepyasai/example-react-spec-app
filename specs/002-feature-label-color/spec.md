**Status:** Draft
**Title:** Feature Request Tracker — Label Color
**JIRA:** PROJ-102

## Goal

Add a `Label Color` to the add-feature form and show a small colored rectangle in the top-right of each feature card representing that label color.

## Acceptance Criteria
- GIVEN the app is open
- WHEN a user sets `Label Color` (via a color picker) and submits a new feature with title
- THEN the new feature card appears at the top with title, description, created timestamp, and a small rectangular color label in the top-right matching the selected color
- AND the color picker is accessible (has an explicit label/aria-label)

## Non-goals
- Persistence across page reloads (no backend required)
