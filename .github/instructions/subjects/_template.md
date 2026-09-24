# \<Subject Name\> — Subject-Specific Instructions (Senior Counsel & PhD Benchmark)

Read first: [`.github/instructions/global-legal-content.md`](../global-legal-content.md) and [`.github/instructions/student-answer-content.md`](../student-answer-content.md).

This file defines **only** the unique statutory, procedural, and evidentiary requirements for this specific subject. Do not replicate the global architecture here.

SOP for onboarding: [`.github/skills/add-new-subject.md`](../../skills/add-new-subject.md).

---

## 1. Statutory & Practice Metadata

| Dimension | Specification |
|-----------|---------------|
| **Subject ID / Slug** | `<slug>` (lowercase kebab-case, e.g. `specific-relief`) |
| **Full Statutory Name** | `<Full official name of the Act with Year and Act Number>` |
| **Short Display Name** | `<Header / Nav card label>` |
| **Legislation Status** | In force from `<Date>` / Still in force / Reformed by `<Act>` |
| **Provision Terminology** | **Section** / **Article** / **Order & Rule** / **Principle** |
| **Subject Kind** | `catalog` (complete numbered sections) or `theme` (high-yield essays) |
| **Catalog Scope** | `<N sections, N chapters>` — `src/data/<slug>/` |
| **Treatise Path** | `src/data/topics/<slug>/<topicId>.ts` |
| **Canonical Knowledge IDs** | `<e.g. STATUTE:CATEGORY:ACT-YEAR, DOCTRINE:CATEGORY:SLUG, CASE:CATEGORY:SLUG>` |

---

## 2. Courtroom & Procedural Anchors (Senior Counsel Checklist)

Every substantive section treatise or topic under this subject must address:
1. **Competent Forum**: Which court has initial jurisdiction (e.g. Civil Judge Junior/Senior Division, Chief Judicial Magistrate, Court of Session, Commercial Court, High Court)?
2. **Pecuniary & Territorial Jurisdiction**: Statutory valuation principles and territorial cause of action rules.
3. **Limitation Period**: Relevant Article in the Schedule to the Limitation Act, 1963, or special limitation period enacted in the statute itself (along with Section 5 condonation rules).
4. **Mandatory Ingredients**: The indispensable factual elements that must be established to constitute the right or offence.
5. **Burden & Standard of Proof**: Who bears the burden under BSA (ss. 104–106)? What is the standard (preponderance of probabilities vs beyond reasonable doubt)? What statutory presumptions apply?
6. **Pleadings & Averments**: Essential statements required in the plaint, petition, or written statement (Order VI Rule 2 CPC).
7. **Adversarial Arguments**: Primary submissions for the Plaintiff/Prosecution vs Defence/Respondent counter-arguments.

---

## 3. Academic & Examination Standards (PhD Benchmark)

1. **Juristic Purpose & Interpretation**: The mischief the statute rectifies (*Heydon's Case*) and applicable canons of statutory interpretation.
2. **Statutory Anatomy**: Comprehensive deconstruction of clauses, provisos, explanations, and non-obstante clauses.
3. **Leading Precedents**: Extract the binding *ratio decidendi* and distinguish it from *obiter dicta*.
4. **Structured Examination Answers**:
   - **10-Mark Answer (`marks: 10`)**: 500–700 words formatted strictly using IRAC (Issue, Rule, Application, Conclusion).
   - **16-Mark Answer (`marks: 16`)**: 900–1200 words formatted using CREAC (Conclusion, Rule, Explanation, Application, Counter-arguments & Conclusion) with comparative and critical analysis.
5. **Doubt-Clearing Matrix**: Dispel common examination traps, subtle distinctions from neighbouring provisions, and false equivalences.

---

## 4. Official Sources

- **Primary Legislation**: Gazette of India / India Code / Legislative Department official release.
- **Judicial Authorities**: Supreme Court Reports (SCR), Supreme Court Cases (SCC), All India Reporter (AIR).
- **Prohibition**: Never invent section numbers, statutory illustrations, case holdings, or unverified cross-mappings. Mark unverified data as `needs-review`.
