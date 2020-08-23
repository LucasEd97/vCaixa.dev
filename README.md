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

Para executar o projeot siga os comandos abaixo:o:

```shell
yarn install
yarn dev:server
```

## [Documentação das rotas](https://documenter.getpostman.com/view/12464400/T1LVA4N2?version=latest)

