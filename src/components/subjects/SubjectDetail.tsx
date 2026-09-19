import { useMemo, useState } from 'react'
import {
  ArrowLeft,
  ChevronRight,
  Sparkles,
  Scale,
} from 'lucide-react'
import type { LawSubjectMeta, LawTopic } from '../../data/subjects'
import { getSubjectIntro } from '../../data/subjectIntros'
import { CATALOG_SLUGS } from './catalogSlugs'

interface SubjectDetailProps {
  subject: LawSubjectMeta
  onBack: () => void
  onSelectTopic: (topic: LawTopic) => void
  searchQuery: string
  onSearchChange: (q: string) => void
}

export function SubjectDetail({
  subject,
  onBack,
  onSelectTopic,
  searchQuery,
  onSearchChange,
}: SubjectDetailProps) {
  const intro = getSubjectIntro(subject.slug)
  const q = searchQuery.trim().toLowerCase()
  const topics = q
    ? subject.topics.filter((t) => [t.name, t.range ?? '', t.note ?? '', ...(t.keywords ?? [])].join(' ').toLowerCase().includes(q))
    : subject.topics

  const isCatalog = CATALOG_SLUGS.has(subject.slug)
  const articleTopics = topics.filter((t) => t.type === 'article')
  const sectionTopics = topics.filter((t) => t.type === 'section')
  const orderTopics = topics.filter((t) => t.type === 'chapter' && t.id.startsWith('o-'))
  const showArticleGroups = subject.slug === 'constitution' && articleTopics.length > 0
  const showSectionGroups = isCatalog && subject.slug !== 'constitution' && sectionTopics.length > 0
  const showOrderGroups = subject.slug === 'cpc' && orderTopics.length > 0 && !q
  const groupedProvision = (showArticleGroups || showSectionGroups) && !q
  const provisionTopics = showArticleGroups ? articleTopics : sectionTopics
  const themeTopics = topics.filter((t) => t.type !== 'article' && t.type !== 'section' && !(t.type === 'chapter' && t.id.startsWith('o-')))
  const highYieldThemes = themeTopics.filter((t) => t.highYield)
  const otherThemes = themeTopics.filter((t) => !t.highYield)
  const articleClusters = showArticleGroups ? groupByCluster(articleTopics, 'Other articles') : []
  const sectionClusters = showSectionGroups ? groupByCluster(sectionTopics, 'Other sections') : []
  const orderClusters = showOrderGroups ? groupByCluster(orderTopics, 'Other orders') : []
  const rest = topics.filter((t) => !t.highYield)

  const [jump, setJump] = useState('')
  const jumpHint = useMemo(() => {
    if (subject.slug === 'constitution') return 'Jump to article (e.g. 21)'
    if (subject.slug === 'cpc') return 'Jump to section or order (e.g. 11 or 21)'
    if (isCatalog) return 'Jump to section (e.g. 107)'
    return `Filter ${subject.shortName}`
  }, [subject.slug, subject.shortName, isCatalog])

  function handleJump(raw: string) {
    const value = raw.trim().toLowerCase().replace(/^(art(icle)?|s(ection)?|o(rder)?)\.?\s*/i, '')
    if (!value) return
    const wanted =
      subject.slug === 'constitution'
        ? subject.topics.find((t) => t.id === `art-${value}` || t.id === `art-${value.replace(/^0+/, '')}`)
        : subject.topics.find((t) => t.id === `s-${value}` || t.id === `o-${value}` || t.id === `s-${value.replace(/^0+/, '')}` || t.id === `o-${value.replace(/^0+/, '')}`)
    if (wanted) onSelectTopic(wanted)
    else onSearchChange(raw.trim())
  }

  return (
    <div className="space-y-8 max-w-6xl">
      <div className="space-y-4">
        <button type="button" onClick={onBack} className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline">
          <ArrowLeft className="w-3.5 h-3.5" /> All subjects
        </button>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Scale className="w-3.5 h-3.5 text-blue-600" />
            <span className="uppercase tracking-wide font-semibold">{subject.priority} priority · ~{subject.aibeQuestions} AIBE questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">{subject.name}</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl">{subject.description}</p>
          {intro && (
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-4 space-y-2">
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">{intro.act} · {intro.inForce}</p>
              <p className="text-xs text-slate-500">{intro.counts}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">{intro.body}</p>
              <p className="text-xs text-slate-500">{intro.howTo}</p>
            </div>
          )}
          {subject.bareActs.length > 0 && (
            <p className="text-xs text-slate-500"><span className="font-semibold text-slate-700 dark:text-slate-300">Bare Acts: </span>{subject.bareActs.join(' · ')}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <input type="search" value={searchQuery} onChange={(e) => onSearchChange(e.target.value)} placeholder={`Filter topics in ${subject.shortName}...`} className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        {isCatalog && (
          <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); handleJump(jump || searchQuery) }}>
            <input value={jump} onChange={(e) => setJump(e.target.value)} placeholder={jumpHint} className="w-48 px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button type="submit" className="px-3 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700">Open</button>
          </form>
        )}
      </div>

      {highYieldThemes.length > 0 && (
        <section className="space-y-3">
          <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-amber-500" /> Exam essays</h3>
          <TopicList topics={highYieldThemes} onSelectTopic={onSelectTopic} />
        </section>
      )}

      {groupedProvision && otherThemes.length > 0 && (
        <section className="space-y-3">
          <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">More study themes</h3>
          <TopicList topics={otherThemes} onSelectTopic={onSelectTopic} />
        </section>
      )}

      {showArticleGroups && (
        <section className="space-y-5">
          <CatalogHeading title={`All articles (${articleTopics.length})`} subtitle="Click any article for the study page. Official 2024 Legislative Department text." />
          {articleClusters.map((group) => (
            <ChapterBlock key={group.name} name={group.name} topics={group.topics} onSelectTopic={onSelectTopic} compact />
          ))}
        </section>
      )}

      {showSectionGroups && (
        <section className="space-y-5">
          <CatalogHeading title={`All sections (${sectionTopics.length})`} subtitle="Click any section for the study page. CPC 1908 is still in force." />
          {sectionClusters.map((group) => (
            <ChapterBlock key={group.name} name={group.name} topics={group.topics} onSelectTopic={onSelectTopic} compact />
          ))}
        </section>
      )}

      {showOrderGroups && (
        <section className="space-y-5">
          <CatalogHeading title={`All Orders (${orderTopics.length})`} subtitle="First Schedule Orders I–LI. Click an Order for the study page." />
          {orderClusters.map((group) => (
            <ChapterBlock key={group.name} name={group.name} topics={group.topics} onSelectTopic={onSelectTopic} compact />
          ))}
        </section>
      )}

      {q && provisionTopics.length > 0 && (
        <section className="space-y-3">
          <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">Matching provisions ({provisionTopics.length})</h3>
          <CompactProvisionList topics={provisionTopics} onSelectTopic={onSelectTopic} />
        </section>
      )}

      {!isCatalog && rest.length > 0 && (
        <section className="space-y-3">
          <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">All topics</h3>
          <TopicList topics={highYieldThemes.length && !q ? rest : topics.filter((t) => !t.highYield || q)} onSelectTopic={onSelectTopic} />
        </section>
      )}

      {topics.length === 0 && (
        <div className="rounded-2xl border border-dashed border-slate-200 dark:border-slate-700 p-8 text-center text-sm text-slate-500">No topics match this filter.</div>
      )}
    </div>
  )
}

function CatalogHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">{title}</h3>
      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{subtitle}</p>
    </div>
  )
}

function ChapterBlock({ name, topics, onSelectTopic, compact }: { name: string; topics: LawTopic[]; onSelectTopic: (topic: LawTopic) => void; compact?: boolean }) {
  return (
    <div className="space-y-2">
      <h4 className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">{name}<span className="text-slate-400 font-normal"> · {topics.length}</span></h4>
      {compact ? <CompactProvisionList topics={topics} onSelectTopic={onSelectTopic} /> : <TopicList topics={topics} onSelectTopic={onSelectTopic} />}
    </div>
  )
}

function articleSortKey(id: string): [number, string] {
  const match = id.match(/^(?:art|s|o)-(\d+)([a-z]*)$/i)
  if (!match) return [9999, id]
  return [Number(match[1]), match[2]]
}

function groupByCluster(topics: LawTopic[], fallback = 'Other'): { name: string; topics: LawTopic[] }[] {
  const order: string[] = []
  const map = new Map<string, LawTopic[]>()
  for (const topic of topics) {
    const name = topic.cluster || fallback
    if (!map.has(name)) { map.set(name, []); order.push(name) }
    map.get(name)!.push(topic)
  }
  return order.map((name) => ({
    name,
    topics: map.get(name)!.slice().sort((a, b) => {
      const [an, as] = articleSortKey(a.id)
      const [bn, bs] = articleSortKey(b.id)
      return an - bn || as.localeCompare(bs) || a.id.localeCompare(b.id)
    }),
  }))
}

function CompactProvisionList({ topics, onSelectTopic }: { topics: LawTopic[]; onSelectTopic: (topic: LawTopic) => void }) {
  return (
    <ul className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 divide-y divide-slate-100 dark:divide-slate-800 overflow-hidden">
      {topics.map((t) => {
        const num = t.range ?? t.id
        return (
          <li key={t.id}>
            <button type="button" onClick={() => onSelectTopic(t)} className="w-full text-left px-3 py-2.5 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
              <span className="shrink-0 w-16 text-xs font-bold tabular-nums text-blue-700 dark:text-blue-300">{num}</span>
              <span className="min-w-0 flex-1 text-sm text-slate-900 dark:text-white truncate">{t.name.replace(/^((Article|Section|Order)\s+[\w.-]+ \u2014 )/, '')}</span>
              <ChevronRight className="w-4 h-4 text-slate-300 dark:text-slate-600 shrink-0" />
            </button>
          </li>
        )
      })}
    </ul>
  )
}

function TopicList({ topics, onSelectTopic }: { topics: LawTopic[]; onSelectTopic: (topic: LawTopic) => void }) {
  return (
    <ul className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 divide-y divide-slate-100 dark:divide-slate-800 overflow-hidden">
      {topics.map((t) => (
        <li key={t.id}>
          <button type="button" onClick={() => onSelectTopic(t)} className="w-full text-left px-4 py-3.5 flex items-start justify-between gap-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
            <div className="min-w-0 space-y-0.5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-medium text-sm text-slate-900 dark:text-white">{t.name}</span>
                {t.highYield && <span className="text-[10px] font-semibold text-amber-600">High yield</span>}
              </div>
              {t.range && <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">{t.range}</p>}
              {t.note && <p className="text-xs text-slate-500">{t.note}</p>}
            </div>
            <ChevronRight className="w-4 h-4 text-slate-300 dark:text-slate-600 shrink-0 mt-0.5" />
          </button>
        </li>
      ))}
    </ul>
  )
}
