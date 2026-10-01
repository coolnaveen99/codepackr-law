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

**Pros**
- Zero extra infrastructure
- Always tracks latest validated `main` after CI manifest commit
- CORS already works for browser
- Matches current ContentGateway default and parity scripts

**Cons**
- Couples app availability to GitHub raw availability and rate limits
- 5-minute cache; no long-lived edge cache under our control
- `content-type: text/plain` (works, not ideal)
- No explicit production pin (always floating `main`)

**Fit:** Best default **now**.

---

### Option B — jsDelivr / similar GitHub CDN (`cdn.jsdelivr.net/gh/...`)

Example pattern:

```text
https://cdn.jsdelivr.net/gh/coolnaveen99/legal-content@main/manifests/content-manifest.json
```

Or pin: `@<commitSha>` / `@v1.2.3` if tags are published.

**Pros**
- Global CDN, longer edge caching
- Still sourced from the same GitHub repo (no copy pipeline)
- Easy switch via `VITE_LEGAL_CONTENT_BASE_URL` only

**Cons**
- CDN propagation delay vs GitHub raw after push (minutes possible)
- Third-party dependency (jsDelivr uptime / policy)
- Pinning requires tag/SHA discipline the repo does not yet enforce for content releases

**Fit:** Strong **low-cost upgrade** if GitHub raw becomes slow or rate-limited. No app code change beyond env.

---

### Option C — GitHub Pages static site from `legal-content`

Publish `main` (or `gh-pages`) as `https://coolnaveen99.github.io/legal-content/`.

**Pros**
- First-party GitHub hosting; stable paths
- Can set `application/json` via proper static hosting behavior

**Cons**
- Pages not enabled today (`has_pages` unset; root 404 measured)
- Needs workflow to publish only **validated** tree (or whole repo)
- Still GitHub-dependent
- SPA vs raw file serving must be configured carefully (no rewrite that breaks `.json`)

**Fit:** Reasonable **medium-term** if we want a first-party public content origin without a second cloud vendor.

---

### Option D — Vercel (or Cloudflare) static mirror of `legal-content`

Deploy `legal-content` as a second Vercel project (or Cloudflare Pages) that serves the JSON tree; optional path prefix `https://content.law.codepackr.com/`.

**Pros**
- Same edge network as the app (Vercel)
- Full control of cache headers (`Cache-Control`, immutable for hashed paths if introduced later)
- Can pin production to a content release SHA via env
- Custom domain branding

**Cons**
- Second project to deploy and monitor
- Must sync only after CI green (hook from legal-content workflow or deploy-on-push with validate gate)
- Risk of serving stale mirror if deploy lags main
- Cost/ops overhead for a still-small public corpus

**Fit:** Best when we need **SLA, custom domain, or pin-to-SHA** for production. Not required for Phase 2 closure.

---

### Option E — Bundle selected entities into the app build

**Pros:** Offline-first for bundled set  
**Cons:** Violates §17 separation (canonical corpus must not permanently live in the app); large bundle growth  
**Fit:** **Rejected** as primary architecture.

---

## Recommendation

| Horizon | Decision |
|---------|----------|
| **Immediate (now)** | **Keep Option A** — GitHub raw `main` as default base URL. |
| **If raw GitHub degrades** | Switch production env to **Option B (jsDelivr)** with optional SHA pin; no code change required beyond `VITE_LEGAL_CONTENT_BASE_URL`. |
| **When content release process exists** | Prefer **Option D** (Vercel/Cloudflare mirror + content SHA pin) or **Option C** (GitHub Pages) with deploy-after-CI-green. |
| **Do not** | Bundle the full corpus into `codepackr-law`. |

### Operational rules if/when a mirror is added

1. **Source of truth remains** `coolnaveen99/legal-content` git history + CI validation.
2. Mirror must publish only after `validate-content` green.
3. Production should eventually **pin** a content ref (`contentRef` / SHA), not float forever on unpinned `main`.
4. App continues to use ContentGateway; only the base URL changes.
5. Parity script must accept `LEGAL_CONTENT_BASE_URL` (already does).
6. Document rollback: set env back to GitHub raw SHA known-good.

### Explicit non-goals for PA-005

- Implementing a mirror in this task (evaluation only).
- Changing ContentGateway contracts.
- Removing legacy topic files (PA-004).

## Decision record

| Field | Value |
|-------|--------|
| Evaluation status | **COMPLETE** |
| Selected near-term path | **Option A (status quo)** |
| Escalation path | Option B → Option D/C when ops demand |
| Implementation ticket | Create only when Product schedules mirror work (not auto-started) |

## Evidence appendix

- Latency and header measurements: agent probes 2026-10-01 against `raw.githubusercontent.com/coolnaveen99/legal-content/main`
- App default: `src/content/ContentGateway.ts` → `DEFAULT_LEGAL_CONTENT_BASE`
- Env documentation: `.env.example` `VITE_LEGAL_CONTENT_BASE_URL`
- GitHub Pages: not enabled for `legal-content` at audit time
