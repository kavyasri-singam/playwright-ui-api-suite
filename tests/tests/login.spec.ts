import { test, expect } from '@playwright/test';

test('UI Login Test - Automation Exercise', async ({ page }) => {
  // Step 1: Go to the homepage
  await page.goto('https://automationexercise.com');

  // Step 2: Click on 'Signup / Login'
  await page.click('a[href="/login"]');

  // Step 3: Fill in email and password
  await page.fill('input[data-qa="login-email"]', 'kadambari102000@gmail.com');
  await page.fill('input[data-qa="login-password"]', 'Kavya@123');

  // Step 4: Click Login button
  await page.click('button[data-qa="login-button"]');

  // Step 5: Wait for the "Logged in as kavya sri" text to appear
  await page.waitForSelector('a:has-text("Logged in as kavya sri")', { timeout: 10000 });

  // Step 6: Capture and check the text
  const loggedInText = await page.textContent('a:has-text("Logged in as kavya sri")');
  console.log('✅ Logged in text found:', loggedInText);

  // Step 7: Assert the text contains your name
  expect(loggedInText).toContain('kavya sri');
});
