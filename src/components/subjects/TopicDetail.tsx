import { useState, useEffect } from 'react'
import {
  ArrowLeft,
  BookOpen,
  Scale,
  Sparkles,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  Loader2,
  PenLine,
} from 'lucide-react'
import type { LawSubjectMeta, LawTopic, CaseCitation } from '../../data/subjects'
import {
  loadTopicContent,
  getStudyBody,
  getLegalBrief,
  getWrittenSubmissions,
  type TopicContent,
} from '../../data/topics/loadTopicContent'
import { Badge } from '../ui/Badge'
import { RelatedKnowledge } from '../knowledge/RelatedKnowledge'
import { RichLegalText } from '../knowledge/RichLegalText'
import { ModularStudyRenderer } from './ModularStudyRenderer'
import { knowledgeIdForTopic } from '../../data/knowledge'

const TOPIC_PROGRESS_KEY = 'codepackr-law-topic-progress'

interface TopicDetailProps {
  subject: LawSubjectMeta
  topic: LawTopic
  onBack: () => void
  onSelectTopic?: (topic: LawTopic) => void
}

function topicTypeLabel(type: LawTopic['type']) {
  switch (type) {
    case 'article':
      return 'Article'
    case 'section':
      return 'Section'
    case 'chapter':
      return 'Chapter'
    case 'doctrine':
      return 'Doctrine'
    case 'act':
      return 'Act'
    case 'format':
      return 'Format'
    default:
      return 'Theme'
  }
}

