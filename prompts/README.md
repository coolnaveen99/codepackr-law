# CodePackr Law — AI Prompts Library

This folder contains standardized, battle-tested master prompts to instruct any external AI model (Claude, ChatGPT, Copilot, DeepSeek, Cursor, etc.) to generate or update legal content according to **Senior Counsel & PhD Scholarship Standards**.

---

## 📋 Available Prompts

Choose the prompt that matches your workflow:

| Scenario / Need | Prompt File | What it Does |
| :--- | :--- | :--- |
| ⚡ **Fast & Simplified (Recommended)** | [`SIMPLIFIED_PROMPT_GUIDE.md`](./SIMPLIFIED_PROMPT_GUIDE.md) | **1-Minute Quick-Prompts** for Constitutional Law, Labour Law, Criminal Law, and quick file overwrites. |
| **Scenario 1: New Topic (Known ID)** | [`TOPIC_AUTHORING_AI_PROMPT.md`](./TOPIC_AUTHORING_AI_PROMPT.md) | Complete prompt template when you already know the `topicId` (e.g. `art-21`, `s-300`). |
| **Scenario 2: New Topic / New Subject (Unknown ID)** | [`NEW_TOPIC_OR_SUBJECT_PROMPT.md`](./NEW_TOPIC_OR_SUBJECT_PROMPT.md) | Formulates the canonical `topicId`, generates the catalog entry for `src/data/subjects.ts`, and authors the treatise file. |
| **Scenario 3: Audit & Upgrade Existing Topic** | [`UPGRADE_EXISTING_TOPIC_PROMPT.md`](./UPGRADE_EXISTING_TOPIC_PROMPT.md) | Takes an existing file, audits it, preserves genuine data, strips old 10/16-mark wording, and outputs a complete drop-in replacement. |

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

### Step 3: Run with Your Preferred AI
Paste the customized prompt into **any AI model**:
* **Claude 3.7 / 3.5 Sonnet** (Anthropic)
* **ChatGPT (GPT-4o / o1 / o3-mini)** (OpenAI)
* **GitHub Copilot / Cursor IDE**
* **DeepSeek V3 / R1**

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
