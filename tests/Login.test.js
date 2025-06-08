import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../pages/Login';
import '@testing-library/jest-dom';

test('renderiza formulário de login', () => {
  const mockLogin = vi.fn();
  render(<Login onLogin={mockLogin} />);

  expect(screen.getByLabelText(/usuário/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument();
});

test('exibe alerta se login inválido', () => {
  window.alert = vi.fn();
  const mockLogin = vi.fn();
  render(<Login onLogin={mockLogin} />);

  fireEvent.change(screen.getByLabelText(/usuário/i), { target: { value: 'teste' } });
  fireEvent.change(screen.getByLabelText(/senha/i), { target: { value: 'errado' } });
  fireEvent.click(screen.getByRole('button', { name: /entrar/i }));

  expect(window.alert).toHaveBeenCalledWith('Credenciais inválidas. Use admin/1234 para teste.');
});
