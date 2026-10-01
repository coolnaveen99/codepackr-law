import { useEffect, useState } from 'react'
import { BookMarked, Copy, RotateCcw, Save } from 'lucide-react'
import { CP_LAW_NS, loadJson, saveJson } from '../../lib/localStore'
import { SAMPLE_CASE_BRIEF } from '../../lib/studentLearning'

export interface CaseBrief {
  id: string
  caseName: string
  citation: string
  court: string
  year: string
  facts: string
  issues: string
  arguments: string
  reasoning: string
  holding: string
  ratio: string
  obiter: string
  significance: string
  laterTreatment: string
  updatedAt: string
}

const EMPTY: Omit<CaseBrief, 'id' | 'updatedAt'> = {
  caseName: '',
  citation: '',
  court: '',
  year: '',
  facts: '',
  issues: '',
  arguments: '',
  reasoning: '',
  holding: '',
  ratio: '',
  obiter: '',
  significance: '',
  laterTreatment: '',
}

const FIELDS: { key: keyof typeof EMPTY; label: string; rows?: number }[] = [
  { key: 'caseName', label: 'Case name' },
  { key: 'citation', label: 'Citation' },
  { key: 'court', label: 'Court' },
  { key: 'year', label: 'Year' },
  { key: 'facts', label: 'Material facts', rows: 4 },
  { key: 'issues', label: 'Issues', rows: 3 },
  { key: 'arguments', label: "Parties' arguments", rows: 4 },
  { key: 'reasoning', label: 'Court reasoning (rule → fact → inference)', rows: 5 },
  { key: 'holding', label: 'Holding / disposition', rows: 3 },
  { key: 'ratio', label: 'Ratio decidendi', rows: 3 },
  { key: 'obiter', label: 'Obiter / observations', rows: 2 },
  { key: 'significance', label: 'Significance / exam points', rows: 3 },
  { key: 'laterTreatment', label: 'Later treatment (followed / distinguished / etc.)', rows: 2 },
]

export function CaseBriefBuilder() {
  const [form, setForm] = useState(EMPTY)
  const [saved, setSaved] = useState<CaseBrief[]>([])
  const [copied, setCopied] = useState(false)
  const [copyError, setCopyError] = useState(false)

  useEffect(() => {
    setSaved(loadJson<CaseBrief[]>(CP_LAW_NS.caseBriefs, []))
  }, [])

  const set = (key: keyof typeof EMPTY, value: string) => setForm((f) => ({ ...f, [key]: value }))

  const persist = (list: CaseBrief[]) => {
    setSaved(list)
    saveJson(CP_LAW_NS.caseBriefs, list)
  }

  const handleSave = () => {
    if (!form.caseName.trim()) return
    const brief: CaseBrief = {
      ...form,
      id: `brief-${Date.now()}`,
      updatedAt: new Date().toISOString(),
    }
    persist([brief, ...saved].slice(0, 40))
  }

  const handleLoad = (b: CaseBrief) => {
    const { id: _id, updatedAt: _u, ...rest } = b
    setForm(rest)
  }

  const handleClear = () => setForm(EMPTY)

  const handleSample = () => setForm({ ...SAMPLE_CASE_BRIEF })

  const handleClearSaved = () => persist([])

  const handleCopy = async () => {
    const text = FIELDS.map((f) => `## ${f.label}\n${form[f.key] || '—'}`).join('\n\n')
    try {
      await navigator.clipboard.writeText(`# ${form.caseName || 'Case brief'}\n\n${text}`)
      setCopyError(false)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopyError(true)
    }
  }

  return (
    <div className="space-y-5">
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-sm">
        <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#8B1E3F]">
          <BookMarked className="size-4" /> Case Brief Builder
        </div>
        <h1 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight">Structured case brief</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-3xl">
          Browser-only brief aligned to the judgment-decoder path: facts → issues → reasoning chain → ratio.
          Saved locally under a versioned namespace.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={handleSave}
            className="inline-flex items-center gap-1.5 rounded-xl bg-[#8B1E3F] text-white px-3 py-2 text-xs font-bold"
          >
            <Save className="size-3.5" /> Save locally
          </button>
          <button
            type="button"
            onClick={handleSample}
            className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold"
          >
            Load sample
          </button>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold"
          >
            <Copy className="size-3.5" /> {copied ? 'Copied' : 'Copy markdown'}
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold"
          >
            <RotateCcw className="size-3.5" /> Clear form
          </button>
          {saved.length > 0 && (
            <button
              type="button"
              onClick={handleClearSaved}
              className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold text-slate-600"
            >
              Clear saved
            </button>
          )}
        </div>
        {copyError && <div className="mt-2 text-xs font-semibold text-rose-700">Clipboard access was unavailable. Use your browser copy controls instead.</div>}
      </section>

      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5 space-y-3">
        {FIELDS.map((f) => (
          <label key={f.key} className="block text-xs font-bold text-slate-600">
            {f.label}
            {f.rows ? (
              <textarea
                value={form[f.key]}
                onChange={(e) => set(f.key, e.target.value)}
                rows={f.rows}
                className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent p-2.5 text-sm font-normal"
              />
            ) : (
              <input
                value={form[f.key]}
                onChange={(e) => set(f.key, e.target.value)}
                className="mt-1 w-full h-10 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent px-3 text-sm font-normal"
              />
            )}
          </label>
        ))}
      </section>

      {saved.length > 0 && (
        <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
          <div className="text-xs font-extrabold uppercase tracking-wide text-slate-500 mb-2">Saved briefs (local)</div>
          <ul className="space-y-2">
            {saved.map((b) => (
              <li key={b.id} className="flex flex-wrap items-center justify-between gap-2 text-sm border-b border-slate-100 dark:border-slate-800 pb-2">
                <div>
                  <div className="font-bold">{b.caseName}</div>
                  <div className="text-xs text-slate-500">
                    {b.citation || 'No citation'} · {new Date(b.updatedAt).toLocaleString()}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button type="button" className="text-xs font-bold text-[#8B1E3F]" onClick={() => handleLoad(b)}>
                    Load
                  </button>
                  <button
                    type="button"
                    className="min-h-11 text-xs font-bold text-slate-500 px-2"
                    onClick={() => persist(saved.filter((x) => x.id !== b.id))}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      <p className="text-[11px] text-slate-500">
        Do not store confidential or privileged client information in browser storage unless you understand the risks.
      </p>
    </div>
  )
}
