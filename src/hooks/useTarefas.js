import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { registrarLog } from '../utils/log';

function useTarefas() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    const salvas = localStorage.getItem('tarefas');
    if (salvas) setTarefas(JSON.parse(salvas));
  }, []);

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  const adicionarTarefa = (titulo, descricao, responsavel, prioridade, prazo, status, criador, anexo) => {
    const nova = {
      id: Date.now(),
      titulo,
      descricao,
      responsavel,
      prioridade,
      prazo,
      status,
      criador,
      anexo,
      concluida: false,
      data: new Date().toLocaleString()
    };
    setTarefas([nova, ...tarefas]);
    registrarLog(criador, `adicionou tarefa: ${titulo}`);
    toast.success('Tarefa adicionada');
  };

  const concluirTarefa = (id, usuario) => {
    setTarefas((tarefas) =>
      tarefas.map((t) =>
        t.id === id ? { ...t, concluida: true, status: 'concluída' } : t
      )
    );
    registrarLog(usuario, `concluiu tarefa ID: ${id}`);
    toast.info('Tarefa concluída');
  };

  return { tarefas, adicionarTarefa, concluirTarefa };
}

export default useTarefas;