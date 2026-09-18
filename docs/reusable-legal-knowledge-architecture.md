# CodePackr-Law — Reusable Legal Knowledge & Reference Architecture

## Purpose

CodePackr-Law must use a **single-source-of-truth architecture** for reusable legal knowledge.

Topics, subtopics, doctrines, legal principles, concepts, case laws, statutes, sections, articles, rules, definitions, legal maxims, and procedures should be created once and reused wherever required.

The goals are to:

- Avoid unnecessary duplicate content.
- Keep one canonical version of reusable legal knowledge.
- Allow multiple pages to reference the same content.
- Make updates easier and more consistent.
- Build a connected legal knowledge graph.
- Improve internal linking and discoverability.
- Prevent contradictory explanations of the same legal concept.
- Give AI agents clear rules for finding and reusing existing content.

---

## 1. Core Principle

**Create legal knowledge once. Tag it clearly. Reference it everywhere. Update it centrally.**

Before creating any reusable legal content, an agent MUST first determine whether equivalent content already exists.

If it exists:

> **Reuse the existing canonical entity. Do not create duplicate content.**

If it does not exist:

> **Create a new canonical entity with a stable ID, appropriate tags, metadata, and relationships.**

---

## 2. Supported Knowledge Types

The architecture should support at least:

```text
TOPIC
SUBTOPIC
DOCTRINE
LEGAL-PRINCIPLE
CONCEPT
CASE
STATUTE
SECTION
ARTICLE
RULE
REGULATION
DEFINITION
LEGAL-MAXIM
PROCEDURE
```

The system should remain extensible for additional legal knowledge types.

---

## 3. Canonical IDs

Every reusable entity MUST have a stable, unique canonical ID.

Recommended structure:

```text
TYPE:CATEGORY:SLUG
```

Examples:

```text
TOPIC:CONSTITUTIONAL-LAW:FUNDAMENTAL-RIGHTS

DOCTRINE:CONSTITUTIONAL-LAW:BASIC-STRUCTURE

CASE:CONSTITUTIONAL-LAW:KESAVANANDA-BHARATI-1973

CASE:CONSTITUTIONAL-LAW:MANEKA-GANDHI-1978

ARTICLE:CONSTITUTION:ARTICLE-21

SECTION:CONTRACT-ACT:SECTION-10
```

### ID rules

IDs must:

- Be unique.
- Be stable.
- Be reusable across pages.
- Not depend on a page URL.
- Not change merely because the title changes.
- Not be recreated for the same legal entity.

Agents must preserve an existing canonical ID when updating an entity.

---

## 4. Tags

Every reusable entity should have meaningful tags.

Example:

```yaml
id: DOCTRINE:CONSTITUTIONAL-LAW:BASIC-STRUCTURE
type: DOCTRINE
tags:
  - constitutional-law
  - constitutional-amendment
  - basic-structure
  - article-368
```

Case law example:

```yaml
id: CASE:CONSTITUTIONAL-LAW:KESAVANANDA-BHARATI-1973
type: CASE
tags:
  - constitutional-law
  - basic-structure
  - article-368
  - constitutional-amendment
```

### Tag rules

Tags should represent meaningful legal relationships and concepts.

Prefer:

```text
constitutional-law
fundamental-rights
article-21
personal-liberty
constitutional-amendment
basic-structure
natural-justice
```

Avoid meaningless generic tags unless the application explicitly requires them:

```text
law
legal
important
topic
study
case
```

Do not create unnecessary tag variations for the same concept.

---

## 5. Search Before Create

This is a mandatory rule for every CodePackr-Law AI agent.

Before creating a new legal entity, search the existing repository/knowledge base for:

1. Exact title.
2. Alternative titles.
3. Common abbreviations.
4. Synonyms.
5. Aliases.
6. Case-name variations.
7. Case citations.
8. Existing tags.
9. Related canonical IDs.
10. Existing references.

For example, these may all refer to the same case:

```text
Kesavananda Bharati
Kesavananda Bharati case
Kesavananda Bharati v State of Kerala
Kesavananda Bharati judgment
```

The agent must investigate whether they represent one existing canonical entity before creating another record.

---

## 6. Reuse Existing Content

When an equivalent canonical entity exists, use a reference instead of copying the full content.

Preferred reference syntax:

