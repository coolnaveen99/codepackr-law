import type { Judgment } from './types'
import { kesavananda } from './kesavananda'
import { LEGACY_BATCH_A } from './legacy-batch-a'
import { LEGACY_BATCH_B1 } from './legacy-batch-b1'
import { LEGACY_BATCH_B2 } from './legacy-batch-b2'
import { FAMOUS_LANDMARKS_BATCH } from './famous-landmarks-batch'
import { FAMOUS_LANDMARKS_BATCH_2 } from './famous-landmarks-batch-2'
import { FAMOUS_LANDMARKS_BATCH_3 } from './famous-landmarks-batch-3'
import { FAMOUS_LANDMARKS_BATCH_4 } from './famous-landmarks-batch-4'

export const ALL_JUDGMENTS: Judgment[] = [
  kesavananda,
  ...LEGACY_BATCH_A,
  ...LEGACY_BATCH_B1,
  ...LEGACY_BATCH_B2,
  ...FAMOUS_LANDMARKS_BATCH,
  ...FAMOUS_LANDMARKS_BATCH_2,
  ...FAMOUS_LANDMARKS_BATCH_3,
  ...FAMOUS_LANDMARKS_BATCH_4,
]

export const JUDGMENTS_BY_ID = new Map(ALL_JUDGMENTS.map((judgment) => [judgment.id, judgment]))
