# vCaixa.dev

Esse projeto trata-se de um caixa virtual para auxiliar no controle do fluxo de um caixa do mercado, por exemplo. 

## Começando
Para executar o projeto, será necessário instalar os seguintes programas:

[NodeJS](https://nodejs.org/pt-br/download/)

[Docker](https://docs.docker.com/docker-for-windows/install/)

[Yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable)

## Execução do projeto
Para iniciar o projeto, é necessário clonar o projeto do GitHub num diretório de sua preferência:

```shell
cd "diretorio de sua preferencia"
git clone https://github.com/LucasEd97/vCaixa.dev.git
```

Para executar o projeo é necessário inicar o docker através do comando abaixo e também é necessário criar a seguinte imagem no docker: 

```shell
docker start caixavirtual
docker run --name vcaixa_postgres -e POSTGRES_PASSWORD=vcaixa -d postgres -p 5434:5432
```
⚠Observação: O container utilizado no desenvolvimento do projeto utiliza o SO Windows ⚠

Para configurar o banco localmente, deve-se seguir os seguintes passos:

Renomear o arquivo ```shell ormconfig.json``` para ```shell ormconfig.json_PROD``` e 
Renomear o arquivo ```shell ormconfig.json_DEV``` para ```shell ormconfig.json``` e criar o banco de dados conforme dados do arquivo```shell ormconfig.json ```

Para executar o projeot siga os comandos abaixo:

```shell
yarn install
yarn dev:server
```

## URL da aplicação no Heroku:
https://vcaixadev.herokuapp.com/

https://vcaixadev.herokuapp.com/Wallet

https://vcaixadev.herokuapp.com/category

https://vcaixadev.herokuapp.com/transactions


## Documentação das rotas

URL da aplicação em produção: ```shell https://vcaixadev.herokuapp.com/```

URL da aplicação local: ```shell http://localhost:3333```

[Documentação Postman](https://documenter.getpostman.com/view/12464400/T1LVA4to?version=latest)

