/**
 * UI-003–UI-013 surface map.
 * Adoption only: routes, SEO, and tool logic stay where they are.
 */
export const UI_TASKS = [
  'UI-003',
  'UI-004',
  'UI-005',
  'UI-006',
  'UI-007',
  'UI-008',
  'UI-009',
  'UI-010',
  'UI-011',
  'UI-012',
  'UI-013',
] as const

export type UiTaskId = (typeof UI_TASKS)[number]

export const UI_TASK_TITLE: Record<UiTaskId, string> = {
  'UI-003': 'Shell and chrome',
  'UI-004': 'Home and library entry',
  'UI-005': 'Catalog and treatise',
  'UI-006': 'Knowledge and case law',
  'UI-007': 'Research workspace',
  'UI-008': 'Citation and sources',
  'UI-009': 'Judgment reading',
  'UI-010': 'Case preparation',
  'UI-011': 'Draft studio',
  'UI-012': 'Filing and calculators',
  'UI-013': 'Study, practice, and account',
}

const TOOL_TASK: Record<string, UiTaskId> = {
  'research-workbench': 'UI-007',
  'global-search': 'UI-007',
  'research-bundle': 'UI-007',
  'citation-verifier': 'UI-008',
  'primary-source-finder': 'UI-008',
  'judgment-analyzer': 'UI-009',
  'judgment-compare': 'UI-009',
  'landmark-cases': 'UI-009',
  'case-brief-builder': 'UI-009',
  'document-compare': 'UI-009',
  'case-prep': 'UI-010',
  'cause-list-organizer': 'UI-010',
  'court-forum-directory': 'UI-010',
  'neutral-analysis': 'UI-010',
  'legal-draft-studio': 'UI-011',
  'filing-checklists': 'UI-012',
  'limitation-calculator': 'UI-012',
  'legal-calculators': 'UI-012',
  'transition-centre': 'UI-012',
  'bns-ipc-mapper': 'UI-012',
  'bnss-crpc-mapper': 'UI-012',
  'bsa-iea-mapper': 'UI-012',
}

const WIDE = new Set<UiTaskId>(['UI-004', 'UI-007', 'UI-008', 'UI-009', 'UI-010', 'UI-011', 'UI-012'])

export function resolveUiTask(route: { type: string; slug?: string }): UiTaskId {
  if (route.type === 'home') return 'UI-004'
  if (route.type === 'subjects' || route.type === 'subject' || route.type === 'topic') return 'UI-005'
  if (route.type === 'knowledge' || route.type === 'case-law') return 'UI-006'
  if (route.type === 'tool') return TOOL_TASK[route.slug ?? ''] ?? 'UI-013'
  if (route.type === 'contact') return 'UI-013'
  return 'UI-003'
}

export function surfaceMeasure(task: UiTaskId): 'treatise' | 'workspace' {
  return WIDE.has(task) ? 'workspace' : 'treatise'
}
