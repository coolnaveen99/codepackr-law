# Codepackr Law — Automatic SEO & Search Engine Indexing Guide

This document explains how **all existing and future** subjects, Bare Act sections, study topics, and landmark judgments are **automatically indexed and optimized for search engines** (Google, Bing, Yahoo, Yandex, etc.).

---

## 1. How Automation Works (Zero Manual SEO Needed)

Whenever you or an AI agent add a **new subject**, a **new topic/section**, or a **new landmark judgment**:

```
Add Topic/Subject/Judgment in src/data/
               │
               ▼
   1. Live Client-Side Route (Instant)
      - App.tsx automatically recognizes the new slug/id
      - Automatically renders statutory treatise or judgment brief
               │
               ▼
   2. Dynamic Metadata & Structured Data Injection (Instant)
      - seo.ts sets dynamic <title> with Section Number, Act, and Keywords
      - Sets <meta name="description"> with ingredients & ratio
      - Injects Schema.org Article / Legislation / JudicialDecision JSON-LD
      - Injects Schema.org BreadcrumbList JSON-LD
               │
               ▼
   3. Automatic Sitemap Generation on Every Build
      - npm run build automatically runs: npx tsx scripts/generate_sitemap.ts
      - Reads all subjects, topics, and judgments dynamically
      - Updates public/sitemap.xml with correct <loc>, <lastmod>, and <priority>
               │
               ▼
   4. Instant Push to Search Engines (Optional 1-Click)
      - Run: npm run indexnow
      - Instantly notifies Bing, Yandex, and partner engines to crawl immediately
```

---

## 2. What Happens Automatically for Each Content Type

### A. New Topics / Bare Act Sections
When you add a topic under any subject in `src/data/subjects.ts`:
- **URL generated:** `https://law.codepackr.com/subjects/<subjectSlug>/<topicId>`
- **Automatic Page Title:** `"<Topic Name> (<Range>) — Bare Act, Ingredients & Notes | <Subject Name> | Codepackr Law"`
- **Automatic Description:** Statutory summary, proving ingredients, and chapter notes.
- **Automatic Keywords:** Topic name, section number, parent act, and related legal terms.
- **Google SERP Breadcrumbs:** `Home > Subjects > <Subject Name> > <Topic Name>`
- **Schema.org JSON-LD:** `Legislation` & `Article` schema attached.
- **Sitemap Priority:** Automatically included with priority `0.75` and monthly change frequency.

### B. New Subjects
When you add a subject in `src/data/subjects.ts`:
- **URL generated:** `https://law.codepackr.com/subjects/<slug>`
- **Automatic Page Title:** `"<Subject Name> (<ShortName>) — Bare Act Catalog & Study Modules | Codepackr Law"`
- **Automatic Description:** Complete syllabus catalog with count of sections and provisions.
- **Sitemap Priority:** Automatically included with priority `0.85` and weekly change frequency.

### C. New Landmark Judgments
When you add a judgment under `src/data/judgments/`:
- **URL generated:** `https://law.codepackr.com/case-law/judgment/<id>`
- **Automatic Page Title:** `"<Case Name> (<Year>) [<Citation>] — Ratio, Facts & Case Brief | Codepackr Law"`
- **Automatic Description:** Extracted ratio decidendi, bench details, court, and core legal issues.
- **Automatic Keywords:** Case name, citation, judges, topics, and landmark tags.
- **Schema.org JSON-LD:** `Article` / `JudicialDecision` schema with court and ratio.
- **Sitemap Priority:** Automatically included with priority `0.85`.

---

## 3. Deployment & Commands Checklist

| Command | What it does | When to run |
| :--- | :--- | :--- |
| `npm run build` | Validates TypeScript, **regenerates sitemap.xml**, and compiles production bundle | Before every deployment |
| `npm run sitemap` | Regenerates `public/sitemap.xml` standalone | After adding batches of topics or cases |
| `npm run indexnow` | Instantly notifies Bing / IndexNow to recrawl all URLs | After deploying new subjects or judgments |
| `npm run test` | Validates that filtering, search, and core features pass unit tests | CI / Pre-commit |

---

## 4. Search Engine Verification Setup (One-Time)

1. **Google Search Console (GSC):**
   - Go to [Google Search Console](https://search.google.com/search-console).
   - Add property: `https://law.codepackr.com`.
   - Under **Sitemaps**, submit: `https://law.codepackr.com/sitemap.xml`.
   - *Because Google monitors this sitemap URL, any new topics added in future builds will be crawled automatically by Googlebot without you having to re-submit.*

2. **Bing Webmaster Tools:**
   - Already configured with key `BC8B27F46BBCD43F50A45F870843689D`.
   - Verification file is active at: `https://law.codepackr.com/BC8B27F46BBCD43F50A45F870843689D.txt`.
   - Running `npm run indexnow` pushes URL updates directly to Bing's index within hours.
