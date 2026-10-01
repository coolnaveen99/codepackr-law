import { useEffect, useMemo, useState } from 'react'
import { CalendarDays, Plus, Trash2 } from 'lucide-react'
import { CP_LAW_NS, loadJson, saveJson } from '../../lib/localStore'
import { getStudyStats, getStudyStatus, sortStudyItems, SAMPLE_STUDY_ITEM, type StudyItem } from '../../lib/studentLearning'

const EMPTY: Omit<StudyItem, 'id'> = {
  subject: '',
  topic: '',
  targetDate: '',
  cycles: 1,
  done: false,
  weak: false,
  notes: '',
}

export function StudyPlanner() {
  const [items, setItems] = useState<StudyItem[]>([])
  const [form, setForm] = useState(EMPTY)
  const [editingId, setEditingId] = useState<string | null>(null)

  useEffect(() => {
    setItems(loadJson<StudyItem[]>(CP_LAW_NS.study, []))
  }, [])

  const persist = (next: StudyItem[]) => {
    setItems(next)
    saveJson(CP_LAW_NS.study, next)
  }

  const saveItem = () => {
    if (!form.subject.trim() || !form.topic.trim()) return
    const normalized = { ...form, cycles: Math.max(1, Math.min(20, Math.round(form.cycles) || 1)) }
    if (editingId) {
      persist(items.map((item) => (item.id === editingId ? { ...normalized, id: editingId } : item)))
    } else {
      persist([{ ...normalized, id: `study-${Date.now()}` }, ...items])
    }
    setForm(EMPTY)
    setEditingId(null)
  }

  const edit = (item: StudyItem) => {
    const { id: _id, ...rest } = item
    setForm(rest)
    setEditingId(item.id)
  }

  const loadSample = () => {
    setForm({ ...SAMPLE_STUDY_ITEM })
    setEditingId(null)
  }

  const toggleWeak = (id: string) => persist(items.map((item) => (item.id === id ? { ...item, weak: !item.weak } : item)))
  const clearAll = () => {
    persist([])
    setForm(EMPTY)
    setEditingId(null)
  }

  const stats = useMemo(() => getStudyStats(items), [items])
  const orderedItems = useMemo(() => sortStudyItems(items), [items])

  return (
    <div className="space-y-5">
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-sm">
        <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#8B1E3F]">
          <CalendarDays className="size-4" /> Study Planner
        </div>
        <h1 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight">Browser-only revision plan</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-3xl">
          Subjects, topics, target dates, revision cycles and weak areas — stored only on this device.
        </p>
        <div className="mt-4 grid grid-cols-3 gap-3 text-center">
          <div className="rounded-xl bg-slate-50 dark:bg-slate-950 p-3">
            <div className="text-2xl font-black">{stats.total}</div>
            <div className="text-[10px] font-bold uppercase text-slate-500">Items</div>
          </div>
          <div className="rounded-xl bg-emerald-50 dark:bg-emerald-950/40 p-3">
            <div className="text-2xl font-black text-emerald-800 dark:text-emerald-200">{stats.done}</div>
            <div className="text-[10px] font-bold uppercase text-slate-500">Done</div>
          </div>
          <div className="rounded-xl bg-amber-50 dark:bg-amber-950/40 p-3">
            <div className="text-2xl font-black text-amber-900 dark:text-amber-200">{stats.weak}</div>
            <div className="text-[10px] font-bold uppercase text-slate-500">Weak open</div>
          </div>
          <div className="rounded-xl bg-slate-50 dark:bg-slate-950 p-3">
            <div className="text-2xl font-black">{stats.due}</div>
            <div className="text-[10px] font-bold uppercase text-slate-500">Due / overdue</div>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5 space-y-3">
        <div className="grid sm:grid-cols-2 gap-3">
          <label className="text-xs font-bold text-slate-600">
            Subject
            <input
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="mt-1 w-full h-10 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent px-3 text-sm"
              placeholder="e.g. Constitution"
            />
          </label>
          <label className="text-xs font-bold text-slate-600">
            Topic
            <input
              value={form.topic}
              onChange={(e) => setForm({ ...form, topic: e.target.value })}
              className="mt-1 w-full h-10 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent px-3 text-sm"
              placeholder="e.g. Article 21"
            />
          </label>
          <label className="text-xs font-bold text-slate-600">
            Target date
            <input
              type="date"
              value={form.targetDate}
              onChange={(e) => setForm({ ...form, targetDate: e.target.value })}
              className="mt-1 w-full h-10 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent px-3 text-sm"
            />
          </label>
          <label className="text-xs font-bold text-slate-600">
            Revision cycles
            <input
              type="number"
              min={1}
              max={20}
              value={form.cycles}
              onChange={(e) => setForm({ ...form, cycles: Number(e.target.value) || 1 })}
              className="mt-1 w-full h-10 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent px-3 text-sm"
            />
          </label>
        </div>
        <label className="block text-xs font-bold text-slate-600">
          Notes
          <input
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
            className="mt-1 w-full h-10 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent px-3 text-sm"
          />
        </label>
        <label className="inline-flex items-center gap-2 text-xs font-bold">
          <input type="checkbox" checked={form.weak} onChange={(e) => setForm({ ...form, weak: e.target.checked })} />
          Mark as weak area
        </label>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={saveItem}
            className="inline-flex min-h-11 items-center gap-1.5 rounded-xl bg-[#8B1E3F] text-white px-3 py-2 text-xs font-bold"
          >
            <Plus className="size-3.5" /> {editingId ? 'Save changes' : 'Add to plan'}
          </button>
          <button
            type="button"
            onClick={loadSample}
            className="inline-flex min-h-11 items-center rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold"
          >
            Load sample
          </button>
          {items.length > 0 && (
            <button
              type="button"
              onClick={clearAll}
              className="inline-flex min-h-11 items-center rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold text-slate-600"
            >
              Clear all
            </button>
          )}
        </div>
      </section>

      {items.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500">
          No study items yet.
        </div>
      ) : (
        <ul className="space-y-2">
          {orderedItems.map((it) => (
            <li
              key={it.id}
              className={`rounded-2xl border p-4 flex flex-wrap items-start justify-between gap-3 ${
                it.done
                  ? 'border-emerald-200 bg-emerald-50/50 dark:bg-emerald-950/20'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'
              }`}
            >
              <div>
                <div className="font-bold text-sm">
                  {it.subject} · {it.topic}
                  {it.weak && (
                    <span className="ml-2 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-amber-100 text-amber-900">
                      Weak
                    </span>
                  )}
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Target: {it.targetDate || '—'} · Cycles: {it.cycles}
                  {it.notes ? ` · ${it.notes}` : ''}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wide text-slate-500 px-2 py-1">
                  {getStudyStatus(it)}
                </span>
                <button
                  type="button"
                  className="min-h-11 text-xs font-bold rounded-lg border px-3 py-1"
                  onClick={() =>
                    persist(items.map((x) => (x.id === it.id ? { ...x, done: !x.done } : x)))
                  }
                >
                  {it.done ? 'Undo' : 'Done'}
                </button>
                <button
                  type="button"
                  className="min-h-11 text-xs font-bold rounded-lg border px-3 py-1"
                  onClick={() => toggleWeak(it.id)}
                >
                  {it.weak ? 'Clear weak' : 'Mark weak'}
                </button>
                <button
                  type="button"
                  className="min-h-11 text-xs font-bold rounded-lg border px-3 py-1"
                  onClick={() => edit(it)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="min-h-11 text-xs font-bold text-slate-500 inline-flex items-center gap-1 px-3 py-1"
                  onClick={() => persist(items.filter((x) => x.id !== it.id))}
                >
                  <Trash2 className="size-3.5" /> Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
