import { test, expect } from '@playwright/test'

test.describe('critical legal workflow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/tool/research-workbench', { waitUntil: 'domcontentloaded' })
    await page.evaluate(() => {
      localStorage.clear()
      sessionStorage.clear()
      window.location.reload()
    })
    await expect(page.getByRole('heading', { name: 'Legal Research Workbench' })).toBeVisible()
  })

  test('research question persists locally across reload', async ({ page }) => {
    const question = page.getByLabel('Research question')
    await question.fill('Whether a limitation issue should be examined before drafting a civil claim?')
    await page.waitForTimeout(400)

    await expect.poll(async () =>
      page.evaluate(() => localStorage.getItem('cp-law:research:v1') || '')
    ).toContain('Whether a limitation issue')

    await page.reload()
    await expect(question).toHaveValue('Whether a limitation issue should be examined before drafting a civil claim?')
    await expect(page.getByText(/Last saved locally:/)).toBeVisible()
  })

  test('citation verifier accepts a privacy-conscious handoff and returns to workbench', async ({ page }) => {
    await page.goto('/tool/citation-verifier?q=' + encodeURIComponent('Maneka Gandhi v. Union of India, (1978) 1 SCC 248'), {
      waitUntil: 'domcontentloaded',
    })

    await expect(page.getByRole('heading', { name: 'Verify and review citations' })).toBeVisible()
    await expect(page.locator('textarea')).toContainText('Maneka Gandhi')
    await expect(page.getByRole('button', { name: /Return to Workbench/i })).toBeVisible()
    await page.getByRole('button', { name: /Return to Workbench/i }).click()
    await expect(page).toHaveURL(/\/tool\/research-workbench$/)
    await expect(page.getByRole('heading', { name: 'Legal Research Workbench' })).toBeVisible()
  })

  test('critical workflow routes load without server-side form submission', async ({ page }) => {
    for (const route of [
      '/tool/judgment-analyzer',
      '/tool/case-prep',
      '/tool/legal-draft-studio',
      '/tool/filing-checklists',
    ]) {
      const response = await page.goto(route, { waitUntil: 'domcontentloaded' })
      expect(response?.ok(), route).toBeTruthy()
      await expect(page.locator('body')).toContainText('Codepackr Law')
    }
  })

  test('critical handoff storage remains browser-local', async ({ page }) => {
    await page.goto('/tool/research-workbench', { waitUntil: 'domcontentloaded' })
    await page.evaluate(() => {
      sessionStorage.setItem('cp-law:citation-handoff:v1', 'Sample Case, (2024) 1 SCC 1')
    })
    await page.goto('/tool/citation-verifier', { waitUntil: 'domcontentloaded' })

    await expect(page.locator('textarea')).toContainText('Sample Case')
    const storedAfterRead = await page.evaluate(() =>
      sessionStorage.getItem('cp-law:citation-handoff:v1')
    )
    expect(storedAfterRead).toBeNull()
  })
})
