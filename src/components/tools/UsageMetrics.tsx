import { useMemo, useState } from 'react'
import { BarChart3, ShieldCheck, ShieldAlert, RefreshCw, Trash2, CheckCircle2, XCircle } from 'lucide-react'
import {
  clearAggregateMetrics,
  getAggregateMetrics,
  isAnalyticsEnabled,
  setAnalyticsEnabled,
} from '../../lib/analytics'

export function UsageMetrics() {
  const [tick, setTick] = useState(0)
  const [enabled, setEnabled] = useState(() => isAnalyticsEnabled())
  const metrics = useMemo(() => getAggregateMetrics(), [tick])

  const handleToggle = (next: boolean) => {
    setAnalyticsEnabled(next)
    setEnabled(next)
    setTick((t) => t + 1)
  }

  const entries = (obj?: Record<string, number>) => {
    if (!obj) return []
    return Object.entries(obj).sort((a, b) => b[1] - a[1])
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header and Controls */}
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-sm">
        <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#8B1E3F]">
          <BarChart3 className="size-4" /> Privacy-Safe Usage Metrics (Phase 22)
        </div>
        <h1 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
          Aggregate Telemetry Only
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          In strict accordance with Roadmap §27 (Analytics Without Legal-Data Surveillance), Codepackr Law only counts
          opaque tool opens and completion events locally in your browser. No legal text ever leaves your machine.
        </p>

        {/* Opt-in / Opt-out toggle */}
        <div className="mt-5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            {enabled ? (
              <ShieldCheck className="size-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            ) : (
              <ShieldAlert className="size-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            )}
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                {enabled ? 'Local metrics enabled' : 'Metrics disabled (opted out)'}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {enabled
                  ? 'Opaque counters are tracked only in browser localStorage.'
                  : 'All tracking is stopped and counters were wiped.'}
              </div>
            </div>
          </div>

          <button
            type="button"
            role="switch"
            aria-checked={enabled}
            onClick={() => handleToggle(!enabled)}
            className={`min-h-[44px] min-w-[44px] px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
              enabled
                ? 'bg-slate-200 hover:bg-slate-300 text-slate-800 dark:bg-slate-700 dark:text-slate-200'
                : 'bg-[#8B1E3F] hover:bg-[#721833] text-white'
            }`}
          >
            {enabled ? 'Disable tracking' : 'Enable local metrics'}
          </button>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 flex flex-wrap gap-2.5 items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4">
          <div className="flex gap-2">
            <button
              type="button"
              className="min-h-[44px] inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 px-4 py-2 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition"
              onClick={() => setTick((t) => t + 1)}
            >
              <RefreshCw className="size-3.5" /> Refresh
            </button>
            <button
              type="button"
              className="min-h-[44px] inline-flex items-center gap-1.5 rounded-xl border border-red-200 dark:border-red-900/60 text-red-700 dark:text-red-400 px-4 py-2 text-xs font-bold hover:bg-red-50 dark:hover:bg-red-950/30 transition"
              onClick={() => {
                clearAggregateMetrics()
                setTick((t) => t + 1)
              }}
            >
              <Trash2 className="size-3.5" /> Clear metrics
            </button>
          </div>
          <div className="text-[11px] text-slate-500 font-medium">
            Last updated: {metrics.lastUpdated ? new Date(metrics.lastUpdated).toLocaleString() : '—'}
          </div>
        </div>
      </section>

      {/* Allowed vs Prohibited Policy Banner */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-emerald-200 dark:border-emerald-950/60 bg-emerald-50/50 dark:bg-emerald-950/20 p-4">
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 dark:text-emerald-400 mb-2 uppercase tracking-wide">
            <CheckCircle2 className="size-4" /> Allowed (Aggregate Only)
          </div>
          <ul className="text-xs text-emerald-900/80 dark:text-emerald-300/80 space-y-1">
            <li>• Tool opened events (opaque slug)</li>
            <li>• Workflow completion keys (opaque ID)</li>
            <li>• Feature usage counters (opaque ID)</li>
            <li>• Anonymous performance execution counters</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-rose-200 dark:border-rose-950/60 bg-rose-50/50 dark:bg-rose-950/20 p-4">
          <div className="flex items-center gap-1.5 text-xs font-bold text-rose-800 dark:text-rose-400 mb-2 uppercase tracking-wide">
            <XCircle className="size-4" /> Strictly Prohibited (Zero Surveillance)
          </div>
          <ul className="text-xs text-rose-900/80 dark:text-rose-300/80 space-y-1">
            <li>• Zero legal search query strings or questions</li>
            <li>• Zero case facts, party details, or client names</li>
            <li>• Zero uploaded document texts or citations</li>
            <li>• Zero private chamber notes or generated drafts</li>
          </ul>
        </div>
      </div>

      {/* Category Breakdowns */}
      <div className="grid sm:grid-cols-2 gap-4">
        {(
          [
            ['Tool opens', metrics.toolOpens],
            ['Workflow completions', metrics.workflowCompletions],
            ['Feature uses', metrics.featureUses],
            ['Performance counters', metrics.performanceCounters],
          ] as const
        ).map(([title, map]) => {
          const list = entries(map)
          return (
            <section
              key={title}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 bg-white dark:bg-slate-900 shadow-sm"
            >
              <div className="flex items-center justify-between mb-3 border-b border-slate-100 dark:border-slate-800 pb-2">
                <span className="text-xs font-extrabold uppercase text-slate-600 dark:text-slate-400 tracking-wider">
                  {title}
                </span>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  {list.reduce((acc, [, v]) => acc + v, 0)} total
                </span>
              </div>
              {list.length === 0 ? (
                <p className="text-xs text-slate-400 italic py-2">No activity recorded yet.</p>
              ) : (
                <ul className="space-y-1.5 text-xs">
                  {list.map(([k, v]) => (
                    <li
                      key={k}
                      className="flex justify-between items-center gap-2 border-b border-slate-100 dark:border-slate-800/60 pb-1.5"
                    >
                      <span className="font-mono text-slate-700 dark:text-slate-300 truncate max-w-[200px]" title={k}>
                        {k}
                      </span>
                      <span className="font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                        {v}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          )
        })}
      </div>
    </div>
  )
}
