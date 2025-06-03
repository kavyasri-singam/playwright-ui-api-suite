import { test, expect } from '@playwright/test';

test('GET users from reqres.in', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users?page=2');
  expect(response.ok()).toBeTruthy();

  const data = await response.json();
  console.log('Users data:', data);

  // Check total users count is greater than 0
  expect(data.data.length).toBeGreaterThan(0);

  // Check first user's id is 7 as per reqres.in docs
  expect(data.data[0].id).toBe(7);
});
