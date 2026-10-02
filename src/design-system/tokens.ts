/**
 * UI-002 — Chambers Record design tokens.
 *
 * Source of truth for the 2026 CodePackr Law design system.
 * Components must consume semantic roles, not raw hex, except this module.
 * Pages are not restyled here; UI-003 adopts these tokens.
 *
 * Brand constraint: seal burgundy #8B1E3F. Never Dev blue #2563EB
 * and never Finance emerald #10B981 / #059669.
 */

export const SEAL_BURGUNDY = '#8B1E3F'
export const SEAL_BURGUNDY_RAISED = '#9F2D4A'

export const color = {
  seal: {
    50: '#FBF4F6',
    100: '#F6E4EA',
    200: '#EBC5D1',
    300: '#D992A8',
    400: '#C25B7C',
    500: '#A33258',
    600: SEAL_BURGUNDY,
    650: SEAL_BURGUNDY_RAISED,
    700: '#6F1833',
    800: '#541226',
    900: '#3A0C1A',
    950: '#22070F',
  },
  ink: {
    50: '#F7F4EF',
    100: '#EFEAE3',
    200: '#E4DDD6',
    300: '#D7CDC3',
    400: '#B7AEA7',
    500: '#6E645E',
    600: '#5C534C',
    700: '#4E453F',
    800: '#3F3733',
    900: '#1C1614',
    950: '#14110F',
  },
  paper: {
    canvas: '#F7F4EF',
    raised: '#FFFDF9',
    sunken: '#EFEAE3',
  },
  status: {
    verified: '#1F6B45',
    verifiedSoft: '#E7F3EC',
    partial: '#8A5A12',
    partialSoft: '#FBF6EE',
    conflict: '#8B1E3F',
    conflictSoft: '#F8E8EE',
    review: '#4E5A6A',
    reviewSoft: '#EEF1F4',
    user: '#4E453F',
    userSoft: '#F3EEE8',
  },
} as const

/** Forbidden accents from sibling Codepackr products. */
export const forbiddenAccents = ['#2563EB', '#2563eb', '#10B981', '#10b981', '#059669'] as const

export const font = {
  display: '"Iowan Old Style", "Palatino Linotype", Palatino, Georgia, serif',
  sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  mono: 'ui-monospace, "SF Mono", Menlo, Consolas, monospace',
} as const

export const type = {
  display: { size: '2.5rem', line: '1.15', tracking: '-0.02em', weight: '650' },
  title: { size: '1.75rem', line: '1.25', tracking: '-0.015em', weight: '650' },
  heading: { size: '1.25rem', line: '1.35', tracking: '-0.01em', weight: '650' },
  body: { size: '1rem', line: '1.6', tracking: '0', weight: '450' },
  small: { size: '0.875rem', line: '1.5', tracking: '0', weight: '450' },
  caption: { size: '0.75rem', line: '1.4', tracking: '0.04em', weight: '650' },
  citation: { size: '0.8125rem', line: '1.45', tracking: '0', weight: '500' },
} as const

/** 4px base. Interactive controls use space 11 (44px) as the touch floor. */
export const space = {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  11: '2.75rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
} as const

export const radius = {
  control: '0.75rem',
  panel: '1rem',
  sheet: '1.5rem',
  pill: '999px',
} as const

export const elevation = {
  flat: 'none',
  raised: '0 1px 0 rgba(28, 22, 20, 0.04), 0 8px 24px rgba(28, 22, 20, 0.04)',
  overlay: '0 16px 40px rgba(28, 22, 20, 0.16)',
} as const

export const motion = {
  duration: '160ms',
  ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
} as const

export const breakpoint = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
} as const

export const layout = {
  treatise: '46rem',
  content: '70rem',
  workspace: '90rem',
  rail: '17.5rem',
  inspector: '20rem',
  gutterMobile: '1rem',
  gutterDesktop: '1.5rem',
  columns: 12,
  touchTarget: '44px',
} as const

export const semanticLight = {
  canvas: color.paper.canvas,
  raised: color.paper.raised,
  sunken: color.paper.sunken,
  ink: color.ink[900],
  muted: color.ink[700],
  faint: color.ink[600],
  line: color.ink[200],
  lineStrong: color.ink[300],
  accent: color.seal[600],
  accentHover: color.seal[700],
  accentSoft: color.seal[50],
  accentInk: '#FFFFFF',
  focus: color.seal[600],
} as const

export const semanticDark = {
  canvas: color.ink[950],
  raised: '#1E1A17',
  sunken: '#100E0C',
  ink: '#F6F1EB',
  muted: '#D7CDC3',
  faint: '#B7AEA7',
  line: '#3A322C',
  lineStrong: '#524840',
  accent: color.seal[650],
  accentHover: '#B84A68',
  accentSoft: '#3A1824',
  accentInk: '#FFFDF9',
  focus: '#E7B7C6',
} as const

export const verificationStatus = [
  'verified',
  'partial',
  'not-verified',
  'conflict',
  'user-provided',
  'needs-review',
  'parsed',
] as const

export type VerificationStatusToken = (typeof verificationStatus)[number]

export const sourceKind = [
  'statute',
  'judgment',
  'gazette',
  'official-portal',
  'commentary',
  'historical-code',
  'user-note',
] as const

export type SourceKindToken = (typeof sourceKind)[number]

export const inForceStatus = ['in-force', 'transitional', 'historical'] as const

export type InForceStatusToken = (typeof inForceStatus)[number]

export const verificationLabel: Record<VerificationStatusToken, string> = {
  verified: 'Verified',
  partial: 'Partial match',
  'not-verified': 'Not verified',
  conflict: 'Conflict',
  'user-provided': 'User provided',
  'needs-review': 'Needs review',
  parsed: 'Parsed',
}

export const sourceKindLabel: Record<SourceKindToken, string> = {
  statute: 'Statute',
  judgment: 'Judgment',
  gazette: 'Gazette',
  'official-portal': 'Official portal',
  commentary: 'Commentary',
  'historical-code': 'Historical code',
  'user-note': 'User note',
}

export const inForceLabel: Record<InForceStatusToken, string> = {
  'in-force': 'In force',
  transitional: 'Transitional',
  historical: 'Historical',
}
