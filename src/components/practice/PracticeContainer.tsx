import React, { useState, useEffect } from 'react'
import { ALL_QUESTIONS } from '../../data/questions'
import { LawSubject, McqQuestion } from '../../types'
import {
  getAvailableQuestions,
  selectQuestions,
  QuestionPoolType,
} from '../../utils/questions/questionSelection'
import { PracticeSetup } from './PracticeSetup'
import { PracticeSession } from './PracticeSession'
import { PracticeResult } from './PracticeResult'

export interface PracticeContainerProps {
  initialSubject?: LawSubject
  initialTopicId?: string
  onOpenTopic?: (subjectSlug: string, topicId: string) => void
  onOpenSubject?: (subjectSlug: string) => void
}

export const PracticeContainer: React.FC<PracticeContainerProps> = ({
  initialSubject = 'all',
  initialTopicId = '',
  onOpenTopic,
  onOpenSubject,
}) => {
  const [selectedSubject, setSelectedSubject] = useState<LawSubject>(initialSubject)
  const [selectedTopicId, setSelectedTopicId] = useState<string>(initialTopicId)
  const [poolType, setPoolType] = useState<QuestionPoolType>(initialTopicId ? 'topic' : 'all')
  const [questionCount, setQuestionCount] = useState<number>(10)

  // Stage: 'setup' | 'session' | 'result'
  const [stage, setStage] = useState<'setup' | 'session' | 'result'>('setup')
  const [activeQuestions, setActiveQuestions] = useState<McqQuestion[]>([])
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({})
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0)
  const [isDemoActive, setIsDemoActive] = useState<boolean>(false)

  // Update selection if initial props change
  useEffect(() => {
    if (initialSubject && initialSubject !== 'all') {
      setSelectedSubject(initialSubject)
    }
    if (initialTopicId) {
      setSelectedTopicId(initialTopicId)
      setPoolType('topic')
    }
  }, [initialSubject, initialTopicId])

  // Get matching available questions
  const availableQuestions = getAvailableQuestions({
    questions: ALL_QUESTIONS,
    subject: selectedSubject,
    topicId: selectedTopicId,
    poolType,
  })

  // Start Practice
  const handleStartPractice = () => {
    const questions = selectQuestions({
      questions: ALL_QUESTIONS,
      subject: selectedSubject,
      topicId: selectedTopicId,
      poolType,
      count: questionCount,
    })
    setActiveQuestions(questions)
    setUserAnswers({})
    setElapsedSeconds(0)
    setIsDemoActive(false)
    setStage('session')
  }

  // Load Demo per Quality Gate
  const handleLoadDemo = () => {
    // Select 5 sample questions and pre-answer the first one
    const demoQuestions = selectQuestions({
      questions: ALL_QUESTIONS,
      subject: 'all',
      poolType: 'all',
      count: 5,
    })
    setActiveQuestions(demoQuestions)
    if (demoQuestions[0]) {
      setUserAnswers({ [demoQuestions[0].id]: demoQuestions[0].correctIndex })
    }
    setIsDemoActive(true)
    setStage('session')
  }

  // Reset per Quality Gate
  const handleReset = () => {
    setSelectedSubject('all')
    setSelectedTopicId('')
    setPoolType('all')
    setQuestionCount(10)
    setIsDemoActive(false)
    setUserAnswers({})
    setActiveQuestions([])
    setStage('setup')
  }

  // Complete session
  const handleFinishSession = (answers: Record<string, number>, elapsed: number) => {
    setUserAnswers(answers)
    setElapsedSeconds(elapsed)
    setStage('result')
  }

  // Practice again with same filter
  const handlePracticeAgain = () => {
    const questions = selectQuestions({
      questions: ALL_QUESTIONS,
      subject: selectedSubject,
      topicId: selectedTopicId,
      poolType,
      count: questionCount,
    })
    setActiveQuestions(questions)
    setUserAnswers({})
    setElapsedSeconds(0)
    setStage('session')
  }

  return (
    <div className="space-y-6">
      {stage === 'setup' && (
        <PracticeSetup
          selectedSubject={selectedSubject}
          onChangeSubject={setSelectedSubject}
          selectedTopicId={selectedTopicId}
          onChangeTopicId={setSelectedTopicId}
          poolType={poolType}
          onChangePoolType={setPoolType}
          questionCount={questionCount}
          onChangeQuestionCount={setQuestionCount}
          availableCount={availableQuestions.length}
          onStartPractice={handleStartPractice}
          onLoadDemo={handleLoadDemo}
          onReset={handleReset}
          isDemoActive={isDemoActive}
        />
      )}

      {stage === 'session' && (
        <PracticeSession
          questions={activeQuestions}
          onFinish={handleFinishSession}
          onExit={() => setStage('setup')}
          onOpenTopic={onOpenTopic}
          initialAnswers={userAnswers}
        />
      )}

      {stage === 'result' && (
        <PracticeResult
          questions={activeQuestions}
          userAnswers={userAnswers}
          elapsedSeconds={elapsedSeconds}
          onPracticeAgain={handlePracticeAgain}
          onNewPractice={() => setStage('setup')}
          onOpenTopic={onOpenTopic}
          onOpenSubject={onOpenSubject}
          primarySubjectSlug={selectedSubject !== 'all' ? selectedSubject : undefined}
          primaryTopicId={selectedTopicId || undefined}
        />
      )}
    </div>
  )
}
