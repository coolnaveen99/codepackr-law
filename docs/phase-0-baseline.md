# Phase 0 Baseline — Integrity Freeze

**Opened:** 2026-09-25  
**Expanded:** 2026-09-30 (roadmap Phase 0)  
**Repo:** coolnaveen99/codepackr-law  
**Live:** https://law.codepackr.com

## Status

| Item | Status |
|---|---|
| Catalog floor lock | **Done** |
| Product capability matrix | **Done** → `docs/product-capability-matrix.md` |
| Quality baseline template | **Done** → `docs/quality-baseline-2026-09.md` |
| Formal lint/checklist/audit/build evidence | **Pending** local or CI run |
| Phase 0 exit criteria | **Open** until quality baseline command rows are green |

## Catalog floors (locked)

Grand floor **3,552** registered topics across **20** subjects (see `docs/SITE_100_PERCENT_COMPLETION.md` / subject-coverage checklist).

Measured at prior Phase 0 freeze: all subjects meet floor (audit **3552 / 3552**).

Counts must not go down except on documented duplicate merges.

## Storage keys (browser-only)

- `cplaw.progress.v1`
- `cplaw.lastRead.v1`
- `cplaw.exam.v1`

## Scripts

- `npm run validate:topics`
- `npm run validate:judgments`
- `npm run audit` (floor, notes, high-yield, missing files)
- `npm run checklist`
- `npm run lint` (`tsc --noEmit`)
- `npm run build`
- `npm test`

## Deliverables (roadmap §5)

1. **Product capability matrix** — `docs/product-capability-matrix.md`
2. **Route inventory** — included in the matrix (aligned to `src/lib/urls.ts`)
3. **Universal tool quality targets** — checklist section in the matrix
4. **Quality baseline record** — `docs/quality-baseline-2026-09.md`

## Known issues at expand (2026-09-30)

- SEO path singular `/subject` vs runtime `/subjects` (Phase 1 fix).
- Dark mode toggle currently no-op in `App.tsx`.
- Enhancement-roadmap P0 tools (Research Workbench, Citation Verifier, Judgment Analyzer, case-prep matrices, calculators) not yet built — correct; Phase 0 is inventory only.

## Exit criteria

- [x] Tool and route catalogue documented
- [x] Content counts documented (floor 3,552)
- [ ] Production build green (attach evidence in quality baseline)
- [ ] No unresolved TypeScript errors (attach `npm run lint`)
- [ ] Checklist / audit / validate scripts recorded

Construction / under-construction banner may remain until product owner removes it.

## Next phase

When quality baseline command evidence is complete → **Phase 1 — Homepage and Information Architecture** (`docs/law-platform-enhancement-roadmap.md` §6).
