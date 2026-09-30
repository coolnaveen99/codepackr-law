import { useMemo, useState } from 'react'
import { ClipboardCheck } from 'lucide-react'
import { FILING_CHECKLISTS, type ChecklistStatus } from '../../data/filingChecklists'

export function FilingChecklists() {
  const [activeId, setActiveId] = useState(FILING_CHECKLISTS[0]?.id ?? '')
  const [status, setStatus] = useState<Record<string, ChecklistStatus>>({})

  const checklist = useMemo(
    () => FILING_CHECKLISTS.find((c) => c.id === activeId) ?? FILING_CHECKLISTS[0],
    [activeId],
  )

  const setItem = (itemId: string, s: ChecklistStatus) => {
    setStatus((prev) => ({ ...prev, [`${activeId}:${itemId}`]: s }))
  }

  const get = (itemId: string): ChecklistStatus => status[`${activeId}:${itemId}`] ?? 'todo'

  if (!checklist) return null

  return (
    <div className="space-y-5">
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-sm">
        <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#8B1E3F]">
          <ClipboardCheck className="size-4" /> Filing Checklists
        </div>
        <h1 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight">Court filing baselines</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-3xl">
          Central educational checklists. Add court-specific and state-specific requirements before filing.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {FILING_CHECKLISTS.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActiveId(c.id)}
              className={`h-9 px-3 rounded-xl text-xs font-bold border transition-colors ${
                activeId === c.id
                  ? 'bg-[#8B1E3F] text-white border-[#8B1E3F]'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700'
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-800">
          <div className="font-black">{checklist.title}</div>
          <div className="text-xs text-slate-500">{checklist.forum}</div>
        </div>
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {checklist.items.map((item) => (
            <div key={item.id} className="p-4 flex flex-col sm:flex-row sm:items-start gap-3">
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-slate-900 dark:text-white">{item.requirement}</div>
                <div className="mt-1 text-xs text-slate-500">Why: {item.why}</div>
                <div className="mt-0.5 text-[11px] text-slate-400">Source: {item.source} · {item.mandatory}</div>
              </div>
              <div className="flex gap-1 shrink-0">
                {(['todo', 'done', 'na'] as ChecklistStatus[]).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setItem(item.id, s)}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase border ${
                      get(item.id) === s
                        ? s === 'done'
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : s === 'na'
                            ? 'bg-slate-500 text-white border-slate-500'
                            : 'bg-amber-500 text-white border-amber-500'
                        : 'border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="p-4 text-[11px] text-slate-500 border-t border-slate-200 dark:border-slate-800">{checklist.disclaimer}</p>
      </section>
    </div>
  )
}
