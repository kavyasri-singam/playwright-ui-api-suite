import { test, expect } from '@playwright/test';

test('Fullstack UI + API integration test', async ({ page, request }) => {
  // Go to login page
  await page.goto('https://automationexercise.com/login');

  // Fill login form
  await page.fill('input[name="email"]', 'kadambari102000@gmail.com');
  await page.fill('input[name="password"]', 'Kavya@123');
  await page.click('button[data-qa="login-button"]');

  // Wait for and check UI text
  await page.waitForSelector('a:has-text("Logged in as kavya sri")');
  const uiUsername = await page.textContent('a:has-text("Logged in as kavya sri")');
  console.log('Username from UI:', uiUsername);
  expect(uiUsername).toContain('kavya sri');

  // API validation after login
  const apiResponse = await request.post('https://automationexercise.com/api/verifyLogin', {
    form: {
      email: 'kadambari102000@gmail.com',
      password: 'Kavya@123'
    }
  });

  const apiResponseBody = await apiResponse.text();
  console.log('API Response:', apiResponseBody);

  expect(apiResponse.status()).toBe(200);
  expect(apiResponseBody).toContain('User exists');
});
