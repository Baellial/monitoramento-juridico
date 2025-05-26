// tests/e2e/tarefa.e2e.spec.js
import { test, expect } from '@playwright/test';

test('adiciona tarefa com sucesso', async ({ page }) => {
  await page.goto('file://' + process.cwd() + '/index.html');
  await page.fill('#descricao', 'Nova tarefa');
  await page.fill('#responsavel', 'João');
  await page.click('text=Adicionar Tarefa');
  await expect(page.locator('.tarefa')).toContainText('Nova tarefa');
});
