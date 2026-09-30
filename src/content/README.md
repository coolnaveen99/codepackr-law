# ContentRepository Foundation

This directory is the application-side boundary for canonical legal content.

## Flow

`TopicDetail → ContentGateway → ContentRepository → canonical legal-content`

During migration, `ContentGateway` falls back to the existing topic loader.

## Configuration

Set `VITE_LEGAL_CONTENT_BASE_URL` to the deployed read-only base URL that serves the `legal-content` repository's published manifest and entity files.

The current default is `/legal-content`. A Git repository URL is not itself a runtime content API.

## Mapping

Canonical topic records use `overview` / `sections`. The live topic page still expects `TopicContent.study`.
`mapCanonicalTopicToLegacy` performs that conversion. If the canonical record already embeds a `study` field, that field wins.

Unpublished or missing canonical records fall back to `LegacyTopicRepository`. Missing content is never synthesised by the gateway.
