# Skill: Reusable Legal Knowledge

**Mandatory SOP** before creating any doctrine, concept, case, article, maxim, definition, principle, procedure, or study topic.

Full architecture: [`docs/reusable-legal-knowledge-architecture.md`](../../docs/reusable-legal-knowledge-architecture.md)

## Golden rule

```
SEARCH FIRST → REUSE IF EXISTS → CREATE ONLY IF NEW → TAG IT → LINK IT → VALIDATE IT
```

One legal concept → one canonical entity → stable ID → meaningful tags → reusable `[[REF:TYPE:CATEGORY:SLUG]]` references.

## Where records live

| Layer | Path | What |
|-------|------|------|
| Canonical graph | `src/data/knowledge/` | Doctrines, concepts, maxims, definitions, principles, procedures, hub topics, relationships, validation |
| Constitution articles | `src/data/constitution/articles.ts` | Article digest reused as article-wise Study Topics |
| Landmark cases | `src/data/constitution/cases.ts` | Wrapped as `CASE:CONSTITUTIONAL-LAW:…` |
| Amendments 1–106 | `src/data/constitution/amendments.ts` | Wrapped as `STATUTE:CONSTITUTION:AMENDMENT-N` |
| Study Topic pages | `src/data/topics/<slug>/<id>.ts` | Page-specific study body. Reference canonical IDs; do not copy a doctrine essay |

## ID format

```
TYPE:CATEGORY:SLUG
```

Examples: `DOCTRINE:CONSTITUTIONAL-LAW:BASIC-STRUCTURE`, `ARTICLE:CONSTITUTION:ARTICLE-21`, `CASE:CONSTITUTIONAL-LAW:KESAVANANDA-BHARATI-1973`

Preserve existing IDs when editing. Never mint a second ID for the same concept.

## Search before create

Use `findExisting(query)` (aliases, citations, titles, tags, IDs) **before** adding a file.

If equivalent exists: add a relationship or `[[REF:…]]`. Do not duplicate the explanation.

If uncertain: do not merge, delete, or overwrite. Flag for review.

## Page-specific vs reusable

Reusable (canonical): doctrine, case, article, section, definition, maxim, principle, procedure.

Page-specific (Study Topic file): introduction, examples, exam tips for that page, Q&A.

An Article 368 page should `[[REF:DOCTRINE:CONSTITUTIONAL-LAW:BASIC-STRUCTURE]]` — not rewrite Basic Structure.

## Validation

`src/data/knowledge/registry.ts` validates duplicate IDs, broken `[[REF:]]`, invalid IDs, missing parents, and unknown relation kinds at module load. `npm run lint` / `npm run build` must stay green.

AI-generated explanations must be tagged educational. They are not official legal sources.
