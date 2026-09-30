import { useMemo, useState } from 'react'
import { Check, ChevronDown, Copy, Download, FileText, ListChecks, Printer, Search, ShieldCheck, SlidersHorizontal, Star, X } from 'lucide-react'
import { CASE_FILE_CHECKLISTS, DRAFT_TEMPLATES, type DraftTemplate } from '../../data/draft-templates'
import { TEMPLATE_CATALOG, catalogToDraftTemplate } from '../../data/legal-template-catalog'
import { downloadLegalDocument, printAsPdf, type ExportKind } from '../../lib/document-export'

const CATEGORIES = ['all', 'criminal', 'civil', 'notice', 'affidavit', 'family', 'property', 'commercial', 'consumer', 'employment', 'company', 'arbitration', 'ip', 'tax', 'banking', 'motor', 'constitutional', 'procedure', 'rtI', 'misc'] as const
type Category = typeof CATEGORIES[number]

export function LegalDraftStudio() {
  const [tab, setTab] = useState<'drafts' | 'checklists'>('drafts')
  const [templateId, setTemplateId] = useState(DRAFT_TEMPLATES[0]?.id ?? '')
  const [values, setValues] = useState<Record<string, string>>({})
  const [copied, setCopied] = useState(false)
  const [checked, setChecked] = useState<Record<string, boolean>>({})
  const [cat, setCat] = useState<Category>('all')
  const [query, setQuery] = useState('')
  const [subject, setSubject] = useState('')
  const [act, setAct] = useState('')
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const allTemplates = useMemo(() => [...DRAFT_TEMPLATES, ...TEMPLATE_CATALOG.map(catalogToDraftTemplate)], [])
  const [exporting, setExporting] = useState<ExportKind | null>(null)

  const template: DraftTemplate | undefined = useMemo(
    () => allTemplates.find((t) => t.id === templateId),
    [allTemplates, templateId],
  )
  const output = useMemo(() => (template ? template.build(values) : ''), [template, values])
  const setField = (key: string, val: string) => setValues((prev) => ({ ...prev, [key]: val }))

  const getAct = (t: DraftTemplate) => {
    const s = t.statute.toLowerCase()
    if (s.includes('bnss')) return 'BNSS 2023'
    if (s.includes('bns')) return 'BNS 2023'
    if (s.includes('bsa')) return 'BSA 2023'
    if (s.includes('cpc')) return 'CPC 1908'
    if (s.includes('negotiable instruments')) return 'Negotiable Instruments Act 1881'
    if (s.includes('companies act')) return 'Companies Act 2013'
    if (s.includes('consumer protection')) return 'Consumer Protection Act 2019'
    if (s.includes('arbitration')) return 'Arbitration and Conciliation Act 1996'
    if (s.includes('motor vehicles')) return 'Motor Vehicles Act 1988'
    if (s.includes('right to information')) return 'RTI Act 2005'
    if (s.includes('transfer of property')) return 'Transfer of Property Act 1882'
    if (s.includes('contract act')) return 'Indian Contract Act 1872'
    if (s.includes('hindu marriage')) return 'Hindu Marriage Act 1955'
    if (s.includes('constitution')) return 'Constitution of India'
    return 'Other / General'
  }

  const getSubject = (t: DraftTemplate) => {
    const catalog = TEMPLATE_CATALOG.find((entry) => entry.id === t.id)
    if (catalog) return catalog.area
    if (t.id.includes('bail')) return 'Bail & custody'
    if (t.category === 'civil') return 'Pleadings'
    if (t.category === 'notice') return t.id.includes('ni-138') ? 'Cheque & recovery' : 'General notices'
    if (t.category === 'affidavit') return 'Affidavits & declarations'
    return 'Criminal procedure'
  }

  const subjects = useMemo(() => {
    const values = new Set(allTemplates.map(getSubject))
    return Array.from(values).sort()
  }, [allTemplates])

  const acts = useMemo(() => {
    const source = subject ? allTemplates.filter((t) => getSubject(t) === subject) : allTemplates
    return Array.from(new Set(source.map(getAct))).sort()
  }, [allTemplates, subject])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!subject && !act && !q && cat === 'all') return []
    return allTemplates.filter((t) => {
      if (cat !== 'all' && t.category !== cat) return false
      if (subject && getSubject(t) !== subject) return false
      if (act && getAct(t) !== act) return false
      if (!q) return true
      return [t.name, t.statute, t.description].some((value) => value.toLowerCase().includes(q))
    })
  }, [allTemplates, cat, query, subject, act])

  const visibleTemplates = showMore ? filtered : filtered.slice(0, 20)

  const resetBrowser = () => {
    setSubject('')
    setAct('')
    setQuery('')
    setCat('all')
    setShowMore(false)
  }

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
      window.setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

  const exportDocument = async (kind: ExportKind) => {
    if (!output.trim()) return
    setExporting(kind)
    try {
      await downloadLegalDocument(output, template?.slug || 'legal-draft', kind, template?.name || 'Legal Draft')
    } finally {
      setExporting(null)
    }
  }

  return (
    <div className="mx-auto max-w-7xl space-y-5 px-4 py-6 sm:px-6">
      <section className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 shadow-sm sm:p-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-2 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#8B1E3F]">
              <FileText className="size-4" /> Legal Draft Studio
            </div>
            <h1 className="text-2xl font-black tracking-tight text-[color:var(--ink)] sm:text-3xl">Draft, preview and export legal documents</h1>
            <p className="mt-2 text-sm leading-6 text-[color:var(--ink-muted)]">
              Fill structured Indian-law practice templates, review the generated document and download it as <strong>DOCX, PDF or TXT</strong>.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-800">
            <ShieldCheck className="size-4" /> Runs locally in your browser
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2 border-t border-[color:var(--border)] pt-4">
          <button type="button" onClick={() => setTab('drafts')} className={`rounded-xl px-4 py-2.5 text-xs font-extrabold ${tab === 'drafts' ? 'bg-[#8B1E3F] text-white' : 'border border-[color:var(--border)]'}`}>Draft workspace</button>
          <button type="button" onClick={() => setTab('checklists')} className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-extrabold ${tab === 'checklists' ? 'bg-[#8B1E3F] text-white' : 'border border-[color:var(--border)]'}`}><ListChecks className="size-4" /> Case-file checklists</button>
        </div>
      </section>

      {tab === 'checklists' ? (
        <div className="grid gap-4 md:grid-cols-2">
          {CASE_FILE_CHECKLISTS.map((list) => (
            <section key={list.id} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5">
              <h2 className="mb-3 text-base font-black text-[color:var(--ink)]">{list.name}</h2>
              <ul className="space-y-2.5">
                {list.items.map((item) => {
                  const key = `${list.id}:${item}`
                  return (
                    <li key={key}>
                      <label className="flex cursor-pointer items-start gap-2 text-sm">
                        <input type="checkbox" className="mt-1" checked={!!checked[key]} onChange={(e) => setChecked((p) => ({ ...p, [key]: e.target.checked }))} />
                        <span className={checked[key] ? 'text-[color:var(--ink-muted)] line-through' : ''}>{item}</span>
                      </label>
                    </li>
                  )
                })}
              </ul>
            </section>
          ))}
        </div>
      ) : (
        <div className="grid gap-5 lg:grid-cols-[300px_minmax(0,1fr)]">
          <aside className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 lg:sticky lg:top-20 lg:self-start">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[color:var(--ink-muted)]" />
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search templates…" className="w-full rounded-xl border border-[color:var(--border)] bg-transparent py-2.5 pl-9 pr-3 text-sm outline-none focus:border-[#8B1E3F]" />
            </div>
            <label className="mt-3 block text-[11px] font-extrabold uppercase tracking-wide text-[color:var(--ink-muted)]">Subject</label>
            <div className="relative mt-1.5">
              <select value={subject} onChange={(e) => { setSubject(e.target.value); setAct(''); setShowMore(false) }} className="w-full appearance-none rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2.5 pr-9 text-sm font-bold outline-none focus:border-[#8B1E3F]">
                <option value="">Select a subject…</option>
                {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2" />
            </div>
            <label className="mt-3 block text-[11px] font-extrabold uppercase tracking-wide text-[color:var(--ink-muted)]">Act / Law</label>
            <div className="relative mt-1.5">
              <select value={act} onChange={(e) => { setAct(e.target.value); setShowMore(false) }} className="w-full appearance-none rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2.5 pr-9 text-sm font-bold outline-none focus:border-[#8B1E3F]">
                <option value="">All laws</option>
                {acts.map((a) => <option key={a} value={a}>{a}</option>)}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2" />
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {CATEGORIES.map((c) => (
                <button key={c} type="button" onClick={() => setCat(c)} className={`rounded-full px-3 py-1.5 text-[11px] font-extrabold capitalize ${cat === c ? 'bg-[#8B1E3F] text-white' : 'border border-[color:var(--border)] text-[color:var(--ink-muted)]'}`}>{c}</button>
              ))}
              {filtered.length > 20 && !showMore && <button type="button" onClick={() => setShowMore(true)} className="w-full rounded-xl border border-[#8B1E3F] px-3 py-2 text-xs font-extrabold text-[#8B1E3F]">Show more ({filtered.length - 20})</button>}
            </div>
            <div className="mt-3 flex items-center justify-between gap-2">
              <button type="button" onClick={() => setShowAdvanced((v) => !v)} className="inline-flex items-center gap-1.5 rounded-xl border border-[color:var(--border)] px-3 py-2 text-[11px] font-extrabold"><SlidersHorizontal className="size-3.5" /> Advanced filters</button>
              <button type="button" onClick={resetBrowser} className="inline-flex items-center gap-1 text-[11px] font-bold text-[color:var(--ink-muted)]"><X className="size-3" /> Reset</button>
            </div>
            {showAdvanced && <div className="mt-2 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-3 text-[11px] text-[color:var(--ink-muted)]">
              <div className="font-extrabold text-[color:var(--ink)]">Advanced browsing</div>
              <p className="mt-1 leading-5">Use Subject + Act/Law together to narrow the library. Search also matches document name, statute and description. More filters can be added later without changing the draft data model.</p>
            </div>}
            <div className="mt-4 flex items-center justify-between gap-2">
              <span className="text-[10px] font-bold text-[color:var(--ink-muted)]">{filtered.length.toLocaleString()} matching drafts</span>
              <span className="text-[10px] font-bold text-[color:var(--ink-muted)]">{TEMPLATE_CATALOG.length.toLocaleString()} catalogue entries</span>
            </div>
            <div className="mt-2 space-y-2">
              {!subject && !act && !query && cat === 'all' ? (
                <div className="rounded-xl border border-dashed border-[color:var(--border)] p-4 text-center">
                  <div className="text-sm font-black">Choose a subject to begin</div>
                  <p className="mt-1 text-[11px] leading-5 text-[color:var(--ink-muted)]">Select a subject above, then choose an Act/Law such as BNSS, BNS or CPC. Only related drafts will appear here.</p>
                </div>
              ) : visibleTemplates.map((t) => (
                <button key={t.id} type="button" onClick={() => { setTemplateId(t.id); setValues({}) }} className={`w-full rounded-xl border p-3 text-left transition ${templateId === t.id ? 'border-[#8B1E3F] bg-[#8B1E3F]/5' : 'border-[color:var(--border)]'}`}>
                  <div className="text-sm font-extrabold">{t.name}</div>
                  <div className="mt-1 text-[10px] leading-4 text-[color:var(--ink-muted)]">{t.statute}</div>
                </button>
              ))}
            </div>
          </aside>

          <section className="min-w-0 space-y-5">
            {template && (
              <>
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-xs leading-5 text-amber-950">
                  <strong>Use carefully:</strong> {template.disclaimer}
                  <div className="mt-1 opacity-80">Last reviewed: {template.lastReviewed}</div>
                </div>

                <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                  <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 sm:p-5">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div><h2 className="text-base font-black">Document details</h2><p className="text-xs text-[color:var(--ink-muted)]">Required fields are marked *</p></div>
                      <button type="button" onClick={loadSample} className="rounded-xl border border-[color:var(--border)] px-3 py-2 text-xs font-extrabold">Load sample</button>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {template.fields.map((f) => (
                        <label key={f.key} className={`block text-xs font-extrabold ${f.multiline ? 'sm:col-span-2' : ''}`}>
                          {f.label}{f.required ? ' *' : ''}
                          {f.multiline ? (
                            <textarea rows={4} value={values[f.key] || ''} onChange={(e) => setField(f.key, e.target.value)} placeholder={f.placeholder} className="mt-1 w-full rounded-xl border border-[color:var(--border)] bg-transparent p-3 text-sm font-normal outline-none focus:border-[#8B1E3F]" />
                          ) : (
                            <input value={values[f.key] || ''} onChange={(e) => setField(f.key, e.target.value)} placeholder={f.placeholder} className="mt-1 w-full rounded-xl border border-[color:var(--border)] bg-transparent p-3 text-sm font-normal outline-none focus:border-[#8B1E3F]" />
                          )}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[color:var(--border)] bg-slate-50 p-4 sm:p-5">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <div><h2 className="text-base font-black text-slate-900">Legal document preview</h2><p className="text-xs text-slate-500">A4-oriented export preview</p></div>
                      <button type="button" onClick={() => printAsPdf(output, template.name)} className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-extrabold text-slate-800"><Printer className="size-3.5" /> Print / PDF</button>
                    </div>
                    <pre id="legal-draft-preview" className="max-h-[38rem] overflow-auto whitespace-pre-wrap rounded-xl border border-slate-200 bg-white p-5 font-serif text-[13px] leading-6 text-slate-900 shadow-inner">{output || 'Start filling the form to generate your draft.'}</pre>
                  </div>
                </div>

                {template.annexures && template.annexures.length > 0 && (
                  <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4">
                    <h2 className="text-sm font-black">Suggested annexures</h2>
                    <div className="mt-2 flex flex-wrap gap-2">{template.annexures.map((a) => <span key={a} className="rounded-lg bg-slate-100 px-2.5 py-1.5 text-[11px] font-semibold text-slate-700">{a}</span>)}</div>
                  </div>
                )}

                <div className="sticky bottom-2 z-10 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)]/95 p-3 shadow-lg backdrop-blur">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-2">
                      <button type="button" onClick={copyOut} className="inline-flex items-center gap-1.5 rounded-xl bg-[#8B1E3F] px-3 py-2 text-xs font-extrabold text-white">{copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}{copied ? 'Copied' : 'Copy'}</button>
                      <button type="button" onClick={() => setValues({})} className="rounded-xl border border-[color:var(--border)] px-3 py-2 text-xs font-extrabold">Clear</button>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="mr-1 inline-flex items-center gap-1 text-[11px] font-extrabold text-[color:var(--ink-muted)]"><Download className="size-3.5" /> Download</span>
                      {(['docx', 'pdf', 'txt'] as ExportKind[]).map((kind) => (
                        <button key={kind} type="button" disabled={!output.trim() || exporting !== null} onClick={() => exportDocument(kind)} className="rounded-xl border border-[#8B1E3F] px-3 py-2 text-xs font-extrabold uppercase text-[#8B1E3F] disabled:cursor-not-allowed disabled:opacity-50">{exporting === kind ? 'Preparing…' : kind}</button>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </section>
        </div>
      )}
    </div>
  )
}
