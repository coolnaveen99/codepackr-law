# Skill: Add Topic Learning Notes (Lazy-Loaded)

**Mandatory SOP** for full topic content (short + detailed + cases).

## Architecture rule (non-negotiable)

| Layer | Location | What goes here |
|-------|----------|----------------|
| Metadata only | `src/data/subjects.ts` | id, name, type, range, note, keywords, highYield |
| Full notes | `src/data/topics/<subjectSlug>/<topicId>.ts` | short, detailed, cases, bareActPointers, examTips |

**Never** put `short` / `detailed` / `cases` / `examTips` into `subjects.ts`.  
That keeps the main bundle small even with 1000+ topics per subject.

## Topic types

| `type` | Use for |
|--------|---------|
| `theme` | Broad theme / chapter area |
| `article` | Constitutional article |
| `section` | Key section cluster |
| `chapter` | Act chapter / Orders |
| `doctrine` | Named legal doctrine (res judicata, basic structure, pith & substance, mens rea, …) |
| `act` | Whole statute essentials |
| `format` | Petition / application skeleton (plaint, writ petition, FIR, bail application, PIL, …) |

Every high-priority subject should eventually include its **important doctrines** and, where relevant, **exam-facing formats**.

## Steps

1. Confirm the topic already exists in `subjects.ts` (same `id` and subject `slug`).
2. Create file: `src/data/topics/<subjectSlug>/<topicId>.ts`
3. Export default object matching `TopicContent`.
4. File name must equal `topic.id` from subjects.ts (e.g. `res-judicata.ts`, `format-plaint.ts`).
5. Folder name must equal subject `slug` (e.g. `cpc/`, `constitution/`).
6. No extra network calls; content stays client-side only.
7. Prefer high-yield doctrines and formats first.

## Formats (petition / application)

For `type: 'format'`, `detailed` should be a **skeleton** (headings + what each part contains), not a fill-in-the-blank template for real court filing. Aim at AIBE / Judiciary awareness.

## Loader

`loadTopicContent(subjectSlug, topicId)` in `src/data/topics/loadTopicContent.ts` uses Vite `import.meta.glob` and session memory cache. TopicDetail already calls it on open.

## Do not

- Put full essay text in `subjects.ts`
- Create one giant JSON for all topics
- Require a backend or CMS for notes
