import React, { useState, useMemo } from 'react'
import {
  Search,
  Sparkles,
  RotateCcw,
  Copy,
  Check,
  Filter,
  Layers,
  HelpCircle,
  FileText
} from 'lucide-react'
import { SECTION_MAPPINGS } from '../../data/sections/bnsIpcData'
import { SectionMapping } from '../../types'
import { Badge } from '../ui/Badge'

export const BnsIpcMapper: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedAct, setSelectedAct] = useState<'all' | 'bns-ipc' | 'bnss-crpc' | 'bsa-iea'>('all')
  const [highlightsOnly, setHighlightsOnly] = useState(false)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [demoActive, setDemoActive] = useState(false)

  const filteredMappings = useMemo(() => {
    return SECTION_MAPPINGS.filter((item) => {
      if (selectedAct !== 'all' && item.actType !== selectedAct) {
        return false
      }
      if (highlightsOnly && !item.highlight) {
        return false
      }
      if (!searchQuery.trim()) {
        return true
      }
      const q = searchQuery.toLowerCase()
      return (
        item.newSection.toLowerCase().includes(q) ||
        item.newTitle.toLowerCase().includes(q) ||
        item.oldSection.toLowerCase().includes(q) ||
        item.oldTitle.toLowerCase().includes(q) ||
        item.keyChanges.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      )
    })
  }, [searchQuery, selectedAct, highlightsOnly])

  const handleCopy = (item: SectionMapping) => {
    const text = `[${item.newAct}] ${item.newSection} (${item.newTitle}) ↔ [${item.oldAct}] ${item.oldSection} (${item.oldTitle})\nKey Changes: ${item.keyChanges}\nNotes: ${item.punishmentOrNotes || 'N/A'}`
    navigator.clipboard.writeText(text)
    setCopiedId(item.id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const handleDemo = () => {
    setSearchQuery('Sedition')
    setSelectedAct('bns-ipc')
    setHighlightsOnly(false)
    setDemoActive(true)
  }

  const handleReset = () => {
    setSearchQuery('')
    setSelectedAct('all')
    setHighlightsOnly(false)
    setDemoActive(false)
  }

  return (
    <div className="space-y-6">
      {/* Header card */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 transition-colors">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                BNS ↔ IPC & Criminal Laws Mapper
              </h2>
              <Badge variant="blue">2024 Criminal Codes</Badge>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Cross-reference sections between Bharatiya Nyaya Sanhita (BNS), BNSS, BSA and the repealed IPC, CrPC, and Evidence Act.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDemo}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition"
              title="Search for Sedition / Sec 152"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Sample: Sedition</span>
            </button>
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              title="Reset all filters"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {demoActive && (
          <div className="mt-4 p-3 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 text-xs text-blue-800 dark:text-blue-200 flex items-center justify-between">
            <span>✨ Showing sample query for "Sedition" showing BNS Sec 152 vs IPC Sec 124A.</span>
            <button onClick={handleReset} className="underline ml-2">Clear Filter</button>
          </div>
        )}

        {/* Filter controls */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setDemoActive(false)
                }}
                placeholder="Search section number (e.g. 302, 152, 65B), title, or keywords (e.g. mob lynching)..."
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Highlights Only Toggle */}
            <button
              onClick={() => setHighlightsOnly(!highlightsOnly)}
              className={`text-xs px-3.5 py-2.5 rounded-xl border flex items-center justify-center gap-1.5 transition font-medium ${
                highlightsOnly
                  ? 'border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-700'
                  : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <Filter className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Major Changes Only</span>
            </button>
          </div>

          {/* Act Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            <span className="text-slate-400 font-medium whitespace-nowrap mr-1">Law Act:</span>
            {[
              { id: 'all', label: 'All Criminal Laws' },
              { id: 'bns-ipc', label: 'BNS ↔ IPC (Penal)' },
              { id: 'bnss-crpc', label: 'BNSS ↔ CrPC (Procedure)' },
              { id: 'bsa-iea', label: 'BSA ↔ Evidence Act' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedAct(tab.id as any)}
                className={`px-3 py-1.5 rounded-xl font-medium whitespace-nowrap transition ${
                  selectedAct === tab.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
        <span>Showing {filteredMappings.length} section mappings</span>
        <span>Click copy button on any card to copy citation</span>
      </div>

      {/* Grid of Mappings */}
      {filteredMappings.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredMappings.map((item) => {
            const isCopied = copiedId === item.id
            return (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-4 hover:border-blue-300 dark:hover:border-blue-700 transition relative flex flex-col justify-between"
              >
                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {item.highlight && <Badge variant="amber">Major Reform</Badge>}
                      <button
                        onClick={() => handleCopy(item)}
                        aria-label="Copy section reference"
                        className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition"
                        title="Copy to clipboard"
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                    <div>
                      <div className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                        {item.newAct} (New)
                      </div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                        {item.newSection}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 mt-0.5">
                        {item.newTitle}
                      </div>
                    </div>

                    <div className="pt-2 sm:pt-0 sm:pl-2 border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-slate-700">
                      <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
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
                    <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 block">
                      Key Reforms & Distinction:
                    </span>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.keyChanges}
                    </p>
                  </div>
                </div>

                {/* Punishment or Notes Footer */}
                {item.punishmentOrNotes && (
                  <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                    <span className="truncate">{item.punishmentOrNotes}</span>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      ) : (
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-12 text-center">
          <Layers className="w-8 h-8 text-slate-400 mx-auto mb-2" />
          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">No matching sections found</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Try searching for "302", "152", "173", "electronic evidence", or click Reset.
          </p>
          <button
            onClick={handleReset}
            className="mt-4 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Helpful Info Note */}
      <div className="rounded-2xl border border-blue-100 dark:border-blue-900/40 bg-blue-50/40 dark:bg-blue-950/20 p-4 text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2.5">
        <HelpCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-blue-700 dark:text-blue-300 block mb-0.5">Exam Notice:</span>
          The new criminal laws came into effect on 1st July 2024. For pending trials of offences committed prior to July 1, 2024, the substantive IPC provisions remain applicable under Section 358 BNS. Modern AIBE and State Judiciary tests frequently question these exact cross-mappings.
        </div>
      </div>
    </div>
  )
}
