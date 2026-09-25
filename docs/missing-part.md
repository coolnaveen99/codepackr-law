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

- [ ] Migrate 5–10 representative BNSS topics into structured learning content.
- [ ] Add structured sections, provisions, examples, Q&A, exam points, and related topics to the remaining high-priority topics.
- [ ] Add subject-level progress calculation.
- [ ] Add subject-level completed-topic count.
- [ ] Add Continue Learning cards to subject pages.
- [ ] Persist the last-read topic and section.
- [ ] Add topic section navigation with active section state.
- [ ] Add clickable topic-to-topic navigation using stable topic IDs.
- [ ] Add topic-to-provision links into the existing Bare Act tools.
- [ ] Add topic-to-judgment links into the Judgment Reader.
- [ ] Add judgment-to-topic backlinks.
- [ ] Keep historical law references visibly separate from current-law mappings.

### Practice Mode

- [ ] Create a dedicated Practice Setup component.
- [ ] Add explicit Subject, Topic, and Question Count setup flow.
- [ ] Add a reusable QuestionRenderer component.
- [ ] Add a PracticeSession data model.
- [ ] Add a dedicated Practice Result screen.
- [ ] Add Review Answers.
- [ ] Add Practice Again.
- [ ] Add Back to Topic.
- [ ] Add links from explanations back to the relevant topic and provision.
- [ ] Add question-level topic metadata to all question banks.
- [ ] Validate insufficient question availability before starting a session.

### Exam Simulation

- [ ] Create a dedicated Exam Setup component.
- [ ] Create a dedicated Exam Session component.
- [ ] Create an Exam Result component.
- [ ] Create an Exam Review component.
- [ ] Add submission confirmation showing attempted, unanswered, and marked questions.
- [ ] Add explicit Specific Topic, Mixed Topics, and All Topics pool selection.
- [ ] Add custom question count validation.
- [ ] Add accessible palette labels for current, answered, unanswered, and review states.
- [ ] Add authoritative timer ownership in a dedicated ExamTimer component.
- [ ] Preserve the current answer before automatic timeout submission.
- [ ] Add refresh recovery for active exam sessions.
- [ ] Add browser-back protection while an exam is active.
- [ ] Add time-used calculation to exam results.
- [ ] Add Study Topic links for incorrect answers.
- [ ] Ensure Exam mode never reveals instant feedback before submission.

### Case Law

- [ ] Add 5–10 reviewed pilot judgment records.
- [ ] Add representative short, long, scanned, and text judgment sources.
- [ ] Add verified PDFs under `public/judgments/` or verified source URLs.
- [ ] Implement real lazy-loaded PDF viewer support.
- [ ] Add PDF page navigation.
- [ ] Add PDF zoom.
- [ ] Add search-within-document where supported.
- [ ] Add full-screen source reading.
- [ ] Connect judgment provisions to Bare Act/provision routes.
- [ ] Connect judgments to topics.
- [ ] Add Continue Reading for judgments.
- [ ] Add judgment section progress with last-read section.
- [ ] Add source references only when page or paragraph data is verified.
- [ ] Add original-source validation and missing-source warnings.
- [ ] Add related-case validation for broken internal IDs.

### Content Processing and Governance

- [ ] Add PDF validation workflow.
- [ ] Add text-PDF extraction workflow.
- [ ] Add scanned-PDF OCR workflow.
- [ ] Add OCR review status.
- [ ] Add structured draft generation workflow.
- [ ] Add human review status before publication.
- [ ] Add content completeness reporting.
- [ ] Add explicit Needs Review markers for uncertain content.
- [ ] Review and normalize existing BNSS material for legal accuracy.
- [ ] Separate genuine learning Q&A from genuine MCQs.
- [ ] Keep AI-assisted or curated content visibly separate from court text.

### Validation and Testing

- [ ] Add `src/utils/judgments/judgmentValidation.ts`.
- [ ] Add `src/utils/topics/topicValidation.ts`.
- [ ] Add `npm run validate:judgments`.
- [ ] Add `npm run validate:topics`.
- [ ] Validate duplicate IDs.
- [ ] Validate broken topic, judgment, provision, and related-case references.
- [ ] Validate MCQ option counts and correct indexes.
- [ ] Validate missing PDF/source configuration.
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
