# Codepackr Law — Mandatory Architecture, Jurisprudence & Tool Rules

You are working on **Codepackr Law** (`law.codepackr.com`) — an authoritative, 100% privacy-first, client-side **Digital Law Library & Practice Reference** engineered to serve both **Law Students / Judicial Aspirants** (University LL.B/LL.M, AIBE, State Judicial Services) and **Junior Lawyers / Practicing Advocates** (Chamber reference, trial and appellate court preparation).

Every line of legal content and code must reflect the intellectual precision of a **Doctor of Laws (PhD in Jurisprudence)** and the forensic strategy of a **Senior Counsel**.

---

## THE GOLDEN DIRECTIVES (NON-NEGOTIABLE)

1. **100% Client-Side Privacy** — Zero practice data, user notes, legal queries, or exam answers leave the device. Never initiate telemetry or server calls for substantive usage.
2. **Seal Brand Only** — Accent is **seal burgundy** via remapped Tailwind `blue-*` (`#8B1E3F` / `#9F2D4A`) in `src/index.css`. Never revert to Dev `#2563eb` or Finance emerald.
3. **Dual-Track Content Rigour**:
   - **Track A (Scholastic & Problem Solving Mastery — PhD Caliber)**: Grounded in jurisprudence, statutory intent, deconstructed provisions (sections, provisos, explanations), extracted ratio decidendi, structured IRAC case briefs, and comprehensive written submissions.
   - **Track B (Litigation & Chamber Practice — Senior Counsel Caliber)**: Actionable procedural reference: Forum, Territorial/Pecuniary Jurisdiction, Limitation Act period, statutory proving ingredients, evidentiary burden (BSA ss. 104–106 & s. 63 certificate), and core courtroom arguments (Prosecution/Plaintiff vs Defence/Respondent).
4. **Authoritative 2024 Legal Transition**:
   - Primary criminal statutes are **Bharatiya Nyaya Sanhita (BNS)**, **Bharatiya Nagarik Suraksha Sanhita (BNSS)**, and **Bharatiya Sakshya Adhiniyam (BSA)**.
   - IPC, CrPC, and IEA are **historical concordance only**. Never treat them as 1:1 identical.
   - Explicitly guide on **Section 531 BNSS** transitional rules (pending FIRs, trials, investigations governed by pre-existing law vs post-July 1, 2024 procedure; Article 20(1) constitutional bar on retrospective penal enhancements).
5. **Book Chapters, Not Digests**:
   - Benchmark model: `src/data/topics/cpc/s-32.ts`.
   - Never ship boilerplate synthesizer templates as final study notes. Student/lawyer-facing copy must read like a comprehensive treatise chapter.
6. **Lazy Topic Architecture**:
   - Full substantive treatises reside only in `src/data/topics/<subjectSlug>/<topicId>.ts` (loaded dynamically via `import.meta.glob`).
   - `src/data/subjects.ts` stores metadata only. Never bloat metadata arrays with full essays.
7. **Canonical Reusable Legal Knowledge**:
   - Always query `src/data/knowledge` before introducing any doctrine, case, maxim, or principle.
   - Reuse canonical IDs (`TYPE:CATEGORY:SLUG`) via `[[REF:...]]`. Never replicate doctrine essays across files.
8. **Forensic Quality Gate**:
   - `.github/skills/tool-quality-gate.md` must pass completely before any tool or feature is approved.
   - Zero tolerance for hallucinated sections, fictitious case citations, fabricated official illustrations, or speculative legal propositions. If unverified, label as `needs-review`.
9. **Universal Click Path**:
   - Subject landing = statutory introduction + verified catalog.
   - Provision click = comprehensive treatise page + statutory illustrations (proving vs failing) + Case Brief & Written Submissions jump dock + practical courtroom points.
10. **The Sacred Student Career Covenant (Zero Topic Omission)**:
   - We work for the student's career, academic qualification, and future life as an advocate or judicial officer.
   - We must NEVER ignore, skip, or compress syllabus topics. A missing topic could mean a failed examination or an unbriefed courtroom emergency.
   - Cross-reference standard university curricula (Bar Council of India, NLUs, Central/State universities) and benchmark classroom textbooks (e.g. M. S. Rama Rao, Ratanlal & Dhirajlal, Avtar Singh, Mulla).
   - Every doctrine, general defence, capacity rule, specific wrong/offence, remedy, and procedural mechanism must have a registered, dedicated, clickable topic with structured legal coverage.
