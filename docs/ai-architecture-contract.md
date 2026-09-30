# AI Architecture Contract (Phase 17)

**Status:** Policy baseline — no production AI endpoint is required for this phase.  
**Product:** CodePackr Law (privacy-first, client-side)

## Principle

Introduce AI only after deterministic workflows (research note, citation parse, limitation arithmetic, checklists) are reliable. **AI is never itself the authority.**

## Good AI uses

- Classify user-provided text
- Summarise user-provided documents
- Suggest research terms
- Structure notes
- Extract entities
- Compare user-provided texts
- Generate draft scaffolding
- Create study questions

## Forbidden without explicit verification UX

- Presenting a generated holding as a verified ratio
- Inventing citations, paragraph numbers, judges, or dates
- Silent "case does not exist" conclusions from failed lookup
- Sending case notes or legal text to analytics

## Source-grounded response contract

Every AI legal response should expose:

1. **Answer**
2. **Sources**
3. **Evidence / location** (paragraph, section, page if known)
4. **Verification status**
5. **Uncertainty**
6. **Next verification step**

## Labels

- `AI-generated`
- `source-grounded`
- `user-provided`
- `verified`
- `needs-review`

## Citation safety checklist

Before displaying a legal citation as verified:

1. Parse citation structure
2. Search supported source index (when available)
3. Match case metadata
4. Match court / date / citation fields
5. Display **verified** only when evidence supports it

If no reliable source is found:

> No authoritative source was found. Treat this output as an unverified research suggestion.

## Implementation note

Phases 3–6 tools remain deterministic. Future AI features must reuse `citationParser` status model and must not bypass this contract.
