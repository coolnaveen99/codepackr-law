import { useEffect, useMemo, useState } from 'react'
import { ArrowLeft, CheckCircle2, HelpCircle, ShieldAlert, ShieldCheck } from 'lucide-react'
import { parseCitationList, type CitationStatus } from '../../lib/citationParser'
import { loadAndClearCitationHandoff } from '../../lib/citationHandoff'

function statusStyle(s: CitationStatus) {
  switch (s) {
    case 'parsed':
      return 'bg-emerald-50 text-emerald-800 border-emerald-200'
    case 'partial':
    case 'user-provided':
      return 'bg-amber-50 text-amber-900 border-amber-200'
    case 'conflict':
      return 'bg-orange-50 text-orange-900 border-orange-200'
    default:
      return 'bg-slate-100 text-slate-700 border-slate-200'
  }
}

export function CitationVerifier() {
  const [text, setText] = useState('')
  const [handoffSource, setHandoffSource] = useState<'query' | 'session' | null>(null)

  useEffect(() => {
    const { text: incoming, source } = loadAndClearCitationHandoff()
    if (incoming) {
      setText(incoming)
      setHandoffSource(source)
    }
  }, [])

  const results = useMemo(() => parseCitationList(text), [text])

  return (
    <div className="space-y-5">
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-sm">
        <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#8B1E3F]">
          <ShieldCheck className="size-4" /> Citation Verifier
        </div>
        <h1 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight">Parse &amp; status-label citations</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-3xl">
          Paste SCC / AIR-style citations or case names (one per line). This tool performs a structural parse only.
          It never converts "not found" into "case does not exist".
        </p>

        {handoffSource && (
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-blue-200 dark:border-blue-900 bg-blue-50/70 dark:bg-blue-950/40 p-3 text-xs text-blue-950 dark:text-blue-200">
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-blue-700 dark:text-blue-300" />
              <span>
                <strong>Handed off from Legal Research Workbench.</strong> Citations populated for verification.
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
          rows={6}
          placeholder={'(2020) 5 SCC 1\nAIR 1973 SC 1461\nKesavananda Bharati v. State of Kerala'}
          className="mt-4 w-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-transparent p-3 text-sm font-mono"
        />
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold"
            onClick={() =>
              setText('(1973) 4 SCC 225\nAIR 1978 SC 597\nManeka Gandhi v. Union of India')
            }
          >
            Load sample
          </button>
          <button type="button" className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold" onClick={() => setText('')}>
            Clear
          </button>
        </div>
      </section>

      {results.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500">
          Empty state — paste citations to see parse status.
        </div>
      ) : (
        <div className="space-y-3">
          {results.map((r, i) => (
            <article key={i} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="font-mono text-sm font-semibold text-slate-900 dark:text-white">{r.raw}</div>
                <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full border ${statusStyle(r.status)}`}>
                  {r.status}
                </span>
              </div>
              <dl className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <div><dt className="text-slate-500">Style</dt><dd className="font-bold">{r.style}</dd></div>
                {r.caseName && <div><dt className="text-slate-500">Name</dt><dd className="font-bold">{r.caseName}</dd></div>}
                {r.year && <div><dt className="text-slate-500">Year</dt><dd className="font-bold">{r.year}</dd></div>}
                {r.reporter && <div><dt className="text-slate-500">Reporter</dt><dd className="font-bold">{r.reporter} {r.volume} {r.page}</dd></div>}
                {r.courtHint && <div className="col-span-2"><dt className="text-slate-500">Court hint</dt><dd className="font-bold">{r.courtHint}</dd></div>}
              </dl>
              <ul className="mt-3 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                {r.notes.map((n, j) => (
                  <li key={j} className="flex gap-2">
                    {r.status === 'parsed' ? <CheckCircle2 className="size-3.5 shrink-0 text-emerald-600 mt-0.5" /> : r.status === 'not-verified' ? <ShieldAlert className="size-3.5 shrink-0 text-slate-500 mt-0.5" /> : <HelpCircle className="size-3.5 shrink-0 text-amber-600 mt-0.5" />}
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      )}

      <p className="text-[11px] text-slate-500">
        Educational tool. Verification against SCC Online, court websites, or other databases is the user's responsibility. Privacy: text stays in your browser.
      </p>
    </div>
  )
}
