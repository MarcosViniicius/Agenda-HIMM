# 📅 Agenda HIMM

Este projeto Angular CLI (v17.0.5) visa proporcionar uma experiência completa e intuitiva para o gerenciamento de eventos e anotações, utilizando um calendário alimentado por uma API externa.

## 🚀 Funcionalidades Principais

Na tela inicial da agenda, destaca-se a disponibilidade de um calendário alimentado por uma API externa, proporcionando uma maneira do usuário se orientar em relação às datas. Em uma página separada, os usuários podem criar eventos personalizados com título, descrição e data específica, assim como criar anotações em outra página.

### ➕ Criação de Eventos

Para criar um novo evento, o usuário deve acessar a página dedicada, preenchendo obrigatoriamente os campos de nome e data do evento, sendo que a data não pode ser anterior à data atual. A descrição do evento é opcional. Após salvar o evento, o usuário pode editar ou excluí-lo conforme necessário.

### 🗒️ Criação de Anotações

Os usuários também contam com a função de criar anotações em uma página separada, com um campo designado para adicionar a descrição. As anotações podem ser criadas a qualquer momento, e o usuário tem a opção de excluí-las.

## 🛠️ Especificações do Sistema

O sistema de Agenda com Integração Externa (RS001) é desenvolvido em Angular e Node.js, exigindo requisitos específicos para hardware e software. A seguir, as especificações estão organizadas conforme essas categorias, considerando a implementação em um computador padrão:

### 🖥️ Sistema necessário para rodar

- **Sistema Operacional:**

  - Windows, macOS ou Linux, conforme preferência do usuário.

- **Plataforma de Execução:**

  - Node.js para o servidor backend.

- **Ambiente de Desenvolvimento Frontend:**

  - Angular e Angular CLI para o desenvolvimento e execução do frontend.

- **Bibliotecas Necessárias (Instaladas via npm):**

  - `npm install @syncfusion/ej2-angular-calendars`
  - `npm install @syncfusion/ej2-base`
  - `npm install bootstrap`

- **Conectividade com a Internet:**

  - Uma conexão estável com a Internet é necessária para gerenciamento de dependências e acesso a recursos externos, como a integração com calendários externos.

- **Navegador:**
  - Navegadores modernos e atualizados, como Google Chrome, Mozilla Firefox ou Microsoft Edge.

## ⚙️ Servidor de Desenvolvimento

Execute `ng serve` para iniciar o servidor de desenvolvimento. Navegue até `http://localhost:4200/`. A aplicação será recarregada automaticamente se houver qualquer alteração nos arquivos de origem.

## 🧱 Estrutura do Código

Utilize `ng generate component nome-do-componente` para gerar um novo componente. Você também pode utilizar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## 🛠️ Compilação

Execute `ng build` para compilar o projeto. Os artefatos da compilação serão armazenados no diretório `dist/`.

## 🧪 Execução de Testes Unitários

Execute `ng test` para executar os testes unitários via [Karma](https://karma-runner.github.io).

## 🚀 Execução de Testes End-to-End

Execute `ng e2e` para executar os testes end-to-end através de uma plataforma de sua escolha. Para utilizar este comando, é necessário adicionar previamente um pacote que implemente capacidades de teste end-to-end.

## ❓ Ajuda Adicional

Para obter mais ajuda sobre o Angular CLI, utilize `ng help` ou consulte a página de [Visão Geral e Referência de Comandos do Angular CLI](https://angular.io/cli).
