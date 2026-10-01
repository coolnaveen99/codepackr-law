# ContentRepository Foundation

This directory is the application-side boundary for canonical legal content.

## Flow

```text
TopicDetail → ContentGateway → ContentRepository → Manifest → Canonical entity
                                    ↓
                         (optional) relationship-index
                                    ↓
                         relatedTopics / judgments / …
```

During migration, `ContentGateway` falls back to the existing topic loader (`LegacyTopicRepository`) when the canonical record is missing or not published.

## Configuration

Set `VITE_LEGAL_CONTENT_BASE_URL` to the deployed read-only base URL that serves the `legal-content` repository's published manifest and entity files.

Default (development / raw GitHub):

```text
https://raw.githubusercontent.com/coolnaveen99/legal-content/main
```

## Parity checks

```bash
npm test                          # unit + live gateway tests (needs network)
node scripts/parity-legal-content.mjs
```

## Relationships (Phase 2)

Canonical entities reference each other by **immutable IDs** only.

Gateway helpers:

- `getCanonicalEntity(id)`
- `getRelatedEntityIds(id, field?)`
- `getRelatedTopicIds(id)`

Do **not** fetch raw GitHub trees from UI components. Always go through this gateway.

## ID / path notes

- Canonical ID: `topic:india:${subjectSlug}-${topicId}` (matches app catalog slug).
- Files may live under a plural directory (e.g. `topics/torts/…` for slug `tort`); resolution prefers the **manifest path**, then directory aliases.

## Mapping

Canonical topic records use `overview` / `sections`. The live topic page still expects `TopicContent.study`.
`mapCanonicalTopicToLegacy` performs that conversion. If the canonical record already embeds a `study` field, that field wins.

Unpublished or missing canonical records fall back to `LegacyTopicRepository`. Missing content is never synthesised by the gateway.
