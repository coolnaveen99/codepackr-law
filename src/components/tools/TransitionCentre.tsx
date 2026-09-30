import { useMemo, useState } from 'react'
import { ArrowLeftRight, BookOpen, ExternalLink } from 'lucide-react'
import {
  TRANSITION_HIGHLIGHTS,
  RELATION_HELP,
  type RelationLabel,
  type TransitionHighlight,
} from '../../data/transitionHighlights'

const PAIRS = [
  { id: 'all' as const, label: 'All pairs' },
  { id: 'bns-ipc' as const, label: 'IPC → BNS' },
  { id: 'bnss-crpc' as const, label: 'CrPC → BNSS' },
  { id: 'bsa-iea' as const, label: 'IEA → BSA' },
]

function relationClass(r: RelationLabel) {
  switch (r) {
    case 'direct correspondence':
      return 'bg-emerald-50 text-emerald-900 border-emerald-200'
    case 'modified':
      return 'bg-amber-50 text-amber-950 border-amber-200'
    case 'new provision':
      return 'bg-blue-50 text-blue-900 border-blue-200'
    case 'removed':
    case 'no direct equivalent':
      return 'bg-slate-100 text-slate-800 border-slate-300'
    case 'requires legal review':
      return 'bg-orange-50 text-orange-950 border-orange-200'
    default:
      return 'bg-violet-50 text-violet-900 border-violet-200'
  }
}

export function TransitionCentre() {
  const [pair, setPair] = useState<(typeof PAIRS)[number]['id']>('all')
  const [q, setQ] = useState('')

  const rows = useMemo(() => {
    return TRANSITION_HIGHLIGHTS.filter((h) => {
      if (pair !== 'all' && h.actPair !== pair) return false
      if (!q.trim()) return true
      const s = q.toLowerCase()
      return (
        h.oldRef.toLowerCase().includes(s) ||
        h.newRef.toLowerCase().includes(s) ||
        h.relation.toLowerCase().includes(s) ||
        h.changedWording.toLowerCase().includes(s)
      )
    })
  }, [pair, q])

  return (
    <div className="space-y-5">
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-sm">
        <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#8B1E3F]">
          <ArrowLeftRight className="size-4" /> BNS / BNSS / BSA Transition Centre
        </div>
        <h1 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight">
          Relationship-aware Sanhita transitions
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-3xl">
          Flagship educational view of high-impact mappings. Labels are intentional — not every map is
          &quot;equivalent&quot;. Use the full Sanhita Mapper for section-by-section concordance.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {PAIRS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setPair(p.id)}
              className={`rounded-xl px-3 py-2 text-xs font-bold border transition ${
                pair === p.id
                  ? 'bg-[#8B1E3F] text-white border-[#8B1E3F]'
                  : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search old/new provision, relation, wording…"
          className="mt-4 w-full h-11 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent px-3 text-sm"
        />

        <p className="mt-3 text-xs text-slate-500">
          Full concordance tool:{' '}
          <a href="/tool/bns-ipc-mapper" className="font-bold text-[#8B1E3F] underline-offset-2 hover:underline">
            Sanhita Mapper (BNS / BNSS / BSA)
          </a>
          . Primary statutes:{' '}
          <a
            href="https://www.indiacode.nic.in/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-bold text-[#8B1E3F]"
          >
            India Code <ExternalLink className="size-3" />
          </a>
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
        <div className="text-xs font-extrabold uppercase tracking-wide text-slate-500 mb-2 flex items-center gap-1.5">
          <BookOpen className="size-3.5" /> Relation label legend
        </div>
        <div className="flex flex-wrap gap-2">
          {(Object.keys(RELATION_HELP) as RelationLabel[]).map((r) => (
            <span
              key={r}
              title={RELATION_HELP[r]}
              className={`text-[10px] font-extrabold uppercase px-2 py-1 rounded-full border ${relationClass(r)}`}
            >
              {r}
            </span>
          ))}
        </div>
      </section>

      {rows.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500">
          No highlights match this filter.
        </div>
      ) : (
        <div className="space-y-3">
          {rows.map((h) => (
            <HighlightCard key={h.id} h={h} />
          ))}
        </div>
      )}

      <p className="text-[11px] text-slate-500">
        Educational. Verify commencement notifications, savings clauses and forum practice before relying on any
        mapping in a live matter.
      </p>
    </div>
  )
}

function HighlightCard({ h }: { h: TransitionHighlight }) {
  return (
    <article className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5 space-y-3">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <div className="text-[10px] font-bold uppercase text-slate-500">{h.actPair}</div>
          <div className="font-bold text-sm text-slate-900 dark:text-white">{h.oldRef}</div>
          <div className="text-sm text-[#8B1E3F] font-semibold">→ {h.newRef}</div>
        </div>
        <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full border ${relationClass(h.relation)}`}>
          {h.relation}
        </span>
      </div>
      <dl className="grid sm:grid-cols-2 gap-3 text-xs">
        <div>
          <dt className="text-slate-500 font-bold">Changed wording</dt>
          <dd className="mt-0.5 text-slate-800 dark:text-slate-200">{h.changedWording}</dd>
        </div>
        <div>
          <dt className="text-slate-500 font-bold">Ingredients</dt>
          <dd className="mt-0.5 text-slate-800 dark:text-slate-200">{h.changedIngredients}</dd>
        </div>
        <div>
          <dt className="text-slate-500 font-bold">Procedural effect</dt>
          <dd className="mt-0.5 text-slate-800 dark:text-slate-200">{h.proceduralEffect}</dd>
        </div>
        <div>
          <dt className="text-slate-500 font-bold">Transitional</dt>
          <dd className="mt-0.5 text-slate-800 dark:text-slate-200">{h.transitional}</dd>
        </div>
      </dl>
      <div className="text-[11px] text-slate-500">
        Commencement: {h.commencement} · Source: {h.verificationSource}
      </div>
    </article>
  )
}
