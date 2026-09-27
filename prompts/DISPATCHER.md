# CodePackr Law — Master Instruction Listener & Dispatcher (`DISPATCHER.md`)

> **THE LISTENER ARCHITECTURE:**  
> This file functions as the **Central Listener and Event Router** for CodePackr Law.  
> Just like an event listener in software, you can give your AI assistant a single-line command:
>
> 💬 **`"add topics in BSA. follow prompts/DISPATCHER.md"`**  
> or  
> 💬 **`"add topic in Labour: Section 25F. follow prompts/DISPATCHER.md"`**  
> or  
> 💬 **`"update Article 21 in Constitution. follow prompts/DISPATCHER.md"`**
>
> **The Listener intercepts this command and performs automatic redirections:**
> 0. **Intent Gate (Judgments vs Topics)**: If the user asks for **famous judgments / case-law library / next judgment batch**, **STOP topic authoring** and **open and follow** [`prompts/ADD_FAMOUS_JUDGMENTS.md`](./ADD_FAMOUS_JUDGMENTS.md) (inventory first; missing only; never duplicate). Quality rules in Phase 5 of this file still apply.
> 1. **Subject Redirection**: Detects the subject (`BSA`, `Labour`, `Constitution`, etc.) and directs to the correct governing statute and directory (`src/data/topics/<subject>/`).
> 2. **Topic / Section Redirection**: If a specific section is given, it targets it. If only a subject is given (e.g., `"add topics in BSA"`), the listener consults the **Priority Queue** below and automatically selects the highest-yield missing provision!
> 3. **Schema Redirection**: Applies the Senior Counsel & PhD standard (5 Doctrinal Modules, dual statutory illustrations, extracted case ratios, IRAC Case Brief, Written Submissions, zero marks).
> 4. **Catalog Redirection**: Emits the exact entry for [`src/data/subjects.ts`](../src/data/subjects.ts).

**Example one-liners that must route to judgments (not topics):**
> 💬 `"add famous judgments. follow prompts/DISPATCHER.md"`  
> 💬 `"next famous set / next batch. follow prompts/DISPATCHER.md"`  
> 💬 `"add missing landmarks only. follow prompts/DISPATCHER.md"`

---

## 🤖 INSTRUCTIONS FOR THE AI ASSISTANT (THE LISTENER ENGINE)

When the user gives a command and points you to this file:

### PHASE 0: INTENT GATE (JUDGMENTS vs TOPICS) — RUN FIRST

**Before** subject/topic routing, classify the request:

| User intent signals | Action |
|---------------------|--------|
| `famous judgment(s)`, `famous set`, `next batch` (in case-law context), `landmarks`, `case law library`, `ALL_JUDGMENTS`, `add judgments`, `missing judgments` | **Redirect immediately** to [`prompts/ADD_FAMOUS_JUDGMENTS.md`](./ADD_FAMOUS_JUDGMENTS.md). Follow that file end-to-end: **inventory all existing judgment ids first**, add **only missing** entries, **never duplicate**. Apply **Phase 5 quality checks** from this DISPATCHER (zero marks, zero hallucination, verified citations). Do **not** author `src/data/topics/...` files for this intent. |
| `add topic(s)`, `update Article/Section`, subject name (BSA, BNS, Labour, etc.) without judgment-library language | Continue with **PHASE 1** below (topic treatise flow). |

If both topic and judgment intents appear, prefer the **explicit** object of the sentence (e.g. “add famous judgments” → judgments file; “add topics in BSA” → topics).

### PHASE 1: LISTEN & PARSE INTENT (TOPICS ONLY)
1. **Identify the Subject**: Determine which subject was called (BSA, BNS, BNSS, Constitution, CPC, Labour, Contract, Tort, Family).
2. **Identify Provision / Resolve from Priority Queue**:
   - **Scenario A (Specific Provision Named)**: User named a section/article (e.g., "Section 63", "Article 21", "Section 25F"). Use that provision.
   - **Scenario B (General Subject Request)**: User gave a general command like `"add topics in BSA"` or `"add more topics in Labour"`. **The Listener automatically selects the highest-priority provision** from the table in Phase 2!
3. **Determine the Operation Mode**:
   - If the file already exists in `src/data/topics/<subject>/<topicId>.ts` → **UPGRADE MODE** (preserve existing good citations, remove 10/16-mark phrasing, expand to 5 Senior Counsel modules).
   - If the file does not exist → **CREATION MODE** (formulate canonical `topicId`, generate catalog snippet, author full treatise).

---

### PHASE 2: SUBJECT ROUTING TABLE & PRIORITY QUEUE

The listener redirects according to this table. If no specific section was named, pick the first pending topic from the **High-Yield Priority Queue**:

