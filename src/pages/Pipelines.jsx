export default function Pipelines() {
  const pipelines = [
    { nome: 'Build Principal', status: '✅ Sucesso', tempo: '5m 12s', atualizado: 'há 2h' },
    { nome: 'Testes Automatizados', status: '⚠️ Falha', tempo: '1m 33s', atualizado: 'há 10m' }
  ];

  return (
    <section className="bg-white shadow rounded-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Pipelines CI/CD</h2>
      <ul className="space-y-4">
        {pipelines.map((p, i) => (
          <li key={i} className="p-4 border rounded-md bg-gray-50">
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold text-gray-800">{p.nome}</h3>
                <p className="text-sm text-gray-600">Última atualização: {p.atualizado}</p>
              </div>
              <div className="text-right">
                <p className="text-sm">Status: {p.status}</p>
                <p className="text-xs text-gray-400">Tempo: {p.tempo}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
