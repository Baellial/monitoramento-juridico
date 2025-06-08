// Exibe logs filtrados por usuário logado
// Mostra ação + data formatada
// Usa localStorage como backend temporário

import { useEffect, useState } from 'react';

export default function Historico({ usuario }) {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const salvos = localStorage.getItem('logs');
    if (salvos) {
      setLogs(JSON.parse(salvos));
    }
  }, []);

  const logsFiltrados = logs.filter(log => log.usuario === usuario);

  return (
    <section className="bg-white shadow rounded-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Histórico de Ações</h2>
      <ul className="text-sm space-y-2 max-h-[400px] overflow-auto">
        {logsFiltrados.length === 0 ? (
          <p className="text-gray-500">Nenhuma ação registrada para você.</p>
        ) : (
          logsFiltrados.map((l, i) => (
            <li key={i} className="border-b pb-2">
              <span className="font-medium text-indigo-700">{l.usuario}</span> — {l.acao} em {l.timestamp}
            </li>
          ))
        )}
      </ul>
    </section>
  );
}
