# CodePackr Law — Add Famous Judgments (Inventory-First Prompt)

> **Use this prompt whenever the user says:**  
> `"add famous judgments"` / `"next batch"` / `"add missing landmarks"`  
> **and points to** `prompts/ADD_FAMOUS_JUDGMENTS.md` **or** `prompts/DISPATCHER.md`.

Related:
- Schema: [`src/data/judgments/types.ts`](../src/data/judgments/types.ts)
- Registry: [`src/data/judgments/index.ts`](../src/data/judgments/index.ts)
- Validation: [`src/utils/judgments/judgmentValidation.ts`](../src/utils/judgments/judgmentValidation.ts)
- Depth rules: [`prompts/JUDGMENT_AND_BRIEF_DEPTH.md`](./JUDGMENT_AND_BRIEF_DEPTH.md)
- Quality: [`prompts/DISPATCHER.md`](./DISPATCHER.md) Phase 5

---

## ⛔ HARD RULES (NON-NEGOTIABLE)

1. **NEVER add a judgment that already exists** in the library (same case, same id, or obvious duplicate under a different id).
2. **ALWAYS inventory first** — list every existing `judgment.id` before proposing or writing any new entry.
3. **Only missing judgments** may be authored and registered.
4. **Zero hallucination** — real SCC/AIR/SCR citations and ratios only; otherwise `status: 'draft'` and flag `needs-review`.
5. **Zero 10/16-mark** language (DISPATCHER Phase 5).
6. **`relatedCases[].judgmentId`** may only reference an id that already exists **or** is introduced in the **same** batch (and exported into `ALL_JUDGMENTS`).
7. **`provisions[].topicId`** only when the topic id exists in `src/data/subjects.ts` (catalog-safe). Prefer omit `topicId` rather than invent one.

---

## PHASE 0 — MANDATORY INVENTORY (DO THIS BEFORE ANYTHING ELSE)

Run these checks on the current `main` (or working tree):

```bash
# All judgment modules
ls src/data/judgments/

# Unique judgment ids (exclude MCQ ids)
grep -rh "id: '" src/data/judgments/ --include='*.ts' \
  | grep -v mcq \
  | sed "s/.*id: '//;s/',.*//;s/'.*//" \
  | sort -u

# Confirm registry wiring
cat src/data/judgments/index.ts
```

Or in code terms: load `ALL_JUDGMENTS` / `JUDGMENTS_BY_ID` and list every `judgment.id`.

### Output required in the assistant’s reply (before writing files)

```text
## Inventory
- Total existing judgments: <N>
- Existing ids:
  - id-1
  - id-2
  - ...

## Proposed to add (missing only)
- candidate-id — Case Name (Year) — why missing / high-yield

## Skipped (already present)
- case or id — reason: already in library as <existing-id>
```

**If a proposed case is already present → skip it. Do not rewrite or duplicate.**

---

## PHASE 1 — DEDUPE HEURISTICS

Treat as **already present** (do not add) if any of the following match an existing entry:

| Signal | Example |
|--------|---------|
| Same `id` | `kesavananda-bharati-1973` |
| Same neutral case name + year | *Maneka Gandhi* 1978 |
| Same citation | `(1978) 1 SCC 248` |
| Known alternate title of same decision | “Bank Nationalisation Case” = `rc-cooper-1970` |
| Privacy 2017 vs Aadhaar 2018 | Different decisions — **both** may exist (`puttaswamy-2017`, `puttaswamy-aadhaar-2018`) |
| Second / Third / Fourth Judges | Different decisions — distinct ids |

When unsure, **search** existing `caseName`, `shortName`, `citation`, and `id` fields before adding.

---

## PHASE 2 — SELECT MISSING ONLY

1. Build a candidate list of high-yield AIBE / Judiciary landmarks.
2. **Subtract** the inventory set.
3. Take only the remainder.
4. Prefer gaps in: basic structure, equality/reservation, criminal procedure, free speech, education, federalism, gender, environment, service law.
5. Batch size: default **5**; only use **10** when the user explicitly asks to double / increase count.

---

## PHASE 3 — AUTHOR (SCHEMA)

Each new judgment must satisfy `Judgment` in `types.ts` and validation:

**Required fields**

