# Skill: Add a New Subject (and its study content)

**Mandatory SOP** when the user asks to add a subject, a new Act, or “subject content like BNS”.

Read first:

1. [`.github/instructions/global-legal-content.md`](../instructions/global-legal-content.md)
2. [`.github/instructions/student-answer-content.md`](../instructions/student-answer-content.md)
3. Subject extras template: [`.github/instructions/subjects/_template.md`](../instructions/subjects/_template.md)
4. Topic notes: [`add-topic-notes.md`](add-topic-notes.md)
5. Knowledge graph: [`reusable-legal-knowledge.md`](reusable-legal-knowledge.md)

Prompt: [`.github/prompts/add-subject.prompt.md`](../prompts/add-subject.prompt.md)

---

## Dual-Track Product Shape (Do Not Deviate)

The student and advocate click path must strictly follow:

```text
Home / Hamburger
  → Subject Landing (Statutory Context + In-Force Status + Complete Numbered Catalog)
    → Click Provision / Section / Article / Topic
      → Full Treatise Page (Book-Chapter Depth)
        → Jurisprudential Foundation & Legislative Intent (PhD Standard)
        → Statutory Deconstruction (Provisos, Explanations, Non-obstante clauses)
        → Procedural & Evidentiary Anchors (Forum, Limitation, BSA Burden of Proof)
        → Official Statutory Illustrations (if enacted) + Contrastive Hypotheticals
        → Landmark Precedents with Extracted Ratio Decidendi
        → Courtroom Arguments (Prosecution/Plaintiff vs Defence/Respondent)
        → 10-Mark and 16-Mark Jump Buttons (IRAC / CREAC Answers)
```

Follow the established catalog standard:
- Clicking a subject displays the statutory introduction, in-force milestone, and **every numbered provision**.
- Clicking any individual section opens the comprehensive treatise (meaning, ingredients, statutory illustrations if official, labelled examples, procedural anchors, and full 10-mark and 16-mark answers).
- **Never stop at a Bare Act dump**.
- **Never paste exam-writing filler into the `study` body**. Exam answers live exclusively in `questionsAndAnswers`.

---

## Two subject kinds

| Kind | When to use | What the student sees | Examples |
|------|-------------|-----------------------|----------|
| **Catalog** | The Act has a numbered article/section list the student must learn one-by-one | Intro card + jump box + complete numbered list, grouped by chapter/part | Constitution, BNS, BNSS, BSA |
| **Theme** | AIBE-weight subject without a full section catalog yet | Intro + theme / doctrine / act topics | CPC, Contract, Family, Torts |

Start **theme** if you only have a handful of high-yield essays. Upgrade to **catalog** when you have a verified complete section/article list (India Code / official PDF / NCRB Cytrain). Never invent missing section numbers to fake a catalog.

---

## Zero Topic Omission Standard (The Sacred Student Career Covenant)

Law students, judicial service aspirants, and junior advocates rely on Codepackr Law for their academic degrees, AIBE qualification, and judicial careers. **We work for their careers and their life.**

1. **Never arbitrarily drop, prune, or compress topics**: An omitted doctrine, capacity rule, general defence, or specific remedy could be the exact 10-mark question, 16-mark problem, or chamber emergency a student or young advocate faces.
2. **Mandatory Curriculum Cross-Referencing**: Before finalizing the topic list for any subject in `src/data/subjects.ts`, cross-reference:
   - Bar Council of India (BCI) Model Curricula and National Law University (NLU) syllabi.
   - Authoritative classroom textbooks and standard treatises (e.g., M. S. Rama Rao, Ratanlal & Dhirajlal, Avtar Singh, Mulla, R.K. Bangia).
   - University examination question banks (10-mark questions, 16-mark essays, and short notes).
3. **Dedicated Provision / Topic Registration**: Every distinct legal concept, defence, exception, remedy, and procedural step must have a dedicated topic entry. If a bespoke treatise is not yet written, it must be registered so that `synthesizePlaceholderTopic` provides an authoritative syllabus reference until full treatise authoring is complete.

---

## Files you must touch

### Always (every new subject)

| File | What to add |
|------|-------------|
| `src/data/subjects.ts` | One `LawSubjectMeta`: `id`, `slug`, `name`, `shortName`, `priority`, `aibeQuestions`, `bareActs`, `description`, `keywords`, `icon`, `topics[]`, optional `mcqSubjectKey` |
| `src/data/topics/<slug>/` | At least the high-yield theme notes (`TopicContent`) |
| `.github/instructions/subjects/<slug>.md` | Subject extras only (copy `_template.md`) |
| `src/components/icons.tsx` | Map `icon` string → lucide icon in `SUBJECT_ICONS` if it is new |
| Hamburger / home | See nav table below |
| `README.md` | One line in the subject list |

### Catalog subjects also need

| File | What to add |
|------|-------------|
| `src/data/<slug>/sections.ts` (or `articles.ts`) | Complete verified catalog: `id`, `title`, `cluster`, `flags` |
| `src/data/<slug>/chapters.ts` | Chapter / Part grouping |
| `src/data/<slug>/overview.ts` + `index.ts` | Act name, in-force date, counts, disclaimer |
| `src/data/<slug>/bareAct.json` | Official parsed text when available (India Code / Cytrain / Legislative Department) |
| `src/data/subjectIntros.ts` | Intro card copy |
| `src/data/topics/loadTopicContent.ts` | Wire `s-<n>` / `art-<n>` to the synthesizer |
| `src/components/subjects/SubjectDetail.tsx` | Add slug to `CATALOG_SLUGS` |

