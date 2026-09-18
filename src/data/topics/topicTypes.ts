import type { CaseCitation } from '../subjects'

export interface TopicSection {
  id: string
  title: string
  content: string[]
  order: number
}

export interface TopicProvision {
  actId: string
  actName: string
  provisionId: string
  section?: string
  article?: string
  title?: string
}

export interface TopicExample {
  id: string
  title?: string
  description: string
}

export interface TopicQuestionAnswer {
  id: string
  question: string
  answer: string
  explanation?: string
  relatedProvisionIds?: string[]
  marks?: 10 | 16
}

export interface TopicHypothetical {
  id: string
  title?: string
  facts: string
  question: string
  applicableLaw: string
  analysis: string
  conclusion: string
}

export interface TopicMisconception {
  id: string
  trap: string
  correction: string
}

export interface TopicDistinction {
  id: string
  title: string
  left: string
  right: string
  rows: { point: string; left: string; right: string }[]
}

export interface TopicExamFramework {
  marks: 10 | 16
  question?: string
  steps: string[]
}

export interface TopicContent {
  study?: string
  short?: string
  detailed?: string
  glance?: string
  sections?: TopicSection[]
  provisions?: TopicProvision[]
  examples?: TopicExample[]
  hypotheticals?: TopicHypothetical[]
  distinctions?: TopicDistinction[]
  misconceptions?: TopicMisconception[]
  questionsAndAnswers?: TopicQuestionAnswer[]
  relatedTopics?: string[]
  cases?: CaseCitation[]
  bareActPointers?: string[]
  examTips?: string[]
  examFrameworks?: TopicExamFramework[]
  answerSkeleton?: string[]
  revisionPoints?: string[]
}
