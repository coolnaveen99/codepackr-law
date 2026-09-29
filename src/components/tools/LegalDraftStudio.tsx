import { useMemo, useState } from 'react'
import { Copy, Check, FileText, ListChecks, Download } from 'lucide-react'
import { CASE_FILE_CHECKLISTS, DRAFT_TEMPLATES, type DraftTemplate } from '../../data/draft-templates'

export function LegalDraftStudio() {
  const [tab, setTab] = useState<'drafts' | 'checklists'>('drafts')
  const [templateId, setTemplateId] = useState(DRAFT_TEMPLATES[0]?.id ?? '')
  const [values, setValues] = useState<Record<string, string>>({})
  const [copied, setCopied] = useState(false)
  const [checked, setChecked] = useState<Record<string, boolean>>({})
  const [cat, setCat] = useState<'all' | 'criminal' | 'civil' | 'notice' | 'affidavit'>('all')

  const template: DraftTemplate | undefined = useMemo(
    () => DRAFT_TEMPLATES.find((t) => t.id === templateId),
    [templateId],
  )
  const output = useMemo(() => (template ? template.build(values) : ''), [template, values])
  const setField = (key: string, val: string) => setValues((prev) => ({ ...prev, [key]: val }))
  const filtered = DRAFT_TEMPLATES.filter((t) => cat === 'all' || t.category === cat)

  const loadSample = () => {
    if (!template) return
    const sample: Record<string, string> = {}
    for (const f of template.fields) {
      sample[f.key] = f.placeholder || (f.multiline ? 'Sample facts for educational preview only.' : 'Sample')
    }
    if (template.id.includes('bail')) {
      Object.assign(sample, {
        court: 'District & Sessions Judge', place: 'Bengaluru', applicant: 'A. B. Kumar',
        address: 'No. 12, Example Street, Bengaluru', state: 'State of Karnataka',
        fir: '0123/2026', ps: 'Example Nagar', sections: 'BNS ss. ___',
        arrestDate: '01.09.2026', custodySince: '02.09.2026', antecedents: 'Nil', priorBail: 'None',
      })
    }
    setValues(sample)
  }

  const copyOut = async () => {
    try {
      await navigator.clipboard.writeText(output)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

  const downloadTxt = () => {
    const blob = new Blob([output], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${template?.slug || 'draft'}.txt`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="mx-auto max-w-6xl space-y-6 px-4 py-6">
      <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 sm:p-6">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#8B1E3F] mb-2">
          <FileText className="size-4" /> Legal Draft Studio
        </div>
        <h1 className="text-xl sm:text-2xl font-extrabold text-[color:var(--ink)]">Chamber templates & case-file checklists</h1>
        <p className="mt-1 text-sm text-[color:var(--ink-muted)] max-w-2xl">
          BNSS/CPC-aligned educational skeletons. Fill fields, copy or download. 100% client-side.
        </p>
        <div className="mt-4 flex gap-2">
          <button type="button" onClick={() => setTab('drafts')} className={`rounded-xl px-4 py-2 text-xs font-bold cursor-pointer ${tab === 'drafts' ? 'bg-[#8B1E3F] text-white' : 'border border-[color:var(--border)]'}`}>Draft templates</button>
          <button type="button" onClick={() => setTab('checklists')} className={`rounded-xl px-4 py-2 text-xs font-bold cursor-pointer inline-flex items-center gap-1.5 ${tab === 'checklists' ? 'bg-[#8B1E3F] text-white' : 'border border-[color:var(--border)]'}`}><ListChecks className="size-3.5" /> Case-file checklists</button>
        </div>
      </div>

      {tab === 'checklists' && (
        <div className="grid gap-4 md:grid-cols-2">
          {CASE_FILE_CHECKLISTS.map((list) => (
            <div key={list.id} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5">
              <h2 className="font-extrabold text-[color:var(--ink)] mb-3">{list.name}</h2>
              <ul className="space-y-2">
                {list.items.map((item) => {
                  const key = `${list.id}:${item}`
                  return (
                    <li key={key}>
                      <label className="flex items-start gap-2 text-sm cursor-pointer">
                        <input type="checkbox" className="mt-1" checked={!!checked[key]} onChange={(e) => setChecked((p) => ({ ...p, [key]: e.target.checked }))} />
                        <span className={checked[key] ? 'line-through text-[color:var(--ink-muted)]' : ''}>{item}</span>
                      </label>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      )}

      {tab === 'drafts' && (
        <>
          <div className="flex flex-wrap gap-2">
            {(['all', 'criminal', 'civil', 'notice', 'affidavit'] as const).map((c) => (
              <button key={c} type="button" onClick={() => setCat(c)} className={`rounded-full px-3 py-1.5 text-xs font-bold cursor-pointer ${cat === c ? 'bg-[#8B1E3F] text-white' : 'border border-[color:var(--border)]'}`}>{c}</button>
            ))}
          </div>
          <div className="grid gap-4 lg:grid-cols-12">
            <div className="lg:col-span-4 space-y-2">
              {filtered.map((t) => (
                <button key={t.id} type="button" onClick={() => { setTemplateId(t.id); setValues({}) }} className={`w-full text-left rounded-xl border p-3 cursor-pointer ${templateId === t.id ? 'border-[#8B1E3F] bg-[#8B1E3F]/5' : 'border-[color:var(--border)]'}`}>
                  <div className="text-sm font-bold">{t.name}</div>
                  <div className="text-[11px] text-[color:var(--ink-muted)] mt-0.5">{t.statute}</div>
                </button>
              ))}
            </div>
            <div className="lg:col-span-8 space-y-4">
              {template && (
                <>
                  <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-950">
                    <strong>Disclaimer:</strong> {template.disclaimer}
                    <div className="mt-1 opacity-80">Last reviewed: {template.lastReviewed}</div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button type="button" onClick={loadSample} className="rounded-xl border border-[color:var(--border)] px-3 py-2 text-xs font-bold cursor-pointer">Sample data</button>
                    <button type="button" onClick={() => setValues({})} className="rounded-xl border border-[color:var(--border)] px-3 py-2 text-xs font-bold cursor-pointer">Clear fields</button>
                    <button type="button" onClick={copyOut} className="rounded-xl bg-[#8B1E3F] text-white px-3 py-2 text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer">{copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}{copied ? 'Copied' : 'Copy draft'}</button>
                    <button type="button" onClick={downloadTxt} className="rounded-xl border border-[color:var(--border)] px-3 py-2 text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer"><Download className="size-3.5" /> Download .txt</button>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {template.fields.map((f) => (
                      <label key={f.key} className={`block text-xs font-bold ${f.multiline ? 'sm:col-span-2' : ''}`}>
                        {f.label}{f.required ? ' *' : ''}
                        {f.multiline ? (
                          <textarea rows={3} value={values[f.key] || ''} onChange={(e) => setField(f.key, e.target.value)} placeholder={f.placeholder} className="mt-1 w-full rounded-xl border border-[color:var(--border)] p-2.5 text-sm font-normal focus:outline-none focus:border-[#8B1E3F]" />
                        ) : (
                          <input value={values[f.key] || ''} onChange={(e) => setField(f.key, e.target.value)} placeholder={f.placeholder} className="mt-1 w-full rounded-xl border border-[color:var(--border)] p-2.5 text-sm font-normal focus:outline-none focus:border-[#8B1E3F]" />
                        )}
                      </label>
                    ))}
                  </div>
                  {template.annexures && template.annexures.length > 0 && (
                    <div className="rounded-xl border border-[color:var(--border)] p-4">
                      <h3 className="text-sm font-extrabold mb-2">Suggested annexures</h3>
                      <ul className="list-disc pl-5 text-xs text-[color:var(--ink-muted)] space-y-1">{template.annexures.map((a) => <li key={a}>{a}</li>)}</ul>
                    </div>
                  )}
                  <div>
                    <h3 className="text-sm font-extrabold mb-2">Live preview</h3>
                    <pre className="whitespace-pre-wrap rounded-xl border border-[color:var(--border)] p-4 text-xs sm:text-sm font-mono max-h-[32rem] overflow-auto">{output}</pre>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
