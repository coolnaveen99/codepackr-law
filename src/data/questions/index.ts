import { McqQuestion, LawSubject } from '../../types'
import { CONSTITUTION_QUESTIONS } from './constitution'
import { BNS_CRIMINAL_QUESTIONS } from './bnsCriminal'
import { CPC_CONTRACT_QUESTIONS } from './cpcContract'

export const ALL_QUESTIONS: McqQuestion[] = [
  ...CONSTITUTION_QUESTIONS,
  ...BNS_CRIMINAL_QUESTIONS,
  ...CPC_CONTRACT_QUESTIONS,
]

export const SUBJECT_OPTIONS: { value: LawSubject; label: string; count: number }[] = [
  { value: 'all', label: 'All Subjects (Full Bank)', count: ALL_QUESTIONS.length },
  { value: 'constitution', label: 'Constitutional Law', count: CONSTITUTION_QUESTIONS.length },
  { value: 'bns', label: 'Bharatiya Nyaya Sanhita (BNS)', count: ALL_QUESTIONS.filter(q => q.subject === 'bns').length },
  { value: 'bnss', label: 'Bharatiya Nagarik Suraksha Sanhita (BNSS)', count: ALL_QUESTIONS.filter(q => q.subject === 'bnss').length },
  { value: 'bsa', label: 'Bharatiya Sakshya Adhiniyam (BSA)', count: ALL_QUESTIONS.filter(q => q.subject === 'bsa').length },
  { value: 'cpc', label: 'Code of Civil Procedure (CPC)', count: ALL_QUESTIONS.filter(q => q.subject === 'cpc').length },
  { value: 'contract', label: 'Indian Contract Act', count: ALL_QUESTIONS.filter(q => q.subject === 'contract').length },
  { value: 'family', label: 'Family Law', count: ALL_QUESTIONS.filter(q => q.subject === 'family').length },
]

export function getQuestionsBySubject(subject: LawSubject): McqQuestion[] {
  if (subject === 'all') {
    return ALL_QUESTIONS
  }
  return ALL_QUESTIONS.filter((q) => q.subject === subject)
}
