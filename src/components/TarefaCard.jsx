export default function TarefaCard({ tarefa, onConcluir, usuario }) {
  return (
    <div className="tarefa-card">
      <div className="flex justify-between items-start">
        <div>
          <p className="font-semibold text-sm">{tarefa.titulo}</p>
          <p className="text-xs text-gray-600">Responsável: {tarefa.responsavel}</p>
          <p className="text-xs text-gray-600">Prioridade: {tarefa.prioridade}</p>
          <p className="text-xs text-gray-400">Prazo: {tarefa.prazo}</p>
          {tarefa.anexo && (
            <a
              href={tarefa.anexo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline text-xs mt-1 inline-block"
            >
              Ver Anexo
            </a>
          )}
        </div>
        {tarefa.criador === usuario && !tarefa.concluida && (
          <button
            onClick={() => onConcluir(tarefa.id, usuario)}
            className="text-green-600 text-xs hover:underline"
          >
            Concluir
          </button>
        )}
      </div>
      {tarefa.concluida && (
        <p className="text-green-600 text-xs mt-1">✅ Concluída</p>
      )}
    </div>
  );
}