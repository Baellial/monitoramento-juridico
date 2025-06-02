import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';

export function exportarPDF(tarefas) {
  const doc = new jsPDF();
  doc.text("Relatório de Tarefas", 14, 16);
  autoTable(doc, {
    head: [['Descrição', 'Responsável', 'Criador', 'Data', 'Status']],
    body: tarefas.map((t) => [
      t.descricao,
      t.responsavel,
      t.criador,
      t.data,
      t.concluida ? 'Concluída' : 'Pendente',
    ]),
  });
  doc.save('relatorio_tarefas.pdf');
}

export function exportarExcel(tarefas) {
  const ws = XLSX.utils.json_to_sheet(
    tarefas.map((t) => ({
      Descrição: t.descricao,
      Responsável: t.responsavel,
      Criador: t.criador,
      Data: t.data,
      Status: t.concluida ? 'Concluída' : 'Pendente',
    }))
  );
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Relatório');
  XLSX.writeFile(wb, 'relatorio_tarefas.xlsx');
}
