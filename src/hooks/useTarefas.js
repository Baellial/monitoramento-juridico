import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useTarefas from '../../src/hooks/useTarefas';

describe('useTarefas hook', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('adiciona uma tarefa corretamente', () => {
    const { result } = renderHook(() => useTarefas());
    act(() => {
      result.current.adicionarTarefa(
        'Título Teste',
        'Descrição Teste',
        'Responsável',
        'alta',
        '2025-06-10',
        'pendente',
        'admin',
        null
      );
    });
    expect(result.current.tarefas.length).toBe(1);
    expect(result.current.tarefas[0].titulo).toBe('Título Teste');
  });

  it('conclui uma tarefa', () => {
    const { result } = renderHook(() => useTarefas());
    let id;
    act(() => {
      result.current.adicionarTarefa(
        'Tarefa para concluir',
        'Descrição',
        'Responsável',
        'média',
        '2025-06-11',
        'pendente',
        'admin',
        null
      );
      id = result.current.tarefas[0].id;
      result.current.concluirTarefa(id, 'admin');
    });
    expect(result.current.tarefas[0].concluida).toBe(true);
  });
});