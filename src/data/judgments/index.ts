import type { Judgment } from './types'
import { kesavananda } from './kesavananda'
import { LEGACY_BATCH_A } from './legacy-batch-a'
import { LEGACY_BATCH_B1 } from './legacy-batch-b1'
import { LEGACY_BATCH_B2 } from './legacy-batch-b2'
import { FAMOUS_LANDMARKS_BATCH } from './famous-landmarks-batch'
import { FAMOUS_LANDMARKS_BATCH_2 } from './famous-landmarks-batch-2'
import { FAMOUS_LANDMARKS_BATCH_3 } from './famous-landmarks-batch-3'
import { FAMOUS_LANDMARKS_BATCH_4 } from './famous-landmarks-batch-4'
import { FAMOUS_LANDMARKS_BATCH_5 } from './famous-landmarks-batch-5'
import { FAMOUS_LANDMARKS_BATCH_6 } from './famous-landmarks-batch-6'
import { FAMOUS_LANDMARKS_BATCH_7 } from './famous-landmarks-batch-7'
import { FAMOUS_LANDMARKS_BATCH_8 } from './famous-landmarks-batch-8'
import { FAMOUS_LANDMARKS_BATCH_9 } from './famous-landmarks-batch-9'
import { FAMOUS_LANDMARKS_BATCH_10 } from './famous-landmarks-batch-10'
import { FAMOUS_LANDMARKS_BATCH_11 } from './famous-landmarks-batch-11'
import { FAMOUS_LANDMARKS_BATCH_12 } from './famous-landmarks-batch-12'
import { FAMOUS_LANDMARKS_BATCH_13 } from './famous-landmarks-batch-13'
import { FAMOUS_LANDMARKS_BATCH_14 } from './famous-landmarks-batch-14'
import { FAMOUS_LANDMARKS_BATCH_15 } from './famous-landmarks-batch-15'

export const ALL_JUDGMENTS: Judgment[] = [
  kesavananda,
  ...LEGACY_BATCH_A,
  ...LEGACY_BATCH_B1,
  ...LEGACY_BATCH_B2,
  ...FAMOUS_LANDMARKS_BATCH,
  ...FAMOUS_LANDMARKS_BATCH_2,
  ...FAMOUS_LANDMARKS_BATCH_3,
  ...FAMOUS_LANDMARKS_BATCH_4,
  ...FAMOUS_LANDMARKS_BATCH_5,
  ...FAMOUS_LANDMARKS_BATCH_6,
  ...FAMOUS_LANDMARKS_BATCH_7,
  ...FAMOUS_LANDMARKS_BATCH_8,
  ...FAMOUS_LANDMARKS_BATCH_9,
  ...FAMOUS_LANDMARKS_BATCH_10,
  ...FAMOUS_LANDMARKS_BATCH_11,
  ...FAMOUS_LANDMARKS_BATCH_12,
  ...FAMOUS_LANDMARKS_BATCH_13,
  ...FAMOUS_LANDMARKS_BATCH_14,
  ...FAMOUS_LANDMARKS_BATCH_15,
]

export const JUDGMENTS_BY_ID = new Map(ALL_JUDGMENTS.map((judgment) => [judgment.id, judgment]))
