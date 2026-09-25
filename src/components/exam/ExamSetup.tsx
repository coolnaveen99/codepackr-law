import React, { useState, useEffect } from 'react'
import { AlertCircle, Clock, Shield, Play, RefreshCw, CheckCircle2 } from 'lucide-react'
import { ALL_QUESTIONS, SUBJECT_OPTIONS } from '../../data/questions'
import { LawSubject } from '../../types'
import { Badge } from '../ui/Badge'
import { getExamSnapshot, ExamSnapshot } from '../../lib/progress'

export interface ExamPreset {
  id: string
  name: string
  subtitle: string
  questionCount: number
  durationMinutes: number
  badge: string
}

export const EXAM_PRESETS: ExamPreset[] = [
  {
    id: 'aibe-full',
    name: 'AIBE Mock Examination',
    subtitle: 'Standard Bar Council of India pattern — 100 MCQs covering all curriculum subjects.',
    questionCount: 100,
    durationMinutes: 210, // 3h 30m
    badge: '3h 30m · 100 Qs',
  },
  {
    id: 'judiciary-prelims',
    name: 'State Judicial Services Prelims',
    subtitle: 'High-intensity procedural & substantive penal paper for State Civil Judge Prelims.',
    questionCount: 50,
    durationMinutes: 120, // 2h
    badge: '2h 00m · 50 Qs',
  },
  {
    id: 'rapid-drill',
    name: 'Rapid Bench Mock',
    subtitle: 'Focused sprint session testing statutory retention under tight time constraints.',
    questionCount: 20,
    durationMinutes: 30,
    badge: '30m · 20 Qs',
  },
  {
    id: 'custom',
    name: 'Custom Bench Paper',
    subtitle: 'Select your preferred question volume, time limit, and subject specialization.',
    questionCount: 10,
    durationMinutes: 15,
    badge: 'Custom',
  },
]

export interface ExamSetupProps {
  selectedSubject: LawSubject
  onChangeSubject: (subject: LawSubject) => void
  onStartExam: (config: {
    questionCount: number
    durationMinutes: number
    subject: LawSubject
    examName: string
  }) => void
  onResumeSnapshot: (snapshot: ExamSnapshot) => void
  onDiscardSnapshot: () => void
}

