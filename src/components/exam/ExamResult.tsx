import React, { useState } from 'react'
import {
  Award,
  RotateCcw,
  BookOpen,
  ArrowLeft,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Filter,
  ShieldCheck,
  AlertTriangle,
} from 'lucide-react'
import { McqQuestion } from '../../types'
import { formatDuration } from '../../lib/utils'
import { Badge } from '../ui/Badge'
import { QuestionPrompt } from '../practice/QuestionRenderer'

export interface ExamResultProps {
  questions: McqQuestion[]
  userAnswers: Record<string, number>
  timeUsedSeconds: number
  totalAllottedMinutes: number
  examName: string
  onNewExam: () => void
  onOpenTopic?: (subjectSlug: string, topicId: string) => void
  onOpenSubject?: (subjectSlug: string) => void
  primarySubjectSlug?: string
}

export const ExamResult: React.FC<ExamResultProps> = ({
  questions,
  userAnswers,
  timeUsedSeconds,
  totalAllottedMinutes,
  examName,
  onNewExam,
  onOpenTopic,
  onOpenSubject,
  primarySubjectSlug,
}) => {
  const [filter, setFilter] = useState<'all' | 'incorrect' | 'correct' | 'unattempted'>('incorrect')

  const total = questions.length
  const attempted = questions.filter((q) => userAnswers[q.id] !== undefined).length
  const correct = questions.filter((q) => userAnswers[q.id] === q.correctIndex).length
  const incorrect = attempted - correct
  const unattempted = total - attempted
  const scorePct = total ? Math.round((correct / total) * 100) : 0

  // Standard AIBE pass threshold is 45% (General) / 40% (SC/ST/Disabled)
  const isAibeQualified = scorePct >= 45
  const isHighDistinction = scorePct >= 75

  const filteredQuestions = questions.filter((q) => {
    const answered = userAnswers[q.id] !== undefined
    const isCorrect = userAnswers[q.id] === q.correctIndex
    if (filter === 'correct') return isCorrect
    if (filter === 'incorrect') return answered && !isCorrect
    if (filter === 'unattempted') return !answered
    return true
  })

  return (
    <div className="space-y-6">
      {/* Official Scorecard Card */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
                {examName} Official Result
              </span>
              {isHighDistinction ? (
                <Badge variant="green">Merit & Judicial Services Distinction</Badge>
              ) : isAibeQualified ? (
                <Badge variant="blue">Qualified · AIBE Passing Benchmark</Badge>
              ) : (
                <Badge variant="amber">Revision Required</Badge>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-2.5">
              {isAibeQualified ? (
                <ShieldCheck className="w-8 h-8 text-emerald-600" />
              ) : (
                <AlertTriangle className="w-8 h-8 text-amber-500" />
              )}
              <span>
                {correct} / {total} Score ({scorePct}%)
              </span>
            </h2>

            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              {isHighDistinction
                ? 'Outstanding performance under strict time limits. You demonstrate senior-counsel level accuracy across Bare Act citations and case ratios.'
                : isAibeQualified
                ? 'Congratulations! You have satisfied the Bar Council of India AIBE qualifying benchmark (≥ 45%). Prioritize reviewing the missed topics below.'
                : 'Score is below the 45% qualifying threshold. Deconstruct the missed statutory provisos and procedural roadmaps below before re-attempting.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-2.5">
            <button
              type="button"
              onClick={onNewExam}
              className="inline-flex items-center justify-center gap-2 text-sm font-bold px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition min-h-[44px] shadow-sm"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Configure New Examination</span>
            </button>
            {primarySubjectSlug && onOpenSubject && (
              <button
                type="button"
                onClick={() => onOpenSubject(primarySubjectSlug)}
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition min-h-[44px]"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Subject Catalog</span>
              </button>
            )}
          </div>
        </div>

        {/* 5.8: Metrics grid including time used vs allotted */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 p-3.5 text-center">
            <span className="block text-xl sm:text-2xl font-black text-slate-800 dark:text-slate-200">
              {formatDuration(timeUsedSeconds)}
            </span>
            <span className="text-xs font-semibold text-slate-500">
              Time Taken ({totalAllottedMinutes}m allotted)
            </span>
          </div>
          <div className="rounded-xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/40 dark:bg-emerald-950/30 p-3.5 text-center">
            <span className="block text-xl sm:text-2xl font-black text-emerald-700 dark:text-emerald-300">
              {correct}
            </span>
            <span className="text-xs font-bold text-emerald-800 dark:text-emerald-400">Correct Answers</span>
          </div>
          <div className="rounded-xl border border-rose-200 dark:border-rose-900/60 bg-rose-50/40 dark:bg-rose-950/30 p-3.5 text-center">
            <span className="block text-xl sm:text-2xl font-black text-rose-700 dark:text-rose-300">
              {incorrect}
            </span>
            <span className="text-xs font-bold text-rose-800 dark:text-rose-400">Incorrect Answers</span>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 p-3.5 text-center">
            <span className="block text-xl sm:text-2xl font-black text-slate-600 dark:text-slate-400">
              {unattempted}
            </span>
            <span className="text-xs font-semibold text-slate-500">Unanswered</span>
          </div>
        </div>
      </div>

      {/* 5.9: Exam Review Header & Filters */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <Award className="w-5 h-5 text-blue-600" />
          <span>Statutory Performance Review</span>
        </h3>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          <Filter className="w-3.5 h-3.5 text-slate-400 mr-1 flex-shrink-0" />
          {(['incorrect', 'all', 'correct', 'unattempted'] as const).map((key) => {
            const active = filter === key
            const label =
              key === 'incorrect'
                ? `Incorrect (${incorrect})`
                : key === 'all'
                ? `All (${total})`
                : key === 'correct'
                ? `Correct (${correct})`
                : `Unattempted (${unattempted})`
            return (
              <button
                key={key}
                type="button"
                onClick={() => setFilter(key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition min-h-[36px] ${
                  active
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Question Review Cards */}
      <div className="space-y-4">
        {filteredQuestions.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 text-center text-sm text-slate-500">
            No questions matching this filter.
          </div>
        ) : (
          filteredQuestions.map((q) => {
            const originalIndex = questions.indexOf(q)
            const userAnswerIdx = userAnswers[q.id]
            const isAnswered = userAnswerIdx !== undefined
            const isCorrect = userAnswerIdx === q.correctIndex

            return (
              <div
                key={q.id}
                className={`rounded-2xl border bg-white dark:bg-slate-900 p-5 sm:p-6 space-y-4 transition ${
                  isCorrect
                    ? 'border-emerald-200 dark:border-emerald-950/80 shadow-xs'
                    : isAnswered
                    ? 'border-rose-200 dark:border-rose-950/80 shadow-xs'
                    : 'border-slate-200 dark:border-slate-800'
                }`}
              >
                {/* Review Header */}
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      Question {originalIndex + 1}
                    </span>
                    <span className="text-xs text-slate-500">{q.subjectLabel}</span>
                    {q.bareActSection && (
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
                        {q.bareActSection}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {isCorrect ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 rounded-lg border border-emerald-200 dark:border-emerald-900/60">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Correct (+1)
                      </span>
                    ) : isAnswered ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/50 px-2.5 py-1 rounded-lg border border-rose-200 dark:border-rose-900/60">
                        <XCircle className="w-3.5 h-3.5" /> Incorrect (0)
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg">
                        <HelpCircle className="w-3.5 h-3.5" /> Unanswered
                      </span>
                    )}
                  </div>
                </div>

                <QuestionPrompt text={q.question} />

                {/* Options List */}
                <div className="space-y-2">
                  {q.options.map((opt, optIdx) => {
                    const isUserPick = userAnswerIdx === optIdx
                    const isActualCorrect = optIdx === q.correctIndex

                    let style =
                      'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 text-slate-700 dark:text-slate-300'
                    let badge = 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'

                    if (isActualCorrect) {
                      style =
                        'border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/50 text-emerald-950 dark:text-emerald-100 font-medium'
                      badge = 'bg-emerald-600 text-white'
                    } else if (isUserPick && !isActualCorrect) {
                      style =
                        'border-rose-400 bg-rose-50/80 dark:bg-rose-950/50 text-rose-950 dark:text-rose-100 font-medium'
                      badge = 'bg-rose-600 text-white'
                    }

                    return (
                      <div
                        key={optIdx}
                        className={`p-3 rounded-xl border flex items-start gap-3 text-sm ${style}`}
                      >
                        <span
                          className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center flex-shrink-0 ${badge}`}
                        >
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span className="flex-1 leading-relaxed">{opt}</span>
                        {isActualCorrect && (
                          <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider flex-shrink-0 self-center">
                            Official Key
                          </span>
                        )}
                        {isUserPick && !isActualCorrect && (
                          <span className="text-[11px] font-bold text-rose-700 dark:text-rose-300 uppercase tracking-wider flex-shrink-0 self-center">
                            Your Choice
                          </span>
                        )}
                      </div>
                    )
                  })}
                </div>

                {/* 5.9: Explanation & Link to Study Topic */}
                <div className="rounded-xl border border-blue-100 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/30 p-4 space-y-2">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="text-xs font-bold text-blue-800 dark:text-blue-300">
                      📖 Judicial Ratio & Statutory Authority
                    </span>
                    {q.subjectSlug && q.topicId && onOpenTopic && (
                      <button
                        type="button"
                        onClick={() => onOpenTopic(q.subjectSlug!, q.topicId!)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 dark:text-blue-300 hover:underline min-h-[36px] px-2 py-1 rounded-lg hover:bg-blue-100/60 dark:hover:bg-blue-900/40"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Study Topic Treatise ({q.topicId})</span>
                      </button>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {q.explanation}
                  </p>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
