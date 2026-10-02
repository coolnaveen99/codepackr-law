# PA-004 — Legacy Content Removal Decision

**Task ID:** PA-004  
**Repositories:** `coolnaveen99/codepackr-law` (+ dependency on `coolnaveen99/legal-content`)  
**Decision date:** 2026-10-01  
**Owner:** Architecture / Product  
**Prerequisite:** Phase 2 exit evidence (`docs/PHASE-2-EXIT-AUDIT.md`, PA-001/PA-002 production evidence)

## Decision (binding)

**Do not remove legacy topic modules (`src/data/topics/**`) at this time.**

**Retain** ContentGateway **canonical-first + legacy fallback** dual-read until the removal criteria in § Criteria are fully met and a follow-up execution ticket is opened.

This decision **closes the PA-004 decision gate**. It does **not** authorize deletion of legacy content.

---

## Why removal is rejected now

| Fact | Measurement (2026-10-01) |
|------|--------------------------|
| Canonical topics in legal-content manifest | **326** topics (719 total entities) |
| Legacy topic TypeScript modules in app | **~3,561** files under `src/data/topics/` |
| Catalog surface | Full multi-subject syllabus (thousands of registered topic IDs) |
| Production H5 (PA-002) | Company indoor-management: canonical JSON **404**, full treatise still served from **legacy** |
| Dual-read architecture | `ContentGateway` → canonical repository → `LegacyTopicRepository` / `loadTopicContent` |

Removing legacy today would blank the majority of TopicDetail pages for subjects/topics not yet published in `legal-content`.

Parity smoke and Phase 2 exit prove dual-read works; they do **not** prove full-catalog canonical coverage.

---

## What “signed parity” means for removal

Signed Phase 2 exit (PA-003 audit) confirms:

- gateway + graph + representative migration + production UX H1–H7;
- **not** that every catalog topic has a published canonical twin.

Therefore **PA-003 does not unlock mass legacy deletion** by itself.

---

## Criteria required before any legacy deletion

All of the following must be true for a **scoped** removal (prefer subject-by-subject, never global wipe):

1. **Coverage** — For the proposed scope (e.g. subject `pil`), every catalog topic ID with `hasNotes: true` resolves to a **published** canonical entity via ContentGateway (manifest path or accepted file alias).
2. **Automated parity** — `npm run parity:legal-content` (or successor full-catalog parity) **PASS** for that scope with zero missing canonical bodies.
3. **Production spot-check** — At least N representative routes (including high-yield topics) load body **only** from canonical URLs (no reliance on legacy module content for those routes).
4. **Fallback policy** — Explicit product decision: either keep a thin emergency fallback, or accept hard-empty when canonical is unavailable (must be documented).
5. **Board ticket** — A new READY task (e.g. PA-004-EXEC-`<scope>`) lists exact paths to delete and rollback plan.
6. **No silent shrink** — Checklist / `subjects.ts` metadata must not claim notes that would disappear.

Until all six are satisfied for a scope, **do not delete** that scope’s legacy files.

---

## Allowed now (non-deletion hygiene)

These do **not** require a new ticket beyond normal READY work:

- Improve catalog ↔ canonical **aliases** (as done for tort `nature-definition`).
- Expand `legal-content` migration for under-covered subjects.
- Strengthen parity scripts toward full-catalog coverage reports.
- Commit full `TopicDetail.tsx` source (remove build-time restore dependency).
- Document dual-read in architecture notes.

---

## Forbidden without a new READY execution ticket

- Deleting `src/data/topics/**` trees or bulk modules.
- Removing `LegacyTopicRepository` or `loadTopicContent` fallback from ContentGateway.
- Shipping a build that hard-requires canonical for all topics while coverage < catalog.

---

## Evidence sources

- Canonical manifest: `https://raw.githubusercontent.com/coolnaveen99/legal-content/main/manifests/content-manifest.json` — **326** topics / **719** entities.
- Legacy inventory: `find src/data/topics -name '*.ts' | wc -l` → **~3561**.
- Production dual-read: PA-002 H5 (`docs/SPRINT-CONTROL-BOARD.md`).
- Phase 2 exit: `docs/PHASE-2-EXIT-AUDIT.md` (states legacy must not be deleted until PA-004 decision).

---

## Board disposition

| Field | Value |
|-------|--------|
| PA-004 status | **COMPLETED** (decision recorded: **no removal**) |
| Execution of deletion | **Not started** — blocked by coverage criteria |
| Next related work | Migrate more subjects to canonical; optional future `PA-004-EXEC-*` per scope |
| Phase 3 | Unblocked only by PA-003 board closure + roadmap rules — **not** by legacy deletion |

## Sign-off

| Role | Outcome |
|------|---------|
| Architecture / Product (execution) | **Reject mass legacy removal**; retain dual-read |
| Date | 2026-10-01 |


## Superseding execution — PA-004-EXEC-FULL-CATALOG (2026-10-02)

The original PA-004 decision was based on the 2026-10-01 coverage snapshot. A new full-catalog execution has now been started after the canonical repository received the remaining migrated topic notes.

Current implementation:

- A deterministic full-catalog parity gate now checks all **3,551 real legacy topic files** against `legal-content`.
- The 10 excluded migration records are helper/generator modules, not topic content.
- The application ContentGateway no longer performs runtime legacy-topic fallback.
- Legacy topic files remain on disk as rollback/source data; they are **not deleted** in this execution.
- Law CI now checks out `coolnaveen99/legal-content` and runs the full-catalog parity gate before the normal validation/build gates.
- If any canonical topic is missing, invalid, or not `published`, CI fails rather than silently falling back.

**Execution status:** migration parity validated by Law CI #507. Canonical integrity, delivery, and production-readiness gates passed. 112 migrated topics remain `review` and are not treated as production-published.  
**Execution record:** `docs/PA-004-EXEC-FULL-CATALOG.md`

The original deletion criteria remain relevant to any future physical deletion of `src/data/topics/**`. Runtime fallback retirement does not authorize mass deletion of the legacy source files.
