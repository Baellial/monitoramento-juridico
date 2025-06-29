# 🧾 Sistema de Monitoramento Jurídico

###Este projeto é um painel simples para monitoramento e gerenciamento de tarefas de uma Fábrica de Software Jurídico. Desenvolvido como parte da disciplina **Fábrica de Software** no curso de Engenharia de Software – UNICEPLAC.
=======
## 📋 Funcionalidades

- ✅ Autenticação com controle de acesso
- 🗂️ Cadastro e gerenciamento completo de tarefas
- ⏱️ Acompanhamento de prazos e prioridades
- 📎 Upload de anexos por tarefa
- 📊 Dashboard com gráficos dinâmicos (Chart.js)
- 📅 Kanban com drag-and-drop
- 📑 Geração de relatórios em PDF e Excel
- 🧪 Testes unitários (Vitest) e E2E (Playwright)
- 🔁 Histórico de alterações e ações por usuário
- 🔧 Pipeline de integração contínua (GitHub Actions)
- 📬 Notificações visuais com React Toastify

---

## 🛠 Tecnologias Utilizadas

| Tecnologia         | Uso                                  |
|====================|======================================|
| React              | Front-end SPA                        |
| Tailwind CSS       | Estilização moderna e responsiva     |
| Chart.js           | Gráficos e dashboards                |
| React Toastify     | Notificações visuais                 |
| Playwright         | Testes de interface (E2E)            |
| Vitest             | Testes unitários                     |
| jsPDF + AutoTable  | Exportação de relatórios em PDF      |
| xlsx (SheetJS)     | Exportação em Excel                  |
| GitHub Actions     | Pipeline CI para testes automatizados|
|====================|======================================|
---

## 📦 Instalação e Execução

**Clone o repositório:**

```bash
1°- git clone https://github.com/seu-usuario/monitoramento-juridico.git
2°- cd monitoramento-juridico
3°- npm install
4°- npm run dev
```
---

##🔐 Login de Teste
Use as credenciais abaixo:

Usuário: admin

Senha: 1234

---
##📚 Estrutura de Diretórios

├── public/
│   └── index.html
├── src/
│   ├── components/         # Componentes reutilizáveis (Sidebar, TarefaCard)
│   ├── hooks/              # Hook customizado: useTarefas
│   ├── pages/              # Páginas principais: App, Login, Dashboard, etc.
│   ├── styles/             # Estilos globais com Tailwind
│   ├── tests/              # Testes unitários e E2E
│   └── utils/              # Funções auxiliares (logs, exportações)
├── .github/workflows/      # Arquivo de CI com GitHub Actions
├── postcss.config.js
├── tailwind.config.js
└── package.json

---

##Sobre o projeto:
Desenvolvido como parte de um projeto acadêmico e profissional para automatizar e melhorar o acompanhamento de equipes de desenvolvimento de software jurídico, promovendo produtividade, qualidade e rastreabilidade.
