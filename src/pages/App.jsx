import { useState, useEffect } from 'react';
import Login from './Login';
import Dashboard from './Dashboard.jsx';
import Relatorios from './Relatorios.jsx';
import Sidebar from '../components/Sidebar';

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
      </main>
    </div>
  );
}
