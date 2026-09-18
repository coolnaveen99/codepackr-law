# Skill: Student Answer & Deep Topic Content

**Purpose:** CodePackr Law is primarily a law-student learning platform. Its study content must help a student understand a topic deeply and write a strong **10-mark or 16-mark examination answer**, not merely read a Bare Act summary.

## Core principle

Never treat the Bare Act as the beginning and end of a topic.

Use:

```
RESEARCH BEYOND BARE ACT
        ↓
UNDERSTAND THE LEGAL CONCEPT
        ↓
BUILD A STUDENT-FRIENDLY EXPLANATION
        ↓
CONNECT PROVISIONS + DOCTRINES + CASES
        ↓
ILLUSTRATE WITH EXAMPLES
        ↓
APPLY TO FACT SITUATIONS
        ↓
BUILD 10-MARK / 16-MARK ANSWER
        ↓
REVISION + MCQ
```

The Bare Act/statutory text is a **primary legal source layer**, not the whole learning experience.

## Mandatory research-first rule

Before drafting a topic, research beyond the bare provision wherever the subject permits:

1. Primary/official law: Constitution, Act, Sections, Rules, Regulations, official Gazette and amendments.
2. Judicial interpretation: important and landmark judgments.
3. Reliable legal databases and case reports for citation and precedent discovery.
4. Reputable legal commentary/news for recent developments and context.
5. Academic/legal education sources for doctrine, history, theory and conceptual explanation.

Do not substitute commentary for primary law. Clearly distinguish:
- statutory/constitutional text,
- judicial holdings,
- established doctrine,
- academic/commentary explanation,
- CodePackr's original student explanation,
- examples created for learning.

If a point cannot be verified, mark it `needs-review` instead of guessing.

## Mandatory topic depth

Every substantive Study Topic should aim to answer:

- What is this topic?
- Why does this legal concept exist?
- What problem does it solve?
- What is its legal foundation?
- What are its essential elements/ingredients?
- How does it operate in practice?
- What are its exceptions, limitations and qualifications?
- What are the important distinctions from related concepts?
- What are the leading cases and what did they establish?
- Can the student understand it through concrete examples?
- Can the student apply it to a hypothetical fact situation?
- How should a student structure a 10-mark answer?
- How should a student expand it into a 16-mark answer?

Avoid shallow one-paragraph summaries.

## Standard Study Topic structure

Use the existing `study` model and adapt the sections to the topic:

1. **Topic at a Glance**
2. **Introduction**
3. **Meaning and Concept**
4. **Why the Law/Doctrine Matters**
5. **Historical / Legal Background** where relevant
6. **Legal Foundation / Relevant Provisions**
7. **Definitions and Key Terms**
8. **Essential Elements / Ingredients**
9. **Detailed Explanation of Each Element**
10. **How the Rule Operates**
11. **Exceptions / Limitations / Qualifications**
12. **Important Distinctions**
13. **Illustrations / Practical Examples**
14. **Hypothetical Problem + Application**
15. **Leading Case Law**
16. **Case-by-Case Principle / Ratio**
17. **Current-Law Position**
18. **Common Misconceptions / Exam Traps**
19. **10-Mark Answer Framework**
20. **16-Mark Answer Framework**
21. **Model Answer Points / Answer Skeleton**
22. **Quick Revision Points**
23. **Related Topics / Reusable Knowledge**
24. **Questions & Answers**
25. **MCQ-ready Exam Points**

Not every topic needs every heading, but important headings must not be omitted merely to make content shorter.

## 10-mark answer requirement

For a topic suitable for a 10-mark question, provide an answer framework that normally contains:

- Introduction/definition
- Legal basis
- Core rule or doctrine
- Essential elements
- Relevant provisions
- 1–3 important authorities/cases where appropriate
- One clear illustration or application
- Exceptions/limitations where material
- Short conclusion

The framework must be useful for writing a coherent answer, not just a list of section numbers.

## 16-mark answer requirement

For a topic suitable for a 16-mark question, provide a fuller framework that normally contains:

- Introduction
- Meaning and conceptual explanation
- Legal foundation
- Historical/developmental context where relevant
- Detailed elements or principles
- Provision-by-provision analysis where necessary
- Exceptions/limitations
- Distinctions/comparative points
- Multiple relevant case laws
- Ratio/principle from the important cases
- Practical illustrations
- Hypothetical/application analysis
- Current legal position
- Critical/analytical discussion where academically appropriate
- Conclusion

The 16-mark framework should show the student how to **expand, connect and apply** the law rather than merely repeat statutory wording.

## Examples are mandatory for learning

Where a rule can be illustrated, include examples.

Prefer:
- simple everyday example,
- legal hypothetical,
- fact pattern similar to an examination problem,
- application showing why the rule applies or does not apply.

Label created hypotheticals as examples/illustrations. Never present an invented case as a real judgment.

## Case-law depth

Do not merely list case names.

For important cases provide, where verified:

- Case name
- Citation/year
- Court
- Material facts
- Legal issue
- Relevant provision/doctrine
- Decision
- Ratio decidendi
- Why the case matters for this topic
- Exam-use point

Use canonical case records and `[[REF:CASE:...]]` where available. Do not duplicate a full canonical case essay into every topic.

## Bare Act presentation

Bare Act text must remain clearly separated from explanation.

Use this conceptual separation:

```
LEGAL SOURCE
  → provision/statutory text or verified digest

STUDENT EXPLANATION
  → plain-language meaning + reasoning

APPLICATION
  → examples + hypotheticals

AUTHORITY
  → cases + doctrines

EXAM ANSWER
  → 10-mark / 16-mark structure
```

Never label a paraphrase as Bare Act text.

## Reusable knowledge and tagging

Search `src/data/knowledge/` before creating any reusable concept.

Reusable entities should be canonical and tagged so other topics can reference them rather than duplicate them.

Use the existing reference syntax:

```
[[REF:TYPE:CATEGORY:SLUG]]
```

Typical reusable entities:
- doctrine
- maxim
- legal principle
- definition
- provision
- case
- procedure
- constitutional principle
- interpretation rule

A topic-specific explanation may explain **how the concept applies to that topic**, but the canonical doctrine/case itself should not be duplicated.

## Topic-to-knowledge relationships

Where relevant, connect:

```
TOPIC
 ├── PROVISION
 ├── DOCTRINE
 ├── PRINCIPLE
 ├── CASE
 ├── DEFINITION
 ├── EXAMPLE
 ├── RELATED TOPIC
 └── EXAM QUESTION
```

This allows the same verified legal knowledge to be reused across subjects and avoids inconsistent explanations.

## Quality bar

Reject content that is:
- only a Bare Act summary,
- only section-number lists,
- only bullet-point revision notes,
- case-name dumping without principles,
- generic AI filler,
- too short to support a 10-mark answer,
- unable to support expansion into a 16-mark answer,
- missing examples where examples would clarify the rule,
- missing important exceptions or distinctions,
- unsupported by verified sources.

The goal is **exam-ready understanding**, not maximum word count. Be detailed where it improves understanding and concise where repetition adds no value.

## Important safety/accuracy rule

CodePackr Law is an educational platform, not a substitute for professional legal advice. Do not present uncertain legal propositions as settled law. Verify current-law status and distinguish historical law from current law.

## Implementation rule

Do not create a second content architecture. Extend the existing `TopicContent.study`, canonical knowledge graph, case/provision records, Q&A and MCQ systems.

