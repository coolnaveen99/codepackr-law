import { test, expect } from '@playwright/test'

const criticalRoutes = ['/', '/subjects', '/tool/research-workbench', '/tool/citation-verifier', '/tool/judgment-analyzer', '/tool/judgment-compare', '/tool/case-prep', '/tool/legal-draft-studio', '/tool/filing-checklists', '/tool/court-forum-directory', '/tool/research-bundle', '/tool/neutral-analysis', '/tool/privacy-controls']

test.describe('production route smoke', () => {
  for (const route of criticalRoutes) {
    test(`loads ${route}`, async ({ page }) => {
      const response = await page.goto(route, { waitUntil: 'domcontentloaded' })
      expect(response?.ok()).toBeTruthy()
      await expect(page.locator('body')).toContainText('Codepackr Law')
    })
  }
})

test('SPA navigation survives a direct tool URL and back navigation', async ({ page }) => {
  await page.goto('/tool/research-workbench', { waitUntil: 'domcontentloaded' })
  await expect(page.locator('body')).toContainText('Codepackr Law')
  await page.goBack()
  await expect(page).toHaveURL(/\\/$/)
})