- `id` (kebab-case, unique, year suffix recommended)
- `caseName`, `year`, `citation`, `summary`
- `facts[]`, `issues[]`, `decision`, `ratioDecidendi`
- `subject`, `topics[]`, `tags[]`
- `provisions[]` (at least one where applicable)
- `reasoning[]`
- `source` with `verified: true` when citation is confirmed
- `status`: `'reviewed'` only if citation + ratio are solid; else `'draft'`

**Recommended**

- `holding`, `obiterDicta`, `arguments`, `examPoints`, `mcqs` (one solid MCQ)
- `relatedCases` with `judgmentId` only when safe under Hard Rule 6

**File layout**

- Prefer a new batch module:  
  `src/data/judgments/famous-landmarks-batch-<N>.ts`  
  exporting `FAMOUS_LANDMARKS_BATCH_<N>: Judgment[]`
- Do **not** paste duplicates into `legacy-batch-*.ts` or overwrite `kesavananda.ts`.

---

## PHASE 4 — REGISTER

1. Import the new batch in `src/data/judgments/index.ts`.
2. Spread it **once** into `ALL_JUDGMENTS`.
3. Do not register the same judgment in two batches.

```typescript
import { FAMOUS_LANDMARKS_BATCH_N } from './famous-landmarks-batch-N'

export const ALL_JUDGMENTS: Judgment[] = [
  // ...existing spreads...
  ...FAMOUS_LANDMARKS_BATCH_N,
]
```

---

## PHASE 5 — VERIFY

```bash
npm run validate:judgments   # or: npx tsx scripts/validate_judgments.ts
# optional
npm run build
```

Confirm:

- [ ] No duplicate ids
- [ ] No `relatedCases.judgmentId` pointing at missing ids
- [ ] No invalid `provisions.topicId` under `subjects.ts`
- [ ] New ids appear in the inventory command from Phase 0

---

## ONE-LINE USER INVOCATIONS

```text
Add missing famous judgments only. Follow prompts/ADD_FAMOUS_JUDGMENTS.md. Inventory first. Do not add any id already in ALL_JUDGMENTS.
```

```text
Next famous batch (5). Follow prompts/ADD_FAMOUS_JUDGMENTS.md — check all judgments first; add missing only.
```

```text
Next famous batch (10). Follow prompts/ADD_FAMOUS_JUDGMENTS.md — inventory first; skip anything already present.
```

---

## SNAPSHOT — ids known as of batch 8 (50)

> **This list goes stale.** Always re-run Phase 0. Snapshot only for orientation.

```text
adm-jabalpur-1976
ajay-hasia-1981
ak-gopalan-1950
anuradha-bhasin-2020
aruna-shanbaug-2011
bachan-singh-1980
bandhua-mukti-morcha-1984
bijoe-emmanuel-1986
common-cause-euthanasia-2018
dk-basu-1997
ep-royappa-1974
fourth-judges-njac-2015
francis-coralie-mullin-1981
golaknath-1967
hussainara-khatoon-1979
indira-gandhi-election-1975
indra-sawhney-1992
ir-coelho-2007
islamic-academy-2003
janhit-abhiyan-2022
jarnail-singh-2018
joseph-shine-2018
kesavananda-bharati-1973
kihoto-hollohan-1992
lalita-kumari-2013
lily-thomas-2013
m-nagaraj-2006
maneka-gandhi-1978
mc-mehta-oleum-1987
minerva-mills-1980
nabam-rebia-2016
nalsa-2014
navtej-johar-2018
olga-tellis-1985
pa-inamdar-2005
prakash-singh-2006
puttaswamy-2017
puttaswamy-aadhaar-2018
raja-ram-pal-2007
rc-cooper-1970
second-judges-1993
selvi-2010
shayara-bano-2017
shreya-singhal-2015
sr-bommai-1994
third-judges-1998
tma-pai-2002
unni-krishnan-1993
vineet-narain-1998
vishaka-1997
```

---

## ASSISTANT CHECKLIST (COPY INTO PR / REPLY)

- [ ] Phase 0 inventory run on current tree
- [ ] Proposed ids ∉ existing id set
- [ ] No duplicate citations / alternate titles of existing cases
- [ ] Schema + DISPATCHER Phase 5 respected
- [ ] Batch file added; `index.ts` wired once
- [ ] `validate:judgments` conceptually satisfied (unique ids, relatedCases, topicIds)
