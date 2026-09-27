import type { Judgment } from './types'
import { kesavananda } from './kesavananda'
import { LEGACY_BATCH_A } from './legacy-batch-a'
import { LEGACY_BATCH_B } from './legacy-batch-b'
import { FAMOUS_LANDMARKS_BATCH } from './famous-landmarks-batch'

export const ALL_JUDGMENTS: Judgment[] = [
  kesavananda,
  ...LEGACY_BATCH_A,
  ...LEGACY_BATCH_B,
  ...FAMOUS_LANDMARKS_BATCH,
]

export const JUDGMENTS_BY_ID = new Map(ALL_JUDGMENTS.map((judgment) => [judgment.id, judgment]))
