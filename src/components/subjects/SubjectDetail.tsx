import {
  ArrowLeft,
  BookOpen,
  ChevronRight,
  Sparkles,
  Scale,
} from 'lucide-react'
import type { LawSubjectMeta, LawTopic } from '../../data/subjects'

interface SubjectDetailProps {
  subject: LawSubjectMeta
  onBack: () => void
  onQuickPractice: () => void
  searchQuery: string
  onSearchChange: (q: string) => void
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
    default:
      return 'Theme'
  }
}

export function SubjectDetail({
  subject,
  onBack,
  onQuickPractice,
  searchQuery,
  onSearchChange,
}: SubjectDetailProps) {
  const q = searchQuery.trim().toLowerCase()
  const topics = q
    ? subject.topics.filter((t) => {
        const hay = [t.name, t.range ?? '', t.note ?? '', ...(t.keywords ?? [])]
          .join(' ')
          .toLowerCase()
        return hay.includes(q)
      })
    : subject.topics

  const highYield = topics.filter((t) => t.highYield)
  const rest = topics.filter((t) => !t.highYield)

  return (
    <div className="space-y-8 max-w-4xl">
      <div className="space-y-4">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          All subjects
        </button>

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Scale className="w-3.5 h-3.5 text-blue-600" />
              <span className="uppercase tracking-wide font-semibold">
                {subject.priority} priority · ~{subject.aibeQuestions} AIBE questions
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              {subject.name}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
              {subject.description}
            </p>
            {subject.bareActs.length > 0 && (
              <p className="text-xs text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-slate-700 dark:text-slate-300">Bare Acts: </span>
                {subject.bareActs.join(' · ')}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={onQuickPractice}
            className="shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition shadow-sm"
          >
            <BookOpen className="w-4 h-4" />
            Quick practice
          </button>
        </div>
      </div>

      <div className="relative">
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={`Filter topics in ${subject.shortName}...`}
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {highYield.length > 0 && (
        <section className="space-y-3">
          <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-500" />
            High-yield topics
          </h3>
          <TopicList topics={highYield} />
        </section>
      )}

      {rest.length > 0 && (
        <section className="space-y-3">
          <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
            All topics ({rest.length + (highYield.length && q ? 0 : 0)})
          </h3>
          <TopicList topics={highYield.length && !q ? rest : topics.filter((t) => !t.highYield || q)} />
        </section>
      )}

      {topics.length === 0 && (
        <div className="rounded-2xl border border-dashed border-slate-200 dark:border-slate-700 p-8 text-center text-sm text-slate-500">
          No topics match this filter. Clear search or check back as content is added.
        </div>
      )}

      {subject.topics.length > 0 && topics.length > 0 && (
        <p className="text-xs text-slate-400">
          Topics are the study map. MCQ content is filled subject by subject — Quick practice uses the current bank when available.
        </p>
      )}
    </div>
  )
}

function TopicList({ topics }: { topics: LawTopic[] }) {
  return (
    <ul className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 divide-y divide-slate-100 dark:divide-slate-800 overflow-hidden">
      {topics.map((t) => (
        <li
          key={t.id}
          className="px-4 py-3.5 flex items-start justify-between gap-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition"
        >
          <div className="min-w-0 space-y-0.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-medium text-sm text-slate-900 dark:text-white">{t.name}</span>
              <span className="text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">
                {topicTypeLabel(t.type)}
              </span>
              {t.highYield && (
                <span className="text-[10px] font-semibold text-amber-600 dark:text-amber-400">High yield</span>
              )}
            </div>
            {t.range && (
              <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">{t.range}</p>
            )}
            {t.note && <p className="text-xs text-slate-500 dark:text-slate-400">{t.note}</p>}
          </div>
          <ChevronRight className="w-4 h-4 text-slate-300 dark:text-slate-600 shrink-0 mt-0.5" />
        </li>
      ))}
    </ul>
  )
}
