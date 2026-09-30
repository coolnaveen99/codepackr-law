# ContentRepository Foundation

This directory is the application-side boundary for canonical legal content.

## Flow

`TopicDetail → ContentGateway → ContentRepository → canonical legal-content`

During migration, `ContentGateway` falls back to the existing topic loader.

## Configuration

Set `VITE_LEGAL_CONTENT_BASE_URL` to the deployed read-only base URL that serves the `legal-content` repository's published manifest and entity files.

The current default is `/legal-content` so the application can use a same-origin deployment later. A Git repository URL is not itself a runtime content API.

## Rules

- UI components must not fetch raw legal-content files directly.
- Use `ContentGateway` or the repository abstraction.
- Canonical content is selected from the published manifest.
- Missing canonical content falls back to legacy content during migration.
- Do not remove the legacy loader until migration parity is verified.