11. **Senior Counsel & PhD Scholarship Standard (Elimination of Marks Paradigm)**:
   - Never reduce serious jurisprudence to collegiate exam marks (e.g. 10-mark / 16-mark).
   - All topics must feature structured **Case Briefs / Problem Assessments (IRAC)** and **Comprehensive Written Submissions**, complete with extracted case law ratios (`ratioDecidendi`), dual statutory illustrations, mandatory BSA 2023 evidentiary compliance (ss. 104–106 & s. 63), and limitation/jurisdiction roadmaps.

See `AI_INSTRUCTIONS.md`, `.github/instructions/global-legal-content.md`, and `.github/instructions/student-answer-content.md` for full implementation standards.

12. **Master Coverage Checklist Synchronization**:
    - All 20 curriculum subjects and 2,087 registered catalog topics are tracked in `docs/subject-coverage-checklist.md`.
    - Whenever a topic is authored or upgraded in `src/data/topics/<subjectSlug>/<topicId>.ts`, update the checklist entry to `[x] Complete` (or run `npm run checklist`) and set `hasNotes: true` in `src/data/subjects.ts`.


## 13. Development, Build & Delivery Quality Gate (MANDATORY)

Before considering any code change complete:

1. **Build before merge** — Run the repository's real production build command (npm run build) after changes. Do not rely only on editor/TypeScript hints.
2. **TypeScript strictness** — Resolve all TypeScript errors and warnings that fail CI, including unused imports/locals such as TS6133. Do not leave unused icon/component imports in React files.
3. **No accidental functional changes** — When fixing a build failure, make the smallest targeted change first. Preserve existing feature behavior unless the user explicitly requested a functional change.
4. **Inspect the actual diff** — Before creating/merging a PR, verify that only intended files and changes are included. Never replace a file with an older version merely to fix a one-line issue.
5. **PR discipline** — Use a feature/fix branch for normal work. Keep commits focused and descriptive. Do not claim a PR is merged until GitHub confirms merged=true.
6. **Merge conflicts** — If a PR becomes conflicted, rebase/update it against the current main or recreate a clean fix branch. Do not force-merge or overwrite unrelated main changes.
7. **Deployment verification** — For Vercel deployments, wait for the relevant deployment/check to finish. Report pending, failed, or passed accurately; never describe a pending build as successful.
8. **Production safety** — Never bypass a failed build, disable TypeScript checks, remove lint/type checks, or weaken CI merely to obtain a green deployment.
9. **Regression awareness** — For UI/filter/catalog changes, test the affected user flows conceptually and, where tooling permits, verify the production build. For Legal Draft Studio specifically verify: initial empty library state, Subject selection, Act/Law filtering, search, category filtering, template selection, sample loading, preview, and exports.
10. **Legal safety** — Legal drafting content is educational scaffolding unless explicitly verified. Preserve the site's legal disclaimer and do not label generated catalogue scaffolds as court-approved or legally sufficient.
11. **Current-law verification** — For substantive legal changes, verify statute names, sections, amendments, commencement/transitional rules, and case citations against authoritative/current sources before presenting them as verified.
12. **Completion report** — After implementation, report: changed files, commit/PR, build result, deployment result (if available), and any remaining limitations. Never claim a test was run when it was not actually run.

### Required workflow for future GitHub tasks

Inspect → Implement → Build → Review diff → Push/PR → Verify checks → Merge only when clean → Verify deployment.

If a build error is supplied by the user, treat the supplied error log as the first diagnostic source and fix the exact failure before making unrelated enhancements.


## 14. Product Enhancement Roadmap — MANDATORY REFERENCE

The master product roadmap is:
docs/law-platform-enhancement-roadmap.md

All future agents and developers must read this roadmap before proposing or implementing major CodePackr Law features.

### 14.1 Product direction

CodePackr Law is evolving toward a free, privacy-first Indian Legal Workbench connecting:

Research → Verify → Case Preparation → Draft → Hearing Preparation → Study.

Do not treat the product as merely:
- a law-notes website;
- a template library;
- a generic AI chatbot;
- a judgment database clone.

Prefer workflow integration and reusable legal knowledge.

### 14.2 Existing-first rule

Before creating a new feature:
1. Search the repository for an existing tool/component/data model.
2. Check whether the capability can extend an existing tool.
3. Check canonical knowledge under src/data/knowledge.
4. Check the roadmap phase and priority.
5. Avoid duplicate tools with overlapping purpose.

### 14.3 Research-first legal engineering

