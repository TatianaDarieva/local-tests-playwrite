const { test, expect } = require('@playwright/test');

test.describe('Authentication & Authorization', () => {
  test('Sign in with existing credentials', async ({page}) => {
    await page.goto('https://coding.pasv.us/user/login')

    // await page.pause()

    await page.locator('#normal_login_email').fill('tatianadarieva@gmail.com')
    await page.locator('#normal_login_password').fill('1afhivfr13F')
    await page.locator('button[type="submit"]').click()

    await expect(page.locator('.ant-avatar-square')).toBeVisible()
  })
  test('Sign in with not existing credentials', async ({page}) => {
    await page.goto('https://coding.pasv.us/user/login')

    // await page.pause()

    await page.locator('#normal_login_email').fill('tatianadarieva@gmail.com')
    await page.locator('#normal_login_password').fill('cucumber')
    await page.locator('button[type="submit"]').click()

    const toast = page.locator('.ant-notification-notice-message')
    await expect(toast).toBeVisible()
    await expect(toast).toHaveText('User login. Fail')
  })
})