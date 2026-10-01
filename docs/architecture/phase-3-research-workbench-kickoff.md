# PH3-001 — Phase 3 Legal Research Workbench Architecture Kickoff

**Task ID:** PH3-001  
**Status:** COMPLETED (architecture kickoff)  
**Date:** 2026-10-01  
**Owner:** Solution Architect  
**Repositories:** `coolnaveen99/codepackr-law` (app) · `coolnaveen99/legal-content` (canonical authorities)  
**Prerequisite:** Phase 2 exit **CLOSED** (PA-003)

---

## 1. Purpose of this kickoff

This document **starts** Phase 3. It is **not** a claim that the full Research Workbench product vision is shipped.

It records:

- strategic goal and non-goals;
- current baseline (what already exists in the app);
- target architecture;
- integration with Content Gateway / legal-content;
- privacy and verification rules;
- phased delivery backlog for implementation tickets;
- Phase 3 exit criteria.

Implementation work must be opened as separate READY sprint tasks (e.g. `PH3-010` …). Do not treat this kickoff alone as Phase 3 complete.

---

## 2. Strategic goal

Make the **Legal Research Workbench** a flagship, privacy-first tool that moves a user from:

```
Research Question
      → Issue extraction
      → Relevant acts / sections
      → Search terms
      → Case candidates
      → Authority verification
      → Case / authority matrix
      → Structured research note
```

**without** manually re-copying the same facts across multiple CodePackr tools.

Roadmap reference: `docs/law-platform-enhancement-roadmap.md` § Phase 3.

---

## 3. Non-goals (Phase 3)

Explicitly out of scope for Phase 3 implementation waves:

- Predicting case outcomes, judge bias, or “winner” scores;
- Silent server-side storage of research notes or case facts;
- Replacing official reporters or claiming exhaustive case coverage;
- Mass editorial rewriting of the legal library (still deferred);
- Removing legacy topic modules (PA-004 decision: dual-read retained);
- Full Phase 4 Citation Verifier product (may **integrate**, not subsume);
- Cloud sync / multi-user workspaces (Phase 32 policy only).

---

## 4. Baseline inventory (as of 2026-10-01)

| Asset | Location | Capability |
|-------|----------|------------|
| Tool registry | `src/data/tools.ts` | `research-workbench` featured, P0 badge |
| UI shell | `src/components/tools/ResearchWorkbench.tsx` (~173 LOC) | Local question, jurisdiction, issues, authority rows, markdown research note |
| Route | `/tool/research-workbench` via `App.tsx` | Live |
| Related tools | Citation Verifier, Judgment Analyzer/Compare, Case Prep | Separate tools; weak data hand-off today |
| Canonical content | ContentGateway + `legal-content` | Topics, provisions, relationships, judgments (limited) |
| Export helper | `ResearchBundleExport.tsx` | Bundle export patterns (reuse where possible) |

### Gap vs roadmap Phase 3

| Roadmap capability | Baseline | Gap |
|--------------------|----------|-----|
| Structured research question fields (court level, date range, Act, section) | Partial (question, jurisdiction, subject) | Add court level, date range, Act, section |
| Issue decomposition (procedural, evidence, limitation) | Partial (primary/secondary/statutory) | Expand issue dimensions |
| Authority matrix (treatment, paragraph, source, full status model) | Partial rows | Align columns + VERIFIED/PARTIAL/NOT VERIFIED/CONFLICT/USER-PROVIDED |
| Research note sections 1–8 | Partial (note generator) | Add short answer, statutory framework, counter-authorities checklist completeness |
| Cross-tool hand-off | Manual | Shared research-session model + deep links |
| ContentGateway lookup of provisions/topics/judgments | Not wired into workbench | Suggest authorities from canonical graph |
| AI issue suggestions | None | Optional later; must be labelled suggestions only |

---

## 5. Target architecture

### 5.1 Principles

1. **Client-side first** — research session state stays in the browser (`localStorage` / session); no substantive legal text to analytics.
2. **Canonical-assisted, not canonical-only** — suggestions and links come from ContentGateway / legal-content; user-entered authorities remain valid with `USER-PROVIDED` status.
3. **Verification visible** — never convert “not found” into “does not exist”.
4. **Composable tools** — Workbench is the **orchestration surface**; Citation Verifier / Judgment Analyzer remain specialized modules invoked with payload hand-off.
5. **Existing-first** — extend `ResearchWorkbench.tsx` and shared types; do not create a second competing research UI.

### 5.2 Logical components

```
┌─────────────────────────────────────────────────────────┐
│  Research Workbench UI (/tool/research-workbench)        │
├──────────────┬──────────────────┬───────────────────────┤
│ Question &   │ Issue            │ Authority Matrix      │
│ filters      │ Decomposition    │ + verification status │
├──────────────┴──────────────────┴───────────────────────┤
│ Research Note generator (structured markdown / export)   │
└──────────────────────────┬──────────────────────────────┘
                           │
         ┌─────────────────┼─────────────────┐
         ▼                 ▼                 ▼
  ContentGateway    Citation Verifier   Judgment tools
  (topics/provisions (Phase 4 module)   (Analyzer/Compare)
   /relationships)
         │
         ▼
  legal-content (canonical JSON)
```

### 5.3 Proposed shared session model (app-local)

