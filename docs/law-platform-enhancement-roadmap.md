# CodePackr Law — Complete Product Enhancement Roadmap
## Research, Architecture, Tooling, Legal Quality and Delivery Plan

**Repository:** coolnaveen99/codepackr-law  
**Product:** law.codepackr.com  
**Purpose:** Master implementation specification for future GitHub agents, developers and AI coding assistants.  
**Date:** 2026-09-30  
**Status:** Planning baseline. A roadmap item is not implemented until the repository contains the required code, content, tests and verification evidence.

---

# 1. Executive Product Direction

CodePackr Law should evolve from a Digital Law Library + study tools + drafting catalogue into a **free Indian Legal Workbench**.

The product should connect the work surrounding authoritative legal information:

    LEARN
      ↓
    UNDERSTAND
      ↓
    RESEARCH
      ↓
    VERIFY
      ↓
    PREPARE CASE
      ↓
    DRAFT
      ↓
    PREPARE HEARING
      ↓
    REVIEW / ORGANIZE

Core product promise:

> Find, understand, verify, prepare and organize Indian legal work — with primary-source awareness and privacy-first browser tools.

Primary audiences:

1. Law students
2. AIBE aspirants
3. Judicial-service aspirants
4. Law interns / trainees
5. Junior advocates
6. Practising advocates
7. Senior advocates / senior counsel
8. Legal researchers / academics
9. Legal educators
10. Court-facing professionals who need neutral research and document-organization utilities

The product must remain assistive. It must not claim to replace lawyers or judges, predict judicial outcomes, present generated drafts as court-approved, or treat an AI-generated proposition as authoritative without verification.

---

# 2. Current CodePackr Law Baseline

The repository already contains substantial foundations and these should not be unnecessarily rebuilt:

- 100% client-side privacy architecture.
- Broad law-school curriculum and subject coverage.
- BNS / BNSS / BSA transition-aware content.
- Case-law library / judgment reader.
- Reusable legal knowledge architecture.
- MCQ practice.
- Section flashcards.
- Legal maxims.
- Landmark case flashcards.
- Exam timer.
- Legal Draft Studio.
- Scalable legal-draft catalogue.
- Document Compare.
- Structured legal-content quality rules.
- Seal Burgundy visual identity.
- PWA/offline-oriented design.
- Build and delivery quality gate.

The largest capability gap is not another static library. It is the missing **research → verification → case preparation → drafting → hearing preparation workflow**.

---

# 3. Competitive and Market Findings

The Indian legal-tech market already contains strong products for:

- curated legal research;
- full-text case-law search;
- live case/docket tracking;
- AI legal research;
- contract drafting;
- case management;
- compliance;
- document automation.

Current 2026 market material describes SCC Online and Manupatra as established curated research platforms, IndianKanoon as a free full-text resource, and eCourts/eCourtsIndia-style services as strong sources for live litigation discovery.

SCC Online also markets AI answers grounded in its legal database. Therefore CodePackr Law should not compete by creating a generic “ask an AI legal question” clone.

Instead, CodePackr should connect tasks that users currently perform across multiple tools.

## Primary-source principle

Prefer:

1. Official government / court source.
2. India Code.
3. Supreme Court / High Court / eCourts source.
4. Official tribunal or government source.
5. Reliable reported database.
6. Secondary commentary.

India Code supports searches across Acts, sections, rules, regulations, notifications, orders, ordinances, statutes and circulars.

eCourts provides case-status, case-history, orders/judgments, cause lists and searches involving party name, case number, advocate, FIR, Act and case type.

CodePackr should link users toward authoritative sources rather than presenting its own static database as the sole authority.

---

# 4. Target Information Architecture

