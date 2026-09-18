import { useState, useEffect, useMemo } from 'react'
import {
  parseRoute,
  setToolUrl,
  setSubjectsUrl,
  setSubjectUrl,
  setTopicUrl,
  setHomeUrl,
  setCaseLawUrl,
  setKnowledgeUrl,
  migrateHashToPath,
} from './lib/urls'
import { setPageMeta, SITE_NAME, SITE_TAGLINE } from './lib/seo'
import {
  getSubjectBySlug,
  getTopic,
  searchSubjectsAndTopics,
  type LawTopic,
} from './data/subjects'
import { TOOLS } from './data/tools'
import { ToolMetadata, ToolCategory } from './types'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { HomePage } from './components/home/HomePage'
import { SubjectsList } from './components/subjects/SubjectsList'
import { SubjectDetail } from './components/subjects/SubjectDetail'
import { TopicDetail } from './components/subjects/TopicDetail'
import { AibeMcqPractice } from './components/tools/AibeMcqPractice'
import { BnsIpcMapper } from './components/tools/BnsIpcMapper'
import { SectionFlashcards } from './components/tools/SectionFlashcards'
import { ExamTimer } from './components/tools/ExamTimer'
import { LegalMaximsTool } from './components/tools/LegalMaximsTool'
import { LandmarkCasesTool } from './components/tools/LandmarkCasesTool'
import { CaseLawLibrary } from './components/tools/CaseLawLibrary'
import { KnowledgeBrowser } from './components/knowledge/KnowledgeBrowser'
import { encodeKnowledgeId } from './data/knowledge'

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
    if (migrateHashToPath()) {
      setRoute(parseRoute())
    }
    const onNav = () => {
      setRoute(parseRoute())
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    window.addEventListener('popstate', onNav)
    return () => window.removeEventListener('popstate', onNav)
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

  useEffect(() => {
    if (route.type === 'home') {
      setPageMeta({
        title: `${SITE_NAME} — AIBE & Judiciary MCQ, Bare Acts & Flashcards`,
        description:
          'Free client-side AIBE and State Judiciary preparation: subject MCQs, BNS↔IPC mapper, section flashcards, exam timer, legal maxims, landmark cases. 100% private — no data leaves your device.',
        path: '/',
      })
      return
    }
    if (route.type === 'tool') {
      const tool = TOOLS.find((t) => t.slug === route.slug)
      if (tool) {
        setPageMeta({
          title: `${tool.name} | ${SITE_NAME}`,
          description: tool.description,
          path: `/tool/${tool.slug}`,
        })
      } else {
        setPageMeta({
          title: `Tool | ${SITE_NAME}`,
          description: SITE_TAGLINE,
          path: `/tool/${route.slug}`,
        })
      }
      return
    }
    if (route.type === 'case-law') {
      setPageMeta({
        title: route.judgmentId ? `Judgment Reader | ${SITE_NAME}` : `Case Law Library | ${SITE_NAME}`,
        description: 'Study important Indian judgments through facts, legal issues, provisions, reasoning, ratio and exam notes.',
        path: route.judgmentId ? `/case-law/judgment/${route.judgmentId}` : '/case-law',
      })
      return
    }
    if (route.type === 'knowledge') {
      setPageMeta({
        title: route.entityId ? `Legal Knowledge | ${SITE_NAME}` : `Reusable Legal Knowledge | ${SITE_NAME}`,
        description:
          'Canonical Indian legal doctrines, concepts, maxims, definitions and procedures. One record each, reused across Constitution study topics.',
        path: route.entityId ? `/knowledge/${route.entityId}` : '/knowledge',
      })
      return
    }
    if (route.type === 'subjects') {
      setPageMeta({
        title: `All Subjects — AIBE & Judiciary | ${SITE_NAME}`,
        description:
          'Browse Indian law subjects and study topic-by-topic through structured notes, case laws, provisions, and exam points. Built for AIBE and State Judiciary prelims.',
        path: '/subjects',
      })
      return
    }
    if (route.type === 'subject') {
      const subject = getSubjectBySlug(route.slug)
      if (subject) {
        setPageMeta({
          title: `${subject.name} — Topics & Notes | ${SITE_NAME}`,
          description: `${subject.description} High-yield topics, doctrines, and structured study content for AIBE and Judiciary.`,
          path: `/subjects/${subject.slug}`,
        })
      } else {
        setPageMeta({
          title: `Subject | ${SITE_NAME}`,
          description: SITE_TAGLINE,
          path: `/subjects/${route.slug}`,
        })
      }
      return
    }
    if (route.type === 'topic') {
      const pair = getTopic(route.subjectSlug, route.topicId)
      if (pair) {
        const { subject, topic } = pair
        const tip = topic.note ? ` ${topic.note}` : ''
        setPageMeta({
          title: `${topic.name} — ${subject.shortName} | ${SITE_NAME}`,
          description: `Study ${topic.name} (${subject.name}): structured notes, case laws, provisions, and exam tips for AIBE and Judiciary.${tip}`,
          path: `/subjects/${subject.slug}/${topic.id}`,
        })
      } else {
        setPageMeta({
          title: `Topic | ${SITE_NAME}`,
          description: SITE_TAGLINE,
          path: `/subjects/${route.subjectSlug}/${route.topicId}`,
        })
      }
    }
  }, [route])

  const handleSelectTool = (slug: string) => {
    if (slug === 'case-law') {
      setCaseLawUrl()
      setRoute({ type: 'case-law' })
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    if (slug === 'knowledge') {
      setKnowledgeUrl()
      setRoute({ type: 'knowledge' })
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
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

  const handleOpenJudgment = (judgmentId?: string) => {
    setCaseLawUrl(judgmentId)
    setRoute({ type: 'case-law', ...(judgmentId ? { judgmentId } : {}) })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleOpenKnowledge = (entityId?: string) => {
    const encoded = entityId ? encodeKnowledgeId(entityId) : undefined
    setKnowledgeUrl(encoded)
    setRoute({ type: 'knowledge', ...(encoded ? { entityId: encoded } : {}) })
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
      : route.type === 'case-law'
        ? route.judgmentId ? 'Judgment Reader' : 'Case Law Library'
      : route.type === 'knowledge'
        ? 'Knowledge'
      : route.type === 'subjects'
        ? 'Subjects'
        : route.type === 'subject'
          ? activeSubject?.shortName ?? 'Subject'
          : route.type === 'topic'
            ? activeTopicPair?.topic.name ?? 'Topic'
            : null

  const activeKey =
    route.type === 'home'
      ? 'home'
      : route.type === 'subjects'
        ? 'subjects'
        : route.type === 'subject'
          ? `subject:${route.slug}`
          : route.type === 'topic'
            ? `subject:${route.subjectSlug}`
            : route.type === 'tool'
              ? `tool:${route.slug}`
              : route.type === 'knowledge'
                ? 'knowledge'
                : route.type === 'case-law'
                  ? 'case-law'
                  : undefined

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

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors">
        <Header
          dark={dark}
          onToggleDark={() => setDark(!dark)}
          currentLabel={headerLabel}
          activeKey={activeKey}
          onHome={handleBackToHome}
          onOpenSubjects={handleOpenSubjects}
          onSelectSubject={handleSelectSubject}
          onSelectTool={handleSelectTool}
          onOpenKnowledge={() => handleOpenKnowledge()}
          onOpenCaseLaw={() => handleOpenJudgment()}
        />

        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8 paper-grid">
          {route.type === 'case-law' && (
            <CaseLawLibrary
              judgmentId={route.judgmentId}
              onOpenJudgment={handleOpenJudgment}
              onBackToLibrary={() => handleOpenJudgment()}
            />
          )}
          {route.type === 'knowledge' && (
            <KnowledgeBrowser
              entityId={route.entityId}
              onBack={() => handleOpenKnowledge()}
              onOpenEntity={(id) => handleOpenKnowledge(id)}
            />
          )}
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
            />
          )}

          {route.type === 'subject' && activeSubject && (
            <SubjectDetail
              subject={activeSubject}
              onBack={handleOpenSubjects}
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
              onSelectTopic={(topic) => handleSelectTopic(activeTopicPair.subject.slug, topic)}
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
            <HomePage
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              filteredTools={filteredTools}
              subjectSearchResults={subjectSearchResults}
              onOpenSubjects={handleOpenSubjects}
              onSelectSubject={handleSelectSubject}
              onSelectTopic={handleSelectTopic}
              onSelectTool={handleSelectTool}
            />
          )}
        </main>

        <Footer />
      </div>
    </div>
  )
}
