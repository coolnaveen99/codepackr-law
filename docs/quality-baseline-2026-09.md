# CodePackr Law — Quality Baseline (2026-09)

**Phase:** 0 — Baseline Audit and Stabilization  
**Repo:** coolnaveen99/codepackr-law  
**Date opened:** 2026-09-30  
**Companion:** `docs/product-capability-matrix.md`, `docs/phase-0-baseline.md`

> A roadmap item is not complete until the repository contains the required code, content, tests, and verification evidence.  
> This file records **command evidence**. Do not mark a row green without a real run.

---

## 1. Environment (fill on each formal baseline run)

| Field | Value |
|---|---|
| Date / time (IST) | _pending_ |
| Operator | _pending_ |
| Branch / commit SHA | _pending_ |
| Node version | _pending_ (`node -v`) |
| npm version | _pending_ (`npm -v`) |
| OS | _pending_ |

---

## 2. Required baseline commands

Run from repository root after `npm install`:

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

| Command | Purpose | Result (pass/fail) | Notes / key output |
|---|---|---|---|
| `npm install` | Dependencies | _pending_ | |
| `npm run lint` | TypeScript `tsc --noEmit` | _pending_ | |
| `npm run checklist` | Subject coverage checklist gen | _pending_ | |
| `npm run audit` | Subject floor / notes / high-yield / missing files | _pending_ | Prior freeze: 3552/3552 floor |
| `npm run validate:topics` | Topic file integrity | _pending_ | |
| `npm run validate:judgments` | Judgment data integrity | _pending_ | |
| `npm test` | Unit tests (`tests/unit.test.ts`) | _pending_ | |
| `npm run build` | tsc + sitemap + vite + prerender | _pending_ | Full production build |

---

## 3. Inventory snapshot (from static inspection 2026-09-30)

| Metric | Value | Source |
|---|---|---|
| Curriculum subjects | 20 (locked) | playbook / subjects registry |
| Registered topic floor | 3,552 | `docs/phase-0-baseline.md` (2026-09-25) |
| Tools in `TOOLS` registry | 12 | `src/data/tools.ts` |
| First-class non-tool routes | home, subjects, subject, topic, case-law, knowledge, contact | `src/lib/urls.ts` |
| Dark mode toggle | Present in Header API; App forces light (`dark = false`) | `App.tsx` |

---

## 4. Known issues logged at Phase 0 open

| ID | Severity | Issue | Suggested phase |
|---|---|---|---|
| P0-R1 | Medium | SEO meta paths use `/subject/...` while runtime uses `/subjects/...` | Phase 1 |
| P0-R2 | Low | Dark mode toggle is a no-op (`onToggleDark={() => {}}`) | Phase 1 / 20 |
| P0-G1 | Info | P0 research/case-prep tools from roadmap not yet implemented | Phases 3–7 |
| P0-Q1 | Process | Formal npm command results not yet attached to this file | Complete this baseline |

---

## 5. Privacy / storage baseline (browser-only)

Documented keys (expand as features land):

| Key | Purpose |
|---|---|
| `cplaw.progress.v1` | Study progress |
| `cplaw.lastRead.v1` | Last-read topic |
| `cplaw.exam.v1` | Exam session state |

Roadmap target namespaces (Phase 16): `cp-law:settings:v1`, `favorites`, `study`, `cases`, `drafts`, `research`, `checklists`.

**Rule:** No practice scores, notes, or case facts leave the device for analytics.

---

## 6. Sign-off

| Gate | Owner | Status |
|---|---|---|
| Inventory matrix merged | Agent / maintainer | **Done** (`product-capability-matrix.md`) |
| Quality command table filled | Local or CI operator | **Pending** |
| Phase 0 exit criteria met | Maintainer | **Pending** command evidence |

When all command rows are **pass**, update `docs/phase-0-baseline.md` status to “Phase 0 complete (YYYY-MM-DD)” and proceed to Phase 1.