For substantive legal features:
1. Identify the legal proposition.
2. Verify the current statute/rule/notification.
3. Prefer official primary sources.
4. Identify jurisdiction and temporal scope.
5. Record source and verification status.
6. Only then implement the UI/data model.

### 14.4 Source and verification model

New legal records should support, where applicable:
- source type;
- source URL;
- source title;
- access/review date;
- verification status;
- jurisdiction;
- effective/commencement date.

Never convert “not found” into “does not exist”.

### 14.5 AI safety

AI is assistive, never authoritative.

AI-generated legal output must be distinguishable from:
- authoritative source text;
- verified metadata;
- user-provided content;
- developer-authored explanatory content.

For citation-bearing AI output, provide source/verification information whenever the architecture supports it.

Never implement:
- judicial-outcome prediction;
- judge-bias scoring;
- conviction prediction;
- winner prediction;
- personal competence/fitness scoring.

### 14.6 Draft catalogue governance

Legal Draft Studio must distinguish:
- reviewed full template;
- educational scaffold;
- catalogue document type;
- checklist.

Never label a generic catalogue scaffold as court-approved, filing-ready, or legally sufficient.

Never copy proprietary third-party legal templates, headnotes, annotations or subscription content.

### 14.7 Privacy

The current client-side privacy architecture remains the default.

Never:
- send case facts to analytics;
- log user legal text in production;
- place confidential case information in URLs;
- add silent telemetry;
- upload user documents without explicit user action.

Any future cloud/AI feature requires an explicit privacy/security design review before implementation.

### 14.8 Workflow tools

Future high-priority tools should favor deterministic and auditable workflows before AI, including:
- Legal Research Workbench;
- Citation Verifier;
- Judgment Analyzer;
- Judgment Compare;
- Case Brief Builder;
- Case Chronology;
- Evidence Matrix;
- Argument Matrix;
- Filing Checklists;
- Limitation Calculator;
- BNS/BNSS/BSA Transition Centre;
- Global Legal Search.

### 14.9 Quality requirements for new tools

Every substantive tool must define:
- target audience;
- user workflow;
- data source;
- legal scope;
- jurisdiction;
- verification model;
- failure modes;
- empty/loading/error states;
- mobile behavior;
- accessibility;
- privacy impact;
- testing strategy.

### 14.10 Phase discipline

Implement roadmap phases in priority order unless the user explicitly changes priority.

Current broad order:
P0 = research, verification, judgment analysis, case preparation, BNS/BNSS/BSA reference, draft-studio governance.
P1 = practice/court workflow and calculators.
P2 = source-grounded/local AI and advanced research.
P3 = optional cloud/team/licensed integrations.

Do not start a P2/P3 feature while a directly related P0 reliability problem remains unresolved.

### 14.11 Legal-content lifecycle

Legal records should have explicit lifecycle states where applicable:
draft → needs-review → verified → superseded/historical/deprecated.

When a statute or rule changes:
- identify affected records;
- update current-law references;
- preserve historical context;
- update review metadata;
- run regression checks.

### 14.12 Completion report

For major roadmap work, the final implementation report must include:
- roadmap phase;
- changed files;
- new/changed routes;
- data-model changes;
- legal sources verified;
- tests run;
- npm run lint result;
- npm run checklist result;
- npm run audit result;
- npm run build result;
- PR/commit;
- Vercel/deployment status;
- known limitations;
- follow-up work.

Never claim an item is implemented because only documentation was created.


## 15. Content Depth & Judgment Decoding Standard — MANDATORY

The canonical content standard is:
`docs/content-depth-and-judgment-decoder-standard.md`

The canonical legal-content repository is:
`coolnaveen99/legal-content`

### 15.1 No artificial word-count limits

Content depth is determined by knowledge completeness, legal complexity, source material, and user value.

Do not impose fixed minimum or maximum word counts.

A topic may appropriately be short, long, or extremely long when the subject requires it. Never add filler merely to reach a target length.

### 15.2 Structural completeness

A substantive topic should cover applicable dimensions such as:
- definition and scope;
- legal source and provenance;
- statutory deconstruction;
- ingredients/conditions;
- provisos and exceptions;
- legal tests/rules;
- procedure and jurisdiction;
- limitation;
- remedies and defences;
- counterarguments;
- factual applications;
- illustrations and hypotheticals;
- distinctions and misconceptions;
- authorities;
- judgment reasoning;
- practical significance;
- revision/learning aids.

If a dimension is genuinely inapplicable, omit it deliberately rather than manufacturing content.