The future top-level navigation should be:

    CODEPACKR LAW
    │
    ├── STUDY
    │   ├── Subjects
    │   ├── Bare Acts
    │   ├── Section Explorer
    │   ├── MCQ Practice
    │   ├── Flashcards
    │   ├── Legal Maxims
    │   ├── Case Study
    │   └── Exam / Judiciary Preparation
    │
    ├── RESEARCH
    │   ├── Legal Research Workbench
    │   ├── Case / Judgment Finder
    │   ├── Citation Verifier
    │   ├── Judgment Analyzer
    │   ├── Judgment Compare
    │   ├── Precedent / Treatment Tracker
    │   └── Research Note Builder
    │
    ├── CASE PREPARATION
    │   ├── Case Brief
    │   ├── Chronology
    │   ├── Issues
    │   ├── Parties
    │   ├── Evidence
    │   ├── Witnesses
    │   ├── Authorities
    │   ├── Arguments
    │   └── Hearing Checklist
    │
    ├── DRAFT
    │   ├── Legal Draft Studio
    │   ├── Pleadings
    │   ├── Applications
    │   ├── Notices
    │   ├── Affidavits
    │   ├── Agreements
    │   └── Court Documents
    │
    ├── COURT / PRACTICE
    │   ├── Cause List Organizer
    │   ├── Hearing Planner
    │   ├── Case Diary
    │   ├── Limitation
    │   ├── Court Fee
    │   ├── Interest
    │   └── Filing Checklists
    │
    └── KNOWLEDGE
        ├── Acts
        ├── Sections
        ├── Cases
        ├── Doctrines
        ├── Maxims
        ├── Definitions
        └── Legal Updates

---

# 5. Phase 0 — Baseline Audit and Stabilization

## Objective

Create a measurable baseline before adding major features.

## Tasks

### 5.1 Product capability matrix

Create docs/product-capability-matrix.md.

Track every existing route/tool:

| Tool | Audience | Status | Data source | Client-side | Tests | Quality status |
|---|---|---|---|---|---|---|

Include route, component, data file, subject, primary audience, dependencies, known limitations, verification status and whether the content is a scaffold.

### 5.2 Route inventory

Extract all application routes and compare them with:

- README;
- sitemap;
- home-page cards;
- tool registry;
- subject catalogue.

No production tool should be orphaned from navigation or documentation.

### 5.3 Universal tool quality

Every tool should have, where applicable:

- loading state;
- empty state;
- error state;
- reset;
- sample/demo;
- copy;
- mobile layout;
- keyboard accessibility;
- semantic labels;
- dark/light compatibility;
- legal disclaimer;
- source/reference metadata.

### 5.4 Baseline commands

Run:

    npm install
    npm run lint
    npm run checklist
    npm run audit
    npm run build

Record results in docs/quality-baseline-2026-09.md.

## Exit criteria

- Production build green.
- No unresolved TypeScript errors.
- No broken routes.
- Current content counts documented.
- Current tool catalogue documented.

---

# 6. Phase 1 — Homepage and Information Architecture

## Objective

Make the product immediately understandable to students, advocates, senior counsel and legal researchers.

## Homepage

### Hero

Use a clear proposition such as:

Indian Legal Research, Study & Practice Tools

State that the product is:
- free;
- Indian-law focused;
- privacy-first;
- browser-based.

Do not market it as an “AI lawyer”.

### Audience selector

Provide four paths:

1. Law Student
2. AIBE / Judiciary Aspirant
3. Advocate
4. Senior Legal Researcher

Audience selection should change featured tools, not create separate duplicated applications.

### Workflow section

Display:

    Research → Verify → Prepare → Draft → Practice

### Featured tools

Promote:

- Legal Research Workbench;
- Judgment Analyzer;
- Case Brief Builder;
- Legal Draft Studio;
- Judgment Compare;
- Limitation Calculator;
- Case Chronology;
- BNS/BNSS/BSA Mapper.

### Subject browser

Use:

    Subject
      ↓
    Act
      ↓
    Topic
      ↓
    Section
      ↓
    Cases / Doctrine / Practice

Never dump hundreds of items on the first screen.

## Exit criteria

A user should understand where to begin within approximately 10–15 seconds.

---

# 7. Phase 2 — Legal Knowledge Graph Foundation

## Objective

Connect existing content rather than continuing to create isolated pages.

## Core entities

Create typed records for:

- Act;
- Section;
- Rule;
- Regulation;
- Case;
- Court;
- Bench metadata where appropriately sourced;
- Doctrine;
- Legal maxim;
- Topic;
- Procedural step;
- Document type;
- Remedy;
- Limitation rule;
- Citation;
- Source.

## Relationship example

    BNSS
     ├── Section 35
     ├── Section 187
     ├── Section 480
     └── Related cases

    Case A
     ├── cites Case B
     ├── interprets BNSS section 480
     ├── doctrine: Bail
     └── topic: Criminal Procedure

## Stable IDs

