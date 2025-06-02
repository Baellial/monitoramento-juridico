import { render, screen } from '@testing-library/react';
import App from '../pages/App';
import { vi } from 'vitest';

vi.mock('chart.js/auto', () => ({}));

describe('Renderização inicial', () => {
  it('exibe campo de login quando usuário não está logado', () => {
    localStorage.clear();
    render(<App />);
    expect(screen.getByText(/acesso restrito/i)).toBeDefined();
  });
});