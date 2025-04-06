# 📋 Desafio Fullstack - Gerenciador de Tarefas

![Status](https://img.shields.io/badge/status-%20concluido-green)
![Made with](https://img.shields.io/badge/Made%20with-React-blue?logo=react)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)
![SQLite](https://img.shields.io/badge/Banco_SQLite-003B57?logo=sqlite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/UI-Tailwind_CSS-38b2ac?logo=tailwind-css)

Projeto fullstack desenvolvido para praticar os conceitos de criação de API REST com integração frontend + backend. O objetivo é permitir o cadastro, visualização, edição e exclusão de tarefas com status bem definidos.

---

## 🧠 Funcionalidades

- ✅ Criar novas tarefas  
- 📄 Visualizar todas as tarefas  
- ✏️ Editar tarefas existentes  
- 🗑️ Deletar tarefas  
- 🕹️ Alterar status da tarefa (Pendente, Em Andamento, Concluída)

---

## 🛠️ Tecnologias Utilizadas

### Backend
- ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=nodedotjs&logoColor=white)
- ![Express](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white)
- ![SQLite](https://img.shields.io/badge/-SQLite-003B57?logo=sqlite&logoColor=white)

### Frontend
- ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black)
- ![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)

---

## ⚙️ Como Rodar o Projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/alyssongab/desafiotodo.git
cd desafiotodo
```

### 2. Instalar dependências e iniciar servidor backend (Express)
```bash
cd backend
npm install
npm run dev
``` 
### 3. Instalar dependências e iniciar servidor frontend (React)
```bash
cd ../frontend/
npm install
npm run dev
```

### 4. Abrir localhost na porta 5173
```
http://localhost:5173
```
## 📁 Estrutura do Projeto
📦 projeto/
├── backend/           # API com Node.js + Express + SQLITE
├── frontend/          # Interface com React + Tailwind
└── README.md          # Documentação principal
