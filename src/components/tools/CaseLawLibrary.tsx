import { useEffect, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  BookmarkCheck,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  FileText,
  Filter,
  Library,
  Link2,
  RotateCcw,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  X,
  Clock,
} from 'lucide-react'
import { ALL_JUDGMENTS, JUDGMENTS_BY_ID } from '../../data/judgments'
import type { Judgment, JudgmentMcq } from '../../data/judgments/types'
import { filterJudgments, getJudgmentSubjects, getJudgmentTopics, getJudgmentYears, searchJudgments } from '../../utils/judgments/searchJudgments'

const BOOKMARKS_KEY = 'cplaw.judgmentBookmarks.v1'
const PROGRESS_KEY = 'cplaw.judgmentProgress.v1'
const LAST_READ_KEY = 'cplaw.judgmentLastRead.v1'

const sections = ['overview', 'facts', 'issues', 'provisions', 'arguments', 'reasoning', 'decision', 'ratio', 'obiter', 'exam-points', 'mcqs', 'original']
const sectionLabels: Record<string, string> = {
  overview: 'Overview',
  facts: 'Facts',
  issues: 'Legal Issues',
  provisions: 'Provisions',
  arguments: 'Arguments',
  reasoning: "Court's Reasoning",
  decision: 'Decision',
  ratio: 'Ratio Decidendi',
  obiter: 'Obiter Dicta',
  'exam-points': 'Exam Points',
  mcqs: 'Practice MCQs',
  original: 'Original Judgment',
}

interface LastReadJudgment {
  judgmentId: string
  sectionId?: string
  updatedAt: string
}

function readSet(key: string): Set<string> {
  try {
    return new Set(JSON.parse(localStorage.getItem(key) || '[]'))
  } catch {
    return new Set()
  }
}

function readProgress(): Record<string, string[]> {
  try {
    return JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}')
  } catch {
    return {}
  }
}

