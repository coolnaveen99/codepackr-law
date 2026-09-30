# CodePackr Law — Admin Content Gateway & End-to-End Content Publishing Architecture

**Status:** Approved by Meeting #4 (planning baseline)  
**Scope:** Legal content repository, Admin Portal, secure publishing gateway, Git/CI/CD, SEO/domain migration  
**Primary product:** CodePackr Law  
**Current public domain:** `law.codepackr.com`  
**Future public domain:** Dedicated domain, configured without hard-coding the current domain

---

## 1. Product decision

CodePackr Law is a continuously expanding legal library/reference platform. Legal content must be maintainable by authorized administrators through a web interface without requiring a developer to edit application source files for every content change.

The target flow is:

```
Admin Portal
  -> Authentication / Authorization
  -> Content Gateway
  -> Schema + Legal Metadata Validation
  -> Git branch / Pull Request
  -> CI validation
  -> Review / Approval
  -> Merge
  -> Content build
  -> Deployment
  -> Public Legal Library
```

The public reader experience and administrative publishing system are different trust zones.

- Public library: privacy-first and optimized for reading/research.
- Admin system: authenticated, server-mediated and auditable.
- Never expose repository write credentials in browser code.

---

## 2. Repository boundary

Target architecture:

```
codepackr-law
  Application
  UI
  Routing
  Search
  Content loader
  Tools
  Tests

codepackr-law-content
  Topics
  Provisions
  Judgments
  Comparisons
  Doctrines
  Illustrations
  Sources
  Sanhita mappings
  SEO metadata
  Content manifests
```

The application repository must consume content through a `ContentRepository` abstraction. UI components must not depend directly on the physical location or storage format of legal content.

Do not migrate everything at once. Establish schema, stable IDs, manifests, validation and parity tests first.

---

## 3. Canonical content entities

The content repository must support these first-class entities:

- `topic`
- `provision`
- `judgment`
- `comparison`
- `doctrine`
- `illustration`
- `source`
- `sanhitaMapping`
- `collection`
- `seoRecord`

A stable ID must survive file moves, repository migration and domain migration.

Examples:

```
topic:bns:s-23
judgment:sci:2024:example-slug
comparison:appeal-vs-revision
provision:bns:23
illustration:bns:s-23:001
```

Never use a filesystem path as the identity of a legal entity.

---

## 4. Content status lifecycle

Every managed record should support a lifecycle such as:

```
draft
  -> research
  -> review
  -> verified
  -> approved
  -> published
  -> review-due
  -> update
  -> archived
```

A draft is not authoritative merely because it exists in Git.

The UI must distinguish:

- source text;
- verified metadata;
- CodePackr-authored synthesis;
- illustrative/example content;
- AI-assisted draft material;
- needs-review material.

---

## 5. Admin Portal information architecture

Target route:

```
/admin
/admin/dashboard
/admin/topics
/admin/topics/new
/admin/topics/:id
/admin/provisions
/admin/judgments
/admin/judgments/new
/admin/comparisons
/admin/illustrations
/admin/doctrines
/admin/sources
/admin/sanhita-mapper
/admin/review
/admin/publishing
/admin/seo
/admin/audit
/admin/settings
```

The admin UI must not be indexed.

Required protection:

- authentication;
- role-based authorization;
- CSRF protection where applicable;
- secure cookies/session handling;
- rate limiting;
- server-side authorization;
- audit logging;
- no repository token in client bundle.

---

## 6. Roles

Initial roles:

### Owner
Full system and repository administration.

### Legal Editor
Create/edit legal content, submit for review.

### Reviewer
Review sources, legal accuracy, structure and current-law status.

### Publisher
Approve/publish approved content through the controlled workflow.

### SEO Editor
Edit search metadata without changing substantive legal content.

### Contributor
Create drafts and propose changes but cannot publish directly.

Do not assume the user who can log into the portal automatically has publish permission.

---

## 7. Topic editor

A topic editor should support:

- stable ID;
- subject;
- title;
- slug;
- legal type;
- governing Act;
- section/article;
- historical equivalents;
- current-law status;
- introduction;
- detailed sections;
- statutory analysis;
- examples;
- illustrations;
- hypotheticals;
- misconceptions;
- comparisons;
- related provisions;
- related topics;
- related judgments;
- source records;
- verification status;
- review date;
- SEO title;
- SEO description;
- search aliases;
- canonical URL.

The editor should validate references against the content graph.

---

## 8. Judgment editor and decoder

Judgments require a specialized model.

Support:

