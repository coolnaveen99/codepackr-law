import type { Judgment } from './types'
import { kesavananda } from './kesavananda'
import { manekaGandhi } from './manekaGandhi'
import { minervaMills } from './minervaMills'
import { puttaswamy } from './puttaswamy'
import { lalitaKumari } from './lalitaKumari'
import { dkBasu } from './dkBasu'
import { shreyaSinghal } from './shreyaSinghal'
import { shayaraBano } from './shayaraBano'
import { FAMOUS_LANDMARKS_BATCH } from './famous-landmarks-batch'

export const ALL_JUDGMENTS: Judgment[] = [
  kesavananda,
  manekaGandhi,
  minervaMills,
  puttaswamy,
  lalitaKumari,
  dkBasu,
  shreyaSinghal,
  shayaraBano,
  ...FAMOUS_LANDMARKS_BATCH,
]

export const JUDGMENTS_BY_ID = new Map(ALL_JUDGMENTS.map((judgment) => [judgment.id, judgment]))
