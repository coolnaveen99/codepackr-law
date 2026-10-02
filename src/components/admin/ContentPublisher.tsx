import { useEffect, useMemo, useState } from 'react'

type DraftKind = 'topic' | 'judgment' | 'comparison' | 'illustration' | 'source' | 'mapper' | 'seo'
type Draft = {
  id: string
  kind: DraftKind
  title: string
  body: string
  status: 'draft' | 'reviewed'
  versions: { at: string; body: string }[]
  updatedAt: string
}

const KEY = 'codepackr-law-admin-drafts'
const KINDS: DraftKind[] = ['topic', 'judgment', 'comparison', 'illustration', 'source', 'mapper', 'seo']

function load(): Draft[] {
  try { return JSON.parse(localStorage.getItem(KEY) || '[]') } catch { return [] }
}

export function ContentPublisher() {
  const [drafts, setDrafts] = useState<Draft[]>([])
  const [kind, setKind] = useState<DraftKind>('topic')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => setDrafts(load()), [])
  useEffect(() => localStorage.setItem(KEY, JSON.stringify(drafts)), [drafts])

  const current = useMemo(() => drafts.find((d) => d.id === active), [drafts, active])

  const save = () => {
    if (!title.trim()) return
    const now = new Date().toISOString()
    setDrafts((list) => {
      const existing = list.find((d) => d.id === active)
      if (!existing) {
        const next: Draft = { id: crypto.randomUUID(), kind, title, body, status: 'draft', versions: [{ at: now, body }], updatedAt: now }
        setActive(next.id)
        return [next, ...list]
      }
      return list.map((d) => d.id === existing.id ? { ...d, kind, title, body, versions: [...d.versions, { at: now, body }], updatedAt: now } : d)
    })
  }

  return (
    <section className="space-y-4" aria-label="Local content publisher">
      <header>
        <p className="text-xs font-semibold uppercase tracking-wide text-rose-800">Admin drafts · browser only</p>
        <h2 className="font-display text-3xl">Content publisher</h2>
        <p className="text-sm text-slate-600">Drafts stay in this browser. Nothing is published to the canonical corpus from here.</p>
      </header>
      <div className="grid gap-4 lg:grid-cols-[16rem_1fr]">
        <div className="space-y-2">
          {drafts.map((d) => (
            <button key={d.id} type="button" className="w-full rounded-xl border bg-white p-3 text-left" onClick={() => { setActive(d.id); setKind(d.kind); setTitle(d.title); setBody(d.body) }}>
              <b>{d.title}</b><small className="block">{d.kind} · {d.status}</small>
            </button>
          ))}
        </div>
        <form className="space-y-3 rounded-2xl border bg-white p-4" onSubmit={(e) => { e.preventDefault(); save() }}>
          <label className="block text-sm">Kind
            <select className="mt-1 w-full rounded-xl border p-2" value={kind} onChange={(e) => setKind(e.target.value as DraftKind)}>
              {KINDS.map((k) => <option key={k}>{k}</option>)}
            </select>
          </label>
          <label className="block text-sm">Title
            <input className="mt-1 w-full rounded-xl border p-2" value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>
          <label className="block text-sm">Body
            <textarea className="mt-1 w-full rounded-xl border p-2" rows={8} value={body} onChange={(e) => setBody(e.target.value)} />
          </label>
          <div className="flex flex-wrap gap-2">
            <button className="rounded-xl bg-rose-900 px-4 py-2 text-sm text-white" type="submit">Save draft</button>
            <button className="rounded-xl border px-4 py-2 text-sm" type="button" onClick={() => current && setDrafts((list) => list.map((d) => d.id === current.id ? { ...d, status: 'reviewed' } : d))}>Mark reviewed</button>
            <button className="rounded-xl border px-4 py-2 text-sm" type="button" onClick={() => {
              if (!current || current.versions.length < 2) return
              const previous = current.versions[current.versions.length - 2]
              setBody(previous.body)
              setDrafts((list) => list.map((d) => d.id === current.id ? { ...d, body: previous.body, updatedAt: new Date().toISOString() } : d))
            }}>Roll back</button>
            <button className="rounded-xl border px-4 py-2 text-sm" type="button" onClick={() => current && setDrafts((list) => list.filter((d) => d.id !== current.id))}>Delete</button>
          </div>
        </form>
      </div>
    </section>
  )
}
