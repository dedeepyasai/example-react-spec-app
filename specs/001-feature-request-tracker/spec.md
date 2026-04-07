**Status:** Draft
**Title:** Feature Request Tracker — One-page UI
**JIRA:** PROJ-102

## Goal

Build a single-page "Feature Request Tracker" UI inside the app. Three sections: header, feature cards list, add-feature form. Keep all data in local React state.

## Acceptance Criteria
- GIVEN the app is open
- WHEN a user adds a feature with title (required) and optional description
- THEN a new feature card appears at the top with title, description, and created timestamp
 - AND the add-feature form includes a `Label Color` field (color picker)
 - AND each feature card displays a small rectangular color label at its top-right using the selected color

## Non-goals
- No backend persistence or auth
- No routing changes
