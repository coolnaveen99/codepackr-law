# Skill: Reusable Legal Knowledge (Senior Counsel & PhD Knowledge Graph)

**Mandatory SOP** before creating or referencing any legal doctrine, concept, precedent, article, section, maxim, definition, principle, or procedural rule.

Full architecture: [`docs/reusable-legal-knowledge-architecture.md`](../../docs/reusable-legal-knowledge-architecture.md)  
Global legal-content rules: [`.github/instructions/global-legal-content.md`](../instructions/global-legal-content.md)

---

## 1. The Core Canonical Mandate

```text
SEARCH FIRST → REUSE IF EXISTS → CREATE ONLY IF NEW → TAG IT → LINK IT → VALIDATE IT
```

One legal concept → one canonical entity → stable ID → meaningful tags → reusable `[[REF:TYPE:CATEGORY:SLUG]]` references.

---

## 2. Entity Storage Layers

| Layer | Path | Scope & Entity Kinds |
|-------|------|----------------------|
| **Canonical Knowledge Graph** | `src/data/knowledge/` | Jurisprudential doctrines, procedural principles, evidence maxims, definitions, statutory tests, hub topics, and cross-statutory relationships. |
| **Constitution Articles** | `src/data/constitution/articles.ts` | Complete article catalog linked as `ARTICLE:CONSTITUTION:ARTICLE-<N>`. |
| **BNS Sections** | `src/data/bns/sections.ts` | Complete section catalog linked as `SECTION:BNS:SECTION-<N>`. |
| **Landmark Cases** | `src/data/constitution/cases.ts`, `src/data/judgments/` | Precedents with binding ratio decidendi linked as `CASE:<DOMAIN>:<PARTY-NAME-YEAR>`. |
| **Amendments** | `src/data/constitution/amendments.ts` | Constitutional amendments linked as `STATUTE:CONSTITUTION:AMENDMENT-<N>`. |
| **Topic Treatises** | `src/data/topics/<slug>/<id>.ts` | Substantive book-chapter notes. Embed canonical IDs via `[[REF:...]]` rather than duplicating doctrine essays. |

---

## 3. Standard Canonical ID Schema

```text
TYPE:CATEGORY:SLUG
```

Examples:
- `DOCTRINE:CONSTITUTIONAL-LAW:BASIC-STRUCTURE`
- `DOCTRINE:CRIMINAL-LAW:COMMON-INTENTION`
- `DOCTRINE:CIVIL-PROCEDURE:RES-JUDICATA`
- `DOCTRINE:EVIDENCE:ELECTRONIC-CERTIFICATE`
- `ARTICLE:CONSTITUTION:ARTICLE-21`
- `SECTION:BNS:SECTION-103`
- `SECTION:BNSS:SECTION-482`
- `SECTION:BSA:SECTION-63`
- `CASE:CONSTITUTIONAL-LAW:KESAVANANDA-BHARATI-1973`
- `CASE:CIVIL-PROCEDURE:DAHIBEN-2020`
- `MAXIM:TORT:UBI-JUS-IBI-REMEDIUM`

---

## 4. Search Before Create

Before creating a new file or entity, query `findExisting(query)` against aliases, citations, titles, tags, and IDs.
- If an equivalent exists: Add a relationship or use `[[REF:...]]`. Never duplicate canonical explanations.
- If uncertain: Do not merge or overwrite. Flag for review as `needs-review`.

---

## 5. Validation

- The registry at `src/data/knowledge/registry.ts` automatically validates against duplicate IDs, malformed IDs, invalid relationship types, and dangling `[[REF:...]]` links at module load.
- Ensure `npm run lint` and `npm run build` pass without errors.
- All AI-generated synthesis text must be clearly contextualized as educational/analytical reference, not certified statutory text.
