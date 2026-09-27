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
import {
  setPageMeta,
  SITE_NAME,
  buildJudgmentStructuredData,
  buildTopicStructuredData,
} from './lib/seo'
import { JUDGMENTS_BY_ID } from './data/judgments'
import { type LawTopic } from './data/subjects'
import { getSubjectBySlug, getTopic, searchSubjectsAndTopics } from './data/liveSubjects'
import { TOOLS } from './data/tools'
import { ToolMetadata, ToolCategory } from './types'
import { Header } from './components/layout/Header'
import { CodepackrFamilyBar } from './components/CodepackrFamilyBar'
import { Footer } from './components/layout/Footer'
import { MobileBottomNav, LAW_MOBILE_TABS } from './components/MobileBottomNav'
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
  const [mobileTab, setMobileTab] = useState('home')
  // Dark mode deferred — light theme only (MOBILE_PREMIUM_UX §1B).
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
      if (localStorage.getItem('codepackr-theme') === 'dark') {
        localStorage.setItem('codepackr-theme', 'light')
      }
    } catch {}
  }, [])

  useEffect(() => {
    if (route.type === 'home') {
      setPageMeta({
        title: `${SITE_NAME} — Indian Law Library, Bare Acts & Practice Reference`,
        description:
          'Free digital Indian law library covering 20 curriculum subjects, 3,552 Bare Act sections (BNS, BNSS, BSA, CPC, Constitution), 290+ Supreme Court landmark judgments, and AIBE/Judiciary prep.',
        keywords: [
          'Indian Law Library',
          'Bare Acts India',
          'BNS 2023',
          'BNSS 2023',
          'BSA 2023',
          'CPC 1908',
          'Constitution of India',
          'Supreme Court Judgments',
          'Ratio Decidendi',
          'Case Law Briefs',
          'AIBE Exam Preparation',
          'Judiciary Prelims and Mains',
          'BNS IPC Mapper',
          'Legal Drafting Formats',
        ],
        path: '/',
        breadcrumbs: [{ name: 'Home', path: '/' }],
      })
    }
    if (route.type === 'subjects') {
      setPageMeta({
        title: `All 20 Law Curriculum Subjects & Bare Acts | ${SITE_NAME}`,
        description:
          'Complete statutory catalog of 20 Indian law subjects with 3,552 provisions across Constitution, BNS 2023, BNSS 2023, BSA 2023, CPC, Contract, Torts, Family Law, Arbitration, and allied statutes.',
        keywords: [
          'Indian Law Subjects',
          'Bare Acts Index',
          'Constitution Articles',
          'BNS Sections',
          'BNSS Sections',
          'BSA Sections',
          'CPC Orders and Sections',
          'Law Student Notes',
          'Judiciary Syllabus',
        ],
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
          title: `${subject.name} (${subject.shortName}) — Bare Act Catalog & Study Modules | ${SITE_NAME}`,
          description: `${subject.description} Explore ${subject.topics.length} sections and provisions with proving ingredients, case laws, and procedural roadmaps.`,
          keywords: [
            subject.name,
            subject.shortName,
            ...subject.bareActs,
            ...subject.keywords,
            'Bare Act sections',
            'statutory ingredients',
            'case law ratios',
            'judiciary notes',
          ],
          path: `/subjects/${subject.slug}`,
          breadcrumbs: [
            { name: 'Home', path: '/' },
            { name: 'Subjects', path: '/subjects' },
            { name: subject.name, path: `/subjects/${subject.slug}` },
          ],
        })
      }
    }
    if (route.type === 'topic') {
      const pair = getTopic(route.subjectSlug, route.topicId)
      if (pair) {
        const { subject, topic } = pair
        const secName = topic.range ? `${topic.name} (${topic.range})` : topic.name
        setPageMeta({
          title: `${secName} — Bare Act, Ingredients & Notes | ${subject.name} | ${SITE_NAME}`,
          description: topic.note
            ? `${topic.name}: ${topic.note}`
            : `Complete statutory treatise, proving ingredients, case ratios, and chamber notes for ${topic.name} under ${subject.name}.`,
          keywords: [
            topic.name,
            topic.range ?? '',
            subject.name,
            subject.shortName,
            ...(topic.keywords ?? []),
            ...subject.keywords,
            'bare act provisions',
            'proving ingredients',
            'legal ratio',
          ].filter(Boolean),
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
          keywords: [...tool.keywords, 'legal tool', 'Indian law practice', 'online legal reference'],
          path: `/tool/${tool.slug}`,
          breadcrumbs: [
            { name: 'Home', path: '/' },
            { name: tool.name, path: `/tool/${tool.slug}` },
          ],
        })
      }
    }
    if (route.type === 'case-law') {
      if (route.judgmentId) {
        const judgment = JUDGMENTS_BY_ID.get(route.judgmentId)
        if (judgment) {
          const yearStr = judgment.year ? `(${judgment.year})` : ''
          const citeStr = judgment.citation ? `[${judgment.citation}]` : ''
          setPageMeta({
            title: `${judgment.caseName} ${yearStr} ${citeStr} — Ratio, Facts & Case Brief | ${SITE_NAME}`,
            description: judgment.summary
              ? `${judgment.caseName}: ${judgment.summary}`
              : `${judgment.court || 'Supreme Court of India'} landmark ruling on ${judgment.topics.join(', ')}. Ratio: ${(judgment.ratioDecidendi || judgment.holding || judgment.decision || '').slice(0, 160)}...`,
            keywords: [
              judgment.caseName,
              judgment.shortName ?? '',
              judgment.citation ?? '',
              judgment.neutralCitation ?? '',
              judgment.court ?? 'Supreme Court of India',
              ...(judgment.judges ?? []),
              ...judgment.topics,
              ...judgment.tags,
              'ratio decidendi',
              'landmark judgment',
              'case brief',
              'facts and issues',
              'legal ratio',
            ].filter(Boolean),
            path: `/case-law/judgment/${judgment.id}`,
            breadcrumbs: [
              { name: 'Home', path: '/' },
              { name: 'Case Law Library', path: '/case-law' },
              { name: judgment.caseName, path: `/case-law/judgment/${judgment.id}` },
            ],
            structuredData: buildJudgmentStructuredData(judgment),
          })
        } else {
          setPageMeta({
            title: `Judgment Not Found | ${SITE_NAME}`,
            description: 'The requested Supreme Court judgment was not found in the library.',
            path: `/case-law/judgment/${route.judgmentId}`,
          })
        }
      } else {
        setPageMeta({
          title: `Case Law Library — 290+ Supreme Court Landmark Judgments | ${SITE_NAME}`,
          description:
            'Search and study 290+ authoritative Indian Supreme Court landmark judgments with extracted ratios, facts, issues, statutory provisions, and AIBE/Judiciary practice MCQs.',
          keywords: [
            'Supreme Court Judgments',
            'Landmark Cases India',
            'Case Law Library',
            'Ratio Decidendi',
            'Basic Structure Cases',
            'Article 21 Cases',
            'Criminal Law Precedents',
            'Judiciary Case Briefs',
          ],
          path: '/case-law',
          breadcrumbs: [
            { name: 'Home', path: '/' },
            { name: 'Case Law Library', path: '/case-law' },
          ],
        })
      }
    }
    if (route.type === 'knowledge') {
      setPageMeta({
        title: `Legal Knowledge Graph & Canonical Concepts | ${SITE_NAME}`,
        description:
          'Canonical legal doctrines, Latin maxims, statutory definitions, and constitutional principles interlinked across Bare Acts and case precedents.',
        keywords: [
          'Legal Knowledge Graph',
          'Legal Doctrines',
          'Latin Maxims',
          'Basic Structure Doctrine',
          'Golden Triangle',
          'Statutory Definitions',
        ],
        path: '/knowledge',
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'Knowledge Graph', path: '/knowledge' },
        ],
      })
    }
    if (route.type === 'contact') {
      setPageMeta({
        title: `Contact & Chamber Feedback | ${SITE_NAME}`,
        description:
          'Contact the Codepackr Law senior research chamber, report statutory errors, suggest landmark judgments, or collaborate.',
        path: '/contact',
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ],
      })
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

  const handleMobileTab = (tab: string) => {
    setMobileTab(tab)
    if (tab === 'home') {
      goHome()
    } else if (tab === 'study') {
      openSubjects()
    } else if (tab === 'judgments') {
      setCaseLawUrl()
      setRoute({ type: 'case-law' })
    } else if (tab === 'search') {
      goHome()
    } else if (tab === 'more') {
      setContactUrl()
      setRoute({ type: 'contact' })
    }
  }

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors">
        <CodepackrFamilyBar />
        <Header dark={dark} onToggleDark={() => { /* dark mode deferred */ }} currentLabel={null} activeKey={route.type === 'home' ? 'home' : route.type === 'subjects' ? 'subjects' : route.type === 'subject' ? `subject:${route.slug}` : route.type === 'topic' ? `subject:${route.subjectSlug}` : route.type === 'tool' ? `tool:${route.slug}` : route.type} onHome={goHome} onOpenSubjects={openSubjects} onSelectSubject={selectSubject} onSelectTool={selectTool} onOpenKnowledge={() => { setKnowledgeUrl(); setRoute({ type: 'knowledge' }) }} onOpenCaseLaw={() => { setCaseLawUrl(); setRoute({ type: 'case-law' }) }} onOpenContact={() => { setContactUrl(); setRoute({ type: 'contact' }) }} />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8 paper-grid cp-mobile-main-pad cp-page">
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
        <MobileBottomNav
          activeTab={mobileTab}
          onSelectTab={handleMobileTab}
          tabs={LAW_MOBILE_TABS}
        />
        <Footer onOpenContact={() => { setContactUrl(); setRoute({ type: 'contact' }) }} />
      </div>
    </div>
  )
}