export const ExamSetup: React.FC<ExamSetupProps> = ({
  selectedSubject,
  onChangeSubject,
  onStartExam,
  onResumeSnapshot,
  onDiscardSnapshot,
}) => {
  const [selectedPresetId, setSelectedPresetId] = useState<string>('aibe-full')
  const [customQuestions, setCustomQuestions] = useState<number>(20)
  const [customMinutes, setCustomMinutes] = useState<number>(30)
  const [existingSnapshot, setExistingSnapshot] = useState<ExamSnapshot | null>(null)

  useEffect(() => {
    const snapshot = getExamSnapshot()
    if (snapshot && snapshot.questionIds && snapshot.questionIds.length > 0) {
      setExistingSnapshot(snapshot)
    }
  }, [])

  const activePreset = EXAM_PRESETS.find((p) => p.id === selectedPresetId) ?? EXAM_PRESETS[0]
  const targetQuestionCount =
    selectedPresetId === 'custom' ? customQuestions : activePreset.questionCount
  const targetDurationMinutes =
    selectedPresetId === 'custom' ? customMinutes : activePreset.durationMinutes

  // Available in bank for this subject
  const availableQuestions =
    selectedSubject === 'all'
      ? ALL_QUESTIONS
      : ALL_QUESTIONS.filter((q) => q.subject === selectedSubject)

  const isBankTooSmall = availableQuestions.length < targetQuestionCount

  const handleStart = () => {
    onStartExam({
      questionCount: Math.min(targetQuestionCount, availableQuestions.length),
      durationMinutes: targetDurationMinutes,
      subject: selectedSubject,
      examName: activePreset.name,
    })
  }

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 space-y-7 shadow-sm">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <span>Timed Exam Simulation</span>
            </h2>
            <Badge variant="amber">Zero Feedback During Paper</Badge>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Strict examination conditions matching official BCI AIBE and State Judicial Services standards. Answers remain locked until submission.
          </p>
        </div>
      </div>

      {/* Snapshot Recovery Alert (5.7) */}
      {existingSnapshot && (
        <div className="rounded-xl border border-amber-300 dark:border-amber-800 bg-amber-50/90 dark:bg-amber-950/40 p-4 sm:p-5 space-y-3">
          <div className="flex items-center gap-2 font-bold text-amber-900 dark:text-amber-200 text-sm">
            <RefreshCw className="w-4 h-4 text-amber-600" />
            <span>Unfinished Examination Session Recovered</span>
          </div>
          <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
            You have a saved exam session with <strong>{existingSnapshot.questionIds.length}</strong> questions started at{' '}
            {new Date(existingSnapshot.startedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}.
          </p>
          <div className="flex flex-wrap gap-2.5 pt-1">
            <button
              type="button"
              onClick={() => onResumeSnapshot(existingSnapshot)}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition min-h-[44px]"
            >
              Resume Saved Examination
            </button>
            <button
              type="button"
              onClick={() => {
                onDiscardSnapshot()
                setExistingSnapshot(null)
              }}
              className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold transition min-h-[44px]"
            >
              Discard & Start New Exam
            </button>
          </div>
        </div>
      )}

      {/* Preset Selection (5.1) */}
      <div className="space-y-3">
        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
          Select Examination Pattern
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {EXAM_PRESETS.map((preset) => {
            const isSelected = selectedPresetId === preset.id
            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => setSelectedPresetId(preset.id)}
                className={`p-4 rounded-xl border text-left flex flex-col justify-between transition min-h-[110px] cursor-pointer ${
                  isSelected
                    ? 'border-blue-600 bg-blue-50/70 dark:bg-blue-950/50 ring-1 ring-blue-600 shadow-xs'
                    : 'border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 bg-white dark:bg-slate-900'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-bold text-slate-900 dark:text-slate-100">
                      {preset.name}
                    </span>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-blue-600" />}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {preset.subtitle}
                  </p>
                </div>
                <div className="pt-2 text-xs font-bold text-blue-700 dark:text-blue-300">
                  {preset.badge}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Subject Scope */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-slate-100 dark:border-slate-800">
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
            Subject Focus
          </label>
          <select
            value={selectedSubject}
            onChange={(e) => onChangeSubject(e.target.value as LawSubject)}
            className="w-full text-sm font-medium px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-[44px]"
          >
            <option value="all">Composite Full Syllabus (All Indian Law Subjects)</option>
            {SUBJECT_OPTIONS.filter((s) => s.value !== 'all').map((s) => (
              <option key={s.value} value={s.value}>
                {s.label} ({s.count} available questions)
              </option>
            ))}
          </select>
        </div>

        {/* Custom Exam Controls */}
        {selectedPresetId === 'custom' ? (
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Questions
              </label>
              <select
                value={customQuestions}
                onChange={(e) => setCustomQuestions(Number(e.target.value))}
                className="w-full text-sm font-medium px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-[44px]"
              >
                {[5, 10, 15, 20, 30, 50, 100].map((num) => (
                  <option key={num} value={num}>
                    {num} Questions
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Duration
              </label>
              <select
                value={customMinutes}
                onChange={(e) => setCustomMinutes(Number(e.target.value))}
                className="w-full text-sm font-medium px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 min-h-[44px]"
              >
                {[5, 10, 15, 30, 60, 90, 120, 210].map((min) => (
                  <option key={min} value={min}>
                    {min} Minutes
                  </option>
                ))}
              </select>
            </div>
          </div>
        ) : (
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
              Exam Rules & Timing
            </label>
            <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 text-xs text-slate-600 dark:text-slate-300 flex items-center justify-between min-h-[44px]">
              <span className="flex items-center gap-1.5 font-medium">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                Allotted: {targetDurationMinutes} Minutes
              </span>
              <span className="font-semibold text-slate-700 dark:text-slate-200">
                {targetQuestionCount} Questions
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Insufficient Bank Warning or Status */}
      {isBankTooSmall ? (
        <div className="rounded-xl border border-amber-300 dark:border-amber-800 bg-amber-50/80 dark:bg-amber-950/40 p-4 space-y-1.5 text-xs text-amber-900 dark:text-amber-200">
          <div className="flex items-center gap-2 font-bold text-amber-800 dark:text-amber-300">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>Target Volume Exceeds Subject Bank Size</span>
          </div>
          <p className="leading-relaxed">
            The selected subject has <strong>{availableQuestions.length}</strong> questions available in the current bank.
            The simulation will test all <strong>{availableQuestions.length}</strong> questions. To take the full {targetQuestionCount}-question exam, switch to Composite Full Syllabus.
          </p>
        </div>
      ) : (
        <div className="text-xs text-slate-500 dark:text-slate-400">
          Question bank contains <strong>{availableQuestions.length}</strong> questions eligible for this test configuration.
        </div>
      )}

      {/* Start Button */}
      <button
        type="button"
        onClick={handleStart}
        disabled={availableQuestions.length === 0}
        className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-5 py-4 text-base font-bold shadow-sm transition flex items-center justify-center gap-2 min-h-[50px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Play className="w-5 h-5 fill-white" />
        <span>
          Begin {activePreset.name} ({Math.min(targetQuestionCount, availableQuestions.length)} Questions · {targetDurationMinutes} min)
        </span>
      </button>
    </div>
  )
}
