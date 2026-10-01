# CodePackr Law — Quality Baseline (2026-09)

**Phase:** 0 — Baseline Audit and Stabilization  
**Repo:** coolnaveen99/codepackr-law  
**Date opened:** 2026-09-30  
**Inventory refresh:** 2026-09-30 (post Phases 0–32)  
**Companion:** `docs/product-capability-matrix.md`, `docs/phase-0-baseline.md`

> A roadmap item is not complete until the repository contains the required code, content, tests, and verification evidence.  
 > **Inventory / MVP code for Phases 0–32 is on main.** The dedicated Phase 0 CI workflow now executes every command below; this document is updated with its result after the gate completes.

---

## 1. Environment (fill on each formal baseline run)

| Field | Value |
|---|---|
| Date / time (IST) | _pending operator run_ |
| Operator | _pending_ |
| Branch / commit SHA | `main` (refresh after pull; tip includes phases 31–32) |
| Node version | _pending_ (`node -v`) |
| npm version | _pending_ (`npm -v`) |
| OS | _pending_ |

---

## 2. Required baseline commands

```bash
npm install
npm run lint
npm run checklist
npm run audit
npm run validate:topics
npm run validate:judgments
npm test
npm run build
```

| Command | Purpose | Result | Notes |
|---|---|---|---|
| `npm install` | Dependencies | _pending operator_ | |
| `npm run lint` | TypeScript `tsc --noEmit` | _pending operator_ | |
| `npm run checklist` | Subject coverage checklist | _pending operator_ | |
| `npm run audit` | Floor / notes / high-yield / missing files | _pending operator_ | Prior freeze: 3552/3552 |
| `npm run validate:topics` | Topic integrity | _pending operator_ | |
| `npm run validate:judgments` | Judgment integrity | _pending operator_ | |
| `npm test` | Unit tests (`unit`, `phase21-30`, `phase31-32`) | _pending operator_ | |
| `npm run build` | Production build | _pending operator_ | |

---

## 3. Inventory snapshot (static inspection 2026-09-30)

| Metric | Value | Source |
|---|---|---|
| Curriculum subjects | 20 (locked) | subjects registry |
| Registered topic floor | 3,552 | phase-0 baseline |
| Tools in `TOOLS` registry | **31** | `src/data/tools.ts` |
| First-class non-tool routes | home, subjects, subject, topic, case-law, knowledge, contact | `urls.ts` |
| Enhancement roadmap phases | **0–32 closed** as client/policy MVPs | phase-*-implementation.md |
| Dark mode toggle | No-op (light-only product) | `App.tsx` |

---

## 4. Known issues

| ID | Severity | Issue | Status |
|---|---|---|---|
| P0-R1 | Medium | SEO singular `/subject` paths | **Fixed** in Phase 1 (runtime `/subjects`) |
| P0-R2 | Low | Dark mode no-op | Open (accepted for light-only) |
| P0-G1 | Info | P0 research tools missing | **Closed** — tools on main |
| P0-Q1 | Process | npm evidence not attached | Open until operator fills §2 |

---

## 5. Privacy / storage

Versioned `cp-law:*:v1` namespaces via `localStore.ts`. Analytics never store query text, case facts, or drafts.

---

## 6. Sign-off

| Gate | Status |
|---|---|
| Inventory matrix merged | **Done** (31 tools, 2026-09-30) |
| Phases 0–32 MVP code on main | **Done** |
| Quality command table filled | **Pending operator/CI** |
| Phase 0 process exit (commands green) | **Pending operator/CI** |

When all command rows are **pass**, note the date here and in `phase-0-baseline.md`.
