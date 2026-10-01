import { useEffect, useMemo, useState } from 'react'
import { ArrowLeft, Check, Copy, FileText, Scale, Sparkles, Upload } from 'lucide-react'
import * as mammoth from 'mammoth'
import { limitUserText, validateLocalUpload } from '../../lib/sanitize'
import { loadAndClearJudgmentHandoff, type JudgmentHandoffPayload } from '../../lib/judgmentHandoff'
import {
  analyzeJudgmentText,
  extractCitationCandidates,
  sectionLabel,
  type JudgmentAnalysis,
  type JudgmentSectionKey,
} from '../../lib/judgmentAnalyzer'

const SAMPLE_JUDGMENT = `MANEKA GANDHI V. UNION OF INDIA
Citation: AIR 1978 SC 597
Court: Supreme Court of India

FACTS:
The petitioner's passport was impounded by the Government of India under Section 10(3)(c) of the Passports Act in public interest without giving any prior hearing or reason. The petitioner challenged the order under Article 32 of the Constitution.

PROCEDURAL HISTORY:
The petitioner approached the Supreme Court under Article 32 challenging the passport impounding order.

ISSUES:
Whether Section 10(3)(c) of the Passports Act violates Articles 14, 19 and 21 of the Constitution.
Whether the procedure established by law must be just, fair and reasonable.

SUBMISSIONS:
The petitioner challenged the absence of prior notice and hearing and contended that the procedure was arbitrary and unfair.

STATUTORY PROVISIONS:
Article 14, Article 19, Article 21 and Section 10(3)(c) of the Passports Act.

AUTHORITIES CITED:
AIR 1978 SC 597.

REASONING:
Articles 14, 19 and 21 are not mutually exclusive. The law must satisfy the test of reason and cannot be arbitrary or unfair. Procedure prescribed by law for depriving a person of life or personal liberty must be right, just and fair and not arbitrary, fanciful or oppressive.

FINDINGS:
The procedure affecting personal liberty must satisfy the constitutional requirement of fairness.

RATIO:
The right to travel abroad is part of personal liberty under Article 21. Natural justice is an essential element of fair procedure.

OBITER:
The Court discussed the relationship between fundamental rights and constitutional procedure more broadly.

FINAL ORDER:
The impugned order was set aside subject to the directions recorded by the Court.`

const SECTION_ORDER: JudgmentSectionKey[] = [
  'caseMetadata',
  'facts',
  'proceduralHistory',
  'issues',
  'submissions',
  'statutoryProvisions',
  'authorities',
  'evidence',
  'reasoning',
  'findings',
  'ratio',
  'obiter',
  'finalOrder',
  'unresolvedQuestions',
  'followUpAuthorities',
]

function inputKindFromName(name: string): JudgmentAnalysis['inputKind'] {
  return name.toLowerCase().endsWith('.docx') ? 'docx' : 'txt'
}

