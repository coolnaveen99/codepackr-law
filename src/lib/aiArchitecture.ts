import { verifyCitationSync, type VerifiedCitation } from './citationVerification'

export const AI_RESPONSE_LABELS = [
  'AI-generated',
  'source-grounded',
  'user-provided',
  'verified',
  'needs-review',
] as const

export type AiResponseLabel = (typeof AI_RESPONSE_LABELS)[number]

export interface AiSourceReference {
  title: string
  url?: string
  location?: string
  sourceType: 'primary' | 'official' | 'canonical' | 'user-provided' | 'reported'
}

export interface AiLegalResponse {
  answer: string
  sources: AiSourceReference[]
  evidence: string[]
  verificationStatus: 'verified' | 'partially-verified' | 'unverified' | 'conflict'
  uncertainty: string[]
  nextVerificationStep: string
  labels: AiResponseLabel[]
  citations: VerifiedCitation[]
}

export interface AiResponseValidation {
  valid: boolean
  errors: string[]
  warnings: string[]
}

/**
 * Policy/contract layer only. It does not call an AI provider.
 * AI remains assistive and never becomes the legal authority.
 */
export function buildAiLegalResponse(
  input: Omit<AiLegalResponse, 'citations' | 'verificationStatus'> & { citationInputs?: string[] },
): AiLegalResponse {
  const citations = (input.citationInputs || []).map((citation) => verifyCitationSync(citation))
  const verificationStatus =
    citations.length === 0
      ? 'unverified'
      : citations.some((c) => c.status === 'conflict')
        ? 'conflict'
        : citations.every((c) => c.status === 'verified')
          ? 'verified'
          : citations.some((c) => c.status === 'verified' || c.status === 'partial')
            ? 'partially-verified'
            : 'unverified'

  const labels = new Set<AiResponseLabel>(input.labels)
  labels.add('AI-generated')
  if (input.sources.length > 0) labels.add('source-grounded')
  if (verificationStatus !== 'verified') labels.add('needs-review')
  else labels.add('verified')

  return {
    answer: input.answer,
    sources: input.sources,
    evidence: input.evidence,
    verificationStatus,
    uncertainty: input.uncertainty,
    nextVerificationStep: input.nextVerificationStep,
    labels: [...labels],
    citations,
  }
}

export function validateAiLegalResponse(response: AiLegalResponse): AiResponseValidation {
  const errors: string[] = []
  const warnings: string[] = []

  if (!response.answer.trim()) errors.push('AI response must contain an answer.')
  if (response.sources.length === 0) warnings.push('No sources supplied; treat the response as an unverified research suggestion.')
  if (!response.evidence.length) warnings.push('No evidence/location supplied.')
  if (!response.uncertainty.length) warnings.push('Uncertainty is not stated.')
  if (!response.nextVerificationStep.trim()) errors.push('A next verification step is required.')

  const hasAiLabel = response.labels.includes('AI-generated')
  if (!hasAiLabel) errors.push('AI-generated output must be explicitly labelled.')
  if (response.verificationStatus === 'verified' && !response.labels.includes('verified')) {
    errors.push('Verified status requires the verified label.')
  }
  if (response.verificationStatus !== 'verified' && !response.labels.includes('needs-review')) {
    errors.push('Unverified, partial, or conflicting output must be labelled needs-review.')
  }
  if (response.citations.some((citation) => citation.status === 'not-verified') && response.verificationStatus === 'verified') {
    errors.push('A response cannot be verified while containing an unverified citation.')
  }
  if (response.citations.some((citation) => citation.status === 'conflict') && response.verificationStatus !== 'conflict') {
    errors.push('Citation conflicts must surface as conflict verification status.')
  }

  return { valid: errors.length === 0, errors, warnings }
}

export function buildUnverifiedResearchSuggestion(
  answer: string,
  nextVerificationStep = 'Verify the proposition and citation against an authoritative court/statute source before reliance.',
): AiLegalResponse {
  return buildAiLegalResponse({
    answer,
    sources: [],
    evidence: [],
    uncertainty: ['No authoritative source was found in the supported source index.'],
    nextVerificationStep,
    labels: ['needs-review'],
  })
}

export const AI_ARCHITECTURE_BOUNDARIES = Object.freeze({
  productionProvider: false,
  judicialOutcomePrediction: false,
  judgeBiasScoring: false,
  convictionPrediction: false,
  winnerPrediction: false,
  silentTelemetryOfLegalText: false,
  authoritativeAi: false,
})
