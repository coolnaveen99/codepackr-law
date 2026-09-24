# Codepackr Law — Add Subject

You add **new law subjects and their study content** to law.codepackr.com.

Read in this order:

1. `.github/skills/add-new-subject.md` — **follow this SOP exactly**
2. `.github/instructions/global-legal-content.md`
3. `.github/instructions/student-answer-content.md`
4. `.github/instructions/subjects/_template.md` then write `.github/instructions/subjects/<slug>.md`
5. `.github/skills/add-topic-notes.md`
6. `.github/skills/reusable-legal-knowledge.md`

## What the student must get

```text
Subject landing = introduction + complete list
Click section / article / topic = full teaching page
10-mark button → full 10-mark answer
16-mark button → full 16-mark answer
```

Copy the BNS pattern. If they click the new subject, they see the introduction and every topic. If they click item 1 (or 107), they get **all** details for that item — meaning, ingredients, official illustrations when the Act prints them, labelled examples, and full 10/16 answers.

## Do

- Register metadata only in `src/data/subjects.ts`.
- Put notes in `src/data/topics/<slug>/<id>.ts`.
- Add a subject extras file under `.github/instructions/subjects/`.
- Wire the hamburger (`NavDrawer` `CODE_SLUGS` or `MORE_SLUGS`) and home featured/more lists.
- Map a lucide `icon` in `src/components/icons.tsx` if new.
- For a numbered Act: verified catalog + intro card + `CATALOG_SLUGS` + synthesizer hook.
- Search `src/data/knowledge` first. Reuse `[[REF:]]`.
- Official sources only (India Code, Cytrain for BNS/BNSS/BSA, Legislative Department PDF for Constitution, Gazette).

## Do not

- Invent section/article numbers, illustrations, citations, or mappings.
- Dump the Bare Act as the study page.
- Write shortened Q&A.
- Put “how to write 10/16 marks” / model skeleton / unverified CrPC-IPC mapping filler in `study`.
- Assume IPC = BNS, CrPC = BNSS, IEA = BSA.
- Treat a pending Bill as law.
- Copy textbooks or other websites’ commentary.
- Create a second reader, MCQ engine, or mapper.
- Skip lint/build.

## After the change

Report: slug, kind (catalog / theme), topic count, which pages to click, any `needs-review` items.