Use stable identifiers such as:

    ACT:BNSS:2023
    SECTION:BNSS:480
    CASE:SC:<normalized-id>
    DOCTRINE:CRIMINAL:BAIL
    TOPIC:CRIMINAL:BAIL

Never use display names as relationship identifiers.

## Source metadata

Every verified legal record should support:

    sourceType:
      official | reported | secondary | user-provided

    sourceUrl
    sourceTitle
    accessedAt
    verificationStatus:
      verified | needs-review | user-provided

## Exit criteria

- Existing reusable knowledge can be referenced without duplication.
- Acts, sections, cases and topics have stable IDs.
- UI relationships do not depend on fragile display strings.

---

# 8. Phase 3 — Legal Research Workbench — P0

This should become one of the flagship CodePackr Law tools.

## User workflow

    Research Question
          ↓
    Issue Extraction
          ↓
    Relevant Acts / Sections
          ↓
    Search Terms
          ↓
    Case Candidates
          ↓
    Authority Verification
          ↓
    Case Matrix
          ↓
    Research Note

## Research question

Fields:

- question;
- jurisdiction;
- court level;
- date range;
- subject;
- Act;
- section.

## Issue decomposition

Display:

- primary issue;
- secondary issues;
- statutory questions;
- procedural questions;
- evidence questions;
- limitation questions.

AI-generated issue suggestions must be labelled as suggestions.

## Authority matrix

Columns:

- case;
- court;
- date;
- citation;
- statute/section;
- issue;
- holding;
- relevant paragraph;
- treatment;
- source;
- verification status.

## Research note

Generate:

1. Question Presented
2. Short Answer
3. Statutory Framework
4. Authorities
5. Analysis
6. Counter-authorities
7. Unresolved Questions
8. Verification Checklist

## Exit criteria

The user can move from research question to a structured research note without manually copying information between multiple CodePackr tools.

---

# 9. Phase 4 — Citation Verification — P0

## Goal

Make verification visible rather than hiding uncertainty.

## Accepted inputs

Support:

- SCC-style citations;
- AIR citations;
- SCC OnLine citations;
- neutral citations where available;
- case names;
- citations extracted from user documents.

## Output

Show:

- citation;
- case name;
- court;
- date;
- source;
- matched record;
- verification status.

## Status model

### VERIFIED

Reliable source located and metadata agrees.

### PARTIAL

Some metadata matches; manual review required.

### NOT VERIFIED

No reliable source located.

### CONFLICT

Multiple records disagree.

### USER-PROVIDED

Citation came from user text and has not been independently verified.

Critical rule:

> Never convert “not found” into “case does not exist”.

---

# 10. Phase 5 — Judgment Analyzer — P0

## Inputs

Initially support:

- pasted judgment;
- TXT;
- DOCX.

Add PDF only after implementing a genuine PDF text extraction path.

## Output sections

1. Case metadata
2. Facts
3. Procedural history
4. Issues
5. Parties' submissions
6. Statutory provisions
7. Authorities cited
8. Evidence discussed
9. Court reasoning
10. Findings
11. Ratio decidendi
12. Obiter / observations
13. Final order
14. Unresolved questions
15. Follow-up authorities

## Source traceability

Each extracted statement should retain:

- paragraph/page reference where available;
- extraction confidence;
- user-provided vs verified;
- generated interpretation vs source text.

## Hard rule

Never invent:

- paragraph numbers;
- citations;
- holdings;
- judges;
- dates;
- statutory sections.

---

# 11. Phase 6 — Judgment Compare — P0

Extend the existing Document Compare concept into a legal-analysis workflow.

## Compare

- two judgments;
- old law vs new law;
- trial vs appellate decision;
- two drafts;
- two written submissions.

## Output

### Common

- issues;
- statutes;
- authorities.

### Differences

- factual differences;
- legal-rule differences;
- evidentiary differences;
- reasoning differences;
- relief/outcome differences.

### Authority treatment

Use neutral states:

- followed;
- relied upon;
- distinguished;
- considered;
- not addressed;
- unverified.

Do not infer “overruled” merely because two cases differ.

---

# 12. Phase 7 — Case Preparation Workbench — P0

Create a browser-only case workspace.

## Case structure

    Case
    ├── Parties
    ├── Court
    ├── Case number
    ├── Stage
    ├── Dates
    ├── Facts
    ├── Issues
    ├── Law
    ├── Authorities
    ├── Evidence
    ├── Witnesses
    ├── Chronology
    ├── Arguments
    ├── Documents
    └── Hearing notes

