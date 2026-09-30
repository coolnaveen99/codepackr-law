import { useMemo, useState } from 'react'
import { Scale } from 'lucide-react'

/** Heuristic section splitter — educational only; does not invent holdings. */
function extractBlocks(text: string) {
  const t = text.replace(/\r\n/g, '\n').trim()
  if (!t) return null

  const lines = t.split('\n').map((l) => l.trim()).filter(Boolean)
  const head = lines.slice(0, 8).join(' ')

  const findSection = (labels: RegExp[]) => {
    for (let i = 0; i < lines.length; i++) {
      if (labels.some((re) => re.test(lines[i]))) {
        const chunk: string[] = []
        for (let j = i + 1; j < Math.min(i + 40, lines.length); j++) {
          if (/^(facts|issues?|held|order|conclusion|ratio|arguments?)\b/i.test(lines[j]) && j > i + 1) break
          chunk.push(lines[j])
        }
        return chunk.join(' ').slice(0, 1200)
      }
    }
    return ''
  }

  return {
    metadataHint: head.slice(0, 400),
    facts: findSection([/^facts?\b/i, /^brief facts\b/i]),
    issues: findSection([/^issues?\b/i, /^question/i]),
    reasoning: findSection([/^reasoning\b/i, /^discussion\b/i, /^analysis\b/i]),
    held: findSection([/^held\b/i, /^held that\b/i, /^order\b/i, /^conclusion\b/i]),
    wordCount: t.split(/\s+/).length,
    paraCount: (t.match(/\n\s*\n/g) || []).length + 1,
  }
}

export function JudgmentAnalyzer() {
  const [text, setText] = useState('')
  const blocks = useMemo(() => extractBlocks(text), [text])

  return (
    <div className="space-y-5">
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-sm">
        <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#8B1E3F]">
          <Scale className="size-4" /> Judgment Analyzer
        </div>
        <h1 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight">Structure user-provided judgment text</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-3xl">
          Paste judgment text (TXT). Heuristic headings only — never invents paragraph numbers, holdings, or citations that are not in the text.
        </p>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={12}
          placeholder="Paste judgment text here…"
          className="mt-4 w-full rounded-2xl border border-slate-200 dark:border-slate-700 p-3 text-sm font-mono"
        />
        <div className="mt-3 flex gap-2">
          <button type="button" className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold" onClick={() => setText('')}>
            Clear
          </button>
        </div>
      </section>

      {!blocks && (
        <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500">
          Empty — paste a judgment to extract structural blocks.
        </div>
      )}

      {blocks && (
        <div className="space-y-3">
          <div className="text-xs text-slate-500 font-bold">
            {blocks.wordCount.toLocaleString()} words · ~{blocks.paraCount} paragraphs · extraction confidence: heuristic
          </div>
          {(
            [
              ['Header / metadata (first lines)', blocks.metadataHint],
              ['Facts (if labelled)', blocks.facts],
              ['Issues (if labelled)', blocks.issues],
              ['Reasoning / discussion (if labelled)', blocks.reasoning],
              ['Held / order (if labelled)', blocks.held],
            ] as const
          ).map(([title, body]) => (
            <article key={title} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
              <h2 className="text-xs font-extrabold uppercase tracking-wide text-slate-500">{title}</h2>
              <p className="mt-2 text-sm whitespace-pre-wrap text-slate-800 dark:text-slate-200">
                {body || 'No labelled block detected in the pasted text. Add clear headings or read the full judgment.'}
              </p>
              <p className="mt-2 text-[10px] text-slate-400">Source: user-provided text · generated structure vs source text</p>
            </article>
          ))}
        </div>
      )}

      <p className="text-[11px] text-slate-500">
        PDF extraction is not enabled in this phase (paste/TXT only). Educational companion — the official judgment remains authoritative.
      </p>
    </div>
  )
}
