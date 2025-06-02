export default function Login({ onLogin }) {
  function handleSubmit(e) {
    e.preventDefault();
    const nome = e.target.nome.value.trim();
    const senha = e.target.senha.value.trim();

    if (nome === "admin" && senha === "1234") {
      localStorage.setItem("usuario", nome);
      onLogin(nome);
    } else {
      alert("Credenciais inválidas. Use admin/1234 para teste.");
    }
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?law,office)' }}
    >
      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-md bg-white/30 p-8 rounded-xl shadow-md max-w-sm w-full"
      >
        <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">Acesso Restrito</h2>
        <label className="block text-sm font-medium text-gray-700 mb-1">Usuário</label>
        <input
          type="text"
          name="nome"
          required
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />
        <label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
        <input
          type="password"
          name="senha"
          required
          className="w-full p-2 border border-gray-300 rounded-md mb-6"
        />
        <button
          type="submit"
          className="w-full bg-indigo-700 hover:bg-indigo-800 text-white py-2 px-4 rounded-md"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