```text
[[REF:DOCTRINE:CONSTITUTIONAL-LAW:BASIC-STRUCTURE]]
```

Examples:

```text
[[REF:CASE:CONSTITUTIONAL-LAW:KESAVANANDA-BHARATI-1973]]

[[REF:ARTICLE:CONSTITUTION:ARTICLE-21]]

[[REF:DOCTRINE:CONSTITUTIONAL-LAW:BASIC-STRUCTURE]]

[[REF:TOPIC:CONSTITUTIONAL-LAW:FUNDAMENTAL-RIGHTS]]
```

The rendering layer may turn these references into:

- Internal links.
- Reusable content cards.
- Tooltips.
- Expandable explanations.
- Related-content sections.
- Structured navigation.
- SEO-friendly internal links.

The source content must retain the canonical reference ID.

---

## 7. Do Not Duplicate Canonical Content

If a doctrine already exists, do not rewrite the entire doctrine on every page.

For example, if this exists:

```text
DOCTRINE:CONSTITUTIONAL-LAW:BASIC-STRUCTURE
```

then an Article 368 page should reference it:

```text
[[REF:DOCTRINE:CONSTITUTIONAL-LAW:BASIC-STRUCTURE]]
```

It should not create another independent copy of the Basic Structure doctrine.

The same rule applies to:

- Case laws.
- Articles.
- Statutory sections.
- Definitions.
- Legal principles.
- Concepts.
- Maxims.
- Procedures.
- Topics.

---

## 8. Page-Specific vs Reusable Content

Every content-generation agent should distinguish between:

### Page-specific content

Content that belongs only to the current page.

Examples:

- Page introduction.
- Page-specific examples.
- Page-specific navigation.
- Page-specific study guidance.

### Reusable legal knowledge

Content that can logically be used elsewhere.

Examples:

- A doctrine.
- A case law.
- A statutory section.
- A constitutional article.
- A legal definition.
- A legal principle.
- A legal maxim.

Reusable content should become a canonical entity.

---

## 9. Example Architecture

Example:

```text
ARTICLE:CONSTITUTION:ARTICLE-21
        |
        +-- related --> CONCEPT:PERSONAL-LIBERTY
        |
        +-- interpreted-by --> CASE:CONSTITUTIONAL-LAW:MANEKA-GANDHI-1978
        |
        +-- related --> DOCTRINE:CONSTITUTIONAL-LAW:NATURAL-JUSTICE
```

Another page can reference the same entities:

```text
TOPIC:CONSTITUTIONAL-LAW:FUNDAMENTAL-RIGHTS
        |
        +-- ARTICLE:CONSTITUTION:ARTICLE-21
        |
        +-- CONCEPT:PERSONAL-LIBERTY
        |
        +-- CASE:CONSTITUTIONAL-LAW:MANEKA-GANDHI-1978
```

The result is a connected legal knowledge graph rather than a collection of duplicated pages.

---

## 10. Relationships

Entities may contain structured relationships.

Example:

```yaml
references:
  - id: DOCTRINE:CONSTITUTIONAL-LAW:BASIC-STRUCTURE
    relationship: related-doctrine
    context: constitutional-amendment
```

Suggested relationship types:

```text
related-topic
related-subtopic
related-doctrine
related-principle
related-case
related-statute
related-section
interpreted-by
established-by
applied-in
overruled-by
distinguished-by
referred-by
depends-on
see-also
```

Only use a relationship when it is supported by the underlying legal material.

Do not invent legal relationships.

---

## 11. Case-Law Structure

Case-law entities should contain structured metadata where available.

Example:

```yaml
id: CASE:CONSTITUTIONAL-LAW:KESAVANANDA-BHARATI-1973
type: CASE
title: Kesavananda Bharati v. State of Kerala
year: 1973
court: Supreme Court of India
citation: "[canonical citation]"
tags:
  - constitutional-law
  - basic-structure
  - article-368
```

A canonical case entity can be referenced by:

- Topic pages.
- Doctrine pages.
- Article pages.
- Section pages.
- Study notes.
- Case-law collections.
- Exam-preparation content.
- Legal timelines.
- Related legal concepts.

Maintain the case only once.

---

## 12. Doctrine Structure

A doctrine should have one canonical explanation.

Example:

