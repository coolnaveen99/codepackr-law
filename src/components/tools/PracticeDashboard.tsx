import { useEffect, useMemo, useState } from 'react'
import {
  BookOpen,
  Briefcase,
  CalendarDays,
  CheckSquare,
  FileText,
  Gavel,
  Plus,
  Scale,
  Trash2,
} from 'lucide-react'
import { CP_LAW_NS, loadJson, saveJson } from '../../lib/localStore'
import {
  countCompletedChecklistItems,
  countDraftActivity,
  hasResearchActivity,
  readFavouriteStatutes,
  saveFavouriteStatutes,
  toggleFavouriteStatute,
  type FavouriteStatute,
} from '../../lib/practiceDashboard'
import { readDraftUsage } from '../../lib/draftStudio'
import { ALL_JUDGMENTS } from '../../data/judgments'

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

const STATUTE_SUGGESTIONS: FavouriteStatute[] = [
  { id: 'constitution', name: 'Constitution of India', href: '/subjects/constitution' },
  { id: 'bns', name: 'Bharatiya Nyaya Sanhita, 2023', href: '/subjects/bns' },
  { id: 'bnss', name: 'Bharatiya Nagarik Suraksha Sanhita, 2023', href: '/subjects/bnss' },
  { id: 'bsa', name: 'Bharatiya Sakshya Adhiniyam, 2023', href: '/subjects/bsa' },
  { id: 'cpc', name: 'Code of Civil Procedure, 1908', href: '/subjects/cpc' },
  { id: 'contract', name: 'Indian Contract Act, 1872', href: '/subjects/contract-law' },
  { id: 'limitation', name: 'Limitation Act, 1963', href: '/subjects/limitation' },
]