| User Says (Subject) | Governing Act / Code | Folder | High-Yield Priority Queue (add in this order if unspecified) |
|---|---|---|---|
| **BSA** / Evidence | Bharatiya Sakshya Adhiniyam, 2023 | `src/data/topics/bsa/` | s. 63 (electronic records), ss. 104–106 (burden), s. 6 (res gestae), s. 22 (admissions), ss. 157–159 (refreshing memory), dying declaration stack |
| **BNS** / IPC / Crimes | Bharatiya Nyaya Sanhita, 2023 | `src/data/topics/bns/` | s. 100–106 (private defence), s. 101 (right of private defence of body), homicide stack (ss. 100–106 BNS mapping), sexual offences, theft/extortion/robbery |
| **BNSS** / CrPC | Bharatiya Nagarik Suraksha Sanhita, 2023 | `src/data/topics/bnss/` | FIR & investigation, arrest, bail, charge, trial, s. 482-equivalents / inherent powers mapping |
| **Constitution** | Constitution of India | `src/data/topics/constitution/` | Art. 14, 19, 21, 32, basic structure, emergency, federalism, judiciary |
| **CPC** | Code of Civil Procedure, 1908 | `src/data/topics/cpc/` | Jurisdiction, res judicata, injunctions, execution, appeals |
| **Labour** | ID Act / related labour statutes | `src/data/topics/labour/` | s. 25F, retrenchment, industrial dispute, standing orders |
| **Contract** | Indian Contract Act, 1872 | `src/data/topics/contract/` | Offer/acceptance, consideration, frustration, breach, damages |
| **Tort** | Common law of torts (India) | `src/data/topics/tort/` | Negligence, nuisance, defamation, strict/absolute liability |
| **Family** | HMA / personal laws | `src/data/topics/family/` | Marriage, divorce, maintenance, custody, succession gateways |

*(Full priority queues and statute notes continue in the remainder of the operational playbook used by this repo; do not invent section numbers.)* 

---

### PHASE 3: TOPIC ID & CATALOG REGISTRATION

Formulate a canonical `topicId`:
- Statutory section: `s-<number>` or `s-<number>-<slug>` (e.g. `s-63`, `s-25f`)
- Constitutional article: `art-<number>` or `art-<number>-<slug>` (e.g. `art-21`, `art-300a`)
- Doctrine topic: `doctrine-<slug>` or `<theme-slug>` (e.g. `doctrine-frustration`, `promissory-estoppel`)

**If not already present in `src/data/subjects.ts`**, output the registration snippet:
```typescript
{
  id: '<TOPIC_ID>',
  name: '<Topic Display Name>',
  type: '<section|article|doctrine|concept>',
  range: '<s. XX or Art. XX>',
  cluster: '<Thematic Cluster>',
  note: '<Crisp scope note>',
  highYield: true,
  hasNotes: true,
}
```

---

### PHASE 4: THE SENIOR COUNSEL & PhD TREATISE SPECIFICATION

Generate the complete, unshortened file `src/data/topics/<subjectSlug>/<topicId>.ts` conforming strictly to `TopicContent` (5 doctrinal modules, dual illustrations, IRAC brief, written submissions, bareActPointers, examTips, revisionPoints). **Do not use this phase for famous-judgment library batches** — those use `ADD_FAMOUS_JUDGMENTS.md`.

Mandatory content discipline:
- Real citations only; extract ratio; separate obiter.
- Zero “10-mark” / “16-mark” phrasing in topic UI fields.
- Align BSA burden language to BSA 2023 where evidence is discussed.
- Benchmark depth: `src/data/topics/cpc/s-32.ts` and subject SOP files under `.github/`.

---

### PHASE 5: MANDATORY QUALITY & INTEGRITY CHECKS

Applies to **both** topic treatises and judgment-library work:

1. **ZERO 10/16 MARKS**: NEVER output "10-mark", "16-mark", or mark rubrics.
2. **ZERO RAW MARKDOWN IN UI**: Use the structured fields instead of dumping raw `#` or `---` text into content fields meant for the app UI.
3. **ZERO HALLUCINATION**: Real case citations with real ratios only. If unverified, mark as `needs-review` / `status: 'draft'`.
4. **CHECKLIST SYNCHRONIZATION**: For topics, mark complete in `docs/subject-coverage-checklist.md` (or run `npm run checklist`) and verify `hasNotes: true` in `src/data/subjects.ts`.
5. **JUDGMENT LIBRARY EXTRA**: If Phase 0 routed to judgments — also enforce [`ADD_FAMOUS_JUDGMENTS.md`](./ADD_FAMOUS_JUDGMENTS.md): inventory first, unique ids, valid `relatedCases.judgmentId`, catalog-safe `provisions.topicId` only.

OUTPUT THE COMPLETE CODE FILE NOW (topic **or** judgment batch as routed by Phase 0).