```yaml
id: DOCTRINE:CONSTITUTIONAL-LAW:BASIC-STRUCTURE
type: DOCTRINE
title: Doctrine of Basic Structure
tags:
  - constitutional-law
  - constitutional-amendment
  - article-368

references:
  - CASE:CONSTITUTIONAL-LAW:KESAVANANDA-BHARATI-1973
```

Other pages should reference this doctrine rather than creating another canonical explanation.

---

## 13. Topic Structure

Topics should also be reusable.

Example:

```yaml
id: TOPIC:CONSTITUTIONAL-LAW:FUNDAMENTAL-RIGHTS
type: TOPIC
title: Fundamental Rights
tags:
  - constitution
  - fundamental-rights
  - part-iii
```

Subtopics may reference their parent topic:

```yaml
parent:
  - TOPIC:CONSTITUTIONAL-LAW:FUNDAMENTAL-RIGHTS
```

---

## 14. Duplicate Detection

Before creating an entity, agents must check for potential duplicates using:

- Exact title.
- Alternate title.
- Spelling variations.
- Abbreviations.
- Synonyms.
- Historical names.
- Case-name variations.
- Citations.
- Tags.
- Existing relationships.

If two records appear equivalent, do not automatically create a new record.

Investigate first.

If equivalence remains uncertain:

```text
DO NOT MERGE
DO NOT DELETE
DO NOT OVERWRITE
```

Flag the issue for review.

---

## 15. Updating Existing Entities

When a canonical entity changes:

1. Update the canonical source.
2. Keep the existing canonical ID.
3. Do not create a replacement duplicate.
4. Find all references to the entity.
5. Verify that references remain valid.
6. Update indexes/search metadata if required.
7. Run relevant validation and tests.

Where technically possible, all pages should automatically consume the current canonical version.

---

## 16. Agent Workflow

All content agents should follow this workflow:

```text
REQUEST
   |
   v
UNDERSTAND REQUIRED LEGAL CONTENT
   |
   v
SEARCH EXISTING KNOWLEDGE
   |
   v
EXISTING EQUIVALENT ENTITY?
   |
   +------ YES ------+
   |                 |
   v                 v
REUSE CANONICAL ID   CREATE REFERENCE
                     |
                     v
                  CONTINUE
   |
   NO
   |
   v
CREATE NEW CANONICAL ENTITY
   |
   v
ASSIGN UNIQUE ID
   |
   v
ASSIGN TAGS
   |
   v
ADD VALID RELATIONSHIPS
   |
   v
VALIDATE
```

---

## 17. Mandatory Rule for `.github` Agents

Every CodePackr-Law agent that creates, modifies, organizes, or reviews legal content MUST follow this instruction:

> Before creating any legal topic, doctrine, principle, case law, statute, section, article, definition, concept, maxim, procedure, or other reusable legal knowledge, search the existing CodePackr-Law knowledge repository for an existing canonical entity. Reuse the existing canonical ID and create a reference whenever an equivalent entity exists. Never duplicate canonical legal content merely because it is required on another page.

Agents must also follow:

> Preserve canonical IDs when editing existing entities. Never silently create a second entity for an existing legal concept. When uncertain whether two entities are duplicates, investigate titles, aliases, citations, tags, and relationships before creating a new entity.

---

## 18. Content Generation Rule

When generating a new page, the agent should ask:

```text
Does this information already exist as a canonical entity?
```

If yes:

```text
REFERENCE EXISTING ENTITY
```

If no:

```text
CREATE CANONICAL ENTITY
ASSIGN ID
ASSIGN TAGS
ADD RELATIONSHIPS
```

The agent should not create duplicate canonical knowledge simply to make a page appear complete.

---

## 19. Legal Source and Attribution

Reusable legal entities should preserve source information where applicable.

Example:

```yaml
sources:
  - title: "[Source title]"
    citation: "[Citation]"
    url: "[Source URL]"
```

Agents should distinguish between:

- Primary legal authority.
- Secondary legal commentary.
- Educational material.
- AI-generated explanation.

AI-generated explanations must not be presented as authoritative legal sources.

Where legal relationships or case-law propositions are included, they should be supported by reliable legal sources.

---

## 20. Validation

A validation process should check:

```text
Broken references
Duplicate IDs
Invalid IDs
Invalid tags
Invalid relationships
Missing metadata
Duplicate entities
Orphan references
Missing canonical records
```

