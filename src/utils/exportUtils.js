import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';

export function exportarPDF(tarefas) {
  const doc = new jsPDF();
  doc.text("Relatório de Tarefas", 14, 16);
  autoTable(doc, {
    head: [['Título', 'Descrição', 'Responsável', 'Prioridade', 'Prazo', 'Status', 'Criador', 'Data']],
    body: tarefas.map((t) => [
      t.titulo,
      t.descricao,
      t.responsavel,
      t.prioridade,
      t.prazo,
      t.status,
      t.criador,
      t.data,
    ]),
  });
  doc.save('relatorio_tarefas.pdf');
}

export function exportarExcel(tarefas) {
  const ws = XLSX.utils.json_to_sheet(
    tarefas.map((t) => ({
      Título: t.titulo,
      Descrição: t.descricao,
      Responsável: t.responsavel,
      Prioridade: t.prioridade,
      Prazo: t.prazo,
      Status: t.status,
      Criador: t.criador,
      Data: t.data,
    }))
  );
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Relatório');
  XLSX.writeFile(wb, 'relatorio_tarefas.xlsx');
}
