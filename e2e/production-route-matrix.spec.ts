import { test, expect } from '@playwright/test'

const subjectSlugs = ['constitution','bnss','cpc','bns','bsa','family','contract','petition-formats','tort','adr','pil','ethics','labour','taxation','admin','company','environment','cyber','land','ipr']
const toolSlugs = ['aibe-mcq','research-workbench','citation-verifier','judgment-analyzer','judgment-compare','case-prep','filing-checklists','legal-calculators','limitation-calculator','transition-centre','case-brief-builder','study-planner','practice-dashboard','cause-list-organizer','primary-source-finder','privacy-controls','global-search','bns-ipc-mapper','bnss-crpc-mapper','bsa-iea-mapper','section-flashcards','exam-timer','legal-maxims','landmark-cases','case-law','knowledge','document-compare','legal-draft-studio','court-forum-directory','research-bundle','neutral-analysis','usage-metrics']

test.describe('PR-003 route and subject smoke matrix', () => {
  for (const slug of subjectSlugs) {
    test(`subject route loads: ${slug}`, async ({ page }) => {
      const response = await page.goto(`/subjects/${slug}`, { waitUntil: 'domcontentloaded' })
      expect(response?.ok()).toBeTruthy()
      await expect(page).toHaveURL(new RegExp(`/subjects/${slug}/?$`))
      await expect(page.locator('body')).toContainText('Codepackr Law')
      await expect(page.locator('body')).not.toContainText(/Page not found|404 Not Found/i)
    })
  }

  for (const slug of toolSlugs) {
    test(`tool route loads: ${slug}`, async ({ page }) => {
      const response = await page.goto(`/tool/${slug}`, { waitUntil: 'domcontentloaded' })
      expect(response?.ok()).toBeTruthy()
      await expect(page).toHaveURL(new RegExp(`/tool/${slug}/?$`))
      await expect(page.locator('body')).toContainText('Codepackr Law')
      await expect(page.locator('body')).not.toContainText(/Page not found|404 Not Found/i)
    })
  }

  test('representative subject navigation reaches a topic without breaking SPA routing', async ({ page }) => {
    await page.goto('/subjects/constitution', { waitUntil: 'domcontentloaded' })
    await expect(page.locator('body')).toContainText('Constitution')
    const topicLink = page.locator('a[href^="/subjects/constitution/"]').first()
    await expect(topicLink).toBeVisible()
    const href = await topicLink.getAttribute('href')
    expect(href).toMatch(/^\/subjects\/constitution\//)
    await topicLink.click()
    await expect(page).toHaveURL(/\/subjects\/constitution\/[^/]+$/)
    await expect(page.locator('body')).toContainText('Codepackr Law')
  })

  test('direct deep links preserve SPA entry on reload', async ({ page }) => {
    await page.goto('/subjects/bns', { waitUntil: 'domcontentloaded' })
    await page.reload({ waitUntil: 'domcontentloaded' })
    await expect(page.locator('body')).toContainText('Codepackr Law')
    await expect(page).toHaveURL(/\/subjects\/bns\/?$/)
  })
})
