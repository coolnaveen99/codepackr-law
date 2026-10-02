# UI-RD-01 Baseline & Bug Inventory Audit

**Date:** 2026-10-02  
**Phase:** UI-RD-01 — UI Baseline & Bug Inventory  
**Repository:** `coolnaveen99/codepackr-law`  
**Status:** COMPLETED

## Scope inspected

- `src/App.tsx`
- `src/components/layout/Header.tsx`
- `src/design-system/styles/adoption.css`
- `src/index.css`
- `e2e/chambers-shell-regression.spec.ts`
- `scripts/pr-readiness.mjs`
- `package.json`
- Existing UI-002/UI-003 architecture and readiness evidence

## Baseline findings

| ID | Area | Finding | Severity | Next phase |
|---|---|---|---|---|
| UI-RD-01-F01 | Global search ↔ navigation | Search opens a full-viewport fixed overlay at z-index 120 while desktop navigation is z-index 80. Once search is open, the sidebar is visually/interaction-wise underneath the search layer. | P0 | UI-RD-02 |
| UI-RD-01-F02 | Overlay state | Header currently has separate `searchOpen` and `mobileNavOpen` state. `openSearch()` closes mobile navigation, but there is no user-accessible desktop navigation action while search is active. | P0 | UI-RD-02 |
| UI-RD-01-F03 | Overlay lifecycle | Escape handling exists for both search and mobile navigation; navigation actions call `closeOverlays()`. | PASS | UI-RD-02 regression |
| UI-RD-01-F04 | Mobile overlay exclusivity | Existing Playwright regression explicitly checks mobile menu and global search are mutually exclusive. | PASS by existing test coverage; execution deferred during active redesign | UI-RD-02 |
| UI-RD-01-F05 | Desktop navigation | Collapse/expand state is local to Header and propagated to App for layout rail sizing. | PASS by implementation inspection | UI-RD-03 |
| UI-RD-01-F06 | Responsive shell | Desktop rail is disabled below 1024px; mobile drawer is fixed and viewport-bound. | PASS by implementation inspection | UI-RD-04 |
| UI-RD-01-F07 | Horizontal overflow | `.cp-page` explicitly clips horizontal overflow; readiness gate checks this contract. | PASS by static readiness evidence | UI-RD-04 |
| UI-RD-01-F08 | Accessibility baseline | Search and mobile navigation expose dialog semantics; focus-visible and reduced-motion contracts exist. | PASS by static readiness evidence; full audit remains UI-RD-07 | UI-RD-07 |
| UI-RD-01-F09 | Route/content boundary | Header navigation routes through existing App callbacks; no canonical-content boundary change identified. | PASS | UI-RD-05 |
| UI-RD-01-F10 | Build/test baseline | Existing CI/readiness evidence exists, but this baseline phase does not claim a new local browser execution. | DOCUMENTED | UI-RD-08 |

## Acceptance matrix

| Scenario | Baseline result | Required final result |
|---|---|---|
| Open search | Works by implementation | Search opens predictably |
| Close search with Escape | Implemented | Overlay closes and page is restored |
| Open mobile navigation | Implemented | Drawer opens and locks page scroll |
| Escape mobile navigation | Implemented | Drawer closes |
| Search opens while mobile navigation is open | State code closes mobile navigation | Exactly one overlay remains |
| Navigate from mobile drawer | Navigation helper closes overlays | Drawer closes before route transition |
| Search → desktop sidebar navigation | **DEFECT F01/F02** — search owns full viewport | Navigation action must be deterministic and search must close |
| Search backdrop/background interaction | Needs focused validation | No stale backdrop/scroll lock/click interception |
| Desktop rail collapse | Implemented | Content remains outside rail |
| Mobile horizontal overflow | Existing regression/readiness coverage | ≤ 1px overflow |
| Route/deep-link preservation | Existing application routing | No route/SEO regression |
| Canonical legal content | Existing gateway boundary | UI changes must not alter it |

## Defect classification

### P0 — UI-RD-02 primary scope

**Search/navigation interaction conflict**

The search overlay is intentionally full-screen and above the navigation rail. This makes a direct “click the left sidebar while search is open” interaction impossible on desktop. The existing code closes mobile navigation when opening search, but there is no equivalent desktop search-to-sidebar transition because the sidebar is covered.

This matches the reported class of issue and should be fixed in UI-RD-02 rather than hidden with a z-index change.

### Not defects / deferred validation

- Existing mobile mutual-exclusion behavior is already represented by Playwright coverage.
- Existing desktop search-close-on-navigation behavior is represented by the shell regression.
- Existing UI selector/E2E instability during redesign remains a separate validation concern and is not converted into a pass.
- No legal-content migration defect was found in this baseline.

## Phase conclusion

UI-RD-01 exit criteria are satisfied:

- current implementation inspected;
- reported interaction problem classified;
- state/overlay architecture mapped;
- desktop/mobile acceptance matrix established;
- redesign-related versus legacy validation concerns separated;
- next implementation scope identified.

**Next phase:** UI-RD-02 — Global Search & Navigation Interaction.

**Do not skip directly to later phases.**
