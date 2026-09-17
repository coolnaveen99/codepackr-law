# Skill: Add Topic Learning Notes (Lazy-Loaded)

**Mandatory SOP** for full topic content (short + detailed + cases).

## Architecture rule (non-negotiable)

| Layer | Location | What goes here |
|-------|----------|----------------|
| Metadata only | `src/data/subjects.ts` | id, name, type, range, note, keywords, highYield |
| Full notes | `src/data/topics/<subjectSlug>/<topicId>.ts` | short, detailed, cases, bareActPointers, examTips |

**Never** put `short` / `detailed` / `cases` / `examTips` into `subjects.ts`.  
That keeps the main bundle small even with 1000+ topics per subject.

## Steps

1. Confirm the topic already exists in `subjects.ts` (same `id` and subject `slug`).
2. Create file: `src/data/topics/<subjectSlug>/<topicId>.ts`
3. Export default object matching `TopicContent`:

```ts
import type { TopicContent } from '../loadTopicContent'

const content: TopicContent = {
  short: '...',           // ~80–120 words, exam revision
  detailed: '...',        // full explanation, elements, exceptions
  cases: [                // 3–5 key cases preferred for high-yield
    {
      name: 'Case Name v. Party',
      year: 1978,
      citation: '(1978) 1 SCC 248',
      holding: 'One or two line ratio.',
      relevance: 'Why it matters for this topic.',
    },
  ],
  bareActPointers: ['Art 21', 'Art 14'],
  examTips: ['Tip 1', 'Tip 2'],
}

export default content
```

4. File name must equal `topic.id` from subjects.ts (e.g. `art-21.ts`).
5. Folder name must equal subject `slug` (e.g. `constitution/`).
6. No extra network calls; content stays client-side only.
7. Prefer high-yield topics first (those with `highYield: true`).

## Loader

`loadTopicContent(subjectSlug, topicId)` in `src/data/topics/loadTopicContent.ts` uses Vite `import.meta.glob` and session memory cache. TopicDetail already calls it on open.

## Do not

- Put full essay text in `subjects.ts`
- Create one giant JSON for all topics
- Require a backend or CMS for notes
