import React, { useState, useMemo } from 'react'
import {
  Search,
  RotateCcw,
  Sparkles,
  BookOpen,
  CheckCircle2,
  XCircle,
  Copy,
  Check
} from 'lucide-react'
import { LEGAL_MAXIMS } from '../../data/reference/maximsData'
import { LegalMaxim } from '../../types'
import { Badge } from '../ui/Badge'
import { shuffleArray } from '../../lib/utils'

export const LegalMaximsTool: React.FC = () => {
  const [viewMode, setViewMode] = useState<'dictionary' | 'quiz'>('dictionary')
  const [searchQuery, setSearchQuery] = useState('')
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [demoBanner, setDemoBanner] = useState(false)

  // Quiz state
  const [quizDeck, setQuizDeck] = useState<LegalMaxim[]>(() => shuffleArray([...LEGAL_MAXIMS]))
  const [quizIndex, setQuizIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [quizFinished, setQuizFinished] = useState(false)

  const filteredMaxims = useMemo(() => {
    if (!searchQuery.trim()) return LEGAL_MAXIMS
    const q = searchQuery.toLowerCase()
    return LEGAL_MAXIMS.filter(
      (m) =>
        m.latin.toLowerCase().includes(q) ||
        m.meaning.toLowerCase().includes(q) ||
        m.literalTranslation.toLowerCase().includes(q) ||
        m.application.toLowerCase().includes(q)
    )
  }, [searchQuery])

  const handleCopy = (m: LegalMaxim) => {
    const text = `[Legal Maxim] ${m.latin}\nTranslation: ${m.literalTranslation}\nLegal Meaning: ${m.meaning}\nApplication: ${m.application}\nKey Case: ${m.keyCaseOrSubject}`
    navigator.clipboard.writeText(text)
    setCopiedId(m.id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const handleDemo = () => {
    setViewMode('dictionary')
    setSearchQuery('Audi alteram partem')
    setDemoBanner(true)
  }

  const handleReset = () => {
    setSearchQuery('')
    setDemoBanner(false)
    setQuizDeck(shuffleArray([...LEGAL_MAXIMS]))
    setQuizIndex(0)
    setSelectedAnswer(null)
    setScore(0)
    setQuizFinished(false)
  }

  // Generate quiz options for current quiz question
  const currentQuizItem: LegalMaxim | undefined = quizDeck[quizIndex]
  const quizOptions = useMemo(() => {
    if (!currentQuizItem) return []
    const wrongOptions = LEGAL_MAXIMS.filter((m) => m.id !== currentQuizItem.id)
    const shuffledWrong = shuffleArray(wrongOptions).slice(0, 3)
    const combined = shuffleArray([currentQuizItem, ...shuffledWrong])
    return combined
  }, [currentQuizItem])

  const handleSelectQuizOption = (option: LegalMaxim) => {
    if (selectedAnswer !== null || !currentQuizItem) return
    setSelectedAnswer(option.id)
    if (option.id === currentQuizItem.id) {
      setScore((s) => s + 1)
    }
  }

  const handleNextQuiz = () => {
    if (quizIndex < quizDeck.length - 1) {
      setQuizIndex((prev) => prev + 1)
      setSelectedAnswer(null)
    } else {
      setQuizFinished(true)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header card */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 transition-colors">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Legal Maxims Quiz & Dictionary
              </h2>
              <Badge variant="blue">Jurisprudence</Badge>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Essential Latin maxims, English translations, and legal doctrines tested in AIBE and Judiciary exams.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDemo}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition"
              title="Search for Audi alteram partem"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Sample: Natural Justice</span>
            </button>
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              title="Reset search / quiz"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {demoBanner && (
          <div className="mt-4 p-3 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 text-xs text-blue-800 dark:text-blue-200 flex items-center justify-between">
            <span>✨ Showing "Audi alteram partem" (Natural Justice rule to hear the other side).</span>
            <button onClick={() => setDemoBanner(false)} className="underline ml-2">Dismiss</button>
          </div>
        )}

        {/* View toggle */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
          <button
            onClick={() => setViewMode('dictionary')}
            className={`text-xs px-3.5 py-2 rounded-xl font-medium transition ${
              viewMode === 'dictionary'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            Dictionary & Search Mode
          </button>
          <button
            onClick={() => setViewMode('quiz')}
            className={`text-xs px-3.5 py-2 rounded-xl font-medium transition ${
              viewMode === 'quiz'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            Interactive Quiz Challenge
          </button>
        </div>
      </div>

      {viewMode === 'dictionary' ? (
        <div className="space-y-4">
          {/* Search bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setDemoBanner(false)
              }}
              placeholder="Search by Latin phrase (e.g. Mens rea, Volenti), English meaning, or case..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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

          <div className="text-xs text-slate-500 dark:text-slate-400">
            Showing {filteredMaxims.length} legal maxims
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredMaxims.map((m) => {
              const isCopied = copiedId === m.id
              return (
                <div
                  key={m.id}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-3 hover:border-blue-300 dark:hover:border-blue-700 transition relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-blue-600 dark:text-blue-400 italic">
                        {m.latin}
                      </h3>
                      <button
                        onClick={() => handleCopy(m)}
                        aria-label="Copy maxim details"
                        className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                        title="Copy maxim"
                      >
                        {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">
                      Literal: <span className="text-slate-500 dark:text-slate-400 italic font-normal">"{m.literalTranslation}"</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-2">
                      {m.meaning}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1 text-[11px] text-slate-500 dark:text-slate-400">
                    <div>
                      <span className="font-semibold text-slate-700 dark:text-slate-300">Field: </span>
                      <span>{m.application}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-700 dark:text-slate-300">Key Precedent: </span>
                      <span className="italic">{m.keyCaseOrSubject}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ) : (
        /* Quiz Mode */
        <div className="max-w-xl mx-auto space-y-4">
          {!quizFinished && currentQuizItem ? (
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-6">
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>
                  Question {quizIndex + 1} of {quizDeck.length}
                </span>
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  Score: {score}
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">
                  What does this Latin maxim mean?
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-blue-600 dark:text-blue-400 italic">
                  {currentQuizItem.latin}
                </h3>
              </div>

              <div className="space-y-2.5">
                {quizOptions.map((option) => {
                  const isSelected = selectedAnswer === option.id
                  const isCorrect = option.id === currentQuizItem.id

                  let optClass =
                    'border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200'
                  if (selectedAnswer !== null) {
                    if (isCorrect) {
                      optClass = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-200'
                    } else if (isSelected && !isCorrect) {
                      optClass = 'border-rose-400 bg-rose-50 dark:bg-rose-950/50 text-rose-900 dark:text-rose-200'
                    }
                  }

                  return (
                    <button
                      key={option.id}
                      onClick={() => handleSelectQuizOption(option)}
                      disabled={selectedAnswer !== null}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm leading-relaxed transition ${optClass}`}
                    >
                      {option.literalTranslation} ({option.meaning.slice(0, 110)}...)
                    </button>
                  )
                })}
              </div>

              {selectedAnswer !== null && (
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-semibold">
                    {selectedAnswer === currentQuizItem.id ? (
                      <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" /> Correct!
                      </span>
                    ) : (
                      <span className="text-rose-600 dark:text-rose-400 flex items-center gap-1">
                        <XCircle className="w-4 h-4" /> Incorrect
                      </span>
                    )}
                  </div>
                  <button
                    onClick={handleNextQuiz}
                    className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition"
                  >
                    {quizIndex < quizDeck.length - 1 ? 'Next Maxim' : 'Finish Quiz'}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 text-center space-y-4">
              <BookOpen className="w-12 h-12 text-blue-600 mx-auto" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Quiz Completed!</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                You scored <strong className="text-blue-600">{score}</strong> out of {quizDeck.length}.
              </p>
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Try Again</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
