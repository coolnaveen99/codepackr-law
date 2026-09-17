# Codepackr Law

[![Live App](https://img.shields.io/badge/Live%20App-law.codepackr.com-2563eb?style=for-the-badge&logo=vercel)](https://law.codepackr.com)
[![Parent Hub](https://img.shields.io/badge/Parent%20Hub-codepackr.com-0ea5e9?style=for-the-badge&logo=github)](https://www.codepackr.com)
[![License](https://img.shields.io/badge/%C2%A9%202026-All%20Rights%20Reserved-6b7280?style=for-the-badge)](https://law.codepackr.com)

**Codepackr Law** is a free collection of browser-based Indian law learning tools for AIBE, Judiciary, Bare Act MCQs, flashcards, and more.  
Live at **[law.codepackr.com](https://law.codepackr.com)** (coming soon).

All tools run **100% client-side**. Your practice data never leaves your device.

---

## ⚖️ Implemented & Live Tools Directory

### 1. MCQ Practice (`mcq`)
- **AIBE & Judiciary MCQ Practice** (`#/tool/aibe-mcq`): Subject-wise question banks (Constitution, BNS, BNSS, BSA, CPC, Contract, Family Law), Bare Act citations, question palette with review tracking, instant feedback in practice mode, and timed exam simulation.

### 2. Bare Act & Section Tools (`bare-acts`)
- **BNS ↔ IPC & Criminal Laws Mapper** (`#/tool/bns-ipc-mapper`): Instant cross-mapping and change analyzer across Bharatiya Nyaya Sanhita (BNS 2023) ↔ IPC, BNSS ↔ CrPC, and BSA ↔ Evidence Act. Fast search, major reforms filter, and one-click copy.

### 3. Study Aids (`study-aids`)
- **Important Section Flashcards** (`#/tool/section-flashcards`): High-weight Bare Act sections & constitutional articles with interactive 3D flip card, active recall scoring (Mastered vs Needs Review), shuffle, and keyboard controls.
- **AIBE & Judiciary Exam Timer** (`#/tool/exam-timer`): Dedicated 3h 30m AIBE and 2h Judiciary prelims timer with real-time target question pacing indicator and synthesized client-side audio bell alerts.

### 4. Reference Helpers (`reference`)
- **Legal Maxims Quiz & Dictionary** (`#/tool/legal-maxims`): Searchable Latin legal maxims dictionary with English translations, applications, and an interactive quiz mode.
- **Landmark Case Laws Flashcards** (`#/tool/landmark-cases`): Foundational Supreme Court of India precedents (*Kesavananda Bharati*, *Maneka Gandhi*, *Puttaswamy*, *Lalita Kumari*, *D.K. Basu*, *Shreya Singhal*, *Shayara Bano*), ratio decidendi, bench details, and exam significance.

> All content and practice data stay on the user’s device. No accounts required for core tools.

---

## ✨ Features

- **100% Client-Side Privacy** — Practice data never uploaded
- **India-focused** — Built around AIBE, State Judiciary & new criminal laws (BNS / BNSS / BSA)
- **Theme Support** — Light + Dark mode
- **Deep Linking** — Clean tool URLs
- **Offline Capable** — PWA-ready design
- **Responsive** — Mobile & desktop
- **SEO & AdSense Ready**

---

## 🖤 Brand & Theme

| Item | Value |
|------|-------|
| Accent color | Blue `#2563eb` |
| Header title | **Codepackr Law** |
| Tagline | *100% Client-Side Indian Law Learning Tools* |
| Backlink | `← Codepackr Dev Suite` → [codepackr.com](https://www.codepackr.com) |
| Sibling products | [study.codepackr.com](https://study.codepackr.com) (Indigo) · [finance.codepackr.com](https://finance.codepackr.com) (Emerald) |

Blue is chosen for authority and clarity, distinct from Study (indigo) and Finance (emerald).

---

## 🚀 Development Quickstart

```bash
git clone https://github.com/coolnaveen99/codepackr-law.git
cd codepackr-law
npm install
npm run dev          # → http://localhost:3000
npm run lint
npm run build
```

Stack: React 18 + TypeScript + Vite + Tailwind CSS v4.

---

## 📝 Contributing

**Required reading before adding any tool:**

1. [CONTRIBUTING.md](CONTRIBUTING.md)
2. [AI_INSTRUCTIONS.md](AI_INSTRUCTIONS.md) — Complete AI / builder guide
3. [`.github/copilot-instructions.md`](.github/copilot-instructions.md)
4. [`.github/skills/add-new-tool.md`](.github/skills/add-new-tool.md)
5. [`.github/skills/tool-quality-gate.md`](.github/skills/tool-quality-gate.md)

Key rules:
- 100% client-side only
- Every tool needs Sample / Demo, Reset, and Copy where applicable
- Blue brand only (`#2563eb`)
- Quality Gate must be fully green

---

## 🛠️ Project Structure (Current)

```
codepackr-law/
├── .github/
│   ├── agents/
│   ├── prompts/
│   ├── skills/
│   └── copilot-instructions.md
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── AI_INSTRUCTIONS.md
├── AGENTS.md
├── CONTRIBUTING.md
├── README.md
└── package.json
```

---

## ⚖️ Copyright & Privacy

**© 2026 Codepackr Law. All rights reserved.**

**Privacy guarantee:** All MCQs, flashcards, and practice tools execute entirely in the browser. No study or personal data is transmitted to Codepackr servers.

Parent suite: [Codepackr](https://www.codepackr.com)  
Source: [coolnaveen99/codepackr-law](https://github.com/coolnaveen99/codepackr-law)
