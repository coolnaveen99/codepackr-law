# Skill: Add Topic Learning Notes (Lazy-Loaded)

**Mandatory SOP** for full topic content (short + detailed + cases).

## Architecture rule (non-negotiable)

| Layer | Location | What goes here |
|-------|----------|----------------|
| Metadata only | `src/data/subjects.ts` | id, name, type, range, note, keywords, highYield |
| Full notes | `src/data/topics/<subjectSlug>/<topicId>.ts` | short, detailed, cases, bareActPointers, examTips |

**Never** put `short` / `detailed` / `cases` / `examTips` into `subjects.ts`.

## Topic types

| `type` | Use for |
|--------|---------|
| `theme` | Broad theme / chapter area |
| `article` | Constitutional article |
| `section` | Key section cluster |
| `chapter` | Act chapter / Orders |
| `doctrine` | Named legal doctrine (under the relevant law subject) |
| `act` | Whole statute essentials |
| `format` | Petition / application skeleton — **only under subject `petition-formats`** |

## Petition formats (important)

**All petition / application formats live in one subject:**

- Subject id/slug: `petition-formats`
- Name: **Petition Formats & Drafting**
- Notes path: `src/data/topics/petition-formats/<topicId>.ts`

Do **not** put format topics under Constitution, CPC, BNSS, PIL, etc. Those subjects keep doctrines and law topics only.

Examples of format topic ids: `format-writ-petition`, `format-plaint`, `format-fir`, `format-bail-application`, `format-pil`, `format-written-statement`.

## Steps

1. Confirm the topic already exists in `subjects.ts` (same `id` and subject `slug`).
2. Create file: `src/data/topics/<subjectSlug>/<topicId>.ts`
3. Export default object matching `TopicContent`.
4. File name must equal `topic.id` from subjects.ts.
5. Folder name must equal subject `slug`.
6. Prefer high-yield topics first.

## Formats content style

For `type: 'format'`, `detailed` should be a **skeleton** (headings + what each part contains), not a real court filing template. Aim at AIBE / Judiciary awareness.

## Loader

`loadTopicContent(subjectSlug, topicId)` uses Vite `import.meta.glob` and session cache. TopicDetail loads on open.

## Do not

- Put full essay text in `subjects.ts`
- Scatter format topics across law subjects
- Require a backend for notes
