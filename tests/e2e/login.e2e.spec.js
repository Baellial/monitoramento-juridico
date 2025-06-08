import { test, expect } from '@playwright/test';

test('faz login com sucesso e acessa dashboard', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.fill('input[name="nome"]', 'admin');
  await page.fill('input[name="senha"]', '1234');
  await page.click('text=Entrar');
  await expect(page.locator('text=Dashboard')).toBeVisible();
});