export function TopicDetail({
  subject,
  topic,
  onBack,
  onSelectTopic,
}: TopicDetailProps) {
  const [copiedCaseId, setCopiedCaseId] = useState<string | null>(null)
  const [tipsOpen, setTipsOpen] = useState(true)
  const [content, setContent] = useState<TopicContent | null>(null)
  const [loading, setLoading] = useState(true)
  const [studyComplete, setStudyComplete] = useState(false)

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(TOPIC_PROGRESS_KEY) || '{}') as Record<string, boolean>
      setStudyComplete(Boolean(saved[`${subject.slug}/${topic.id}`]))
    } catch {
      setStudyComplete(false)
    }
  }, [subject.slug, topic.id])

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setContent(null)

    loadTopicContent(subject.slug, topic.id).then((data) => {
      if (!cancelled) {
        setContent(data)
        setLoading(false)
      }
    })

    return () => {
      cancelled = true
    }
  }, [subject.slug, topic.id])

  const studyContent = getStudyBody(content)
  const hasContent = Boolean(studyContent)
  const hasCases = (content?.cases?.length ?? 0) > 0
  const knowledgeId = knowledgeIdForTopic(subject.slug, topic.id)
  const neighbours = provisionNeighbours(subject, topic)
  const legalBrief = getLegalBrief(content)
  const writtenSubmissions = getWrittenSubmissions(content)
  const statutoryExamples = (content?.examples ?? []).filter(
    (example) => /^Illustration/i.test(example.title || '') || example.illustrationType === 'statutory',
  )
  const teachingExamples = (content?.examples ?? []).filter(
    (example) => !/^Illustration/i.test(example.title || '') && example.illustrationType !== 'statutory',
  )
  const hasIllustrations = statutoryExamples.length > 0

  const [expandedBrief, setExpandedBrief] = useState(true)
  const [expandedSubmissions, setExpandedSubmissions] = useState(true)
  const [copiedBrief, setCopiedBrief] = useState(false)
  const [copiedSubmissions, setCopiedSubmissions] = useState(false)

  function jumpTo(id: string) {
    if (id === 'legal-brief') setExpandedBrief(true)
    if (id === 'written-submissions') setExpandedSubmissions(true)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleCopyAnswer = (text: string, isBrief: boolean) => {
    navigator.clipboard.writeText(text)
    if (isBrief) {
      setCopiedBrief(true)
      setTimeout(() => setCopiedBrief(false), 2000)
    } else {
      setCopiedSubmissions(true)
      setTimeout(() => setCopiedSubmissions(false), 2000)
    }
  }

  const handleCopyCase = (c: CaseCitation, idx: number) => {
    const text = [
      c.name,
      c.year ? `(${c.year})` : '',
      c.citation || '',
      '',
      `Holding: ${c.holding}`,
      c.relevance ? `Relevance: ${c.relevance}` : '',
    ]
      .filter(Boolean)
      .join('\n')

    navigator.clipboard.writeText(text)
    setCopiedCaseId(String(idx))
    setTimeout(() => setCopiedCaseId(null), 2000)
  }

  const toggleStudyComplete = () => {
    const key = `${subject.slug}/${topic.id}`
    const nextValue = !studyComplete
    setStudyComplete(nextValue)
    try {
      const saved = JSON.parse(localStorage.getItem(TOPIC_PROGRESS_KEY) || '{}') as Record<string, boolean>
      localStorage.setItem(TOPIC_PROGRESS_KEY, JSON.stringify({ ...saved, [key]: nextValue }))
    } catch {
    }
  }

  return (
    <div className="space-y-8 max-w-6xl pb-24 sm:pb-8">
      <div className="space-y-3">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          {subject.shortName}
        </button>

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="space-y-2 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] uppercase tracking-[0.14em] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 font-semibold">
                {topicTypeLabel(topic.type)}
              </span>
              {topic.highYield && <Badge variant="amber">High yield</Badge>}
              {topic.range && (
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                  {topic.range}
                </span>
              )}
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              {topic.name}
            </h2>

            {topic.note && (
              <p className="text-sm text-slate-600 dark:text-slate-400">{topic.note}</p>
            )}
            {neighbours && onSelectTopic && (
              <div className="flex flex-wrap gap-2 pt-1">
                {neighbours.prev && (
                  <button
                    type="button"
                    onClick={() => onSelectTopic(neighbours.prev!)}
                    className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    ← {neighbours.prev.range ?? neighbours.prev.name}
                  </button>
                )}
                {neighbours.next && (
                  <button
                    type="button"
                    onClick={() => onSelectTopic(neighbours.next!)}
                    className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {neighbours.next.range ?? neighbours.next.name} →
                  </button>
                )}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={toggleStudyComplete}
            className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl border text-sm font-semibold transition shrink-0 ${studyComplete ? 'border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300' : 'border-blue-200 text-blue-700 hover:bg-blue-50 dark:border-blue-900 dark:text-blue-300 dark:hover:bg-blue-950/40'}`}
          >
            {studyComplete ? 'Study completed' : 'Mark study complete'}
          </button>
        </div>
      </div>

      {(legalBrief || writtenSubmissions) && (
        <div className="sticky top-16 z-30 -mx-1 px-1 py-3 bg-slate-50/90 dark:bg-slate-950/90 backdrop-blur-md">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500 mr-1">Drafting</span>
            <button
              type="button"
              onClick={() => jumpTo('study-topic')}
              className="h-11 px-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm font-semibold text-slate-700 dark:text-slate-200"
            >
              Notes
            </button>
            {hasIllustrations && (
              <button
                type="button"
                onClick={() => jumpTo('statutory-illustrations')}
                className="h-11 px-4 rounded-2xl border border-blue-200 dark:border-blue-800 bg-white dark:bg-slate-900 text-sm font-semibold text-blue-700 dark:text-blue-300"
              >
                Illustrations
              </button>
            )}
            {hasCases && (
              <button
                type="button"
                onClick={() => jumpTo('case-law-ratios')}
                className="h-11 px-4 rounded-2xl border border-blue-200 dark:border-blue-800 bg-white dark:bg-slate-900 text-sm font-semibold text-blue-700 dark:text-blue-300"
              >
                Case Law Ratios
              </button>
            )}
            {legalBrief && (
              <button
                type="button"
                onClick={() => jumpTo('legal-brief')}
                className="h-11 px-4 rounded-2xl bg-blue-600 text-white text-xs sm:text-sm font-bold shadow-sm shadow-blue-600/20 inline-flex items-center gap-1.5"
              >
                <PenLine className="w-3.5 h-3.5" />
                <span>Case Brief / Assessment</span>
              </button>
            )}
            {writtenSubmissions && (
              <button
                type="button"
                onClick={() => jumpTo('written-submissions')}
                className="h-11 px-4 rounded-2xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs sm:text-sm font-bold inline-flex items-center gap-1.5"
              >
                <PenLine className="w-3.5 h-3.5" />
                <span>Written Submissions</span>
              </button>
            )}
          </div>
        </div>
      )}

      {loading && (
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-10 flex flex-col items-center justify-center gap-3 text-slate-500">
          <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
          <p className="text-sm">Loading notes…</p>
        </div>
      )}

      {!loading && content?.glance && (
        <section className="rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/60 dark:bg-blue-950/20 p-5">
          <p className="text-[11px] font-bold uppercase tracking-wide text-blue-700 dark:text-blue-300 mb-1">
            Topic at a glance
          </p>
          <p className="text-sm leading-relaxed text-slate-800 dark:text-slate-200">{content.glance}</p>
        </section>
      )}

      {!loading && hasContent && content && (
        <section id="study-topic" className="rounded-[1.6rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-8">
          <div className="flex items-center gap-2 mb-5">
            <BookOpen className="w-6 h-6 text-blue-600" />
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">
              Study notes
            </h3>
          </div>
          <ModularStudyRenderer text={studyContent} />

          {content.bareActPointers && content.bareActPointers.length > 0 && (
            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
              <p className="text-[11px] font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2">
                Legal source pointers
              </p>
              <div className="flex flex-wrap gap-1.5">
                {content.bareActPointers.map((ptr) => (
                  <span
                    key={ptr}
                    className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900"
                  >
                    {ptr}
                  </span>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {!loading && hasIllustrations && (
        <section id="statutory-illustrations" className="space-y-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700 dark:text-blue-300">From the section itself</p>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white mt-1">
              Statutory illustrations
            </h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              These are official worked examples printed in the Act. Quote the illustration, then map it to an ingredient.
            </p>
          </div>
          <div className="space-y-3">
            {statutoryExamples.map((example) => (
              <article key={example.id} className="rounded-[1.4rem] border border-blue-200 dark:border-blue-900 bg-white dark:bg-slate-900 p-5 sm:p-6">
                <h4 className="font-display text-lg sm:text-xl font-semibold text-slate-900 dark:text-white">{example.title}</h4>
                <div className="mt-3 text-base sm:text-lg leading-8 text-slate-800 dark:text-slate-200 whitespace-pre-line">
                  <RichLegalText text={example.description} />
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {!loading && teachingExamples.length > 0 && (
        <section id="teaching-examples" className="space-y-3">
          <h3 className="font-display text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white">
            {hasIllustrations ? 'Further teaching examples' : 'Examples'}
          </h3>
          <div className="space-y-3">
            {teachingExamples.map((example) => (
              <article key={example.id} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
                <h4 className="font-semibold text-slate-900 dark:text-white">{example.title || 'Example'}</h4>
                <div className="mt-2 text-base leading-7 text-slate-700 dark:text-slate-300 whitespace-pre-line">
                  <RichLegalText text={example.description} />
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
      {!loading && content?.sections && content.sections.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700 dark:text-blue-300">Modular Syllabus Breakdown</span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Study Sections
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {content.sections.slice().sort((a, b) => a.order - b.order).map((section) => (
              <article key={section.id} id={section.id} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-xs space-y-3">
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold border border-blue-200 dark:border-blue-800">
                    {section.order}
                  </span>
                  <h4 className="font-display text-base sm:text-lg font-bold text-slate-900 dark:text-white">{section.title}</h4>
                </div>
                <div className="space-y-2 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
                  {section.content.map((paragraph, pIdx) => (
                    <p key={pIdx}>
                      <RichLegalText text={paragraph} />
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {!loading && content?.provisions && content.provisions.length > 0 && (
        <section className="rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/20 p-5 sm:p-6">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Relevant Provisions</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">{content.provisions.map((provision) => <div key={provision.provisionId} className="rounded-xl border border-blue-100 dark:border-blue-900/60 bg-white dark:bg-slate-900 p-4"><p className="text-xs font-semibold text-blue-600">{provision.article || provision.section || provision.provisionId}</p><p className="mt-1 text-sm font-semibold">{provision.title || provision.actName}</p><p className="mt-1 text-xs text-slate-500">{provision.actName}</p></div>)}</div>
        </section>
      )}

      {!loading && content?.hypotheticals && content.hypotheticals.length > 0 && (
        <section className="space-y-3">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Hypothetical problem + application</h3>
          {content.hypotheticals.map((item) => (
            <article key={item.id} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-3">
              {item.title && <h4 className="font-semibold text-sm">{item.title}</h4>}
              {item.facts && <HypoBlock label="Facts" text={item.facts} />}
              {item.scenario && <HypoBlock label="Scenario" text={item.scenario} />}
              {item.question && <HypoBlock label="Legal question" text={item.question} />}
              {item.applicableLaw && <HypoBlock label="Applicable law" text={item.applicableLaw} />}
              {item.analysis && <HypoBlock label="Analysis" text={item.analysis} />}
              {item.conclusion && <HypoBlock label="Conclusion" text={item.conclusion} />}
            </article>
          ))}
        </section>
      )}

      {!loading && content?.distinctions && content.distinctions.length > 0 && (
        <section className="space-y-3">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Important distinctions</h3>
          {content.distinctions.map((item, idx) => (
            <article key={item.id || `dist-${idx}`} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
              <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800">
                <h4 className="font-semibold text-sm">{item.title || `${item.conceptA || item.left} vs ${item.conceptB || item.right}`}</h4>
              </div>
              {item.rows && item.rows.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 dark:bg-slate-800/60 text-left">
                        <th className="px-4 py-2 font-semibold">Point</th>
                        <th className="px-4 py-2 font-semibold">{item.left}</th>
                        <th className="px-4 py-2 font-semibold">{item.right}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.rows.map((row) => (
                        <tr key={row.point} className="border-t border-slate-100 dark:border-slate-800 align-top">
                          <td className="px-4 py-2 font-medium text-slate-700 dark:text-slate-300">{row.point}</td>
                          <td className="px-4 py-2 text-slate-600 dark:text-slate-400">{row.left}</td>
                          <td className="px-4 py-2 text-slate-600 dark:text-slate-400">{row.right}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : item.points && item.points.length > 0 ? (
                <div className="p-4 space-y-2">
                  <div className="grid grid-cols-2 gap-3 text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    <div>{item.conceptA || item.left}</div>
                    <div>{item.conceptB || item.right}</div>
                  </div>
                  <ul className="space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </article>
          ))}
        </section>
      )}

      {!loading && content?.misconceptions && content.misconceptions.length > 0 && (
        <section className="space-y-3">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Common misconceptions / exam traps</h3>
          {content.misconceptions.map((item, idx) => (
            <article key={item.id || `misc-${idx}`} className="rounded-2xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/40 dark:bg-amber-950/20 p-4">
              <p className="text-sm font-semibold text-amber-900 dark:text-amber-200">Trap: {item.trap || item.misconception}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{item.correction}</p>
            </article>
          ))}
        </section>
      )}

      {!loading && (legalBrief || writtenSubmissions) && (
        <section id="chamber-drafting" className="space-y-6 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700 dark:text-blue-300">
                Chamber Practice &amp; Courtroom Submissions
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-200 font-semibold">
                Senior Counsel Standard
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white mt-1">
              Case Briefs &amp; Written Submissions
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              Structured IRAC problem assessments and comprehensive appellate written arguments, designed for high-stakes chamber practice and judicial problem resolution.
            </p>
          </div>
          {legalBrief && (
            <article id="legal-brief" className="rounded-[1.6rem] border border-blue-200 dark:border-blue-900 bg-white dark:bg-slate-900 p-5 sm:p-8 space-y-4">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="inline-flex h-8 items-center px-3 rounded-full bg-blue-600 text-white text-xs font-bold">
                    Case Brief
                  </span>
                  <span className="inline-flex h-8 items-center px-3 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-xs font-medium">
                    IRAC / Problem Assessment
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleCopyAnswer(legalBrief.answer, true)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                    title="Copy full brief text"
                  >
                    {copiedBrief ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setExpandedBrief(!expandedBrief)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                  >
                    {expandedBrief ? (
                      <>
                        <span>Collapse</span>
                        <ChevronUp className="w-3.5 h-3.5" />
                      </>
                    ) : (
                      <>
                        <span>Expand Brief</span>
                        <ChevronDown className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
              <h4 className="font-display text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white">
                {legalBrief.question}
              </h4>
              {expandedBrief ? (
                <>
                  <ModularStudyRenderer text={legalBrief.answer} defaultCardTitle="Legal Assessment & Case Brief (IRAC)" />
                  {legalBrief.explanation && (
                    <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 p-4">
                      <p className="text-[11px] font-bold uppercase tracking-wide text-slate-500 mb-2">
                        Chamber Practice Drafting Notes &amp; Essential Averments
                      </p>
                      <p className="text-base leading-7 text-slate-700 dark:text-slate-300">{legalBrief.explanation}</p>
                    </div>
                  )}
                </>
              ) : (
                <p className="text-sm text-slate-500 italic">
                  Brief collapsed. Click &quot;Expand Brief&quot; to review the full legal assessment and IRAC analysis.
                </p>
              )}
            </article>
          )}
          {writtenSubmissions && (
            <article id="written-submissions" className="rounded-[1.6rem] border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 sm:p-8 space-y-4">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="inline-flex h-8 items-center px-3 rounded-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-bold">
                    Written Submissions
                  </span>
                  <span className="inline-flex h-8 items-center px-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-xs font-medium">
                    Appellate &amp; Chamber Argument
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleCopyAnswer(writtenSubmissions.answer, false)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                    title="Copy full submissions text"
                  >
                    {copiedSubmissions ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setExpandedSubmissions(!expandedSubmissions)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                  >
                    {expandedSubmissions ? (
                      <>
                        <span>Collapse</span>
                        <ChevronUp className="w-3.5 h-3.5" />
                      </>
                    ) : (
                      <>
                        <span>Expand Submissions</span>
                        <ChevronDown className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
              <h4 className="font-display text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white">
                {writtenSubmissions.question}
              </h4>
              {expandedSubmissions ? (
                <>
                  <ModularStudyRenderer text={writtenSubmissions.answer} defaultCardTitle="Comprehensive Written Submissions" />
                  {writtenSubmissions.explanation && (
                    <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 p-4">
                      <p className="text-[11px] font-bold uppercase tracking-wide text-slate-500 mb-2">
                        Chamber Practice Drafting Notes &amp; Essential Averments
                      </p>
                      <p className="text-base leading-7 text-slate-700 dark:text-slate-300">{writtenSubmissions.explanation}</p>
                    </div>
                  )}
                </>
              ) : (
                <p className="text-sm text-slate-500 italic">
                  Submissions collapsed. Click &quot;Expand Submissions&quot; to review the full appellate argument and statutory synthesis.
                </p>
              )}
            </article>
          )}
        </section>
      )}

      {!loading && !hasContent && (
        <div className="rounded-2xl border border-dashed border-slate-200 dark:border-slate-700 p-8 text-center text-sm text-slate-500">
          Learning notes for this topic are coming soon. Use Practice MCQs and the reference tools
          meanwhile.
        </div>
      )}

      {!loading && hasCases && content?.cases && (
        <section id="case-law-ratios" className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-blue-600" />
              Landmark Judicial Authorities &amp; Extracted Ratios ({content.cases.length})
            </h3>
            <span className="text-[10px] px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-semibold border border-blue-200 dark:border-blue-900">
              Senior Counsel Citation Index
            </span>
          </div>

          <ul className="space-y-3">
            {content.cases.map((c, idx) => {
              const id = String(idx)
              const isCopied = copiedCaseId === id
              return (
                <li
                  key={id}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5 space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white">
                          {c.name}
                        </h4>
                        {c.court && (
                          <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-slate-700 dark:text-slate-300">
                            {c.court}
                          </span>
                        )}
                        {c.bench && (
                          <span className="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-[10px] font-medium text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900">
                            {c.bench}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
                        {c.year && <span>{c.year}</span>}
                        {c.citation && (
                          <span className="font-mono text-[11px] font-semibold text-blue-700 dark:text-blue-400">{c.citation}</span>
                        )}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCopyCase(c, idx)}
                      className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition shrink-0"
                      title="Copy citation & holding"
                    >
                      {isCopied ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  {c.facts && (
                    <div className="text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/20 p-2.5 rounded-lg">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">Factual Matrix: </span>
                      <RichLegalText text={c.facts} />
                    </div>
                  )}

                  <div className="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 space-y-1">
                    <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide block">
                      Holding
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                      <RichLegalText text={c.holding} />
                    </p>
                  </div>

                  {c.ratioDecidendi && (
                    <div className="bg-blue-50/60 dark:bg-blue-950/30 p-3.5 rounded-xl border border-blue-100 dark:border-blue-900/60 space-y-1">
                      <span className="text-[11px] font-bold text-blue-800 dark:text-blue-300 uppercase tracking-wide block">
                        Ratio Decidendi
                      </span>
                      <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                        <RichLegalText text={c.ratioDecidendi} />
                      </p>
                    </div>
                  )}

                  {c.relevance && (
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        Courtroom Application:{' '}
                      </span>
                      <RichLegalText text={c.relevance} />
                    </p>
                  )}
                </li>
              )
            })}
          </ul>
        </section>
      )}

      {!loading && content?.examTips && content.examTips.length > 0 && (
        <section className="rounded-2xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/50 dark:bg-amber-950/20 overflow-hidden">
          <button
            type="button"
            onClick={() => setTipsOpen(!tipsOpen)}
            className="w-full flex items-center justify-between px-4 py-3.5 text-left"
          >
            <span className="text-sm font-semibold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              Chamber &amp; Practice Insights
            </span>
            {tipsOpen ? (
              <ChevronUp className="w-4 h-4 text-amber-600" />
            ) : (
              <ChevronDown className="w-4 h-4 text-amber-600" />
            )}
          </button>

          {tipsOpen && (
            <ul className="px-4 pb-4 space-y-2">
              {content.examTips.map((tip, i) => (
                <li
                  key={i}
                  className="text-xs sm:text-sm text-amber-900/90 dark:text-amber-200/90 flex gap-2"
                >
                  <span className="text-amber-500 font-bold shrink-0">•</span>
                  <span><RichLegalText text={tip} /></span>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      {!loading && content?.revisionPoints && content.revisionPoints.length > 0 && (
        <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Practice Key Takeaways</h3>
          <ul className="mt-3 space-y-2">
            {content.revisionPoints.map((point) => (
              <li key={point} className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 flex gap-2">
                <span className="text-blue-500 font-bold shrink-0">•</span>
                <span><RichLegalText text={point} /></span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {!loading && content?.relatedTopics && content.relatedTopics.length > 0 && (
        <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Related Topics</h3>
          <div className="mt-3 flex flex-wrap gap-2">{content.relatedTopics.map((relatedTopic) => <span key={relatedTopic} className="rounded-lg bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs text-slate-600 dark:text-slate-300">{relatedTopic}</span>)}</div>
        </section>
      )}

      {!loading && knowledgeId && (
        <RelatedKnowledge entityId={knowledgeId} />
      )}

      <p className="text-xs text-slate-400 dark:text-slate-500">
        Authoritative digital legal library &amp; chamber reference. Verify state amendments and current judicial pronouncements.
      </p>

      {(legalBrief || writtenSubmissions) && (
        <div className="sm:hidden fixed bottom-4 inset-x-4 z-40 flex gap-2">
          {legalBrief && (
            <button
              type="button"
              onClick={() => jumpTo('legal-brief')}
              className="flex-1 h-12 rounded-2xl bg-blue-600 text-white text-xs font-bold shadow-lg shadow-blue-900/20 inline-flex items-center justify-center gap-1.5"
            >
              <PenLine className="w-3.5 h-3.5" />
              <span>Case Brief</span>
            </button>
          )}
          {writtenSubmissions && (
            <button
              type="button"
              onClick={() => jumpTo('written-submissions')}
              className="flex-1 h-12 rounded-2xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-bold shadow-lg inline-flex items-center justify-center gap-1.5"
            >
              <PenLine className="w-3.5 h-3.5" />
              <span>Written Submissions</span>
            </button>
          )}
        </div>
      )}
    </div>
  )
}



function HypoBlock({ label, text }: { label: string; text?: string }) {
  if (!text) return null
  return (
    <div>
      <p className="text-[11px] font-bold uppercase tracking-wide text-slate-500">{label}</p>
      <div className="mt-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
        <RichLegalText text={text} />
      </div>
    </div>
  )
}

function provisionSortKey(id: string): [number, string] {
  const match = id.match(/^(?:art|s)-(\d+)([a-z]*)$/i)
  if (!match) return [9999, id]
  return [Number(match[1]), match[2]]
}

function provisionNeighbours(subject: LawSubjectMeta, topic: LawTopic) {
  if (topic.type !== 'section' && topic.type !== 'article') return null
  const list = subject.topics
    .filter((t) => t.type === topic.type)
    .slice()
    .sort((a, b) => {
      const [an, as] = provisionSortKey(a.id)
      const [bn, bs] = provisionSortKey(b.id)
      return an - bn || as.localeCompare(bs)
    })
  const i = list.findIndex((t) => t.id === topic.id)
  if (i < 0) return null
  return { prev: list[i - 1], next: list[i + 1] }
}
