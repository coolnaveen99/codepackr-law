import { test, expect } from '@playwright/test'

test.describe('PR-002 critical legal workflow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/tool/research-workbench', { waitUntil: 'domcontentloaded' })
    await page.evaluate(() => localStorage.clear())
    await page.reload({ waitUntil: 'domcontentloaded' })
  })

  test('research session persists and survives reload', async ({ page }) => {
    const question = page.getByLabel('Research question')
    await question.fill('What is the legal effect of a procedural safeguard?')
    await page.getByLabel('Jurisdiction').fill('India — Supreme Court')
    await page.reload({ waitUntil: 'domcontentloaded' })
    await expect(page.getByLabel('Research question')).toHaveValue('What is the legal effect of a procedural safeguard?')
    await expect(page.getByLabel('Jurisdiction')).toHaveValue('India — Supreme Court')
    await expect(page.getByText(/Last saved locally:/)).toBeVisible()
  })

  test('citation verifier accepts a research handoff and returns verification state', async ({ page }) => {
    await page.evaluate(() => {
      sessionStorage.setItem('cp-law:citation-handoff:v1', '(1973) 4 SCC 225')
    })
    await page.goto('/tool/citation-verifier', { waitUntil: 'domcontentloaded' })
    await expect(page.getByText(/Workbench handoff loaded/)).toBeVisible()
    await expect(page.locator('textarea')).toHaveValue('(1973) 4 SCC 225')
    await page.getByRole('button', { name: /Return to Workbench/i }).click()
    await expect(page).toHaveURL(/\/tool\/research-workbench/)
    await expect(page.getByText(/Updated 1 of 1 returned citation status/)).toBeVisible()
  })

  test('judgment analyzer loads a research handoff and structures supplied text', async ({ page }) => {
    await page.evaluate(() => {
      sessionStorage.setItem('cp-law:judgment-handoff:v1', JSON.stringify({
        source: 'research-workbench',
        title: 'Sample authority',
        caseName: 'Sample authority',
        citation: '(2024) 1 SCC 1',
        text: 'FACTS\nThe parties filed a petition.\nISSUES\nWhether the procedure was followed.\nREASONING\nThe court considered the record.\nFINAL ORDER\nThe petition was disposed of.'
      }))
    })
    await page.goto('/tool/judgment-analyzer', { waitUntil: 'domcontentloaded' })
    await expect(page.getByText(/Handed off from Legal Research Workbench/)).toBeVisible()
    await expect(page.getByLabel('Judgment text')).toContainText('FACTS')
    await expect(page.getByRole('button', { name: /Load sample/i })).toBeVisible()
  })

  test('case preparation organizes matter data and chronology', async ({ page }) => {
    await page.goto('/tool/case-prep', { waitUntil: 'domcontentloaded' })
    await page.getByLabel('Matter title').fill('E2E Matter')
    await page.getByLabel('Parties').fill('A v B')
    await page.getByRole('button', { name: 'Chronology', exact: true }).click()
    await page.getByLabel('Event').fill('Filing')
    await page.getByLabel('Date source').fill('Court record')
    await expect(page.getByText(/incomplete source record/i)).toBeVisible()
    await page.getByRole('button', { name: 'Issues', exact: true }).click()
    await page.getByLabel('Issue').fill('Procedural compliance')
    await expect(page.getByLabel('Issue')).toHaveValue('Procedural compliance')
  })

  test('draft studio and filing checklist retain browser-local workflow state', async ({ page }) => {
    await page.goto('/tool/legal-draft-studio', { waitUntil: 'domcontentloaded' })
    await expect(page.getByRole('heading', { name: /Legal Draft Studio/i })).toBeVisible()
    await page.getByRole('button', { name: /Case-file checklists/i }).click()
    await expect(page.getByRole('heading', { name: /Legal Draft Studio/i })).toBeVisible()
    await page.goto('/tool/filing-checklists', { waitUntil: 'domcontentloaded' })
    await page.getByLabel('Court / forum addition').fill('E2E court note')
    await page.getByLabel('State addition').fill('E2E state note')
    await page.reload({ waitUntil: 'domcontentloaded' })
    await expect(page.getByLabel('Court / forum addition')).toHaveValue('E2E court note')
    await expect(page.getByLabel('State addition')).toHaveValue('E2E state note')
    const doneButton = page.getByRole('button', { name: /^done /i }).first()
    await doneButton.click()
    await page.reload({ waitUntil: 'domcontentloaded' })
    await expect(page.getByRole('button', { name: /^done /i }).first()).toHaveClass(/bg-\[#8B1E3F\]/)
  })
})
