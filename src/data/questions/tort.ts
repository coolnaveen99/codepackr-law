import { McqQuestion } from '../../types'
import { TORT_PART_1 } from './tortPart1'
import { TORT_PART_2 } from './tortPart2'
import { TORT_PART_3 } from './tortPart3'
import { TORT_PART_4 } from './tortPart4'
import { TORT_PART_5 } from './tortPart5'
import { TORT_SUPPLEMENT_1 } from './tortSupplement1'

const TOPICS = [
  'tort-definition',
  'negligence',
  'defamation-tort',
  'nuisance',
  'strict-liability',
  'vicarious',
  'trespass-person',
  'tort-conspiracy',
  'consumer',
] as const

type RawTortQuestion = [string, [string, string, string, string], number, number]
type RawTortSupplementQuestion = [string, [string, string, string, string], number, number, string]

const RAW_TORT_QUESTIONS = [
  ...TORT_PART_1,
  ...TORT_PART_2,
  ...TORT_PART_3,
  ...TORT_PART_4,
  ...TORT_PART_5,
] as unknown as RawTortQuestion[]

const RAW_TORT_SUPPLEMENT = TORT_SUPPLEMENT_1 as unknown as RawTortSupplementQuestion[]

function cleanSourceText(value: string): string {
  return value
    .replace(/---PAGE\s+\d+[LR]---/gi, ' ')
    .replace(/Guide to All India Bar Examination/gi, ' ')
    .replace(/Multiple Choice Quest(?:ions|ia)?/gi, ' ')
    .replace(/uestions on Law of Torts/gi, ' ')
    .replace(/CE QUESTIONS ON\s*\)?F TORTS/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

const baseQuestions: McqQuestion[] = RAW_TORT_QUESTIONS.map(
  ([question, rawOptions, correctIndex, topic], index) => {
    const options = rawOptions.map(cleanSourceText) as [string, string, string, string]
    return {
      id: `tort-${index + 1}`,
      subject: 'tort',
      subjectSlug: 'tort',
      subjectLabel: 'Law of Torts',
      question: cleanSourceText(question),
      options,
      correctIndex,
      explanation: `Correct answer: ${options[correctIndex]} (option ${String.fromCharCode(65 + correctIndex)}). Answer marked from the answer key in TORTS MCQs.pdf.`,
      examSource: 'TORTS MCQs.pdf',
      difficulty: 'medium',
      topicId: TOPICS[topic],
    }
  },
)

const supplementQuestions: McqQuestion[] = RAW_TORT_SUPPLEMENT.map(
  ([question, rawOptions, correctIndex, topic, source], index) => {
    const options = rawOptions.map(cleanSourceText) as [string, string, string, string]
    return {
      id: `tort-${RAW_TORT_QUESTIONS.length + index + 1}`,
      subject: 'tort',
      subjectSlug: 'tort',
      subjectLabel: 'Law of Torts',
      question: cleanSourceText(question),
      options,
      correctIndex,
      explanation: `Correct answer: ${options[correctIndex]} (option ${String.fromCharCode(65 + correctIndex)}). Answer marked from ${source}.`,
      examSource: source,
      difficulty: 'medium',
      topicId: TOPICS[topic],
    }
  },
)

export const TORT_QUESTIONS: McqQuestion[] = [...baseQuestions, ...supplementQuestions]
