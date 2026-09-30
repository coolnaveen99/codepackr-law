import { useEffect, useMemo, useState } from 'react'
import { Briefcase, Plus, Trash2 } from 'lucide-react'
import { CP_LAW_NS, loadJson, saveJson } from '../../lib/localStore'

interface DiaryEntry {
  id: string
  matter: string
  court: string
  nextDate: string
  itemNumber: string
  task: string
  notes: string
  docs: string
}

const EMPTY: Omit<DiaryEntry, 'id'> = {
  matter: '',
  court: '',
  nextDate: '',
  itemNumber: '',
  task: '',
  notes: '',
  docs: '',
}

export function PracticeDashboard() {
  const [entries, setEntries] = useState<DiaryEntry[]>([])
  const [form, setForm] = useState(EMPTY)

  useEffect(() => {
    setEntries(loadJson<DiaryEntry[]>(CP_LAW_NS.diary, []))
  }, [])

  const persist = (next: DiaryEntry[]) => {
    setEntries(next)
    saveJson(CP_LAW_NS.diary, next)
  }

  const upcoming = useMemo(() => {
    const today = new Date().toISOString().slice(0, 10)
    return [...entries]
      .filter((e) => e.nextDate && e.nextDate >= today)
      .sort((a, b) => a.nextDate.localeCompare(b.nextDate))
      .slice(0, 8)
  }, [entries])

  const add = () => {
    if (!form.matter.trim()) return
    persist([{ ...form, id: `diary-${Date.now()}` }, ...entries].slice(0, 100))
    setForm(EMPTY)
  }

  return (
    <div className="space-y-5">
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-sm">
        <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#8B1E3F]">
          <Briefcase className="size-4" /> Advocate Practice Dashboard
        </div>
        <h1 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight">Local case diary</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-3xl">
          Active matters, next dates, tasks and document checklists — 100% browser storage. Not a cloud case-management
          system.
        </p>
        <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-950">
          Do not store confidential, privileged or personally identifiable client data unless you understand browser
          storage security limits. Export/delete controls are under Privacy &amp; Local Data.
        </div>
      </section>

      <section className="grid sm:grid-cols-3 gap-3">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
          <div className="text-[10px] font-extrabold uppercase text-slate-500">Active matters</div>
          <div className="text-2xl font-black mt-1">{entries.length}</div>
        </div>
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
          <div className="text-[10px] font-extrabold uppercase text-slate-500">Upcoming (dated)</div>
          <div className="text-2xl font-black mt-1">{upcoming.length}</div>
        </div>
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
          <div className="text-[10px] font-extrabold uppercase text-slate-500">Storage</div>
          <div className="text-sm font-bold mt-1">cp-law:diary:v1</div>
        </div>
      </section>

      {upcoming.length > 0 && (
        <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
          <div className="text-xs font-extrabold uppercase tracking-wide text-slate-500 mb-2">Upcoming hearings</div>
          <ul className="space-y-2">
            {upcoming.map((e) => (
              <li key={e.id} className="text-sm flex justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                <span className="font-bold">
                  {e.nextDate} · {e.matter}
                </span>
                <span className="text-xs text-slate-500">
                  {e.court}
                  {e.itemNumber ? ` · Item ${e.itemNumber}` : ''}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5 space-y-3">
        <div className="text-xs font-extrabold uppercase text-slate-500">Add diary entry</div>
        <div className="grid sm:grid-cols-2 gap-3">
          {(
            [
              ['matter', 'Matter / parties'],
              ['court', 'Court'],
              ['nextDate', 'Next date'],
              ['itemNumber', 'Item number'],
              ['task', 'Task'],
              ['docs', 'Document checklist'],
            ] as const
          ).map(([key, label]) => (
            <label key={key} className="text-xs font-bold text-slate-600">
              {label}
              <input
                type={key === 'nextDate' ? 'date' : 'text'}
                value={form[key]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                className="mt-1 w-full h-10 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent px-3 text-sm font-normal"
              />
            </label>
          ))}
        </div>
        <label className="block text-xs font-bold text-slate-600">
          Notes
          <textarea
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
            rows={2}
            className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent p-2.5 text-sm font-normal"
          />
        </label>
        <button
          type="button"
          onClick={add}
          className="inline-flex items-center gap-1.5 rounded-xl bg-[#8B1E3F] text-white px-3 py-2 text-xs font-bold"
        >
          <Plus className="size-3.5" /> Add entry
        </button>
      </section>

      {entries.length > 0 && (
        <ul className="space-y-2">
          {entries.map((e) => (
            <li
              key={e.id}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 flex flex-wrap justify-between gap-2"
            >
              <div>
                <div className="font-bold text-sm">{e.matter}</div>
                <div className="text-xs text-slate-500 mt-1">
                  {e.court || 'Court —'} · Next: {e.nextDate || '—'}
                  {e.itemNumber ? ` · Item ${e.itemNumber}` : ''}
                  {e.task ? ` · Task: ${e.task}` : ''}
                </div>
                {e.docs && <div className="text-xs mt-1">Docs: {e.docs}</div>}
                {e.notes && <div className="text-xs text-slate-600 mt-1">{e.notes}</div>}
              </div>
              <button
                type="button"
                className="text-xs font-bold text-slate-500 inline-flex items-center gap-1 h-fit"
                onClick={() => persist(entries.filter((x) => x.id !== e.id))}
              >
                <Trash2 className="size-3.5" /> Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