## 12.1 Chronology Builder

Input:

    01-01-2024 — Agreement
    10-02-2024 — Notice
    25-03-2024 — Reply
    01-04-2024 — Filing

Output:

- chronological timeline;
- gap detection;
- disputed dates;
- date-source references.

## 12.2 Issues Builder

For each issue:

- issue;
- legal test;
- elements;
- plaintiff/prosecution burden;
- defence/respondent answer;
- authorities;
- evidence required;
- finding.

## 12.3 Evidence Matrix

| Issue | Element | Evidence | Witness | Exhibit | Status |
|---|---|---|---|---|---|

## 12.4 Witness Planner

| Witness | Role | Facts proved | Documents | Examination | Cross points |
|---|---|---|---|---|---|

## 12.5 Argument Matrix

| Issue | Proposition | Authority | Facts | Evidence | Counterargument | Reply |
|---|---|---|---|---|---|---|

This should be designed especially well for senior counsel preparation.

---

# 13. Phase 8 — Legal Draft Studio 2.0

Keep the current catalogue, but clearly distinguish:

### Tier A — Reviewed full draft

Substantive template reviewed against applicable law.

### Tier B — Educational scaffold

Structured generic draft requiring professional completion.

### Tier C — Catalogue entry

Document-type discovery only.

### Tier D — Checklist

Filing/practice checklist rather than a pleading.

## Filter hierarchy

    Subject
      ↓
    Area
      ↓
    Act
      ↓
    Court / Forum
      ↓
    State
      ↓
    Document Type
      ↓
    Verified / Scaffold
      ↓
    Draft

Never render hundreds of drafts on initial load.

## Advanced features

Add:

- favourites;
- recently used;
- recently reviewed;
- A–Z;
- most used;
- verified only;
- scaffold only;
- court;
- state;
- statute;
- review year.

Persist these locally unless the user explicitly chooses cloud storage.

## Draft metadata

Expose:

- applicable Act;
- relevant sections;
- jurisdiction;
- court/forum;
- state dependency;
- limitation considerations;
- required annexures;
- filing checklist;
- last reviewed date;
- verification status.

---

# 14. Phase 9 — Filing and Court Checklist System

Create reusable checklists for:

- civil suit;
- criminal complaint;
- bail;
- appeal;
- revision;
- writ;
- arbitration;
- consumer complaint;
- MACT claim;
- family petition;
- execution petition;
- cheque dishonour complaint;
- RTI appeal.

## Checklist model

| Requirement | Why required | Source | Mandatory/Conditional | Status | Notes |
|---|---|---|---|---|---|

Do not imply that one national checklist is valid in every court.

Use:

    Central baseline
      +
    Court-specific additions
      +
    State-specific additions
      +
    User verification

---

# 15. Phase 10 — Legal Calculators

Build deterministic calculators before AI utilities.

Priority:

1. Limitation Calculator
2. Date Difference
3. Interest Calculator
4. Simple Interest
5. Compound Interest
6. Court Fee reference/calculator where rules are codified
7. Stamp Duty reference/calculator where authoritative rules are available
8. Motor Accident Compensation worksheet
9. Notice Period Calculator
10. Appeal / revision deadline worksheet

Every calculator must show:

- formula;
- inputs;
- assumptions;
- legal basis;
- source;
- result;
- current-law/local-rule warning.

Never hard-code a state-specific rule as national law.

---

# 16. Phase 11 — BNS / BNSS / BSA Transition Centre

Make this a flagship reference feature.

## Compare

    IPC → BNS
    CrPC → BNSS
    Indian Evidence Act → BSA

## For each mapping show

- old provision;
- new provision;
- exact relationship;
- changed wording;
- changed ingredients;
- procedural effect;
- commencement;
- transitional considerations;
- related cases;
- verification source.

## Relationship labels

Use:

- direct correspondence;
- modified;
- split;
- merged;
- new provision;
- removed;
- no direct equivalent;
- requires legal review.

Never label every mapping “equivalent”.

---

# 17. Phase 12 — Student Learning 2.0

The current student foundation should become a connected learning system.

