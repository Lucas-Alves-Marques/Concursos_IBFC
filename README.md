# Concursos IBFC - Processo Seletivo

Este projeto foi desenvolvido como parte do processo seletivo para o **IBFC - Instituto Brasileiro de Formação e Capacitação**, empresa na qual atuo atualmente. O sistema consiste em uma plataforma para gerenciamento e inscrição em concursos, abrangendo funcionalidades de Front-End e Back-End.

## 🚀 Funcionalidades

O sistema foi projetado para atender tanto candidatos quanto administradores (implícito no gerenciamento):

- **Autenticação de Usuários**: Sistema de login seguro utilizando JWT (JSON Web Tokens).
- **Gestão de Concursos (CRUD)**:
    - **Criação**: Cadastro de novos concursos com informações de cargo, cliente, salário, localização e status.
    - **Listagem**: Visualização de todos os concursos disponíveis.
    - **Edição**: Atualização de dados de concursos existentes.
    - **Exclusão**: Remoção de concursos da base de dados.
- **Processo de Inscrição**:
    - Permite que usuários se inscrevam em concursos de seu interesse.
    - Validação para evitar duplicidade de inscrições no mesmo concurso.
- **Área do Candidato**:
    - Listagem personalizada das inscrições realizadas pelo usuário logado.
    - Opção de cancelamento de inscrições.

## 🛠️ Tecnologias Utilizadas

### Front-End
- **React.js**: Biblioteca principal para construção da interface.
- **React Router Dom**: Gerenciamento de rotas e navegação.
- **React Icons**: Conjunto de ícones para melhoria da UI.
- **CSS Modules**: Estilização encapsulada para componentes.

### Back-End
- **Node.js**: Ambiente de execução Javascript.
- **Express**: Framework para criação da API REST.
- **MySQL2**: Driver de conexão com o banco de dados.
- **JWT (jsonwebtoken)**: Implementação de segurança e sessões.
- **CORS**: Configuração de segurança para requisições cross-origin.

## 📂 Estrutura do Projeto

O repositório está dividido em duas partes principais:

- `/Front-End`: Contém toda a lógica de interface, componentes React e estilos.
- `/Back-End`: Contém a API, lógica de negócio (Services), controladores e repositórios de dados.

---

## ⚙️ Como Rodar o Projeto

### Pré-requisitos
- Node.js instalado.
- Banco de dados MySQL configurado.

### Configuração do Back-End
1. Acesse a pasta `/Back-End`.
2. Instale as dependências: `npm install`.
3. Configure a conexão com o banco em `Repository/Connection.js`.
4. Inicie o servidor: `npm start` (ou `node index.js`).

### Configuração do Front-End
1. Acesse a pasta `/Front-End`.
2. Instale as dependências: `npm install`.
3. Inicie a aplicação: `npm start`.
4. A aplicação estará disponível em `http://localhost:3000`.

---

Este projeto reflete os conhecimentos técnicos aplicados durante o desafio técnico para ingresso no IBFC, demonstrando habilidades em desenvolvimento Full Stack, integração com banco de dados e padrões de arquitetura de software.
