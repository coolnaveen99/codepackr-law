import React, { useState } from 'react'
import { ALL_QUESTIONS } from '../../data/questions'
import { LawSubject, McqQuestion } from '../../types'
import { shuffleArray } from '../../lib/utils'
import { ExamSetup } from './ExamSetup'
import { ExamSession } from './ExamSession'
import { ExamResult } from './ExamResult'
import { ExamSnapshot, setExamSnapshot } from '../../lib/progress'

export interface ExamContainerProps {
  initialSubject?: LawSubject
  onOpenTopic?: (subjectSlug: string, topicId: string) => void
  onOpenSubject?: (subjectSlug: string) => void
}

export const ExamContainer: React.FC<ExamContainerProps> = ({
  initialSubject = 'all',
  onOpenTopic,
  onOpenSubject,
}) => {
  const [selectedSubject, setSelectedSubject] = useState<LawSubject>(initialSubject)
  const [stage, setStage] = useState<'setup' | 'session' | 'result'>('setup')

  // Active exam state
  const [activeQuestions, setActiveQuestions] = useState<McqQuestion[]>([])
  const [examName, setExamName] = useState<string>('AIBE Mock Examination')
  const [durationMinutes, setDurationMinutes] = useState<number>(210)
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({})
  const [markedQuestions, setMarkedQuestions] = useState<string[]>([])
  const [initialIndex, setInitialIndex] = useState<number>(0)
  const [timeUsedSeconds, setTimeUsedSeconds] = useState<number>(0)
  const [initialElapsedSeconds, setInitialElapsedSeconds] = useState<number>(0)

  // Start new exam
  const handleStartExam = (config: {
    questionCount: number
    durationMinutes: number
    subject: LawSubject
    examName: string
  }) => {
    const pool =
      config.subject === 'all'
        ? ALL_QUESTIONS
        : ALL_QUESTIONS.filter((q) => q.subject === config.subject)

    const selected = shuffleArray([...pool]).slice(0, config.questionCount)
    setActiveQuestions(selected)
    setExamName(config.examName)
    setDurationMinutes(config.durationMinutes)
    setUserAnswers({})
    setMarkedQuestions([])
    setInitialIndex(0)
    setInitialElapsedSeconds(0)
    setStage('session')
  }

  // Resume from saved snapshot (5.7)
  const handleResumeSnapshot = (snapshot: ExamSnapshot) => {
    // Reconstruct questions from questionIds
    const questionMap = new Map(ALL_QUESTIONS.map((q) => [q.id, q]))
    const restoredQuestions = snapshot.questionIds
      .map((id) => questionMap.get(id))
      .filter(Boolean) as McqQuestion[]

    if (restoredQuestions.length === 0) {
      setExamSnapshot(null)
      return
    }

    const elapsed = Math.max(
      0,
      Math.floor((Date.now() - new Date(snapshot.startedAt).getTime()) / 1000)
    )

    setActiveQuestions(restoredQuestions)
    setExamName('Resumed Examination Session')
    setDurationMinutes(snapshot.durationMinutes)
    setUserAnswers((snapshot.answers as unknown as Record<string, number>) || {})
    setMarkedQuestions(snapshot.marked || [])
    setInitialIndex(snapshot.currentIndex || 0)
    setInitialElapsedSeconds(Math.min(snapshot.durationMinutes * 60 - 5, elapsed))
    setStage('session')
  }

  // Discard saved snapshot
  const handleDiscardSnapshot = () => {
    setExamSnapshot(null)
  }

  // Submit exam
  const handleSubmitExam = (answers: Record<string, number>, timeUsed: number) => {
    setUserAnswers(answers)
    setTimeUsedSeconds(timeUsed)
    setExamSnapshot(null) // Clear active exam snapshot on submit
    setStage('result')
  }

  // Abort exam
  const handleAbortExam = () => {
    setExamSnapshot(null)
    setStage('setup')
  }

  return (
    <div className="space-y-6">
      {stage === 'setup' && (
        <ExamSetup
          selectedSubject={selectedSubject}
          onChangeSubject={setSelectedSubject}
          onStartExam={handleStartExam}
          onResumeSnapshot={handleResumeSnapshot}
          onDiscardSnapshot={handleDiscardSnapshot}
        />
      )}

      {stage === 'session' && (
        <ExamSession
          questions={activeQuestions}
          durationMinutes={durationMinutes}
          examName={examName}
          subjectSlug={selectedSubject !== 'all' ? selectedSubject : undefined}
          initialAnswers={userAnswers}
          initialMarked={markedQuestions}
          initialIndex={initialIndex}
          initialElapsedSeconds={initialElapsedSeconds}
          onSubmitExam={handleSubmitExam}
          onAbortExam={handleAbortExam}
        />
      )}

      {stage === 'result' && (
        <ExamResult
          questions={activeQuestions}
          userAnswers={userAnswers}
          timeUsedSeconds={timeUsedSeconds}
          totalAllottedMinutes={durationMinutes}
          examName={examName}
          onNewExam={() => setStage('setup')}
          onOpenTopic={onOpenTopic}
          onOpenSubject={onOpenSubject}
          primarySubjectSlug={selectedSubject !== 'all' ? selectedSubject : undefined}
        />
      )}
    </div>
  )
}