## Topic learning path

    Topic
      ↓
    Bare Act
      ↓
    Simple explanation
      ↓
    Detailed doctrine
      ↓
    Case law
      ↓
    Problem
      ↓
    MCQ
      ↓
    Flashcard
      ↓
    Revision

## Case Brief Builder

Fields:

- facts;
- issues;
- arguments;
- reasoning;
- holding;
- ratio;
- obiter;
- significance;
- later treatment.

## Study planner

Browser-only:

- subjects;
- topics;
- target dates;
- revision cycles;
- completion;
- weak areas.

---

# 18. Phase 13 — Advocate Practice Dashboard

Create a local-only dashboard.

Cards:

- active cases;
- upcoming hearings;
- research notes;
- drafts;
- checklists;
- recent judgments;
- favourite statutes.

## Case diary

Store locally:

- matter;
- next date;
- court;
- item number;
- task;
- notes;
- document checklist.

If browser notifications are added later:

- explicit permission;
- no silent tracking;
- no legal data sent to analytics;
- clear export/delete controls.

---

# 19. Phase 14 — Cause List Organizer

The official eCourts service already provides cause-list functionality. CodePackr should therefore be an organizer, not claim to be the official cause-list source.

## Workflow

    User obtains cause list
      ↓
    Paste/import supported text
      ↓
    CodePackr parses entries
      ↓
    User marks own matters
      ↓
    Sort by court/time/item
      ↓
    Hearing preparation

## Fields

- court;
- bench;
- date;
- item;
- case;
- parties;
- advocate;
- purpose;
- notes.

Show a source banner:

> Source: user-provided / official source link.

---

# 20. Phase 15 — Primary Source Finder

## Objective

Help users reach authoritative sources.

## Source hierarchy

1. Official government/court source
2. Official statute database
3. Official judgment/order
4. Reliable reported database
5. Secondary commentary

## Search result card

    TITLE
    Court / Ministry
    Date
    Authority type
    Relevant Act / Section
    Source
    Open source
    Verification status

Never silently mirror copyrighted content.

---

# 21. Phase 16 — Privacy and Local Storage

Keep the current privacy-first architecture.

Use versioned namespaces such as:

    cp-law:settings:v1
    cp-law:favorites:v1
    cp-law:study:v1
    cp-law:cases:v1
    cp-law:drafts:v1
    cp-law:research:v1
    cp-law:checklists:v1

Required controls:

- export all local data;
- import data;
- delete all local data;
- reset individual workspace;
- storage usage indicator.

Before storing case notes, show:

> Do not store confidential, privileged or personally identifiable case information unless you understand the security implications of local browser storage.

Never:

- send case notes to analytics;
- put legal facts in URLs;
- log user legal text in production;
- store secrets in local storage.

---

# 22. Phase 17 — AI Architecture

Introduce AI only after deterministic workflows are reliable.

## Good AI uses

- classify user-provided text;
- summarize user-provided documents;
- suggest research terms;
- structure notes;
- extract entities;
- compare user-provided texts;
- generate draft scaffolding;
- create study questions.

AI is never itself the authority.

## Source-grounded response contract

Every AI legal response should provide:

    Answer
    Sources
    Evidence / location
    Verification status
    Uncertainty
    Next verification step

## Labels

- AI-generated;
- source-grounded;
- user-provided;
- verified;
- needs-review.

## Citation safety

Before displaying a legal citation:

1. Parse citation.
2. Search supported source index.
3. Match case metadata.
4. Match court/date/citation.
5. Display as verified only when evidence supports it.

If no reliable source is found:

> No authoritative source was found. Treat this output as an unverified research suggestion.

---

# 23. Phase 18 — Legal Content Verification

Create docs/legal-content-verification-policy.md.

Every legal record should have:

- author;
- reviewer;
- source;
- source date;
- last verified;
- next review;
- status.

Statuses:

    draft
    needs-review
    verified
    superseded
    historical
    deprecated

Review when:
- statute changes;
- rule changes;
- commencement/notification changes;
- important judgment changes interpretation;
- court practice changes;
- state rules change.

---

# 24. Phase 19 — Global Search

Create one search entry point for:

- subjects;
- sections;
- Acts;
- cases;
- doctrines;
- maxims;
- drafts;
- tools;
- checklists;
- reusable knowledge.

Group results:

    ACTS
    SECTIONS
    CASES
    TOPICS
    TOOLS
    DRAFTS
    KNOWLEDGE

