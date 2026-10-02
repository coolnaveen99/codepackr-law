# Production Readiness & Integration Hardening Backlog

Updated: 2026-10-02

The numbered Phase 0–32 roadmap is closed. This backlog is the next execution stream and is deliberately sequential: complete one task, validate it, update the sprint board, then start the next.

| ID | Work | Priority | Definition of done |
|---|---|---|---|
| PR-001 | Playwright E2E foundation | P0 | Playwright configured, Chromium CI gate, route smoke coverage, failure artifacts |
| PR-002 | Critical workflow E2E | P0 | Research → citation → judgment → case prep → draft → checklist → local persistence journey covered |
| PR-003 | Route/subject smoke matrix | P0 | All registered routes and 20 subjects exercised with deterministic smoke checks |
| PR-004 | Mobile E2E | P1 | Critical routes validated at mobile viewport with navigation and touch-target checks |
| PR-005 | Accessibility audit | P1 | Keyboard/focus/labels/landmarks/contrast baseline and CI checks |
| PR-006 | Legal-content integrity audit | P0 | Canonical corpus provenance, source, date, duplicate, relationship and stale-content checks |
| PR-007 | Canonical content delivery | P0 | Runtime canonical content served through a versioned/static delivery boundary rather than raw GitHub |
| PR-008 | Bundle/performance optimization | P1 | Reduce initial JS, preserve functionality, add measurable performance budget/gate |
| PR-009 | Security/privacy final audit | P1 | Dependency, storage, external-link, CSP and privacy boundary audit with evidence |
| PR-010 | Production readiness exit audit | P0 | All P0/P1 gates evidenced, board reconciled, production readiness decision recorded |

## Execution rule

- One active implementation task at a time.
- Do not mark a task COMPLETED without test/validation evidence.
- Update docs/SPRINT-CONTROL-BOARD.md in the same workstream before reporting completion.
- Preserve the browser-local legal-data privacy boundary.
- Do not add AI-generated legal conclusions or outcome predictions as part of quality hardening.
