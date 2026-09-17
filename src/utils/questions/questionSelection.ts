import type { LawSubject, McqQuestion } from '../../types'
import { shuffleArray } from '../../lib/utils'

export type QuestionPoolType = 'topic' | 'mixed' | 'all'

export interface QuestionSelectionOptions {
  questions: McqQuestion[]
  subject?: LawSubject
  topicId?: string
  poolType?: QuestionPoolType
  count: number
}

export function selectQuestions({ questions, subject = 'all', topicId, poolType = 'all', count }: QuestionSelectionOptions): McqQuestion[] {
  const subjectQuestions = subject === 'all' ? questions : questions.filter((question) => question.subject === subject)
  const eligible = poolType === 'topic' && topicId
    ? subjectQuestions.filter((question) => question.topicId === topicId)
    : subjectQuestions

  return shuffleArray(eligible).slice(0, Math.min(count, eligible.length))
}

export function getAvailableQuestions({ questions, subject = 'all', topicId, poolType = 'all' }: Omit<QuestionSelectionOptions, 'count'>): McqQuestion[] {
  const subjectQuestions = subject === 'all' ? questions : questions.filter((question) => question.subject === subject)
  return poolType === 'topic' && topicId
    ? subjectQuestions.filter((question) => question.topicId === topicId)
    : subjectQuestions
}
