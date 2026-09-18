# Skill: Add Topic Learning Notes (Lazy-Loaded)

**Mandatory SOP** for full topic learning notes (single Study Topic body + structured fields + cases).

Global legal-content rules: [`.github/instructions/global-legal-content.md`](../instructions/global-legal-content.md). Subject extras: [`.github/instructions/subjects/`](../instructions/subjects/).

## Architecture rule (non-negotiable)

| Layer | Location | What goes here |
|-------|----------|----------------|
| Metadata only | `src/data/subjects.ts` | id, name, type, range, note, keywords, highYield, cluster |
| Full notes | `src/data/topics/<subjectSlug>/<topicId>.ts` | `study` (preferred) or legacy `detailed`/`short`, plus sections, provisions, Q&A, cases, bareActPointers, examTips |
| Canonical graph | `src/data/knowledge/` | Reusable doctrines / cases / articles. Search here first. |

**Never** put study body / `short` / `detailed` / `cases` / `examTips` into `subjects.ts`.

**Never** copy a canonical doctrine or case essay into a topic file. Use `[[REF:TYPE:CATEGORY:SLUG]]` and the related-knowledge panel.

Constitution article-wise topics (`art-14`, `art-368`, …) are registered in `subjects.ts`. Dedicated notes files override the article catalog; otherwise `loadTopicContent` synthesises the Study Topic from `src/data/constitution/articles.ts`.

BNS section-wise topics (`s-1` … `s-358`) are generated from `src/data/bns/sections.ts`. Dedicated notes override; otherwise `loadTopicContent` synthesises from the section catalog + lesson bank.

**Product rule:** Do **not** create separate Short Version / Detailed Version UI. One Study Topic reader only. Prefer the `study` field; `detailed` then `short` remain legacy fallbacks.

## Topic types

| `type` | Use for |
|--------|----------|
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

0. Search `src/data/knowledge` (`findExisting`) for an equivalent doctrine/article/case. Reuse it if it exists.
1. Confirm the topic already exists in `subjects.ts` (same `id` and subject `slug`).
2. Create file: `src/data/topics/<subjectSlug>/<topicId>.ts`
3. Export default object matching `TopicContent`.
4. File name must equal `topic.id` from subjects.ts.
5. Folder name must equal subject `slug`.
6. Prefer high-yield topics first.

## Formats content style

For `type: 'format'`, `study` (or legacy `detailed`) should be a **skeleton** (headings + what each part contains), not a real court filing template. Aim at AIBE / Judiciary awareness.

## Loader

`loadTopicContent(subjectSlug, topicId)` uses Vite `import.meta.glob` and session cache. TopicDetail loads on open.

## Do not

- Put full essay text in `subjects.ts`
- Scatter format topics across law subjects
- Require a backend for notes
