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

| Subject Mentioned | Slug & Folder | High-Yield Priority Queue (If no section specified) | Governing Statutes & Legal Nuances |
|---|---|---|---|
| **BSA / Evidence** | `bsa`<br>`src/data/topics/bsa/` | **1. `s-63`** (Electronic Records & 65B Certificate)<br>**2. `s-104`** (Burden of Proof)<br>**3. `s-6`** (Motive, Preparation & Conduct)<br>**4. `s-22`** (Confession: Inducement, Threat, Coercion or Promise)<br>**5. `s-162`** (Refreshing Memory) | **Bharatiya Sakshya Adhiniyam, 2023**. Always cross-link BSA s. 63 with BNSS investigation provisions. |
| **BNS / Penal Law** | `bns`<br>`src/data/topics/bns/` | **1. `s-103`** (Murder vs Culpable Homicide)<br>**2. `s-111`** (Organised Crime)<br>**3. `s-304`** (Snatching)<br>**4. `s-64`** (Rape & Consent)<br>**5. `s-3-5`** (Common Intention) | **Bharatiya Nyaya Sanhita, 2023** (in force 1 July 2024). IPC is historical concordance. Watch section shifts. |
| **BNSS / Criminal Procedure** | `bnss`<br>`src/data/topics/bnss/` | **1. `s-35`** (Arrest Procedure & Safeguards)<br>**2. `s-187`** (Police Remand)<br>**3. `s-480-482`** (Bail & Anticipatory Bail)<br>**4. `s-531`** (Transitional Rules)<br>**5. `s-193`** (Cognizance) | **Bharatiya Nagarik Suraksha Sanhita, 2023**. Always analyze **Section 531 BNSS** transitional rules. |
| **Constitution** | `constitution`<br>`src/data/topics/constitution/` | **1. `art-21`**<br>**2. `art-14`**<br>**3. `art-19`**<br>**4. `basic-structure`**<br>**5. `art-32-226`** | Constitution of India. Basic structure, emergency, federalism, judiciary. |
| **CPC** | `cpc`<br>`src/data/topics/cpc/` | Jurisdiction, res judicata, injunctions, execution, appeals | Code of Civil Procedure, 1908 |
| **Labour** | `labour`<br>`src/data/topics/labour/` | s. 25F, retrenchment, industrial dispute | Industrial Disputes Act and related |
| **Contract** | `contract`<br>`src/data/topics/contract/` | Offer/acceptance, consideration, frustration, breach | Indian Contract Act, 1872 |
| **Tort** | `tort`<br>`src/data/topics/tort/` | Negligence, nuisance, strict/absolute liability | Indian tort jurisprudence |
| **Family** | `family`<br>`src/data/topics/family/` | Marriage, divorce, maintenance, custody | HMA / personal laws |

*(Expand from repo priority queues and checklists; do not invent section numbers.)* 

---

### PHASE 3: TOPIC ID & CATALOG REGISTRATION

Formulate a canonical `topicId`:
- Statutory section: `s-<number>` or `s-<number>-<slug>` (e.g. `s-63`, `s-25f`)
- Constitutional article: `art-<number>` or `art-<number>-<slug>` (e.g. `art-21`, `art-300a`)
- Doctrine topic: `doctrine-<slug>` or `<theme-slug>`

**If not already present in `src/data/subjects.ts`**, output the registration snippet with `hasNotes: true`.

---

### PHASE 4: THE SENIOR COUNSEL & PhD TREATISE SPECIFICATION

Generate the complete file `src/data/topics/<subjectSlug>/<topicId>.ts` conforming strictly to `TopicContent` (5 doctrinal modules, dual illustrations, IRAC brief, written submissions, bareActPointers, examTips, revisionPoints). Benchmark: `src/data/topics/cpc/s-32.ts`.

**Do not use this phase for famous-judgment library batches** — those use [`ADD_FAMOUS_JUDGMENTS.md`](./ADD_FAMOUS_JUDGMENTS.md).

---

### PHASE 5: MANDATORY QUALITY & INTEGRITY CHECKS

Applies to **both** topic treatises and judgment-library work:

1. **ZERO 10/16 MARKS**: NEVER output "10-mark", "16-mark", or mark rubrics.
2. **ZERO RAW MARKDOWN IN UI**: Use structured fields instead of dumping raw `#` or `---` into UI content fields.
3. **ZERO HALLUCINATION**: Real case citations with real ratios only. If unverified, mark as `needs-review` / `status: 'draft'`.
4. **CHECKLIST SYNCHRONIZATION**: For topics, mark complete in coverage checklist and verify `hasNotes: true` in `src/data/subjects.ts`.
5. **JUDGMENT LIBRARY EXTRA**: If Phase 0 routed to judgments — also enforce [`ADD_FAMOUS_JUDGMENTS.md`](./ADD_FAMOUS_JUDGMENTS.md): inventory first, unique ids, valid `relatedCases.judgmentId`, catalog-safe `provisions.topicId` only.

OUTPUT THE COMPLETE CODE FILE NOW.
