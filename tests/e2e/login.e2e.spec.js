import { test, expect } from '@playwright/test';

test('login com credenciais válidas', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.fill('input[name="nome"]', 'admin');
  await page.fill('input[name="senha"]', '1234');
  await page.click('text=Entrar');
  await expect(page.locator('text=Dashboard')).toBeVisible();
});

test('falha ao logar com credenciais inválidas', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.fill('input[name="nome"]', 'teste');
  await page.fill('input[name="senha"]', 'errado');
  await page.click('text=Entrar');
  await expect(page.locator('text=Acesso Restrito')).toBeVisible();
});
