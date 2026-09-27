# Skill: Add Topic Treatise Notes (Lazy-Loaded Senior Counsel & PhD Standard)

**Mandatory SOP** for writing or upgrading a section, article, order, or topic treatise.

The user must experience the intellectual depth of a **printed legal treatise**, combining the theoretical rigour of a **Doctor of Laws (PhD in Jurisprudence)** with the courtroom precision of a **Senior Counsel**.

**Quality Benchmark Model**: `src/data/topics/cpc/s-32.ts` (Section 32 CPC) for structure. Judgment *depth* must follow `.github/skills/judgment-case-notes.md` (s-32 currently has `cases: []` — that empty array is **not** acceptable on new topics).

Also read: `prompts/JUDGMENT_AND_BRIEF_DEPTH.md`.

---

## 1. Architectural Rules

| Layer | File Location | Content Responsibilities |
|-------|---------------|--------------------------|
| **Metadata Only** | `src/data/subjects.ts` | Minimal search metadata (`id`, `name`, `type`, `cluster`, `highYield`, `keywords`). Never put essays here. |
| **Complete Treatise** | `src/data/topics/<subjectSlug>/<topicId>.ts` | Master `study` treatise, contrastive examples, exam hypothetical, verified precedents with 2-page notes, and full brief / submissions Q&A. |
| **Canonical Graph** | `src/data/knowledge/` | Shared doctrines, cases, maxims, and principles. Link via `[[REF:TYPE:CATEGORY:SLUG]]`. |

**Rollout:** new topics first at full depth; existing topics upgraded one file at a time.

---

## 1A. Modular Design & Zero Raw Markdown Standard

All topic learning notes and practice questions must adhere strictly to the **Modular Design Standard**:
1. **Zero Raw Markdown Tokens in UI**: Topic content must never render raw markdown artifacts (`###`, `##`, `#`, `---`, `> `).
2. **Modular Card Architecture**: Content is organized into distinct, bite-sized visual cards (Topic at a glance, Modular Syllabus Sections, Statutory Provisions, Contrastive Examples, Hypotheticals, Distinctions, Common Misconceptions, IRAC answers, and Leading Authorities).
3. **Structured Fields Preferred**: Utilize `TopicContent` structured fields (`sections`, `provisions`, `hypotheticals`, `distinctions`, `misconceptions`, `questionsAndAnswers`, `cases`) to allow the UI to render dedicated rich cards.
4. **Rich Inline Parsing**: Headings are rendered via clean typographic scales with module badges, `**bold**` terms are styled with high-contrast font weights, and provisos/editorial notes appear as bordered callout cards.

---

## 2. Standard Structure of the `study` Body

Every authored topic treatise should cover:
1. **Topic at a Glance**: Executive summary of the rule, statutory citation, and primary purpose.
2. **Jurisprudential Foundation & Legislative Intent**: Theoretical roots and the mischief the legislature sought to remedy.
3. **Meaning & Concept**: Clear, authoritative definition.
4. **Statutory Text Deconstruction**: Sub-sections, explanations, official provisos, non-obstante clauses.
5. **Mandatory Ingredients**: Physical and mental elements where relevant.
6. **Procedural & Forum Anchor**: Competent court, territorial/pecuniary jurisdiction, Limitation Act 1963 schedule.
7. **Evidentiary Proving Standards**: BSA ss. 104–106 and s. 63 where digital records matter.
8. **Adversarial Submissions**: Plaintiff/prosecution vs defence.
9. **Exceptions, Provisos & Limitations**.
10. **Statutory Distinctions** with neighbouring headings.
11. **Leading authorities** — 2-page extracted case notes (see §3).
12. **2024 Transitional Status** where criminal process is involved.

---

## 3. Mandatory Examples & Case Precedents

- **Enacted Illustrations**: Include official statutory illustrations **only** when enacted in the Gazette/India Code text.
- **Labelled Educational Examples**: At least two contrastive practical examples (rule applies / rule fails).
- **Classroom / Chamber Hypothetical**: Multi-party facts with step-by-step application.
- **Precedents (new-topic floor)**:
  - Minimum **2 verified** cases (3–4 if the ratios differ).
  - Each leading case gets a **~2-page note (900–1,200 words)**: facts, issue, both sides, decision, ratio, what was not decided, use on this topic.
  - Store structured header in `cases[]` (`name`, `year`, `citation`, `court`, `facts`, `issue`, `ratioDecidendi`, `holding`, `relevance`).
  - Put the long note in a `sections[]` module such as `Leading authorities and extracted ratios`.
  - Do **not** paste a 40-page official report.
  - Never list a case name without citation and ratio. Never invent a citation.

Full SOP: `.github/skills/judgment-case-notes.md`.

---

## 4. Courtroom Drafting Formats (`questionsAndAnswers`)

- **Case Brief (`draftingCategory: 'brief'`)**: **500–700 words**, IRAC sentences. Must cite the two leading cases with citation + ratio + application. Not a section-number list.
- **Written Submissions (`draftingCategory: 'submissions'`)**: **1000–1500 words** (facts, statutory scheme, ingredients, precedents, rebuttal, prayer).
- Dock jumps: `#brief` / `#submissions`. No collegiate mark rubrics. No “10-mark” / “16-mark” labels.

---

## 5. Implementation Steps

1. Query `src/data/knowledge` first for canonical case and doctrine ids.
2. Confirm the topic metadata in `src/data/subjects.ts` (`hasNotes: true`).
3. Create `src/data/topics/<subjectSlug>/<topicId>.ts` exporting `TopicContent`.
4. Fill `cases[]` (not empty) and a leading-authorities section with 2-page notes.
5. Write the 500–700 word brief and 1000–1500 word submissions.
6. Run `npm run lint` and `npm run build`.
7. Run `npm run checklist` if the catalog status must move to Complete.