function openTool(slug: string) {
  window.history.pushState({}, '', `/tool/${slug}`)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

export function PracticeDashboard() {
  const [entries, setEntries] = useState<DiaryEntry[]>([])
  const [form, setForm] = useState(EMPTY)
  const [favourites, setFavourites] = useState<FavouriteStatute[]>([])
  const [showStatutePicker, setShowStatutePicker] = useState(false)

  useEffect(() => {
    setEntries(loadJson<DiaryEntry[]>(CP_LAW_NS.diary, []))
    setFavourites(readFavouriteStatutes())
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
      .slice(0, 5)
  }, [entries])

  const researchActive = hasResearchActivity(loadJson<unknown>(CP_LAW_NS.research, null))
  const draftCount = countDraftActivity(readDraftUsage())
  const checklistDone = countCompletedChecklistItems(loadJson<unknown>('cp-law:filing-checklists:v1', null))
  const recentJudgments = useMemo(() => {
    const lastRead = loadJson<{ judgmentId?: string } | null>('cplaw.judgmentLastRead.v1', null)
    const byLastRead = lastRead?.judgmentId ? ALL_JUDGMENTS.find((j) => j.id === lastRead.judgmentId) : undefined
    const pool = ALL_JUDGMENTS.filter((j) => j.id !== byLastRead?.id).sort((a, b) => (b.year || 0) - (a.year || 0))
    return (byLastRead ? [byLastRead, ...pool] : pool).slice(0, 3)
  }, [])

  const add = () => {
    if (!form.matter.trim()) return
    persist([{ ...form, id: `diary-${Date.now()}` }, ...entries].slice(0, 100))
    setForm(EMPTY)
  }

  const toggleStatute = (item: FavouriteStatute) => {
    const next = toggleFavouriteStatute(favourites, item)
    setFavourites(next)
    saveFavouriteStatutes(next)
  }

  return (
    <div className="space-y-5">
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-sm">
        <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#8B1E3F]">
          <Briefcase className="size-4" /> Advocate Practice Dashboard
        </div>
        <h1 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight">Local chamber workspace</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-3xl">
          One browser-local overview of matters, hearings, research, drafts, checklists, judgments and favourite statutes.
        </p>
        <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-950">
          Do not store confidential, privileged or personally identifiable client data unless you understand browser storage
          security limits. No case diary data is sent to analytics or a remote case-management service.
        </div>
      </section>

      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3" aria-label="Practice overview">
        <DashboardCard icon={<Briefcase className="size-4" />} title="Active cases" value={String(entries.length)} detail="Local diary matters" onClick={() => document.getElementById('case-diary')?.scrollIntoView({ behavior: 'smooth' })} />
        <DashboardCard icon={<CalendarDays className="size-4" />} title="Upcoming hearings" value={String(upcoming.length)} detail="Next 5 dated matters" onClick={() => document.getElementById('upcoming-hearings')?.scrollIntoView({ behavior: 'smooth' })} />
        <DashboardCard icon={<BookOpen className="size-4" />} title="Research notes" value={researchActive ? '1 active' : '0'} detail="Research Workbench" onClick={() => openTool('research-workbench')} />
        <DashboardCard icon={<FileText className="size-4" />} title="Draft activity" value={String(draftCount)} detail="Recent/favourite drafts" onClick={() => openTool('legal-draft-studio')} />
        <DashboardCard icon={<CheckSquare className="size-4" />} title="Checklist items" value={String(checklistDone)} detail="Completed filing items" onClick={() => openTool('filing-checklists')} />
        <DashboardCard icon={<Gavel className="size-4" />} title="Recent judgments" value={String(recentJudgments.length)} detail="Case Law Library" onClick={() => openTool('case-law')} />
        <DashboardCard icon={<Scale className="size-4" />} title="Favourite statutes" value={String(favourites.length)} detail="Browser-local bookmarks" onClick={() => document.getElementById('favourite-statutes')?.scrollIntoView({ behavior: 'smooth' })} />
      </section>

      <section id="upcoming-hearings" className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
        <div className="text-xs font-extrabold uppercase tracking-wide text-slate-500 mb-2">Upcoming hearings</div>
        {upcoming.length ? (
          <ul className="space-y-2">
            {upcoming.map((e) => (
              <li key={e.id} className="flex flex-wrap justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-2 text-sm">
                <span className="font-bold">{e.nextDate} · {e.matter}</span>
                <span className="text-xs text-slate-500">{e.court || 'Court —'}{e.itemNumber ? ` · Item ${e.itemNumber}` : ''}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-slate-500">No dated hearings are stored locally yet.</p>
        )}
      </section>

      <section id="favourite-statutes" className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-wide text-slate-500">Favourite statutes</div>
            <p className="text-xs text-slate-500 mt-1">Stored only under cp-law:favorites:v1.</p>
          </div>
          <button type="button" onClick={() => setShowStatutePicker(!showStatutePicker)} className="min-h-11 rounded-xl border border-slate-200 dark:border-slate-700 px-3 text-xs font-bold inline-flex items-center gap-1.5">
            <Plus className="size-3.5" /> Add statute
          </button>
        </div>
        {showStatutePicker && (
          <div className="grid sm:grid-cols-2 gap-2">
            {STATUTE_SUGGESTIONS.map((item) => {
              const saved = favourites.some((x) => x.id === item.id)
              return (
                <button key={item.id} type="button" onClick={() => toggleStatute(item)} className="min-h-11 rounded-xl border border-slate-200 dark:border-slate-700 px-3 text-left text-xs font-bold">
                  {saved ? '★ ' : '☆ '}{item.name}
                </button>
              )
            })}
          </div>
        )}
        {favourites.length ? (
          <div className="flex flex-wrap gap-2">
            {favourites.map((item) => (
              <a key={item.id} href={item.href} className="min-h-11 rounded-xl border border-slate-200 dark:border-slate-700 px-3 inline-flex items-center text-xs font-bold hover:border-[#8B1E3F]">
                ★ {item.name}
              </a>
            ))}
          </div>
        ) : (
          <p className="text-sm text-slate-500">No favourite statutes yet. Add commonly used Acts above.</p>
        )}
      </section>

      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
        <div className="text-xs font-extrabold uppercase tracking-wide text-slate-500 mb-2">Recent judgments</div>
        <div className="grid sm:grid-cols-3 gap-2">
          {recentJudgments.map((j) => (
            <a key={j.id} href={`/case-law/${j.id}`} className="min-h-11 rounded-xl border border-slate-200 dark:border-slate-700 p-3 text-xs font-bold hover:border-[#8B1E3F]">
              {j.caseName}
              <span className="block mt-1 text-[10px] font-normal text-slate-500">{j.year || 'Year not listed'}{j.citation ? ` · ${j.citation}` : ''}</span>
            </a>
          ))}
        </div>
      </section>

      <section id="case-diary" className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5 space-y-3">
        <div className="text-xs font-extrabold uppercase text-slate-500">Case diary</div>
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
              <input type={key === 'nextDate' ? 'date' : 'text'} value={form[key]} onChange={(e) => setForm({ ...form, [key]: e.target.value })} className="mt-1 w-full min-h-11 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent px-3 text-sm font-normal" />
            </label>
          ))}
        </div>
        <label className="block text-xs font-bold text-slate-600">
          Notes
          <textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} rows={2} className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent p-2.5 text-sm font-normal" />
        </label>
        <button type="button" onClick={add} className="min-h-11 inline-flex items-center gap-1.5 rounded-xl bg-[#8B1E3F] text-white px-3 py-2 text-xs font-bold">
          <Plus className="size-3.5" /> Add diary entry
        </button>
      </section>

      {entries.length > 0 && (
        <ul className="space-y-2">
          {entries.map((e) => (
            <li key={e.id} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 flex flex-wrap justify-between gap-2">
              <div>
                <div className="font-bold text-sm">{e.matter}</div>
                <div className="text-xs text-slate-500 mt-1">
                  {e.court || 'Court —'} · Next: {e.nextDate || '—'}{e.itemNumber ? ` · Item ${e.itemNumber}` : ''}{e.task ? ` · Task: ${e.task}` : ''}
                </div>
                {e.docs && <div className="text-xs mt-1">Docs: {e.docs}</div>}
                {e.notes && <div className="text-xs text-slate-600 mt-1">{e.notes}</div>}
              </div>
              <button type="button" className="min-h-11 min-w-11 text-xs font-bold text-slate-500 inline-flex items-center gap-1" onClick={() => persist(entries.filter((x) => x.id !== e.id))}>
                <Trash2 className="size-3.5" /> Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function DashboardCard({ icon, title, value, detail, onClick }: { icon: React.ReactNode; title: string; value: string; detail: string; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className="min-h-28 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 text-left hover:border-[#8B1E3F] transition">
      <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-slate-500">{icon}{title}</div>
      <div className="mt-2 text-2xl font-black">{value}</div>
      <div className="mt-1 text-[10px] text-slate-500">{detail}</div>
    </button>
  )
}
