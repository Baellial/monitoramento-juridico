import { useState } from 'react';
import useTarefas from '../hooks/useTarefas';
import TarefaCard from '../components/TarefaCard';
import { toast } from 'react-toastify';

export default function Dashboard({ usuario }) {
  const { tarefas, adicionarTarefa, concluirTarefa } = useTarefas();
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [responsavel, setResponsavel] = useState('');
  const [prioridade, setPrioridade] = useState('média');
  const [prazo, setPrazo] = useState('');
  const [arquivo, setArquivo] = useState(null);

  const handleAdd = () => {
    if (!titulo || !descricao || !responsavel || !prazo) {
      toast.error('Preencha todos os campos obrigatórios.');
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      adicionarTarefa(
        titulo,
        descricao,
        responsavel,
        prioridade,
        prazo,
        'pendente',
        usuario,
        reader.result
      );
      setTitulo('');
      setDescricao('');
      setResponsavel('');
      setPrazo('');
      setArquivo(null);
    };
    if (arquivo) {
      reader.readAsDataURL(arquivo);
    } else {
      adicionarTarefa(
        titulo,
        descricao,
        responsavel,
        prioridade,
        prazo,
        'pendente',
        usuario,
        null
      );
      setTitulo('');
      setDescricao('');
      setResponsavel('');
      setPrazo('');
    }
  };

  return (
    <section className="space-y-4">
      <div className="bg-white shadow rounded p-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Nova Tarefa</h2>
        <input
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Título da tarefa"
          className="w-full border p-2 mb-2 rounded"
        />
        <textarea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Descrição da tarefa"
          className="w-full border p-2 mb-2 rounded"
        />
        <input
          value={responsavel}
          onChange={(e) => setResponsavel(e.target.value)}
          placeholder="Responsável pela tarefa"
          className="w-full border p-2 mb-2 rounded"
        />
        <label className="block text-sm font-medium mb-1">Prioridade:</label>
        <select
          value={prioridade}
          onChange={(e) => setPrioridade(e.target.value)}
          className="w-full border p-2 mb-2 rounded"
        >
          <option value="baixa">Baixa</option>
          <option value="média">Média</option>
          <option value="alta">Alta</option>
        </select>
        <label className="block text-sm font-medium mb-1">Prazo:</label>
        <input
          type="date"
          value={prazo}
          onChange={(e) => setPrazo(e.target.value)}
          className="w-full border p-2 mb-2 rounded"
        />
        <label className="block text-sm font-medium mb-1">Anexo:</label>
        <input
          type="file"
          onChange={(e) => setArquivo(e.target.files[0])}
          className="w-full mb-4"
        />
        <button
          onClick={handleAdd}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
        >
          Adicionar
        </button>
      </div>

      <div className="space-y-3">
        {tarefas.map((t) => (
          <TarefaCard key={t.id} tarefa={t} onConcluir={concluirTarefa} usuario={usuario} />
        ))}
      </div>
    </section>
  );
}