### 15.3 Reasoning/application

Where applicable, teach:

Rule → Facts → Legal inference → Counterargument → Court response → Finding → Conclusion.

Do not reduce legal education to rule statements without explaining how the rule operates.

### 15.4 Judgment Decoder

Important judgments should support detailed decoding, including where applicable:
1. case identity;
2. court and bench;
3. date;
4. parties;
5. dispute origin;
6. original forum;
7. procedural history;
8. facts;
9. parties' arguments;
10. questions/issues;
11. laws involved;
12. precedents relied upon;
13. precedents distinguished/challenged;
14. court questions;
15. court reasoning;
16. step-by-step reasoning;
17. issue-wise findings;
18. majority reasoning;
19. separate opinions;
20. holding;
21. ratio decidendi;
22. obiter;
23. final order;
24. legal change;
25. later judgments;
26. present legal position;
27. practical significance.

Never invent arguments, authorities, paragraph numbers, page references, holdings, ratios, or procedural history.

### 15.5 Visual and book/research modes

Where useful, content should support:
- book-style reading;
- research-mode navigation;
- examples;
- hypotheticals;
- timelines;
- flowcharts;
- decision trees;
- concept maps;
- reasoning maps;
- visual study assets.

### 15.6 Content-quality gate

Word count is never a quality gate. Review:
- legal accuracy;
- sourceability;
- information density;
- doctrinal completeness;
- statutory analysis;
- case-law reasoning;
- practical application;
- clarity;
- judgment decoding;
- historical/current-law distinction;
- source provenance.

Any hallucinated authority or material legal error fails the content gate regardless of content length.

### 15.7 Content workflow

Research → Outline → Author → Source verification → Judgment verification → Content-depth audit → Legal quality review → Publish/Update → Application validation.

### 15.8 Canonical content repository rule

New canonical legal-library content should be designed for `coolnaveen99/legal-content`.

The application repository must not become the long-term home for large canonical legal-content datasets.

Use the ContentRepository abstraction in `codepackr-law` so content can be consumed from the canonical repository without coupling UI components directly to content storage.

## 16. Vercel Build Trigger Policy — MANDATORY

Vercel must not run the production/preview build for documentation-only repository changes. The repository uses `scripts/vercel-ignore-build.sh` as the Vercel Ignored Build Step and `vercel.json` points to that script.

### Changes that must NOT trigger a Vercel build
- `.github/**`
- `docs/**`
- `prompts/**`
- `README.md` and other `README.*` files
- `CHANGELOG.md` and other `CHANGELOG.*` files

### Changes that MUST trigger a Vercel build
Any application, dependency, configuration, deployment, generated-output, or runtime-affecting change, including `src/**`, `public/**`, `package.json`, lockfiles, `vite.config.*`, `tsconfig*.json`, `scripts/**`, `vercel.json`, or any file not explicitly classified as documentation-only by the ignore script.

### Safety rule
If Git history is unavailable or the previous commit cannot be resolved, the ignore script MUST return exit code 1 so Vercel builds normally. Never skip a build because of uncertainty.

### Verification requirement
Verify both cases after changing this policy: documentation-only commit → Vercel build skipped; source/dependency/configuration commit → Vercel build proceeds. Do not report the policy as deployment-verified until the actual Vercel result is observed.


## 17. Canonical Legal Content Repository & Content Gateway — MANDATORY

The canonical legal-content repository is:

`coolnaveen99/legal-content`

The application repository is:

`coolnaveen99/codepackr-law`

These repositories have separate responsibilities.

### 17.1 Responsibility split

`codepackr-law` owns:
- application UI;
- routes and tools;
- Admin Portal;
- Content Gateway integration;
- ContentRepository abstraction;
- validation/integration code;
- application tests;
- deployment configuration.

`legal-content` owns:
- canonical legal topics;
- provisions;
- judgments and judgment decoding;
- doctrines;
- comparisons;
- illustrations;
- sources;
- Sanhita mappings;
- collections;
- SEO content metadata;
- content manifests;
- canonical content schemas.

Do not duplicate the canonical content dataset into `codepackr-law` as the permanent architecture.

### 17.2 Implementation gateway

Before implementing the publishing system, read and follow:

`docs/architecture/admin-content-publishing-architecture.md`

The implementation gateway prompt is:

`prompts/ADMIN_CONTENT_PUBLISHING_AI_PROMPT.md`

The legal-content repository implementation checklist is maintained in:

`legal-content/docs/IMPLEMENTATION-CHECKLIST.md`

