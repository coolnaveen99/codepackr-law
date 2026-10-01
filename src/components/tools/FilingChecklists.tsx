import { useMemo, useState } from 'react'
import { ClipboardCheck, RotateCcw, ExternalLink } from 'lucide-react'
import { FILING_CHECKLISTS, type ChecklistStatus } from '../../data/filingChecklists'

const STORAGE_KEY = 'cp-law:filing-checklists:v1'
const LOCAL_KEY = 'cp-law:filing-checklists-local-additions:v1'

export function FilingChecklists() {
  const [activeId, setActiveId] = useState(FILING_CHECKLISTS[0]?.id ?? '')
  const [status, setStatus] = useState<Record<string, ChecklistStatus>>(() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') } catch { return {} }
  })
  const [filter, setFilter] = useState<'all'|'todo'|'done'|'na'>('all')
  const [court, setCourt] = useState(() => { try { return JSON.parse(localStorage.getItem(LOCAL_KEY) || '{}').court || '' } catch { return '' } })
  const [state, setState] = useState(() => { try { return JSON.parse(localStorage.getItem(LOCAL_KEY) || '{}').state || '' } catch { return '' } })
  const saveLocalAdditions = (nextCourt: string, nextState: string) => { try { localStorage.setItem(LOCAL_KEY, JSON.stringify({ court: nextCourt, state: nextState })) } catch {} }
  const checklist = useMemo(() => FILING_CHECKLISTS.find((c) => c.id === activeId) ?? FILING_CHECKLISTS[0], [activeId])
  const save = (next: Record<string, ChecklistStatus>) => { setStatus(next); try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)) } catch {} }
  const setItem = (itemId: string, s: ChecklistStatus) => save({ ...status, [`${activeId}:${itemId}`]: s })
  const get = (itemId: string): ChecklistStatus => status[`${activeId}:${itemId}`] ?? 'todo'
  const reset = () => save(Object.fromEntries(Object.entries(status).filter(([k]) => !k.startsWith(`${activeId}:`))))
  const items = checklist?.items.filter((item) => filter === 'all' || get(item.id) === filter) ?? []
  const done = checklist?.items.filter((item) => get(item.id) === 'done').length ?? 0
  const total = checklist?.items.length ?? 0

  if (!checklist) return null

  return (
    <div className="space-y-5">
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-sm">
        <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#8B1E3F]"><ClipboardCheck className="size-4" /> Filing Checklists</div>
        <h1 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight">Court filing baselines</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-3xl">Central baseline + court-specific additions + state-specific additions + user verification. This tool does not claim one checklist is valid in every court.</p>
        <div className="mt-4 grid gap-2 sm:grid-cols-3">
          <label className="text-[10px] font-extrabold uppercase tracking-wide">Document type
            <select value={activeId} onChange={(e) => { setActiveId(e.target.value); setFilter('all') }} className="mt-1 min-h-11 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent px-3 text-xs">
              {FILING_CHECKLISTS.map((c) => <option key={c.id} value={c.id}>{c.title}</option>)}
            </select>
          </label>
          <label className="text-[10px] font-extrabold uppercase tracking-wide">Court / forum addition
            <input value={court} onChange={(e) => { setCourt(e.target.value); saveLocalAdditions(e.target.value, state) }} placeholder="Record local rule / registry note" className="mt-1 min-h-11 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent px-3 text-xs" />
          </label>
          <label className="text-[10px] font-extrabold uppercase tracking-wide">State addition
            <input value={state} onChange={(e) => { setState(e.target.value); saveLocalAdditions(court, e.target.value) }} placeholder="Record state-specific requirement" className="mt-1 min-h-11 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent px-3 text-xs" />
          </label>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {(['all','todo','done','na'] as const).map((s) => <button key={s} type="button" onClick={() => setFilter(s)} className={`min-h-11 px-3 rounded-xl text-xs font-bold border ${filter===s?'bg-[#8B1E3F] text-white border-[#8B1E3F]':'border-slate-200 dark:border-slate-700'}`}>{s === 'all' ? 'All' : s.toUpperCase()}</button>)}
          <button type="button" onClick={reset} className="min-h-11 px-3 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 inline-flex items-center gap-1"><RotateCcw className="size-3" /> Reset checklist</button>
          {checklist.sourceUrl && <a href={checklist.sourceUrl} target="_blank" rel="noreferrer" className="min-h-11 px-3 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 inline-flex items-center gap-1">Official e-filing/source <ExternalLink className="size-3" /></a>}
        </div>
        <div className="mt-4 text-xs font-bold text-slate-500">Progress: {done}/{total} complete · Last reviewed: {checklist.lastReviewed}</div>
      </section>

      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-800">
          <div className="font-black">{checklist.title}</div>
          <div className="text-xs text-slate-500">{checklist.forum} · {checklist.documentType}</div>
          {(court || state) && <div className="mt-2 text-[11px] text-slate-500">Local additions recorded for this browser: {court ? `Court/forum: ${court}` : ''}{court && state ? ' · ' : ''}{state ? `State: ${state}` : ''}</div>}
        </div>
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {items.map((item) => (
            <div key={item.id} className="p-4 flex flex-col sm:flex-row sm:items-start gap-3">
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-slate-900 dark:text-white">{item.requirement}</div>
                <div className="mt-1 text-xs text-slate-500">Why: {item.why}</div>
                <div className="mt-0.5 text-[11px] text-slate-400">Source: {item.source} · {item.mandatory === 'mandatory' ? 'Mandatory baseline' : 'Conditional'} · {item.layer ?? 'central'} layer</div>
              </div>
              <div className="flex gap-1 shrink-0">
                {(['todo','done','na'] as ChecklistStatus[]).map((s) => <button key={s} type="button" aria-label={`${s} ${item.requirement}`} onClick={() => setItem(item.id,s)} className={`min-h-11 min-w-11 px-2.5 rounded-lg text-[10px] font-extrabold uppercase border ${get(item.id)===s ? 'bg-[#8B1E3F] text-white border-[#8B1E3F]' : 'border-slate-200 dark:border-slate-700'}`}>{s}</button>)}
              </div>
            </div>
          ))}
          {!items.length && <div className="p-6 text-sm text-slate-500">No items match this status filter.</div>}
        </div>
        <p className="p-4 text-[11px] text-slate-500 border-t border-slate-200 dark:border-slate-800">{checklist.disclaimer} Always verify current official court/state instructions before filing.</p>
      </section>
    </div>
  )
}
