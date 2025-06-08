import { useState } from 'react';
import { registrarLog } from '../utils/log';
import { toast } from 'react-toastify';

export default function useTarefas() {
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa(titulo, descricao, responsavel, prioridade, prazo, status, criador, anexo) {
    const nova = {
      id: Date.now(),
      titulo,
      descricao,
      responsavel,
      prioridade,
      prazo,
      status,
      criador,
      data: new Date().toLocaleString(),
      concluida: false,
      anexo,
    };
    setTarefas((prev) => [nova, ...prev]);
    registrarLog(criador, `adicionou a tarefa "${titulo}"`);
    toast.success('Tarefa adicionada com sucesso!');
  }

  function concluirTarefa(id, usuario) {
    setTarefas((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          registrarLog(usuario, `concluiu a tarefa "${t.titulo}"`);
          toast.success('Tarefa concluída!');
          return { ...t, concluida: true };
        }
        return t;
      })
    );
  }

  function atualizarStatus(id, novoStatus) {
    setTarefas((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: novoStatus } : t))
    );
  }

  return { tarefas, adicionarTarefa, concluirTarefa, atualizarStatus };
}
