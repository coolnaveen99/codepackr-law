# UI Redesign Execution Instructions — CodePackr Law

## Purpose

These instructions govern the UI Redesign Stabilization workstream after Chambers Record UI-002 through UI-013 adoption.

## Mandatory execution sequence

For every phase:

1. Read the current roadmap, sprint backlog and relevant architecture contract.
2. Inspect the actual implementation and current tests.
3. Identify the exact defect or acceptance gap.
4. Reproduce it or establish a deterministic static reason before modifying code.
5. Implement the smallest maintainable fix.
6. Add or update focused regression coverage.
7. Run the strongest available validation.
8. Review the diff for unintended route, content, SEO or accessibility changes.
9. Update the sprint backlog with exact evidence and limitations.
10. Update the control board.
11. Commit directly to `main`.
12. Report the commit SHA and what was actually validated.
13. Only then proceed to the next phase.

## Interaction-state rules

### Global search
- Opening global search must not leave another conflicting overlay active.
- Opening the sidebar/menu must close global search when both cannot safely coexist.
- Closing search must restore the underlying page without stale backdrop or scroll lock.
- Escape, outside click, explicit close and route navigation must have deterministic behavior.
- Search state must not leak across route transitions.

### Navigation/sidebar
- Menu state must be independent from content-route state.
- Desktop rail behavior and mobile drawer behavior must be treated separately where appropriate.
- No invisible overlay may intercept clicks.
- Z-index must follow the design-system layering contract rather than arbitrary escalation.

### Responsive behavior
- Test representative desktop, tablet and mobile widths.
- No horizontal page overflow.
- Long legal headings, tables, citations and examples must remain usable.
- Touch targets should meet the existing accessibility contract.

## Legal-content boundary

- Keep `legal-content` as the canonical source.
- Keep ContentGateway canonical-first with legacy fallback under PA-004.
- UI fixes must not alter canonical IDs, provenance or content authority.
- Never delete legacy content to make UI tests pass.

## Testing rules

Use layered validation:
- focused unit/regression tests;
- TypeScript validation;
- production build when practical;
- existing readiness scripts;
- browser E2E only where the current redesign contract is stable.

If a browser E2E failure is caused by an obsolete selector during active redesign:
- document the exact failure;
- do not call it a pass;
- defer it to the appropriate stabilization phase;
- continue with independent focused validation.

## Git rules

- Work one phase at a time.
- Commit directly to `main`.
- Use descriptive commit messages such as `fix(ui): stabilize global search navigation state`.
- Never force-push.
- Never rewrite unrelated completed-phase evidence.
- Do not create duplicate phases for already completed UI-002 through UI-013.

## Completion language

Use exact status language:
- **COMPLETED** — all phase exit criteria have evidence.
- **PARTIAL** — implementation exists but one or more exit criteria remain.
- **BLOCKED** — execution cannot safely continue because a concrete dependency is missing.
- **DEFERRED** — intentionally postponed with a documented reason.

Never convert PARTIAL/BLOCKED/DEFERRED into COMPLETED merely because deployment succeeded.

## Next execution

UI-RD-01 through UI-RD-08 are completed. The next actionable work is **UI-RD-09 — Production Validation** once the Vercel deployment gate is available. UI-RD-10 follows only after UI-RD-09 has production evidence. Do not reopen completed UI-RD phases unless new evidence proves their contracts are wrong.