```ts
// Conceptual — implement under src/lib/research/ or src/content/researchTypes.ts

export type VerificationStatus =
  | 'verified'
  | 'partial'
  | 'not-verified'
  | 'conflict'
  | 'user-provided'
  | 'needs-review'

export interface ResearchQuestion {
  question: string
  jurisdiction: string
  courtLevel?: string
  dateFrom?: string
  dateTo?: string
  subjectSlug?: string
  act?: string
  section?: string
}

export interface IssueSet {
  primary: string
  secondary: string[]
  statutory: string[]
  procedural: string[]
  evidence: string[]
  limitation: string[]
}

export interface AuthorityRow {
  id: string
  caseName: string
  court: string
  date?: string
  citation: string
  statute: string
  issue: string
  holding: string
  paragraph?: string
  treatment?: string
  source?: string
  canonicalEntityId?: string // e.g. judgment:… / topic:india:…
  verification: VerificationStatus
}

export interface ResearchSession {
  version: 1
  updatedAt: string
  question: ResearchQuestion
  issues: IssueSet
  authorities: AuthorityRow[]
  analysis: string
  counterAuthorities: string
  unresolved: string
  shortAnswer?: string
}
```

Persistence: `localStorage` key e.g. `cp-law-research-session-v1` with export/import JSON and markdown note download (reuse patterns from `ResearchBundleExport`).

### 5.4 ContentGateway integration (read-only assists)

| User action | Gateway use |
|-------------|-------------|
| Enter Act / section | Resolve provision/topic candidates via manifest + `getTopic` / provision IDs |
| “Suggest related topics” | `getRelatedTopicIds` / relationship index for selected canonical topic |
| Attach library topic | Store `canonicalEntityId` + href via `hrefForCanonicalTopicId` |
| Judgment link | Only when a published judgment entity exists; else leave USER-PROVIDED |

No write path from the Workbench into `legal-content` (publishing remains Admin / content repo workflow).

### 5.5 Privacy

- No Clarity/GTM payloads may include question text, notes, or authority tables (align with PA-002 H6).
- No research session in URL query strings.
- Export is explicit user download only.

### 5.6 AI (optional, later wave)

If issue suggestions are added:

- Label every AI line as **Suggestion — verify before reliance**;
- Never auto-fill verification status to VERIFIED;
- Prefer local/deterministic extraction before any remote model;
- Remote AI requires a separate privacy design review (roadmap § 14.7).

---

## 6. Phased implementation backlog (post-kickoff tickets)

These are **proposed** follow-ups. They become executable only when moved to READY on the Sprint Control Board.

| ID (proposed) | Work | Priority |
|---------------|------|----------|
| PH3-010 | Extract shared `ResearchSession` types + localStorage persistence | P0 |
| PH3-020 | Expand Workbench form: court level, date range, Act, section | P0 |
| PH3-030 | Authority matrix columns + full verification status model | P0 |
| PH3-040 | Research note sections aligned to roadmap (short answer, statutory framework, counter-authorities) | P0 |
| PH3-050 | ContentGateway “suggest topics/provisions” panel (read-only) | P0 |
| PH3-060 | Deep-link hand-off to Citation Verifier with citation payload | P1 |
| PH3-070 | Deep-link hand-off to Judgment Analyzer with pasted text slot | P1 |
| PH3-080 | Import/export session JSON + markdown/DOCX note polish | P1 |
| PH3-090 | Mobile UX pass for matrix + note | P1 |
| PH3-100 | Phase 3 exit audit (workflow: question → note without re-copy) | P0 |

Do not invent implementation in this kickoff beyond architecture.

---

## 7. Phase 3 exit criteria (product)

Phase 3 may be declared complete only when:

1. User can complete question → issues → authority matrix → research note in one tool session;
2. Session survives refresh (local persistence) and can be exported;
3. Verification statuses follow the explicit model; “not found” ≠ “does not exist”;
4. At least one ContentGateway-assisted authority/topic suggestion path works in production;
5. Hand-off to Citation Verifier **or** documented interim manual path with one click;
6. Privacy: no substantive research text in analytics;
7. Mobile usable without horizontal overflow on the primary workflow;
8. Exit audit document recorded; Sprint Board updated.

---

## 8. Risks and dependencies

| Risk | Mitigation |
|------|------------|
| Thin judgment corpus in legal-content | Allow USER-PROVIDED rows; grow judgments in content repo separately |
| Catalog/canonical alias gaps | Reuse ContentRepository aliases; do not block Workbench on full migration |
| Duplicate research UIs | Single `ResearchWorkbench` entry; extend in place |
| Scope creep into Case Prep | Case Prep remains hearing-focused; share types only where useful |

---

## 9. Kickoff acceptance (PH3-001)

| Criterion | Result |
|-----------|--------|
| Phase 2 closed before Phase 3 start | **PASS** (PA-003) |
| Architecture document published on main | **PASS** (this file) |
| Baseline vs roadmap gaps listed | **PASS** |
| Implementation backlog proposed (not auto-started) | **PASS** |
| Privacy / verification / non-goals stated | **PASS** |
| Full Workbench feature build in this task | **N/A** — out of scope for kickoff |

---

## 10. Board disposition

- **PH3-001** → **COMPLETED** (architecture kickoff only).
- Phase 3 product delivery → **IN PROGRESS** only when a PH3-010+ implementation task is ACCEPTED/IN PROGRESS.
- Next suggested READY candidate after board scheduling: **PH3-010** (session model) or keep **PA-005** / **TD-001** if Product prioritizes those first.
