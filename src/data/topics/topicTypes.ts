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
  illustrationType?: 'statutory' | 'practical' | 'fail-scenario'
}

export interface TopicQuestionAnswer {
  id: string
  question: string
  answer: string
  explanation?: string
  relatedProvisionIds?: string[]
  draftingCategory?: 'brief' | 'submissions' | 'opinion'
  /** @deprecated Retained for backwards compatibility with legacy data; use draftingCategory */
  marks?: 10 | 16
}

export interface TopicHypothetical {
  id: string
  title?: string
  facts?: string
  scenario?: string
  question?: string
  applicableLaw?: string
  analysis: string
  conclusion?: string
}

export interface TopicMisconception {
  id?: string
  trap?: string
  misconception?: string
  correction: string
}

export interface TopicDistinctionRow {
  point: string
  left: string
  right: string
}

export interface TopicDistinction {
  id?: string
  title?: string
  left?: string
  right?: string
  conceptA?: string
  conceptB?: string
  rows?: TopicDistinctionRow[]
  points?: string[]
}

export interface TopicExamFramework {
  marks?: 10 | 16
  draftingCategory?: 'brief' | 'submissions'
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
