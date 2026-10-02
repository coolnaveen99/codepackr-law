import { lazy, Suspense, useEffect, useMemo, useState } from 'react'
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
import {
  setPageMeta,
  SITE_NAME,
  buildJudgmentStructuredData,
  buildTopicStructuredData,
  buildSubjectStructuredData,
  buildToolStructuredData,
} from './lib/seo'
import { JUDGMENTS_BY_ID } from './data/judgments'
import { type LawTopic } from './data/subjects'
import { getSubjectBySlug, getTopic, searchSubjectsAndTopics } from './data/liveSubjects'
import { TOOLS } from './data/tools'
import type { ToolMetadata, ToolCategory } from './types'
import { resolveUiTask, surfaceMeasure, UI_TASK_TITLE } from './design-system/surfaces'
import { Header } from './components/layout/Header'
import { CodepackrFamilyBar } from './components/CodepackrFamilyBar'
import { Footer } from './components/layout/Footer'
import { MobileBottomNav, LAW_MOBILE_TABS } from './components/MobileBottomNav'
import { HomePage } from './components/home/HomePage'
import { SubjectsList } from './components/subjects/SubjectsList'
import { SubjectDetail } from './components/subjects/SubjectDetail'
import { TopicDetail } from './components/subjects/TopicDetail'
import { ContactFeedback } from './components/contact/ContactFeedback'
const AibeMcqPractice = lazy(() => import('./components/tools/AibeMcqPractice').then((m) => ({ default: m.AibeMcqPractice })))
const BnsIpcMapper = lazy(() => import('./components/tools/BnsIpcMapper').then((m) => ({ default: m.BnsIpcMapper })))
const SectionFlashcards = lazy(() => import('./components/tools/SectionFlashcards').then((m) => ({ default: m.SectionFlashcards })))
const ExamTimer = lazy(() => import('./components/tools/ExamTimer').then((m) => ({ default: m.ExamTimer })))
const LegalMaximsTool = lazy(() => import('./components/tools/LegalMaximsTool').then((m) => ({ default: m.LegalMaximsTool })))
const LandmarkCasesTool = lazy(() => import('./components/tools/LandmarkCasesTool').then((m) => ({ default: m.LandmarkCasesTool })))
const DocumentCompare = lazy(() => import('./components/tools/DocumentCompare').then((m) => ({ default: m.DocumentCompare })))
const ConceptVersus = lazy(() => import('./components/tools/ConceptVersus').then((m) => ({ default: m.ConceptVersus })))
const LegalDraftStudio = lazy(() => import('./components/tools/LegalDraftStudio').then((m) => ({ default: m.LegalDraftStudio })))
const ResearchWorkbench = lazy(() => import('./components/tools/ResearchWorkbench').then((m) => ({ default: m.ResearchWorkbench })))
const CitationVerifier = lazy(() => import('./components/tools/CitationVerifier').then((m) => ({ default: m.CitationVerifier })))
const JudgmentAnalyzer = lazy(() => import('./components/tools/JudgmentAnalyzer').then((m) => ({ default: m.JudgmentAnalyzer })))
const JudgmentCompare = lazy(() => import('./components/tools/JudgmentCompare').then((m) => ({ default: m.JudgmentCompare })))
const CasePrepWorkbench = lazy(() => import('./components/tools/CasePrepWorkbench').then((m) => ({ default: m.CasePrepWorkbench })))
const FilingChecklists = lazy(() => import('./components/tools/FilingChecklists').then((m) => ({ default: m.FilingChecklists })))
const LimitationCalculator = lazy(() => import('./components/tools/LimitationCalculator').then((m) => ({ default: m.LimitationCalculator })))
const LegalCalculators = lazy(() => import('./components/tools/LegalCalculators').then((m) => ({ default: m.LegalCalculators })))
const TransitionCentre = lazy(() => import('./components/tools/TransitionCentre').then((m) => ({ default: m.TransitionCentre })))
const CaseBriefBuilder = lazy(() => import('./components/tools/CaseBriefBuilder').then((m) => ({ default: m.CaseBriefBuilder })))
const StudyPlanner = lazy(() => import('./components/tools/StudyPlanner').then((m) => ({ default: m.StudyPlanner })))
const PracticeDashboard = lazy(() => import('./components/tools/PracticeDashboard').then((m) => ({ default: m.PracticeDashboard })))
const CauseListOrganizer = lazy(() => import('./components/tools/CauseListOrganizer').then((m) => ({ default: m.CauseListOrganizer })))
const PrimarySourceFinder = lazy(() => import('./components/tools/PrimarySourceFinder').then((m) => ({ default: m.PrimarySourceFinder })))
const PrivacyControls = lazy(() => import('./components/tools/PrivacyControls').then((m) => ({ default: m.PrivacyControls })))
const GlobalSearchPanel = lazy(() => import('./components/tools/GlobalSearchPanel').then((m) => ({ default: m.GlobalSearchPanel })))
const CourtForumDirectory = lazy(() => import('./components/tools/CourtForumDirectory').then((m) => ({ default: m.CourtForumDirectory })))
const ResearchBundleExport = lazy(() => import('./components/tools/ResearchBundleExport').then((m) => ({ default: m.ResearchBundleExport })))
const NeutralAnalysisMode = lazy(() => import('./components/tools/NeutralAnalysisMode').then((m) => ({ default: m.NeutralAnalysisMode })))
const UsageMetrics = lazy(() => import('./components/tools/UsageMetrics').then((m) => ({ default: m.UsageMetrics })))
const CaseLawLibrary = lazy(() => import('./components/tools/CaseLawLibrary').then((m) => ({ default: m.CaseLawLibrary })))
const KnowledgeBrowser = lazy(() => import('./components/knowledge/KnowledgeBrowser').then((m) => ({ default: m.KnowledgeBrowser })))
const ContentPublisher = lazy(() => import('./components/admin/ContentPublisher').then((m) => ({ default: m.ContentPublisher })))
import { OfflineBanner } from './components/OfflineBanner'
import { registerServiceWorker } from './lib/offline'
import { trackToolOpen } from './lib/analytics'
import { encodeKnowledgeId } from './data/knowledge'