function readLastRead(): LastReadJudgment | null {
  try {
    const raw = localStorage.getItem(LAST_READ_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function Panel({
  title,
  id,
  children,
  accent = false,
}: {
  title: string
  id: string
  children: React.ReactNode
  accent?: boolean
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 rounded-2xl border p-5 sm:p-7 ${
        accent
          ? 'border-blue-200 dark:border-blue-900/70 bg-blue-50/60 dark:bg-blue-950/25'
          : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'
      }`}
    >
      <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white mb-4">{title}</h2>
      {children}
    </section>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, index) => (
        <li
          key={`${item}-${index}`}
          className="flex gap-3 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300"
        >
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function OriginalJudgmentViewer({ judgment }: { judgment: Judgment }) {
  const [open, setOpen] = useState(false)
  const source = judgment.source

  if (!open) {
    return (
      <div className="rounded-xl border border-dashed border-slate-300 dark:border-slate-700 p-5 text-center">
        <FileText className="w-8 h-8 mx-auto mb-2 text-slate-400" />
        <p className="text-sm font-semibold">Original document loads only when requested</p>
        <p className="text-xs text-slate-500 mt-1">
          The verified study notes above are separate from the primary source text.
        </p>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-4 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700 min-h-[44px]"
        >
          <BookOpen className="w-4 h-4" /> Open original
        </button>
      </div>
    )
  }

  if (!source.pdfPath && !source.sourceUrl) {
    return (
      <div className="rounded-xl border border-amber-200 dark:border-amber-900/60 bg-amber-50 dark:bg-amber-950/25 p-5">
        <p className="font-semibold text-amber-900 dark:text-amber-200">
          Source document not bundled locally in repository.
        </p>
        <p className="mt-1 text-sm text-amber-800 dark:text-amber-300">
          Full ratio deconstruction and authoritative SCC/SCR citations are verified above. Public domain gazette/court copy is kept unbundled for client privacy and repository hygiene.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        <a
          href={source.pdfPath || source.sourceUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white min-h-[44px]"
        >
          <ExternalLink className="w-4 h-4" /> Open source document
        </a>
        {source.pdfPath && (
          <button
            type="button"
            onClick={() =>
              document.getElementById(`original-frame-${judgment.id}`)?.requestFullscreen?.()
            }
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 px-4 py-2 text-xs font-semibold min-h-[44px]"
          >
            <FileText className="w-4 h-4" /> Full screen
          </button>
        )}
      </div>
      {source.pdfPath ? (
        <iframe
          id={`original-frame-${judgment.id}`}
          title={`Original judgment: ${judgment.caseName}`}
          src={source.pdfPath}
          className="w-full h-[min(75vh,720px)] rounded-xl border border-slate-200 dark:border-slate-700"
          loading="lazy"
        />
      ) : (
        <p className="text-sm text-slate-600 dark:text-slate-400">
          This source opens in a separate document window.
        </p>
      )}
    </div>
  )
}

function McqBlock({ questions }: { questions: JudgmentMcq[] }) {
  const [answers, setAnswers] = useState<Record<string, number>>({})
  if (!questions.length) {
    return (
      <p className="text-sm text-slate-600 dark:text-slate-400">
        No practice questions have been published for this judgment yet.
      </p>
    )
  }
  return (
    <div className="space-y-5">
      {questions.map((question, questionIndex) => {
        const selected = answers[question.id]
        const answered = selected !== undefined
        return (
          <div key={question.id} className="rounded-xl border border-slate-200 dark:border-slate-800 p-4">
            <p className="font-semibold text-sm sm:text-base leading-relaxed">
              {questionIndex + 1}. {question.question}
            </p>
            <div className="mt-3 space-y-2">
              {question.options.map((option, optionIndex) => {
                const correct = optionIndex === question.correctIndex
                const chosen = selected === optionIndex
                return (
                  <button
                    type="button"
                    key={option}
                    onClick={() =>
                      setAnswers((current) => ({ ...current, [question.id]: optionIndex }))
                    }
                    className={`w-full text-left rounded-xl border px-3.5 py-3 text-sm min-h-[44px] transition ${
                      answered && correct
                        ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-100'
                        : answered && chosen
                        ? 'border-rose-400 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-100'
                        : chosen
                        ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/40'
                        : 'border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <span className="font-bold mr-2">{String.fromCharCode(65 + optionIndex)}.</span>
                    {option}
                  </button>
                )
              })}
            </div>
            {answered && (
              <div className="mt-3 rounded-lg bg-blue-50 dark:bg-blue-950/30 p-3 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                <strong>{selected === question.correctIndex ? 'Correct.' : 'Review this answer.'}</strong>{' '}
                {question.explanation}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

function JudgmentCard({
  judgment,
  bookmarked,
  onOpen,
  onToggleBookmark,
  onOpenTopic,
}: {
  judgment: Judgment
  bookmarked: boolean
  onOpen: () => void
  onToggleBookmark: () => void
  onOpenTopic?: (subjectSlug: string, topicId: string) => void
}) {
  return (
    <article className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 flex flex-col justify-between gap-5 hover:border-blue-400 transition-colors shadow-xs">
      <div>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
              {judgment.subject} · {judgment.year}
            </p>
            <h2 className="mt-1 text-lg font-bold leading-snug text-slate-950 dark:text-white">
              {judgment.caseName}
            </h2>
          </div>
          <button
            type="button"
            aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark judgment'}
            onClick={onToggleBookmark}
            className="rounded-xl border border-slate-200 dark:border-slate-700 p-2.5 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/40 min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            {bookmarked ? <BookmarkCheck className="w-5 h-5 text-amber-500" /> : <Bookmark className="w-5 h-5" />}
          </button>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {judgment.summary}
        </p>

        {/* 6.6: Connected topic provision chips */}
        {judgment.provisions && judgment.provisions.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {judgment.provisions.map((prov) => {
              const label = prov.article || prov.section || prov.provisionId
              if (prov.subjectSlug && prov.topicId && onOpenTopic) {
                return (
                  <button
                    key={prov.provisionId}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      onOpenTopic(prov.subjectSlug!, prov.topicId!)
                    }}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900/60 hover:bg-blue-100 transition min-h-[28px]"
                  >
                    <span>{label}</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                  </button>
                )
              }
              return (
                <span
                  key={prov.provisionId}
                  className="rounded-lg bg-slate-100 dark:bg-slate-800 px-2 py-1 text-[11px] font-medium text-slate-600 dark:text-slate-300"
                >
                  {label}
                </span>
              )
            })}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4">
        <span className="text-xs text-slate-500">{judgment.citation || 'Citation unavailable'}</span>
        <button
          type="button"
          onClick={onOpen}
          className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-blue-700 transition min-h-[44px]"
        >
          <span>Read Case Ratio</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </article>
  )
}

export function CaseLawLibrary({
  judgmentId,
  onOpenJudgment,
  onBackToLibrary,
  onOpenTopic,
}: {
  judgmentId?: string
  onOpenJudgment: (id: string) => void
  onBackToLibrary: () => void
  onOpenTopic?: (subjectSlug: string, topicId: string) => void
}) {
  const [bookmarks, setBookmarks] = useState<Set<string>>(() => readSet(BOOKMARKS_KEY))
  const [progress, setProgress] = useState<Record<string, string[]>>(() => readProgress())
  const [lastRead, setLastReadState] = useState<LastReadJudgment | null>(() => readLastRead())
  const [query, setQuery] = useState('')
  const [subject, setSubject] = useState('')
  const [topic, setTopic] = useState('')
  const [year, setYear] = useState('')
  const [bookmarkedOnly, setBookmarkedOnly] = useState(false)
  const [jumpTo, setJumpTo] = useState('overview')

  useEffect(() => {
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify([...bookmarks]))
  }, [bookmarks])

  useEffect(() => {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress))
  }, [progress])

  const toggleBookmark = (id: string) =>
    setBookmarks((current) => {
      const next = new Set(current)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  const current = judgmentId ? JUDGMENTS_BY_ID.get(judgmentId) : undefined

  // Save last read whenever reading a judgment
  useEffect(() => {
    if (judgmentId && current) {
      const entry: LastReadJudgment = {
        judgmentId,
        sectionId: jumpTo,
        updatedAt: new Date().toISOString(),
      }
      localStorage.setItem(LAST_READ_KEY, JSON.stringify(entry))
      setLastReadState(entry)
    }
  }, [judgmentId, current, jumpTo])

  if (judgmentId && current) {
    return (
      <JudgmentReader
        judgment={current}
        bookmarks={bookmarks}
        progress={progress}
        jumpTo={jumpTo}
        setJumpTo={setJumpTo}
        onBack={onBackToLibrary}
        onToggleBookmark={() => toggleBookmark(current.id)}
        onMarkSection={(section) =>
          setProgress((all) => {
            const completed = new Set(all[current.id] || [])
            completed.add(section)
            return { ...all, [current.id]: [...completed] }
          })
        }
        onOpenJudgment={onOpenJudgment}
        onOpenTopic={onOpenTopic}
      />
    )
  }

  if (judgmentId && !current) {
    return (
      <div className="py-16 text-center">
        <p className="font-semibold">Judgment not found in pilot library.</p>
        <button
          type="button"
          onClick={onBackToLibrary}
          className="mt-3 text-sm font-semibold text-blue-600 hover:underline min-h-[44px] px-4 py-2"
        >
          Back to Case Law Library
        </button>
      </div>
    )
  }

  const results = filterJudgments(
    searchJudgments(ALL_JUDGMENTS, query),
    { subject: subject || undefined, topic: topic || undefined, year: year ? Number(year) : undefined, bookmarkedOnly },
    bookmarks
  )

  const reset = () => {
    setQuery('')
    setSubject('')
    setTopic('')
    setYear('')
    setBookmarkedOnly(false)
  }

  const lastReadJudgment = lastRead ? JUDGMENTS_BY_ID.get(lastRead.judgmentId) : undefined

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/70 dark:bg-blue-950/25 p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
          <div>
            <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
              <Library className="w-4 h-4" /> Verified Case Law Library
            </div>
            <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white">
              Extracted Judicial Ratios & Constitutional Authorities
            </h1>
            <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
              Senior Counsel standard ratio deconstructions, facts, procedural arguments, and statutory linkages. 100% client-side privacy.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 dark:text-blue-300">
            <ShieldCheck className="w-4 h-4" /> Client-side study library
          </div>
        </div>
      </div>

      {/* 6.7: Continue Reading banner */}
      {lastReadJudgment && (
        <div className="rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-white dark:bg-slate-900 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 flex items-center justify-center text-blue-600 flex-shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
                Continue Reading
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
                {lastReadJudgment.caseName}
              </h3>
              {lastRead?.sectionId && (
                <span className="text-xs text-slate-500">
                  Last viewed section: {sectionLabels[lastRead.sectionId] || lastRead.sectionId}
                </span>
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={() => onOpenJudgment(lastReadJudgment.id)}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold transition min-h-[44px]"
          >
            <span>Resume Brief</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Search and Filters */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5 space-y-4 shadow-xs">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search case name, citation, provision (e.g. Article 21, Section 173) or topic"
            className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent py-3 pl-10 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[44px]"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 p-1 min-h-[32px]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          <select
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2.5 text-sm min-h-[44px]"
          >
            <option value="">All subjects</option>
            {getJudgmentSubjects(ALL_JUDGMENTS).map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <select
            value={topic}
            onChange={(event) => setTopic(event.target.value)}
            className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2.5 text-sm min-h-[44px]"
          >
            <option value="">All topics</option>
            {getJudgmentTopics(ALL_JUDGMENTS).map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <select
            value={year}
            onChange={(event) => setYear(event.target.value)}
            className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2.5 text-sm min-h-[44px]"
          >
            <option value="">All years</option>
            {getJudgmentYears(ALL_JUDGMENTS).map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <button
            type="button"
            onClick={() => setBookmarkedOnly((value) => !value)}
            className={`inline-flex items-center justify-center gap-2 rounded-xl border p-2.5 text-sm font-semibold min-h-[44px] ${
              bookmarkedOnly
                ? 'border-blue-600 bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300'
                : 'border-slate-200 dark:border-slate-700'
            }`}
          >
            <Bookmark className="w-4 h-4" />
            <span>Bookmarked only</span>
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 pt-1">
          <span className="inline-flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5" /> {results.length} landmark judgment
            {results.length === 1 ? '' : 's'} available
          </span>
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-1.5 font-semibold text-blue-600 hover:underline min-h-[36px]"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset filters</span>
          </button>
        </div>
      </div>

      {/* Judgment Cards Grid */}
      {results.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {results.map((judgment) => (
            <JudgmentCard
              key={judgment.id}
              judgment={judgment}
              bookmarked={bookmarks.has(judgment.id)}
              onOpen={() => onOpenJudgment(judgment.id)}
              onToggleBookmark={() => toggleBookmark(judgment.id)}
              onOpenTopic={onOpenTopic}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 p-12 text-center">
          <Search className="mx-auto w-8 h-8 text-slate-400" />
          <p className="mt-3 font-semibold">No judgments found.</p>
          <p className="mt-1 text-sm text-slate-500">Try another case name, topic, section or keyword.</p>
        </div>
      )}
    </div>
  )
}

function JudgmentReader({
  judgment,
  bookmarks,
  progress,
  jumpTo,
  setJumpTo,
  onBack,
  onToggleBookmark,
  onMarkSection,
  onOpenJudgment,
  onOpenTopic,
}: {
  judgment: Judgment
  bookmarks: Set<string>
  progress: Record<string, string[]>
  jumpTo: string
  setJumpTo: (value: string) => void
  onBack: () => void
  onToggleBookmark: () => void
  onMarkSection: (section: string) => void
  onOpenJudgment: (id: string) => void
  onOpenTopic?: (subjectSlug: string, topicId: string) => void
}) {
  const completed = new Set(progress[judgment.id] || [])
  const percent = Math.round((completed.size / sections.length) * 100)
  const scrollToSection = (section: string) => {
    setJumpTo(section)
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const markCurrentRead = () => onMarkSection(jumpTo)

  return (
    <div className="space-y-5">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline min-h-[44px]"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Case Law Library
      </button>

      {/* Judgment Header */}
      <header className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {judgment.subject} · {judgment.year} · {judgment.status}
            </p>
            <h1 className="mt-2 max-w-4xl text-3xl sm:text-4xl font-extrabold leading-tight text-slate-950 dark:text-white">
              {judgment.caseName}
            </h1>
            <p className="mt-3 text-sm text-slate-500">
              {judgment.citation || 'Citation unavailable'} · {judgment.court || 'Court unavailable'}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {judgment.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg bg-blue-50 dark:bg-blue-950/40 px-2.5 py-1 text-xs font-medium text-blue-700 dark:text-blue-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={onToggleBookmark}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 px-3.5 py-2 text-xs font-semibold min-h-[44px]"
            >
              {bookmarks.has(judgment.id) ? (
                <BookmarkCheck className="w-4 h-4 text-blue-600" />
              ) : (
                <Bookmark className="w-4 h-4" />
              )}
              <span>{bookmarks.has(judgment.id) ? 'Bookmarked' : 'Bookmark'}</span>
            </button>
            <button
              type="button"
              onClick={markCurrentRead}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 px-3.5 py-2 text-xs font-semibold text-white min-h-[44px]"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Mark section read</span>
            </button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs pt-4 border-t border-slate-100 dark:border-slate-800">
          <div>
            <span className="block text-slate-500">Court</span>
            <strong>{judgment.court || 'Unavailable'}</strong>
          </div>
          <div>
            <span className="block text-slate-500">Bench</span>
            <strong>{judgment.bench || 'Unavailable'}</strong>
          </div>
          <div>
            <span className="block text-slate-500">Progress</span>
            <strong>{percent}% complete</strong>
          </div>
          <div>
            <span className="block text-slate-500">Source</span>
            <strong>{judgment.source.verified ? 'Verified record' : 'Review pending'}</strong>
          </div>
        </div>
      </header>

      {/* Sticky Section Navigation */}
      <div className="sticky top-[4.5rem] z-30 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur p-3 shadow-xs">
        <div className="flex flex-col sm:flex-row gap-2">
          <label className="sr-only" htmlFor="judgment-section">
            Jump to section
          </label>
          <div className="relative flex-1">
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <select
              id="judgment-section"
              value={jumpTo}
              onChange={(event) => scrollToSection(event.target.value)}
              className="w-full appearance-none rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-2.5 text-sm min-h-[44px]"
            >
              <option value="">Jump to section</option>
              {sections.map((section) => (
                <option key={section} value={section}>
                  {sectionLabels[section]} {completed.has(section) ? '✓' : ''}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-28 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
              <div
                className="h-full rounded-full bg-blue-600 transition-all duration-300"
                style={{ width: `${percent}%` }}
              />
            </div>
            <span className="text-xs font-semibold text-slate-500">{percent}%</span>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_260px] gap-6">
        <main className="space-y-6">
          <Panel title="Case Overview" id="overview">
            <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
              {judgment.summary}
            </p>
            <p className="mt-4 text-xs text-slate-500">
              Study status: {judgment.status}. Authoritative extracted legal brief for academic and courtroom chamber reference.
            </p>
          </Panel>

          <Panel title="Material Facts" id="facts">
            <BulletList items={judgment.facts} />
          </Panel>

          <Panel title="Substantial Questions of Law & Issues" id="issues">
            <ol className="space-y-3 list-decimal list-inside text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
              {judgment.issues.map((issue) => (
                <li key={issue}>{issue}</li>
              ))}
            </ol>
          </Panel>

          {/* 6.5: Connected Provisions Panel */}
          <Panel title="Relevant Statutory & Constitutional Provisions" id="provisions">
            <div className="grid gap-3.5 sm:grid-cols-2">
              {judgment.provisions.map((provision) => (
                <div
                  key={provision.provisionId}
                  className="rounded-xl border border-slate-200 dark:border-slate-700 p-4 space-y-2 bg-slate-50/40 dark:bg-slate-800/30"
                >
                  <p className="text-xs font-bold text-blue-600 dark:text-blue-400">
                    {provision.article || provision.section || provision.provisionId}
                  </p>
                  <p className="font-semibold text-sm text-slate-900 dark:text-slate-100">
                    {provision.title || provision.actName}
                  </p>
                  <p className="text-xs text-slate-500">{provision.actName}</p>

                  {provision.subjectSlug && provision.topicId && onOpenTopic && (
                    <button
                      type="button"
                      onClick={() => onOpenTopic(provision.subjectSlug!, provision.topicId!)}
                      className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 dark:text-blue-300 hover:underline min-h-[32px] px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/60"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Open Study Treatise ({provision.topicId})</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </Panel>

          <Panel title="Rival Submissions & Arguments" id="arguments">
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                ['Appellant / Petitioner Submissions', judgment.arguments?.appellant],
                ['Respondent / State Submissions', judgment.arguments?.respondent],
              ].map(([label, items]) => (
                <div key={label as string} className="space-y-2">
                  <h3 className="font-bold text-sm text-blue-700 dark:text-blue-300">
                    {label as string}
                  </h3>
                  {items?.length ? (
                    <BulletList items={items as string[]} />
                  ) : (
                    <p className="text-sm text-slate-500">
                      Arguments were not separately distinguished in the primary report.
                    </p>
                  )}
                </div>
              ))}
            </div>
          </Panel>

          <Panel title="Judicial Reasoning & Statutory Construction" id="reasoning">
            <div className="space-y-5">
              {judgment.reasoning.map((item, index) => (
                <div key={item.heading} className="flex gap-4 items-start">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white mt-0.5">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">
                      {item.heading}
                    </h3>
                    <p className="mt-1.5 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                      {item.explanation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Panel>

          <Panel title="Final Decision & Orders" id="decision">
            <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
              {judgment.decision}
            </p>
            {judgment.holding && (
              <div className="mt-5 rounded-xl bg-slate-50 dark:bg-slate-950/60 p-4 border border-slate-200 dark:border-slate-800">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Judicial Holding
                </p>
                <p className="mt-2 text-sm leading-relaxed font-semibold text-slate-900 dark:text-slate-100">
                  {judgment.holding}
                </p>
              </div>
            )}
          </Panel>

          <Panel title="Ratio Decidendi" id="ratio" accent>
            <div className="flex gap-3 items-start">
              <Target className="w-5 h-5 shrink-0 text-blue-600 mt-1" />
              <div>
                <p className="text-base sm:text-lg font-bold leading-relaxed text-blue-950 dark:text-blue-100">
                  {judgment.ratioDecidendi || 'No separate ratio was identified in the source.'}
                </p>
              </div>
            </div>
          </Panel>

          <Panel title="Obiter Dicta & Observations" id="obiter">
            <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
              {judgment.obiterDicta || 'No separate obiter dicta recorded for this judgment.'}
            </p>
          </Panel>

          <Panel title="AIBE & Judicial Services Exam Points" id="exam-points">
            <BulletList items={judgment.examPoints || []} />
          </Panel>

          <Panel title="Practice MCQs" id="mcqs">
            <McqBlock questions={judgment.mcqs || []} />
          </Panel>

          <Panel title="Original Judgment Source" id="original">
            <div className="mb-4 flex items-center gap-2 text-xs font-semibold text-slate-500">
              <FileText className="w-4 h-4" /> Original source document, clearly separated from study notes
            </div>
            <OriginalJudgmentViewer judgment={judgment} />
          </Panel>
        </main>

        {/* Sidebar */}
        <aside className="hidden xl:block space-y-4">
          <div className="sticky top-28 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-xs">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              On this page
            </p>
            <nav className="mt-3 space-y-1">
              {sections.map((section) => (
                <button
                  key={section}
                  type="button"
                  onClick={() => scrollToSection(section)}
                  className={`w-full rounded-lg px-2.5 py-2 text-left text-xs transition ${
                    jumpTo === section
                      ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300 font-bold'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {completed.has(section) ? '✓ ' : ''}
                  {sectionLabels[section]}
                </button>
              ))}
            </nav>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-xs">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Related Precedents
            </p>
            <div className="mt-3 space-y-3">
              {(judgment.relatedCases || []).map((related) => (
                <div key={related.caseName} className="text-xs space-y-1">
                  <p className="font-semibold text-slate-900 dark:text-slate-100">
                    {related.caseName}
                  </p>
                  <p className="text-slate-500">
                    {related.relationship || 'Related reference'}
                    {related.citation ? ` · ${related.citation}` : ''}
                  </p>
                  {related.judgmentId && JUDGMENTS_BY_ID.has(related.judgmentId) && (
                    <button
                      type="button"
                      onClick={() => onOpenJudgment(related.judgmentId!)}
                      className="inline-flex items-center gap-1 font-bold text-blue-600 hover:underline min-h-[28px]"
                    >
                      <span>Read landmark brief</span>
                      <Link2 className="w-3 h-3" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Footer Navigation */}
      <div className="flex items-center justify-between border-t border-slate-200 dark:border-slate-800 pt-5">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Case Law Library
        </button>
        <button
          type="button"
          onClick={() => scrollToSection('mcqs')}
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-blue-700 min-h-[44px]"
        >
          <span>Take practice MCQs</span>
          <Sparkles className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
