import { useEffect, useMemo, useState } from 'react'
import {
  parseRoute,
  setToolUrl,
  setSubjectsUrl,
  setSubjectUrl,
  setTopicUrl,
  setHomeUrl,
  setCaseLawUrl,
  setKnowledgeUrl,
  setContactUrl,
  migrateHashToPath,
} from './lib/urls'
import { setPageMeta, SITE_NAME, SITE_TAGLINE } from './lib/seo'
import { type LawTopic } from './data/subjects'
import { getSubjectBySlug, getTopic, searchSubjectsAndTopics } from './data/liveSubjects'
import { TOOLS } from './data/tools'
import { ToolMetadata, ToolCategory } from './types'
import { Header } from './components/layout/Header'
import { CodepackrFamilyBar } from './components/CodepackrFamilyBar'
import { Footer } from './components/layout/Footer'
import { HomePage } from './components/home/HomePage'
import { SubjectsList } from './components/subjects/SubjectsList'
import { SubjectDetail } from './components/subjects/SubjectDetail'
import { TopicDetail } from './components/subjects/TopicDetail'
import { ContactFeedback } from './components/contact/ContactFeedback'
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
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-color-scheme: dark)').matches || localStorage.getItem('codepackr-theme') === 'dark'
  })
  const [route, setRoute] = useState(() => parseRoute())
  const [selectedCategory, setSelectedCategory] = useState<ToolCategory | 'all'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [subjectSearch, setSubjectSearch] = useState('')

  useEffect(() => {
    if (migrateHashToPath()) setRoute(parseRoute())
    const onNav = () => {
      setRoute(parseRoute())
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    window.addEventListener('popstate', onNav)
    return () => window.removeEventListener('popstate', onNav)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try { localStorage.setItem('codepackr-theme', dark ? 'dark' : 'light') } catch {}
  }, [dark])

  useEffect(() => {
    if (route.type === 'home') setPageMeta({ title: `${SITE_NAME} — Indian Law Library & Practice Reference`, description: SITE_TAGLINE, path: '/' })
    if (route.type === 'subjects') setPageMeta({ title: `All 20 Curriculum Subjects | ${SITE_NAME}`, description: 'Complete 20-subject curriculum with 3,552 topics across Constitution, BNS, BNSS, BSA, CPC, and allied statutes.', path: '/subjects' })
    if (route.type === 'subject') {
      const subject = getSubjectBySlug(route.slug)
      setPageMeta({ title: `${subject?.name ?? 'Subject'} | ${SITE_NAME}`, description: subject?.description ?? SITE_TAGLINE, path: `/subjects/${route.slug}` })
    }
    if (route.type === 'topic') {
      const pair = getTopic(route.subjectSlug, route.topicId)
      setPageMeta({ title: `${pair?.topic.name ?? 'Topic'} | ${SITE_NAME}`, description: pair?.topic.note ?? SITE_TAGLINE, path: `/subjects/${route.subjectSlug}/${route.topicId}` })
    }
    if (route.type === 'tool') {
      const tool = TOOLS.find((t) => t.slug === route.slug)
      setPageMeta({ title: `${tool?.name ?? 'Practice Tool'} | ${SITE_NAME}`, description: tool?.description ?? SITE_TAGLINE, path: `/tools/${route.slug}` })
    }
    if (route.type === 'case-law') {
      setPageMeta({ title: `Case Law Library & Landmark Judgments | ${SITE_NAME}`, description: 'Authoritative Supreme Court landmark judgments, extracted ratios, and practice MCQs.', path: route.judgmentId ? `/case-law/${route.judgmentId}` : '/case-law' })
    }
    if (route.type === 'knowledge') {
      setPageMeta({ title: `Legal Knowledge Graph & Canonical Concepts | ${SITE_NAME}`, description: 'Canonical legal doctrines, Latin maxims, statutory definitions, and constitutional principles.', path: '/knowledge' })
    }
    if (route.type === 'contact') {
      setPageMeta({ title: `Contact & Chamber Feedback | ${SITE_NAME}`, description: 'Reach our legal research and engineering chamber.', path: '/contact' })
    }
  }, [route])

  const [toolParams, setToolParams] = useState<{
    subject?: string
    topicId?: string
    mode?: 'practice' | 'exam'
  }>({})

  const goHome = () => { setHomeUrl(); setRoute({ type: 'home' }); setSearchQuery(''); setSubjectSearch('') }
  const openSubjects = () => { setSubjectsUrl(); setRoute({ type: 'subjects' }); setSubjectSearch('') }
  const selectSubject = (slug: string) => { setSubjectUrl(slug); setRoute({ type: 'subject', slug }); setSubjectSearch('') }
  const selectTopic = (subjectSlug: string, topic: LawTopic) => { setTopicUrl(subjectSlug, topic.id); setRoute({ type: 'topic', subjectSlug, topicId: topic.id }) }
  const selectTool = (slug: string, params?: { subject?: string; topicId?: string; mode?: 'practice' | 'exam' }) => {
    if (params) setToolParams(params)
    else setToolParams({})
    if (slug === 'case-law') { setCaseLawUrl(); setRoute({ type: 'case-law' }); return }
    if (slug === 'knowledge') { setKnowledgeUrl(); setRoute({ type: 'knowledge' }); return }
    setToolUrl(slug); setRoute({ type: 'tool', slug })
  }

  const activeTool: ToolMetadata | undefined = route.type === 'tool' ? TOOLS.find((t) => t.slug === route.slug) : undefined
  const activeSubject = route.type === 'subject' ? getSubjectBySlug(route.slug) : route.type === 'topic' ? getSubjectBySlug(route.subjectSlug) : undefined
  const activeTopicPair = route.type === 'topic' ? getTopic(route.subjectSlug, route.topicId) : undefined

  const filteredTools = useMemo(() => TOOLS.filter((tool) => {
    if (selectedCategory !== 'all' && tool.category !== selectedCategory) return false
    if (!searchQuery.trim()) return true
    const q = searchQuery.toLowerCase()
    return tool.name.toLowerCase().includes(q) || tool.description.toLowerCase().includes(q) || tool.keywords.some((k) => k.toLowerCase().includes(q))
  }), [selectedCategory, searchQuery])

  const subjectSearchResults = useMemo(() => {
    if (!searchQuery.trim() || route.type !== 'home') return null
    return searchSubjectsAndTopics(searchQuery)
  }, [searchQuery, route.type])

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors">
        <CodepackrFamilyBar />
        <Header dark={dark} onToggleDark={() => setDark(!dark)} currentLabel={null} activeKey={route.type === 'home' ? 'home' : route.type === 'subjects' ? 'subjects' : route.type === 'subject' ? `subject:${route.slug}` : route.type === 'topic' ? `subject:${route.subjectSlug}` : route.type === 'tool' ? `tool:${route.slug}` : route.type} onHome={goHome} onOpenSubjects={openSubjects} onSelectSubject={selectSubject} onSelectTool={selectTool} onOpenKnowledge={() => { setKnowledgeUrl(); setRoute({ type: 'knowledge' }) }} onOpenCaseLaw={() => { setCaseLawUrl(); setRoute({ type: 'case-law' }) }} onOpenContact={() => { setContactUrl(); setRoute({ type: 'contact' }) }} />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8 paper-grid">
          {route.type === 'contact' && <ContactFeedback onBackToHome={goHome} />}
          {route.type === 'case-law' && (
            <CaseLawLibrary
              judgmentId={route.judgmentId}
              onOpenJudgment={(id) => { setCaseLawUrl(id); setRoute({ type: 'case-law', ...(id ? { judgmentId: id } : {}) }) }}
              onBackToLibrary={() => { setCaseLawUrl(); setRoute({ type: 'case-law' }) }}
              onOpenTopic={(slug, topicId) => {
                setTopicUrl(slug, topicId)
                setRoute({ type: 'topic', subjectSlug: slug, topicId })
              }}
            />
          )}
          {route.type === 'knowledge' && <KnowledgeBrowser entityId={route.entityId} onBack={() => { setKnowledgeUrl(); setRoute({ type: 'knowledge' }) }} onOpenEntity={(id) => { const encoded = encodeKnowledgeId(id); setKnowledgeUrl(encoded); setRoute({ type: 'knowledge', entityId: encoded }) }} />}
          {route.type === 'tool' && activeTool && (
            <div className="space-y-6">
              {activeTool.slug === 'aibe-mcq' && (
                <AibeMcqPractice
                  initialSubject={toolParams.subject as any}
                  initialTopicId={toolParams.topicId}
                  initialMode={toolParams.mode}
                  onOpenTopic={(slug, topicId) => {
                    setTopicUrl(slug, topicId)
                    setRoute({ type: 'topic', subjectSlug: slug, topicId })
                  }}
                  onOpenSubject={(slug) => selectSubject(slug)}
                />
              )}
              {activeTool.slug === 'bns-ipc-mapper' && <BnsIpcMapper />}
              {activeTool.slug === 'section-flashcards' && <SectionFlashcards />}
              {activeTool.slug === 'exam-timer' && <ExamTimer />}
              {activeTool.slug === 'legal-maxims' && <LegalMaximsTool />}
              {activeTool.slug === 'landmark-cases' && <LandmarkCasesTool />}
            </div>
          )}
          {route.type === 'subjects' && <SubjectsList searchQuery={subjectSearch} onSearchChange={setSubjectSearch} onSelectSubject={selectSubject} />}
          {route.type === 'subject' && activeSubject && (
            <SubjectDetail
              subject={activeSubject}
              onBack={openSubjects}
              onSelectTopic={(topic) => selectTopic(activeSubject.slug, topic)}
              searchQuery={subjectSearch}
              onSearchChange={setSubjectSearch}
              onSelectTool={selectTool}
            />
          )}
          {route.type === 'topic' && activeTopicPair && (
            <TopicDetail
              subject={activeTopicPair.subject}
              topic={activeTopicPair.topic}
              onBack={() => selectSubject(activeTopicPair.subject.slug)}
              onSelectTopic={(topic) => selectTopic(activeTopicPair.subject.slug, topic)}
              onSelectTool={selectTool}
              onOpenCaseLaw={(id) => {
                setCaseLawUrl(id)
                setRoute({ type: 'case-law', ...(id ? { judgmentId: id } : {}) })
              }}
            />
          )}
          {route.type === 'home' && (
            <HomePage
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              filteredTools={filteredTools}
              subjectSearchResults={subjectSearchResults}
              onOpenSubjects={openSubjects}
              onSelectSubject={selectSubject}
              onSelectTopic={selectTopic}
              onSelectTool={selectTool}
            />
          )}
        </main>
        <Footer onOpenContact={() => { setContactUrl(); setRoute({ type: 'contact' }) }} />
      </div>
    </div>
  )
}
