import type { Judgment } from './types'

type JudgmentModule = Record<string, unknown>

const loaders = import.meta.glob<JudgmentModule>(
  ['./kesavananda.ts', './legacy-batch-*.ts', './famous-landmarks-batch*.ts'],
  { eager: false },
)

let cache: Judgment[] | null = null

function extractJudgments(module: JudgmentModule): Judgment[] {
  const values = Object.values(module)
  const arrays = values.filter((value): value is Judgment[] => Array.isArray(value))
  return arrays.flat()
}

export async function loadAllJudgments(): Promise<Judgment[]> {
  if (cache) return cache
  const modules = await Promise.all(Object.values(loaders).map((load) => load()))
  cache = modules.flatMap(extractJudgments)
  return cache
}

export function isJudgmentDataLazy(): boolean {
  return Object.keys(loaders).length > 0
}
