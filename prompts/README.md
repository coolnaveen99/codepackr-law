# CodePackr Law — AI Prompts Library

This folder contains standardized, battle-tested master prompts to instruct any external AI model (Claude, ChatGPT, Copilot, DeepSeek, Cursor, etc.) to generate or update legal content according to **Senior Counsel & PhD Scholarship Standards**.

---

## 📋 Available Prompts

1. **[`TOPIC_AUTHORING_AI_PROMPT.md`](./TOPIC_AUTHORING_AI_PROMPT.md)**
   - **Purpose:** Full book-chapter treatise generation for any section, article, or legal topic in `src/data/topics/<subjectSlug>/<topicId>.ts`.
   - **Features:** 
     - 5 Doctrinal Modules (Provenance, Textual Anatomy, Mandatory Ingredients, Evidentiary Burdens under BSA 2023, Procedural/Limitation Roadmap).
     - Dual Statutory Illustrations (Proving vs Boundary Failure / Defect).
     - Extracted Landmark Case Law Ratios (`ratioDecidendi`, `court`, `bench`, `facts`, `issue`, courtroom application).
     - Chamber Practice Problem Assessment (IRAC) & Comprehensive Appellate Written Submissions.
     - **Zero Exam Marks:** Eliminates the obsolete 10/16-mark collegiate paradigm.

---

## 🚀 Step-by-Step Workflow: How to Author / Update a Topic

Follow these 6 simple steps whenever you use an AI model to create or update a topic:

### Step 1: Open the Master Prompt
Open [`prompts/TOPIC_AUTHORING_AI_PROMPT.md`](./TOPIC_AUTHORING_AI_PROMPT.md) and copy the entire markdown prompt block.

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