- case identity;
- parties;
- court;
- bench;
- date;
- citation;
- source URL;
- procedural history;
- factual background;
- issues;
- Party A arguments;
- Party B arguments;
- provisions;
- precedents relied upon;
- precedents distinguished/overruled where verified;
- court questions;
- reasoning;
- issue-wise findings;
- majority/separate opinions;
- holding;
- ratio;
- obiter;
- final order;
- later treatment;
- present legal position;
- page/paragraph references when available from the source.

Never invent paragraph numbers, quotations or citations.

A long judgment should be decoded, not merely compressed into a short summary.

---

## 9. Comparison editor

`comparison` is a first-class entity for commonly confused concepts.

Examples:

- Appeal vs Revision
- Review vs Revision
- Decree vs Order
- Cognizable vs Non-Cognizable
- Bailable vs Non-Bailable
- Void vs Voidable

A comparison should contain:

- Concept A;
- Concept B;
- definitions;
- similarities;
- statutory basis;
- applicability;
- procedure;
- legal consequences;
- exceptions;
- practical examples;
- illustrations;
- judgments;
- common misconceptions;
- decision guide;
- related topics.

Do not create duplicate topic pages solely for keyword variants.

---

## 10. Illustrations and visual learning

Illustrations are first-class knowledge objects.

Supported future forms:

- statutory illustration;
- fact pattern;
- boundary/failure scenario;
- procedural flow;
- timeline;
- decision tree;
- concept map;
- judgment reasoning map;
- statutory relationship diagram.

Content schema must be extensible for visual studies even if the first UI release is text-only.

---

## 11. Sanhita Mapper

Retain the existing Sanhita Mapper.

It must integrate with the knowledge graph rather than becoming a duplicate database.

Support:

- historical provision;
- current provision;
- mapping status;
- substantive/procedural differences;
- commencement;
- transition context;
- source;
- affected judgments where verified.

Historical law must remain historically accurate. A historical judgment must not be silently rewritten as though it were decided under current law.

---

## 12. No artificial word-count policy

The library has no artificial maximum or fixed minimum word count.

Content size is determined by the actual subject.

Do not add filler to meet an AI-generated word target.

Quality is measured through knowledge completeness:

- statutory coverage;
- jurisprudential context;
- exceptions;
- examples;
- illustrations;
- judgment coverage;
- cross-references;
- practical application;
- current-law verification;
- source traceability.

A 2,000-word topic can be complete. A major subject may require tens of thousands of words across chapters and linked resources.

---

## 13. No “high-yield” library classification

Do not use `highYield` as a core legal-library importance classification.

The library should not declare some law intrinsically high-yield and other law low-yield.

Learning products may later define curriculum paths for AIBE, judiciary or university study, but those are views over the canonical library.

Migrate legacy `highYield` metadata carefully; do not delete it blindly until dependent UI/schema is updated.

---

## 14. SEO is part of content architecture

Every important legal entity must have a canonical public URL and search metadata.

For example, one canonical BNS Section 23 page should naturally cover:

- BNS Section 23;
- BNS Sec 23;
- BNS S23;
- BNS S-23;
- Bharatiya Nyaya Sanhita Section 23;
- What is BNS Section 23;
- BNS Section 23 explained.

Do not create near-duplicate pages for every spelling.

Required SEO metadata:

- canonical URL;
- title;
- description;
- search aliases;
- breadcrumbs;
- Open Graph metadata;
- appropriate structured data;
- sitemap inclusion;
- indexability status.

SEO implementation must never reduce legal content quality to keyword stuffing.

---

## 15. Content gateway

The gateway is the only component allowed to perform privileged content-repository writes.

The browser sends an authenticated request such as:

```
POST /api/admin/content/topics
```

The gateway:

1. authenticates the admin;
2. authorizes the requested action;
3. validates schema;
4. validates stable IDs;
5. validates entity references;
6. validates source/verification metadata;
7. sanitizes allowed content;
8. creates/updates a branch or controlled change;
9. creates the Git commit/PR;
10. returns the change identifier;
11. records an audit event.

Never send a GitHub personal access token to the browser.

Prefer a GitHub App or narrowly scoped server-side credential over a broad personal token.

---

## 16. Git publishing model

Preferred workflow:

```
Admin draft
  -> content branch
  -> pull request
  -> automated validation
  -> legal review
  -> approval
  -> merge to main
  -> content build
  -> deployment
```

Emergency rollback must be possible by reverting a known content commit or deploying a previous content version.

Never force-push production content as a normal publishing mechanism.

---

