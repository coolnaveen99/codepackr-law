# CodePackr Law — AI Prompts Library

This folder contains standardized, battle-tested master prompts to instruct any external AI model (Claude, ChatGPT, Copilot, DeepSeek, Cursor, etc.) to generate or update legal content according to **Senior Counsel & PhD Scholarship Standards**.

---

## 📋 Available Prompts

Choose the prompt that matches your workflow:

| Scenario / Need | Prompt File | What it Does |
| 🎯 **Central Listener & Router (Fastest)** | [`DISPATCHER.md`](./DISPATCHER.md) | **The Listener Hub:** Just type `"add topics in BSA. follow prompts/DISPATCHER.md"`. The AI listens, routes to the right statute/folder, and authors the treatise file automatically. |
| ⚡ **Fast & Simplified** | [`SIMPLIFIED_PROMPT_GUIDE.md`](./SIMPLIFIED_PROMPT_GUIDE.md) | **1-Minute Quick-Prompts** for Constitutional Law, Labour Law, Criminal Law, and file overwrites. |
| **Scenario 1: New Topic (Known ID)** | [`TOPIC_AUTHORING_AI_PROMPT.md`](./TOPIC_AUTHORING_AI_PROMPT.md) | Complete prompt template when you already know the `topicId` (e.g. `art-21`, `s-300`). |
| **Scenario 2: New Topic / New Subject (Unknown ID)** | [`NEW_TOPIC_OR_SUBJECT_PROMPT.md`](./NEW_TOPIC_OR_SUBJECT_PROMPT.md) | Formulates canonical `topicId`, generates `subjects.ts` entry, and authors the treatise file. |
| **Scenario 3: Audit & Upgrade Existing Topic** | [`UPGRADE_EXISTING_TOPIC_PROMPT.md`](./UPGRADE_EXISTING_TOPIC_PROMPT.md) | Audits existing file, retains good data, purges 10/16-mark phrasing, and drops in a clean replacement. |
| **Scenario 4: Full Subject Overhaul & Missing Sections** | [`SUBJECT_AUDIT_AND_EXPANSION_PROMPT.md`](./SUBJECT_AUDIT_AND_EXPANSION_PROMPT.md) | **Batch Expansion:** Upgrades all existing files in a subject AND authors missing high-yield statutory sections. |

---

## 🚀 Step-by-Step Workflow: How to Author / Update a Topic

Follow these simple steps whenever you use an AI model to create or update a topic:

### Step 1: Choose & Open the Matching Prompt
* If you have an existing topic to upgrade, open [`prompts/UPGRADE_EXISTING_TOPIC_PROMPT.md`](./UPGRADE_EXISTING_TOPIC_PROMPT.md).
* If you are adding a topic that does not have a `topicId` yet, open [`prompts/NEW_TOPIC_OR_SUBJECT_PROMPT.md`](./NEW_TOPIC_OR_SUBJECT_PROMPT.md).
* If writing a fresh topic with an established ID, open [`prompts/TOPIC_AUTHORING_AI_PROMPT.md`](./TOPIC_AUTHORING_AI_PROMPT.md).

### Step 2: Fill in the 3 Target Parameters
At the top of the prompt, replace the 3 bracketed variables with your topic's specific details:
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
Open [`src/data/subjects.ts`](../src/data/subjects.ts), find the target subject's `topics` array, and verify or add the topic entry with `hasNotes: true`:
```typescript
{
  id: '[TOPIC_ID]',
  name: '<Topic Display Name>',
  type: 'concept', // or 'section' | 'article' | 'doctrine'
  hasNotes: true,
  range: '<Section or Article reference, e.g. Art 21 or s. 300>',
}
```

### Step 6: Verify Build & Type Safety
Open your terminal in the project root and run:
```bash
npx tsc --noEmit
npm run build
```
Ensure there are zero TypeScript compiler errors. Once verified, review your new topic live in the browser!