### 17.3 Required application architecture

The application must use a repository abstraction:

`TopicDetail → ContentRepository → Content Gateway → legal-content`

During migration, a legacy adapter may remain:

`ContentRepository → Canonical Legal Content`
`                   ↘ Legacy Content Adapter`

The legacy adapter exists only to preserve application continuity during migration and must not become a reason to abandon the canonical repository architecture.

### 17.4 Content access rules

- Prefer the canonical manifest to discover published content.
- Load content by stable canonical ID.
- Respect content version and publication status.
- Validate entity references.
- Preserve source/provenance metadata.
- Distinguish historical and current legal content.
- Do not silently substitute stale content for current content.
- Handle missing/unpublished content explicitly.
- Never invent missing legal content.

### 17.5 Publishing boundary

The intended publishing flow is:

Admin Portal → Auth/Authz → Content Gateway → Schema/Legal Metadata Validation → Git Branch/PR → CI Validation → Review/Approval → Merge → Build → Deployment.

Do not allow an Admin UI to directly bypass validation and publish arbitrary content.

### 17.6 Content repository checklist

When working on repository integration, verify the active checklist in `legal-content/docs/IMPLEMENTATION-CHECKLIST.md`.

A checklist item is complete only when implementation and verification evidence exist.

Never mark the checklist complete merely because a file, schema, route, or prompt has been created.

### 17.7 Repository naming

The canonical repository name is `legal-content`.

Do not introduce `codepackr-law-content` as a repository name, package name, path, or integration identifier.

### 17.8 Migration rule

Do not migrate all existing legal content in one uncontrolled operation.

Use:
1. inventory;
2. canonical entity mapping;
3. source verification;
4. transformation;
5. schema validation;
6. reference validation;
7. parity testing;
8. application integration;
9. controlled rollout.

Only remove legacy content after verified parity and an explicit migration decision.

### 17.9 No artificial content limits

The content repository must not introduce artificial word-count limits. Sharding and file-size decisions are technical concerns and must be based on measured repository/runtime performance, not arbitrary content-length quotas.

### 17.10 Completion reporting

For Content Gateway/legal-content work, report:
- changed repository;
- changed files;
- schema/contract changes;
- checklist items completed;
- validation/tests actually run;
- build result;
- PR/commit;
- deployment status;
- remaining migration/integration work.

Never claim `legal-content` integration is complete until the application actually consumes validated canonical content successfully.


## 17. Admin Content Gateway & Content Repository — MANDATORY

Read before implementing content operations:
- `docs/architecture/admin-content-publishing-architecture.md`
- `prompts/ADMIN_CONTENT_PUBLISHING_AI_PROMPT.md`

### 17.1 Product decision
CodePackr Law must support authorized web-based administration of legal content. The Admin Portal is a controlled publishing system, not a generic blog CMS.

### 17.2 Trust boundaries
The public legal library and Admin Portal are separate trust zones. Public content delivery remains privacy-first; admin publishing is authenticated and server-mediated. Never expose repository write credentials to browser JavaScript.

### 17.3 Git publishing
Preferred workflow: Draft → validate → branch/PR → CI → legal review → approval → merge → deployment. Never let a normal admin action silently write directly to production without validation and audit.

### 17.4 Content repository
Use a `ContentRepository` abstraction so UI code is independent of whether content is currently stored in TypeScript, generated shards, or a separate content repository. Stable content IDs must survive file moves, repository migration and domain migration.

### 17.5 Migration
Never delete the legacy source during initial migration. Required sequence: inventory → snapshot → normalize → copy → parity → dual-read validation → switch → stabilize → archive.

### 17.6 Content model
First-class entities include topic, provision, judgment, comparison, illustration, doctrine, source, Sanhita mapping and SEO record.

### 17.7 No artificial content-size rule
Do not introduce word-count ceilings or fixed minimums. Content length is determined by legal complexity and completeness. Never add filler to satisfy an AI quota.

### 17.8 No core high-yield classification
Do not introduce or preserve `highYield` as the canonical legal-library importance model. Learning products may create curriculum views over canonical content.

### 17.9 Domain migration
Never hard-code `law.codepackr.com` into new architecture. Use configurable public/canonical/admin URLs so the site can move to a dedicated domain after validation. Preserve stable entity IDs and map old URLs to equivalent new URLs.

### 17.10 Completion
Do not claim an Admin Portal, content migration, Git publishing, CI pipeline, or domain migration is complete unless corresponding code/configuration, tests and verification evidence actually exist.
