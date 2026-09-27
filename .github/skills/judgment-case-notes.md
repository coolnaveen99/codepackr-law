# Skill: Judgment Case Notes and Brief Depth

**Use with:** `.github/skills/add-topic-notes.md`, `prompts/NEW_TOPIC_OR_SUBJECT_PROMPT.md`, `prompts/UPGRADE_EXISTING_TOPIC_PROMPT.md`.

Official reports are often 30–40 pages. CodePackr Law does **not** paste the full report. It must still give a **usable 2-page case note**, not a one-line holding.

---

## 1. Rollout order (owner rule)

1. Apply this standard to **every new topic** from this commit onward.
2. Upgrade **existing** topics **one file at a time** with `prompts/UPGRADE_EXISTING_TOPIC_PROMPT.md`.
3. Do not bulk-rewrite the catalog.

---

## 2. Floors (non-negotiable for new topics)

| Layer | Floor | Forbidden |
|-------|--------|-----------|
| Case Brief (`draftingCategory: 'brief'`) | **500–700 words**, IRAC sentences | Section-number dump, 40–80 word stubs |
| Written Submissions (`submissions`) | **1000–1500 words** | Repeating the brief |
| Leading judgments | **Minimum 2 verified cases** | Empty `cases: []` |
| Each leading case note | **~2 pages / 900–1,200 words** | Two-sentence facts only |
| Full official report | Citation + official source only | Pasting 40-page SCC text |

Glance / examTips / revisionPoints stay short.

---

## 3. Two-page case note (write this for each leading case)

Use the `cases[]` fields **and** a dedicated study section or long `facts` + `ratioDecidendi` + `relevance` so the student can read ~2 pages without opening SCC.

Required headings in substance (plain sentences, no raw markdown tokens in UI):

1. Header — name, verified citation, court, year, bench if verified
2. Material facts — only facts that drive the ratio
3. Issue(s) actually decided
4. Statutory / constitutional hook
5. Arguments of both sides (short, accurate)
6. Decision (allowed / dismissed / remanded)
7. Ratio decidendi in full sentences
8. What the Court did **not** decide
9. Use on **this** topic (pleadings / exam line)
10. Distinguishing limit — when the case does not apply

`cases[]` minimum fields: `name`, `year`, `citation`, `court`, `holding`, `facts`, `issue`, `ratioDecidendi`, `relevance`.

Never invent a citation. If unverified, mark `needs-review` and do not present it as settled law.

---

## 4. How the brief must use the cases

The 500–700 word brief is not a substitute for the 2-page notes.

Inside the brief, cite **at least two** authorities like this:

- Case name + citation
- One sentence of ratio
- One sentence of application to the provision

Example standard: *Dalpat Kumar v. Prahlad Singh* (1992) 1 SCC 719 — the Supreme Court required a prima facie case, balance of convenience and irreparable injury before a temporary injunction. Then apply those three tests to the facts of the topic.

---

## 5. Where the 2 pages live

Do **not** stuff 2,000 words into the one-line `holding` card only.

Preferred split:

- `cases[]` — structured header + ratio + a substantial `facts` / `ratioDecidendi` / `relevance` (not two sentences)
- `sections[]` — one module titled like `Leading authorities and extracted ratios` containing the 2-page notes
- `questionsAndAnswers` brief — compressed citation use only

Reuse a canonical knowledge-graph case id when it already exists. Do not duplicate a second conflicting ratio for the same citation.

---

## 6. Done check

A new topic is not done if any of these is true:

- `cases` is missing or empty
- a listed case has name only, no citation and no ratio
- facts are two sentences and nothing else
- brief is under ~500 words or has no case sentences
- official judgment text is dumped verbatim
