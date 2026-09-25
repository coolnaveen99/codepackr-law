import React from 'react'
import { AlertCircle, Sparkles, RotateCcw, ListFilter, Play, CheckCircle } from 'lucide-react'
import { ALL_QUESTIONS, SUBJECT_OPTIONS } from '../../data/questions'
import { LawSubject } from '../../types'
import { QuestionPoolType } from '../../utils/questions/questionSelection'
import { Badge } from '../ui/Badge'

export interface PracticeSetupProps {
  selectedSubject: LawSubject
  onChangeSubject: (subject: LawSubject) => void
  selectedTopicId: string
  onChangeTopicId: (topicId: string) => void
  poolType: QuestionPoolType
  onChangePoolType: (pool: QuestionPoolType) => void
  questionCount: number
  onChangeQuestionCount: (count: number) => void
  availableCount: number
  onStartPractice: () => void
  onLoadDemo: () => void
  onReset: () => void
  isDemoActive?: boolean
}

export const PracticeSetup: React.FC<PracticeSetupProps> = ({
  selectedSubject,
  onChangeSubject,
  selectedTopicId,
  onChangeTopicId,
  poolType,
  onChangePoolType,
  questionCount,
  onChangeQuestionCount,
  availableCount,
  onStartPractice,
  onLoadDemo,
  onReset,
  isDemoActive = false,
}) => {
  const isBankTooSmall = availableCount < questionCount

  // Collect unique topics for the selected subject
  const availableTopicIds = React.useMemo(() => {
    const list = ALL_QUESTIONS.filter(
      (q) => selectedSubject === 'all' || q.subject === selectedSubject
    )
      .map((q) => q.topicId)
      .filter(Boolean) as string[]
    return [...new Set(list)].sort()
  }, [selectedSubject])

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 space-y-6 shadow-sm">
      {/* Top Header & Quality Gate Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Interactive Practice Mode
            </h2>
            <Badge variant="blue">Instant Statutory Ratios</Badge>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Targeted Bare Act practice with instant feedback after every locked answer. 100% client-side.
          </p>
        </div>

        {/* Quality Gate actions: Sample Demo & Reset */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={onLoadDemo}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900 hover:bg-blue-100 dark:hover:bg-blue-900/80 transition min-h-[44px]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sample Demo</span>
          </button>
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition min-h-[44px]"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Setup</span>
          </button>
        </div>
      </div>

      {isDemoActive && (
        <div className="p-3.5 rounded-xl bg-blue-50/80 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 text-xs text-blue-800 dark:text-blue-200 flex items-center gap-2">
          <CheckCircle className="w-4 h-4 flex-shrink-0 text-blue-600 dark:text-blue-400" />
          <span>Demo mode activated: 5 sample questions loaded with pre-configured answer demonstration.</span>
        </div>
      )}

      {/* Filter Controls */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Subject selection */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <ListFilter className="w-3.5 h-3.5 text-slate-400" />
              <span>Select Subject</span>
            </label>
            <select
              value={selectedSubject}
              onChange={(e) => {
                onChangeSubject(e.target.value as LawSubject)
                onChangeTopicId('')
              }}
              className="w-full text-sm font-medium px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-[44px]"
            >
              <option value="all">All Subjects (Full Question Bank — {ALL_QUESTIONS.length})</option>
              {SUBJECT_OPTIONS.filter((s) => s.value !== 'all').map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label} ({s.count} questions)
                </option>
              ))}
            </select>
          </div>

          {/* Scope / Pool Type */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
              Coverage Scope
            </label>
            <select
              value={poolType}
              onChange={(e) => onChangePoolType(e.target.value as QuestionPoolType)}
              className="w-full text-sm font-medium px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-[44px]"
            >
              <option value="all">All Available Topics in Subject</option>
              <option value="mixed">Mixed High-Yield Topics</option>
              <option value="topic">Specific Topic Only</option>
            </select>
          </div>
        </div>

        {/* Specific Topic Dropdown (visible when poolType is 'topic') */}
        {poolType === 'topic' && (
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
              Specific Topic Provision
            </label>
            <select
              value={selectedTopicId}
              onChange={(e) => onChangeTopicId(e.target.value)}
              className="w-full text-sm font-medium px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-[44px]"
            >
              <option value="">Select a topic from the bank</option>
              {availableTopicIds.map((tId) => (
                <option key={tId} value={tId}>
                  {tId}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Question Count Selector (10, 15, 20) */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
            Practice Set Size (Questions)
          </label>
          <div className="flex flex-wrap items-center gap-2">
            {[10, 15, 20].map((count) => {
              const active = questionCount === count
              return (
                <button
                  key={count}
                  type="button"
                  onClick={() => onChangeQuestionCount(count)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition min-h-[44px] min-w-[64px] border ${
                    active
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {count} Questions
                </button>
              )
            })}
          </div>
        </div>

        {/* Insufficient Bank Warning / Bank Status */}
        {isBankTooSmall ? (
          <div className="rounded-xl border border-amber-300 dark:border-amber-800 bg-amber-50/80 dark:bg-amber-950/40 p-4 space-y-1.5 text-xs text-amber-900 dark:text-amber-200">
            <div className="flex items-center gap-2 font-bold text-amber-800 dark:text-amber-300">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>Insufficient Question Bank Size</span>
            </div>
            <p className="leading-relaxed">
              Only <strong>{availableCount}</strong> questions are available for this topic selection, but{' '}
              <strong>{questionCount}</strong> questions are required for this practice set. Please select &quot;All Available Topics&quot; or choose a topic with an expanded question bank.
            </p>
          </div>
        ) : (
          <div className="text-xs text-slate-500 dark:text-slate-400">
            <strong>{availableCount}</strong> matching questions available in library. Set will randomly select{' '}
            <strong>{questionCount}</strong> unique questions.
          </div>
        )}

        {/* Start Button */}
        <button
          type="button"
          onClick={onStartPractice}
          disabled={isBankTooSmall || availableCount === 0}
          className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-5 py-3.5 text-sm sm:text-base font-bold shadow-sm transition flex items-center justify-center gap-2 min-h-[48px] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          <Play className="w-4 h-4 fill-white" />
          <span>Start Practice Session ({questionCount} Questions)</span>
        </button>
      </div>
    </div>
  )
}
