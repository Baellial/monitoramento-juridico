import { useState, useEffect } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import Relatorios from './Relatorios';
import Historico from './Historico';
import Pipelines from './Pipelines';
import KanbanBoard from './KanbanBoard';
import Sidebar from '../components/Sidebar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [usuario, setUsuario] = useState(null);
  const [aba, setAba] = useState("dashboard");

  useEffect(() => {
    const user = localStorage.getItem("usuario");
    if (user) setUsuario(user);
  }, []);

  function handleLogout() {
    localStorage.removeItem("usuario");
    setUsuario(null);
  }

  if (!usuario) {
    return <Login onLogin={setUsuario} />;
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar onLogout={handleLogout} setAba={setAba} aba={aba} />
      <main className="flex-1 p-6">
        {aba === "dashboard" && <Dashboard usuario={usuario} />}
        {aba === "relatorios" && <Relatorios />}
        {aba === "historico" && <Historico usuario={usuario} />}
        {aba === "pipelines" && <Pipelines />}
        {aba === "kanban" && <KanbanBoard />}
      </main>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
