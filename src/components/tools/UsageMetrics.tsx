import { useMemo, useState } from 'react'
import { BarChart3 } from 'lucide-react'
import { clearAggregateMetrics, getAggregateMetrics } from '../../lib/analytics'

export function UsageMetrics() {
  const [tick, setTick] = useState(0)
  const metrics = useMemo(() => getAggregateMetrics(), [tick])

  const entries = (obj: Record<string, number>) => Object.entries(obj).sort((a, b) => b[1] - a[1])

  return (
    <div className="space-y-5">
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-sm">
        <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#8B1E3F]">
          <BarChart3 className="size-4" /> Privacy-safe usage metrics
        </div>
        <h1 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight">Aggregate only</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-3xl">
          Counts of tool opens and workflow keys stored locally. No legal query text, case facts, client names, notes or drafts are collected.
        </p>
        <div className="mt-3 flex gap-2">
          <button type="button" className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold" onClick={() => setTick((t) => t + 1)}>
            Refresh
          </button>
          <button
            type="button"
            className="rounded-xl border border-red-200 text-red-800 px-3 py-2 text-xs font-bold"
            onClick={() => {
              clearAggregateMetrics()
              setTick((t) => t + 1)
            }}
          >
            Clear metrics
          </button>
        </div>
        <div className="text-[11px] text-slate-500 mt-2">Last updated: {metrics.lastUpdated || '—'}</div>
      </section>

      {(
        [
          ['Tool opens', metrics.toolOpens],
          ['Workflow completions', metrics.workflowCompletions],
          ['Feature uses', metrics.featureUses],
        ] as const
      ).map(([title, map]) => (
        <section key={title} className="rounded-2xl border border-slate-200 dark:border-slate-800 p-4 bg-white dark:bg-slate-900">
          <div className="text-xs font-extrabold uppercase text-slate-500 mb-2">{title}</div>
          {entries(map).length === 0 ? (
            <p className="text-sm text-slate-500">No data yet.</p>
          ) : (
            <ul className="space-y-1 text-sm">
              {entries(map).map(([k, v]) => (
                <li key={k} className="flex justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-1">
                  <span className="font-mono text-xs">{k}</span>
                  <span className="font-bold">{v}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  )
}
