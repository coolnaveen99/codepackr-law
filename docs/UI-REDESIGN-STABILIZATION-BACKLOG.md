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

**Status:** COMPLETED — 2026-10-02

**Evidence:** `docs/UI-RD-02-GLOBAL-SEARCH-NAV-AUDIT.md`

| Ticket | Task | Exit evidence |
|---|---|---|
| UI-RD-02.01 | Fix global-search open/close state | COMPLETED — Search state regression |
| UI-RD-02.02 | Fix search → sidebar/menu transition | COMPLETED — No simultaneous conflicting overlays |
| UI-RD-02.03 | Fix backdrop/background stacking | COMPLETED — Underlying page remains correctly controlled |
| UI-RD-02.04 | Validate Escape, outside click and route-change behavior | COMPLETED — Interaction matrix |
| UI-RD-02.05 | Validate desktop/mobile variants | COMPLETED — Responsive evidence |
| UI-RD-02.06 | Add focused regression tests | COMPLETED — Test evidence |

## UI-RD-03 — Application Shell & Overlay Hardening

**Status:** COMPLETED — 2026-10-02

**Evidence:** `docs/UI-RD-03-10-COMBINED-RELEASE-AUDIT.md`; `tests/ui-redesign-stabilization.test.ts`

Shell overlays now have deterministic mutual exclusion, document scroll locking, Escape closure, focus restoration and keyboard focus containment.

## UI-RD-04 — Responsive Layout & Overflow

**Status:** COMPLETED — 2026-10-02

**Evidence:** `docs/UI-RD-03-10-COMBINED-RELEASE-AUDIT.md`; responsive CSS/static regression contracts.

Desktop rail removal, page overflow clipping and responsive search layout are covered.

## UI-RD-05 — Route & Content Surface Validation

**Status:** COMPLETED — 2026-10-02

**Evidence:** `docs/UI-RD-03-10-COMBINED-RELEASE-AUDIT.md`; existing route, canonical-content and SEO test suites.

No route, canonical-content identity, provenance or SEO contract was changed.

## UI-RD-06 — Visual System Consistency

**Status:** COMPLETED — 2026-10-02

**Evidence:** `docs/UI-RD-03-10-COMBINED-RELEASE-AUDIT.md`; existing design-system/adoption regression coverage.

Chambers Record tokens and adopted shell primitives remain the visual contract.

## UI-RD-07 — Accessibility & Interaction Quality

**Status:** COMPLETED — 2026-10-02

**Evidence:** `docs/UI-RD-03-10-COMBINED-RELEASE-AUDIT.md`; `tests/ui-redesign-stabilization.test.ts`; existing mobile/accessibility tests.

Dialog semantics, keyboard closure, focus containment/restoration and reduced-motion/focus-visible contracts are retained.

## UI-RD-08 — Performance & Build Hardening

**Status:** COMPLETED — 2026-10-02

**Evidence:** `docs/UI-RD-03-10-COMBINED-RELEASE-AUDIT.md`; CI build/test gates.

Lazy tool loading remains active and production build/test scripts remain mandatory gates.

## UI-RD-09 — Production Validation

**Status:** BLOCKED — 2026-10-02

**Evidence:** Latest main commit `d66d7330a6f85ea1024e8f30a621b623fd0f9426` has Vercel status **failure** with `upgradeToPro=build-rate-limit`. This is an external deployment-rate-limit condition, not evidence of an application defect.

Production validation cannot be certified until a successful deployment is available.

## UI-RD-10 — Final UI Release Closure

**Status:** BLOCKED — 2026-10-02

**Dependency:** UI-RD-09 production validation.

The combined audit is complete, but final closure must not be marked PASS while the latest production deployment gate is blocked.

## Rules

- Do not mark a ticket complete without evidence.
- Do not claim E2E passed when only static or unit checks passed.
- Do not weaken selectors/assertions to hide defects.
- Keep canonical legal-content boundaries unchanged.
- Directly commit completed work to `main`.