Filters:

- court;
- year;
- Act;
- section;
- subject;
- document type;
- verification status.

Add:
- keyboard shortcut;
- recent searches;
- clear filters;
- no-result explanation;
- typo tolerance;
- synonym support.

---

# 25. Phase 20 — Mobile and Accessibility

All major workflows must be mobile-first.

Required:

- 44px minimum touch targets;
- sticky but non-blocking action bars;
- bottom-sheet filters;
- collapsible metadata;
- tables converted to cards on narrow screens;
- keyboard navigation;
- visible focus states;
- screen-reader labels;
- adequate contrast;
- reduced-motion support.

Never use color alone to represent:
- verified;
- warning;
- unverified;
- error.

---

# 26. Phase 21 — PWA / Offline

Offline-first candidates:

- MCQs;
- flashcards;
- maxims;
- calculators;
- saved notes;
- case workspaces;
- draft scaffolds;
- static knowledge.

For live sources, clearly show:
- Online source;
- last retrieved time;
- unavailable/offline state.

Do not make stale cached legal information look current.

---

# 27. Phase 22 — Analytics Without Legal-Data Surveillance

If analytics are introduced, aggregate-only metrics may include:

- tool opened;
- workflow completion;
- anonymous performance;
- feature usage counts.

Never collect:

- legal query text;
- case facts;
- client names;
- uploaded document contents;
- private notes;
- draft contents.

Prefer privacy-preserving or opt-in analytics.

---

# 28. Phase 23 — Testing Strategy

## Unit tests

Test:

- date calculations;
- limitation calculations;
- citation parsing;
- slug generation;
- filtering;
- legal category mapping;
- statute mapping;
- storage migration.

## Component tests

Test:

- empty states;
- filters;
- search;
- keyboard;
- mobile controls;
- reset;
- copy;
- export.

## Content validation

Automate checks for:

- duplicate IDs;
- duplicate slugs;
- missing sources;
- missing verification status;
- invalid Act references;
- malformed citations;
- orphaned knowledge references.

## Required PR validation

Run:

    npm run lint
    npm run checklist
    npm run audit
    npm run build

Run additional test scripts when present.

---

# 29. Phase 24 — SEO and Discoverability

Every major tool needs:

- unique title;
- meta description;
- canonical URL;
- Open Graph title;
- Open Graph description;
- Open Graph image;
- structured data where appropriate;
- breadcrumb;
- internal links.

Examples:

    /tool/limitation-calculator
    /tool/judgment-analyzer
    /tool/case-brief-builder
    /tool/legal-research-workbench

Subject pages:

    /subject/constitutional-law
    /subject/criminal-law
    /subject/civil-procedure

Do not create thousands of thin pages only to increase URL count.

---

# 30. Phase 25 — Draft Catalogue Governance

The current scalable catalogue should grow carefully.

Use:

### Tier 1 — Verified full templates

Human-reviewed substantive drafts.

### Tier 2 — Structured educational templates

Detailed scaffold with legal metadata.

### Tier 3 — Catalogue entries

Document-type discovery only.

### Tier 4 — Checklist

Practice/filling checklist.

Never generate thousands of generic paragraphs and label them as complete legal drafts.

---

# 31. Phase 26 — Court and State Configuration

Introduce:

    CourtProfile
    StateProfile
    ForumProfile

Example fields:

    name
    state
    court level
    filing method
    official URL
    procedural notes
    source
    last verified

Start with a small verified set and expand.

Do not encode unsupported procedural claims.

---

# 32. Phase 27 — Senior Counsel Research Mode

This is a later-stage differentiator.

Create a research bundle containing:

- research question;
- issue matrix;
- statutory provisions;
- authorities;
- case summaries;
- chronology;
- evidence matrix;
- argument matrix;
- counter-authorities;
- verification checklist.

Exports:

- Markdown;
- DOCX;
- PDF;
- TXT.

Preserve source references and verification labels in exports.

---

# 33. Phase 28 — Judicial / Neutral Analysis Mode

This mode must remain assistive and neutral.

Useful utilities:

- judgment structure analysis;
- authority extraction;
- chronology extraction;
- issue extraction;
- statute extraction;
- judgment comparison;
- citation verification;
- document organization.

Do not build:

- judge-decision prediction;
- judge-bias scores;
- conviction prediction;
- winner prediction;
- personal competence/fitness scores.

