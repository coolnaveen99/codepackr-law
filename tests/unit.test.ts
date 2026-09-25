import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { searchJudgments, filterJudgments } from '../src/utils/judgments/searchJudgments'
import { ALL_JUDGMENTS } from '../src/data/judgments'
import { ALL_QUESTIONS } from '../src/data/questions'
import { TOOLS } from '../src/data/tools'
import { SECTION_MAPPINGS } from '../src/data/sections/bnsIpcData'

describe('Unit Tests: Judgment Search & Filtering', () => {
  it('searches judgments by query string', () => {
    const results = searchJudgments(ALL_JUDGMENTS, 'basic structure')
    assert.ok(results.length > 0, 'Should find basic structure cases')
    assert.ok(results.some((j) => j.id === 'kesavananda-bharati-1973'), 'Kesavananda should be returned')
  })

  it('filters judgments by subject and year', () => {
    const filtered = filterJudgments(ALL_JUDGMENTS, { subject: 'Constitution', year: 1973 })
    assert.strictEqual(filtered.length, 1)
    assert.strictEqual(filtered[0].id, 'kesavananda-bharati-1973')
  })

  it('filters judgments by criminal procedure subject', () => {
    const filtered = filterJudgments(ALL_JUDGMENTS, { subject: 'Criminal Procedure' })
    assert.ok(filtered.length >= 2, 'Should include Lalita Kumari and D.K. Basu')
    const ids = filtered.map((j) => j.id)
    assert.ok(ids.includes('lalita-kumari-2013'))
    assert.ok(ids.includes('dk-basu-1997'))
  })
})

describe('Unit Tests: MCQ Question Bank & Selection', () => {
  it('loads questions with valid fields and options', () => {
    assert.ok(ALL_QUESTIONS.length > 0, 'Questions bank must not be empty')
    for (const q of ALL_QUESTIONS) {
      assert.ok(q.id, 'Question must have id')
      assert.ok(q.question, 'Question must have text')
      assert.ok(Array.isArray(q.options), 'Options must be an array')
      assert.strictEqual(q.options.length, 4, `Question ${q.id} must have 4 options`)
      assert.ok(
        q.correctIndex >= 0 && q.correctIndex < 4,
        `Question ${q.id} correctIndex must be 0..3 (got ${q.correctIndex})`
      )
      assert.ok(q.explanation, `Question ${q.id} must have explanation`)
    }
  })

  it('filters questions by subject slug', () => {
    const constitutionQs = ALL_QUESTIONS.filter((q) => q.subjectSlug === 'constitution')
    assert.ok(constitutionQs.length > 0, 'Constitution questions should exist')
    for (const q of constitutionQs) {
      assert.strictEqual(q.subjectSlug, 'constitution')
    }
  })

  it('calculates score correctly given simulated answers', () => {
    const sample = ALL_QUESTIONS.slice(0, 5)
    // Simulate all correct
    const userAnswers: Record<string, number> = {}
    for (const q of sample) {
      userAnswers[q.id] = q.correctIndex
    }

    let correctCount = 0
    for (const q of sample) {
      if (userAnswers[q.id] === q.correctIndex) {
        correctCount++
      }
    }
    const scorePct = Math.round((correctCount / sample.length) * 100)
    assert.strictEqual(correctCount, 5)
    assert.strictEqual(scorePct, 100)

    // Simulate 2 wrong
    userAnswers[sample[0].id] = (sample[0].correctIndex + 1) % 4
    userAnswers[sample[1].id] = (sample[1].correctIndex + 1) % 4

    let retestCount = 0
    for (const q of sample) {
      if (userAnswers[q.id] === q.correctIndex) {
        retestCount++
      }
    }
    assert.strictEqual(retestCount, 3)
    assert.strictEqual(Math.round((retestCount / sample.length) * 100), 60)
  })
})

