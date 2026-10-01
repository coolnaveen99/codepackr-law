# Sprint Control Board — CodePackr Law

**Owner:** Product / Architecture coordination  
**Applies to:** `coolnaveen99/codepackr-law` + `coolnaveen99/legal-content`  
**Roadmap position:** Phase 2 — **CLOSED** · Phase 3 implementation started  
**Updated:** 2026-10-01 (PH3-040 COMPLETED — research note polish / export)

## Verified completed

| ID | Result | Evidence |
|---|---|---|
| LC-001–LC-007 | **COMPLETED** | Prior evidence |
| PA-001–PA-005 | **COMPLETED** | Prior board + docs |
| PH3-001 | **COMPLETED** | Architecture kickoff doc |
| PH3-010 | **COMPLETED** | `src/lib/researchSession.ts` + Workbench persistence |
| TD-001 | **COMPLETED** | Full `TopicDetail.tsx` on main |
| PH3-020 | **COMPLETED** | Workbench form: court level, date range, subject, Act, section |
| PH3-030 | **COMPLETED** | Authority matrix: date, paragraph, treatment, source + note + tests |
| PH3-040 | **COMPLETED** | Research note polish: clearer section labels + Download `.md` |

## Current sprint backlog

| ID | Work | Status | Priority |
|---|---|---|---|
| PH3-010 | ResearchSession types + localStorage | **COMPLETED** | P0 |
| PH3-020 | Expand Workbench form fields | **COMPLETED** | P0 |
| PH3-030 | Authority matrix column expansion | **COMPLETED** | P0 |
| PH3-040 | Research note polish / export | **COMPLETED** | P0 |
| PH3-050 | ContentGateway authority suggestions | **BACKLOG** | P0 |
| PA-005b | CDN mirror implementation | **BACKLOG** | P2 |

### PH3-030 — COMPLETED (2026-10-01)

| Check | Result |
|-------|--------|
| Decision date field | **Yes** (`type="date"`) |
| Paragraph / pin cite | **Yes** |
| Treatment select | **Yes** (followed / applied / distinguished / overruled / doubted / cited / persuasive) |
| Source URL/reporter | **Yes** |
| Note includes new columns | **Yes** |
| Unit tests | `tests/research-session.test.ts` (PH3-020 + PH3-030) |
| Privacy | Browser-local only |

### PH3-040 — COMPLETED (2026-10-01)

| Check | Result |
|-------|--------|
| Clearer section labels | **Yes** (Matter filters, Authority matrix, Counter-authorities and contrary views) |
| Structured authority blocks | **Yes** (markdown `###` + labelled bullets) |
| Download `.md` | **Yes** (`downloadResearchNoteMarkdown`) |
| Filename helper | **Yes** (`researchNoteFilename`) |
| Unit tests | `tests/research-session.test.ts` (PH3-020 + 030 + 040) |
| Privacy | Browser-local only; export is user-initiated download |

## Next READY

**PH3-050** — ContentGateway authority suggestions (BACKLOG until assigned; still P0 on roadmap).

Do not start PH3-050 without product assignment. Residual READY items: none at P0 except PH3-050 when unblocked.