The system should support human legal judgment rather than replace it.

---

# 34. Phase 29 — Security

Threats to address:

- malicious uploaded files;
- XSS in user-provided text;
- unsafe document rendering;
- oversized files;
- local-storage abuse;
- unsafe HTML;
- dependency vulnerabilities.

Rules:

- sanitize rendered HTML;
- avoid unsafe HTML rendering unless sanitized;
- limit uploads;
- validate MIME and extension;
- isolate parsers;
- never execute uploaded content;
- keep dependencies current;
- review npm audit findings.

---

# 35. Phase 30 — Performance

Requirements:

- lazy-load large topic collections;
- lazy-load judgment data;
- virtualize large lists;
- avoid loading the entire draft catalogue into expensive UI paths unnecessarily;
- memoize filters;
- use Web Workers for expensive local document processing where justified.

Target: application shell remains lightweight as the knowledge catalogue grows.

---

# 36. Phase 31 — Copyright and Data Governance

Do not scrape, copy or reproduce proprietary legal databases or editorial material without permission.

Do not copy:

- proprietary headnotes;
- paid database annotations;
- proprietary case summaries;
- copyrighted template wording;
- subscription-only commentary.

Third-party products may be used for feature research and market understanding, not as a source for copying content.

Prefer:

- official public sources;
- appropriately reusable public material;
- original CodePackr explanations;
- user-provided documents;
- properly licensed datasets.

A September 2026 U.S. appellate ruling involving Thomson Reuters and Ross Intelligence is a useful engineering warning about copyright risk when proprietary legal editorial material is used in AI training. It is not an Indian-law ruling and must not be presented as one.

---

# 37. Phase 32 — Trust-Preserving Monetization

The basic legal-information and productivity layer can remain free.

Potential future optional paid features:

- larger workspace;
- optional cloud sync;
- advanced export;
- team workspace;
- firm integrations;
- institution dashboards;
- licensed datasets.

Do not put basic legal safety information behind a paywall.

Do not place aggressive advertising inside sensitive legal-document workflows.

---

# 38. Implementation Priority

## P0 — Build first

1. Product capability audit
2. Global search
3. Legal Research Workbench
4. Citation Verifier
5. Judgment Analyzer
6. Case Brief Builder
7. Case Chronology
8. Evidence Matrix
9. Argument Matrix
10. Legal Document Checklist
11. BNS/BNSS/BSA Transition Centre
12. Legal Draft Studio 2.0

## P1

13. Judgment Compare
14. Limitation Calculator
15. Court/State profiles
16. Cause List Organizer
17. Primary Source Finder
18. Advocate dashboard
19. Research Note Builder
20. Study Planner
21. Case workspace export

## P2

22. Local AI document analysis
23. Source-grounded AI assistant
24. Precedent treatment graph
25. Senior Counsel Research Mode
26. PWA/offline expansion
27. Advanced accessibility
28. Institutional features

## P3

29. Optional cloud sync
30. Team workspaces
31. Licensed external datasets
32. Professional integrations

---

# 39. Development Sequence

## Sprint Group A — Foundation

- Phase 0
- Phase 1
- Phase 2

## Sprint Group B — Research

- Phase 3
- Phase 4
- Phase 5
- Phase 6

## Sprint Group C — Litigation Preparation

- Phase 7
- Phase 9
- Phase 10

## Sprint Group D — Drafting

- Phase 8
- Phase 11

## Sprint Group E — Practice

- Phase 14
- Phase 15
- Phase 16
- Phase 17

## Sprint Group F — Student

- Phase 12
- Phase 13

## Sprint Group G — AI

- Phase 17
- Phase 18
- Phase 28

## Sprint Group H — Scale

- Search;
- accessibility;
- PWA;
- SEO;
- performance;
- security;
- governance.

---

# 40. Definition of Done for Every Legal Tool

## Product

- clear purpose;
- target audience;
- user workflow;
- empty state;
- sample data;
- reset;
- error handling.

## Legal

- applicable statute;
- source references;
- current-law review;
- verification status;
- disclaimer;
- jurisdiction limitations.

## Engineering

- TypeScript clean;
- no unused imports;
- responsive UI;
- accessible controls;
- lazy loading where required;
- no accidental network calls;
- safe user-data handling.

## Testing

- unit tests where logic exists;
- UI flow verification;
- build;
- checklist;
- audit;
- regression review.

