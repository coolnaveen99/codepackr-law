import { useState, useEffect, useMemo } from 'react'
import {
  BookOpenCheck,
  ArrowLeftRight,
  Layers,
  Timer,
  ScrollText,
  Scale,
  Search,
  ShieldCheck,
  ArrowRight,
  Lock,
  CheckCircle,
  BookOpen,
} from 'lucide-react'
import { TOOLS } from './data/tools'
import { ToolMetadata, ToolCategory } from './types'
import {
  parseRoute,
  setToolUrl,
  setSubjectsUrl,
  setSubjectUrl,
  setTopicUrl,
  setHomeUrl,
} from './lib/urls'
import {
  getSubjectBySlug,
  getTopic,
  searchSubjectsAndTopics,
  type LawSubjectMeta,
  type LawTopic,
} from './data/subjects'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Badge } from './components/ui/Badge'
import { SubjectsList } from './components/subjects/SubjectsList'
import { SubjectDetail } from './components/subjects/SubjectDetail'
import { TopicDetail } from './components/subjects/TopicDetail'

import { AibeMcqPractice } from './components/tools/AibeMcqPractice'
import { BnsIpcMapper } from './components/tools/BnsIpcMapper'
import { SectionFlashcards } from './components/tools/SectionFlashcards'
import { ExamTimer } from './components/tools/ExamTimer'
import { LegalMaximsTool } from './components/tools/LegalMaximsTool'
import { LandmarkCasesTool } from './components/tools/LandmarkCasesTool'

