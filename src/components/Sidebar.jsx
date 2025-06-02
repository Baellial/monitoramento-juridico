import { LogOut, FileBarChart2, LayoutDashboard } from 'lucide-react';

export default function Sidebar({ setAba, aba, onLogout }) {
  return (
    <aside className="w-64 bg-white shadow h-screen p-5 space-y-6">
      <h2 className="text-xl font-bold text-indigo-700">Painel Jurídico</h2>
      <nav className="space-y-4">
        <button
          onClick={() => setAba("dashboard")}
          className={`flex items-center gap-2 text-sm px-2 py-1 rounded-md w-full text-left ${
            aba === "dashboard" ? "text-indigo-700 font-bold" : "text-gray-700 hover:text-indigo-600"
          }`}
        >
          <LayoutDashboard size={18} /> Dashboard
        </button>
        <button
          onClick={() => setAba("relatorios")}
          className={`flex items-center gap-2 text-sm px-2 py-1 rounded-md w-full text-left ${
            aba === "relatorios" ? "text-indigo-700 font-bold" : "text-gray-700 hover:text-indigo-600"
          }`}
        >
          <FileBarChart2 size={18} /> Relatórios
        </button>
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
