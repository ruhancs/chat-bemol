## Description

Guide to run the application. This app was built with postgres, nestjs, typescript, prisma and react

## Initialize docker with the application

```bash
$ dentro da pasta "bemol-desafio" abra o terminal e digite o comando: [chmod +x .docker/entrypoint.sh]

$ dentro da mesma pasta "bemol-desafio" digite o comando: [docker-compose up]

$ espera a aplicaçao criar o DB, instalar os pacotes e inicializar, isso pode demorar alguns minutos

$ quando a aplicaçao estiver pronta a seguinte linha aparecera no terminal: Nest application successfully started

$ em http://localhost:8000 estara a tela inicial do chat

$ em http://localhost:3000/api/v1 estara as rotas da API para criaçao de usuarios

```

## Informaçoes sobre a utilizaçao da aplicaçao

```bash
# Cadastro de usuarios
$ No navegador va para localhost:3000/api/v1, apos a pagina carregada tera todas rotas da API

$ O metodo Post para criaçao do usuarios segue todas regras do enunciado


# Utilizaçao do chat
$ No navegador va para localhost:8000, apos a pagina carregada tera todas rotas da API

$ Devido ao curto prazo para implementaçao completa das regras de negocio usuarios e atendentes do chat utilizam a mesma pagina

$ Na pagina deve ser informado o nome e a sala que deseja entrar, o primeiro a entrar na sala sera o atendente

$ Ao usuario entrar na mesma sala que o atendente se encontra, o atendente é informado que o usuario entrou

$ Apos atendente e usuario entrarem na mesma sala os dois podem conversar

$ O navegador de atendente e usuario devem ser diferentes, ou um em modo anonimo


# Transactions
$ the application will start with the list of transactions empty

$ the application has a route to insert a list of transactions to create the transactions and update the user s balance

$ only files txt will be accept in the form

$ the application will start with the list of transactions empty

$ on the page of the transactions list has a button to delete the transaction

$ on the page of the transactions list has a button to view the transaction details

$ # OBS: Se o ambiente de execuçao for com sistema windows alguns problemas podem ocorrer ao subir a aplicaçao com doker compose. Caso a execuçao for com sistema windows fico a disposiçao para enviar um novo arquivo com atualizaçao do docker compose 
```

- Author - [Ruhan Correa Soares]()