Example:

```text
VALIDATION ERROR:
[[REF:CASE:CONSTITUTIONAL-LAW:UNKNOWN-CASE]]
```

means the referenced canonical entity does not exist.

The build/CI process should fail or clearly report such errors according to the repository's existing conventions.

---

## 21. Migration of Existing CodePackr-Law Content

When applying this architecture to existing content:

1. Inventory existing legal content.
2. Identify repeated topics.
3. Identify repeated doctrines.
4. Identify repeated case laws.
5. Identify repeated statutes/articles/sections.
6. Identify repeated definitions and concepts.
7. Detect aliases and duplicates.
8. Create canonical entities.
9. Assign stable IDs.
10. Assign tags.
11. Add supported relationships.
12. Replace unnecessary duplicated content with references.
13. Validate all references.
14. Run existing tests/builds.
15. Review generated pages for content quality and SEO.

Do not perform destructive bulk replacements without validation.

---

## 22. SEO Requirements

The reuse system must not produce thin pages.

References should provide useful contextual navigation.

For example:

```text
Article 368
   |
   +-- Related Doctrine
   |      |
   |      +-- Doctrine of Basic Structure
   |
   +-- Key Case
          |
          +-- Kesavananda Bharati
```

The application may render canonical references as internal links, cards, related-content blocks, or expandable summaries.

The canonical entity remains the source of truth.

---

## 23. Performance and Maintainability

The architecture should avoid unnecessarily loading the same large content repeatedly.

Where practical:

- Store canonical content once.
- Resolve references efficiently.
- Cache frequently used entities.
- Generate indexes for tags.
- Generate relationship indexes.
- Detect broken references during build/CI.
- Avoid copying large content blocks into multiple files.

---

## 24. Human Review

AI agents must not assume two legal concepts are identical simply because their names are similar.

When equivalence is uncertain:

- Preserve both records.
- Do not merge automatically.
- Do not delete either record.
- Flag the potential relationship.
- Provide the reason for the uncertainty.
- Request human review where necessary.

This is especially important for legal case relationships such as:

```text
overruled-by
distinguished-by
reversed-by
followed-by
applied-in
interpreted-by
```

These relationships must be based on reliable legal sources.

---

## 25. Golden Rule for All Agents

Every CodePackr-Law agent must follow this principle:

```text
SEARCH FIRST
     |
     v
REUSE IF EXISTS
     |
     v
CREATE ONLY IF NEW
     |
     v
TAG IT
     |
     v
LINK IT
     |
     v
VALIDATE IT
```

The key question before generating reusable legal content is:

> **"Does this legal knowledge already exist somewhere in CodePackr-Law?"**

If it does, reference it.

If it does not, create it once as the canonical source.

---

## 26. Example

### Canonical doctrine

```yaml
id: DOCTRINE:CONSTITUTIONAL-LAW:BASIC-STRUCTURE
type: DOCTRINE
title: Doctrine of Basic Structure
tags:
  - constitutional-law
  - constitutional-amendment
  - article-368
```

### Article page

```text
Article 368 explains the constitutional amendment procedure.

Related doctrine:

[[REF:DOCTRINE:CONSTITUTIONAL-LAW:BASIC-STRUCTURE]]
```

### Case-law page

```text
The Basic Structure doctrine is associated with:

[[REF:CASE:CONSTITUTIONAL-LAW:KESAVANANDA-BHARATI-1973]]

Related doctrine:

[[REF:DOCTRINE:CONSTITUTIONAL-LAW:BASIC-STRUCTURE]]
```

### Another topic

```text
Constitutional Amendments

[[REF:ARTICLE:CONSTITUTION:ARTICLE-368]]

[[REF:DOCTRINE:CONSTITUTIONAL-LAW:BASIC-STRUCTURE]]

[[REF:CASE:CONSTITUTIONAL-LAW:KESAVANANDA-BHARATI-1973]]
```

The same legal knowledge is reused without maintaining multiple copies.

---

## Final Requirement

This architecture is a **repository-wide rule**, not an optional content-generation preference.

Any new `.github` agent prompt, content workflow, automation, or legal knowledge generator introduced into CodePackr-Law must comply with this reusable canonical-reference model.

**One legal concept → one canonical entity → stable ID → meaningful tags → reusable references.**
