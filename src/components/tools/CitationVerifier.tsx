import { useEffect, useMemo, useState } from 'react'
import {
  ArrowLeft,
  BarChart3,
  CheckCircle2,
  ExternalLink,
  Filter,
  HelpCircle,
  RotateCcw,
  ShieldAlert,
  ShieldCheck,
} from 'lucide-react'
import { type CitationStatus } from '../../lib/citationParser'
import {
  loadAndClearCitationHandoff,
  saveCitationVerificationResults,
  type CitationVerificationHandoff,
} from '../../lib/citationHandoff'
import { verifyCitationListSync, type VerifiedCitation } from '../../lib/citationVerification'

type StatusFilter = 'all' | CitationStatus
type VerifierTab = 'results' | 'dashboard'

const STATUS_OPTIONS: Array<{ value: StatusFilter; label: string }> = [
  { value: 'all', label: 'All' },
  { value: 'verified', label: 'Verified' },
  { value: 'partial', label: 'Partial' },
  { value: 'not-verified', label: 'Not verified' },
  { value: 'conflict', label: 'Conflict' },
  { value: 'user-provided', label: 'User provided' },
]

function statusStyle(s: CitationStatus) {
  switch (s) {
    case 'parsed':
    case 'verified':
      return 'bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800'
    case 'partial':
    case 'user-provided':
      return 'bg-amber-50 text-amber-900 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800'
    case 'conflict':
      return 'bg-orange-50 text-orange-900 border-orange-200 dark:bg-orange-950/40 dark:text-orange-300 dark:border-orange-800'
    default:
      return 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
  }
}

function statusIcon(status: CitationStatus) {
  if (status === 'verified' || status === 'parsed') return <CheckCircle2 className="size-3.5 shrink-0 text-emerald-600 mt-0.5" />
  if (status === 'not-verified') return <ShieldAlert className="size-3.5 shrink-0 text-slate-500 mt-0.5" />
  return <HelpCircle className="size-3.5 shrink-0 text-amber-600 mt-0.5" />
}

function countStatuses(results: VerifiedCitation[]) {
  return results.reduce<Record<string, number>>((acc, result) => {
    acc[result.status] = (acc[result.status] || 0) + 1
    return acc
  }, {})
}

