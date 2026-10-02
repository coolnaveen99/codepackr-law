import { test, expect } from '@playwright/test'

test.describe('Chambers Record shell regression', () => {
  test('desktop sidebar navigation remains reachable and closes global search before routing', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' })

    await page.getByRole('button', { name: 'Open global search' }).click()
    await expect(page.getByRole('dialog', { name: 'Global search' })).toBeVisible()

    await page.getByRole('button', { name: 'Home', exact: true }).first().click()

    await expect(page.getByRole('dialog', { name: 'Global search' })).toBeHidden()
    await expect(page).toHaveURL(/\/$/)
  })



  test('desktop search closes from backdrop and Escape without changing route', async ({ page }) => {
    await page.goto('/subjects', { waitUntil: 'domcontentloaded' })

    await page.getByRole('button', { name: 'Open global search' }).click()
    await expect(page.getByRole('dialog', { name: 'Global search' })).toBeVisible()

    await page.keyboard.press('Escape')
    await expect(page.getByRole('dialog', { name: 'Global search' })).toBeHidden()
    await expect(page).toHaveURL(/\/subjects$/)

    await page.getByRole('button', { name: 'Open global search' }).click()
    await expect(page.getByRole('dialog', { name: 'Global search' })).toBeVisible()
    await page.getByRole('button', { name: 'Close global search' }).click()
    await expect(page.getByRole('dialog', { name: 'Global search' })).toBeHidden()
    await expect(page).toHaveURL(/\/subjects$/)
  })

  test('mobile navigation opened from search closes search first', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto('/', { waitUntil: 'domcontentloaded' })

    await page.getByRole('button', { name: 'Open global search' }).click()
    await expect(page.getByRole('dialog', { name: 'Global search' })).toBeVisible()

    await page.getByRole('button', { name: 'Open navigation' }).click()
    await expect(page.getByRole('dialog', { name: 'Global search' })).toBeHidden()
    await expect(page.getByRole('dialog', { name: 'CodePackr Law navigation' })).toBeVisible()
  })

  test('desktop sidebar collapse keeps content outside the navigation rail', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' })

    const sidebar = page.locator('.cp-law-sidebar')
    const mainContent = page.locator('main[data-ui-task] > :first-child')

    const expandedSidebar = await sidebar.boundingBox()
    const expandedContent = await mainContent.boundingBox()
    expect(expandedSidebar).not.toBeNull()
    expect(expandedContent).not.toBeNull()
    expect(expandedContent!.x).toBeGreaterThanOrEqual(expandedSidebar!.x + expandedSidebar!.width)

    await page.getByRole('button', { name: 'Collapse navigation' }).click()

    await expect(page.getByRole('button', { name: 'Expand navigation' })).toBeVisible()

    const collapsedSidebar = await sidebar.boundingBox()
    const collapsedContent = await mainContent.boundingBox()
    expect(collapsedSidebar).not.toBeNull()
    expect(collapsedContent).not.toBeNull()
    expect(collapsedContent!.x).toBeGreaterThanOrEqual(collapsedSidebar!.x + collapsedSidebar!.width)
  })

  test('mobile navigation opens as a viewport drawer and closes after navigation', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto('/', { waitUntil: 'domcontentloaded' })

    await expect(page.locator('.cp-law-sidebar')).toBeHidden()
    const menu = page.getByRole('button', { name: 'Open navigation' })
    await menu.click()

    const drawer = page.getByRole('dialog', { name: 'CodePackr Law navigation' })
    await expect(drawer).toBeVisible()

    await drawer.getByRole('button', { name: 'Learn', exact: true }).click()
    await expect(drawer).toBeHidden()
    await expect(page).toHaveURL(/\/subjects$/)

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
    expect(overflow).toBeLessThanOrEqual(1)
  })

  test('mobile menu and global search are mutually exclusive overlays', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto('/', { waitUntil: 'domcontentloaded' })

    await page.getByRole('button', { name: 'Open navigation' }).click()
    await expect(page.getByRole('dialog', { name: 'CodePackr Law navigation' })).toBeVisible()

    await page.keyboard.press('Control+K')
    await expect(page.getByRole('dialog', { name: 'Global search' })).toBeVisible()
    await expect(page.getByRole('dialog', { name: 'CodePackr Law navigation' })).toBeHidden()
  })
})
