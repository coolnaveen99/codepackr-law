import {
  ArrowLeft,
  ChevronRight,
  Sparkles,
  Scale,
} from 'lucide-react'
import type { LawSubjectMeta, LawTopic } from '../../data/subjects'

interface SubjectDetailProps {
  subject: LawSubjectMeta
  onBack: () => void
  onSelectTopic: (topic: LawTopic) => void
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
    case 'format':
      return 'Format'
    default:
      return 'Theme'
  }
}

export function SubjectDetail({
  subject,
  onBack,
  onSelectTopic,
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

  const articleTopics = topics.filter((t) => t.type === 'article')
  const showArticleGroups = subject.slug === 'constitution' && articleTopics.length > 0 && !q
  const highYield = topics.filter((t) => t.highYield && !(showArticleGroups && t.type === 'article'))
  const rest = topics.filter((t) => !t.highYield)
  const themeTopics = topics.filter((t) => t.type !== 'article')
  const articleClusters = showArticleGroups ? groupByCluster(articleTopics) : []


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
          <TopicList topics={highYield} onSelectTopic={onSelectTopic} />
        </section>
      )}

      {showArticleGroups && themeTopics.filter((t) => !t.highYield).length > 0 && (
        <section className="space-y-3">
          <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
            Study themes & doctrines
          </h3>
          <TopicList
            topics={themeTopics.filter((t) => !t.highYield)}
            onSelectTopic={onSelectTopic}
          />
        </section>
      )}

      {showArticleGroups && (
        <section className="space-y-5">
          <div>
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              Article-wise lessons ({articleTopics.length})
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Learn each article on its own page. Related doctrines and cases are reused from the knowledge graph — not copied.
            </p>
          </div>
          {articleClusters.map((group) => (
            <div key={group.name} className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
                {group.name}
              </h4>
              <TopicList topics={group.topics} onSelectTopic={onSelectTopic} />
            </div>
          ))}
        </section>
      )}

      {!showArticleGroups && rest.length > 0 && (
        <section className="space-y-3">
          <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
            All topics ({rest.length + (highYield.length && q ? 0 : 0)})
          </h3>
          <TopicList
            topics={highYield.length && !q ? rest : topics.filter((t) => !t.highYield || q)}
            onSelectTopic={onSelectTopic}
          />
        </section>
      )}

      {topics.length === 0 && (
        <div className="rounded-2xl border border-dashed border-slate-200 dark:border-slate-700 p-8 text-center text-sm text-slate-500">
          No topics match this filter. Clear search or check back as content is added.
        </div>
      )}

      {subject.topics.length > 0 && topics.length > 0 && (
        <p className="text-xs text-slate-400">
          Topics include doctrines and petition formats where relevant. Click any topic to open its
          complete Study Topic reader; testing remains separate in the MCQ tool.
        </p>
      )}
    </div>
  )
}

function groupByCluster(topics: LawTopic[]): { name: string; topics: LawTopic[] }[] {
  const order: string[] = []
  const map = new Map<string, LawTopic[]>()
  for (const topic of topics) {
    const name = topic.cluster || 'Other articles'
    if (!map.has(name)) {
      map.set(name, [])
      order.push(name)
    }
    map.get(name)!.push(topic)
  }
  return order.map((name) => ({ name, topics: map.get(name)! }))
}

function TopicList({
  topics,
  onSelectTopic,
}: {
  topics: LawTopic[]
  onSelectTopic: (topic: LawTopic) => void
}) {
  return (
    <ul className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 divide-y divide-slate-100 dark:divide-slate-800 overflow-hidden">
      {topics.map((t) => (
        <li key={t.id}>
          <button
            type="button"
            onClick={() => onSelectTopic(t)}
            className="w-full text-left px-4 py-3.5 flex items-start justify-between gap-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition"
          >
            <div className="min-w-0 space-y-0.5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-medium text-sm text-slate-900 dark:text-white">{t.name}</span>
                <span
                  className={`text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded ${
                    t.type === 'doctrine'
                      ? 'bg-violet-50 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300'
                      : t.type === 'format'
                        ? 'bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                  }`}
                >
                  {topicTypeLabel(t.type)}
                </span>
                {t.highYield && (
                  <span className="text-[10px] font-semibold text-amber-600 dark:text-amber-400">
                    High yield
                  </span>
                )}
              </div>
              {t.range && (
                <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">{t.range}</p>
              )}
              {t.note && <p className="text-xs text-slate-500 dark:text-slate-400">{t.note}</p>}
            </div>
            <ChevronRight className="w-4 h-4 text-slate-300 dark:text-slate-600 shrink-0 mt-0.5" />
          </button>
        </li>
      ))}
    </ul>
  )
}
