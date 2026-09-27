# CodePackr Law — AI Prompts Library

This folder contains standardized, battle-tested master prompts to instruct any external AI model (Claude, ChatGPT, Copilot, DeepSeek, Cursor, etc.) to generate or update legal content according to **Senior Counsel & PhD Scholarship Standards**.

---

## Site completion playbook (product + content)

Before starting multi-file site work, open:

**[`docs/SITE_100_PERCENT_COMPLETION.md`](../docs/SITE_100_PERCENT_COMPLETION.md)**

That file is the phase-by-phase instruction set (Phases 0–9) to make the live site 100% done: homepage, subject page, topic page, practice, exam, case law, and all 20 locked subjects **without dropping topics**.

Suggested first prompt:

```text
Follow docs/SITE_100_PERCENT_COMPLETION.md.
Finish the next unfinished phase only.
Do not delete topics.
Run the phase exit gate before you stop.
```

---

## 📋 Available Prompts

Choose the prompt that matches your workflow:

| Scenario / Need | Prompt File | What it Does |
|---|---|---|
| 🚀 **Finish the whole site (phased)** | [`docs/SITE_100_PERCENT_COMPLETION.md`](../docs/SITE_100_PERCENT_COMPLETION.md) | Master AI playbook: homepage, subject pages, practice/exam, case law, zero topic omission, launch gate. |
| 🎯 **Central Listener & Router (Fastest)** | [`DISPATCHER.md`](./DISPATCHER.md) | **The Listener Hub:** Just type `"add topics in BSA. follow prompts/DISPATCHER.md"`. The AI listens, routes to the right statute/folder, and authors the treatise file automatically. |
| ⚖️ **Famous judgments (inventory-first)** | [`ADD_FAMOUS_JUDGMENTS.md`](./ADD_FAMOUS_JUDGMENTS.md) | **Case-law library only:** list all existing judgment ids first; add **missing** landmarks only; never duplicate. |
| ⚡ **Fast & Simplified** | [`SIMPLIFIED_PROMPT_GUIDE.md`](./SIMPLIFIED_PROMPT_GUIDE.md) | **1-Minute Quick-Prompts** for Constitutional Law, Labour Law, Criminal Law, and file overwrites. |
| **Scenario 1: New Topic (Known ID)** | [`TOPIC_AUTHORING_AI_PROMPT.md`](./TOPIC_AUTHORING_AI_PROMPT.md) | Complete prompt template when you already know the `topicId` (e.g. `art-21`, `s-300`). |
| **Scenario 2: New Topic / New Subject (Unknown ID)** | [`NEW_TOPIC_OR_SUBJECT_PROMPT.md`](./NEW_TOPIC_OR_SUBJECT_PROMPT.md) | Formulates canonical `topicId`, generates `subjects.ts` entry, and authors the treatise file. |
| **Scenario 3: Audit & Upgrade Existing Topic** | [`UPGRADE_EXISTING_TOPIC_PROMPT.md`](./UPGRADE_EXISTING_TOPIC_PROMPT.md) | Audits existing file, retains good data, purges 10/16-mark phrasing, and drops in a clean replacement. |
| **Scenario 4: Full Subject Overhaul & Missing Sections** | [`SUBJECT_AUDIT_AND_EXPANSION_PROMPT.md`](./SUBJECT_AUDIT_AND_EXPANSION_PROMPT.md) | **Batch Expansion:** Upgrades all existing files in a subject AND authors missing high-yield statutory sections. |
| **Judgment depth inside topics** | [`JUDGMENT_AND_BRIEF_DEPTH.md`](./JUDGMENT_AND_BRIEF_DEPTH.md) | Word-count and case-note depth rules when a **topic** file cites judgments. |

---

## Famous judgments — recommended user line

```text
Add missing famous judgments only. Follow prompts/ADD_FAMOUS_JUDGMENTS.md.
Inventory first. Do not add any judgment already in ALL_JUDGMENTS.
```

---

## 🚀 Step-by-Step Workflow: How to Author / Update a Topic

Follow these simple steps whenever you use an AI model to create or update a topic:

### Step 1: Choose & Open the Matching Prompt
* If you have an existing topic to upgrade, open [`prompts/UPGRADE_EXISTING_TOPIC_PROMPT.md`](./UPGRADE_EXISTING_TOPIC_PROMPT.md).
* If you are adding a topic that does not have a `topicId` yet, open [`prompts/NEW_TOPIC_OR_SUBJECT_PROMPT.md`](./NEW_TOPIC_OR_SUBJECT_PROMPT.md).
* If writing a fresh topic with an established ID, open [`prompts/TOPIC_AUTHORING_AI_PROMPT.md`](./TOPIC_AUTHORING_AI_PROMPT.md).
* If adding **famous judgments** to the case-law library, open [`prompts/ADD_FAMOUS_JUDGMENTS.md`](./ADD_FAMOUS_JUDGMENTS.md) and **inventory first**.

### Step 2: Fill in the 3 Target Parameters
At the top of the topic prompts, replace the 3 bracketed variables with your topic's specific details:
* **`[SUBJECT_SLUG]`**: The folder slug of the subject (e.g., `constitution`, `bns`, `bnss`, `bsa`, `cpc`, `tort`, `family`, `contract`).
* **`[TOPIC_ID]`**: The unique identifier of the topic (e.g., `art-21`, `s-300`, `negligence`, `res-judicata`).
* **`[STATUTE_PROVISION_NAME]`**: The exact statutory heading (e.g., `Article 21 of the Constitution of India`, `Section 300 BNS 2023 — Murder and Exceptions`).

### Step 3: Run the Prompt
Send the prompt to your AI assistant. It will automatically generate the complete, self-contained TypeScript file.

### Step 4: Save the Code File
Take the complete TypeScript code returned by the AI and save it to:
```text
src/data/topics/[SUBJECT_SLUG]/[TOPIC_ID].ts
```
*(If the parent folder does not exist, create it).*

### Step 5: Register the Topic in the Subject Catalog
Open [`src/data/subjects.ts`](../src/data/subjects.ts), find the target subject's `topics` array, and verify or add the topic entry with `hasNotes: true`.

### Step 6: Verify Build & Type Safety
Open your terminal in the project root and run the project’s typecheck/build scripts as documented in the repo README.
