import React, { useState } from 'react'
import { BookOpen, Shield, Sparkles } from 'lucide-react'
import { LawSubject } from '../../types'
import { PracticeContainer } from '../practice/PracticeContainer'
import { ExamContainer } from '../exam/ExamContainer'

export interface AibeMcqPracticeProps {
  initialSubject?: LawSubject
  initialTopicId?: string
  initialMode?: 'practice' | 'exam'
  onOpenTopic?: (subjectSlug: string, topicId: string) => void
  onOpenSubject?: (subjectSlug: string) => void
}

export const AibeMcqPractice: React.FC<AibeMcqPracticeProps> = ({
  initialSubject = 'all',
  initialTopicId = '',
  initialMode = 'practice',
  onOpenTopic,
  onOpenSubject,
}) => {
  const [activeMode, setActiveMode] = useState<'practice' | 'exam'>(initialMode)

  return (
    <div className="space-y-6">
      {/* Top Mode Segment Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-2 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => setActiveMode('practice')}
            className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition min-h-[44px] cursor-pointer ${
              activeMode === 'practice'
                ? 'bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-300 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Interactive Practice Mode</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveMode('exam')}
            className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition min-h-[44px] cursor-pointer ${
              activeMode === 'exam'
                ? 'bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-300 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <Shield className="w-4 h-4" />
            <span>Timed Exam Simulation</span>
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-2 pr-3 text-xs text-slate-500">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>
            {activeMode === 'practice'
              ? 'Instant Bare Act commentary after every answer'
              : 'Official time limits · zero score leak during paper'}
          </span>
        </div>
      </div>

      {/* Mode Sub-Surfaces */}
      {activeMode === 'practice' ? (
        <PracticeContainer
          initialSubject={initialSubject}
          initialTopicId={initialTopicId}
          onOpenTopic={onOpenTopic}
          onOpenSubject={onOpenSubject}
        />
      ) : (
        <ExamContainer
          initialSubject={initialSubject}
          onOpenTopic={onOpenTopic}
          onOpenSubject={onOpenSubject}
        />
      )}
    </div>
  )
}
