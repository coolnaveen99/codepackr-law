import React, { useState, useMemo, useEffect } from 'react'
import {
  Search,
  Sparkles,
  RotateCcw,
  Copy,
  Check,
  Filter,
  Layers,
  HelpCircle,
  FileText,
  ArrowRight,
  ArrowLeft,
  Scale,
  ShieldCheck,
  BookOpenCheck,
} from 'lucide-react'
import { SECTION_MAPPINGS } from '../../data/sections/bnsIpcData'
import { SectionMapping } from '../../types'
import { Badge } from '../ui/Badge'

export type SanhitaActType = 'bns-ipc' | 'bnss-crpc' | 'bsa-iea' | 'all'

export interface BnsIpcMapperProps {
  initialAct?: SanhitaActType
  onSelectAct?: (act: SanhitaActType) => void
}

const SANHITA_SLIDES = [
  {
    id: 'bns-ipc' as const,
    slideNum: 1,
    shortTitle: 'BNS ↔ IPC',
    fullName: 'Bharatiya Nyaya Sanhita, 2023',
    repealedName: 'Indian Penal Code, 1860',
    domain: 'Substantive Penal Law & Offences',
    summary: 'Replaces colonial IPC 1860. Introduces community service, mob lynching, organised crime, and replaces sedition with Sec 152.',
    keyPoints: [
      'Community Service as substantive punishment (Sec 4(f))',
      'Mob Lynching punishable with death/life (Sec 103(2))',
      'Sedition replaced by Section 152 (Sovereignty & Unity)',
      'Sexual intercourse on false promise of marriage (Sec 69)',
    ],
    sampleQuery: 'Sedition',
    icon: Scale,
  },
  {
    id: 'bnss-crpc' as const,
    slideNum: 2,
    shortTitle: 'BNSS ↔ CrPC',
    fullName: 'Bharatiya Nagarik Suraksha Sanhita, 2023',
    repealedName: 'Code of Criminal Procedure, 1973',
    domain: 'Criminal Procedure, Remand & Bail',
    summary: 'Replaces CrPC 1973. Mandates Zero FIR, electronic summons, search videography, staggered police custody, and trial in absentia.',
    keyPoints: [
      'Statutory Zero FIR & e-FIR registration (Sec 173(1))',
      'Mandatory audio-video recording of search & seizure (Sec 105)',
      '15-day police custody spread over 40/60 days (Sec 187)',
      'Trial in absentia of proclaimed absconding offenders (Sec 356)',
    ],
    sampleQuery: 'Zero FIR',
    icon: ShieldCheck,
  },
  {
    id: 'bsa-iea' as const,
    slideNum: 3,
    shortTitle: 'BSA ↔ Evidence Act',
    fullName: 'Bharatiya Sakshya Adhiniyam, 2023',
    repealedName: 'Indian Evidence Act, 1872',
    domain: 'Law of Evidence & Digital Records',
    summary: 'Replaces IEA 1872. Recognizes electronic and digital records as primary evidence, updates certificates, and maintains core proof burdens.',
    keyPoints: [
      'Electronic records recognized as primary evidence (Sec 57 & 61-63)',
      'Simplified digital certificate verification under Schedule',
      'Police confessions inadmissible; Sec 23(2) discovery retained',
      'Dying declarations given full evidentiary weight (Sec 26)',
    ],
    sampleQuery: 'Electronic',
    icon: BookOpenCheck,
  },
] as const

