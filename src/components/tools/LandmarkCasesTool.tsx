import React, { useState, useMemo } from 'react'
import {
  Search,
  RotateCcw,
  Sparkles,
  Copy,
  Check,
  Calendar,
  Users,
} from 'lucide-react'
import { LANDMARK_CASES } from '../../data/reference/landmarkCasesData'
import { LandmarkCase } from '../../types'
import { Badge } from '../ui/Badge'

export const LandmarkCasesTool: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [demoBanner, setDemoBanner] = useState(false)

  const filteredCases = useMemo(() => {
    if (!searchQuery.trim()) return LANDMARK_CASES
    const q = searchQuery.toLowerCase()
    return LANDMARK_CASES.filter(
      (c) =>
        c.caseName.toLowerCase().includes(q) ||
        c.subject.toLowerCase().includes(q) ||
        c.ratioDecidendi.toLowerCase().includes(q) ||
        c.significance.toLowerCase().includes(q) ||
        c.keyArticlesOrSections.some((sec) => sec.toLowerCase().includes(q))
    )
  }, [searchQuery])

  const handleCopy = (c: LandmarkCase) => {
    const text = `[Landmark Case] ${c.caseName} (${c.year}) ${c.citation || ''}\nBench: ${c.bench || 'N/A'}\nSubject: ${c.subject}\nRatio Decidendi: ${c.ratioDecidendi}\nSignificance: ${c.significance}\nArticles/Sections: ${c.keyArticlesOrSections.join(', ')}`
    navigator.clipboard.writeText(text)
    setCopiedId(c.id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const handleDemo = () => {
    setSearchQuery('Kesavananda')
    setDemoBanner(true)
  }

  const handleReset = () => {
    setSearchQuery('')
    setDemoBanner(false)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 transition-colors">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Landmark Case Laws Flashcards
              </h2>
              <Badge variant="blue">Supreme Court Precedents</Badge>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Foundational Supreme Court of India rulings, ratio decidendi, bench details, and exam significance.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDemo}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition"
              title="Show Kesavananda Bharati case"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Sample: Basic Structure</span>
            </button>
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              title="Reset search"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {demoBanner && (
          <div className="mt-4 p-3 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 text-xs text-blue-800 dark:text-blue-200 flex items-center justify-between">
            <span>✨ Showing Kesavananda Bharati v. State of Kerala (1973) 13-Judge Bench ruling.</span>
            <button onClick={handleReset} className="underline ml-2">Clear</button>
          </div>
        )}

        {/* Search */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setDemoBanner(false)
              }}
              placeholder="Search case name, subject, Article (e.g. Art 21), or keywords (e.g. privacy, FIR, arrest)..."
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
        </div>
      </div>

      <div className="text-xs text-slate-500 dark:text-slate-400 px-1">
        Showing {filteredCases.length} landmark judgments
      </div>

      {/* Grid of cases */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredCases.map((c) => {
          const isCopied = copiedId === c.id
          return (
            <div
              key={c.id}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-4 hover:border-blue-300 dark:hover:border-blue-700 transition relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="space-y-1">
                    <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 block">
                      {c.subject}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {c.caseName}
                    </h3>
                  </div>
                  <button
                    onClick={() => handleCopy(c)}
                    aria-label="Copy case citation"
                    className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition flex-shrink-0"
                    title="Copy citation & holding"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Bench & Year Metadata */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-blue-500" />
                    <span>{c.year}</span>
                  </span>
                  {c.citation && <span className="font-mono text-[11px]">{c.citation}</span>}
                  {c.bench && (
                    <span className="flex items-center gap-1 text-[11px]">
                      <Users className="w-3 h-3 text-slate-400" />
                      <span>{c.bench}</span>
                    </span>
                  )}
                </div>

                {/* Ratio Decidendi */}
                <div className="space-y-1.5 bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800">
                  <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide block">
                    Ratio Decidendi (Core Ruling):
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                    {c.ratioDecidendi}
                  </p>
                </div>

                {/* Significance */}
                <div className="mt-3 text-xs text-slate-600 dark:text-slate-400">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Exam Significance: </span>
                  <span>{c.significance}</span>
                </div>
              </div>

              {/* Key Sections Tags */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
                {c.keyArticlesOrSections.map((sec, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900"
                  >
                    {sec}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
