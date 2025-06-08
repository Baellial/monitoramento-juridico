export function registrarLog(usuario, acao) {
  const logs = JSON.parse(localStorage.getItem('logs')) || [];
  const registro = {
    usuario,
    acao,
    timestamp: new Date().toLocaleString(),
  };
  logs.unshift(registro);
  localStorage.setItem('logs', JSON.stringify(logs));
}
