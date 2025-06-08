import { CheckCircle } from 'lucide-react';

export default function TarefaCard({ tarefa, onConcluir, usuario }) {
  const ehResponsavel = tarefa.criador === usuario;

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
          <p className="font-semibold text-lg">{tarefa.titulo}</p>
          <p className="text-sm text-gray-600">{tarefa.descricao}</p>
          <p className="text-xs text-gray-400">
            Responsável: {tarefa.responsavel} | Prioridade: {tarefa.prioridade} | Prazo: {tarefa.prazo}
          </p>
          <p className="text-xs text-gray-400">Status: {tarefa.status}</p>
          {tarefa.anexo && (
            <p className="text-xs mt-1">
              📎 <a href={tarefa.anexo} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Visualizar anexo</a>
            </p>
          )}
        </div>
        {!tarefa.concluida && ehResponsavel ? (
          <button
            onClick={() => onConcluir(tarefa.id, usuario)}
            className="text-sm text-green-700 hover:text-green-900 flex items-center gap-1"
          >
            <CheckCircle size={18} /> Concluir
          </button>
        ) : (
          tarefa.concluida && (
            <span className="text-green-700 font-medium flex items-center gap-1">
              <CheckCircle size={18} /> Concluída
            </span>
          )
        )}
      </div>
    </div>
  );
}