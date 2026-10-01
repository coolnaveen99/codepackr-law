/**
 * Educational Limitation Act, 1963 reference calculator.
 * State-specific rules and special statutes may differ — always verify.
 */

export type LimitationCategory =
  | 'suit-contract'
  | 'suit-tort'
  | 'suit-recovery-money'
  | 'suit-immovable'
  | 'appeal-decree'
  | 'appeal-order'
  | 'revision'
  | 'application-set-aside'
  | 'execution'
  | 'writ-custom'

export interface LimitationRule {
  id: LimitationCategory
  label: string
  periodYears?: number
  periodMonths?: number
  periodDays?: number
  articleHint: string
  notes: string[]
  source: string
}

export const LIMITATION_RULES: LimitationRule[] = [
  {
    id: 'suit-contract',
    label: 'Suit on contract (simple money / contractual claim — typical Art. 55/113 style guidance)',
    periodYears: 3,
    articleHint: 'Limitation Act schedule — contract-related articles (verify exact article for cause of action)',
    notes: [
      'Period generally runs from breach or when the right to sue accrues.',
      'Written registered contracts and special statutes can alter the period.',
    ],
    source: 'Limitation Act, 1963 (educational summary — verify schedule article)',
  },
  {
    id: 'suit-tort',
    label: 'Suit for compensation for tort (typical 3-year pattern)',
    periodYears: 3,
    articleHint: 'Tort / compensation articles in the schedule',
    notes: ['Accrual usually from the date of the tort or knowledge, depending on the wrong.'],
    source: 'Limitation Act, 1963 (educational summary)',
  },
  {
    id: 'suit-recovery-money',
    label: 'Suit for money payable for money lent / account',
    periodYears: 3,
    articleHint: 'Money recovery articles',
    notes: ['Demand and acknowledgment under ss. 18–19 can extend limitation.'],
    source: 'Limitation Act, 1963 (educational summary)',
  },
  {
    id: 'suit-immovable',
    label: 'Suit relating to immovable property (possession patterns vary 12 years in many articles)',
    periodYears: 12,
    articleHint: 'Immovable property / possession articles',
    notes: ['Adverse possession and title suits have distinct accrual rules. Confirm the exact article.'],
    source: 'Limitation Act, 1963 (educational summary)',
  },
  {
    id: 'appeal-decree',
    label: 'Appeal against a decree (typical 90 / 30 day patterns by forum — educational default 90 days)',
    periodDays: 90,
    articleHint: 'Appeals under the schedule / CPC & special Acts',
    notes: [
      'High Court / Supreme Court / special statutes often prescribe different periods.',
      'Exclude time for certified copy under s. 12 where applicable.',
    ],
    source: 'Limitation Act + forum statute (verify)',
  },
  {
    id: 'appeal-order',
    label: 'Appeal against an order (often shorter — educational default 30 days)',
    periodDays: 30,
    articleHint: 'Appeals from orders',
    notes: ['Check the Code and the specific order appealed from.'],
    source: 'Limitation Act + CPC (verify)',
  },
  {
    id: 'revision',
    label: 'Revision (educational default 90 days — confirm local practice)',
    periodDays: 90,
    articleHint: 'Revision applications',
    notes: ['Revisional limitation can be statute-specific or practice-driven.'],
    source: 'Code + practice (verify)',
  },
  {
    id: 'application-set-aside',
    label: 'Application to set aside ex parte decree / similar (often 30 days)',
    periodDays: 30,
    articleHint: 'Applications under the schedule',
    notes: ['Knowledge of the decree can matter; verify Order IX and related provisions.'],
    source: 'Limitation Act + CPC (verify)',
  },
  {
    id: 'execution',
    label: 'Execution of decree (typical 12 years)',
    periodYears: 12,
    articleHint: 'Execution articles',
    notes: ['Fresh applications and part-satisfaction rules require careful reading of Art. 136-type provisions.'],
    source: 'Limitation Act, 1963 (educational summary)',
  },
  {
    id: 'writ-custom',
    label: 'Writ petition (no fixed Limitation Act period — laches doctrine)',
    articleHint: 'Constitutional remedies; delay & laches',
    notes: [
      'Writs are not governed by a single Limitation Act article.',
      'Courts apply delay/laches; act promptly and explain any delay.',
    ],
    source: 'Constitutional practice (not a fixed statutory period)',
  },
]

export interface LimitationResult {
  rule: LimitationRule
  startDate: string
  endDate: string | null
  expired: boolean | null
  daysRemaining: number | null
  formula: string
  warnings: string[]
}

function addPeriod(start: Date, rule: LimitationRule): Date | null {
  if (rule.id === 'writ-custom') return null
  const d = new Date(start.getTime())
  if (rule.periodYears) d.setFullYear(d.getFullYear() + rule.periodYears)
  if (rule.periodMonths) d.setMonth(d.getMonth() + rule.periodMonths)
  if (rule.periodDays) d.setDate(d.getDate() + rule.periodDays)
  return d
}

function toISODate(d: Date): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

export function computeLimitation(
  category: LimitationCategory,
  startDateStr: string,
  asOfStr?: string,
): LimitationResult | null {
  const rule = LIMITATION_RULES.find((r) => r.id === category)
  if (!rule) return null
  const start = new Date(startDateStr + 'T00:00:00')
  if (Number.isNaN(start.getTime())) return null
  const asOf = asOfStr ? new Date(asOfStr + 'T00:00:00') : new Date()
  const end = addPeriod(start, rule)
  const warnings = [
    ...rule.notes,
    'This is an educational worksheet, not a court-ready opinion.',
    'State amendments, special Acts (e.g. consumer, labour, tax), and s. 4–5 exclusion/condonation can change outcomes.',
  ]

  if (!end) {
    return {
      rule,
      startDate: toISODate(start),
      endDate: null,
      expired: null,
      daysRemaining: null,
      formula: 'No fixed Limitation Act period — assess delay/laches',
      warnings,
    }
  }

  const msPerDay = 86400000
  const daysRemaining = Math.ceil((end.getTime() - asOf.getTime()) / msPerDay)
  const parts: string[] = []
  if (rule.periodYears) parts.push(`${rule.periodYears} year(s)`)
  if (rule.periodMonths) parts.push(`${rule.periodMonths} month(s)`)
  if (rule.periodDays) parts.push(`${rule.periodDays} day(s)`)

  return {
    rule,
    startDate: toISODate(start),
    endDate: toISODate(end),
    expired: daysRemaining < 0,
    daysRemaining,
    formula: `Start (${toISODate(start)}) + ${parts.join(' + ')} → ${toISODate(end)}`,
    warnings,
  }
}