export default function App() {
  const [mobileTab, setMobileTab] = useState('home')
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const dark = false
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
    document.documentElement.classList.remove('dark')
    try {
      localStorage.setItem('codepackr-law-theme', 'light')
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    registerServiceWorker()
  }, [])

  useEffect(() => {
    if (route.type === 'home') {
      setPageMeta({
        title: `${SITE_NAME} — Indian Law Library, Bare Acts & Practice Reference`,
        description:
          'Free digital Indian law library covering 20 curriculum subjects, Bare Acts, Supreme Court judgments, and AIBE/Judiciary prep. Client-side practice tools for students and advocates.',
        path: '/',
        breadcrumbs: [{ name: 'Home', path: '/' }],
      })
    }
    if (route.type === 'subjects') {
      setPageMeta({
        title: `All Subjects — Law Curriculum Library | ${SITE_NAME}`,
        description:
          'Browse 20 Indian law curriculum subjects: Constitution, BNS, BNSS, BSA, CPC, Contract, Family Law, Torts and more. Structured notes and topic maps for AIBE and judiciary exams.',
        path: '/subjects',
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'Subjects', path: '/subjects' },
        ],
      })
    }
    if (route.type === 'subject') {
      const subject = getSubjectBySlug(route.slug)
      if (subject) {
        setPageMeta({
          title: `${subject.name} — Topics & Notes | ${SITE_NAME}`,
          description: subject.description,
          path: `/subjects/${subject.slug}`,
          breadcrumbs: [
            { name: 'Home', path: '/' },
            { name: 'Subjects', path: '/subjects' },
            { name: subject.name, path: `/subjects/${subject.slug}` },
          ],
          structuredData: buildSubjectStructuredData(subject),
        })
      }
    }
    if (route.type === 'topic') {
      const pair = getTopic(route.subjectSlug, route.topicId)
      if (pair) {
        const { subject, topic } = pair
        setPageMeta({
          title: `${topic.name} — ${subject.name} | ${SITE_NAME}`,
          description: topic.note || topic.name,
          path: `/subjects/${subject.slug}/${topic.id}`,
          breadcrumbs: [
            { name: 'Home', path: '/' },
            { name: 'Subjects', path: '/subjects' },
            { name: subject.name, path: `/subjects/${subject.slug}` },
            { name: topic.name, path: `/subjects/${subject.slug}/${topic.id}` },
          ],
          structuredData: buildTopicStructuredData(subject, topic),
        })
      }
    }
    if (route.type === 'tool') {
      const tool = TOOLS.find((t) => t.slug === route.slug)
      if (tool) {
        setPageMeta({
          title: `${tool.name} — Free Legal Practice Tool | ${SITE_NAME}`,
          description: tool.description,
          keywords: [...tool.keywords, 'legal tool', 'Indian law practice'],
          path: `/tool/${tool.slug}`,
          breadcrumbs: [
            { name: 'Home', path: '/' },
            { name: tool.name, path: `/tool/${tool.slug}` },
          ],
          structuredData: buildToolStructuredData(tool),
        })
      }
    }
    if (route.type === 'case-law') {
      if (route.judgmentId) {
        const judgment = JUDGMENTS_BY_ID.get(route.judgmentId)
        if (judgment) {
          const parties = judgment.caseName
          const yearStr = judgment.year ? ` (${judgment.year})` : ''
          const citationStr = judgment.citation ? ` — ${judgment.citation}` : ''
          setPageMeta({
            title: `${parties}${yearStr}${citationStr} | ${SITE_NAME}`,
            description:
              judgment.summary?.slice(0, 155) ||
              `Supreme Court judgment: ${parties}. Ratio, holdings and linked topics on Codepackr Law.`,
            path: `/case-law/judgment/${judgment.id}`,
            keywords: [
              parties,
              judgment.caseName,
              judgment.citation || '',
              'Supreme Court of India',
              'judgment',
              'case law',
              ...(judgment.tags || []),
            ].filter(Boolean),
            breadcrumbs: [
              { name: 'Home', path: '/' },
              { name: 'Case Law', path: '/case-law' },
              { name: parties, path: `/case-law/judgment/${judgment.id}` },
            ],
            structuredData: buildJudgmentStructuredData(judgment),
          })
        } else {
          setPageMeta({
            title: `Judgment — Case Law Library | ${SITE_NAME}`,
            description: 'Supreme Court of India judgment on Codepackr Law.',
            path: `/case-law/judgment/${route.judgmentId}`,
            breadcrumbs: [
              { name: 'Home', path: '/' },
              { name: 'Case Law', path: '/case-law' },
            ],
          })
        }
      } else {
        setPageMeta({
          title: `Case Law Library — Supreme Court Judgments | ${SITE_NAME}`,
          description:
            'Browse landmark Supreme Court of India judgments with ratio decidendi, subject tags and linked curriculum topics. Free case law reference for AIBE and judiciary prep.',
          path: '/case-law',
          breadcrumbs: [
            { name: 'Home', path: '/' },
            { name: 'Case Law', path: '/case-law' },
          ],
        })
      }
    }
    if (route.type === 'knowledge') {
      setPageMeta({
        title: `Legal Knowledge Graph — Concepts & Links | ${SITE_NAME}`,
        description:
          'Explore interconnected Indian legal concepts, maxims, sections and cases. A structured knowledge browser for law students and advocates.',
        path: route.entityId ? `/knowledge/${route.entityId}` : '/knowledge',
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'Knowledge', path: '/knowledge' },
        ],
      })
    }
    if (route.type === 'contact') {
      setPageMeta({
        title: `Contact & Feedback | ${SITE_NAME}`,
        description: 'Send feedback or report an issue with Codepackr Law. We read every message.',
        path: '/contact',
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ],
      })
    }
  }, [route])

  useEffect(() => {
    if (route.type === 'tool' && route.slug) trackToolOpen(route.slug)
  }, [route])

  const [toolParams, setToolParams] = useState<{
    subject?: string
    topicId?: string
    mode?: 'practice' | 'exam'
  }>({})

  const goHome = () => {
    setHomeUrl()
    setRoute({ type: 'home' })
    setSearchQuery('')
    setSubjectSearch('')
  }

  const openSubjects = () => {
    setSubjectsUrl()
    setRoute({ type: 'subjects' })
    setSubjectSearch('')
  }

  const selectSubject = (slug: string) => {
    setSubjectUrl(slug)
    setRoute({ type: 'subject', slug })
    setSubjectSearch('')
  }

  const selectTopic = (subjectSlug: string, topic: LawTopic) => {
    setTopicUrl(subjectSlug, topic.id)
    setRoute({ type: 'topic', subjectSlug, topicId: topic.id })
  }

  const selectTool = (
    slug: string,
    params?: { subject?: string; topicId?: string; mode?: 'practice' | 'exam' },
  ) => {
    if (params) setToolParams(params)
    else setToolParams({})
    if (slug === 'case-law') {
      setCaseLawUrl()
      setRoute({ type: 'case-law' })
      return
    }
    if (slug === 'knowledge') {
      setKnowledgeUrl()
      setRoute({ type: 'knowledge' })
      return
    }
    setToolUrl(slug)
    setRoute({ type: 'tool', slug })
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

  const handleMobileTab = (tab: string) => {
    setMobileTab(tab)
    if (tab === 'home') goHome()
    else if (tab === 'study') openSubjects()
    else if (tab === 'judgments') {
      setCaseLawUrl()
      setRoute({ type: 'case-law' })
    } else if (tab === 'search') {
      goHome()
    } else if (tab === 'more') {
      setContactUrl()
      setRoute({ type: 'contact' })
    }
  }

  const uiTask = resolveUiTask(
    route.type === 'tool' ? { type: route.type, slug: route.slug } : { type: route.type },
  )
  const uiMeasure = surfaceMeasure(uiTask)

  return (
    <div className={dark ? 'dark' : ''}>
      <div className={`cp-chambers min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors ${sidebarCollapsed ? "is-rail-collapsed" : ""}`}>
        <CodepackrFamilyBar />
        <Header
          dark={dark}
          onToggleDark={() => {}}
          onSidebarCollapsedChange={setSidebarCollapsed}
          currentLabel={null}
          activeKey={
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
                      : route.type
          }
          onHome={goHome}
          onOpenSubjects={openSubjects}
          onSelectSubject={selectSubject}
          onSelectTool={selectTool}
          onOpenKnowledge={() => {
            setKnowledgeUrl()
            setRoute({ type: 'knowledge' })
          }}
          onOpenJudgment={(id) => {
            setCaseLawUrl(id)
            setRoute({ type: 'case-law', judgmentId: id })
          }}
          onSelectTopic={(slug, topicId) => {
            setTopicUrl(slug, topicId)
            setRoute({ type: 'topic', subjectSlug: slug, topicId })
          }}
          onOpenCaseLaw={() => {
            setCaseLawUrl()
            setRoute({ type: 'case-law' })
          }}
          onOpenContact={() => {
            setContactUrl()
            setRoute({ type: 'contact' })
          }}
        />

        <OfflineBanner />

        <main data-ui-task={uiTask} data-ui-measure={uiMeasure} aria-label={UI_TASK_TITLE[uiTask]} className="flex-1 w-full mx-auto px-4 sm:px-6 py-6 paper-grid cp-mobile-main-pad cp-page">
          {route.type === 'contact' && <ContactFeedback onBackToHome={goHome} />}

          {route.type === 'case-law' && (
            <Suspense fallback={<p className="text-sm">Loading library…</p>}><CaseLawLibrary
              judgmentId={route.judgmentId}
              onOpenJudgment={(id) => {
                setCaseLawUrl(id)
                setRoute({ type: 'case-law', ...(id ? { judgmentId: id } : {}) })
              }}
              onBackToLibrary={() => {
                setCaseLawUrl()
                setRoute({ type: 'case-law' })
              }}
              onOpenTopic={(slug, topicId) => {
                setTopicUrl(slug, topicId)
                setRoute({ type: 'topic', subjectSlug: slug, topicId })
              }}
            /></Suspense>
          )}

          {route.type === 'knowledge' && (
            <Suspense fallback={<p className="text-sm">Loading knowledge…</p>}><KnowledgeBrowser
              entityId={route.entityId}
              onBack={() => {
                setKnowledgeUrl()
                setRoute({ type: 'knowledge' })
              }}
              onOpenEntity={(id) => {
                const encoded = encodeKnowledgeId(id)
                setKnowledgeUrl(encoded)
                setRoute({ type: 'knowledge', entityId: encoded })
              }}
            /></Suspense>
          )}

          {route.type === 'tool' && activeTool && (
            <Suspense fallback={<p className="text-sm">Loading workspace…</p>}>
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
              {(activeTool.slug === 'bns-ipc-mapper' ||
                activeTool.slug === 'bnss-crpc-mapper' ||
                activeTool.slug === 'bsa-iea-mapper') && (
                <BnsIpcMapper
                  initialAct={
                    activeTool.slug === 'bnss-crpc-mapper'
                      ? 'bnss-crpc'
                      : activeTool.slug === 'bsa-iea-mapper'
                        ? 'bsa-iea'
                        : 'bns-ipc'
                  }
                  onSelectAct={(act) => {
                    const targetSlug =
                      act === 'bnss-crpc'
                        ? 'bnss-crpc-mapper'
                        : act === 'bsa-iea'
                          ? 'bsa-iea-mapper'
                          : 'bns-ipc-mapper'
                    selectTool(targetSlug)
                  }}
                />
              )}
              {activeTool.slug === 'section-flashcards' && <SectionFlashcards />}
              {activeTool.slug === 'exam-timer' && <ExamTimer />}
              {activeTool.slug === 'legal-maxims' && <LegalMaximsTool />}
              {activeTool.slug === 'landmark-cases' && <LandmarkCasesTool />}
              {activeTool.slug === 'document-compare' && <DocumentCompare />}
              {activeTool.slug === 'concept-versus' && <ConceptVersus />}
              {activeTool.slug === 'legal-draft-studio' && <LegalDraftStudio />}
              {activeTool.slug === 'research-workbench' && <ResearchWorkbench />}
              {activeTool.slug === 'citation-verifier' && <CitationVerifier />}
              {activeTool.slug === 'judgment-analyzer' && <JudgmentAnalyzer />}
              {activeTool.slug === 'judgment-compare' && <JudgmentCompare />}
              {activeTool.slug === 'case-prep' && <CasePrepWorkbench />}
              {activeTool.slug === 'filing-checklists' && <FilingChecklists />}
              {activeTool.slug === 'limitation-calculator' && <LimitationCalculator />}
              {activeTool.slug === 'legal-calculators' && <LegalCalculators />}
              {activeTool.slug === 'transition-centre' && <TransitionCentre />}
              {activeTool.slug === 'case-brief-builder' && <CaseBriefBuilder />}
              {activeTool.slug === 'study-planner' && <StudyPlanner />}
              {activeTool.slug === 'practice-dashboard' && <PracticeDashboard />}
              {activeTool.slug === 'cause-list-organizer' && <CauseListOrganizer />}
              {activeTool.slug === 'primary-source-finder' && <PrimarySourceFinder />}
              {activeTool.slug === 'privacy-controls' && <PrivacyControls />}
              {activeTool.slug === 'global-search' && <GlobalSearchPanel />}
              {activeTool.slug === 'court-forum-directory' && <CourtForumDirectory />}
              {activeTool.slug === 'research-bundle' && <ResearchBundleExport />}
              {activeTool.slug === 'neutral-analysis' && <NeutralAnalysisMode />}
              {activeTool.slug === 'usage-metrics' && <UsageMetrics />}
              {activeTool.slug === 'content-publisher' && <ContentPublisher />}
            </div>
            </Suspense>
          )}

          {route.type === 'subjects' && (
            <SubjectsList
              searchQuery={subjectSearch}
              onSearchChange={setSubjectSearch}
              onSelectSubject={selectSubject}
            />
          )}

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

        <MobileBottomNav activeTab={mobileTab} onSelectTab={handleMobileTab} tabs={LAW_MOBILE_TABS} />
        <Footer onOpenContact={() => { setContactUrl(); setRoute({ type: 'contact' }) }} />
      </div>
    </div>
  )
}