describe('Unit Tests: Progress & Local Storage Simulation', () => {
  // In-memory mock storage
  class MockLocalStorage {
    private store: Record<string, string> = {}
    getItem(key: string): string | null {
      return this.store[key] ?? null
    }
    setItem(key: string, val: string): void {
      this.store[key] = val
    }
    removeItem(key: string): void {
      delete this.store[key]
    }
    clear(): void {
      this.store = {}
    }
  }

  it('writes and reads topic progress records', () => {
    const storage = new MockLocalStorage()
    const KEY = 'cplaw.progress.v1'
    const record = [{ subjectSlug: 'constitution', topicId: 'art-21', completedAt: new Date().toISOString() }]
    storage.setItem(KEY, JSON.stringify(record))

    const readBack = JSON.parse(storage.getItem(KEY) || '[]')
    assert.strictEqual(readBack.length, 1)
    assert.strictEqual(readBack[0].subjectSlug, 'constitution')
    assert.strictEqual(readBack[0].topicId, 'art-21')
  })

  it('writes and recovers exam session snapshot', () => {
    const storage = new MockLocalStorage()
    const EXAM_KEY = 'cplaw.exam.v1'
    const examSnapshot = {
      questions: ALL_QUESTIONS.slice(0, 3).map((q) => q.id),
      answers: { [ALL_QUESTIONS[0].id]: 1 },
      marked: [ALL_QUESTIONS[1].id],
      remainingSeconds: 7200,
      totalSeconds: 7200,
      timestamp: Date.now(),
      examTitle: 'AIBE Full Mock',
    }
    storage.setItem(EXAM_KEY, JSON.stringify(examSnapshot))

    const recovered = JSON.parse(storage.getItem(EXAM_KEY) || '{}')
    assert.strictEqual(recovered.examTitle, 'AIBE Full Mock')
    assert.strictEqual(recovered.questions.length, 3)
    assert.strictEqual(recovered.answers[ALL_QUESTIONS[0].id], 1)
    assert.strictEqual(recovered.remainingSeconds, 7200)
  })
})

describe('Unit Tests: 3 Sanhita Mappers (BNS, BNSS, BSA)', () => {
  it('contains dedicated tools for BNS, BNSS, and BSA in TOOLS catalog under bare-acts', () => {
    const bareActTools = TOOLS.filter((t) => t.category === 'bare-acts')
    assert.strictEqual(bareActTools.length, 3, 'Should have exactly 3 Sanhita mapper tools')

    const bnsTool = bareActTools.find((t) => t.slug === 'bns-ipc-mapper')
    assert.ok(bnsTool, 'BNS mapper tool must exist')
    assert.strictEqual(bnsTool.category, 'bare-acts')

    const bnssTool = bareActTools.find((t) => t.slug === 'bnss-crpc-mapper')
    assert.ok(bnssTool, 'BNSS mapper tool must exist')
    assert.strictEqual(bnssTool.category, 'bare-acts')

    const bsaTool = bareActTools.find((t) => t.slug === 'bsa-iea-mapper')
    assert.ok(bsaTool, 'BSA mapper tool must exist')
    assert.strictEqual(bsaTool.category, 'bare-acts')
  })

  it('provides rich section mappings for all three criminal law acts', () => {
    const bnsMappings = SECTION_MAPPINGS.filter((m) => m.actType === 'bns-ipc')
    const bnssMappings = SECTION_MAPPINGS.filter((m) => m.actType === 'bnss-crpc')
    const bsaMappings = SECTION_MAPPINGS.filter((m) => m.actType === 'bsa-iea')

    assert.strictEqual(bnsMappings.length, 358, 'BNS mappings must cover all 358 statutory sections')
    assert.strictEqual(bnssMappings.length, 531, 'BNSS mappings must cover all 531 statutory sections')
    assert.strictEqual(bsaMappings.length, 170, 'BSA mappings must cover all 170 statutory sections')
    assert.strictEqual(SECTION_MAPPINGS.length, 1059, 'Total concordance mappings must equal exactly 1,059 provisions')

    for (const m of SECTION_MAPPINGS) {
      assert.ok(m.id, 'Mapping must have id')
      assert.ok(m.newAct, 'Mapping must have newAct')
      assert.ok(m.newSection, 'Mapping must have newSection')
      assert.ok(m.oldSection, 'Mapping must have oldSection')
      assert.ok(m.keyChanges, 'Mapping must have keyChanges')
    }
  })
})

