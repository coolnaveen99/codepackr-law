import { useMemo, useState } from 'react'
import {
  ArrowLeft,
  ChevronRight,
  Sparkles,
  Search,
  BookOpen,
  ArrowRight,
  Layers,
  Award,
  CheckCircle2,
  FileText,
  CornerDownRight,
} from 'lucide-react'
import type { LawSubjectMeta, LawTopic } from '../../data/subjects'
import { getSubjectIntro } from '../../data/subjectIntros'
import { CATALOG_SLUGS } from './catalogSlugs'
import { SubjectGlyph } from '../icons'

interface SubjectDetailProps {
  subject: LawSubjectMeta
  onBack: () => void
  onSelectTopic: (topic: LawTopic) => void
  searchQuery: string
  onSearchChange: (q: string) => void
}

type FilterView = 'all' | 'high-yield' | 'catalog'

export function SubjectDetail({
  subject,
  onBack,
  onSelectTopic,
  searchQuery,
  onSearchChange,
}: SubjectDetailProps) {
  const intro = getSubjectIntro(subject.slug)
  const q = searchQuery.trim().toLowerCase()
  const [filterView, setFilterView] = useState<FilterView>('all')
  const [jump, setJump] = useState('')

  // Filter topics based on search query
  const allFilteredTopics = useMemo(() => {
    if (!q) return subject.topics
    return subject.topics.filter((t) =>
      [t.name, t.range ?? '', t.note ?? '', t.cluster ?? '', ...(t.keywords ?? [])]
        .join(' ')
        .toLowerCase()
        .includes(q),
    )
  }, [subject.topics, q])

  // Split topics into provision kinds
  const isCatalog = CATALOG_SLUGS.has(subject.slug)
  const articleTopics = useMemo(
    () => allFilteredTopics.filter((t) => t.type === 'article'),
    [allFilteredTopics],
  )
  const sectionTopics = useMemo(
    () => allFilteredTopics.filter((t) => t.type === 'section'),
    [allFilteredTopics],
  )
  const orderTopics = useMemo(
    () => allFilteredTopics.filter((t) => t.type === 'chapter' && t.id.startsWith('o-')),
    [allFilteredTopics],
  )

  const showArticleGroups = subject.slug === 'constitution' && articleTopics.length > 0
  const showSectionGroups = isCatalog && subject.slug !== 'constitution' && sectionTopics.length > 0
  const showOrderGroups = subject.slug === 'cpc' && orderTopics.length > 0 && !q

  const themeTopics = useMemo(
    () =>
      allFilteredTopics.filter(
        (t) =>
          t.type !== 'article' &&
          t.type !== 'section' &&
          !(t.type === 'chapter' && t.id.startsWith('o-')),
      ),
    [allFilteredTopics],
  )

  const highYieldThemes = useMemo(
    () => themeTopics.filter((t) => t.highYield),
    [themeTopics],
  )
  const otherThemes = useMemo(
    () => themeTopics.filter((t) => !t.highYield),
    [themeTopics],
  )

  const articleClusters = useMemo(
    () => (showArticleGroups ? groupByCluster(articleTopics, 'Other Articles') : []),
    [showArticleGroups, articleTopics],
  )
  const sectionClusters = useMemo(
    () => (showSectionGroups ? groupByCluster(sectionTopics, 'Other Sections') : []),
    [showSectionGroups, sectionTopics],
  )
  const orderClusters = useMemo(
    () => (showOrderGroups ? groupByCluster(orderTopics, 'Other Orders') : []),
    [showOrderGroups, orderTopics],
  )

  // Non-catalog cluster grouping (e.g. Torts, Contract, Family)
  const nonCatalogClusters = useMemo(() => {
    if (isCatalog) return []
    return groupByCluster(allFilteredTopics, 'General Curricular Headings')
  }, [isCatalog, allFilteredTopics])

  const totalHighYieldCount = useMemo(
    () => subject.topics.filter((t) => t.highYield).length,
    [subject.topics],
  )

  const jumpHint = useMemo(() => {
    if (subject.slug === 'constitution') return 'Jump to Art (e.g. 21, 32, 226)'
    if (subject.slug === 'cpc') return 'Jump to Sec/Order (e.g. 11, 39)'
    if (isCatalog) return 'Jump to Section (e.g. 103, 480)'
    return `Jump to topic in ${subject.shortName}`
  }, [subject.slug, subject.shortName, isCatalog])

  function handleJump(raw: string) {
    const value = raw.trim().toLowerCase().replace(/^(art(icle)?|s(ection)?|o(rder)?)\.?\s*/i, '')
    if (!value) return
    const wanted =
      subject.slug === 'constitution'
        ? subject.topics.find(
            (t) => t.id === `art-${value}` || t.id === `art-${value.replace(/^0+/, '')}`,
          )
        : subject.topics.find(
            (t) =>
              t.id === `s-${value}` ||
              t.id === `o-${value}` ||
              t.id === `s-${value.replace(/^0+/, '')}` ||
              t.id === `o-${value.replace(/^0+/, '')}`,
          )
    if (wanted) {
      onSelectTopic(wanted)
    } else {
      onSearchChange(raw.trim())
    }
  }

  return (
    <div className="space-y-8 sm:space-y-10 max-w-6xl mx-auto pb-12">
      {/* 1. Top Navigation & Breadcrumbs */}
      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-300 hover:border-blue-400 transition-colors shadow-2xs"
        >
          <ArrowLeft className="w-4 h-4" /> All 20 Subjects
        </button>

        <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400">
          <span>Library</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span>Subjects</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="font-semibold text-slate-700 dark:text-slate-200">{subject.shortName}</span>
        </div>
      </div>

      {/* 2. Prestige Editorial Subject Hero */}
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 p-6 sm:p-8 space-y-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-5">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border-2 border-blue-200 dark:border-blue-900 flex items-center justify-center shrink-0 shadow-sm shadow-blue-600/10">
            <SubjectGlyph name={subject.icon} className="w-7 h-7 sm:w-8 sm:h-8" />
          </div>

          <div className="space-y-2 flex-1">
            {/* Badges Row */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
                <Award className="w-3.5 h-3.5" /> ~{subject.aibeQuestions} AIBE Questions
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                <BookOpen className="w-3.5 h-3.5 text-blue-600" /> {subject.topics.length} Provisions / Topics
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" /> 10M & 16M Live Models
              </span>
            </div>

            {/* Subject Title */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white tracking-tight leading-tight">
              {subject.name}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
              {subject.description}
            </p>
          </div>
        </div>

        {/* Statutory Authority Card */}
        {intro && (
          <div className="rounded-2xl border border-blue-100 dark:border-blue-950 bg-gradient-to-br from-blue-50/50 via-slate-50 to-white dark:from-blue-950/20 dark:via-slate-900/60 dark:to-slate-900/40 p-5 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-blue-200/60 dark:border-slate-800 pb-2.5">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-900 dark:text-blue-200">
                <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>{intro.act}</span>
                <span className="text-slate-400">·</span>
                <span className="text-slate-600 dark:text-slate-400 font-semibold">{intro.inForce}</span>
              </div>
              <span className="text-[11px] font-bold text-slate-500">{intro.counts}</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {intro.body}
            </p>

            {intro.howTo && (
              <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                {intro.howTo}
              </p>
            )}

            {subject.bareActs.length > 0 && (
              <div className="pt-2 flex items-center gap-1.5 flex-wrap">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Statutes:</span>
                {subject.bareActs.map((act) => (
                  <span
                    key={act}
                    className="text-[11px] px-2 py-0.5 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium"
                  >
                    {act}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </section>

      {/* 3. Unified Command Bar: Search, Quick-Jump & Filter Tabs */}
      <section className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-3">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={`Search in ${subject.shortName} by number, title, doctrine, or keywords...`}
              className="w-full h-12 pl-12 pr-12 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-700"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Jump Input */}
          {isCatalog && (
            <form
              className="flex items-center gap-2"
              onSubmit={(e) => {
                e.preventDefault()
                handleJump(jump || searchQuery)
              }}
            >
              <input
                value={jump}
                onChange={(e) => setJump(e.target.value)}
                placeholder={jumpHint}
                className="w-48 sm:w-56 h-12 px-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="h-12 px-5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors duration-150 shadow-xs"
              >
                Jump
              </button>
            </form>
          )}
        </div>

        {/* View Filter Pills & Match Counter */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
          <div className="flex items-center gap-1.5 flex-wrap">
            <button
              type="button"
              onClick={() => setFilterView('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-150 ${
                filterView === 'all'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-slate-300'
              }`}
            >
              All Provisions ({allFilteredTopics.length})
            </button>
            <button
              type="button"
              onClick={() => setFilterView('high-yield')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-150 flex items-center gap-1 ${
                filterView === 'high-yield'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-slate-300'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" /> High-Yield Focus ({totalHighYieldCount})
            </button>
            <button
              type="button"
              onClick={() => setFilterView('catalog')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-150 flex items-center gap-1 ${
                filterView === 'catalog'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-slate-300'
              }`}
            >
              <Layers className="w-3.5 h-3.5" /> Chapters & Clusters
            </button>
          </div>

          <span className="text-xs font-medium text-slate-500">
            Showing <strong className="text-slate-900 dark:text-white font-bold">{allFilteredTopics.length}</strong> of {subject.topics.length} topics
          </span>
        </div>
      </section>

      {/* 4. High-Yield Exam Essays & Treatises Grid */}
      {filterView !== 'catalog' && highYieldThemes.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-2.5">
            <div className="flex items-center gap-2 font-bold text-base text-slate-950 dark:text-white">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>High-Yield Landmark Doctrines & Exam Treatises</span>
            </div>
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
              {highYieldThemes.length} high-yield topics
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {highYieldThemes.map((topic) => (
              <button
                key={topic.id}
                type="button"
                onClick={() => onSelectTopic(topic)}
                className="group text-left p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 hover:border-blue-500/70 dark:hover:border-blue-500/70 transition-all duration-150 flex flex-col justify-between shadow-2xs hover:shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-100/70 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
                      ★ High Yield
                    </span>
                    {topic.range && (
                      <span className="text-[11px] font-bold text-blue-700 dark:text-blue-300 tabular-nums">
                        {topic.range}
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug mb-1">
                    {topic.name}
                  </h3>

                  {topic.note && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {topic.note}
                    </p>
                  )}
                </div>

                <div className="mt-3.5 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <span className="px-1.5 py-0.5 rounded-sm bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-slate-600 dark:text-slate-300">
                      10M & 16M
                    </span>
                    <span>IRAC Model</span>
                  </div>
                  <span className="text-blue-700 dark:text-blue-300 font-bold inline-flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                    Study <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* 5. Additional Study Themes (When not in catalog-only view) */}
      {filterView === 'all' && otherThemes.length > 0 && (
        <section className="space-y-4">
          <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider text-xs">
            Additional Syllabus Themes ({otherThemes.length})
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {otherThemes.map((topic) => (
              <button
                key={topic.id}
                type="button"
                onClick={() => onSelectTopic(topic)}
                className="group text-left p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 hover:border-blue-400 text-xs transition-all duration-150 flex items-center justify-between gap-3 shadow-2xs"
              >
                <div className="min-w-0">
                  <div className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 truncate">
                    {topic.name}
                  </div>
                  {topic.range && <p className="text-slate-400 mt-0.5">{topic.range}</p>}
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 shrink-0" />
              </button>
            ))}
          </div>
        </section>
      )}

      {/* 6. Granular Provision Catalog (Articles / Sections / Orders / Clusters) */}
      {filterView !== 'high-yield' && (
        <div className="space-y-8">
          {/* A. Constitutional Articles by Part/Cluster */}
          {showArticleGroups && (
            <section className="space-y-6">
              <CatalogHeading
                title={`All Articles of the Constitution (${articleTopics.length})`}
                subtitle="Official 2024 Legislative Department text with 10M/16M exam answers on every article."
              />
              {articleClusters.map((group) => (
                <ChapterBlock
                  key={group.name}
                  name={group.name}
                  topics={group.topics}
                  onSelectTopic={onSelectTopic}
                />
              ))}
            </section>
          )}

          {/* B. Numbered Sections by Chapter (BNS, BNSS, BSA, CPC) */}
          {showSectionGroups && (
            <section className="space-y-6">
              <CatalogHeading
                title={`All Statutory Sections (${sectionTopics.length})`}
                subtitle={`Complete numbered catalog under ${subject.bareActs[0] || subject.name}.`}
              />
              {sectionClusters.map((group) => (
                <ChapterBlock
                  key={group.name}
                  name={group.name}
                  topics={group.topics}
                  onSelectTopic={onSelectTopic}
                />
              ))}
            </section>
          )}

          {/* C. First Schedule Orders (CPC) */}
          {showOrderGroups && (
            <section className="space-y-6">
              <CatalogHeading
                title={`First Schedule Orders I–LI (${orderTopics.length} Orders)`}
                subtitle="Civil trial, pleading, interim injunction, and execution procedure."
              />
              {orderClusters.map((group) => (
                <ChapterBlock
                  key={group.name}
                  name={group.name}
                  topics={group.topics}
                  onSelectTopic={onSelectTopic}
                />
              ))}
            </section>
          )}

          {/* D. Non-Catalog Clustered Subjects (Torts, Contract, Family, ADR, etc.) */}
          {!isCatalog && nonCatalogClusters.length > 0 && (
            <section className="space-y-6">
              <CatalogHeading
                title={`Complete Subject Syllabus (${allFilteredTopics.length} Topics)`}
                subtitle={`Organized into standardized academic & practice curriculum clusters.`}
              />
              {nonCatalogClusters.map((group) => (
                <ChapterBlock
                  key={group.name}
                  name={group.name}
                  topics={group.topics}
                  onSelectTopic={onSelectTopic}
                />
              ))}
            </section>
          )}

          {/* Search match fallback when searching inside catalog */}
          {q && isCatalog && (
            <section className="space-y-3">
              <CatalogHeading
                title={`Matching Provisions (${allFilteredTopics.length})`}
                subtitle={`Filtered results matching "${searchQuery}".`}
              />
              <ProvisionCardList
                topics={allFilteredTopics}
                onSelectTopic={onSelectTopic}
              />
            </section>
          )}
        </div>
      )}

      {/* 7. Empty State */}
      {allFilteredTopics.length === 0 && (
        <div className="rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-12 text-center space-y-3">
          <Search className="w-8 h-8 text-slate-400 mx-auto" />
          <h3 className="font-bold text-slate-800 dark:text-slate-200 text-base">
            No provisions or topics match "{searchQuery}"
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Try searching by section number, keyword, or clear your query to view the full catalog.
          </p>
          <button
            type="button"
            onClick={() => onSearchChange('')}
            className="text-xs font-bold text-blue-600 hover:underline inline-flex items-center gap-1"
          >
            Clear Search Filter
          </button>
        </div>
      )}

      {/* 8. Subject Practice Deck (Bottom of Page) */}
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Practice & Revision Tools
          </div>
          <h4 className="font-bold text-base text-slate-900 dark:text-white">
            Ready to test your knowledge on {subject.shortName}?
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Launch timed exam practice or explore concordance mappers on this device.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            type="button"
            onClick={onBack}
            className="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 transition-colors"
          >
            ← View Other Subjects
          </button>
        </div>
      </section>
    </div>
  )
}

function CatalogHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="border-b border-slate-200 dark:border-slate-800 pb-2.5">
      <h3 className="font-display text-lg sm:text-xl font-bold text-slate-950 dark:text-white">
        {title}
      </h3>
      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
        {subtitle}
      </p>
    </div>
  )
}

function ChapterBlock({
  name,
  topics,
  onSelectTopic,
}: {
  name: string
  topics: LawTopic[]
  onSelectTopic: (topic: LawTopic) => void
}) {
  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between gap-2 px-1">
        <div className="flex items-center gap-2">
          <CornerDownRight className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 dark:text-blue-300">
            {name}
          </h4>
        </div>
        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500">
          {topics.length} items
        </span>
      </div>

      <ProvisionCardList topics={topics} onSelectTopic={onSelectTopic} />
    </div>
  )
}

function ProvisionCardList({
  topics,
  onSelectTopic,
}: {
  topics: LawTopic[]
  onSelectTopic: (topic: LawTopic) => void
}) {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 divide-y divide-slate-100 dark:divide-slate-800/80 overflow-hidden shadow-2xs">
      {topics.map((t) => {
        const num = t.range ?? t.id
        const isOmitted =
          t.name.toLowerCase().includes('omitted') ||
          t.name.toLowerCase().includes('repealed')

        return (
          <button
            key={t.id}
            type="button"
            onClick={() => onSelectTopic(t)}
            className={`w-full text-left px-4 py-3 flex items-center justify-between gap-3 hover:bg-blue-50/40 dark:hover:bg-blue-950/20 transition-all duration-150 group ${
              isOmitted ? 'opacity-60 bg-slate-50/40 dark:bg-slate-950/40' : ''
            }`}
          >
            <div className="flex items-center gap-3 min-w-0 flex-1">
              {/* Provision Number Badge */}
              <span className="shrink-0 w-20 sm:w-24 text-center py-1 px-2 rounded-lg bg-blue-50 dark:bg-blue-950/70 text-blue-800 dark:text-blue-300 font-extrabold text-xs tabular-nums border border-blue-200/70 dark:border-blue-900 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {num}
              </span>

              {/* Title & Note */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors truncate">
                    {t.name.replace(/^((Article|Section|Order)\s+[\w.-]+ \u2014 )/, '')}
                  </span>
                  {t.highYield && (
                    <span className="text-[10px] font-black uppercase px-1.5 py-0.2 rounded-sm bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 shrink-0">
                      ★ High Yield
                    </span>
                  )}
                  {isOmitted && (
                    <span className="text-[10px] font-semibold uppercase px-1.5 py-0.2 rounded-sm bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 shrink-0">
                      Omitted
                    </span>
                  )}
                </div>

                {t.note && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                    {t.note}
                  </p>
                )}
              </div>
            </div>

            {/* Right Action */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="hidden sm:inline text-[11px] font-bold text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Study Note →
              </span>
              <ChevronRight className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
            </div>
          </button>
        )
      })}
    </div>
  )
}

function articleSortKey(id: string): [number, string] {
  const match = id.match(/^(?:art|s|o)-(\d+)([a-z]*)$/i)
  if (!match) return [9999, id]
  return [Number(match[1]), match[2]]
}

function groupByCluster(
  topics: LawTopic[],
  fallback = 'General Headings',
): { name: string; topics: LawTopic[] }[] {
  const order: string[] = []
  const map = new Map<string, LawTopic[]>()
  for (const topic of topics) {
    const name = topic.cluster || fallback
    if (!map.has(name)) {
      map.set(name, [])
      order.push(name)
    }
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
