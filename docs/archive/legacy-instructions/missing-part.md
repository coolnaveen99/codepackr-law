# Codepackr Law — Remaining Implementation Parts

> **Execution order lives here now:** [`docs/SITE_100_PERCENT_COMPLETION.md`](./SITE_100_PERCENT_COMPLETION.md)  
> This file remains the detailed architecture gap list. Do not implement items out of phase order. Do not delete catalog topics while closing these gaps.

This document records the remaining work from the subject learning, case law, and MCQ architecture specification. Update this checklist as each part is implemented.

## Current Status

Implemented foundation:

- Unified `Study Topic` view replaced the Short/Detailed toggle.
- Topic content model accepts a single `study` body (legacy `short`/`detailed` remain as fallbacks only; not separate UI versions).
- `LawTopic` metadata no longer types inline short/detailed content fields (notes stay in topic files).
- Quick Practice was removed from subject and topic learning pages.
- Structured topic content types were added.
- Article 21 has structured pilot content.
- Topic completion is stored locally in the browser.
- Practice sessions support 10, 15, and 20 unique questions.
- Shared question selection supports subject, topic, mixed-topic, and all-topic pools.
- Exam mode supports question counts, configurable time limits, countdown, and timeout submission.
- Case Law Library and Judgment Reader MVP are available.
- TypeScript validation and production build pass.
- Reusable legal knowledge graph (`src/data/knowledge`) with canonical IDs, `[[REF:]]` links, and module-load validation.
- Constitution article-wise Study Topics (120 articles) through the 106th Amendment.
- BNS section-wise Study Topics (358 sections, 20 chapters) with IPC concordance, knowledge-graph wrap, and dedicated notes for common intention / homicide / sexual offences / converter.

## Missing Parts

### Learn Experience

- [x] Migrate 5–10 representative BNSS topics into structured learning content.
- [x] Add structured sections, provisions, examples, Q&A, exam points, and related topics to the remaining high-priority topics.
- [x] Add subject-level progress calculation.
- [x] Add subject-level completed-topic count.
- [x] Add Continue Learning cards to subject pages.
- [x] Persist the last-read topic and section.
- [x] Add topic section navigation with active section state.
- [x] Add clickable topic-to-topic navigation using stable topic IDs.
- [x] Add topic-to-provision links into the existing Bare Act tools.
- [x] Add topic-to-judgment links into the Judgment Reader.
- [x] Add judgment-to-topic backlinks.
- [x] Keep historical law references visibly separate from current-law mappings.

### Practice Mode

- [x] Create a dedicated Practice Setup component.
- [x] Add explicit Subject, Topic, and Question Count setup flow.
- [x] Add a reusable QuestionRenderer component.
- [x] Add a PracticeSession data model.
- [x] Add a dedicated Practice Result screen.
- [x] Add Review Answers.
- [x] Add Practice Again.
- [x] Add Back to Topic.
- [x] Add links from explanations back to the relevant topic and provision.
- [x] Add question-level topic metadata to all question banks.
- [x] Validate insufficient question availability before starting a session.

### Exam Simulation

- [x] Create a dedicated Exam Setup component.
- [x] Create a dedicated Exam Session component.
- [x] Create an Exam Result component.
- [x] Create an Exam Review component.
- [x] Add submission confirmation showing attempted, unanswered, and marked questions.
- [x] Add explicit Specific Topic, Mixed Topics, and All Topics pool selection.
- [x] Add custom question count validation.
- [x] Add accessible palette labels for current, answered, unanswered, and review states.
- [x] Add authoritative timer ownership in a dedicated ExamTimer component.
- [x] Preserve the current answer before automatic timeout submission.
- [x] Add refresh recovery for active exam sessions.
- [x] Add browser-back protection while an exam is active.
- [x] Add time-used calculation to exam results.
- [x] Add Study Topic links for incorrect answers.
- [x] Ensure Exam mode never reveals instant feedback before submission.

### Case Law

- [x] Add 5–10 reviewed pilot judgment records.
- [x] Add representative short, long, scanned, and text judgment sources.
- [x] Add verified PDFs under `public/judgments/` or verified source URLs.
- [x] Implement real lazy-loaded PDF viewer support.
- [x] Add PDF page navigation.
- [x] Add PDF zoom.
- [x] Add search-within-document where supported.
- [x] Add full-screen source reading.
- [x] Connect judgment provisions to Bare Act/provision routes.
- [x] Connect judgments to topics.
- [x] Add Continue Reading for judgments.
- [x] Add judgment section progress with last-read section.
- [x] Add source references only when page or paragraph data is verified.
- [x] Add original-source validation and missing-source warnings.
- [x] Add related-case validation for broken internal IDs.

### Content Processing and Governance

- [x] Add PDF validation workflow.
- [x] Add text-PDF extraction workflow.
- [x] Add scanned-PDF OCR workflow.
- [x] Add OCR review status.
- [x] Add structured draft generation workflow.
- [x] Add human review status before publication.
- [x] Add content completeness reporting.
- [x] Add explicit Needs Review markers for uncertain content.
- [x] Review and normalize existing BNSS material for legal accuracy.
- [x] Separate genuine learning Q&A from genuine MCQs.
- [x] Keep AI-assisted or curated content visibly separate from court text.

### Validation and Testing

- [x] Add `src/utils/judgments/judgmentValidation.ts`.
- [x] Add `src/utils/topics/topicValidation.ts`.
- [x] Add `npm run validate:judgments`.
- [x] Add `npm run validate:topics`.
- [x] Validate duplicate IDs.
- [x] Validate broken topic, judgment, provision, and related-case references.
- [x] Validate MCQ option counts and correct indexes.
- [x] Validate missing PDF/source configuration.
- [ ] Add unit tests for judgment search and filtering.
- [ ] Add unit tests for question selection and result calculation.
- [ ] Add unit tests for topic and judgment progress.
- [ ] Add component tests for TopicReader, Practice, Exam, and Judgment Reader.
- [ ] Add end-to-end tests for Subject -> Topic -> Study.
- [ ] Add end-to-end tests for Practice setup -> session -> result.
- [ ] Add end-to-end tests for Exam setup -> timer -> submit -> review.
- [ ] Add responsive tests at 360px, 390px, 412px, 768px, 1024px, and 1440px.

### Future Features

- [ ] All-subject exam pool.
- [ ] Cloud progress after a privacy-preserving account design exists.
- [ ] Personalized revision.
- [ ] Spaced repetition.
- [ ] Full-text judgment search.
- [ ] Knowledge graph navigation.
- [ ] Case comparison.
- [ ] Judgment timelines.
- [ ] Content review dashboard.
- [ ] AI-assisted extraction with mandatory human review.

## Recommended Next Order

Use [`SITE_100_PERCENT_COMPLETION.md`](./SITE_100_PERCENT_COMPLETION.md) Phases 0–9 instead of this numbered list. Mapping:

0. Integrity freeze + `validate:topics` (do this first so topics cannot be lost)
1. Homepage
2. Subject page
3. Topic page + progress
4. Practice components
5. Exam components
6. Case law pilots + validation
7. P0 high-yield treatises
8. Remaining catalog quality floor (all 20 subjects; never delete IDs)
9. Launch hardening
