import { CheckCircle } from 'lucide-react';

export default function TarefaCard({ tarefa, onConcluir }) {
  return (
    <div
      className={`p-4 rounded-md border ${
        tarefa.concluida
          ? 'bg-green-50 border-green-300 text-green-800'
          : 'bg-gray-50 border-gray-300'
      }`}
    >
      <div className="flex justify-between">
        <div>
          <p className="font-semibold">{tarefa.descricao}</p>
          <p className="text-sm text-gray-600">Responsável: {tarefa.responsavel}</p>
          <p className="text-xs text-gray-400">Criada em: {tarefa.data}</p>
        </div>
        {!tarefa.concluida ? (
          <button
            onClick={() => onConcluir(tarefa.id)}
            className="text-sm text-green-700 hover:text-green-900 flex items-center gap-1"
          >
            <CheckCircle size={18} /> Concluir
          </button>
        ) : (
          <span className="text-green-700 font-medium flex items-center gap-1">
            <CheckCircle size={18} /> Concluída
          </span>
        )}
      </div>
    </div>
  );
}
