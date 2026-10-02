import { test, expect } from '@playwright/test'

const toolRoutes = [
  'aibe-mcq','research-workbench','citation-verifier','judgment-analyzer','judgment-compare',
  'case-prep','filing-checklists','legal-calculators','limitation-calculator','transition-centre',
  'case-brief-builder','study-planner','practice-dashboard','cause-list-organizer','primary-source-finder',
  'privacy-controls','global-search','bns-ipc-mapper','bnss-crpc-mapper','bsa-iea-mapper',
  'section-flashcards','exam-timer','legal-maxims','landmark-cases','document-compare',
  'legal-draft-studio','court-forum-directory','research-bundle','neutral-analysis','usage-metrics',
]

const subjectRoutes = [
  'constitution','bns','bnss','bsa','cpc','contract-law','family','tort','company',
  'ipr','taxation','labour','admin','pil','ethics',
]

test.describe('production route and subject smoke matrix', () => {
  test('core library routes load', async ({ page }) => {
    for (const route of ['/', '/subjects', '/case-law', '/knowledge', '/contact']) {
      const response = await page.goto(route, { waitUntil: 'domcontentloaded' })
      expect(response?.ok(), route).toBeTruthy()
      await expect(page.locator('body')).toContainText('Codepackr Law')
    }
  })

  for (const slug of toolRoutes) {
    test('tool route loads: ' + slug, async ({ page }) => {
      const response = await page.goto('/tool/' + slug, { waitUntil: 'domcontentloaded' })
      expect(response?.ok(), slug).toBeTruthy()
      await expect(page.locator('body')).toContainText('Codepackr Law')
      await expect(page).toHaveURL(new RegExp('/tool/' + slug + '$'))
    })
  }

  for (const slug of subjectRoutes) {
    test('subject route loads: ' + slug, async ({ page }) => {
      const response = await page.goto('/subjects/' + slug, { waitUntil: 'domcontentloaded' })
      expect(response?.ok(), slug).toBeTruthy()
      await expect(page.locator('body')).toContainText('Codepackr Law')
      await expect(page).toHaveURL(new RegExp('/subjects/' + slug + '$'))
    })
  }

  test('subject navigation remains a valid deep link', async ({ page }) => {
    await page.goto('/subjects', { waitUntil: 'domcontentloaded' })
    await expect(page.locator('body')).toContainText('Subjects')
    await page.goto('/subjects/constitution', { waitUntil: 'domcontentloaded' })
    await expect(page).toHaveURL(/\/subjects\/constitution$/)
    await expect(page.locator('body')).toContainText('Constitution')
  })
})
