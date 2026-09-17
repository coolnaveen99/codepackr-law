# Skill: Add New Tool to Codepackr Law

**Mandatory SOP.** Every new tool must follow this sequence.

## Principles

1. 100% client-side
2. Blue brand (`#2563eb`)
3. Complete UX (Sample/Demo where relevant, Reset, feedback)
4. India-focused legal content (AIBE / Judiciary / Bare Acts)
5. Quality Gate must pass

## Steps

1. Register in `src/data/tools.ts` (id, name, category, description, keywords, icon)
2. Build component under `src/components/tools/`
3. Wire routing / slug
4. Add SEO metadata
5. Update README tool list
6. Pass lint + build
7. Complete `.github/skills/tool-quality-gate.md`

## Categories

- `mcq` — Practice questions & mocks
- `bare-acts` — Section lookup & mappers
- `study-aids` — Flashcards, timers
- `reference` — Maxims, landmark cases

## Privacy

No network calls with user answers or scores. localStorage only on explicit opt-in.
