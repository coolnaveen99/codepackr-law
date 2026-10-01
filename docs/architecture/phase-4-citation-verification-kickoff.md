# PH4-001 — Phase 4 Citation Verification & Authority Network Architecture Kickoff

**Task ID:** PH4-001  
**Status:** COMPLETED (architecture kickoff)  
**Date:** 2026-10-01  
**Owner:** Solution Architect / Product Coordination  
**Repositories:** `coolnaveen99/codepackr-law` (app) · `coolnaveen99/legal-content` (canonical authorities)  
**Prerequisite:** Phase 3 exit **CLOSED** (`PH3-100` Exit Audit)  
**Roadmap reference:** `docs/law-platform-enhancement-roadmap.md` § 9 (Phase 4 — Citation Verification — P0)

---

## 1. Purpose of this kickoff

This document initiates **Phase 4 (Citation Verification & Authority Network)**. It defines the architectural contract, data models, verification rules, backlog ticket decomposition, and exit-gate criteria.

As with `PH3-001`, this architecture kickoff is a governance deliverable and contract; product scope is delivered through the individual implementation tickets (`PH4-010` through `PH4-100`).

---

## 2. Strategic Goal

Make legal citation verification transparent and dependable by **making verification status visible rather than hiding uncertainty**.

The Citation Verifier transforms arbitrary citation strings, case names, and citations extracted from full legal documents into structured, verified authority records with explicit verification badges and direct navigation into authoritative repositories:

```
Pasted Citations / Document Text / Workbench Handoff
                         │
                         ▼
             [ Extended Citation Parser ]
      (SCC · AIR · SCC OnLine · Neutral INSC/HC · Case Names)
                         │
                         ▼
             [ Verification Engine ]
  Cross-reference against Canonical Corpus & Landmark Database
                         │
                         ▼
        [ Explicit 5-Tier Verification Model ]
   VERIFIED · PARTIAL · NOT_VERIFIED · CONFLICT · USER_PROVIDED
                         │
                         ▼
      [ Authority Network & Source Deep Links ]
  (Supreme Court e-SCR · eCourts · High Courts · India Code)
                         │
                         ▼
    [ Roundtrip Integration with Research Workbench ]
```

### Cardinal Verification Rule (Roadmap § 9):
> **Never convert "not found" into "case does not exist".**
> A citation unmatched in local or canonical indices is flagged `NOT_VERIFIED` with explicit verification advice, never deemed non-existent.

---

## 3. Non-Goals (Phase 4)

Explicitly out of scope for Phase 4:
- Automated scraping or unauthorized harvesting of proprietary paywalled databases (SCC Online, Manupatra).
- Transmitting user document text or pasted citations to third-party APIs or remote analytics (strictly forbidden by § 5.5 privacy policy).
- Full judgment brief generation or holding extraction (governed under Phase 5 Judgment Analyzer).
- Automated judgment comparison or overruling prediction (governed under Phase 6 Judgment Compare).
- Server-side indexing of user citations or client legal briefs.

---

## 4. Baseline Inventory & Gap Analysis

| Asset | Location | Baseline Status | Gap for Phase 4 |
|---|---|---|---|
| Citation Parser | `src/lib/citationParser.ts` | Basic SCC & AIR regex; status `'parsed' \| 'partial' \| 'not-verified' \| 'user-provided' \| 'conflict'` | Missing neutral citations (INSC / High Courts), SCC OnLine, volume-less citations, and canonical database cross-referencing. |
| Citation Verifier UI | `src/components/tools/CitationVerifier.tsx` | Simple textarea and per-line card render | Lacks document text extraction tab, confidence breakdown dashboard, status filtering, and one-click export back to Workbench. |
| Handoff Contract | `src/lib/citationHandoff.ts` | One-way deep-link (`/tool/citation-verifier?q=...`) + session storage | Lacks structured roundtrip back to Research Workbench with updated verification statuses. |
| Judgment Corpus | `src/data/judgments/` + `legal-content` | Extensive static landmark judgments + ContentGateway manifest | Verifier does not query or match against this corpus; operates solely via regex. |
| Authority Links | None | Static hint text ("open SCC Online or court site") | No deterministic deep-link resolution to e-SCR, SCI official portal, or High Court neutral citation registers. |

---

## 5. Target Architecture

### 5.1 Verification Status Model (Strict Roadmap § 9 Alignment)

Every citation evaluated by the engine is assigned one of five immutable statuses:

1. **`VERIFIED`**: Reliable source located in canonical index or landmark repository; case name, year, reporter, and court agree.
2. **`PARTIAL`**: Partial metadata match (e.g. case name matches landmark but citation volume/year differs, or citation matches but party names differ slightly). Manual lawyer review required.
3. **`NOT_VERIFIED`**: No reliable record located in local or canonical indices. Explicit notice: *Unverified in local index. This does not indicate non-existence. Verify via official court records.*
4. **`CONFLICT`**: Multiple distinct decisions or conflicting citations match the query with mutually incompatible court or year data.
5. **`USER_PROVIDED`**: Case name or citation extracted from user documents without independent structural reporter match.

### 5.2 Extended Input Support

