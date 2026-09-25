import { useState, useEffect, useMemo } from 'react'
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
  Award,
  Link2,
  CheckCircle2,
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
import {
  setLastRead,
  markTopicCompleted,
  isTopicCompleted,
  getProgress,
} from '../../lib/progress'
import { ALL_JUDGMENTS } from '../../data/judgments'
import type { Judgment } from '../../data/judgments/types'

interface TopicDetailProps {
  subject: LawSubjectMeta
  topic: LawTopic
  onBack: () => void
  onSelectTopic?: (topic: LawTopic) => void
  onSelectTool?: (slug: string, params?: { subject?: string; topicId?: string; mode?: 'practice' | 'exam' }) => void
  onOpenCaseLaw?: (judgmentId: string) => void
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

function findJudgmentForCase(c: CaseCitation): Judgment | undefined {
  const nameLower = c.name.toLowerCase()
  return ALL_JUDGMENTS.find((j) => {
    const jShort = j.shortName?.toLowerCase()
    const jName = j.caseName.toLowerCase()
    return (
      (jShort && nameLower.includes(jShort)) ||
      nameLower.includes(jName) ||
      (c.citation && j.citation && c.citation.toLowerCase().includes(j.citation.toLowerCase()))
    )
  })
}

function catalogNeighbours(subject: LawSubjectMeta, topic: LawTopic) {
  const list = subject.topics
  const idx = list.findIndex((t) => t.id === topic.id)
  if (idx < 0) return { prev: undefined, next: undefined }
  return {
    prev: idx > 0 ? list[idx - 1] : undefined,
    next: idx < list.length - 1 ? list[idx + 1] : undefined,
  }
}

export function TopicDetail({
  subject,
  topic,
  onBack,
  onSelectTopic,
  onSelectTool,
  onOpenCaseLaw,
}: TopicDetailProps) {
  const [copiedCaseId, setCopiedCaseId] = useState<string | null>(null)
  const [tipsOpen, setTipsOpen] = useState(true)
  const [content, setContent] = useState<TopicContent | null>(null)
  const [loading, setLoading] = useState(true)
  const [studyComplete, setStudyComplete] = useState(false)
  const [activeSection, setActiveSection] = useState('study-topic')

  const [expandedBrief, setExpandedBrief] = useState(true)
  const [expandedSubmissions, setExpandedSubmissions] = useState(true)
  const [copiedBrief, setCopiedBrief] = useState(false)
  const [copiedSubmissions, setCopiedSubmissions] = useState(false)

  // 3.1 Persist last-read on mount & sync completion
  useEffect(() => {
    setStudyComplete(isTopicCompleted(subject.slug, topic.id))
    setLastRead(subject.slug, topic.id)
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
  const neighbours = useMemo(() => catalogNeighbours(subject, topic), [subject, topic])
  const legalBrief = getLegalBrief(content)
  const writtenSubmissions = getWrittenSubmissions(content)
  const statutoryExamples = (content?.examples ?? []).filter(
    (example) => /^Illustration/i.test(example.title || '') || example.illustrationType === 'statutory',
  )
  const teachingExamples = (content?.examples ?? []).filter(
    (example) => !/^Illustration/i.test(example.title || '') && example.illustrationType !== 'statutory',
  )
  const hasIllustrations = statutoryExamples.length > 0
  const hasModularSections = (content?.sections?.length ?? 0) > 0
  const hasDistinctions = (content?.distinctions?.length ?? 0) > 0 || (content?.misconceptions?.length ?? 0) > 0
  const hasExamTips = (content?.examTips?.length ?? 0) > 0 || (content?.revisionPoints?.length ?? 0) > 0

  // 3.7 Explicit User Mark Complete Control
  const toggleStudyComplete = () => {
    const nextValue = !studyComplete
    setStudyComplete(nextValue)
    if (nextValue) {
      markTopicCompleted(subject.slug, topic.id)
    } else if (typeof window !== 'undefined') {
      const remaining = getProgress().filter(
        (e) => !(e.subjectSlug === subject.slug && e.topicId === topic.id),
      )
      localStorage.setItem('cplaw.progress.v1', JSON.stringify(remaining))
    }
  }

  // 3.2 In-page Section Navigation
  function jumpTo(id: string) {
    setActiveSection(id)
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

  const isCriminalSanhita =
    subject.slug === 'bns' || subject.slug === 'bnss' || subject.slug === 'bsa'

  return (
    <div className="space-y-8 max-w-6xl pb-24 sm:pb-8">
      {/* 1. Top Breadcrumbs & Topic Title Header */}
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-300 hover:border-blue-400 transition-colors shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to {subject.shortName}
          </button>

          {/* 3.3 Prev / Next topic by catalog order */}
          {neighbours && onSelectTopic && (
            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={!neighbours.prev}
                onClick={() => neighbours.prev && onSelectTopic(neighbours.prev)}
                className={`text-xs px-3 py-1.5 rounded-xl border font-bold transition-colors ${
                  neighbours.prev
                    ? 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:border-blue-400 hover:text-blue-600'
                    : 'border-transparent text-slate-300 dark:text-slate-700 cursor-not-allowed'
                }`}
                title={neighbours.prev ? neighbours.prev.name : 'First topic in catalog'}
              >
                ← Prev
              </button>
              <button
                type="button"
                disabled={!neighbours.next}
                onClick={() => neighbours.next && onSelectTopic(neighbours.next)}
                className={`text-xs px-3 py-1.5 rounded-xl border font-bold transition-colors ${
                  neighbours.next
                    ? 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:border-blue-400 hover:text-blue-600'
                    : 'border-transparent text-slate-300 dark:text-slate-700 cursor-not-allowed'
                }`}
                title={neighbours.next ? neighbours.next.name : 'Last topic in catalog'}
              >
                Next →
              </button>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="space-y-2 min-w-0 flex-1">
            {/* Badges Row */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold border border-slate-200 dark:border-slate-700">
                {topicTypeLabel(topic.type)}
              </span>

              {/* 3.9 Honesty Badges */}
              {topic.highYield ? (
                <>
                  <Badge variant="amber">★ High yield</Badge>
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                    Full Treatise
                  </span>
                </>
              ) : topic.hasNotes === false ? (
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                  Needs Review
                </span>
              ) : (
                <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  Structured Catalog Note
                </span>
              )}

              {topic.range && (
                <span className="text-xs font-bold text-blue-700 dark:text-blue-300 tabular-nums">
                  {topic.range}
                </span>
              )}
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 dark:text-white leading-tight">
              {topic.name}
            </h1>

            {topic.note && (
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
                {topic.note}
              </p>
            )}
          </div>

          {/* 3.7 Mark Complete Control & 3.8 Practice Topic CTA */}
          <div className="flex sm:flex-col items-center sm:items-end gap-2.5 shrink-0">
            <button
              type="button"
              onClick={toggleStudyComplete}
              className={`inline-flex items-center justify-center gap-2 h-11 px-4 rounded-2xl border text-xs sm:text-sm font-bold transition-all shrink-0 shadow-2xs ${
                studyComplete
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                  : 'border-blue-200 text-blue-700 hover:bg-blue-50 dark:border-blue-900 dark:text-blue-300 dark:hover:bg-blue-950/40'
              }`}
            >
              {studyComplete ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Topic Completed</span>
                </>
              ) : (
                <span>Mark as Completed</span>
              )}
            </button>

            {onSelectTool && (
              <button
                type="button"
                onClick={() =>
                  onSelectTool('aibe-mcq', {
                    subject: subject.slug,
                    topicId: topic.id,
                    mode: 'practice',
                  })
                }
                className="inline-flex items-center justify-center gap-1.5 h-11 px-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-xs transition-colors shrink-0"
              >
                <Award className="w-4 h-4" />
                <span>Practice MCQs</span>
              </button>
            )}
          </div>
        </div>

        {/* 3.5 Sanhita Concordance Mapper CTA */}
        {isCriminalSanhita && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-amber-900 dark:text-amber-200 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 rounded-2xl p-3.5">
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
              <span>
                <strong>Statutory Concordance:</strong> Verify transition from Indian Penal Code, CrPC, or Indian Evidence Act under the 2024 Sanhitas.
              </span>
            </div>
            {onSelectTool && (
              <button
                type="button"
                onClick={() => onSelectTool('bns-ipc-mapper')}
                className="inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shrink-0 shadow-xs transition-colors"
              >
                <span>Open Sanhita Mapper →</span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* 2. In-Page Section Navigation Sticky Bar (Task 3.2) */}
      <nav
        aria-label="In-page section navigation"
        className="sticky top-0 sm:top-14 z-30 -mx-2 px-2 py-2.5 bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur-md rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-xs"
      >
        <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 text-xs no-scrollbar">
          <button
            type="button"
            onClick={() => jumpTo('study-topic')}
            className={`px-3 py-1.5 rounded-xl font-bold shrink-0 transition-colors ${
              activeSection === 'study-topic'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-800'
            }`}
          >
            Study Notes
          </button>

          {hasModularSections && (
            <button
              type="button"
              onClick={() => jumpTo('modular-sections')}
              className={`px-3 py-1.5 rounded-xl font-bold shrink-0 transition-colors ${
                activeSection === 'modular-sections'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-800'
              }`}
            >
              Statutory Sections
            </button>
          )}

          {hasIllustrations && (
            <button
              type="button"
              onClick={() => jumpTo('statutory-illustrations')}
              className={`px-3 py-1.5 rounded-xl font-bold shrink-0 transition-colors ${
                activeSection === 'statutory-illustrations'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-800'
              }`}
            >
              Illustrations
            </button>
          )}

          {hasCases && (
            <button
              type="button"
              onClick={() => jumpTo('case-law-ratios')}
              className={`px-3 py-1.5 rounded-xl font-bold shrink-0 transition-colors ${
                activeSection === 'case-law-ratios'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-800'
              }`}
            >
              Case Law Ratios
            </button>
          )}

          {legalBrief && (
            <button
              type="button"
              onClick={() => jumpTo('legal-brief')}
              className={`px-3 py-1.5 rounded-xl font-bold shrink-0 inline-flex items-center gap-1 transition-colors ${
                activeSection === 'legal-brief'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-800'
              }`}
            >
              <PenLine className="w-3 h-3" />
              <span>IRAC Case Brief</span>
            </button>
          )}

          {writtenSubmissions && (
            <button
              type="button"
              onClick={() => jumpTo('written-submissions')}
              className={`px-3 py-1.5 rounded-xl font-bold shrink-0 inline-flex items-center gap-1 transition-colors ${
                activeSection === 'written-submissions'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-800'
              }`}
            >
              <PenLine className="w-3 h-3" />
              <span>Written Submissions</span>
            </button>
          )}

          {hasDistinctions && (
            <button
              type="button"
              onClick={() => jumpTo('distinctions')}
              className={`px-3 py-1.5 rounded-xl font-bold shrink-0 transition-colors ${
                activeSection === 'distinctions'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-800'
              }`}
            >
              Distinctions &amp; Traps
            </button>
          )}

          {hasExamTips && (
            <button
              type="button"
              onClick={() => jumpTo('exam-tips')}
              className={`px-3 py-1.5 rounded-xl font-bold shrink-0 transition-colors ${
                activeSection === 'exam-tips'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-800'
              }`}
            >
              Chamber Insights
            </button>
          )}

          {knowledgeId && (
            <button
              type="button"
              onClick={() => jumpTo('related-knowledge')}
              className={`px-3 py-1.5 rounded-xl font-bold shrink-0 transition-colors ${
                activeSection === 'related-knowledge'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-800'
              }`}
            >
              Knowledge Graph
            </button>
          )}
        </div>
      </nav>

      {/* Loading state */}
      {loading && (
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-12 flex flex-col items-center justify-center gap-3 text-slate-500">
          <Loader2 className="w-7 h-7 animate-spin text-blue-600" />
          <p className="text-sm font-medium">Loading authoritative treatise notes…</p>
        </div>
      )}

      {/* 3.9 Structured Catalog Note Honesty Callout */}
      {!loading && !topic.highYield && (
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/50 p-4 text-xs text-slate-600 dark:text-slate-400 space-y-1">
          <p className="font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">
            Structured Catalog Note
          </p>
          <p>
            Full book-chapter treatise with expanded case ratios and dual courtroom submissions is expanding daily. Current module delivers enacted statutory wording, operative ingredients, and foundational examination pointers.
          </p>
        </div>
      )}

      {/* Topic Glance */}
      {!loading && content?.glance && (
        <section className="rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/60 dark:bg-blue-950/20 p-5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 mb-1">
            Topic At A Glance
          </p>
          <p className="text-sm leading-relaxed text-slate-800 dark:text-slate-200 font-medium">{content.glance}</p>
        </section>
      )}

      {/* Primary Study Notes (Rendered via ModularStudyRenderer - Task 3.10) */}
      {!loading && hasContent && content && (
        <section id="study-topic" className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-5 shadow-xs">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
            <BookOpen className="w-6 h-6 text-blue-600" />
            <h2 className="font-display text-2xl sm:text-3xl font-black text-slate-950 dark:text-white">
              Doctrinal Study Notes
            </h2>
          </div>

          <ModularStudyRenderer text={studyContent} />

          {content.bareActPointers && content.bareActPointers.length > 0 && (
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Statutory Authority &amp; Source Pointers:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {content.bareActPointers.map((ptr) => (
                  <span
                    key={ptr}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900"
                  >
                    {ptr}
                  </span>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* Modular Syllabus Breakdown Sections */}
      {!loading && content?.sections && content.sections.length > 0 && (
        <section id="modular-sections" className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">Statutory Provisions &amp; Operative Clauses</span>
          </div>
          <h3 className="font-display text-2xl font-bold text-slate-950 dark:text-white">
            Operative Sections &amp; Breakdown
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {content.sections.slice().sort((a, b) => a.order - b.order).map((sec) => (
              <article key={sec.id} id={sec.id} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-2xs space-y-3">
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold border border-blue-200 dark:border-blue-800">
                    {sec.order}
                  </span>
                  <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">{sec.title}</h4>
                </div>
                <div className="space-y-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {sec.content.map((paragraph, pIdx) => (
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

      {/* Statutory Illustrations */}
      {!loading && hasIllustrations && (
        <section id="statutory-illustrations" className="space-y-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">Statutory Proof Standard</p>
            <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-950 dark:text-white mt-1">
              Official Statutory Illustrations
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Official worked examples enacted in the bare statute. In judicial exam and court pleadings, map the facts to the statutory ingredients below.
            </p>
          </div>
          <div className="space-y-3">
            {statutoryExamples.map((example) => (
              <article key={example.id} className="rounded-2xl border border-blue-200 dark:border-blue-900 bg-white dark:bg-slate-900 p-5 sm:p-6 shadow-xs">
                <h4 className="font-display text-base sm:text-lg font-bold text-slate-900 dark:text-white">{example.title}</h4>
                <div className="mt-2 text-sm sm:text-base leading-relaxed text-slate-800 dark:text-slate-200 whitespace-pre-line">
                  <RichLegalText text={example.description} />
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Teaching Examples */}
      {!loading && teachingExamples.length > 0 && (
        <section id="teaching-examples" className="space-y-3">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-950 dark:text-white">
            {hasIllustrations ? 'Practical Classroom Case Examples' : 'Illustrative Examples'}
          </h3>
          <div className="space-y-3">
            {teachingExamples.map((example) => (
              <article key={example.id} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
                <h4 className="font-bold text-slate-900 dark:text-white">{example.title || 'Example'}</h4>
                <div className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300 whitespace-pre-line">
                  <RichLegalText text={example.description} />
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Relevant Provisions */}
      {!loading && content?.provisions && content.provisions.length > 0 && (
        <section className="rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/20 p-5 sm:p-6">
          <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">Statutory Cross-References</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {content.provisions.map((provision) => (
              <div key={provision.provisionId} className="rounded-xl border border-blue-100 dark:border-blue-900/60 bg-white dark:bg-slate-900 p-3.5">
                <p className="text-xs font-bold text-blue-700 dark:text-blue-300">{provision.article || provision.section || provision.provisionId}</p>
                <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">{provision.title || provision.actName}</p>
                <p className="mt-0.5 text-xs text-slate-500">{provision.actName}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Hypothetical Problems & Analysis */}
      {!loading && content?.hypotheticals && content.hypotheticals.length > 0 && (
        <section id="hypotheticals" className="space-y-3">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Judicial Examination Problem &amp; Application</h3>
          {content.hypotheticals.map((item) => (
            <article key={item.id} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 space-y-3 shadow-2xs">
              {item.title && <h4 className="font-bold text-base text-slate-900 dark:text-white">{item.title}</h4>}
              {item.facts && <HypoBlock label="Factual Matrix" text={item.facts} />}
              {item.scenario && <HypoBlock label="Scenario" text={item.scenario} />}
              {item.question && <HypoBlock label="Legal Issues Raised" text={item.question} />}
              {item.applicableLaw && <HypoBlock label="Applicable Statutory Law" text={item.applicableLaw} />}
              {item.analysis && <HypoBlock label="Doctrinal Application & Analysis" text={item.analysis} />}
              {item.conclusion && <HypoBlock label="Conclusion & Order" text={item.conclusion} />}
            </article>
          ))}
        </section>
      )}

      {/* Important Distinctions & Misconceptions */}
      {!loading && hasDistinctions && (
        <section id="distinctions" className="space-y-6">
          {content?.distinctions && content.distinctions.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Comparative Doctrinal Distinctions</h3>
              {content.distinctions.map((item, idx) => (
                <article key={item.id || `dist-${idx}`} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-2xs">
                  <div className="px-5 py-3.5 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-850">
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">{item.title || `${item.conceptA || item.left} vs ${item.conceptB || item.right}`}</h4>
                  </div>
                  {item.rows && item.rows.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-slate-50/70 dark:bg-slate-800/60 text-left border-b border-slate-200 dark:border-slate-800">
                            <th className="px-4 py-2.5 font-bold text-slate-700 dark:text-slate-300">Parameter</th>
                            <th className="px-4 py-2.5 font-bold text-blue-700 dark:text-blue-300">{item.left}</th>
                            <th className="px-4 py-2.5 font-bold text-slate-900 dark:text-white">{item.right}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {item.rows.map((row) => (
                            <tr key={row.point} className="border-t border-slate-100 dark:border-slate-800 align-top">
                              <td className="px-4 py-2.5 font-semibold text-slate-800 dark:text-slate-200">{row.point}</td>
                              <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400">{row.left}</td>
                              <td className="px-4 py-2.5 text-slate-600 dark:text-slate-400">{row.right}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          )}

          {content?.misconceptions && content.misconceptions.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Common Misconceptions &amp; Exam Traps</h3>
              {content.misconceptions.map((item, idx) => (
                <article key={item.id || `misc-${idx}`} className="rounded-2xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/40 dark:bg-amber-950/20 p-4 space-y-1.5">
                  <p className="text-sm font-bold text-amber-900 dark:text-amber-200">Exam Trap: {item.trap || item.misconception}</p>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">{item.correction}</p>
                </article>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Case Brief (IRAC) & Chamber Submissions */}
      {!loading && (legalBrief || writtenSubmissions) && (
        <section id="chamber-drafting" className="space-y-6 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                Chamber Practice &amp; Courtroom Submissions
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-200 font-bold">
                Senior Counsel Standard
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-950 dark:text-white mt-1">
              Case Briefs &amp; Written Submissions
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              Structured IRAC problem assessments and comprehensive appellate written arguments, designed for high-stakes chamber practice and judicial problem resolution.
            </p>
          </div>

          {/* Legal Brief / IRAC */}
          {legalBrief && (
            <article id="legal-brief" className="rounded-3xl border border-blue-200 dark:border-blue-900 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-4 shadow-xs">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="inline-flex h-8 items-center px-3.5 rounded-full bg-blue-600 text-white text-xs font-bold shadow-xs">
                    Case Brief
                  </span>
                  <span className="inline-flex h-8 items-center px-3 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-xs font-semibold">
                    IRAC / Problem Assessment
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleCopyAnswer(legalBrief.answer, true)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
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
                        <span>Copy Brief</span>
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setExpandedBrief(!expandedBrief)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
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

              <h4 className="font-display text-xl sm:text-2xl font-bold text-slate-950 dark:text-white">
                {legalBrief.question}
              </h4>

              {expandedBrief ? (
                <>
                  <ModularStudyRenderer text={legalBrief.answer} defaultCardTitle="Legal Assessment &amp; Case Brief (IRAC)" />
                  {legalBrief.explanation && (
                    <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 p-4 border border-slate-100 dark:border-slate-800">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                        Chamber Practice Drafting Notes &amp; Essential Averments
                      </p>
                      <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{legalBrief.explanation}</p>
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

          {/* Written Submissions */}
          {writtenSubmissions && (
            <article id="written-submissions" className="rounded-3xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-4 shadow-xs">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="inline-flex h-8 items-center px-3.5 rounded-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-bold shadow-xs">
                    Written Submissions
                  </span>
                  <span className="inline-flex h-8 items-center px-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-xs font-semibold">
                    Appellate &amp; Chamber Argument
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleCopyAnswer(writtenSubmissions.answer, false)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
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
                        <span>Copy Submissions</span>
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setExpandedSubmissions(!expandedSubmissions)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
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

              <h4 className="font-display text-xl sm:text-2xl font-bold text-slate-950 dark:text-white">
                {writtenSubmissions.question}
              </h4>

              {expandedSubmissions ? (
                <>
                  <ModularStudyRenderer text={writtenSubmissions.answer} defaultCardTitle="Comprehensive Written Submissions" />
                  {writtenSubmissions.explanation && (
                    <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 p-4 border border-slate-100 dark:border-slate-800">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                        Chamber Practice Drafting Notes &amp; Essential Averments
                      </p>
                      <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{writtenSubmissions.explanation}</p>
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

      {/* Landmark Judicial Authorities & Extracted Ratios (Task 3.6) */}
      {!loading && hasCases && content?.cases && (
        <section id="case-law-ratios" className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-blue-600" />
              Landmark Judicial Authorities &amp; Extracted Ratios ({content.cases.length})
            </h3>
            <span className="text-[10px] px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold border border-blue-200 dark:border-blue-900">
              Senior Counsel Citation Index
            </span>
          </div>

          <ul className="space-y-3">
            {content.cases.map((c, idx) => {
              const id = String(idx)
              const isCopied = copiedCaseId === id
              // 3.6 Link cases -> /case-law judgment id when the judgment exists
              const matchedJudgment = findJudgmentForCase(c)

              return (
                <li
                  key={id}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-3 shadow-2xs"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-bold text-base text-slate-900 dark:text-white">
                          {c.name}
                        </h4>
                        {c.court && (
                          <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-700 dark:text-slate-300">
                            {c.court}
                          </span>
                        )}
                        {c.bench && (
                          <span className="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-[10px] font-medium text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900">
                            {c.bench}
                          </span>
                        )}
                        {matchedJudgment && onOpenCaseLaw && (
                          <button
                            type="button"
                            onClick={() => onOpenCaseLaw(matchedJudgment.id)}
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950 px-2 py-0.5 rounded-md border border-blue-200 dark:border-blue-800 hover:bg-blue-600 hover:text-white transition-colors"
                          >
                            <Link2 className="w-3 h-3" /> Read Judgment Record
                          </button>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
                        {c.year && <span>({c.year})</span>}
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
                    <div className="text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/30 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                      <span className="font-bold text-slate-700 dark:text-slate-300 block mb-0.5">Factual Matrix:</span>
                      <RichLegalText text={c.facts} />
                    </div>
                  )}

                  <div className="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 space-y-1">
                    <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block">
                      Holding
                    </span>
                    <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                      <RichLegalText text={c.holding} />
                    </div>
                  </div>

                  {c.ratioDecidendi && (
                    <div className="bg-blue-50/70 dark:bg-blue-950/40 p-3.5 rounded-xl border border-blue-100 dark:border-blue-900/60 space-y-1">
                      <span className="text-[11px] font-bold text-blue-800 dark:text-blue-300 uppercase tracking-wider block">
                        Ratio Decidendi
                      </span>
                      <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                        <RichLegalText text={c.ratioDecidendi} />
                      </div>
                    </div>
                  )}

                  {c.relevance && (
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      <strong className="text-slate-700 dark:text-slate-300">
                        Courtroom Application:{' '}
                      </strong>
                      <RichLegalText text={c.relevance} />
                    </p>
                  )}
                </li>
              )
            })}
          </ul>
        </section>
      )}

      {/* Chamber & Practice Insights (Task 3.2: exam-tips) */}
      {!loading && hasExamTips && (
        <section id="exam-tips" className="space-y-4">
          {content?.examTips && content.examTips.length > 0 && (
            <div className="rounded-2xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/50 dark:bg-amber-950/20 overflow-hidden shadow-2xs">
              <button
                type="button"
                onClick={() => setTipsOpen(!tipsOpen)}
                className="w-full flex items-center justify-between px-5 py-3.5 text-left"
              >
                <span className="text-sm font-bold text-amber-900 dark:text-amber-200 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  Chamber Practice &amp; Judicial Examination Insights
                </span>
                {tipsOpen ? (
                  <ChevronUp className="w-4 h-4 text-amber-600" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-amber-600" />
                )}
              </button>

              {tipsOpen && (
                <ul className="px-5 pb-5 space-y-2.5 border-t border-amber-200/50 dark:border-amber-900/40 pt-3">
                  {content.examTips.map((tip, i) => (
                    <li
                      key={i}
                      className="text-xs sm:text-sm text-amber-950 dark:text-amber-100 flex gap-2 leading-relaxed"
                    >
                      <span className="text-amber-600 font-bold shrink-0">•</span>
                      <span><RichLegalText text={tip} /></span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {content?.revisionPoints && content.revisionPoints.length > 0 && (
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-2xs">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs">Essential Revision Points</h3>
              <ul className="mt-3 space-y-2">
                {content.revisionPoints.map((point) => (
                  <li key={point} className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 flex gap-2">
                    <span className="text-blue-600 font-bold shrink-0">•</span>
                    <span><RichLegalText text={point} /></span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}

      {/* Related Knowledge Graph (Task 3.4) */}
      {!loading && knowledgeId && (
        <section id="related-knowledge" className="space-y-3">
          <RelatedKnowledge entityId={knowledgeId} />
        </section>
      )}

      {/* 3.3 Bottom Catalog Navigation Footer (Prev / Next) */}
      {neighbours && onSelectTopic && (
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          {neighbours.prev ? (
            <button
              type="button"
              onClick={() => neighbours.prev && onSelectTopic(neighbours.prev)}
              className="w-full sm:w-auto text-left p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-400 transition-colors shadow-2xs"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">← Previous Topic</span>
              <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white line-clamp-1">{neighbours.prev.name}</span>
            </button>
          ) : <div className="hidden sm:block" />}

          <button
            type="button"
            onClick={onBack}
            className="text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors"
          >
            ↑ Back to {subject.shortName} Catalog
          </button>

          {neighbours.next ? (
            <button
              type="button"
              onClick={() => neighbours.next && onSelectTopic(neighbours.next)}
              className="w-full sm:w-auto text-right p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-400 transition-colors shadow-2xs"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Next Topic →</span>
              <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white line-clamp-1">{neighbours.next.name}</span>
            </button>
          ) : <div className="hidden sm:block" />}
        </div>
      )}

      {/* Mobile Floating Action Jump Bar for Brief / Submissions */}
      {(legalBrief || writtenSubmissions) && (
        <div className="sm:hidden fixed bottom-4 inset-x-4 z-40 flex gap-2">
          {legalBrief && (
            <button
              type="button"
              onClick={() => jumpTo('legal-brief')}
              className="flex-1 h-12 rounded-2xl bg-blue-600 text-white text-xs font-bold shadow-lg shadow-blue-900/20 inline-flex items-center justify-center gap-1.5"
            >
              <PenLine className="w-3.5 h-3.5" />
              <span>IRAC Brief</span>
            </button>
          )}
          {writtenSubmissions && (
            <button
              type="button"
              onClick={() => jumpTo('written-submissions')}
              className="flex-1 h-12 rounded-2xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-bold shadow-lg inline-flex items-center justify-center gap-1.5"
            >
              <PenLine className="w-3.5 h-3.5" />
              <span>Submissions</span>
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
    <div className="space-y-0.5">
      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{label}</p>
      <div className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
        <RichLegalText text={text} />
      </div>
    </div>
  )
}
