# Servidor JSON com Express e Nodemon para CRUD de Produtos

Este é um simples servidor de API em Node.js que utiliza o JSON Server, o Express e o Nodemon para criar um CRUD (Create, Read, Update, Delete) de produtos.

## Requisitos

Certifique-se de ter o Node.js e o npm (gerenciador de pacotes do Node.js) instalados em sua máquina.

## Instalação

1. Clone este repositório para o seu computador:

git clone https://github.com/seu-usuario/nome-do-repositorio.git

2. Acesse o diretório do projeto:

cd nome-do-repositório

3. Instale as dependências do projeto:

npm install

## Uso

1. Inicie o servidor:

  npm start

Isso iniciará o servidor JSON na porta 3000 e você poderá acessar a API em `http://localhost:3000`.

2. Teste a API utilizando ferramentas como o Postman ou o cURL. Aqui estão alguns exemplos de endpoints disponíveis:

  GET /products: Retorna todos os produtos.

  GET /products/:id: Retorna um produto específico com base no ID fornecido.

  POST /products: Cria um novo produto.

  PUT /products/:id: Atualiza um produto existente com base no ID fornecido.

  DELETE /products/:id: Exclui um produto com base no ID fornecido.

Certifique-se de substituir `:id` pelos IDs reais dos produtos ao fazer requisições PUT e DELETE.

## Contribuição

Contribuições são bem-vindas! Se você tiver melhorias, correções de bugs ou novos recursos para adicionar, fique à vontade para enviar um pull request.

## Licença

Este projeto está licenciado sob a licença [MIT](https://opensource.org/licenses/MIT). Sinta-se à vontade para usar, modificar e distribuir o código conforme necessário.
Esse é o README.md formatado em Markdown com todo o conteúdo envolvido em um bloco de código. Você pode copiar e colar esse conteúdo no arquivo README.md do seu projeto.