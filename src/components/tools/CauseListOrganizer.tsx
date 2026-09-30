import { useEffect, useMemo, useState } from 'react'
import { ListOrdered, Star } from 'lucide-react'
import { CP_LAW_NS, loadJson, saveJson } from '../../lib/localStore'

interface CauseEntry {
  id: string
  court: string
  bench: string
  date: string
  item: string
  caseRef: string
  parties: string
  advocate: string
  purpose: string
  notes: string
  mine: boolean
}

function parseCauseList(raw: string, dateDefault: string): CauseEntry[] {
  const lines = raw
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean)
  const out: CauseEntry[] = []
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const m =
      line.match(/^(\d+)[.)]\s*(.+)$/) ||
      line.match(/^Item\s*(\d+)[:\s]+(.+)$/i) ||
      line.match(/^(\d+)\s+(.+)$/)
    if (!m) continue
    const rest = m[2]
    const parts = rest.split(/\s+[vV]\.\s+/)
    const parties = parts.length >= 2 ? `${parts[0].trim()} v. ${parts.slice(1).join(' v. ').trim()}` : rest
    out.push({
      id: `cl-${Date.now()}-${i}`,
      court: '',
      bench: '',
      date: dateDefault,
      item: m[1],
      caseRef: '',
      parties,
      advocate: '',
      purpose: '',
      notes: '',
      mine: false,
    })
  }
  return out
}

export function CauseListOrganizer() {
  const [raw, setRaw] = useState('')
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10))
  const [court, setCourt] = useState('')
  const [entries, setEntries] = useState<CauseEntry[]>([])
  const [onlyMine, setOnlyMine] = useState(false)

  useEffect(() => {
    setEntries(loadJson<CauseEntry[]>(CP_LAW_NS.causeList, []))
  }, [])

  const persist = (next: CauseEntry[]) => {
    setEntries(next)
    saveJson(CP_LAW_NS.causeList, next)
  }

  const handleParse = () => {
    const parsed = parseCauseList(raw, date).map((e) => ({ ...e, court }))
    if (parsed.length === 0) return
    persist([...parsed, ...entries].slice(0, 200))
    setRaw('')
  }

  const visible = useMemo(() => {
    const list = onlyMine ? entries.filter((e) => e.mine) : entries
    return [...list].sort((a, b) => {
      if (a.date !== b.date) return a.date.localeCompare(b.date)
      return String(a.item).localeCompare(String(b.item), undefined, { numeric: true })
    })
  }, [entries, onlyMine])

  return (
    <div className="space-y-5">
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-sm">
        <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#8B1E3F]">
          <ListOrdered className="size-4" /> Cause List Organizer
        </div>
        <h1 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight">Organise your board work</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-3xl">
          Paste text from an official cause list. CodePackr organises entries locally — it is not the official eCourts
          source.
        </p>
        <div className="mt-3 rounded-xl border border-blue-200 bg-blue-50 p-3 text-xs text-blue-950">
          Source: user-provided. Official services:{' '}
          <a href="https://services.ecourts.gov.in/" target="_blank" rel="noreferrer" className="font-bold underline">
            eCourts Services
          </a>
          {' · '}
          <a href="https://hcservices.ecourts.gov.in/" target="_blank" rel="noreferrer" className="font-bold underline">
            High Court Services
          </a>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5 space-y-3">
        <div className="grid sm:grid-cols-2 gap-3">
          <label className="text-xs font-bold text-slate-600">
            Date
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 w-full h-10 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent px-3 text-sm"
            />
          </label>
          <label className="text-xs font-bold text-slate-600">
            Court / forum
            <input
              value={court}
              onChange={(e) => setCourt(e.target.value)}
              placeholder="e.g. City Civil Court, Chennai"
              className="mt-1 w-full h-10 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent px-3 text-sm"
            />
          </label>
        </div>
        <label className="block text-xs font-bold text-slate-600">
          Paste cause-list lines
          <textarea
            value={raw}
            onChange={(e) => setRaw(e.target.value)}
            rows={6}
            placeholder={'12. ABC v. XYZ\n13. State v. DEF\nItem 14: GHI v. JKL'}
            className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent p-2.5 text-sm font-mono"
          />
        </label>
        <button
          type="button"
          onClick={handleParse}
          className="rounded-xl bg-[#8B1E3F] text-white px-3 py-2 text-xs font-bold"
        >
          Parse &amp; add
        </button>
      </section>

      <div className="flex items-center gap-3">
        <label className="inline-flex items-center gap-2 text-xs font-bold">
          <input type="checkbox" checked={onlyMine} onChange={(e) => setOnlyMine(e.target.checked)} />
          Only my matters
        </label>
        <button
          type="button"
          className="text-xs font-bold text-slate-500"
          onClick={() => persist([])}
        >
          Clear all
        </button>
      </div>

      {visible.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500">
          No entries yet. Paste an official cause list to organise.
        </div>
      ) : (
        <ul className="space-y-2">
          {visible.map((e) => (
            <li
              key={e.id}
              className={`rounded-2xl border p-4 ${
                e.mine
                  ? 'border-[#8B1E3F]/40 bg-[#8B1E3F]/5'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'
              }`}
            >
              <div className="flex flex-wrap justify-between gap-2">
                <div>
                  <div className="text-xs font-bold text-slate-500">
                    Item {e.item} · {e.date}
                    {e.court ? ` · ${e.court}` : ''}
                  </div>
                  <div className="font-bold text-sm mt-0.5">{e.parties}</div>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    persist(entries.map((x) => (x.id === e.id ? { ...x, mine: !x.mine } : x)))
                  }
                  className={`inline-flex items-center gap-1 text-xs font-bold rounded-lg border px-2 py-1 ${
                    e.mine ? 'border-[#8B1E3F] text-[#8B1E3F]' : 'border-slate-200'
                  }`}
                >
                  <Star className={`size-3.5 ${e.mine ? 'fill-current' : ''}`} />
                  {e.mine ? 'My matter' : 'Mark mine'}
                </button>
              </div>
              <input
                value={e.notes}
                onChange={(ev) =>
                  persist(entries.map((x) => (x.id === e.id ? { ...x, notes: ev.target.value } : x)))
                }
                placeholder="Hearing notes…"
                className="mt-2 w-full h-9 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent px-2 text-xs"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