export default function App() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return (
        window.matchMedia('(prefers-color-scheme: dark)').matches ||
        localStorage.getItem('codepackr-theme') === 'dark'
      )
    }
    return false
  })

  const [route, setRoute] = useState(() => parseRoute())
  const [selectedCategory, setSelectedCategory] = useState<ToolCategory | 'all'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [subjectSearch, setSubjectSearch] = useState('')

  useEffect(() => {
    const onHash = () => {
      setRoute(parseRoute())
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
      try {
        localStorage.setItem('codepackr-theme', 'dark')
      } catch {}
    } else {
      document.documentElement.classList.remove('dark')
      try {
        localStorage.setItem('codepackr-theme', 'light')
      } catch {}
    }
  }, [dark])

  const handleSelectTool = (slug: string) => {
    setToolUrl(slug)
    setRoute({ type: 'tool', slug })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToHome = () => {
    setHomeUrl()
    setRoute({ type: 'home' })
    setSearchQuery('')
    setSubjectSearch('')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleOpenSubjects = () => {
    setSubjectsUrl()
    setRoute({ type: 'subjects' })
    setSubjectSearch('')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSelectSubject = (slug: string) => {
    setSubjectUrl(slug)
    setRoute({ type: 'subject', slug })
    setSubjectSearch('')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSelectTopic = (subjectSlug: string, topic: LawTopic) => {
    setTopicUrl(subjectSlug, topic.id)
    setRoute({ type: 'topic', subjectSlug, topicId: topic.id })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  /** Quick practice → MCQ tool (subject filter can be refined later via hash/query) */
  const handleQuickPractice = (subject?: LawSubjectMeta) => {
    setToolUrl('aibe-mcq')
    setRoute({ type: 'tool', slug: 'aibe-mcq' })
    if (subject?.mcqSubjectKey) {
      try {
        sessionStorage.setItem('codepackr-law-mcq-subject', subject.mcqSubjectKey)
      } catch {}
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const activeTool: ToolMetadata | undefined =
    route.type === 'tool' ? TOOLS.find((t) => t.slug === route.slug) : undefined

  const activeSubject =
    route.type === 'subject'
      ? getSubjectBySlug(route.slug)
      : route.type === 'topic'
        ? getSubjectBySlug(route.subjectSlug)
        : undefined

  const activeTopicPair =
    route.type === 'topic' ? getTopic(route.subjectSlug, route.topicId) : undefined

  const headerLabel =
    route.type === 'tool'
      ? activeTool?.name
      : route.type === 'subjects'
        ? 'Subjects'
        : route.type === 'subject'
          ? activeSubject?.shortName ?? 'Subject'
          : route.type === 'topic'
            ? activeTopicPair?.topic.name ?? 'Topic'
            : null

  const filteredTools = useMemo(() => {
    return TOOLS.filter((tool) => {
      if (selectedCategory !== 'all' && tool.category !== selectedCategory) return false
      if (!searchQuery.trim()) return true
      const q = searchQuery.toLowerCase()
      return (
        tool.name.toLowerCase().includes(q) ||
        tool.description.toLowerCase().includes(q) ||
        tool.keywords.some((k) => k.toLowerCase().includes(q))
      )
    })
  }, [selectedCategory, searchQuery])

  const subjectSearchResults = useMemo(() => {
    if (!searchQuery.trim() || route.type !== 'home') return null
    return searchSubjectsAndTopics(searchQuery)
  }, [searchQuery, route.type])

  const renderToolIcon = (iconName: string, className = 'w-6 h-6') => {
    switch (iconName) {
      case 'BookOpenCheck':
        return <BookOpenCheck className={className} />
      case 'ArrowLeftRight':
        return <ArrowLeftRight className={className} />
      case 'Layers':
        return <Layers className={className} />
      case 'Timer':
        return <Timer className={className} />
      case 'ScrollText':
        return <ScrollText className={className} />
      case 'Scale':
        return <Scale className={className} />
      default:
        return <BookOpenCheck className={className} />
    }
  }

  const categories: { id: ToolCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'All Tools' },
    { id: 'mcq', label: 'MCQs & Mocks' },
    { id: 'bare-acts', label: 'Bare Acts & Mappers' },
    { id: 'study-aids', label: 'Study Aids & Timers' },
    { id: 'reference', label: 'Reference & Maxims' },
  ]

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors">
        <Header
          dark={dark}
          onToggleDark={() => setDark(!dark)}
          currentLabel={headerLabel}
          onBackToHome={handleBackToHome}
          onOpenSubjects={handleOpenSubjects}
          showSubjectsLink={route.type === 'home' || route.type === 'tool'}
        />

        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8">
          {route.type === 'tool' && activeTool && (
            <div className="space-y-6">
              {activeTool.slug === 'aibe-mcq' && <AibeMcqPractice />}
              {activeTool.slug === 'bns-ipc-mapper' && <BnsIpcMapper />}
              {activeTool.slug === 'section-flashcards' && <SectionFlashcards />}
              {activeTool.slug === 'exam-timer' && <ExamTimer />}
              {activeTool.slug === 'legal-maxims' && <LegalMaximsTool />}
              {activeTool.slug === 'landmark-cases' && <LandmarkCasesTool />}
            </div>
          )}

          {route.type === 'subjects' && (
            <SubjectsList
              searchQuery={subjectSearch}
              onSearchChange={setSubjectSearch}
              onSelectSubject={handleSelectSubject}
              onQuickPractice={handleQuickPractice}
            />
          )}

          {route.type === 'subject' && activeSubject && (
            <SubjectDetail
              subject={activeSubject}
              onBack={handleOpenSubjects}
              onQuickPractice={() => handleQuickPractice(activeSubject)}
              onSelectTopic={(topic) => handleSelectTopic(activeSubject.slug, topic)}
              searchQuery={subjectSearch}
              onSearchChange={setSubjectSearch}
            />
          )}

          {route.type === 'topic' && activeTopicPair && (
            <TopicDetail
              subject={activeTopicPair.subject}
              topic={activeTopicPair.topic}
              onBack={() => handleSelectSubject(activeTopicPair.subject.slug)}
              onPracticeTopic={() => handleQuickPractice(activeTopicPair.subject)}
            />
          )}

          {route.type === 'topic' && !activeTopicPair && (
            <div className="text-center py-16 space-y-3">
              <p className="text-slate-600 dark:text-slate-400">Topic not found.</p>
              <button
                type="button"
                onClick={handleOpenSubjects}
                className="text-sm font-semibold text-blue-600 hover:underline"
              >
                Back to all subjects
              </button>
            </div>
          )}

          {route.type === 'subject' && !activeSubject && (
            <div className="text-center py-16 space-y-3">
              <p className="text-slate-600 dark:text-slate-400">Subject not found.</p>
              <button
                type="button"
                onClick={handleOpenSubjects}
                className="text-sm font-semibold text-blue-600 hover:underline"
              >
                Back to all subjects
              </button>
            </div>
          )}

          {route.type === 'home' && (
            <div className="space-y-12">
              <section className="text-center max-w-3xl mx-auto pt-6 pb-2 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>100% Client-Side • Zero Data Leaves Your Device</span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  Indian Law Learning Tools
                </h2>

                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
                  Free, browser-based practice for{' '}
                  <strong className="text-blue-600 dark:text-blue-400 font-semibold">AIBE</strong>,{' '}
                  <strong className="text-slate-900 dark:text-white font-semibold">State Judiciary</strong>, and{' '}
                  <strong className="text-slate-900 dark:text-white font-semibold">BNS / BNSS / BSA</strong>.
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleOpenSubjects}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition shadow-sm"
                  >
                    <BookOpen className="w-4 h-4" />
                    Browse all subjects
                  </button>
                </div>
              </section>

              <div className="space-y-4 max-w-4xl mx-auto">
                <div className="relative">
                  <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search tools, subjects, articles, sections (e.g. Art 21, bail, AIBE, BNS)..."
                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 text-sm sm:text-base shadow-xs focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {subjectSearchResults &&
                  (subjectSearchResults.subjects.length > 0 ||
                    subjectSearchResults.topics.length > 0) && (
                    <div className="rounded-2xl border border-blue-200 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-950/30 p-4 space-y-3">
                      <p className="text-xs font-semibold text-blue-800 dark:text-blue-300">
                        Subjects & topics
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {subjectSearchResults.subjects.slice(0, 6).map((s) => (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => handleSelectSubject(s.slug)}
                            className="text-xs font-medium px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50"
                          >
                            {s.shortName}
                          </button>
                        ))}
                        {subjectSearchResults.topics.slice(0, 8).map(({ subject, topic }) => (
                          <button
                            key={`${subject.id}-${topic.id}`}
                            type="button"
                            onClick={() => handleSelectTopic(subject.slug, topic)}
                            className="text-xs px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-400"
                          >
                            {topic.name}
                            <span className="text-slate-400 ml-1">· {subject.shortName}</span>
                          </button>
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={handleOpenSubjects}
                        className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        View all subjects →
                      </button>
                    </div>
                  )}

                <div className="flex items-center justify-center gap-2 flex-wrap">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition ${
                        selectedCategory === cat.id
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              <section className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
                  <span>Available Tools ({filteredTools.length})</span>
                  <span>Click any tool to launch</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filteredTools.map((tool) => (
                    <div
                      key={tool.id}
                      onClick={() => handleSelectTool(tool.slug)}
                      className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-3 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all">
                            {renderToolIcon(tool.icon)}
                          </div>
                          {tool.badge && (
                            <Badge variant="blue" className="text-[11px]">
                              {tool.badge}
                            </Badge>
                          )}
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                          {tool.name}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          {tool.description}
                        </p>
                      </div>
                      <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400">
                        <span>Launch Tool</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>

                {filteredTools.length === 0 && (
                  <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-12 text-center">
                    <Search className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                    <p className="font-semibold text-slate-800 dark:text-slate-200">No tools match your search</p>
                    <button
                      onClick={() => {
                        setSearchQuery('')
                        setSelectedCategory('all')
                      }}
                      className="mt-3 text-xs font-semibold text-blue-600 hover:underline"
                    >
                      Reset filters
                    </button>
                  </div>
                )}
              </section>

              <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 transition-colors">
                <div className="max-w-3xl mx-auto space-y-6 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 mx-auto flex items-center justify-center">
                    <Lock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      Zero Telemetry & 100% Client-Side Privacy
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-xl mx-auto">
                      Practice runs in your browser. No accounts required for core tools; answers never leave your device.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left pt-4">
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-2 font-semibold text-xs text-slate-900 dark:text-white mb-1">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        <span>Private by Design</span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Zero practice data sent to servers.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-2 font-semibold text-xs text-slate-900 dark:text-white mb-1">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        <span>New Criminal Laws</span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        BNS, BNSS, and BSA ready.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-2 font-semibold text-xs text-slate-900 dark:text-white mb-1">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        <span>Syllabus Map</span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        All 19 AIBE subjects with topics.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </div>
  )
}
