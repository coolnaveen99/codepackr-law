# Phases 21–30 — Implementation Record

**Date:** 2026-09-30  
**Branch:** main

## Phase 21 — PWA / Offline

- `public/manifest.webmanifest`, `public/sw.js` (shell cache only)
- `src/lib/offline.ts` — register SW, connectivity subscription
- `OfflineBanner` — offline warning (cached ≠ current law)
- Wire: register SW + banner in `App.tsx`; link manifest from `index.html` if not present

## Phase 22 — Analytics without legal-data surveillance

- `src/lib/analytics.ts` — aggregate tool opens / workflow keys only
- Tool: `/tool/usage-metrics` — view / clear local aggregates
- Policy: never store query text, case facts, notes, drafts

## Phase 23 — Testing strategy

- Extended `tests/phase21-30.test.ts` for sanitize, draft tiers, court profiles
- Existing scripts: `lint`, `checklist`, `audit`, `build`, `test`

## Phase 24 — SEO

- Existing `setPageMeta` already covers tools with title, description, canonical, OG, breadcrumbs
- Avoid thin URL explosion

## Phase 25 — Draft catalogue governance

- `src/data/draftTiers.ts` — Tier 1–4 definitions for Legal Draft Studio

## Phase 26 — Court / State configuration

- `src/data/courtProfiles.ts` — seed StateProfile + CourtProfile
- Tool: `/tool/court-forum-directory`

## Phase 27 — Senior counsel research mode

- Tool: `/tool/research-bundle` — assemble + Markdown export

## Phase 28 — Neutral analysis mode

- Tool: `/tool/neutral-analysis` — allowed vs forbidden utilities

## Phase 29 — Security

- `src/lib/sanitize.ts` — escapeHtml, stripTags, text limits, blocked extensions
- `docs/security-baseline.md`

## Phase 30 — Performance

- `docs/performance-baseline.md` — lazy-load, memoize, virtualize guidance

## Honest limits

- SW caches app shell only; no pretence that offline cache is current primary law
- Analytics are local aggregates only
- Court profiles are a seed set, not national completeness
- Research bundle is user-assembled text export, not automated authority scoring
