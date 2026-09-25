import React, { useEffect, useState, useRef } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  AlertTriangle,
  CheckCircle2,
  Bookmark,
  BookmarkCheck,
  Pause,
  Play,
  Send,
  X,
} from 'lucide-react'
import { McqQuestion } from '../../types'
import { formatDuration } from '../../lib/utils'
import { setExamSnapshot, ExamSnapshot } from '../../lib/progress'
import { QuestionPrompt } from '../practice/QuestionRenderer'

export interface ExamSessionProps {
  questions: McqQuestion[]
  durationMinutes: number
  examName: string
  subjectSlug?: string
  initialAnswers?: Record<string, number>
  initialMarked?: string[]
  initialIndex?: number
  initialElapsedSeconds?: number
  onSubmitExam: (answers: Record<string, number>, timeUsedSeconds: number) => void
  onAbortExam: () => void
}

export const ExamSession: React.FC<ExamSessionProps> = ({
  questions,
  durationMinutes,
  examName,
  subjectSlug,
  initialAnswers = {},
  initialMarked = [],
  initialIndex = 0,
  initialElapsedSeconds = 0,
  onSubmitExam,
  onAbortExam,
}) => {
  const totalSeconds = durationMinutes * 60
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>(initialAnswers)
  const [markedForReview, setMarkedForReview] = useState<Set<string>>(new Set(initialMarked))
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set())
  const [remainingSeconds, setRemainingSeconds] = useState(Math.max(1, totalSeconds - initialElapsedSeconds))
  const [isPaused, setIsPaused] = useState(false)
  const [showSubmitModal, setShowSubmitModal] = useState(false)
  const [showAbortModal, setShowAbortModal] = useState(false)

  const answersRef = useRef(userAnswers)
  answersRef.current = userAnswers
  const remainingRef = useRef(remainingSeconds)
  remainingRef.current = remainingSeconds

  // 5.6: beforeunload warning while exam is active
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault()
      e.returnValue = ''
      return ''
    }
    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [])

  // 5.7: Refresh recovery persistence to cplaw.exam.v1
  useEffect(() => {
    const snapshot: ExamSnapshot = {
      mode: 'exam',
      subjectSlug,
      questionIds: questions.map((q) => q.id),
      answers: userAnswers as unknown as Record<string, string | null>,
      marked: Array.from(markedForReview),
      startedAt: new Date(Date.now() - (totalSeconds - remainingSeconds) * 1000).toISOString(),
      durationMinutes,
      currentIndex,
    }
    setExamSnapshot(snapshot)
  }, [userAnswers, markedForReview, currentIndex, durationMinutes, questions, remainingSeconds, subjectSlug, totalSeconds])

  // 5.2 & 5.5: Countdown timer owned by ExamSession; timeout submits without losing in-progress answers
  useEffect(() => {
    if (isPaused || remainingSeconds <= 0) return

    const timer = window.setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev <= 1) {
          window.clearInterval(timer)
          // Timeout reached: submit immediately
          onSubmitExam(answersRef.current, totalSeconds)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => window.clearInterval(timer)
  }, [isPaused, remainingSeconds, totalSeconds, onSubmitExam])

  const currentQ = questions[currentIndex]
  const currentAnswer = currentQ ? userAnswers[currentQ.id] : undefined

  const handleSelectOption = (idx: number) => {
    if (!currentQ || isPaused) return
    setUserAnswers((prev) => ({ ...prev, [currentQ.id]: idx }))
  }

  // Keyboard navigation: 1-4 for answers, N next, P previous
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (['input', 'textarea', 'select'].includes((e.target as HTMLElement)?.tagName?.toLowerCase())) return
      if (!currentQ || isPaused) return
      if (/^[1-4]$/.test(e.key)) {
        handleSelectOption(Number(e.key) - 1)
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
  }, [currentQ, isPaused, questions.length])

  const toggleSet = (setter: React.Dispatch<React.SetStateAction<Set<string>>>, id: string) => {
    setter((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  // Metrics
  const attemptedCount = Object.keys(userAnswers).length
  const unattemptedCount = questions.length - attemptedCount
  const markedCount = markedForReview.size
  const isTimeCritical = remainingSeconds <= 300 // under 5 minutes

  const handleConfirmSubmit = () => {
    setShowSubmitModal(false)
    const timeUsed = totalSeconds - remainingSeconds
    onSubmitExam(userAnswers, timeUsed)
  }

  const handleConfirmAbort = () => {
    setShowAbortModal(false)
    setExamSnapshot(null)
    onAbortExam()
  }

  if (!currentQ) return null

  return (
    <div className="space-y-6">
      {/* Top Examination Command Bar */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
            {examName}
          </span>
          <span className="text-xs text-slate-500 font-medium">
            Question {currentIndex + 1} of {questions.length}
          </span>
        </div>

        {/* Timer Control (5.2) */}
        <div className="flex items-center gap-2">
          <div
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-sm sm:text-base font-bold transition border ${
              isTimeCritical
                ? 'bg-rose-50 text-rose-700 border-rose-200 animate-pulse dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-900'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700'
            }`}
          >
            <Clock className={`w-4 h-4 ${isTimeCritical ? 'text-rose-600' : 'text-blue-600'}`} />
            <span>{formatDuration(remainingSeconds)}</span>
          </div>

          <button
            type="button"
            onClick={() => setIsPaused((p) => !p)}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition min-h-[40px]"
            title={isPaused ? 'Resume examination timer' : 'Pause examination timer'}
          >
            {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
          </button>

          <button
            type="button"
            onClick={() => setShowSubmitModal(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-xs transition min-h-[40px]"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Submit Paper</span>
          </button>
        </div>
      </div>

      {/* Paused Overlay */}
      {isPaused && (
        <div className="rounded-2xl border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/50 p-6 text-center space-y-3">
          <AlertTriangle className="w-8 h-8 text-amber-600 mx-auto" />
          <h3 className="text-lg font-bold text-amber-900 dark:text-amber-200">
            Examination Timer Paused
          </h3>
          <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-300 max-w-md mx-auto">
            Questions and options are hidden while the timer is paused to preserve strict test conditions.
          </p>
          <button
            type="button"
            onClick={() => setIsPaused(false)}
            className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition"
          >
            Resume Examination
          </button>
        </div>
      )}

      {/* Main Grid: Question & Palette */}
      {!isPaused && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Question Box */}
          <div className="lg:col-span-8 space-y-6">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 space-y-6 shadow-sm">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-900/60">
                    Q {currentIndex + 1} of {questions.length}
                  </span>
                  <span className="text-xs font-medium text-slate-500">{currentQ.subjectLabel}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => toggleSet(setMarkedForReview, currentQ.id)}
                    className={`text-xs px-3 py-1.5 rounded-xl border flex items-center gap-1.5 min-h-[38px] transition ${
                      markedForReview.has(currentQ.id)
                        ? 'border-amber-400 bg-amber-50 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 font-bold'
                        : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5" />
                    <span>{markedForReview.has(currentQ.id) ? 'Marked for Review' : 'Mark for Review'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleSet(setBookmarkedIds, currentQ.id)}
                    className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-600 min-h-[38px]"
                  >
                    {bookmarkedIds.has(currentQ.id) ? (
                      <BookmarkCheck className="w-4 h-4 text-amber-500" />
                    ) : (
                      <Bookmark className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Question Statement */}
              <QuestionPrompt text={currentQ.question} />

              {/* Options — Zero Feedback During Paper (5.10) */}
              <div className="space-y-3" role="radiogroup" aria-label="Exam question options">
                {currentQ.options.map((option, idx) => {
                  const isSelected = currentAnswer === idx
                  return (
                    <button
                      key={idx}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-xl border flex items-start gap-3.5 transition-all min-h-[48px] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                        isSelected
                          ? 'border-blue-600 bg-blue-50/90 dark:bg-blue-950/60 text-blue-950 dark:text-blue-100 ring-1 ring-blue-600'
                          : 'border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200'
                      }`}
                    >
                      <span
                        className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center flex-shrink-0 transition-colors ${
                          isSelected
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                        }`}
                      >
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="flex-1 min-w-0 text-sm sm:text-base leading-relaxed break-words whitespace-normal font-normal">
                        {option}
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* Bottom Nav */}
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
                  Keyboard: <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border">1-4</kbd> option · <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border">N</kbd> next · <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border">P</kbd> previous
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
                    onClick={() => setShowSubmitModal(true)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white min-h-[44px] transition"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Paper</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar: Palette & Palette States (5.3) */}
          <aside className="lg:col-span-4 space-y-4 lg:sticky lg:top-4 lg:self-start">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  Question Palette
                </h3>
                <span className="text-xs text-slate-500 font-medium">
                  {attemptedCount} / {questions.length} Attempted
                </span>
              </div>

              {/* Palette Grid */}
              <div
                className="grid grid-cols-5 sm:grid-cols-8 lg:grid-cols-5 gap-1.5 max-h-72 overflow-y-auto p-1"
                role="navigation"
                aria-label="Question Navigator"
              >
                {questions.map((q, idx) => {
                  const isAnswered = userAnswers[q.id] !== undefined
                  const isMarked = markedForReview.has(q.id)
                  const isCurrent = idx === currentIndex

                  let stateCls =
                    'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                  let stateLabel = 'Unattempted'

                  if (isMarked) {
                    stateCls = 'bg-amber-500 text-white border-amber-500'
                    stateLabel = 'Marked for Review'
                  } else if (isAnswered) {
                    stateCls = 'bg-blue-600 text-white border-blue-600'
                    stateLabel = 'Answered'
                  }

                  return (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Question ${idx + 1}, status: ${stateLabel}${isCurrent ? ', current question' : ''}`}
                      className={`h-9 rounded-lg text-xs font-bold border transition relative cursor-pointer min-h-[36px] ${stateCls} ${
                        isCurrent
                          ? 'ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-slate-900 font-black'
                          : ''
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

              {/* Palette Legend */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-2 text-[11px] text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded bg-blue-600 inline-block" /> Answered ({attemptedCount})
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded bg-amber-500 inline-block" /> Marked ({markedCount})
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded bg-slate-200 dark:bg-slate-700 inline-block" /> Unanswered ({unattemptedCount})
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded ring-2 ring-blue-500 inline-block" /> Current
                </span>
              </div>

              {/* Actions */}
              <div className="pt-2 space-y-2">
                <button
                  type="button"
                  onClick={() => setShowSubmitModal(true)}
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 min-h-[44px] transition shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit & Lock Examination</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowAbortModal(true)}
                  className="w-full py-2 rounded-xl text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 text-xs font-semibold transition"
                >
                  Abort Paper
                </button>
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* 5.4: Submit Confirmation Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 max-w-md w-full space-y-5 shadow-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                <span>Submit Examination?</span>
              </h3>
              <button
                type="button"
                onClick={() => setShowSubmitModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Once submitted, all answers are locked and your statutory ratio score report will be generated.
            </p>

            <div className="grid grid-cols-3 gap-2.5 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 text-center text-xs">
              <div>
                <b className="block text-base font-black text-blue-600 dark:text-blue-400">
                  {attemptedCount}
                </b>
                <span className="text-slate-500">Attempted</span>
              </div>
              <div>
                <b className="block text-base font-black text-slate-600 dark:text-slate-300">
                  {unattemptedCount}
                </b>
                <span className="text-slate-500">Unanswered</span>
              </div>
              <div>
                <b className="block text-base font-black text-amber-600 dark:text-amber-400">
                  {markedCount}
                </b>
                <span className="text-slate-500">Marked</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
              <button
                type="button"
                onClick={handleConfirmSubmit}
                className="flex-1 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm min-h-[44px] transition shadow-xs"
              >
                Confirm & Finalize Paper
              </button>
              <button
                type="button"
                onClick={() => setShowSubmitModal(false)}
                className="py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-xs sm:text-sm min-h-[44px] transition"
              >
                Return to Paper
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Abort Confirmation Modal */}
      {showAbortModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 max-w-sm w-full space-y-4 shadow-xl">
            <h3 className="text-base font-bold text-rose-600 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              <span>Abort Examination?</span>
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              This will discard your current examination attempt and saved snapshot.
            </p>
            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={handleConfirmAbort}
                className="flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs min-h-[44px]"
              >
                Yes, Abort
              </button>
              <button
                type="button"
                onClick={() => setShowAbortModal(false)}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-semibold min-h-[44px]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
