# PR-007 — Canonical Content Delivery

**Status:** IMPLEMENTED  
**Date:** 2026-10-02  
**Repositories:** `coolnaveen99/codepackr-law` + `coolnaveen99/legal-content`

## Delivery contract

`codepackr-law` consumes legal content only through `ContentGateway` → `CanonicalContentRepository` → canonical manifest/entity paths.

Default read-only origin:

```
https://raw.githubusercontent.com/coolnaveen99/legal-content/main
```

Production can override the origin with `VITE_LEGAL_CONTENT_BASE_URL` without changing application routes or content contracts.

## Guarantees added by PR-007

- A single canonical base-URL resolver is used by the gateway.
- The delivery health check validates the canonical manifest.
- Relationship-index delivery is checked.
- Manifest IDs and paths are checked for uniqueness.
- Representative entities across canonical entity types are fetched and validated.
- Existing legacy fallback remains intact as an explicit migration safety net.
- The application never fetches GitHub repository trees directly from UI components.

## Validation

```bash
npm run check:canonical-delivery
npm run parity:legal-content
npm test
npm run build
```

## Release rule

Do not bundle the canonical corpus into `codepackr-law`. The `legal-content` repository remains the canonical source of truth; delivery origin can be changed through the environment variable.

## Future mirror

A CDN/static mirror remains optional. If introduced, it must serve the same manifest/entity contract and be validated before the production environment is pointed at it.
