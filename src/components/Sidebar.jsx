import { LogOut, FileBarChart2, LayoutDashboard, Clock4, LayoutList, GitBranch } from 'lucide-react';

export default function Sidebar({ setAba, aba, onLogout }) {
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
    { id: 'relatorios', label: 'Relatórios', icon: <FileBarChart2 size={18} /> },
    { id: 'kanban', label: 'Kanban', icon: <LayoutList size={18} /> },
    { id: 'historico', label: 'Histórico', icon: <Clock4 size={18} /> },
    { id: 'pipelines', label: 'Pipelines', icon: <GitBranch size={18} /> },
  ];

  return (
    <aside className="w-64 bg-white shadow h-screen p-5 space-y-6">
      <h2 className="text-xl font-bold text-indigo-700">Painel Jurídico</h2>
      <nav className="space-y-4">
        {tabs.map(({ id, label, icon }) => (
          <button
            key={id}
            onClick={() => setAba(id)}
            className={`flex items-center gap-2 text-sm px-2 py-1 rounded-md w-full text-left ${
              aba === id ? 'text-indigo-700 font-bold' : 'text-gray-700 hover:text-indigo-600'
            }`}
          >
            {icon} {label}
          </button>
        ))}
        <button
          onClick={onLogout}
          className="flex items-center gap-2 text-sm px-2 py-1 rounded-md w-full text-left text-red-600 hover:text-red-800"
        >
          <LogOut size={18} /> Sair
        </button>
      </nav>
    </aside>
  );
}