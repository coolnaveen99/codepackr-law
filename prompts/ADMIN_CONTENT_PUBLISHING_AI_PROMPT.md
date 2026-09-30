# CodePackr Law — Master AI Prompt: Admin Content Gateway & Publishing

You are the implementation lead for CodePackr Law.

Your job is to construct the Admin Content Gateway, Admin Portal, separate legal-content repository integration, migration pipeline and publishing workflow described in:

`docs/architecture/admin-content-publishing-architecture.md`

## Non-negotiable product principles

1. CodePackr Law is a serious digital legal library/reference system.
2. Legal content has no artificial word-count ceiling or fixed minimum.
3. Do not use `highYield` as a core legal-library importance classification.
4. Preserve and integrate the existing Sanhita Mapper.
5. Support first-class topics, provisions, judgments, comparisons, illustrations, doctrines, sources and SEO records.
6. Stable content IDs must survive file moves, repository migration and domain migration.
7. Never expose GitHub/repository write credentials to browser JavaScript.
8. Public library and Admin Portal are different trust zones.
9. Admin publishing is server-mediated, authenticated, authorized and auditable.
10. Prefer GitHub App or narrowly scoped credentials for repository writes.
11. Content must pass schema, reference, source, SEO and application validation before publication.
12. Never invent statutes, sections, case citations, quotations or paragraph numbers.
13. AI may assist drafting but must never silently convert unverified content into authoritative legal content.
14. Do not copy proprietary third-party legal content.
15. Do not hard-code `law.codepackr.com`; use configurable canonical/public/admin URLs.
16. Design for future migration to a dedicated public domain.
17. Preserve rollback capability at every migration/publishing stage.

## Mandatory workflow

Inspect -> Design -> Implement -> Validate -> Build -> Review diff -> PR -> Verify checks -> Merge only when clean -> Verify deployment.

Never claim a build, deployment or migration succeeded unless it was actually verified.

## Phase 0 — Repository discovery

Before coding:

- inspect existing `src/data/topics`;
- inspect `topicTypes.ts`;
- inspect `loadTopicContent.ts`;
- inspect subject metadata;
- inspect knowledge/reference structures;
- inspect Sanhita Mapper;
- inspect sitemap generation;
- inspect current deployment configuration;
- inspect existing authentication/deployment capabilities;
- inspect `.github/copilot-instructions.md`;
- inspect existing roadmap and content-depth instructions.

Produce a short implementation map before changing code.

## Phase 1 — Content contracts

Create or refine:

- canonical content types;
- stable ID conventions;
- source/provenance model;
- verification status;
- review lifecycle;
- comparison model;
- illustration model;
- SEO metadata model;
- content manifest;
- schema version.

Do not break existing topic content.

Create a legacy adapter if necessary.

## Phase 2 — ContentRepository abstraction

Implement:

`TopicDetail -> loadTopicContent -> ContentRepository -> manifest/shard`

The UI must not directly depend on the physical content repository.

Support:

- legacy repository adapter;
- new static/content repository adapter;
- deterministic resolution;
- missing-content handling;
- version information.

## Phase 3 — Migration tooling

Build tooling that:

- inventories current content;
- assigns/preserves stable IDs;
- exports normalized records;
- detects duplicate IDs;
- detects broken references;
- generates migration manifest;
- computes content hashes;
- supports parity comparison;
- supports rollback.

Start with one subject as a pilot.

Do not delete legacy content.

## Phase 4 — Separate content repository

Create the repository integration contract.

The application should be able to consume the content repository through a configured source.

Do not assume that a second repository can be created automatically if repository-management permissions are unavailable. In that case, implement the application-side contract and migration tooling first and report the dependency.

## Phase 5 — Secure Content Gateway

Implement the server-side boundary.

Required capabilities:

- authentication;
- role authorization;
- request validation;
- schema validation;
- repository operation authorization;
- rate limiting;
- audit events;
- safe error handling.

Never put GitHub tokens in client code.

Prefer GitHub App credentials or narrowly scoped server-side credentials.

## Phase 6 — Admin Portal V1

Implement:

- admin dashboard;
- topic list;
- topic create;
- topic edit;
- draft state;
- validation preview;
- submit for review;
- review queue.

The initial release does not need every content type.

## Phase 7 — Admin Portal V2

Add:

- judgment editor;
- Judgment Decoder fields;
- comparison editor;
- illustration editor;
- source editor;
- Sanhita Mapper editor;
- SEO editor.

## Phase 8 — Git publishing workflow

Preferred:

Admin draft -> validation -> branch/change -> PR -> CI -> reviewer -> approval -> merge -> deployment.

Every published change must have:

- content ID;
- version;
- author/admin;
- timestamp;
- Git commit;
- review state.

## Phase 9 — CI validation

Add automated checks for:

- schema;
- TypeScript;
- duplicate IDs;
- broken references;
- required sources;
- invalid status transitions;
- canonical URL collisions;
- sitemap generation;
- build;
- route generation.

## Phase 10 — SEO

Every canonical entity should produce:

- stable URL;
- title;
- description;
- canonical;
- breadcrumb metadata;
- sitemap entry;
- natural search aliases.

Do not create duplicate pages for every keyword spelling.

## Phase 11 — Domain readiness

Replace hard-coded current-domain references with configuration.

Verify:

- canonical URL generation;
- sitemap;
- robots;
- Open Graph;
- internal links;
- redirects;
- absolute URLs.

Prepare old-to-new URL mapping before the dedicated domain launch.

## Phase 12 — Production hardening

Test:

- unauthorized admin access;
- unauthorized publishing;
- expired sessions;
- malformed content;
- duplicate IDs;
- broken references;
- rollback;
- failed deployment;
- partial content migration;
- old-domain redirect;
- mobile admin UI;
- accessibility;
- audit log integrity.

## Required output for each implementation phase

For every phase, report:

1. Objective.
2. Existing files reused.
3. Files created.
4. Files changed.
5. Schema changes.
6. Security implications.
7. Migration implications.
8. Tests added.
9. Build result.
10. Deployment result.
11. Known limitations.
12. Next phase.

## Final acceptance test

The system is not complete until a test admin can:

1. Sign in.
2. Create a new topic.
3. Enter structured legal content.
4. Add source metadata.
5. Add related provisions/judgments/comparisons.
6. Add SEO metadata.
7. Save a draft.
8. Submit it for review.
9. Reviewer sees the change.
10. Validation passes.
11. A Git-based change is created.
12. CI runs.
13. Approved content reaches the production content source.
14. The public page is generated.
15. Sitemap/canonical metadata is correct.
16. The change is visible in Git history.
17. The change can be rolled back.

If any step is not implemented, explicitly mark it as pending rather than pretending the system is complete.