Topic ids for catalog rows:

- Section `107` → topic id `s-107`, name `Section 107 — <title>`
- Article `21` → topic id `art-21`, name `Article 21 — <title>`

### Nav (so students can find it)

| File | Constants |
|------|-----------|
| `src/components/layout/NavDrawer.tsx` | `CODE_SLUGS` (full catalogs) or `MORE_SLUGS` (high-yield themes) |
| `src/components/home/HomePage.tsx` | `FEATURED_SLUGS` / `MORE_SLUGS` — keep in sync with the drawer |
| `src/components/subjects/SubjectsList.tsx` | `FEATURED_SLUGS` only for the four codes unless the new subject is a complete catalog |

Do **not** hide a new subject: `SUBJECTS` already lists it on `/subjects`. Hamburger / home are how Gen Z students actually open it.

---

## Metadata rules (`subjects.ts`)

- **Metadata only.** No `study` essays, no case dumps, no Q&A.
- `slug` = URL segment, lowercase kebab-case (`specific-relief`, not `SRA`).
- `icon` = lucide export name already in `SUBJECT_ICONS`, or add it.
- `priority`: `high` (~8–10 AIBE Q), `medium` (~4–5), `low` (~2).
- `topics[]`: themes and doctrines first, then the generated catalog rows.
- `keywords` must include the short name, the Act, and the 3–5 phrases students will type.

Reuse existing topic ids. Do not mint `bail-2` when `bail` exists on BNSS.

---

## Study content rules (current UI)

One `TopicContent` per topic file. The page the student sees is:

1. **`study`** — original teaching note (meaning, why the rule exists, ingredients, how it operates, exceptions). Not a Bare Act paste. Not exam-writing filler.
2. **Statutory illustrations** — only when the official text actually prints them. Quote them, then teach (map to an ingredient). Never fake “Illustration (a)” .
3. **`examples` / `hypotheticals`** — labelled educational examples. Never presented as reported cases.
4. **`cases`** — verified; teach ratio. Reuse `[[REF:CASE:...]]`.
5. **`questionsAndAnswers`** — **full** examination answers:
   - one item with `marks: 10`
   - one item with `marks: 16` where the topic can carry 16 marks
   - `answer` is a complete hall answer, not a teaser
   - the UI jump buttons scroll to `#exam-10` and `#exam-16`

### Do not put in `study`

- “How to write a 10-mark answer” numbered lists
- “How to write a 16-mark answer” numbered lists
- “Model answer skeleton”
- Unverified IPC / CrPC / IEA mapping blocks
- “Statutory illustrations (copy into the answer…)” when the Act has none
- Repeated “current-law position / 8-step” boilerplate

Those belong in the Q&A cards (`marks: 10 | 16`), not the teaching body.

### Q&A shape

```ts
{
  id: 'q-10',
  marks: 10,
  question: 'Discuss <provision> with the aid of illustrations.',
  answer: '<full 10-mark answer>',
  explanation: '<scoring tips only — does not replace the answer>',
}
```

---

## Official sources (do not invent)

| Subject family | Primary text |
|----------------|--------------|
| BNS / BNSS / BSA | India Code + [cytrain.ncrb.gov.in](https://cytrain.ncrb.gov.in) chapter pages |
| Constitution | Legislative Department English edition (current PDF). **Cytrain has no COI.** |
| Other in-force Acts | India Code / official Gazette / Legislative Department |
| Cases | SCI / official High Court / verified citation |

If a section title or illustration is not in the official text, do not write one. Mark `needs-review`.

IPC, CrPC, IEA are **historical concordance only**. Never assume number equality.

---

## Knowledge graph

Before writing a doctrine, case, maxim, definition or principle:

```text
SEARCH src/data/knowledge → REUSE [[REF:TYPE:CATEGORY:SLUG]] → CREATE ONLY IF NEW
```

Do not copy Basic Structure, mens rea, res judicata, estoppel, etc. into the new subject file.

---

## Checklist (definition of done)

- [ ] `.github/instructions/subjects/<slug>.md` exists and does not copy the global file
- [ ] `subjects.ts` metadata + topics
- [ ] Icon mapped
- [ ] Hamburger / home updated if high-yield or catalog
- [ ] Theme notes under `src/data/topics/<slug>/` meet the 10/16 standard
- [ ] Catalog (if any) is complete and verified; every row opens a study page
- [ ] Intro card (`subjectIntros.ts`) if catalog
- [ ] `CATALOG_SLUGS` updated if catalog
- [ ] Q&A has `marks: 10` and `marks: 16` with **full** answers
- [ ] Statutory illustrations included only when official
- [ ] No Bare Act dump as the whole page
- [ ] No filler blocks in `study`
- [ ] Knowledge graph searched; `[[REF:]]` used
- [ ] `npm run lint` and `npm run build` green
- [ ] README one-liner

Open `/subjects/<slug>`, click the first topic, click a middle provision if catalog, click **10 mark** and **16 mark**. If those buttons do nothing, the Q&A is incomplete.
