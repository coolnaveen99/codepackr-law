import { useMemo, useState } from 'react'
import { Calculator, AlertTriangle } from 'lucide-react'
import {
  LIMITATION_RULES,
  computeLimitation,
  type LimitationCategory,
} from '../../lib/limitationRules'

export function LimitationCalculator() {
  const [category, setCategory] = useState<LimitationCategory>('suit-contract')
  const [start, setStart] = useState('')
  const [asOf, setAsOf] = useState(() => new Date().toISOString().slice(0, 10))

  const result = useMemo(() => {
    if (!start) return null
    return computeLimitation(category, start, asOf)
  }, [category, start, asOf])

  return (
    <div className="space-y-5">
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-sm">
        <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#8B1E3F]">
          <Calculator className="size-4" /> Limitation Calculator
        </div>
        <h1 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight">Educational limitation worksheet</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-3xl">
          Deterministic date arithmetic against common Limitation Act patterns. Not a substitute for reading the schedule article that actually applies.
        </p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <label className="block text-xs font-bold text-slate-600">
            Category
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as LimitationCategory)}
              className="mt-1 w-full h-11 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent px-3 text-sm font-semibold"
            >
              {LIMITATION_RULES.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.label}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-xs font-bold text-slate-600">
            Start / accrual date
            <input
              type="date"
              value={start}
              onChange={(e) => setStart(e.target.value)}
              className="mt-1 w-full h-11 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent px-3 text-sm font-semibold"
            />
          </label>
          <label className="block text-xs font-bold text-slate-600">
            As of date
            <input
              type="date"
              value={asOf}
              onChange={(e) => setAsOf(e.target.value)}
              className="mt-1 w-full h-11 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent px-3 text-sm font-semibold"
            />
          </label>
        </div>
      </section>

      {!start && (
        <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500">
          Select a category and accrual date to compute.
        </div>
      )}

      {result && (
        <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-3">
          <div className="text-xs font-extrabold uppercase tracking-wide text-slate-500">Result</div>
          <div className="text-sm font-mono bg-slate-50 dark:bg-slate-950 rounded-xl p-3">{result.formula}</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
            <div><div className="text-xs text-slate-500">End date</div><div className="font-black">{result.endDate ?? 'N/A'}</div></div>
            <div>
              <div className="text-xs text-slate-500">Status</div>
              <div className={`font-black ${result.expired === true ? 'text-red-700' : result.expired === false ? 'text-emerald-700' : 'text-slate-700'}`}>
                {result.expired === null ? 'No fixed period' : result.expired ? 'Likely expired' : 'Within period'}
              </div>
            </div>
            <div><div className="text-xs text-slate-500">Days remaining</div><div className="font-black">{result.daysRemaining ?? '—'}</div></div>
            <div><div className="text-xs text-slate-500">Article hint</div><div className="font-bold text-xs">{result.rule.articleHint}</div></div>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-950 space-y-1">
            <div className="font-extrabold flex items-center gap-1.5"><AlertTriangle className="size-3.5" /> Warnings</div>
            {result.warnings.map((w, i) => (
              <p key={i}>{w}</p>
            ))}
          </div>
          <p className="text-[11px] text-slate-500">Source: {result.rule.source}</p>
        </section>
      )}
    </div>
  )
}
