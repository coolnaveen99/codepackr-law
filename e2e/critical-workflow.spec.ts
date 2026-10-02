import { test, expect } from '@playwright/test'

test.describe('critical legal workflow', () => {
  test('research question persists locally across reload', async ({ page }) => {
    await page.goto('/tool/research-workbench', { waitUntil: 'domcontentloaded' })
    await page.evaluate(() => {
      localStorage.removeItem('cp-law:research:v1')
      sessionStorage.clear()
    })
    await page.reload()

    const question = page.getByLabel('Research question')
    const value = 'Whether a limitation issue should be examined before drafting a civil claim?'
    await question.fill(value)

    await expect.poll(async () =>
      page.evaluate(() => localStorage.getItem('cp-law:research:v1') || '')
    ).toContain('Whether a limitation issue')

    await page.reload()
    await expect(page.getByLabel('Research question')).toHaveValue(value)
    await expect(page.getByText(/Last saved locally:/)).toBeVisible()
  })

  test('Citation Verifier consumes a privacy-conscious citation handoff', async ({ page }) => {
    const citation = 'Maneka Gandhi v. Union of India, (1978) 1 SCC 248'
    await page.goto('/tool/citation-verifier?q=' + encodeURIComponent(citation), {
      waitUntil: 'domcontentloaded',
    })

    await expect(page.getByRole('heading', { name: 'Verify and review citations' })).toBeVisible()
    await expect(page.locator('textarea')).toHaveValue(new RegExp('Maneka Gandhi'))
    await expect(page.getByRole('button', { name: /Return to Workbench/i })).toBeVisible()

    const url = new URL(page.url())
    expect(url.pathname).toBe('/tool/citation-verifier')
    expect(url.searchParams.get('q')).toBe(citation)
  })

  test('critical workflow destinations load as production deep links', async ({ page }) => {
    for (const route of [
      '/tool/judgment-analyzer',
      '/tool/case-prep',
      '/tool/legal-draft-studio',
      '/tool/filing-checklists',
      '/tool/research-bundle',
      '/tool/neutral-analysis',
    ]) {
      const response = await page.goto(route, { waitUntil: 'domcontentloaded' })
      expect(response?.ok(), route).toBeTruthy()
      await expect(page.locator('body')).toContainText('Codepackr Law')
    }
  })
})
