import { useState } from 'react';

export default function useTarefas() {
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa(descricao, responsavel, criador) {
    const nova = {
      id: Date.now(),
      descricao,
      responsavel,
      criador,
      data: new Date().toLocaleString(),
      concluida: false,
    };
    setTarefas((prev) => [nova, ...prev]);
  }

  function concluirTarefa(id) {
    setTarefas((prev) =>
      prev.map((t) => (t.id === id ? { ...t, concluida: true } : t))
    );
  }

  return { tarefas, adicionarTarefa, concluirTarefa };
}
