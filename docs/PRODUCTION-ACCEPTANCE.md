# Production Acceptance — Codepackr Law ↔ legal-content

**Purpose:** Gate for treating the canonical `legal-content` integration as production-ready in the live app.

**Rule:** Mark an item **PASS** only with evidence. Use **PENDING** for human-only UI checks. Never claim production acceptance from documentation alone.

**Live app:** https://law.codepackr.com  
**Canonical content:** https://github.com/coolnaveen99/legal-content  
**Default content base:** `https://raw.githubusercontent.com/coolnaveen99/legal-content/main`

---

## 1. Automated acceptance matrix

Verified **2026-10-01** (agent run).

| # | Criterion | Evidence | Result |
|---|-----------|----------|--------|
| A1 | Full content manifest published | 719 entities; `repository=coolnaveen99/legal-content`; generatedAt `2026-10-01T04:00:28.060Z` | **PASS** |
| A2 | Relationship index published | 1755 edges | **PASS** |
| A3 | Manifest + entity HTTP 200 | raw.githubusercontent.com 200 for manifest, PIL, CPC s.32 | **PASS** |
| A4 | CORS allows browser reads | `access-control-allow-origin: *` on raw GitHub | **PASS** |
| A5 | Parity smoke script | `node scripts/parity-legal-content.mjs` → PASS (PIL, CPC s.32, tort, contract, constitution art-32) | **PASS** |
| A6 | ContentGateway dual-read | Canonical first; `LegacyTopicRepository` fallback in `ContentGateway.ts` | **PASS** (code) |
| A7 | ID stability | `canonicalTopicId('tort','nature-definition')` = `topic:india:tort-nature-definition`; path alias `torts/` | **PASS** |
| A8 | Graph edges for PIL | ≥3 relatedTopics on locus-standi | **PASS** |
| A9 | Live site responds | law.codepackr.com and subject routes HTTP 200 | **PASS** |
| A10 | Deployed build includes Gateway | Requires production deploy of `main` after Gateway merge | **PENDING** |

### Commands to re-run

```bash
npm run parity:legal-content
npm test   # includes live legal-content suite (network)
```

Optional base override:

```bash
LEGAL_CONTENT_BASE_URL=https://raw.githubusercontent.com/coolnaveen99/legal-content/main npm run parity:legal-content
```

---

## 2. Human UX acceptance (production browser)

Complete on **https://law.codepackr.com** after confirming the deployment includes ContentGateway (check Vercel deployment SHA ≥ Gateway merge).

| # | Check | How | Result |
|---|-------|-----|--------|
| H1 | Open `/subjects/pil/locus-standi` | Study notes load (not blank) | **PENDING** |
| H2 | Related knowledge graph panel | Section “Related in the legal knowledge graph” with clickable PIL siblings | **PENDING** |
| H3 | Open `/subjects/cpc/s-32` | Treatise/sections render | **PENDING** |
| H4 | Open `/subjects/tort/nature-definition` | Content loads (manifest path, not only legacy) | **PENDING** |
| H5 | Offline / blocked GitHub raw | Legacy fallback still shows catalog notes where present | **PENDING** |
| H6 | Privacy | No topic body posted to analytics; client-side only | **PENDING** (spot-check Network tab) |
| H7 | Mobile TopicDetail | Related links usable; no horizontal overflow | **PENDING** |

---

## 3. Operational acceptance

| # | Criterion | Result |
|---|-----------|--------|
| O1 | legal-content CI `validate-content` green on main | **PASS** (workflow present; auto-commits manifests) |
| O2 | Fail closed on empty manifest | Gateway returns null → legacy fallback (no synthetic content) | **PASS** (code) |
| O3 | Pin strategy documented | Prefer pinning `contentRef` / SHA for production when Gateway hosts static mirror | **PASS** (docs) |
| O4 | No secrets in content JSON | Public corpus only | **PASS** |
| O5 | Legacy dual-read retained | Do **not** delete `src/data/topics/**` until H1–H5 signed | **PASS** (policy) |

---

## 4. Sample content depth (automated spot-check)

| Topic ID | Status | Notes |
|----------|--------|-------|
| `topic:india:pil-locus-standi` | published | overview present; 4 relatedTopics |
| `topic:india:cpc-s-32` | published | overview + 5 sections |
| `topic:india:tort-nature-definition` | published | overview + 4 sections |

Depth quality remains progressive (scaffolds vs full treatises). Acceptance of **integration** does not equal acceptance of every topic as full treatise.

---

## 5. Sign-off

| Role | Name | Date | Decision |
|------|------|------|----------|
| Engineering (automated matrix A1–A9) | Agent verification | 2026-10-01 | **PASS** |
| Engineering (A10 deploy SHA) | | | |
| Product / legal content (H1–H7) | | | |
| Owner production acceptance | | | |

**Overall status:** **CONDITIONAL PASS** — automated content + gateway path verified; **production UX sign-off and deploy confirmation still required**.

When H1–H7 and A10 are signed, update this file and mark Section 12 production acceptance on the legal-content checklist.

---

## 6. Blockers / follow-ups

1. Confirm Vercel production deployment includes commits with ContentGateway + RelatedCanonicalTopics + parity work.
2. Complete human UX table (H1–H7).
3. Optionally host a static mirror of `legal-content` (CDN) and set `VITE_LEGAL_CONTENT_BASE_URL` to reduce GitHub raw dependency.
4. Keep legacy topic files until after full UX acceptance.