The engine supports five primary input styles:
1. **SCC-Style**: `(2020) 5 SCC 1`, `[1973] 4 SCC 225`, `2018 1 SCC 22`
2. **AIR-Style**: `AIR 1978 SC 597`, `AIR 1973 SC 1461`, `AIR 2021 Bom 123`
3. **SCC OnLine**: `2021 SCC OnLine SC 345`, `2022 SCC OnLine Del 108`
4. **Neutral Citations (India)**:
   - Supreme Court: `2023 INSC 123`, `2024 INSC 45`
   - High Courts: `2023:DHC:1234`, `2024:BOM:567`, `2022:KER:890`
5. **Document Extraction**: Regex-driven scanning of continuous text (briefs, memos, judgments) to automatically identify and isolate all embedded citations and case references.

### 5.3 Data Schemas (`src/lib/citation/types.ts`)

```typescript
export type CitationStatus =
  | 'verified'
  | 'partial'
  | 'not-verified'
  | 'conflict'
  | 'user-provided'

export type CitationStyle =
  | 'scc'
  | 'air'
  | 'scc-online'
  | 'neutral'
  | 'name-only'
  | 'unknown'

export interface MatchedRecord {
  id: string
  caseName: string
  court: string
  year: number | string
  citation: string
  source: 'canonical' | 'landmark' | 'manual'
  canonicalEntityId?: string
  confidence: number // 0.0 - 1.0
  officialUrl?: string
}

export interface VerifiedCitation {
  raw: string
  normalizedCitation?: string
  style: CitationStyle
  caseName?: string
  court?: string
  year?: string
  volume?: string
  reporter?: string
  page?: string
  neutralCourt?: string
  neutralIndex?: string
  status: CitationStatus
  confidence: number
  matchedRecord?: MatchedRecord
  notes: string[]
  officialSources: Array<{
    name: string
    url: string
    type: 'official-court' | 'india-code' | 'escr' | 'open-portal'
  }>
}
```

### 5.4 Privacy & Ethics Safeguards (§ 5.5)
- All parsing and verification run 100% on the client device (in-memory & local cache).
- No legal brief contents, uploaded documents, or user search queries are dispatched to external telemetry or third-party servers.
- Roundtrip hand-offs between Citation Verifier and Research Workbench operate via safe session-storage keys or sanitized query parameters with zero sensitive client facts.

---

## 6. Phased Implementation Backlog

The following sprint tickets represent the executable sequence for Phase 4:

| Ticket ID | Scope / Deliverable | Priority |
|---|---|---|
| **PH4-001** | Architecture kickoff & technical contract (this document) | P0 |
| **PH4-010** | Extended parser for SCC OnLine, Neutral citations (INSC/HC), and volume-less citations | P0 |
| **PH4-020** | Verification engine matching against canonical manifest & `ALL_JUDGMENTS` | P0 |
| **PH4-030** | Document citation extractor (multi-citation scanner for pasted briefs & judgment text) | P0 |
| **PH4-040** | Authority network & official portal link generator (e-SCR, SCI, High Courts, India Code) | P1 |
| **PH4-050** | Citation Verifier UI overhaul: tabs, status filtering, verification dashboard, & Workbench roundtrip | P1 |
| **PH4-100** | Phase 4 exit audit (evaluation against criteria V1–V10) | P0 |

---

## 7. Phase 4 Exit Criteria (Product)

Phase 4 may be accepted and closed only when all of the following criteria are validated:

- **V1 (Input Diversity):** Parser accurately handles SCC, AIR, SCC OnLine, and Indian Neutral Citations (INSC, High Courts).
- **V2 (Document Extraction):** Text extractor correctly isolates multiple citations from continuous legal text (e.g. sample judgment extract).
- **V3 (Verification Status Model):** Implements explicit 5-tier status model (`VERIFIED`, `PARTIAL`, `NOT_VERIFIED`, `CONFLICT`, `USER_PROVIDED`).
- **V4 (Corpus Matching):** Accurately correlates citations and case names against landmark judgments and canonical legal content.
- **V5 (Anti-Hallucination / Non-Existence Rule):** Guarantees unmatched citations are labeled `NOT_VERIFIED` with verification advice, never claiming the case does not exist.
- **V6 (Official Authority Links):** Generates functional official deep-links to e-SCR, Supreme Court portal, or High Court neutral citation registers.
- **V7 (Workbench Roundtrip):** Seamless hand-off from Research Workbench → Verifier → Return with updated verification status tags.
- **V8 (Privacy § 5.5):** 100% client-side operation; zero substantive legal text or document snippets transmitted to network.
- **V9 (Mobile & Accessibility):** Responsive UI without horizontal overflow on mobile viewports; touch targets >= 44px.
- **V10 (Quality Baseline):** 100% test pass rate on automated suites; clean `npm run lint` / `tsc --noEmit`.

---

## 8. Kickoff Acceptance (PH4-001)

| Criterion | Result |
|---|---|
| Phase 3 closed before Phase 4 start | **PASS** (`PH3-100` Exit Audit, 2026-10-01) |
| Architecture document published on main | **PASS** (this file) |
| Explicit 5-tier status model defined | **PASS** (§ 5.1) |
| Phased implementation backlog scheduled | **PASS** (`PH4-010`–`PH4-100`) |
| Non-goals and privacy constraints enforced | **PASS** (§ 3, § 5.4) |
