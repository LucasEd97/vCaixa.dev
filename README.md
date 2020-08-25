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

Para executar o projeto localmente é necessário inicar o docker através do comando abaixo e também é necessário criar a seguinte imagem no docker: 

```shell
docker start caixavirtual
docker run --name caixavirtual -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
```
⚠Observação: O container utilizado no desenvolvimento do projeto utiliza o SO Windows ⚠

Para configurar a aplicação localmente, deve-se seguir os seguintes passos:

1. Renomear o arquivo ``` ormconfig.json``` para ``` ormconfig.json_PROD``` e Renomear o arquivo ``` ormconfig.json_DEV``` para ``` ormconfig.json``` e criar o banco de dados conforme dados do arquivo ``` ormconfig.json ```
2. Instalar as dependencias com ``yarn install``
3. Rodar as migrations para criar a estutura do banco, usando o comando ```yarn typeorm migration:run```
4. Para executar a aplicação em modo de desenvolvimento, utilizar o comando ```yarn dev:server```

Para gerar o build da aplicação deve-se executar o seguinte comando: ```yarn build``` com o build gerado execute o comando ```yarn start```

## Deploy

A aplicaçã está publicada no Herouku, com deploy automático à partir de novos commits na branch `master`. A estrutura do banco de dados foi gerado à partir das migrations contidas na aplicação e foi criado utilizando os resources do próprio Heroku.

## Documentação das rotas

URL da aplicação em produção: ``` https://vcaixadev.herokuapp.com/```

URL da aplicação local: ``` http://localhost:3333```

[Documentação Postman](https://documenter.getpostman.com/view/12464400/T1LVA4to?version=latest)

