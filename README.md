# chatgpt-clone
[![Test Passing](https://img.shields.io/badge/tests-passing-brightgreen)](URL_DO_SEU_TESTE)

Esse é um projeto de integração com ChatGPT usando Node.js e React.js.

## Development
Technologies:
- [x] **Client**: React, Axios, CSS3
- [x] **Server**: Node.js, [OpenAI API](https://platform.openai.com/docs/api-reference), CORS, .Env, Express
- [x] **Architecture**: Client-Server, REST API

PATH Directory:
<pre>
chatgpt-clone/
│
├─── web/                  # Diretório do cliente (frontend)
│   ├─── public/               # Arquivos estáticos públicos (HTML, CSS, JS)
│   ├─── src/                  # Código-fonte do cliente
│   │   ├─── components/       # Componentes reutilizáveis
│   │   ├─── pages/            # Páginas da aplicação
│   │   └─── index.js          # Ponto de entrada do cliente
│   └─── package.json          # Metadados e dependências do cliente
│
├─── server/                 # Diretório do servidor (backend)
│   ├─── config/               # Configurações do projeto
│   │   └─── openai.js         # Código de integração da API da OpenAI
│   ├─── src/                  # Código-fonte do servidor
│   │   ├─── routes/           # Rotas da API
│   │   ├─── controllers/      # Controladores da lógica de negócios
│   │   ├─── models/           # Modelos de dados
│   │   ├─── server.js
│   │   └─── app.js          # Ponto de entrada do servidor
│   └─── package.json          # Metadados e dependências do servidor
│
└─── package.json              # Metadados e dependências do projeto global

</pre>

Environment Variables:

[![DotEnv](https://img.shields.io/badge/-.env-fff?style=social&logo=DotEnv&logoColor=yellow)](#)

```
OPEN_AI_KEY
PORT
```

1. Installing all dependences:

[![NPM](https://img.shields.io/badge/-npm_install-fff?style=social&logo=NPM&logoColor=red)](#)

```sh
npm i
```

## Staging

## Production 