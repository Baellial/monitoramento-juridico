import { test, expect } from '@playwright/test';

test('adiciona tarefa e exibe no dashboard', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // Login
  await page.fill('input[name="nome"]', 'admin');
  await page.fill('input[name="senha"]', '1234');
  await page.click('text=Entrar');

  // Preenche formulário
  await page.fill('input[placeholder="Título da tarefa"]', 'Teste Kanban');
  await page.fill('textarea[placeholder="Descrição da tarefa"]', 'Descrição da tarefa kanban');
  await page.fill('input[placeholder="Responsável pela tarefa"]', 'João');
  await page.fill('input[type="date"]', '2025-06-10');
  await page.click('text=Adicionar');

  // Verifica no dashboard
  await expect(page.locator('text=Teste Kanban')).toBeVisible();

  // Vai para aba Kanban e verifica
  await page.click('text=Kanban');
  await expect(page.locator('.kanban-column')).toContainText('Teste Kanban');
});