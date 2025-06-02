import { useState } from 'react';
import { PlusCircle, Filter, CheckCircle } from 'lucide-react';
import useTarefas from '../hooks/useTarefas';
import TarefaCard from '../components/TarefaCard';

export default function Dashboard({ usuario }) {
  const [descricao, setDescricao] = useState('');
  const [responsavel, setResponsavel] = useState('');
  const [filtro, setFiltro] = useState('todas');
  const [erro, setErro] = useState('');
  const { tarefas, adicionarTarefa, concluirTarefa } = useTarefas();

  const tarefasFiltradas = tarefas.filter((t) => {
    if (filtro === 'todas') return true;
    if (filtro === 'concluidas') return t.concluida;
    return !t.concluida;
  });

  const handleAdicionar = () => {
    if (!descricao.trim() || !responsavel.trim()) {
      setErro('Preencha todos os campos.');
      return;
    }
    adicionarTarefa(descricao, responsavel, usuario);
    setDescricao('');
    setResponsavel('');
    setErro('');
  };

  return (
    <>
      <section className="bg-white shadow rounded-md p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <PlusCircle className="text-indigo-600" size={20} /> Nova Tarefa
        </h2>

        <input
          className="w-full border border-gray-300 p-2 rounded-md mb-4"
          type="text"
          placeholder="Descrição da tarefa"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <input
          className="w-full border border-gray-300 p-2 rounded-md mb-4"
          type="text"
          placeholder="Responsável pela tarefa"
          value={responsavel}
          onChange={(e) => setResponsavel(e.target.value)}
        />

        {erro && <p className="text-red-600 text-sm mb-4">{erro}</p>}

        <button
          onClick={handleAdicionar}
          className="bg-indigo-700 hover:bg-indigo-800 text-white px-4 py-2 rounded-md"
        >
          Adicionar Tarefa
        </button>
      </section>

      <section>
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold text-gray-800">Tarefas</h2>
          <div className="flex items-center gap-2">
            <Filter size={16} className="text-gray-600" />
            <select
              className="border border-gray-300 rounded px-2 py-1 text-sm"
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
            >
              <option value="todas">Todas</option>
              <option value="pendentes">Pendentes</option>
              <option value="concluidas">Concluídas</option>
            </select>
          </div>
        </div>

        <div className="space-y-3">
          {tarefasFiltradas.length === 0 ? (
            <p className="text-gray-500">Nenhuma tarefa.</p>
          ) : (
            tarefasFiltradas.map((t) => (
              <TarefaCard key={t.id} tarefa={t} onConcluir={concluirTarefa} />
            ))
          )}
        </div>
      </section>
    </>
  );
}
