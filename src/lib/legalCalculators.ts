export interface CalculatorMeta {
  formula: string
  assumptions: string[]
  legalBasis: string
  source: string
  warning: string
}

export interface DateDifferenceResult {
  totalDays: number
  calendarYears: number
  calendarMonths: number
  calendarDays: number
  formula: string
}

function parseDate(value: string): Date | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return null
  const d = new Date(value + 'T00:00:00Z')
  return Number.isNaN(d.getTime()) ? null : d
}

export function dateDifference(start: string, end: string): DateDifferenceResult | null {
  const a = parseDate(start)
  const b = parseDate(end)
  if (!a || !b || b < a) return null
  const totalDays = Math.round((b.getTime() - a.getTime()) / 86400000)
  let cursor = new Date(a)
  let years = b.getUTCFullYear() - cursor.getUTCFullYear()
  cursor.setUTCFullYear(cursor.getUTCFullYear() + years)
  if (cursor > b) { years--; cursor.setUTCFullYear(cursor.getUTCFullYear() - 1) }
  let months = b.getUTCMonth() - cursor.getUTCMonth()
  if (months < 0) months += 12
  cursor.setUTCMonth(cursor.getUTCMonth() + months)
  if (cursor > b) { months--; cursor.setUTCMonth(cursor.getUTCMonth() - 1) }
  const days = Math.round((b.getTime() - cursor.getTime()) / 86400000)
  return { totalDays, calendarYears: years, calendarMonths: months, calendarDays: days, formula: `Total days = ${totalDays}; calendar span = ${years}y ${months}m ${days}d` }
}

export function simpleInterest(principal: number, annualRatePercent: number, days: number): { interest: number; total: number; formula: string } | null {
  if (![principal, annualRatePercent, days].every(Number.isFinite) || principal < 0 || annualRatePercent < 0 || days < 0) return null
  const interest = principal * (annualRatePercent / 100) * (days / 365)
  return { interest, total: principal + interest, formula: 'I = P × (R/100) × (days/365)' }
}

export function compoundInterest(principal: number, annualRatePercent: number, years: number, compoundsPerYear: number): { interest: number; total: number; formula: string } | null {
  if (![principal, annualRatePercent, years, compoundsPerYear].every(Number.isFinite) || principal < 0 || annualRatePercent < 0 || years < 0 || compoundsPerYear <= 0) return null
  const total = principal * Math.pow(1 + (annualRatePercent / 100) / compoundsPerYear, compoundsPerYear * years)
  return { interest: total - principal, total, formula: 'A = P × (1 + R/(100n))^(nt)' }
}

export function addDays(start: string, days: number): string | null {
  const d = parseDate(start)
  if (!d || !Number.isFinite(days)) return null
  d.setUTCDate(d.getUTCDate() + Math.trunc(days))
  return d.toISOString().slice(0, 10)
}

export function mactWorksheet(parts: { medical: number; incomeLoss: number; futureLoss: number; care: number; property: number; other: number; interimCompensation: number }): { gross: number; net: number; formula: string } | null {
  const values = Object.values(parts)
  if (!values.every((v) => Number.isFinite(v) && v >= 0)) return null
  const gross = parts.medical + parts.incomeLoss + parts.futureLoss + parts.care + parts.property + parts.other
  const net = Math.max(0, gross - parts.interimCompensation)
  return { gross, net, formula: 'Worksheet total = medical + income/loss + future loss + care + property + other − interim compensation' }
}

export function percentageOfBase(base: number, ratePercent: number): number | null {
  if (!Number.isFinite(base) || !Number.isFinite(ratePercent) || base < 0 || ratePercent < 0) return null
  return base * ratePercent / 100
}

export const CALCULATOR_META: Record<string, CalculatorMeta> = {
  dateDifference: {
    formula: 'End date − start date',
    assumptions: ['Calendar-day arithmetic; start/end are interpreted as local civil dates.', 'This does not decide whether a procedural rule includes or excludes a day.'],
    legalBasis: 'Generic date arithmetic; any legal counting rule must be checked separately.',
    source: 'Deterministic browser calculation',
    warning: 'Court/statutory computation may apply exclusion, inclusion, holidays, or other special rules.',
  },
  simpleInterest: {
    formula: 'I = P × (R/100) × (days/365)',
    assumptions: ['Simple interest; 365-day convention.', 'Rate is supplied by the user and is not asserted to be legally applicable.'],
    legalBasis: 'Interest Act, 1978 and CPC s.34 may govern particular claims/orders, but the applicable rate and period are case-specific.',
    source: 'India Code — Interest Act, 1978; Code of Civil Procedure, 1908 s.34',
    warning: 'Do not treat the arithmetic result as an entitlement to interest or a court-awarded rate.',
  },
  compoundInterest: {
    formula: 'A = P × (1 + R/(100n))^(nt)',
    assumptions: ['Compounding frequency and rate are user inputs.', 'No statutory or contractual rate is inferred.'],
    legalBasis: 'Contract/statute/order determines whether compounding is available.',
    source: 'Deterministic arithmetic; verify the governing contract/statute/order.',
    warning: 'Compounding may not be legally recoverable merely because the formula produces a result.',
  },
  mact: {
    formula: 'Itemised worksheet total minus interim compensation',
    assumptions: ['Each head is manually entered; no multiplier, future-income, disability or dependency assumption is inferred.', 'Zero may be entered where a head is not claimed.'],
    legalBasis: 'Motor Vehicles Act, 1988, including ss.166 and 168; tribunal determines compensation that appears just.',
    source: 'India Code — Motor Vehicles Act, 1988',
    warning: 'This is an arithmetic worksheet, not a statutory compensation entitlement calculator.',
  },
  deadline: {
    formula: 'Reference date + user-entered period',
    assumptions: ['Period and unit are supplied by the user.', 'No forum-specific limitation period is assumed.'],
    legalBasis: 'Limitation Act, 1963 and applicable special statute/rules where relevant.',
    source: 'India Code — Limitation Act, 1963',
    warning: 'Verify the exact article/statute, commencement event, exclusions, condonation and court rules.',
  },
  notice: {
    formula: 'Reference date + user-entered notice period',
    assumptions: ['Notice period is supplied by the user.', 'No universal notice period is assumed.'],
    legalBasis: 'Contract, statute, employment/service rules, tenancy law or other governing instrument as applicable.',
    source: 'User-provided governing instrument/statute',
    warning: 'Notice periods vary by legal relationship and jurisdiction; verify the governing source.',
  },
  fee: {
    formula: 'Base amount × user-entered rate%',
    assumptions: ['Rate is manually supplied.', 'No state/court fee schedule is encoded nationally.'],
    legalBasis: 'Applicable Court Fees Act/rules and local court schedule.',
    source: 'User-supplied current court-fee schedule',
    warning: 'State and forum-specific court fees must be verified from the current official schedule.',
  },
  stamp: {
    formula: 'Base amount × user-entered rate%',
    assumptions: ['Rate is manually supplied.', 'No state-specific stamp-duty rate is asserted.'],
    legalBasis: 'Applicable Stamp Act and state notifications/schedules.',
    source: 'User-supplied current stamp-duty schedule',
    warning: 'Stamp duty is instrument/state-specific; verify the current official schedule.',
  },
}