export function JudgmentAnalyzer() {
  const [text, setText] = useState('')
  const [analysis, setAnalysis] = useState<JudgmentAnalysis | null>(null)
  const [handoff, setHandoff] = useState<{ payload: JudgmentHandoffPayload | null; source: 'query' | 'session' | null }>({ payload: null, source: null })
  const [copied, setCopied] = useState(false)
  const [loadingFile, setLoadingFile] = useState(false)
  const [fileError, setFileError] = useState('')

  useEffect(() => {
    const { payload, initialText, source } = loadAndClearJudgmentHandoff()
    if (initialText) {
      setText(initialText)
      setHandoff({ payload, source })
    }
  }, [])

  useEffect(() => {
    setAnalysis(text.trim() ? analyzeJudgmentText(text, 'text') : null)
  }, [text])

  const citationCandidates = useMemo(() => extractCitationCandidates(text), [text])
  const handoffTitle = handoff.payload?.caseName || handoff.payload?.citation || (handoff.payload?.canonicalEntityId ? `Canonical ID: ${handoff.payload.canonicalEntityId}` : null)

  const loadFile = async (file: File) => {
    setFileError('')
    setLoadingFile(true)
    try {
      const validationError = validateLocalUpload(file, ['txt', 'docx'])
      if (validationError) throw new Error(validationError)
      const kind = inputKindFromName(file.name)
      if (kind === 'txt') {
        setText(limitUserText(await file.text()))
      } else {
        const arrayBuffer = await file.arrayBuffer()
        const result = await mammoth.extractRawText({ arrayBuffer })
        setText(limitUserText(result.value))
      }
      setHandoff({ payload: null, source: null })
    } catch (error) {
      setFileError(error instanceof Error ? error.message : 'The selected document could not be read locally.')
    } finally {
      setLoadingFile(false)
    }
  }

  const copyRatio = async () => {
    const value = analysis?.sections.ratio
    if (!value) return
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // Clipboard permissions can be denied by the browser.
    }
  }

  return (
    <div className="space-y-5 w-full overflow-x-hidden">
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-sm">
        <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#8B1E3F]">
          <Scale className="size-4" /> Judgment Analyzer
        </div>
        <h1 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight">Decode a judgment without inventing legal facts</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-3xl">
          Analyse pasted judgment text or load TXT/DOCX locally. The analyzer only structures labelled source text; it does not invent judges, citations, paragraph numbers, holdings, or legal conclusions.
        </p>

        {handoff.source && (
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-blue-200 dark:border-blue-900 bg-blue-50/70 dark:bg-blue-950/40 p-3 text-xs text-blue-950 dark:text-blue-200">
            <span><strong>Handed off from Legal Research Workbench</strong>{handoffTitle ? ` for “${handoffTitle}”.` : '.'}</span>
            <a href="/tool/research-workbench" className="inline-flex min-h-[44px] items-center gap-1 px-2 font-bold text-[#8B1E3F] hover:underline dark:text-blue-300">
              <ArrowLeft className="size-3.5" /> Return to Workbench
            </a>
          </div>
        )}

        <textarea
          value={text}
          onChange={(e) => { setText(e.target.value); setHandoff({ payload: null, source: null }) }}
          rows={12}
          placeholder="Paste the judgment text here. Clear headings such as FACTS, ISSUES, REASONING and FINAL ORDER improve extraction confidence."
          className="mt-4 w-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-transparent p-3 text-sm font-mono"
          aria-label="Judgment text"
        />

        <div className="mt-3 flex flex-wrap gap-2">
          <label className="inline-flex min-h-[44px] cursor-pointer items-center gap-1 rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-2 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800">
            <Upload className="size-3.5" />
            {loadingFile ? 'Reading…' : 'Load TXT / DOCX'}
            <input
              type="file"
              accept=".txt,text/plain,.docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              className="sr-only"
              disabled={loadingFile}
              onChange={(e) => { const file = e.target.files?.[0]; if (file) void loadFile(file); e.currentTarget.value = '' }}
            />
          </label>
          <button type="button" className="inline-flex min-h-[44px] items-center gap-1 rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-2 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800" onClick={() => setText(SAMPLE_JUDGMENT)}>
            <Sparkles className="size-3.5 text-[#8B1E3F]" /> Load sample
          </button>
          <button type="button" className="min-h-[44px] rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-2 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800" onClick={() => { setText(''); setAnalysis(null); setHandoff({ payload: null, source: null }); setFileError('') }}>
            Clear
          </button>
        </div>
        {fileError && <p className="mt-2 text-xs font-semibold text-red-700 dark:text-red-300" role="alert">{fileError}</p>}
      </section>

      {!analysis ? (
        <div className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 p-8 text-center text-sm text-slate-500">
          Empty — add a judgment to generate a source-traceable structure.
        </div>
      ) : (
        <>
          <section className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              ['Words', analysis.wordCount.toLocaleString()],
              ['Paragraphs', analysis.paragraphCount.toLocaleString()],
              ['Source spans', analysis.spans.length.toLocaleString()],
              ['Citations found', citationCandidates.length.toLocaleString()],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
                <div className="text-[10px] font-extrabold uppercase tracking-wide text-slate-500">{label}</div>
                <div className="mt-1 text-xl font-black">{value}</div>
              </div>
            ))}
          </section>

          {analysis.warnings.length > 0 && (
            <section className="rounded-2xl border border-amber-200 dark:border-amber-900 bg-amber-50/70 dark:bg-amber-950/30 p-4">
              <h2 className="text-xs font-extrabold uppercase tracking-wide text-amber-800 dark:text-amber-200">Verification notes</h2>
              <ul className="mt-2 list-disc pl-5 text-xs text-amber-900 dark:text-amber-100 space-y-1">
                {analysis.warnings.map((warning) => <li key={warning}>{warning}</li>)}
              </ul>
            </section>
          )}

          <section className="rounded-2xl border border-blue-200 dark:border-blue-900 bg-blue-50/60 dark:bg-blue-950/30 p-4">
            <div className="flex items-start gap-2">
              <FileText className="mt-0.5 size-4 shrink-0 text-blue-700 dark:text-blue-300" />
              <div>
                <h2 className="text-xs font-extrabold uppercase tracking-wide text-blue-800 dark:text-blue-200">Source traceability</h2>
                <p className="mt-1 text-xs text-blue-900 dark:text-blue-100">
                  Extracted blocks retain source line and paragraph ranges. Structure is generated from user-provided text; it is not an independent legal finding.
                </p>
              </div>
            </div>
            {citationCandidates.length > 0 && (
              <p className="mt-3 text-xs font-semibold text-blue-900 dark:text-blue-100">Citation candidates: {citationCandidates.join(' · ')}</p>
            )}
          </section>

          <div className="space-y-3">
            {SECTION_ORDER.map((key) => {
              const body = analysis.sections[key]
              const span = analysis.spans.find((item) => item.section === key)
              return (
                <article key={key} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h2 className="text-sm font-extrabold">{sectionLabel(key)}</h2>
                    {key === 'ratio' && body && (
                      <button type="button" onClick={copyRatio} className="inline-flex min-h-[44px] items-center gap-1 px-2 text-xs font-bold text-blue-800 hover:underline dark:text-blue-300">
                        {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
                        {copied ? 'Copied' : 'Copy ratio'}
                      </button>
                    )}
                  </div>
                  <p className="mt-2 whitespace-pre-wrap break-words text-sm text-slate-800 dark:text-slate-200">
                    {body || 'No labelled source block detected. The analyzer will not infer this section from unrelated text.'}
                  </p>
                  {span && (
                    <p className="mt-3 text-[10px] font-semibold text-slate-400">
                      Source: user-provided · lines {span.startLine}–{span.endLine} · paragraphs {span.startParagraph}–{span.endParagraph} · extraction confidence: {span.confidence}
                    </p>
                  )}
                </article>
              )
            })}
          </div>
        </>
      )}

      <p className="text-[11px] text-slate-500">
        TXT and DOCX are processed in the browser. PDF extraction is intentionally not enabled until a genuine local PDF text-extraction path is implemented. The official judgment remains authoritative.
      </p>
    </div>
  )
}
