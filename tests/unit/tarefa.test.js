// tests/unit/tarefa.test.js

function validarTarefa(descricao, responsavel) {
  return descricao.trim() !== "" && responsavel.trim() !== "";
}

test("validação deve falhar com campos vazios", () => {
  expect(validarTarefa("", "")).toBe(false);
});

test("validação deve passar com campos preenchidos", () => {
  expect(validarTarefa("Descrição", "João")).toBe(true);
});
