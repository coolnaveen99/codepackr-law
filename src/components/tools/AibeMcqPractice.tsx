import React, { useState, useMemo, useEffect } from 'react'
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  Bookmark,
  BookmarkCheck,
  Award,
  AlertCircle,
  HelpCircle,
  Clock,
  ListFilter
} from 'lucide-react'
import { ALL_QUESTIONS, SUBJECT_OPTIONS } from '../../data/questions'
import { LawSubject, McqQuestion } from '../../types'
import { Badge } from '../ui/Badge'
import { shuffleArray } from '../../lib/utils'

export const AibeMcqPractice: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<LawSubject>('all')
  const [mode, setMode] = useState<'practice' | 'exam'>('practice')
  const [currentQuestions, setCurrentQuestions] = useState<McqQuestion[]>(() => [...ALL_QUESTIONS])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({})
  const [markedForReview, setMarkedForReview] = useState<Set<string>>(new Set())
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set())
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showDemoFeedback, setShowDemoFeedback] = useState(false)

  // Filter or reload questions when subject changes
  useEffect(() => {
    let list: McqQuestion[]
    if (selectedSubject === 'all') {
      list = [...ALL_QUESTIONS]
    } else {
      list = ALL_QUESTIONS.filter((q) => q.subject === selectedSubject)
    }
    setCurrentQuestions(list)
    setCurrentIndex(0)
    setUserAnswers({})
    setMarkedForReview(new Set())
    setIsSubmitted(false)
  }, [selectedSubject])

  const currentQ: McqQuestion | undefined = currentQuestions[currentIndex]
  const currentSelectedOption = currentQ ? userAnswers[currentQ.id] : undefined

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!currentQ) return
      if (['1', '2', '3', '4'].includes(e.key) && (!isSubmitted || mode === 'practice')) {
        const optionIdx = parseInt(e.key, 10) - 1
        handleSelectOption(optionIdx)
      } else if (e.key.toLowerCase() === 'n' && currentIndex < currentQuestions.length - 1) {
        setCurrentIndex((prev) => prev + 1)
      } else if (e.key.toLowerCase() === 'p' && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentQ, currentIndex, currentQuestions.length, isSubmitted, mode])

  const handleSelectOption = (idx: number) => {
    if (!currentQ) return
    if (isSubmitted && mode === 'exam') return

    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: idx,
    }))
  }

  const toggleMarkForReview = () => {
    if (!currentQ) return
    setMarkedForReview((prev) => {
      const next = new Set(prev)
      if (next.has(currentQ.id)) {
        next.delete(currentQ.id)
      } else {
        next.add(currentQ.id)
      }
      return next
    })
  }

  const toggleBookmark = () => {
    if (!currentQ) return
    setBookmarkedIds((prev) => {
      const next = new Set(prev)
      if (next.has(currentQ.id)) {
        next.delete(currentQ.id)
      } else {
        next.add(currentQ.id)
      }
      return next
    })
  }

  const handleReset = () => {
    setUserAnswers({})
    setMarkedForReview(new Set())
    setIsSubmitted(false)
    setCurrentIndex(0)
    setShowDemoFeedback(false)
  }

  const handleLoadDemo = () => {
    // Quick Demo mock test with 5 curated questions from various subjects
    const demo = shuffleArray([...ALL_QUESTIONS]).slice(0, 5)
    setCurrentQuestions(demo)
    setCurrentIndex(0)
    setUserAnswers({
      [demo[0].id]: demo[0].correctIndex, // answer first one correctly for demo
    })
    setMarkedForReview(new Set([demo[1]?.id]))
    setIsSubmitted(false)
    setShowDemoFeedback(true)
  }

  // Score statistics
  const stats = useMemo(() => {
    let correct = 0
    let attempted = 0
    currentQuestions.forEach((q) => {
      const ans = userAnswers[q.id]
      if (ans !== undefined) {
        attempted++
        if (ans === q.correctIndex) {
          correct++
        }
      }
    })
    const total = currentQuestions.length
    const scorePct = total > 0 ? Math.round((correct / total) * 100) : 0
    const passThreshold = 40 // AIBE pass threshold is 40-45%
    return {
      attempted,
      unattempted: total - attempted,
      correct,
      incorrect: attempted - correct,
      total,
      scorePct,
      passed: scorePct >= passThreshold,
    }
  }, [currentQuestions, userAnswers])

  return (
    <div className="space-y-6">
      {/* Top Header & Controls */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 transition-colors">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                AIBE & Judiciary MCQ Practice
              </h2>
              <Badge variant="blue">Bare Act Focused</Badge>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Practice high-weight Indian law questions with instant section explanations and Bare Act citations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleLoadDemo}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition"
              title="Load a 5-question quick test demo"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Sample Demo</span>
            </button>

            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              title="Reset all answers"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Test</span>
            </button>
          </div>
        </div>

        {/* Demo notification banner */}
        {showDemoFeedback && (
          <div className="mt-4 p-3 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 text-xs text-blue-800 dark:text-blue-200 flex items-center justify-between">
            <span>✨ Demo mode loaded: 5 cross-subject sample questions with one pre-answered and one marked for review.</span>
            <button onClick={() => setShowDemoFeedback(false)} className="underline ml-2">Dismiss</button>
          </div>
        )}

        {/* Filter bar */}
        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <ListFilter className="w-4 h-4 text-slate-400" />
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value as LawSubject)}
              className="text-xs sm:text-sm font-medium px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {SUBJECT_OPTIONS.map((sub) => (
                <option key={sub.value} value={sub.value}>
                  {sub.label} ({sub.count})
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl self-start sm:self-auto">
            <button
              onClick={() => setMode('practice')}
              className={`text-xs px-3 py-1.5 rounded-lg font-medium transition ${
                mode === 'practice'
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Practice Mode (Instant Feedback)
            </button>
            <button
              onClick={() => setMode('exam')}
              className={`text-xs px-3 py-1.5 rounded-lg font-medium transition ${
                mode === 'exam'
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Exam Simulation Mode
            </button>
          </div>
        </div>
      </div>

      {/* Main Practice Area & Question Palette */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Question Box */}
        <div className="lg:col-span-8 space-y-4">
          {currentQ ? (
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-6 transition-colors shadow-xs">
              {/* Question metadata & bookmark */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-lg border border-blue-100 dark:border-blue-900/60">
                    Q {currentIndex + 1} of {currentQuestions.length}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {currentQ.subjectLabel}
                  </span>
                  {currentQ.examSource && (
                    <span className="text-[11px] text-slate-400 dark:text-slate-500 hidden sm:inline">
                      • {currentQ.examSource}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleMarkForReview}
                    className={`text-xs px-2.5 py-1.5 rounded-xl border flex items-center gap-1 transition ${
                      markedForReview.has(currentQ.id)
                        ? 'border-amber-300 bg-amber-50 text-amber-800 dark:bg-amber-950/50 dark:border-amber-800 dark:text-amber-300'
                        : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                    title="Mark question to review later"
                  >
                    <Clock className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Review Later</span>
                  </button>

                  <button
                    onClick={toggleBookmark}
                    className={`p-1.5 rounded-xl border transition ${
                      bookmarkedIds.has(currentQ.id)
                        ? 'border-blue-300 bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:border-blue-800 dark:text-blue-400'
                        : 'border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
                    }`}
                    title="Bookmark question"
                  >
                    {bookmarkedIds.has(currentQ.id) ? (
                      <BookmarkCheck className="w-4 h-4" />
                    ) : (
                      <Bookmark className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Question text */}
              <div className="text-base sm:text-lg font-medium text-slate-900 dark:text-slate-100 leading-relaxed">
                {currentQ.question}
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options.map((option, idx) => {
                  const isSelected = currentSelectedOption === idx
                  const isCorrect = idx === currentQ.correctIndex
                  const showResult =
                    (mode === 'practice' && currentSelectedOption !== undefined) ||
                    (mode === 'exam' && isSubmitted)

                  let optionClass =
                    'border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200'

                  if (showResult) {
                    if (isCorrect) {
                      optionClass =
                        'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-200 font-medium'
                    } else if (isSelected && !isCorrect) {
                      optionClass =
                        'border-rose-400 bg-rose-50 dark:bg-rose-950/50 text-rose-900 dark:text-rose-200'
                    }
                  } else if (isSelected) {
                    optionClass =
                      'border-blue-600 dark:border-blue-500 bg-blue-50/70 dark:bg-blue-950/60 text-blue-950 dark:text-blue-100 font-medium ring-1 ring-blue-600'
                  }

                  const letter = String.fromCharCode(65 + idx) // A, B, C, D

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isSubmitted && mode === 'exam'}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-xl border flex items-start gap-3 transition cursor-pointer ${optionClass}`}
                    >
                      <span
                        className={`w-6 h-6 rounded-lg text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          showResult && isCorrect
                            ? 'bg-emerald-600 text-white'
                            : showResult && isSelected && !isCorrect
                            ? 'bg-rose-600 text-white'
                            : isSelected
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                        }`}
                      >
                        {letter}
                      </span>
                      <span className="flex-1 text-sm sm:text-base leading-snug">{option}</span>
                      {showResult && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                      )}
                      {showResult && isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 flex-shrink-0" />
                      )}
                    </button>
                  )
                })}
              </div>

              {/* Explanation (in practice mode once answered, or exam mode once submitted) */}
              {((mode === 'practice' && currentSelectedOption !== undefined) ||
                (mode === 'exam' && isSubmitted)) && (
                <div className="rounded-xl border border-blue-100 dark:border-blue-900/60 bg-blue-50/60 dark:bg-blue-950/40 p-4 space-y-2 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-800 dark:text-blue-300">
                    <BookOpen className="w-4 h-4" />
                    <span>Bare Act Reference & Judicial Explanation</span>
                  </div>
                  {currentQ.bareActSection && (
                    <div className="inline-block text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/80 text-blue-900 dark:text-blue-200">
                      {currentQ.bareActSection}
                    </div>
                  )}
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {currentQ.explanation}
                  </p>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                <button
                  onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                  disabled={currentIndex === 0}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 disabled:opacity-40 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <div className="text-xs text-slate-400 hidden sm:block">
                  Keyboard: <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">1-4</kbd> to answer, <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">N</kbd> next, <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">P</kbd> prev
                </div>

                {currentIndex < currentQuestions.length - 1 ? (
                  <button
                    onClick={() => setCurrentIndex((prev) => prev + 1)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    <span>Next</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => setIsSubmitted(true)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Finish & See Score</span>
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-12 text-center">
              <AlertCircle className="w-8 h-8 text-slate-400 mx-auto mb-3" />
              <p className="text-slate-600 dark:text-slate-400 font-medium">No questions found for this subject.</p>
              <button
                onClick={() => setSelectedSubject('all')}
                className="mt-3 text-xs font-semibold text-blue-600 hover:underline"
              >
                Switch to All Subjects
              </button>
            </div>
          )}
        </div>

        {/* Sidebar: Question Palette & Score card */}
        <div className="lg:col-span-4 space-y-4">
          {/* Live Progress Card */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-4 transition-colors">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                Test Progress
              </h3>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                {stats.attempted} / {stats.total} Answered
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
              <div
                className="bg-blue-600 h-2 transition-all duration-300 rounded-full"
                style={{ width: `${stats.total > 0 ? (stats.attempted / stats.total) * 100 : 0}%` }}
              />
            </div>

            {/* Score pill if submitted or in practice mode with answers */}
            {(isSubmitted || (mode === 'practice' && stats.attempted > 0)) && (
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block">Current Accuracy</span>
                  <span className="text-base font-bold text-slate-900 dark:text-white">
                    {stats.scorePct}%
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold block">
                    ✓ {stats.correct} Correct
                  </span>
                  <span className="text-rose-500 dark:text-rose-400 block">
                    ✗ {stats.incorrect} Wrong
                  </span>
                </div>
              </div>
            )}

            {/* Question Palette Grid */}
            <div>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block mb-2">
                Question Palette:
              </span>
              <div className="grid grid-cols-5 gap-1.5 max-h-48 overflow-y-auto p-1">
                {currentQuestions.map((q, idx) => {
                  const isCurrent = idx === currentIndex
                  const hasAnswer = userAnswers[q.id] !== undefined
                  const isMarked = markedForReview.has(q.id)

                  let btnBg = 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                  if (hasAnswer) {
                    btnBg = 'bg-blue-600 text-white font-medium'
                  }
                  if (isMarked) {
                    btnBg = 'bg-amber-500 text-white font-medium ring-1 ring-amber-400'
                  }
                  if (isCurrent) {
                    btnBg += ' ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-slate-900'
                  }

                  return (
                    <button
                      key={q.id}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-8 rounded-lg text-xs transition flex items-center justify-center relative ${btnBg}`}
                    >
                      <span>{idx + 1}</span>
                      {bookmarkedIds.has(q.id) && (
                        <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-yellow-300" />
                      )}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Legend */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-2 text-[11px] text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-blue-600" />
                <span>Answered</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-amber-500" />
                <span>Review Later</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-slate-200 dark:bg-slate-700" />
                <span>Unattempted</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm border-2 border-blue-500" />
                <span>Current</span>
              </div>
            </div>

            {!isSubmitted && (
              <button
                onClick={() => setIsSubmitted(true)}
                className="w-full mt-2 py-2.5 rounded-xl bg-blue-600 text-white font-medium text-xs hover:bg-blue-700 transition flex items-center justify-center gap-1.5"
              >
                <Award className="w-4 h-4" />
                <span>Submit & View Complete Analysis</span>
              </button>
            )}
          </div>

          {/* AIBE exam note */}
          <div className="rounded-2xl border border-blue-100 dark:border-blue-900/40 bg-blue-50/40 dark:bg-blue-950/20 p-4 text-xs text-slate-600 dark:text-slate-400 space-y-1.5">
            <div className="flex items-center gap-1.5 font-semibold text-blue-700 dark:text-blue-300">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>AIBE Exam Tip</span>
            </div>
            <p>
              In the All India Bar Examination, only <strong>bare acts without notes/comments</strong> are allowed. Practice identifying the exact section numbers and operative verbs.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
