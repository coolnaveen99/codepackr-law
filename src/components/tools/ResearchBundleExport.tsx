import { useState } from 'react'
import { Package, Copy, Download } from 'lucide-react'
import { trackWorkflow } from '../../lib/analytics'
import { limitUserText } from '../../lib/sanitize'
import { downloadLegalDocument, type ExportKind } from '../../lib/document-export'

export function ResearchBundleExport() {
  const [question, setQuestion] = useState('')
  const [issues, setIssues] = useState('')
  const [statutes, setStatutes] = useState('')
  const [authorities, setAuthorities] = useState('')
  const [caseSummaries, setCaseSummaries] = useState('')
  const [chronology, setChronology] = useState('')
  const [evidence, setEvidence] = useState('')
  const [argumentsText, setArgumentsText] = useState('')
  const [counters, setCounters] = useState('')
  const [checklist, setChecklist] = useState(
    '- [ ] Citations parsed / status labelled\n- [ ] Primary sources opened\n- [ ] Limitation checked\n- [ ] Forum rules verified',
  )
  const [copied, setCopied] = useState(false)

  const buildMarkdown = () => {
    const sections = [
      ['Research question', question],
      ['Issue matrix', issues],
      ['Statutory provisions', statutes],
      ['Authorities (user-provided / status labels required)', authorities],
      ['Case summaries', caseSummaries],
      ['Chronology', chronology],
      ['Evidence matrix', evidence],
      ['Argument matrix', argumentsText],
      ['Counter-authorities', counters],
      ['Verification checklist', checklist],
    ]
    const body = sections.map(([h, t]) => `## ${h}\n\n${(t || '—').trim()}\n`).join('\n')
    return `# Research bundle\n\n> Educational export. Verification labels and primary sources remain the user's responsibility. Not legal advice.\n\n${body}`
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(limitUserText(buildMarkdown()))
    setCopied(true)
    trackWorkflow('research-bundle-export')
    setTimeout(() => setCopied(false), 1500)
  }

  const handleExport = async (kind: ExportKind) => {
    const date = new Date().toISOString().slice(0, 10)
    await downloadLegalDocument(
      limitUserText(buildMarkdown()),
      `research-bundle-${date}`,
      kind,
      'CodePackr Law — Senior Counsel Research Bundle',
    )
    trackWorkflow(`research-bundle-export-${kind}`)
  }

  const handleMarkdownExport = () => {
    const text = limitUserText(buildMarkdown())
    const blob = new Blob([text], { type: 'text/markdown;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `research-bundle-${new Date().toISOString().slice(0, 10)}.md`
    a.click()
    URL.revokeObjectURL(url)
    trackWorkflow('research-bundle-export-md')
  }

  const field = (label: string, value: string, set: (v: string) => void, rows = 3) => (
    <label className="block text-xs font-bold text-slate-600">
      {label}
      <textarea
        value={value}
        onChange={(e) => set(limitUserText(e.target.value))}
        rows={rows}
        className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent p-2.5 text-sm font-normal"
      />
    </label>
  )

  return (
    <div className="space-y-5">
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-sm">
        <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#8B1E3F]">
          <Package className="size-4" /> Senior Counsel Research Bundle
        </div>
        <h1 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight">Assemble &amp; export</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-3xl">
          Browser-only bundle: question, issues, statutes, authorities, chronology, evidence, arguments, counters and
          verification checklist. Exports Markdown/TXT with explicit educational disclaimer.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <button type="button" onClick={handleCopy} className="inline-flex items-center gap-1.5 rounded-xl bg-[#8B1E3F] text-white px-3 py-2 text-xs font-bold">
            <Copy className="size-3.5" /> {copied ? 'Copied' : 'Copy Markdown'}
          </button>
          <button type="button" onClick={handleMarkdownExport} className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold">
            <Download className="size-3.5" /> MD
          </button>
          {(['txt', 'docx', 'pdf'] as const).map((kind) => (
            <button
              key={kind}
              type="button"
              onClick={() => void handleExport(kind)}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold"
            >
              <Download className="size-3.5" /> {kind.toUpperCase()}
            </button>
          ))}
        </div>
      </section>
      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5 space-y-3">
        {field('Research question', question, setQuestion, 2)}
        {field('Issue matrix', issues, setIssues, 4)}
        {field('Statutory provisions', statutes, setStatutes, 3)}
        {field('Authorities', authorities, setAuthorities, 4)}
        {field('Case summaries', caseSummaries, setCaseSummaries, 4)}
        {field('Chronology', chronology, setChronology, 3)}
        {field('Evidence matrix', evidence, setEvidence, 3)}
        {field('Argument matrix', argumentsText, setArgumentsText, 4)}
        {field('Counter-authorities', counters, setCounters, 3)}
        {field('Verification checklist', checklist, setChecklist, 4)}
      </section>
      <p className="text-[11px] text-slate-500">
        Neutral assistive tool. Does not predict outcomes or invent citations. Preserve verification labels in any export you share.
      </p>
    </div>
  )
}
