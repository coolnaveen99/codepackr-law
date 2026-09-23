# Skill: Add Topic Treatise Notes (Lazy-Loaded Senior Counsel & PhD Standard)

**Mandatory SOP** for writing or upgrading a section, article, order, or topic treatise.

The user must experience the intellectual depth of a **printed legal treatise**, combining the theoretical rigour of a **Doctor of Laws (PhD in Jurisprudence)** with the courtroom precision of a **Senior Counsel**.

**Quality Benchmark Model**: `src/data/topics/cpc/s-32.ts` (Section 32 CPC). Every authored topic file must match or exceed this benchmark.

---

## 1. Architectural Rules

| Layer | File Location | Content Responsibilities |
|-------|---------------|--------------------------|
| **Metadata Only** | `src/data/subjects.ts` | Minimal search metadata (`id`, `name`, `type`, `cluster`, `highYield`, `keywords`). Never put essays here. |
| **Complete Treatise** | `src/data/topics/<subjectSlug>/<topicId>.ts` | Master `study` treatise, contrastive examples, exam hypothetical, verified precedents with ratio, and full 10/16 Q&A. |
| **Canonical Graph** | `src/data/knowledge/` | Shared doctrines, cases, maxims, and principles. Link via `[[REF:TYPE:CATEGORY:SLUG]]`. |

---

## 1A. Modular Design & Zero Raw Markdown Standard

All topic learning notes and practice questions must adhere strictly to the **Modular Design Standard**:
1. **Zero Raw Markdown Tokens in UI**: Topic content must never render raw markdown artifacts (`###`, `##`, `#`, `---`, `> `).
2. **Modular Card Architecture**: Content is organized into distinct, bite-sized visual cards (Topic at a glance, Modular Syllabus Sections, Statutory Provisions, Contrastive Examples, Hypotheticals, Distinctions, Common Misconceptions, and IRAC/CREAC Answers).
3. **Structured Fields Preferred**: Utilize `TopicContent` structured fields (`sections`, `provisions`, `hypotheticals`, `distinctions`, `misconceptions`, `questionsAndAnswers`) to allow the UI to render dedicated rich cards.
4. **Rich Inline Parsing**: Headings are rendered via clean typographic scales with module badges, `**bold**` terms are styled with high-contrast font weights, and provisos/editorial notes appear as bordered callout cards.

---

## 2. Standard Structure of the `study` Body

Every authored topic treatise should cover:
1. **Topic at a Glance**: Executive summary of the rule, statutory citation, and primary purpose.
2. **Jurisprudential Foundation & Legislative Intent**: Theoretical roots (analytical, historical, or sociological) and the specific mischief the legislature sought to remedy (*Heydon's Case*).
3. **Meaning & Concept**: Clear, authoritative definition of the rule in plain yet precise legal English.
4. **Statutory Text Deconstruction**: Granular analysis of sub-sections, explanations, official provisos, and non-obstante clauses.
5. **Mandatory Ingredients**: Deconstruction into physical elements (*actus reus*) and mental states (*mens rea*).
6. **Procedural & Forum Anchor (Senior Counsel Reference)**:
   - Competent Court / Forum (Magistrate, Sessions, Civil Court, High Court).
   - Territorial & Pecuniary Jurisdiction parameters.
   - Limitation Period under the Limitation Act, 1963 schedule.
7. **Evidentiary Proving Standards**:
   - Standard of proof (preponderance vs beyond reasonable doubt).
   - Burden of proof under BSA (ss. 104–106).
   - Electronic evidence certificate under Section 63 BSA where digital records are involved.
8. **Adversarial Submissions**:
   - Prosecution / Plaintiff: Core arguments and statutory presumptions to establish.
   - Defence / Respondent: Strategic counter-arguments, failure of proof, or statutory exceptions.
9. **Exceptions, Provisos & Limitations**: What circumstances take a case out of the general rule.
10. **Statutory Distinctions**: Dispel confusion with neighbouring or overlapping provisions (e.g. BNS 304 vs IPC 304; CPC S. 11 vs Order II Rule 2).
11. **2024 Transitional Status**: In-force milestone, date-of-offence applicability, and Section 531 BNSS savings rules.

---

## 3. Mandatory Examples & Case Precedents

- **Enacted Illustrations**: Include and analyze official statutory illustrations **only** when expressly enacted in the Gazette/India Code text.
- **Labelled Educational Examples**: Provide at least two contrastive practical examples:
  - *Example 1 (Rule Applies)*: Fact scenario meeting all statutory ingredients.
  - *Example 2 (Rule Fails)*: Fact scenario where a crucial ingredient is missing.
- **Classroom / Exam Hypothetical**: A realistic, multi-party fact pattern with step-by-step application.
- **Precedents**: 2 to 4 verified cases with citation, court, facts, issue, decision, and **extracted ratio decidendi**. Never list raw case names without their proposition.

---

## 4. Full Examination Answers (`questionsAndAnswers`)

- **10-Mark Answer (`marks: 10`)**: 500–700 words formatted in strict **IRAC** (Issue, Rule, Application, Conclusion).
- **16-Mark Answer (`marks: 16`)**: 900–1200 words formatted in comprehensive **CREAC** (Conclusion, Rule, Explanation, Application, Counter-arguments & Conclusion) with comparative and critical analysis.
- The UI dock buttons `#exam-10` and `#exam-16` jump directly to these answers. They must be complete and exam-hall ready.

---

## 5. Implementation Steps

1. Query `src/data/knowledge` first to locate canonical IDs for doctrines and landmark cases.
2. Confirm the topic metadata in `src/data/subjects.ts`.
3. Create `src/data/topics/<subjectSlug>/<topicId>.ts` exporting `TopicContent`.
4. Run `npm run lint` and `npm run build` to verify clean compilation.
