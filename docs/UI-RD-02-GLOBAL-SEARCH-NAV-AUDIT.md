# UI-RD-02 Global Search & Navigation Interaction Audit

**Date:** 2026-10-02  
**Phase:** UI-RD-02  
**Status:** COMPLETED

## Implementation

### 1. Deterministic overlay transition

`Header.tsx` now uses `toggleMobileNavigation()` to close global search before opening/toggling the mobile navigation drawer.

This prevents two competing overlays from being active during a search → navigation transition.

### 2. Search layer ordering

The global search overlay was moved below the application shell navigation layer:

- Search overlay: z-index 60
- Top bar: z-index 70
- Desktop navigation rail: z-index 80
- Mobile navigation drawer: z-index 200

This keeps shell navigation reachable while search remains open and avoids solving the defect with an uncontrolled z-index escalation.

### 3. Search backdrop

A dedicated `Close global search` backdrop button was added.

This provides an explicit outside-click close path without relying on event bubbling from the search dialog.

### 4. Existing Escape behavior retained

Escape continues to close search and mobile navigation deterministically.

Navigation actions continue to call `closeOverlays()` before route changes.

## Regression coverage

Updated `e2e/chambers-shell-regression.spec.ts` with:

- desktop sidebar navigation while global search is open;
- search close via Escape;
- search close via backdrop;
- route preservation while closing search;
- mobile navigation opened while search is open closes search first;
- existing mobile mutual-exclusion coverage retained.

## Acceptance matrix

| Scenario | Result |
|---|---|
| Open global search | PASS — implementation |
| Desktop sidebar remains reachable while search is open | PASS — shell layer ordering + regression |
| Sidebar navigation closes search before routing | PASS — existing/focused regression |
| Escape closes search | PASS — implementation + regression |
| Backdrop closes search | PASS — new implementation + regression |
| Mobile navigation opened from search closes search | PASS — new implementation + regression |
| Search opened while mobile navigation is open | PASS — existing `openSearch()` closes mobile navigation |
| Mobile navigation and search remain mutually exclusive | PASS — implementation + regression |
| Canonical legal-content boundary unchanged | PASS |
| Routes/SEO contracts changed | NO |
| Arbitrary z-index escalation used | NO |

## Validation limitation

The GitHub connector available for this execution can verify committed source/test contents but does not provide a direct local Playwright execution environment. Therefore this audit records implementation/test coverage as evidence and does **not** claim a fresh browser run passed.

Existing CI/E2E infrastructure remains the execution authority for browser runtime validation.

## Exit decision

UI-RD-02 exit criteria are satisfied at implementation and regression-coverage level.

**Next phase:** UI-RD-03 — Application Shell & Overlay Hardening.
