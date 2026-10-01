import { useEffect, useMemo, useState } from 'react'
import { ArrowLeft, Check, Copy, Scale, Sparkles } from 'lucide-react'
import { loadAndClearJudgmentHandoff, type JudgmentHandoffPayload } from '../../lib/judgmentHandoff'

const SAMPLE_JUDGMENT = `MANEKA GANDHI V. UNION OF INDIA
Citation: AIR 1978 SC 597
Court: Supreme Court of India

BRIEF FACTS:
The petitioner's passport was impounded by the Government of India under Section 10(3)(c) of the Passports Act in public interest without giving any prior hearing or reason. The petitioner challenged the order under Article 32 of the Constitution.

ISSUES:
Whether Section 10(3)(c) of the Passports Act violates Article 14, 19(1)(a), 19(1)(g) and 21 of the Constitution.
Whether the procedure established by law must be just, fair and reasonable.

REASONING:
Articles 14, 19 and 21 are not mutually exclusive. The law must satisfy the test of reason and cannot be arbitrary or unfair. Procedure prescribed by law for depriving a person of life or personal liberty must be right, just and fair and not arbitrary, fanciful or oppressive.

HELD:
The right to travel abroad is part of personal liberty under Article 21. Natural justice is an essential element of fair procedure. An order impounding a passport without audi alteram partem is void unless post-decisional hearing is expeditiously provided.`

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
  const [handoff, setHandoff] = useState<{
    payload: JudgmentHandoffPayload | null
    source: 'query' | 'session' | null
  }>({ payload: null, source: null })
  const [copiedHeld, setCopiedHeld] = useState(false)

  useEffect(() => {
    const { payload, initialText, source } = loadAndClearJudgmentHandoff()
    if (initialText) {
      setText(initialText)
      setHandoff({ payload, source })
    }
  }, [])

  const blocks = useMemo(() => extractBlocks(text), [text])

  const copyHeldToClipboard = async () => {
    if (!blocks?.held) return
    try {
      await navigator.clipboard.writeText(blocks.held)
      setCopiedHeld(true)
      setTimeout(() => setCopiedHeld(false), 2000)
    } catch {
      // clipboard access error
    }
  }

  const handoffTitle =
    handoff.payload?.caseName ||
    handoff.payload?.citation ||
    (handoff.payload?.canonicalEntityId ? `Canonical ID: ${handoff.payload.canonicalEntityId}` : null)

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

        {handoff.source && (
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-blue-200 dark:border-blue-900 bg-blue-50/70 dark:bg-blue-950/40 p-3 text-xs text-blue-950 dark:text-blue-200">
            <div className="flex items-center gap-2">
              <Scale className="size-4 text-blue-700 dark:text-blue-300 shrink-0" />
              <span>
                <strong>Handed off from Legal Research Workbench</strong>
                {handoffTitle ? ` for “${handoffTitle}”.` : '.'} Ready for judgment text paste.
              </span>
            </div>
            <a
              href="/tool/research-workbench"
              className="inline-flex items-center gap-1 font-bold text-[#8B1E3F] hover:underline dark:text-blue-300"
            >
              <ArrowLeft className="size-3.5" /> Return to Workbench
            </a>
          </div>
        )}

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={12}
          placeholder="Paste judgment text here (or paste below metadata header)…"
          className="mt-4 w-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-transparent p-3 text-sm font-mono"
        />
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-2 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800"
            onClick={() => setText(SAMPLE_JUDGMENT)}
          >
            <Sparkles className="size-3.5 text-[#8B1E3F]" /> Load sample landmark
          </button>
          <button
            type="button"
            className="rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-2 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800"
            onClick={() => {
              setText('')
              setHandoff({ payload: null, source: null })
            }}
          >
            Clear
          </button>
        </div>
      </section>

      {!blocks && (
        <div className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 p-8 text-center text-sm text-slate-500">
          Empty — paste a judgment to extract structural blocks.
        </div>
      )}

      {blocks && (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 font-bold">
            <div>
              {blocks.wordCount.toLocaleString()} words · ~{blocks.paraCount} paragraphs · extraction confidence: heuristic
            </div>
            {blocks.held && (
              <button
                type="button"
                onClick={copyHeldToClipboard}
                className="inline-flex items-center gap-1 text-xs font-bold text-blue-800 hover:text-blue-950 dark:text-blue-300"
                title="Copy Held / Ratio text for use in Research Workbench holding field"
              >
                {copiedHeld ? (
                  <>
                    <Check className="size-3.5 text-emerald-600" /> Copied Held!
                  </>
                ) : (
                  <>
                    <Copy className="size-3.5" /> Copy Held for Workbench
                  </>
                )}
              </button>
            )}
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