export const BnsIpcMapper: React.FC<BnsIpcMapperProps> = ({
  initialAct = 'bns-ipc',
  onSelectAct,
}) => {
  const [selectedAct, setSelectedAct] = useState<SanhitaActType>(initialAct)
  const [searchQuery, setSearchQuery] = useState('')
  const [highlightsOnly, setHighlightsOnly] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [visibleCount, setVisibleCount] = useState<number>(30)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [demoNotice, setDemoNotice] = useState<string | null>(null)

  useEffect(() => {
    if (initialAct) {
      setSelectedAct(initialAct)
      setSelectedCategory('all')
      setVisibleCount(30)
    }
  }, [initialAct])

  const handleActChange = (act: SanhitaActType) => {
    setSelectedAct(act)
    setSelectedCategory('all')
    setVisibleCount(30)
    setDemoNotice(null)
    onSelectAct?.(act)
  }

  // Slide navigation: 1 -> 2 -> 3 -> 1
  const currentSlideIndex = useMemo(() => {
    if (selectedAct === 'all') return -1
    return SANHITA_SLIDES.findIndex((s) => s.id === selectedAct)
  }, [selectedAct])

  const handlePrevSlide = () => {
    const nextIdx = currentSlideIndex <= 0 ? SANHITA_SLIDES.length - 1 : currentSlideIndex - 1
    handleActChange(SANHITA_SLIDES[nextIdx].id)
  }

  const handleNextSlide = () => {
    const nextIdx = currentSlideIndex >= SANHITA_SLIDES.length - 1 ? 0 : currentSlideIndex + 1
    handleActChange(SANHITA_SLIDES[nextIdx].id)
  }

  // Available categories for the currently selected Act
  const availableCategories = useMemo(() => {
    const categories = new Set<string>()
    SECTION_MAPPINGS.forEach((item) => {
      if (selectedAct === 'all' || item.actType === selectedAct) {
        if (item.category) categories.add(item.category)
      }
    })
    return Array.from(categories).sort()
  }, [selectedAct])

  const filteredMappings = useMemo(() => {
    return SECTION_MAPPINGS.filter((item) => {
      if (selectedAct !== 'all' && item.actType !== selectedAct) {
        return false
      }
      if (highlightsOnly && !item.highlight) {
        return false
      }
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false
      }
      if (!searchQuery.trim()) {
        return true
      }
      const q = searchQuery.toLowerCase().trim()
      return (
        item.newSection.toLowerCase().includes(q) ||
        item.newTitle.toLowerCase().includes(q) ||
        item.oldSection.toLowerCase().includes(q) ||
        item.oldTitle.toLowerCase().includes(q) ||
        item.keyChanges.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      )
    })
  }, [searchQuery, selectedAct, highlightsOnly, selectedCategory])

  const displayedMappings = useMemo(() => {
    return filteredMappings.slice(0, visibleCount)
  }, [filteredMappings, visibleCount])

  const handleCopy = (item: SectionMapping) => {
    const text = `[${item.newAct}] ${item.newSection} (${item.newTitle}) ↔ [${item.oldAct}] ${item.oldSection} (${item.oldTitle})\nKey Changes: ${item.keyChanges}\nNotes: ${item.punishmentOrNotes || 'N/A'}`
    navigator.clipboard.writeText(text)
    setCopiedId(item.id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const handleSampleSearch = (query: string, act: SanhitaActType, label: string) => {
    setSearchQuery(query)
    setSelectedAct(act)
    setSelectedCategory('all')
    setHighlightsOnly(false)
    setVisibleCount(30)
    setDemoNotice(label)
    onSelectAct?.(act)
  }

  const handleReset = () => {
    setSearchQuery('')
    setSelectedCategory('all')
    setHighlightsOnly(false)
    setVisibleCount(30)
    setDemoNotice(null)
  }

  const activeSlideData = currentSlideIndex >= 0 ? SANHITA_SLIDES[currentSlideIndex] : null

  return (
    <div className="space-y-6">
      {/* 1. Header Card */}
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="blue" className="text-xs uppercase tracking-wider font-extrabold">
                2024 New Criminal Laws In Force
              </Badge>
              <span className="text-xs text-slate-500 dark:text-slate-400">w.e.f. 1 July 2024</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950 dark:text-white">
              Sanhita Concordance &amp; Change Mapper
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-3xl leading-relaxed">
              Interactive 3-slide statutory concordance library. Compare provision-by-provision changes between the 2023 Sanhitas and the repealed colonial codes (IPC 1860, CrPC 1973, and Evidence Act 1872).
            </p>
          </div>

          {/* Slide Navigation Indicator and Next/Prev Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handlePrevSlide}
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition"
              title="View Previous Slide"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Prev Slide</span>
            </button>
            <button
              type="button"
              onClick={handleNextSlide}
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition shadow-xs"
              title="View Next Slide"
            >
              <span>Next Slide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 2. Three Interactive Slide Cards (BNS, BNSS, BSA Links) */}
        <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Select Concordance Slide (3 Slides Available)
            </span>
            <button
              type="button"
              onClick={() => handleActChange('all')}
              className={`text-xs font-bold px-3 py-1 rounded-xl transition ${
                selectedAct === 'all'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-950/40'
              }`}
            >
              View All 3 Slides (Unified Comparison)
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {SANHITA_SLIDES.map((slide) => {
              const Icon = slide.icon
              const isActive = selectedAct === slide.id
              const count = SECTION_MAPPINGS.filter((m) => m.actType === slide.id).length
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => handleActChange(slide.id)}
                  className={`group relative text-left rounded-2xl p-4 transition-all duration-200 border flex flex-col justify-between ${
                    isActive
                      ? 'border-blue-600 dark:border-blue-500 bg-blue-50/70 dark:bg-blue-950/50 shadow-sm ring-2 ring-blue-500/30'
                      : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:border-blue-300 dark:hover:border-blue-800 hover:bg-white dark:hover:bg-slate-800'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span
                        className={`text-[11px] font-extrabold uppercase px-2 py-0.5 rounded-lg tracking-wider ${
                          isActive
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        Slide {slide.slideNum} of 3
                      </span>
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                        {count} Sections Mapped
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-1">
                      <div
                        className={`size-8 rounded-xl flex items-center justify-center transition-colors ${
                          isActive
                            ? 'bg-blue-600 text-white'
                            : 'bg-white dark:bg-slate-700 text-blue-700 dark:text-blue-300 border border-slate-200 dark:border-slate-700'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3
                        className={`font-black text-base ${
                          isActive
                            ? 'text-blue-900 dark:text-blue-100'
                            : 'text-slate-900 dark:text-white'
                        }`}
                      >
                        {slide.shortTitle}
                      </h3>
                    </div>

                    <p className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 line-clamp-1">
                      {slide.fullName}
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-500 mb-2">
                      Replaces: {slide.repealedName}
                    </p>

                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                      {slide.summary}
                    </p>
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-200/70 dark:border-slate-700/60 flex items-center justify-between text-xs font-bold">
                    <span
                      className={
                        isActive
                          ? 'text-blue-700 dark:text-blue-300'
                          : 'text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400'
                      }
                    >
                      {isActive ? '● Currently Active Slide' : 'Click to View Slide →'}
                    </span>
                    <ArrowRight
                      className={`w-3.5 h-3.5 transition-transform ${
                        isActive ? 'text-blue-600 translate-x-0.5' : 'text-slate-400 group-hover:translate-x-1'
                      }`}
                    />
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* 3. Search and Quick Filter Bar */}
        <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 space-y-3">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setDemoNotice(null)
                }}
                placeholder="Search section number (e.g. 103, 152, 173, 61, 302, 65B), title, or keywords..."
                className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Chapter / Cluster Dropdown */}
            <div className="relative shrink-0 sm:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value)
                  setVisibleCount(30)
                }}
                aria-label="Filter by chapter or subject cluster"
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              >
                <option value="all">All Chapters / Clusters ({availableCategories.length})</option>
                {availableCategories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Major Changes Filter */}
            <button
              type="button"
              onClick={() => {
                setHighlightsOnly(!highlightsOnly)
                setVisibleCount(30)
              }}
              className={`text-xs px-3.5 py-2.5 rounded-xl border flex items-center justify-center gap-1.5 transition font-bold shrink-0 ${
                highlightsOnly
                  ? 'border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-700'
                  : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <Filter className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Major Reforms Only</span>
            </button>

            {/* Reset */}
            {(searchQuery || highlightsOnly || selectedCategory !== 'all' || selectedAct !== initialAct) && (
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center justify-center gap-1.5 text-xs font-bold px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition shrink-0"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

          {/* Sample Query Shortcuts */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            <span className="text-slate-400 font-bold whitespace-nowrap mr-1 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Quick Searches:
            </span>
            <button
              type="button"
              onClick={() => handleSampleSearch('Sedition', 'bns-ipc', 'BNS Sec 152 vs IPC Sec 124A (Sedition Replaced)')}
              className="px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-blue-400 whitespace-nowrap transition"
            >
              Slide 1: Sedition (Sec 152)
            </button>
            <button
              type="button"
              onClick={() => handleSampleSearch('Mob Lynching', 'bns-ipc', 'BNS Sec 103(2) (Mob Lynching Offence)')}
              className="px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-blue-400 whitespace-nowrap transition"
            >
              Slide 1: Mob Lynching (Sec 103(2))
            </button>
            <button
              type="button"
              onClick={() => handleSampleSearch('Zero FIR', 'bnss-crpc', 'BNSS Sec 173(1) vs CrPC Sec 154 (Zero FIR & e-FIR)')}
              className="px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-blue-400 whitespace-nowrap transition"
            >
              Slide 2: Zero FIR (Sec 173)
            </button>
            <button
              type="button"
              onClick={() => handleSampleSearch('Custody', 'bnss-crpc', 'BNSS Sec 187 vs CrPC Sec 167 (Police Custody)')}
              className="px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-blue-400 whitespace-nowrap transition"
            >
              Slide 2: Police Remand (Sec 187)
            </button>
            <button
              type="button"
              onClick={() => handleSampleSearch('Electronic', 'bsa-iea', 'BSA Sec 61 & 63 vs IEA Sec 65B (Electronic Evidence)')}
              className="px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-blue-400 whitespace-nowrap transition"
            >
              Slide 3: Electronic Records (Sec 61-63)
            </button>
            <button
              type="button"
              onClick={() => handleSampleSearch('Burden', 'bsa-iea', 'BSA Sec 104-106 vs IEA Sec 101-103 (Burden of Proof)')}
              className="px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-blue-400 whitespace-nowrap transition"
            >
              Slide 3: Burden of Proof (Sec 104)
            </button>
          </div>
        </div>

        {demoNotice && (
          <div className="mt-4 p-3 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 text-xs text-blue-900 dark:text-blue-200 flex items-center justify-between">
            <span>✨ Showing query for <strong>{demoNotice}</strong>.</span>
            <button type="button" onClick={handleReset} className="underline font-bold ml-2">Clear Filter</button>
          </div>
        )}
      </div>

      {/* 4. Active Slide Overview Callout (When on a specific slide) */}
      {activeSlideData && (
        <div className="rounded-2xl border border-blue-200 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-950/30 p-4 sm:p-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-black uppercase px-2 py-0.5 rounded-md bg-blue-600 text-white">
                  Viewing Slide {activeSlideData.slideNum} of 3
                </span>
                <span className="text-sm font-black text-slate-900 dark:text-white">
                  {activeSlideData.fullName}
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {activeSlideData.summary}
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                Switch slide:
              </span>
              {SANHITA_SLIDES.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => handleActChange(s.id)}
                  className={`text-xs font-bold px-2.5 py-1 rounded-lg border transition ${
                    selectedAct === s.id
                      ? 'border-blue-600 bg-blue-600 text-white'
                      : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-blue-400'
                  }`}
                >
                  Slide {s.slideNum} ({s.shortTitle.split(' ')[0]})
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 5. Results Counter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs text-slate-500 dark:text-slate-400 px-1 font-medium">
        <span>
          Showing <strong>{displayedMappings.length}</strong> of <strong>{filteredMappings.length}</strong> section concordance pairs{' '}
          {selectedAct !== 'all' ? `for ${SANHITA_SLIDES.find((s) => s.id === selectedAct)?.shortTitle}` : 'across all 3 Sanhitas'}
          {selectedCategory !== 'all' && ` (Filtered: ${selectedCategory})`}
        </span>
        <span>Click the copy button on any card to export citations</span>
      </div>

      {/* 6. Section Concordance Grid */}
      {displayedMappings.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {displayedMappings.map((item) => {
              const isCopied = copiedId === item.id
              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-4 hover:border-blue-300 dark:hover:border-blue-700 transition relative flex flex-col justify-between shadow-xs"
                >
                  <div>
                    {/* Category & Badges */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        {item.category}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {item.highlight && <Badge variant="amber">Major Reform</Badge>}
                        <button
                          type="button"
                          onClick={() => handleCopy(item)}
                          aria-label="Copy section reference"
                          className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition"
                          title="Copy citation to clipboard"
                        >
                          {isCopied ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Mapping Comparison Box */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800">
                      <div>
                        <div className="text-[10px] font-black text-blue-700 dark:text-blue-400 uppercase tracking-wider">
                          {item.newAct} (In Force)
                        </div>
                        <div className="text-sm font-black text-slate-950 dark:text-white mt-0.5">
                          {item.newSection}
                        </div>
                        <div className="text-xs text-slate-700 dark:text-slate-300 font-medium line-clamp-2 mt-0.5">
                          {item.newTitle}
                        </div>
                      </div>

                      <div className="pt-2 sm:pt-0 sm:pl-3 border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-slate-700">
                        <div className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                          {item.oldAct} (Repealed)
                        </div>
                        <div className="text-sm font-bold text-slate-700 dark:text-slate-300 mt-0.5">
                          {item.oldSection}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-0.5">
                          {item.oldTitle}
                        </div>
                      </div>
                    </div>

                    {/* Key Changes Description */}
                    <div className="mt-3 space-y-1">
                      <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200 block">
                        Key Reforms &amp; Practical Distinction:
                      </span>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.keyChanges}
                      </p>
                    </div>
                  </div>

                  {/* Punishment / Judicial Notes */}
                  {item.punishmentOrNotes && (
                    <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 text-[11px] text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                      <span className="truncate">{item.punishmentOrNotes}</span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Pagination / Load More Controls */}
          {filteredMappings.length > displayedMappings.length && (
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 text-center space-y-3">
              <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                Showing <strong>{displayedMappings.length}</strong> of <strong>{filteredMappings.length}</strong> section comparisons.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setVisibleCount((prev) => Math.min(prev + 30, filteredMappings.length))}
                  className="px-4 py-2 rounded-xl border border-blue-300 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-bold hover:bg-blue-100 dark:hover:bg-blue-900/60 transition shadow-xs"
                >
                  Load 30 More Provisions
                </button>
                <button
                  type="button"
                  onClick={() => setVisibleCount(filteredMappings.length)}
                  className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-700 transition"
                >
                  Show All ({filteredMappings.length}) Provisions
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-12 text-center">
          <Layers className="w-8 h-8 text-slate-400 mx-auto mb-2" />
          <p className="text-sm font-bold text-slate-800 dark:text-slate-200">No matching sections found</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Try searching for "302", "152", "173", "electronic evidence", or click Clear Filters.
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="mt-4 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* 7. Exam & Courtroom Notice */}
      <div className="rounded-2xl border border-blue-100 dark:border-blue-900/40 bg-blue-50/40 dark:bg-blue-950/20 p-4 text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2.5">
        <HelpCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-blue-700 dark:text-blue-300 block mb-0.5">
            Advocacy &amp; Exam Concordance Standard:
          </span>
          Pursuant to Section 358 BNS, offences committed prior to 1 July 2024 continue to be investigated, inquired, and tried in accordance with the provisions of the Indian Penal Code, 1860 and the CrPC, 1973 as if those Acts had not been repealed. For all post-1 July 2024 acts and proceedings, BNS, BNSS, and BSA apply mandatorily.
        </div>
      </div>
    </div>
  )
}