## Documentation

- README/tool registry;
- feature documentation;
- source/verification metadata;
- changelog where appropriate.

---

# 41. Mandatory GitHub Workflow

Every future task must follow:

    1. Inspect current main
    2. Read relevant repository instructions
    3. Search existing implementation
    4. Search canonical legal knowledge
    5. Verify authoritative legal sources
    6. Design minimal architecture
    7. Implement
    8. Run tests
    9. Run npm run lint
    10. Run npm run checklist
    11. Run npm run audit
    12. Run npm run build
    13. Inspect git diff
    14. Check changed files
    15. Create focused commit
    16. Open PR
    17. Verify CI
    18. Resolve conflicts safely
    19. Merge only when clean
    20. Verify deployment
    21. Report exact status

Never say “tested” when only code inspection was performed.

Never say “deployed” when Vercel is pending.

---

# 42. AI Agent Rules

Before changing legal content:

1. Read .github/copilot-instructions.md.
2. Read relevant .github/instructions files.
3. Read relevant skill files.
4. Search existing canonical knowledge.
5. Check whether a similar tool exists.
6. Verify authoritative sources.
7. Preserve the legal disclaimer.
8. Preserve the privacy architecture.
9. Add source/verification metadata.
10. Build and verify.

Before creating a new tool, answer:

- Is this genuinely new?
- Can an existing tool be extended?
- Is the data authoritative?
- Can it work client-side?
- Is the output deterministic?
- Does it actually require AI?
- Can AI hallucinate?
- What is the failure mode?
- How will the user verify the result?
- Is jurisdiction explicit?

---

# 43. Product Health Metrics

Do not optimize for raw page count.

## Coverage

- subject coverage;
- section coverage;
- case coverage;
- verified-content percentage.

## Utility

- tool completion;
- workflow completion;
- repeat usage;
- export usage;
- study completion.

## Quality

- broken links;
- unverified citations;
- stale legal records;
- build failures;
- accessibility failures.

## Trust

- percentage of legal claims with source;
- percentage of AI outputs with verification;
- unresolved content-review flags.

---

# 44. Final Product Evolution

    CURRENT
    Digital Law Library
    + Study Tools
    + Draft Catalogue
    + Document Compare
          │
          ▼
    PHASE 1
    Better Navigation
          │
          ▼
    PHASE 2
    Legal Knowledge Graph
          │
          ▼
    PHASE 3–6
    Research + Citation + Judgment Intelligence
          │
          ▼
    PHASE 7–11
    Case Preparation + Drafting + Filing
          │
          ▼
    PHASE 12–16
    Students + Advocates + Court Workflow
          │
          ▼
    PHASE 17–18
    Safe Source-Grounded AI
          │
          ▼
    PHASE 19–31
    Search + Accessibility + PWA + Security + Governance
          │
          ▼
    TARGET
    FREE INDIAN LEGAL WORKBENCH

---

# 45. Research Sources

Use these as starting points for future verification. Commercial comparison articles are market research, not legal authority.

- India Code: https://www.indiacode.nic.in/
- eCourts Services: https://services.ecourts.gov.in/
- eCourts High Court Services: https://hcservices.ecourts.gov.in/
- Supreme Court of India: https://www.sci.gov.in/
- SCC Online: https://www.scconline.com/
- Indian Kanoon: https://indiankanoon.org/
- 2026 research landscape: https://blogs.ecourtsindia.com/2026/04/16/ecourtsindia-vs-scc-online-indiankanoon-manupatra/
- 2026 Indian case-law AI overview: https://clawlaw.in/blog/best-ai-tools-for-indian-case-law-research-2026
- 2026 Indian legal AI landscape: https://clawlaw.in/blog/best-legal-ai-tools-in-india-2026

---

# 46. Final Product Principle

**Do not build the largest legal website. Build the most useful connected legal workflow.**

The ideal journey is:

    Question
      →
    Law
      →
    Section
      →
    Case
      →
    Authority
      →
    Verification
      →
    Analysis
      →
    Case Preparation
      →
    Draft
      →
    Hearing Preparation

The strongest long-term differentiator is not “more AI”.

It is:

> Structured Indian legal knowledge + authoritative source awareness + practical workflow tools + transparent verification + privacy-first execution.

This principle governs every future CodePackr Law feature.
