# PA-005 — Static / CDN Mirror Evaluation

**Task:** Evaluate static/CDN mirror for canonical `legal-content` delivery  
**Repos:** `coolnaveen99/codepackr-law` + `coolnaveen99/legal-content`  
**Owner role:** Solution Architect  
**Date:** 2026-10-01  
**Dependency:** PA-003 COMPLETED

## Objective

Decide whether production should keep reading canonical JSON from GitHub raw, or introduce a static/CDN mirror, without changing content ownership (`legal-content` remains the source of truth).

## Current delivery (baseline)

| Item | Value |
|------|--------|
| Base URL (default) | `https://raw.githubusercontent.com/coolnaveen99/legal-content/main` |
| App override | `VITE_LEGAL_CONTENT_BASE_URL` |
| Consumer | `CanonicalContentRepository` → manifest path → entity JSON |
| CORS | `access-control-allow-origin: *` (measured) |
| Cache-Control | `max-age=300` (5 minutes) |
| Content-Type | `text/plain; charset=utf-8` (JSON still parses via `response.json()`) |
| x-cache | HIT observed on repeat fetches |

### Latency sample (2026-10-01, agent network)

| Resource | Size | TTFB (approx) |
|----------|------|----------------|
| content-manifest.json | ~192 KB | 32–57 ms |
| relationship-index.json | ~252 KB | ~34 ms |
| topics/pil/locus-standi.json | ~1.5 KB | ~71 ms |
| topics/cpc/s-32.json | ~7.7 KB | ~78 ms |

**Conclusion for baseline:** Acceptable for current corpus size and client-side lazy loads. Not a measured production outage driver.

## Options evaluated

### Option A — Status quo (GitHub raw on `main`)

**Pros:** Zero extra infrastructure; tracks validated `main` after CI; CORS works; matches ContentGateway default.  
**Cons:** Couples app to GitHub raw; 5-minute cache; `text/plain`; floating `main` (no pin).  
**Fit:** Best default **now**.

### Option B — jsDelivr / GitHub CDN

```text
https://cdn.jsdelivr.net/gh/coolnaveen99/legal-content@main/manifests/content-manifest.json
```

Or pin `@<commitSha>` / tag.

**Pros:** Global CDN; switch via env only.  
**Cons:** Propagation delay; third-party dependency; pinning needs release discipline.  
**Fit:** Strong **low-cost upgrade** if raw GitHub degrades.

### Option C — GitHub Pages from `legal-content`

**Pros:** First-party GitHub hosting.  
**Cons:** Pages not enabled today; needs validate-then-publish workflow; still GitHub-dependent.  
**Fit:** Reasonable **medium-term** first-party public origin.

### Option D — Vercel / Cloudflare static mirror

**Pros:** Same edge as app; controlled cache headers; pin production to content SHA; custom domain.  
**Cons:** Second project; must deploy only after CI green; stale-mirror risk; ops overhead.  
**Fit:** Best when **SLA / pin-to-SHA** required.

### Option E — Bundle corpus into app build

**Rejected** — violates canonical/app separation (copilot §17).

## Recommendation

| Horizon | Decision |
|---------|----------|
| **Immediate** | **Keep Option A** — GitHub raw `main`. |
| **If raw degrades** | **Option B (jsDelivr)** via `VITE_LEGAL_CONTENT_BASE_URL`. |
| **When release pin / SLA** | **Option D** or **Option C** after CI-green publish. |
| **Do not** | Bundle full corpus into `codepackr-law`. |

### Operational rules if/when a mirror is added

1. Source of truth remains `legal-content` git + CI validation.
2. Mirror publishes only after `validate-content` green.
3. Prefer pin of content SHA for production.
4. App uses ContentGateway; only base URL changes.
5. Parity script already accepts `LEGAL_CONTENT_BASE_URL`.
6. Rollback: point env back to known-good GitHub raw SHA.

### Non-goals for PA-005

- Implementing a mirror (evaluation only).
- Changing ContentGateway contracts.
- Legacy removal (PA-004).

## Decision record

| Field | Value |
|-------|--------|
| Evaluation status | **COMPLETE** |
| Selected near-term path | **Option A (status quo)** |
| Escalation path | Option B → Option D/C |
| Implementation ticket | **PA-005b BACKLOG** (not auto-started) |
