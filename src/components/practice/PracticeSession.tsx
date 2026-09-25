import React, { useEffect, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  BookmarkCheck,
  CheckCircle2,
  Clock,
  Award,
  HelpCircle,
} from 'lucide-react'
import { McqQuestion } from '../../types'
import { QuestionRenderer } from './QuestionRenderer'
import { formatDuration } from '../../lib/utils'

export interface PracticeSessionProps {
  questions: McqQuestion[]
  onFinish: (userAnswers: Record<string, number>, elapsedSeconds: number) => void
  onExit: () => void
  onOpenTopic?: (subjectSlug: string, topicId: string) => void
  initialAnswers?: Record<string, number>
}

export const PracticeSession: React.FC<PracticeSessionProps> = ({
  questions,
  onFinish,
  onExit,
  onOpenTopic,
  initialAnswers = {},
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>(initialAnswers)
  const [markedForReview, setMarkedForReview] = useState<Set<string>>(new Set())
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set())
  const [elapsedSeconds, setElapsedSeconds] = useState(0)

  // Timer runs during practice session
  useEffect(() => {
    const timer = window.setInterval(() => {
      setElapsedSeconds((sec) => sec + 1)
    }, 1000)
    return () => window.clearInterval(timer)
  }, [])

  const currentQ = questions[currentIndex]
  const currentSelectedOption = currentQ ? userAnswers[currentQ.id] : undefined

  const selectOption = (idx: number) => {
    if (!currentQ) return
    setUserAnswers((prev) => ({ ...prev, [currentQ.id]: idx }))
  }

  // Keyboard navigation: 1-4 for answers, N next, P previous
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input
      if (['input', 'textarea', 'select'].includes((e.target as HTMLElement)?.tagName?.toLowerCase())) return
      if (!currentQ) return
      if (/^[1-4]$/.test(e.key)) {
        selectOption(Number(e.key) - 1)
      }
      if (e.key.toLowerCase() === 'n') {
        setCurrentIndex((i) => Math.min(questions.length - 1, i + 1))
      }
      if (e.key.toLowerCase() === 'p') {
        setCurrentIndex((i) => Math.max(0, i - 1))
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [currentQ, questions.length])

  // Stats
  const attempted = questions.filter((q) => userAnswers[q.id] !== undefined).length
  const correct = questions.filter((q) => userAnswers[q.id] === q.correctIndex).length
  const incorrect = attempted - correct
  const unattempted = questions.length - attempted

  const toggleSet = (setter: React.Dispatch<React.SetStateAction<Set<string>>>, id: string) => {
    setter((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  if (!currentQ) {
    return (
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-12 text-center">
        <p className="text-slate-500">No questions loaded for this session.</p>
        <button
          type="button"
          onClick={onExit}
          className="mt-4 px-4 py-2 rounded-xl bg-blue-600 text-white font-medium text-sm"
        >
          Return to Setup
        </button>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Main Question Column */}
      <div className="lg:col-span-8 space-y-6">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 space-y-6 shadow-sm">
          {/* Question Header Bar */}
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-lg border border-blue-100 dark:border-blue-900/60">
                Question {currentIndex + 1} of {questions.length}
              </span>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                {currentQ.subjectLabel}
              </span>
              {currentQ.examSource && (
                <span className="text-[11px] text-slate-400 hidden sm:inline">
                  • {currentQ.examSource}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => toggleSet(setMarkedForReview, currentQ.id)}
                className={`text-xs px-2.5 py-1.5 rounded-xl border flex items-center gap-1 min-h-[36px] transition ${
                  markedForReview.has(currentQ.id)
                    ? 'border-amber-300 bg-amber-50 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
                    : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>Review Later</span>
              </button>
              <button
                type="button"
                onClick={() => toggleSet(setBookmarkedIds, currentQ.id)}
                className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 min-h-[36px]"
                aria-label="Bookmark Question"
              >
                {bookmarkedIds.has(currentQ.id) ? (
                  <BookmarkCheck className="w-4 h-4 text-amber-500" />
                ) : (
                  <Bookmark className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Question Renderer with instant feedback */}
          <QuestionRenderer
            question={currentQ}
            selectedOptionIndex={currentSelectedOption}
            onSelectOption={selectOption}
            showInstantFeedback={true}
            onOpenTopic={onOpenTopic}
          />

          {/* Navigation Controls */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
              disabled={currentIndex === 0}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 disabled:opacity-40 min-h-[44px] hover:bg-slate-50 dark:hover:bg-slate-800 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <div className="hidden sm:block text-xs text-slate-400">
              Keyboard: <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border">1-4</kbd> answer · <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border">N</kbd> next · <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border">P</kbd> previous
            </div>

            {currentIndex < questions.length - 1 ? (
              <button
                type="button"
                onClick={() => setCurrentIndex((i) => i + 1)}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white min-h-[44px] transition"
              >
                <span>Next Question</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => onFinish(userAnswers, elapsedSeconds)}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white min-h-[44px] transition"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Finish & See Score</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Sidebar: Progress & Palette */}
      <aside className="lg:col-span-4 space-y-4 lg:sticky lg:top-4 lg:self-start">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-4 shadow-sm">
          {/* Progress Header */}
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">Practice Progress</h3>
            <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {formatDuration(elapsedSeconds)}
            </span>
          </div>

          <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <div
              className="h-2 rounded-full bg-blue-600 transition-all duration-300"
              style={{ width: `${questions.length ? ((attempted) / questions.length) * 100 : 0}%` }}
            />
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-2 text-center bg-slate-50/50 dark:bg-slate-800/40">
              <b className="block text-emerald-600 dark:text-emerald-400 font-extrabold text-sm">{correct}</b>
              <span className="text-slate-500">Correct</span>
            </div>
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-2 text-center bg-slate-50/50 dark:bg-slate-800/40">
              <b className="block text-rose-500 dark:text-rose-400 font-extrabold text-sm">{incorrect}</b>
              <span className="text-slate-500">Incorrect</span>
            </div>
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-2 text-center bg-slate-50/50 dark:bg-slate-800/40">
              <b className="block text-slate-500 dark:text-slate-400 font-extrabold text-sm">{unattempted}</b>
              <span className="text-slate-500">Unanswered</span>
            </div>
          </div>

          {/* Question Palette */}
          <div>
            <div className="text-xs font-bold text-slate-600 dark:text-slate-300 mb-2">
              Question Palette ({questions.length} Items)
            </div>
            <div className="grid grid-cols-5 sm:grid-cols-8 lg:grid-cols-5 gap-1.5 max-h-64 overflow-y-auto p-1">
              {questions.map((q, idx) => {
                const isAnswered = userAnswers[q.id] !== undefined
                const isCorrect = userAnswers[q.id] === q.correctIndex
                const review = markedForReview.has(q.id)
                const isCurrent = idx === currentIndex

                let paletteColor =
                  'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                if (review) {
                  paletteColor = 'bg-amber-500 text-white border-amber-500'
                } else if (isAnswered) {
                  paletteColor = isCorrect
                    ? 'bg-emerald-600 text-white border-emerald-600'
                    : 'bg-rose-600 text-white border-rose-600'
                }

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-9 rounded-lg text-xs font-bold border transition relative cursor-pointer min-h-[36px] ${paletteColor} ${
                      isCurrent ? 'ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-slate-900 font-black' : ''
                    }`}
                  >
                    {idx + 1}
                    {bookmarkedIds.has(q.id) && (
                      <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-yellow-300" />
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-1.5 text-[11px] text-slate-500">
            <span>🟢 Correct</span>
            <span>🔴 Incorrect</span>
            <span>🟠 Review Later</span>
            <span>⚪ Unattempted</span>
          </div>

          {/* Finish Button */}
          <button
            type="button"
            onClick={() => onFinish(userAnswers, elapsedSeconds)}
            className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 min-h-[44px] transition shadow-sm"
          >
            <Award className="w-4 h-4" />
            <span>Finish Practice & View Analysis</span>
          </button>
        </div>

        {/* Tip Card */}
        <div className="rounded-2xl border border-blue-100 dark:border-blue-900/40 bg-blue-50/40 dark:bg-blue-950/20 p-4 text-xs text-slate-600 dark:text-slate-400 space-y-1.5">
          <div className="flex items-center gap-1.5 font-bold text-blue-700 dark:text-blue-300">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>AIBE & Judicial Services Practice Standard</span>
          </div>
          <p className="leading-relaxed">
            In practice mode, answer explanations deconstruct the exact Bare Act sections, provisos, and landmark Supreme Court ratios immediately after you lock an answer.
          </p>
        </div>
      </aside>
    </div>
  )
}
