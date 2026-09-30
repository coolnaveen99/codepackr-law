# Phase 0 Baseline — Integrity Freeze

**Opened:** 2026-09-25  
**Expanded:** 2026-09-30 (roadmap Phase 0)  
**Closed (inventory):** 2026-09-30 after Phases 0–32 on main  
**Repo:** coolnaveen99/codepackr-law  
**Live:** https://law.codepackr.com

## Status

| Item | Status |
|---|---|
| Catalog floor lock | **Done** |
| Product capability matrix | **Done** (refreshed 2026-09-30 — 31 tools) → `docs/product-capability-matrix.md` |
| Quality baseline template | **Done** → `docs/quality-baseline-2026-09.md` |
| Enhancement roadmap Phases 1–32 MVPs | **Done** on main (see phase implementation records) |
| Formal lint/checklist/audit/build evidence | **Operator run** — attach results in quality baseline when executing locally/CI |

## Catalog floors (locked)

Grand floor **3,552** registered topics across **20** subjects.

Counts must not go down except on documented duplicate merges.

## Storage keys (browser-only)

Legacy:

- `cplaw.progress.v1`
- `cplaw.lastRead.v1`
- `cplaw.exam.v1`

Versioned namespaces (Phase 16): `cp-law:settings|favorites|study|cases|drafts|research|checklists|diary|cause-list|case-briefs:v1`

## Scripts

- `npm run validate:topics`
- `npm run validate:judgments`
- `npm run audit`
- `npm run checklist`
- `npm run lint`
- `npm run build`
- `npm test`

## Exit criteria

- [x] Tool and route catalogue documented (31 tools)
- [x] Content counts documented (floor 3,552)
- [x] P0–P2 enhancement tools from roadmap present as client MVPs
- [ ] Production build green — record in quality baseline on operator run
- [ ] TypeScript lint pass — record in quality baseline on operator run

## Known residual (non-blocking for Phase 0 inventory)

- Dark mode toggle remains a no-op (`dark = false` in `App.tsx`).
- Content-depth upgrades continue under the judgment-decoder standard (not Phase 0 scope).
- Optional cloud / paid features are policy-only (Phase 32), not implemented.

## Next

Ongoing quality: content depth, deeper tests, formal quality-baseline command evidence. Numbered enhancement phases **0–32 are complete** on main.
