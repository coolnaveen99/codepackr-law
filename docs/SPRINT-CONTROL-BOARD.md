# Sprint Control Board — CodePackr Law

**Owner:** Product / Architecture coordination  
**Applies to:** `coolnaveen99/codepackr-law` + `coolnaveen99/legal-content`  
**Roadmap position:** Phase 2 — **CLOSED** · Phase 3 kickoff done  
**Updated:** 2026-10-01 (TD-001 blocked — large file API limit)

## Purpose

Operational sprint backlog. Roadmap = strategic SoT; this board = execution SoT.

## Verified completed

| ID | Result | Evidence |
|---|---|---|
| LC-001–LC-007 | **COMPLETED** | Prior evidence |
| PA-001–PA-005 | **COMPLETED** | Prior board + audit/decision/eval docs |
| PH3-001 | **COMPLETED** | `docs/architecture/phase-3-research-workbench-kickoff.md` |

## Current sprint backlog

| ID | Work | Status | Priority |
|---|---|---|---|
| PH3-001 | Phase 3 Research Workbench architecture kickoff | **COMPLETED** | P0 |
| TD-001 | Commit full TopicDetail.tsx source (remove build-time restore dependency) | **BLOCKED** | P1 |
| PA-005b | Implement content CDN/mirror (if scheduled) | **BACKLOG** | P2 |
| PH3-010 | ResearchSession types + localStorage | **BACKLOG** | P0 |

### TD-001 — status (2026-10-01)

| Item | Detail |
|------|--------|
| Goal | Full `src/components/subjects/TopicDetail.tsx` on main; no network restore required |
| Blocker | GitHub Contents / push_files path used by the agent cannot reliably write the ~55KB file; accidental PLACEHOLDER writes occurred; partial `scripts/td-source/` fragments incomplete |
| Mitigation on main | `scripts/restore-topic-detail.mjs` **hybrid**: assemble `scripts/td-source/part*.txt` if ≥14 parts, else fetch `bbc15cc` + PA-002 hardens (build still green) |
| Production impact | Builds remain green via network fallback; source-of-truth still not a single committed TSX file |
| Unblock command (local/human) | See below |

**Unblock (run locally, then push main):**

```bash
git fetch origin
git checkout main && git pull
curl -sL "https://raw.githubusercontent.com/coolnaveen99/codepackr-law/bbc15ccfe68dc7b8f331abb6c31f80496806b951/src/components/subjects/TopicDetail.tsx" \
  -o src/components/subjects/TopicDetail.tsx
# Apply PA-002 hardens if missing: sec.content ?? [] and always-on RelatedCanonicalTopics
node scripts/restore-topic-detail.mjs   # should report skip once full
git add src/components/subjects/TopicDetail.tsx
git commit -m "fix(td-001): commit full TopicDetail.tsx source on main"
git push origin main
```

After that, TD-001 → COMPLETED and restore script may no-op permanently.

## Active rules

- Do not mark TD-001 COMPLETED until `TopicDetail.tsx` on main is full source (>20KB, `TopicDetailProps`, related graph block) without requiring network fetch.
- Do not delete legacy topics (PA-004).
- Phase 3 product build only via PH3-010+ READY tickets.
