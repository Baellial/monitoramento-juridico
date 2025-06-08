import { render, screen, fireEvent } from '@testing-library/react';
import Dashboard from '../pages/Dashboard';
import '@testing-library/jest-dom';

vi.mock('../hooks/useTarefas', () => () => ({
  tarefas: [],
  adicionarTarefa: vi.fn(),
  concluirTarefa: vi.fn()
}));

test('renderiza inputs de nova tarefa', () => {
  render(<Dashboard usuario="admin" />);

  expect(screen.getByPlaceholderText(/título da tarefa/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/descrição da tarefa/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/responsável pela tarefa/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/prioridade/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/prazo/i)).toBeInTheDocument();
});
