import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { FileBarChart2 } from 'lucide-react';
import { exportarPDF, exportarExcel } from '../utils/exportUtils';
import useTarefas from '../hooks/useTarefas';

export default function Relatorios() {
  const { tarefas } = useTarefas();
  const chartRef = useRef(null);
  const grafico = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;
    if (grafico.current) grafico.current.destroy();

    const concluidas = tarefas.filter(t => t.concluida).length;
    const pendentes = tarefas.length - concluidas;

    grafico.current = new Chart(chartRef.current, {
      type: 'doughnut',
      data: {
        labels: ['Concluídas', 'Pendentes'],
        datasets: [{
          data: [concluidas, pendentes],
          backgroundColor: ['#10b981', '#f59e0b']
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'bottom' } }
      }
    });
  }, [tarefas]);

  return (
    <section className="bg-white shadow rounded-md p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
        <FileBarChart2 size={20} /> Relatórios de Tarefas
      </h2>

      <div className="flex gap-4 mb-4">
        <button
          onClick={() => exportarPDF(tarefas)}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm"
        >
          Exportar PDF
        </button>
        <button
          onClick={() => exportarExcel(tarefas)}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm"
        >
          Exportar Excel
        </button>
      </div>

      <ul className="text-sm space-y-2">
        {tarefas.map((t) => (
          <li key={t.id} className="border-b pb-2">
            <strong>{t.descricao}</strong> — Responsável: {t.responsavel} — Criador: {t.criador} — Data: {t.data} — Status: {t.concluida ? '✅ Concluída' : '⏳ Pendente'}
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <p className="text-sm text-gray-700 mb-2">Gráfico de Conclusão:</p>
        <canvas ref={chartRef} className="w-full max-w-xl"></canvas>
      </div>
    </section>
  );
}