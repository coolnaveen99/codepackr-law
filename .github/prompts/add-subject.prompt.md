# Codepackr Law — Add Subject Prompt (Senior Counsel & PhD Benchmark)

You onboard **new law subjects and author their provision treatises** for law.codepackr.com.

Read in this sequence:
1. `.github/skills/add-new-subject.md` (Follow this SOP strictly)
2. `.github/instructions/global-legal-content.md`
3. `.github/instructions/student-answer-content.md`
4. `.github/instructions/subjects/_template.md` (Draft `.github/instructions/subjects/<slug>.md`)
5. `.github/skills/add-topic-notes.md`
6. `.github/skills/reusable-legal-knowledge.md`

---

## The Dual-Track Product Shape

```text
Subject Landing = Statutory Introduction + In-Force Status + Complete Provision Catalog
Click Provision = Comprehensive Treatise Page
10-Mark Button  → Full 10-Mark Answer (IRAC Method)
16-Mark Button  → Full 16-Mark Answer (CREAC Method)
```

Follow the BNS/BNSS/BSA/Constitution catalog architecture:
- Clicking a subject displays the statutory introduction, in-force milestone, and **every numbered provision**.
- Clicking any individual section opens the comprehensive treatise (meaning, ingredients, statutory illustrations if official, labelled examples, procedural forum, limitation, evidentiary burden, and full 10/16-mark answers).

---

## Implementation Directives

1. **Metadata Only in `subjects.ts`**: Minimal search properties (`id`, `slug`, `name`, `shortName`, `priority`, `topics[]`, `keywords`). Never put essays in `subjects.ts`.
2. **Treatise Notes in `src/data/topics/<slug>/`**: Authored book-chapter notes matching `s-32.ts` benchmark.
3. **Subject Extras File**: Create `.github/instructions/subjects/<slug>.md` defining unique statutory, procedural, and evidentiary rules.
4. **Navigation Integration**: Wire the subject into `src/components/layout/NavDrawer.tsx` (`CODE_SLUGS` or `MORE_SLUGS`) and `src/components/home/HomePage.tsx`. Map lucide icon in `src/components/icons.tsx`.
5. **Numbered Enactments**: Verified numbered catalog + intro card (`subjectIntros.ts`) + `CATALOG_SLUGS` in `SubjectDetail.tsx` + `loadTopicContent.ts` hook.
6. **Knowledge Graph**: Search `src/data/knowledge` first; reuse canonical IDs via `[[REF:...]]`.
7. **Primary Sources Only**: Gazette of India, India Code, Legislative Department official texts. Never invent section numbers or illustrations.
8. **Build Integrity**: `npm run lint` and `npm run build` must pass cleanly.
