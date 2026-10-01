# Sprint Control Board — CodePackr Law

**Owner:** Product / Architecture coordination  
**Applies to:** `coolnaveen99/codepackr-law` + `coolnaveen99/legal-content`  
**Roadmap position:** Phase 2 — **CLOSED** · Phase 3 implementation started (PH3-010)  
**Updated:** 2026-10-01 (TD-001 still BLOCKED)

## Verified completed

| ID | Result | Evidence |
|---|---|---|
| LC-001–LC-007 | **COMPLETED** | Prior evidence |
| PA-001–PA-005 | **COMPLETED** | Prior board + docs |
| PH3-001 | **COMPLETED** | Architecture kickoff doc |
| PH3-010 | **COMPLETED** | `src/lib/researchSession.ts` + Workbench persistence |

## Current sprint backlog

| ID | Work | Status | Priority |
|---|---|---|---|
| PH3-010 | ResearchSession types + localStorage | **COMPLETED** | P0 |
| TD-001 | Commit full TopicDetail.tsx source | **BLOCKED** | P1 |
| PH3-020 | Expand Workbench form fields | **READY** | P0 |
| PH3-030–050 | Matrix / note / Gateway suggests | **BACKLOG** | P0 |
| PA-005b | CDN mirror implementation | **BACKLOG** | P2 |

### TD-001 — BLOCKED (reconfirmed 2026-10-01)

| Item | Detail |
|------|--------|
| Goal | Full `src/components/subjects/TopicDetail.tsx` (~55KB) on main with PA-002 hardens |
| Main today | Still **PLACEHOLDER** (11 bytes) or stub |
| Agent limit | GitHub Contents / push_files path cannot deliver the full ~55KB TSX payload reliably |
| Build safety | `scripts/restore-topic-detail.mjs` hybrid still materializes from `bbc15cc` + hardens before `tsc` |
| Unblock | **Human local git push** (required) |

```bash
git checkout main && git pull
curl -sL "https://raw.githubusercontent.com/coolnaveen99/codepackr-law/bbc15ccfe68dc7b8f331abb6c31f80496806b951/src/components/subjects/TopicDetail.tsx" \
  -o src/components/subjects/TopicDetail.tsx
node scripts/restore-topic-detail.mjs
# expect: full source / assembled / or restored with hardens
git add src/components/subjects/TopicDetail.tsx
git commit -m "fix(td-001): commit full TopicDetail.tsx source on main"
git push origin main
```

After push, confirm file size > 20KB and contains `TopicDetailProps` + `always surface canonical graph`, then mark TD-001 **COMPLETED**.

## Next READY

**PH3-020** — Expand Workbench form (court level, date range, Act, section UI fields).