export function CitationVerifier() {
  const [text, setText] = useState('')
  const [handoffSource, setHandoffSource] = useState<'query' | 'session' | null>(null)
  const [activeTab, setActiveTab] = useState<VerifierTab>('results')
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all')
  const [returnMessage, setReturnMessage] = useState('')

  useEffect(() => {
    const { text: incoming, source } = loadAndClearCitationHandoff()
    if (incoming) {
      setText(incoming)
      setHandoffSource(source)
    }
  }, [])

  const results: VerifiedCitation[] = useMemo(() => verifyCitationListSync(text), [text])
  const counts = useMemo(() => countStatuses(results), [results])
  const filteredResults = useMemo(
    () => (statusFilter === 'all' ? results : results.filter((result) => result.status === statusFilter)),
    [results, statusFilter],
  )

  const returnToWorkbench = () => {
    const handoff: CitationVerificationHandoff[] = results.map((result) => ({
      caseName: result.caseName || result.matchedRecord?.caseName || '',
      citation: result.normalizedCitation || result.raw,
      status: result.status === 'parsed' ? 'verified' : result.status,
    }))
    saveCitationVerificationResults(handoff)
    setReturnMessage('Verification statuses saved locally. Returning to the Research Workbench…')
    window.setTimeout(() => {
      window.location.href = '/tool/research-workbench'
    }, 150)
  }

  return (
    <div className="space-y-5">
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-sm">
        <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#8B1E3F]">
          <ShieldCheck className="size-4" /> Citation Verifier · PH4-050
        </div>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">Verify and review citations</h1>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-3xl">
              Parse SCC, AIR, SCC OnLine, SCR, Indian Neutral Citations, and continuous document extracts.
              Unmatched citations remain <strong>not verified</strong>; they are never treated as evidence that a case does not exist.
            </p>
          </div>
          {handoffSource && (
            <button
              type="button"
              onClick={returnToWorkbench}
              className="inline-flex min-h-[44px] shrink-0 items-center justify-center gap-1.5 rounded-xl bg-[#8B1E3F] px-3.5 py-2 text-xs font-bold text-white hover:opacity-90"
            >
              <ArrowLeft className="size-4" /> Return to Workbench
            </button>
          )}
        </div>

        {handoffSource && (
          <div className="mt-4 flex flex-wrap items-center gap-2 rounded-2xl border border-blue-200 dark:border-blue-900 bg-blue-50/70 dark:bg-blue-950/40 p-3 text-xs text-blue-950 dark:text-blue-200">
            <ShieldCheck className="size-4 text-blue-700 dark:text-blue-300" />
            <span><strong>Workbench handoff loaded.</strong> Results can be returned to the authority matrix with verification statuses.</span>
          </div>
        )}

        {returnMessage && (
          <div className="mt-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-3 text-xs font-bold text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-200">
            {returnMessage}
          </div>
        )}

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={8}
          placeholder="Paste a judgment extract or citation list."
          className="mt-4 w-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-transparent p-3 text-sm font-mono"
        />
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            className="min-h-[44px] rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-2 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition"
            onClick={() => setText('(1973) 4 SCC 225\nAIR 1978 SC 597\n2023 INSC 123\n2022 SCC OnLine Del 108\nManeka Gandhi v. Union of India')}
          >
            Load mixed sample
          </button>
          <button
            type="button"
            className="min-h-[44px] rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-2 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition"
            onClick={() =>
              setText('The Court relied on Kesavananda Bharati v. State of Kerala, (1973) 4 SCC 225, and the procedure analysis in Maneka Gandhi v. Union of India, AIR 1978 SC 597. Later neutral citation practice appears in Association for Democratic Reforms v. Union of India, 2024 INSC 113. High Court electronic reports include 2022 SCC OnLine Del 108. SCR illustrations include [1950] SCR 88.')
            }
          >
            Load document extract
          </button>
          <button
            type="button"
            className="min-h-[44px] rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-2 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition"
            onClick={() => setText('2023 INSC 123\n2024:DHC:1234\n2024:BOM:567\nAssociation for Democratic Reforms v. Union of India, 2024 INSC 113')}
          >
            Load Neutral Citations
          </button>
          <button
            type="button"
            className="min-h-[44px] rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-2 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition"
            onClick={() => setText('')}
          >
            <RotateCcw className="mr-1 inline size-3.5" /> Clear
          </button>
        </div>
      </section>

      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 dark:border-slate-800">
        {([
          ['results', 'Citation results', Filter],
          ['dashboard', 'Verification dashboard', BarChart3],
        ] as const).map(([tab, label, Icon]) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`min-h-[44px] inline-flex items-center gap-2 border-b-2 px-3 text-xs font-bold transition ${activeTab === tab ? 'border-[#8B1E3F] text-[#8B1E3F]' : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}`}
          >
            <Icon className="size-4" /> {label}
          </button>
        ))}
      </div>

      {activeTab === 'dashboard' ? (
        <section className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {STATUS_OPTIONS.slice(1).map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => { setStatusFilter(option.value); setActiveTab('results') }}
                className="min-h-[88px] rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 text-left hover:border-[#8B1E3F]/40"
              >
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">{option.label}</div>
                <div className="mt-2 text-2xl font-black">{counts[option.value] || 0}</div>
              </button>
            ))}
          </div>
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 text-sm">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="font-black">Verification coverage</div>
                <div className="mt-1 text-xs text-slate-500">{results.length} citation{results.length === 1 ? '' : 's'} scanned locally.</div>
              </div>
              <div className="text-xl font-black text-[#8B1E3F]">
                {results.length ? Math.round(((counts.verified || 0) / results.length) * 100) : 0}%
              </div>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
              <div
                className="h-full rounded-full bg-[#8B1E3F] transition-all"
                style={{ width: `${results.length ? ((counts.verified || 0) / results.length) * 100 : 0}%` }}
              />
            </div>
            <p className="mt-3 text-xs text-slate-500">
              This is a local status summary, not a legal reliability score. Review partial, conflict, and not-verified records before reliance.
            </p>
          </div>
        </section>
      ) : (
        <section className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-1.5">
              {STATUS_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setStatusFilter(option.value)}
                  className={`min-h-[44px] rounded-xl border px-3 py-2 text-xs font-bold ${statusFilter === option.value ? 'border-[#8B1E3F] bg-[#8B1E3F]/5 text-[#8B1E3F]' : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'}`}
                >
                  {option.label} ({option.value === 'all' ? results.length : counts[option.value] || 0})
                </button>
              ))}
            </div>
            <div className="text-xs font-semibold text-slate-500">
              Showing {filteredResults.length} of {results.length}
            </div>
          </div>

          {filteredResults.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 p-8 text-center text-sm text-slate-500">
              {results.length === 0 ? 'Empty state — paste a citation list or continuous judgment extract to scan.' : 'No citations match this status filter.'}
            </div>
          ) : (
            filteredResults.map((r, i) => (
              <article key={`${r.raw}-${i}`} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="font-mono text-sm font-semibold text-slate-900 dark:text-white break-words">{r.raw}</div>
                  <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full border ${statusStyle(r.status)}`}>
                    {r.status}
                  </span>
                </div>
                <dl className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <div><dt className="text-slate-500">Style</dt><dd className="font-bold uppercase tracking-wider text-[11px]">{r.style}</dd></div>
                  {r.caseName && <div><dt className="text-slate-500">Name</dt><dd className="font-bold truncate" title={r.caseName}>{r.caseName}</dd></div>}
                  {r.year && <div><dt className="text-slate-500">Year</dt><dd className="font-bold">{r.year}</dd></div>}
                  {r.neutralIndex ? (
                    <div><dt className="text-slate-500">Neutral Identifier</dt><dd className="font-bold">{r.neutralCourt} {r.neutralIndex}</dd></div>
                  ) : r.reporter ? (
                    <div><dt className="text-slate-500">Reporter</dt><dd className="font-bold">{r.reporter} {r.volume ? `Vol. ${r.volume}` : ''} {r.page ? `p. ${r.page}` : ''}</dd></div>
                  ) : null}
                  {r.courtHint && <div className="col-span-2"><dt className="text-slate-500">Court</dt><dd className="font-bold">{r.courtHint}</dd></div>}
                </dl>

                {r.matchedRecord && (
                  <div className="mt-3 rounded-2xl border border-emerald-200 dark:border-emerald-900 bg-emerald-50/70 dark:bg-emerald-950/30 p-3.5 text-xs">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 font-bold text-emerald-950 dark:text-emerald-200">
                        <ShieldCheck className="size-4 shrink-0" /> <span>Matched Landmark: {r.matchedRecord.caseName} ({r.matchedRecord.year})</span>
                      </div>
                      <span className="rounded-full bg-emerald-200/90 dark:bg-emerald-900 px-2 py-0.5 text-[10px] font-extrabold text-emerald-900 dark:text-emerald-200">{Math.round(r.confidence * 100)}% Confidence</span>
                    </div>
                    {r.matchedRecord.ratioDecidendi && <p className="mt-2 text-slate-700 dark:text-slate-300 italic line-clamp-2">"{r.matchedRecord.ratioDecidendi}"</p>}
                    {r.matchedRecord.citation && <div className="mt-1 text-[11px] text-slate-600 dark:text-slate-400 font-mono">Reported Citation: {r.matchedRecord.citation}</div>}
                  </div>
                )}

                <ul className="mt-3 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                  {r.notes.map((n, j) => <li key={j} className="flex gap-2">{statusIcon(r.status)}<span>{n}</span></li>)}
                </ul>

                {r.officialSources?.length > 0 && (
                  <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px]">
                    <span className="font-semibold text-slate-500 dark:text-slate-400">Official Links:</span>
                    {r.officialSources.map((src, sIdx) => (
                      <a key={sIdx} href={src.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center gap-1 font-bold text-[#8B1E3F] hover:underline">
                        {src.name} <ExternalLink className="size-3" />
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))
          )}
        </section>
      )}

      <p className="text-[11px] text-slate-500">
        Educational tool. Verification against SCC Online, court websites, or other databases is the user's responsibility. Privacy: citation text stays in your browser.
      </p>
    </div>
  )
}
