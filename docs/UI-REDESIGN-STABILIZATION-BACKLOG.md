# UI Redesign Stabilization Sprint Backlog — CodePackr Law

**Date:** 2026-10-02  
**Execution rule:** one phase at a time; inspect → implement → validate → record evidence → update control board → close.

## UI-RD-01 — UI Baseline & Bug Inventory

**Status:** COMPLETED — 2026-10-02

**Evidence:** `docs/UI-RD-01-BASELINE-AUDIT.md`

**Primary defect carried forward:** UI-RD-01-F01/F02 — desktop global search is a full-viewport z-index 120 overlay above the z-index 80 navigation rail, so the sidebar cannot participate in navigation while search is open. The next phase must solve this through deterministic overlay/state behavior rather than a blind z-index change.

| Ticket | Task | Exit evidence |
|---|---|---|
| UI-RD-01.01 | Inventory all currently reported redesign defects | Reproducible defect list |
| UI-RD-01.02 | Inspect global search, sidebar, shell and overlay state ownership | State/interaction map |
| UI-RD-01.03 | Define desktop/mobile acceptance matrix | Checked route + viewport matrix |
| UI-RD-01.04 | Separate redesign defects from known legacy E2E selector failures | Explicit classification |
| UI-RD-01.05 | Identify highest-risk interaction path for UI-RD-02 | Prioritized next-phase scope |
| UI-RD-01.06 | Record baseline TypeScript/build/test evidence where available | Evidence recorded |
| UI-RD-01.07 | Update roadmap/control board with baseline result | Documentation commit |

**UI-RD-01 exit:** COMPLETED. UI-RD-02 is now the only active implementation scope.

## UI-RD-02 — Global Search & Navigation Interaction

**Status:** NOT STARTED

| Ticket | Task | Exit evidence |
|---|---|---|
| UI-RD-02.01 | Fix global-search open/close state | Search state regression |
| UI-RD-02.02 | Fix search → sidebar/menu transition | No simultaneous conflicting overlays |
| UI-RD-02.03 | Fix backdrop/background stacking | Underlying page remains correctly controlled |
| UI-RD-02.04 | Validate Escape, outside click and route-change behavior | Interaction matrix |
| UI-RD-02.05 | Validate desktop/mobile variants | Responsive evidence |
| UI-RD-02.06 | Add focused regression tests | Test evidence |

## UI-RD-03 — Application Shell & Overlay Hardening

**Status:** NOT STARTED

Validate rail, top bar, drawers, dialogs, scroll locking, z-index/stacking, focus restoration and navigation state.

## UI-RD-04 — Responsive Layout & Overflow

**Status:** NOT STARTED

Validate mobile, tablet and desktop widths, horizontal overflow, long legal content, tables, cards, forms and workspace surfaces.

## UI-RD-05 — Route & Content Surface Validation

**Status:** NOT STARTED

Validate redesigned routes, deep links, refresh behavior, canonical legal-content loading, search navigation, related content and existing SEO contracts.

## UI-RD-06 — Visual System Consistency

**Status:** NOT STARTED

Validate design tokens, typography, spacing, buttons, inputs, tabs, badges, panels, tables, status/source labels, dark mode and responsive consistency.

## UI-RD-07 — Accessibility & Interaction Quality

**Status:** NOT STARTED

Validate keyboard navigation, focus visibility/order, dialog semantics, labels, roles/states, reduced motion, contrast and 44px target expectations.

## UI-RD-08 — Performance & Build Hardening

**Status:** NOT STARTED

Validate TypeScript, production build, bundle behavior, lazy loading, runtime errors and performance regressions introduced by the redesign.

## UI-RD-09 — Production Validation

**Status:** NOT STARTED

Validate successful deployment, representative routes, sitemap, canonical metadata, search/navigation and production runtime behavior. Distinguish CI reachability failures from application failures.

## UI-RD-10 — Final UI Release Closure

**Status:** NOT STARTED

Reconcile all evidence, record remaining known limitations, update the control board, and close the UI redesign stabilization workstream.

## Rules

- Do not mark a ticket complete without evidence.
- Do not claim E2E passed when only static or unit checks passed.
- Do not weaken selectors/assertions to hide defects.
- Keep canonical legal-content boundaries unchanged.
- Directly commit completed work to `main`.