## 17. Automated validation gates

Every content PR should validate:

### Schema
- valid structure;
- required fields;
- valid IDs;
- valid enums.

### Graph
- no duplicate IDs;
- no broken references;
- no orphan required references;
- no circular relationship where prohibited.

### Legal metadata
- source present where required;
- verification state;
- jurisdiction;
- effective dates where relevant.

### Judgment quality
- citation fields;
- court;
- date;
- source;
- no invented paragraph references.

### SEO
- unique canonical;
- valid title;
- description;
- sitemap eligibility.

### Application
- TypeScript;
- tests;
- production build;
- route generation.

---

## 18. Migration from current repository

Migration must be reversible.

### Step 1 — Freeze a baseline
Record the source commit SHA and content inventory.

### Step 2 — Inventory
Generate a manifest of every current topic/content record.

### Step 3 — Normalize
Convert legacy records into the new canonical schema without losing content.

### Step 4 — Copy
Write to the new content repository while leaving the original untouched.

### Step 5 — Parity test
Compare IDs, counts, sections, relationships and hashes.

### Step 6 — Dual-read test
For selected content, load legacy and new representations and compare normalized output.

### Step 7 — Switch
Make the new repository the canonical source through `ContentRepository`.

### Step 8 — Stabilize
Run production monitoring and rollback testing.

### Step 9 — Archive
Only after stability, archive legacy content.

Never delete the source before parity and rollback are proven.

---

## 19. Domain migration

The current site may operate under:

```
law.codepackr.com
```

The future site will use a dedicated domain.

The application must never hard-code the current public domain.

Use environment/configuration values:

```
PUBLIC_SITE_URL
CANONICAL_SITE_URL
ADMIN_SITE_URL
CONTENT_REPOSITORY
```

Migration sequence:

1. deploy new domain;
2. test every route;
3. verify canonical URLs;
4. generate new sitemap;
5. configure Search Console;
6. validate robots/indexability;
7. map old URLs to equivalent new URLs;
8. issue 301 redirects;
9. monitor indexing and traffic;
10. only then deprecate the old domain.

Never redirect every old legal page blindly to the new homepage when an equivalent page exists.

---

## 20. CI/CD

Application repository and content repository may have separate pipelines.

### Application pipeline
- install;
- type-check;
- lint;
- unit tests;
- build;
- route/sitemap validation;
- preview deployment.

### Content pipeline
- schema validation;
- graph validation;
- legal metadata validation;
- SEO validation;
- content build;
- parity checks;
- preview;
- production release.

The final deployment mechanism must be documented and reproducible.

---

## 21. Recommended implementation phases

### Phase A — Contracts
Create content schemas, stable IDs, repository interface and manifests.

### Phase B — Migration tooling
Inventory, normalize, export, parity and rollback tooling.

### Phase C — Separate content repository
Create the canonical content repository and migrate one subject as a pilot.

### Phase D — Content loader
Switch the application to `ContentRepository` with a legacy adapter fallback.

### Phase E — Admin Gateway
Implement authentication, authorization and secure repository writes.

### Phase F — Admin Portal V1
Topic CRUD, drafts, validation, review submission.

### Phase G — Admin Portal V2
Judgments, comparisons, illustrations, sources and Sanhita Mapper.

### Phase H — Publishing
PR automation, CI gates, preview and controlled production merge.

### Phase I — SEO operations
Canonical URLs, aliases, sitemap, structured data and search-health dashboard.

### Phase J — Domain migration
New dedicated domain, redirects, indexing validation and controlled retirement of `law.codepackr.com`.

### Phase K — Advanced content operations
Review reminders, audit history, version diff, scheduled review, rollback and content-health dashboards.

---

## 22. Definition of Done

This architecture is complete only when:

- an authorized admin can create a topic through the web;
- the browser never receives a repository write secret;
- content is validated before publication;
- every change has Git history;
- legal content has source/verification metadata;
- reviewers can approve or reject changes;
- the application can consume the separate content repository;
- rollback is tested;
- SEO metadata is generated from canonical content;
- the site can move to a new domain without rewriting content IDs;
- old-domain URLs can redirect to corresponding new URLs;
- production build and deployment are verified;
- no unverified claim is presented as authoritative.

---

## 23. Non-goals

Do not turn this system into:

- a generic blog CMS;
- an unrestricted AI legal publisher;
- an automatic legal-opinion generator;
- a client-data case management system without a separate security design;
- a keyword-spam publishing engine.

The Admin Portal is a **controlled legal knowledge publishing system**.
