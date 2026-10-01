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

During migration, `ContentGateway` falls back to the existing topic loader.

## Configuration

Set `VITE_LEGAL_CONTENT_BASE_URL` to the deployed read-only base URL that serves the `legal-content` repository's published manifest and entity files.

The current default is the GitHub raw `main` tree for `coolnaveen99/legal-content`. A Git repository URL is not itself a runtime content API unless it serves static JSON paths as above.

## Relationships (Phase 2)

Canonical entities reference each other by **immutable IDs** only (`topic:india:…`, `judgment:india:…`, …).

Gateway helpers:

- `getCanonicalEntity(id)` — load any published entity via the manifest path
- `getRelatedEntityIds(id, field?)` — outbound edges from `relationship-index.json` when present, else from the entity body
- `getRelatedTopicIds(id)` — `relatedTopics` only

Do **not** fetch raw GitHub trees from UI components. Always go through this gateway.

## Mapping

Canonical topic records use `overview` / `sections`. The live topic page still expects `TopicContent.study`.
`mapCanonicalTopicToLegacy` performs that conversion. If the canonical record already embeds a `study` field, that field wins.

Unpublished or missing canonical records fall back to `LegacyTopicRepository`. Missing content is never synthesised by the gateway.
