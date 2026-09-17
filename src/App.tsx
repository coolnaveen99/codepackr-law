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
} from 'lucide-react'
import { TOOLS } from './data/tools'
import { ToolMetadata, ToolCategory } from './types'
import { getCurrentToolSlug, setToolUrl } from './lib/urls'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Badge } from './components/ui/Badge'

// Tool Components
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

  const [currentToolSlug, setCurrentToolSlug] = useState<string | null>(() => getCurrentToolSlug())
  const [selectedCategory, setSelectedCategory] = useState<ToolCategory | 'all'>('all')
  const [searchQuery, setSearchQuery] = useState('')

  // Sync with URL Hash changes (supports browser Back / Forward)
  useEffect(() => {
    const handleHashChange = () => {
      const slug = getCurrentToolSlug()
      setCurrentToolSlug(slug)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Persist dark mode
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
    setCurrentToolSlug(slug)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToHome = () => {
    setToolUrl(null)
    setCurrentToolSlug(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const activeTool: ToolMetadata | undefined = TOOLS.find((t) => t.slug === currentToolSlug)

  const filteredTools = useMemo(() => {
    return TOOLS.filter((tool) => {
      if (selectedCategory !== 'all' && tool.category !== selectedCategory) {
        return false
      }
      if (!searchQuery.trim()) return true
      const q = searchQuery.toLowerCase()
      return (
        tool.name.toLowerCase().includes(q) ||
        tool.description.toLowerCase().includes(q) ||
        tool.keywords.some((k) => k.toLowerCase().includes(q))
      )
    })
  }, [selectedCategory, searchQuery])

  // Icon component helper
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
        {/* Header */}
        <Header
          dark={dark}
          onToggleDark={() => setDark(!dark)}
          currentToolName={activeTool?.name}
          onBackToHome={handleBackToHome}
        />

        {/* Main Content Area */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8">
          {activeTool ? (
            /* Active Tool View */
            <div className="space-y-6">
              {activeTool.slug === 'aibe-mcq' && <AibeMcqPractice />}
              {activeTool.slug === 'bns-ipc-mapper' && <BnsIpcMapper />}
              {activeTool.slug === 'section-flashcards' && <SectionFlashcards />}
              {activeTool.slug === 'exam-timer' && <ExamTimer />}
              {activeTool.slug === 'legal-maxims' && <LegalMaximsTool />}
              {activeTool.slug === 'landmark-cases' && <LandmarkCasesTool />}
            </div>
          ) : (
            /* Home Hub View */
            <div className="space-y-12">
              {/* Hero Banner */}
              <section className="text-center max-w-3xl mx-auto pt-6 pb-2 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  <span>100% Client-Side • Zero Data Leaves Your Device</span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  Indian Law Learning Tools
                </h2>

                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
                  Free, browser-based practice suite for <strong className="text-blue-600 dark:text-blue-400 font-semibold">AIBE</strong>, <strong className="text-slate-900 dark:text-white font-semibold">State Judiciary</strong>, and the new criminal laws (<strong className="text-slate-900 dark:text-white font-semibold">BNS, BNSS, BSA</strong>).
                </p>
              </section>

              {/* Search & Category Filter */}
              <div className="space-y-4 max-w-4xl mx-auto">
                {/* Search Bar */}
                <div className="relative">
                  <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search tools by exam, subject, or keyword (e.g. AIBE, BNS, timer, flashcard, maxims)..."
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

                {/* Category Pills */}
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

              {/* Tools Grid */}
              <section className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
                  <span>Available Tools ({filteredTools.length})</span>
                  <span>Click any tool to launch instantly</span>
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

              {/* Core Pillars / Privacy Reassurance Card */}
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
                      Unlike traditional test platforms, Codepackr Law executes strictly inside your browser. No accounts required, no tracking cookies, and your practice answers never leave your device.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left pt-4">
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-2 font-semibold text-xs text-slate-900 dark:text-white mb-1">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        <span>Private by Design</span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Zero practice or academic data sent to any backend servers.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-2 font-semibold text-xs text-slate-900 dark:text-white mb-1">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        <span>New Criminal Laws</span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Updated for Bharatiya Nyaya Sanhita (BNS), BNSS, and BSA.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-2 font-semibold text-xs text-slate-900 dark:text-white mb-1">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        <span>Fast & Offline Ready</span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Blazing fast, lightweight React SPA built for instant study.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}
