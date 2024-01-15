# GrowTwitter - Avaliação de Banco de Dados II
## Descrição
Este repositório contém o projeto GrowTwitter, uma aplicação que simula uma rede social no estilo Twitter. O objetivo principal é realizar a modelagem e criação do Banco de Dados utilizando o Prisma, além de desenvolver uma API para o CRUD da aplicação.

## Como Utilizar
1. Clone o repositório.  
2. Instale as dependências usando `npm install`.
3. Configure o banco de dados no Prisma.
4. Execute a aplicação com `npm start`.

## Requisitos
### Banco de Dados (BD)
- Configurar o Prisma ORM.  
- Conectar a um banco de dados PostgreSQL.  
- Criar no BD todas as tabelas necessárias para armazenar os dados, usando os models do Prisma.  
### API
- Criar uma API usando o Express para o projeto do GrowTwitter.  
- Implementar CRUD para as seguintes funcionalidades:  
- Usuários  
- Tweets  
- Likes  
### Autenticação  
- Implementar rota para login de usuários.  
- A autenticação deve ser feita com username/email e senha.  
- Funcionalidades como Tweets e Likes só podem ser executadas mediante login.  
### Requisitos PLUS (API)  
- Implementar CRUD para as seguintes funcionalidades:  
- Seguidores  
- Replies  
- Estas funcionalidades só podem ser acessadas mediante login.  
## Regras  
### Tweet  
- Devem ter um ID único.  
- Possuem um tipo (Tweet ou Reply).  
- Devem ser associados a apenas um usuário.  
- Podem conter likes e replies.  
### Like  
- Um usuário pode curtir (like) um Tweet específico.  
- Um tweet pode ter zero ou vários likes.  
- Um usuário não pode curtir mais de uma vez o mesmo tweet.  
### Follower  
- Um usuário pode seguir outro usuário.  
- Um usuário pode ser seguido por qualquer outro usuário.  
- O usuário que segue outro é chamado de Follower.  
- Um usuário não pode seguir a si mesmo.  
### Reply  
- Um usuário pode responder (reply) a um Tweet específico com outro Tweet.  
- Um reply é considerado um Tweet.  
- O tweet reply deve conter uma referência ao tweet original.  
- Um tweet pode ter zero ou vários replies.  

