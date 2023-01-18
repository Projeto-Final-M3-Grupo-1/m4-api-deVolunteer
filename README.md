# DeVolunteer-API

# Documentação da API

-   Link da documentação da API: https://raphaeldamasceno1852.github.io/DeVolunteer-Doc/

## Tabela de Conteúdos

-   [Visão Geral](#2-visão-geral)
-   [Diagrama ER](#2-diagrama-er)
-   [Início Rápido](#3-início-rápido)
    -   [Instalando Dependências](#31-instalando-dependências)
    -   [Variáveis de Ambiente](#32-variáveis-de-ambiente)
    -   [Migrations](#33-migrations)
-   [Autenticação](#4-autenticação)
-   [Endpoints](#5-endpoints)

---

## 1. Visão Geral

Visão geral do projeto, um pouco das tecnologias usadas.

-   [NodeJS](https://nodejs.org/en/)
-   [Express](https://expressjs.com/pt-br/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [PostgreSQL](https://www.postgresql.org/)
-   [TypeORM](https://typeorm.io/)
-   [Yup](https://www.npmjs.com/package/yup)

A URL base da aplicação:
https://devolunteer.onrender.com

---

## 2. Diagrama ER

[ Voltar para o topo ](#tabela-de-conteúdos)

Diagrama ER da API definindo bem as relações entre as tabelas do banco de dados.

![DER](src/assets/Diagrama.drawio.png)

---

## 3. Início Rápido

[ Voltar para o topo ](#tabela-de-conteúdos)

### 3.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
yarn
```

### 3.2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:

```
.env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

### 3.3. Migrations

Execute as migrations com o comando:

```
yarn typeorm migration:run -d src/data-source.ts
```

---

## 4. Autenticação

[ Voltar para o topo ](#tabela-de-conteúdos)

### Índice

-   [Login](#1-login)
    -   [POST - /login](#11-autenticação-de-usuário)

---

## 5. Endpoints

[ Voltar para o topo ](#tabela-de-conteúdos)

### Índice

-   [Users](#2-users)
    -   [POST - /users](#21-criação-de-usuário)
    -   [GET - /users](#22-listando-usuários)
    -   [PATCH - /users/:user_id](#23-atualizar-usuário-por-id)
    -   [DELETE - /users/:user_id](#24-deletar-usuário-por-id)
-   [Ong](#3-ong)
    -   [POST - /ong](#31-criação-de-ong)
    -   [GET - /ong](#32-listando-ongs)
    -   [PATCH - /ong/:user_id](#33-atualizar-ong-por-id)
    -   [DELETE - /ong/:user_id](#34-deletar-ong-por-id)
-   [News](#4-news)
    -   [POST - /news](#41-criação-de-notícias)
    -   [GET - /news](#42-listando-notícias)
    -   [GET - /news/:news_id](#43-listando-notícias-por-id)
    -   [PATCH - /news/:news_id](#44-atualizar-notícias-por-id)
    -   [DELETE - /news/:news_id](#45-deletar-notícia-por-id)
-   [Projects](#5-projects)
    -   [POST - /news](#51-criação-de-projetos)
    -   [GET - /news](#52-listando-projetos)
    -   [PATCH - /news/:news_id](#53-atualizar-projetos-por-id)
    -   [DELETE - /news/:news_id](#54-deletar-projeto-por-id)
-   [Tasks](#6-tasks)
    -   [POST - /tasks/projects/:projects_id](#61-criação-de-tarefas)
    -   [GET - /tasks/projects/:projects_id](#62-listando-tarefas)
    -   [PATCH - /tasks/:tasks_id](#63-atualizar-tarefas-por-id)
    -   [DELETE - /tasks/:task_id](#64-deletar-tarefas-por-id)
-   [Technologies](#7-technologies)
    -   [POST - /users/technologies/:technology_id](#71-adicionar-tecnologias-ao-usuário)
    -   [GET - /projects](#72-listando-todas-tecnologias-existentes)
    -   [DELETE - /users/technologies/:technology_id](#73-deletar-tecnologias-por-id)
-   [User-tasks](#8-user-tasks)
    -   [POST - /users/tasks/:task_id](#81-alterar-o-status-para-desenvolvimento)
    -   [POST - /users/tasks/:task_id](#82-alterar-o-status-para-concluido)
    -   [DELETE - /tasks/:task_id](#73-deletar-tecnologias-por-id)

---

---

## 1. **Login**

[ Voltar para Autenticação ](#4-autenticação)

O objeto User é definido como:

| Campo    | Tipo   | Descrição                    |
| -------- | ------ | ---------------------------- |
| email    | string | O e-mail do usuário.         |
| password | string | A senha de acesso do usuário |

### Endpoint

| Método | Rota   | Descrição                   |
| ------ | ------ | --------------------------- |
| POST   | /login | Autenticação de um usuário. |

---

### 1.1. **Autenticação de Usuário**

[ Voltar para Autenticação ](#4-autenticação)

### `/login`

### Exemplo de Request:

```
POST /login
Host: https://devolunteer.onrender.com
Authorization: Bearer token
Content-type: application/json
```

### Corpo da Requisição:

```json
{
	"email": "rafaelquadros@mail.com",
	"password": "123456"
}
```

### Schema de Validação com Yup:

```javascript
loginSerializer = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().required(),
});
```

OBS.: Chaves não presentes no schema serão removidas.

### Exemplo de Response:

```
200 Ok
```

```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbSI6dHJ1ZSwiaXNBY3RpdmUiOnRydWUsInR5cGVVc2VyIjoiRGV2IiwiaWF0IjoxNjc0MDQ5NTI1LCJleHAiOjE2NzQxMzU5MjUsInN1YiI6ImQyOWY2Mzk2LWQ1MDMtNDg3Ny04NWRhLWY1NTNhMWY2ODE3ZSJ9.wWeXDDMXcJ3mKMC9IEFmljgTC3sPt95U3UR_-i6dpsQ"
}
```

### Possíveis Erros:

| Código do Erro | Descrição                  |
| -------------- | -------------------------- |
| 403 Forbidden  | Invalid email or password. |

---

## 2. **Users**

[ Voltar para os Endpoints ](#5-endpoints)

O objeto User é definido como:

| Campo          | Tipo    | Descrição                                    |
| -------------- | ------- | -------------------------------------------- |
| location       | string  | local do usuário                             |
| id             | string  | Identificador único do usuário               |
| name           | string  | O nome do usuário.                           |
| email          | string  | O e-mail do usuário.                         |
| password       | string  | A senha de acesso do usuário                 |
| isAdm          | boolean | Define se um usuário é Administrador ou não. |
| github         | string  | Perfil do usuário no github.                 |
| linkedin       | string  | Perfil do usuário no linkedin.               |
| profilePicture | string  | Foto de perfil do usuário.                   |
| createdAt      | date    | data da criação do usuário                   |
| updatedAt      | date    | data da atualização do usuário               |

### Endpoints

| Método | Rota            | Descrição                                        |
| ------ | --------------- | ------------------------------------------------ |
| POST   | /users          | Criação de um usuário.                           |
| GET    | /users          | Listagem de todos os usuários                    |
| PATCH  | /users/:user_id | Atualiza um usuário usando seu ID como parâmetro |
| DELETE | /users/:user_id | Deleta um usuário usando seu ID como parâmetro   |

---

### 2.1. **Criação de Usuário**

[ Voltar para os Endpoints ](#5-endpoints)

### `/users`

### Exemplo de Request:

```
POST /users
Host: https://devolunteer.onrender.com
Authorization: none
Content-type: application/json
```

### Corpo da Requisição:

```json
{
	"name": "Rafael Quadros",
	"email": "rafaelquadros@mail.com",
	"isAdm": true,
	"password": "123456",
	"github": "www.github.com",
	"linkedin": "www.linkedin.com",
	"profilePicture": "https://t.ctcdn.com.br/IVlt3nVuXYDVX4vyjzgborR84H0=/400x400/smart/i490793.jpeg"
}
```

### Schema de Validação com Yup:

```javascript
CreateUserSerializerRequest = yup.object().shape({
	name: yup.string().required(),
	email: yup.string().required(),
	password: yup.string().required(),
	github: yup.string().required(),
	linkedin: yup.string().required(),
	profilePicture: yup.string().required(),
	isAdm: yup.boolean().notRequired(),
	location: yup.string().required(),
});
```

OBS.: Chaves não presentes no schema serão removidas.

### Exemplo de Response:

```
201 Created
```

```json
{
	"location": "Brazil/BR - Minas Gerais/MG - Vespasiano",
	"updatedAt": "2023-01-17T19:41:17.877Z",
	"createdAt": "2023-01-17T19:41:17.877Z",
	"isActive": true,
	"isAdm": true,
	"profilePicture": "https://t.ctcdn.com.br/IVlt3nVuXYDVX4vyjzgborR84H0=/400x400/smart/i490793.jpeg",
	"linkedin": "www.linkedin.com",
	"github": "www.github.com",
	"email": "rafaelquadros@mail.com",
	"name": "Rafael Quadros",
	"id": "8f321719-c27c-4b6d-be59-54091dbe5270"
}
```

### Possíveis Erros:

| Código do Erro | Descrição                 |
| -------------- | ------------------------- |
| 409 Conflict   | Email already registered. |

### 2.2. **Listando Usuários**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users`

### Exemplo de Request:

```
GET /users
Host: https://devolunteer.onrender.com
Authorization: Bearer token
Content-type: application/json
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
	{
		"location": "Brazil/BR - Minas Gerais/MG - Vespasiano",
		"updatedAt": "2023-01-17T19:41:17.877Z",
		"createdAt": "2023-01-17T19:41:17.877Z",
		"isActive": true,
		"isAdm": true,
		"profilePicture": "https://t.ctcdn.com.br/IVlt3nVuXYDVX4vyjzgborR84H0=/400x400/smart/i490793.jpeg",
		"linkedin": "www.linkedin.com",
		"github": "www.github.com",
		"email": "rafaelquadros@mail.com",
		"name": "Rafael Quadros",
		"id": "8f321719-c27c-4b6d-be59-54091dbe5270"
	}
]
```

### Possíveis Erros:

| Código do Erro   | Descrição          |
| ---------------- | ------------------ |
| 403 Forbidden    | User is not admin. |
| 401 Unauthorized | Invalid token.     |

---

### 2.3. **Atualizar Usuário por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users/:user_id`

### Exemplo de Request:

```
PATCH /users/9cda28c9-e540-4b2c-bf0c-c90006d37893
Host: https://devolunteer.onrender.com
Authorization: Bearer token
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                             |
| --------- | ------ | ------------------------------------- |
| user_id   | string | Identificador único do usuário (User) |

### Corpo da Requisição:

Necessita de apenas um campo para fazer a atualização parcial.

```json
{
	"name": "Rafael Quadros editado",
	"email": "rafaelquadros@mail.com",
	"isAdm": true,
	"password": "123456",
	"github": "www.github.com",
	"linkedin": "www.linkedin.com",
	"profilePicture": "https://t.ctcdn.com.br/IVlt3nVuXYDVX4vyjzgborR84H0=/400x400/smart/i490793.jpeg"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
	"location": "United States/US - Oregon/OR - Portland",
	"updatedAt": "2023-01-16T14:56:59.810Z",
	"createdAt": "2023-01-16T14:43:38.571Z",
	"isActive": true,
	"isAdm": true,
	"profilePicture": "https://t.ctcdn.com.br/IVlt3nVuXYDVX4vyjzgborR84H0=/400x400/smart/i490793.jpeg",
	"linkedin": "www.linkedin.com",
	"github": "www.github.com",
	"email": "userAdminUpdated@mail.com",
	"name": "Rafael Quadros editado",
	"id": "82b5350a-4da9-46e0-b85b-09ab20b22c09"
}
```

### Possíveis Erros:

| Código do Erro   | Descrição         |
| ---------------- | ----------------- |
| 404 Not Found    | User dont exists. |
| 401 Unauthorized | jwt malformed.    |
| 401 Unauthorized | Invalid token.    |

---

### 2.4. **Deletar Usuário por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users/:user_id`

### Exemplo de Request:

```
PATCH /users/9cda28c9-e540-4b2c-bf0c-c90006d37893
Host: https://devolunteer.onrender.com
Authorization: Bearer token
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                             |
| --------- | ------ | ------------------------------------- |
| user_id   | string | Identificador único do usuário (User) |

### Corpo da Requisição:

vazio.

### Exemplo de Response:

```
204 No Content
```

### Possíveis Erros:

| Código do Erro   | Descrição          |
| ---------------- | ------------------ |
| 401 Unauthorized | jwt malformed.     |
| 404 Not Found    | User dont exists.  |
| 403 Unauthorized | User is not admin. |

---

## 3. **Ong**

[ Voltar para os Endpoints ](#5-endpoints)

O objeto Ong é definido como:

| Campo          | Tipo           | Descrição                                      |
| -------------- | -------------- | ---------------------------------------------- |
| id             | string         | Identificador único da ong                     |
| companyName    | string         | O nome da ong.                                 |
| email          | string         | O e-mail da ong.                               |
| password       | string         | A senha de acesso da ong.                      |
| cnpj           | number         | Número do CNPJ da ong.                         |
| phone          | number         | Telefone da ong.                               |
| ownerName      | string or null | Nome do dono da ong.                           |
| github         | string         | Perfil da ong no github.                       |
| linkedin       | string         | Perfil da ong no linkedin.                     |
| profilePicture | string or null | Foto de perfil da ong.                         |
| isActive       | boolean        | Informa se a conta está ativa                  |
| createdAt      | date           | Informa a data da criação da conta da ong      |
| updatedAt      | date           | Informa a data da atualização da conta da ong. |

---

### Endpoints

| Método | Rota         | Descrição                                     |
| ------ | ------------ | --------------------------------------------- |
| POST   | /ong         | Criação de uma ong.                           |
| GET    | /ong         | Lista todos as ongs.                          |
| PATCH  | /ong/:ong_id | Atualiza uma ong usando seu ID como parâmetro |
| DELETE | /ong/:ong_id | Deleta uma ong usando seu ID como parâmetro   |

---

### 3.1. **Criação de ong**

[ Voltar para os Endpoints ](#5-endpoints)

### `/ong`

### Exemplo de Request:

```
POST /ong
Host: https://devolunteer.onrender.com
Authorization: none
Content-type: application/json
```

### Corpo da Requisição:

```json
{
	"companyName": "Another1",
	"email": "another1@email.com",
	"password": "1234",
	"cnpj": "12345678901270",
	"phone": 219765478
}
```

### Schema de Validação com Yup:

```javascript
ongSerializer = yup.object().shape({
	companyName: yup.string().required(),
	email: yup.string().email().required(),
	password: yup
		.string()
		.required()
		.transform((value, originalValue) => hashSync(originalValue, 10)),
	cnpj: yup.string().min(14).max(14).required(),
	phone: yup.number().required(),
	github: yup.string(),
	ownerName: yup.string(),
	profilePicture: yup.string().url(),
	linkedin: yup.string().url(),
});
```

OBS.: Chaves não presentes no schema serão removidas.

### Exemplo de Response:

```
201 Created
```

```json
{
	"id": "45c9b6de-3538-4ebd-84e5-960dc9986df9",
	"companyName": "Another1",
	"email": "another1@email.com",
	"cnpj": "12345678901270",
	"phone": 219765478,
	"ownerName": null,
	"profilePicture": null,
	"github": null,
	"linkedin": null,
	"isActive": true,
	"createdAt": "2023-01-17T19:59:54.967Z",
	"updatedAt": "2023-01-17T19:59:54.967Z"
}
```

### Possíveis Erros:

| Código do Erro | Descrição           |
| -------------- | ------------------- |
| 409 Conflict   | ONG already exists. |

---

### 3.2. **Listando ongs**

[ Voltar aos Endpoints ](#5-endpoints)

### `/ong`

### Exemplo de Request:

```
GET /ong
Host: https://devolunteer.onrender.com
Authorization: Bearer token
Content-type: application/json
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
	{
		"id": "d56754d9-db3f-4420-8f7e-dd40323060d6",
		"companyName": "Another",
		"email": "anotherf@email.com",
		"cnpj": "12345678901279",
		"phone": 219765478,
		"ownerName": null,
		"profilePicture": null,
		"github": null,
		"linkedin": null,
		"createdAt": "2023-01-17T19:41:53.437Z",
		"updatedAt": "2023-01-17T19:41:53.437Z"
	}
]
```

### Possíveis Erros:

| Código do Erro   | Descrição      |
| ---------------- | -------------- |
| 401 Unauthorized | Invalid token. |

---

### 3.3. **Atualizar ong por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/ong/:ong_id`

### Exemplo de Request:

```
PATCH /ongs/9cda28c9-e540-4b2c-bf0c-c90006d37893
Host: https://devolunteer.onrender.com
Authorization: Bearer token
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                        |
| --------- | ------ | -------------------------------- |
| user_id   | string | Identificador único da ong (ong) |

### Corpo da Requisição:

Necessita de apenas um campo para fazer a atualização parcial.

```json
{
	"companyName": "BCDE"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
	"id": "d56754d9-db3f-4420-8f7e-dd40323060d6",
	"companyName": "BCDE",
	"email": "anotherf@email.com",
	"cnpj": "12345678901279",
	"phone": 219765478,
	"ownerName": null,
	"profilePicture": null,
	"github": null,
	"linkedin": null,
	"isActive": true,
	"createdAt": "2023-01-17T19:41:53.437Z",
	"updatedAt": "2023-01-17T19:58:45.627Z"
}
```

### Possíveis Erros:

| Código do Erro   | Descrição      |
| ---------------- | -------------- |
| 401 Unauthorized | Invalid token. |
| 404 Not Found    | ONG not found. |

---

### 3.4. **Deletar ong por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/ong/:ong_id`

### Exemplo de Request:

```
PATCH /ongs/9cda28c9-e540-4b2c-bf0c-c90006d37893
Host: https://devolunteer.onrender.com
Authorization: Bearer token
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                       |
| --------- | ------ | ------------------------------- |
| user_id   | string | Identificador único da ong(ong) |

### Corpo da Requisição:

vazio.

### Exemplo de Response:

```
204 No Content
```

### Possíveis Erros:

| Código do Erro   | Descrição      |
| ---------------- | -------------- |
| 401 Unauthorized | Invalid token. |
| 404 Not Found    | ONG not found. |

---

## 4. **News**

[ Voltar para os Endpoints ](#5-endpoints)

O objeto news é definido como:

| Campo          | Tipo           | Descrição                                             |
| -------------- | -------------- | ----------------------------------------------------- |
| id             | string         | Identificador único da ong                            |
| title          | string         | Título da notícia.                                    |
| description    | string         | A descrição da notícia.                               |
| site           | string         | Fonte da notícia.                                     |
| img            | string         | Url com imagem da notícia                             |
| user           | Object         | Objeto com os dados do UserAdmin que criou a notícia. |
| ownerName      | string or null | Nome do dono da ong.                                  |
| github         | string         | Perfil da ong no github.                              |
| linkedin       | string         | Perfil da ong no linkedin.                            |
| profilePicture | string or null | Foto de perfil da ong.                                |
| isActive       | boolean        | Informa se a conta está ativa.                        |
| createdAt      | date           | Informa a data da criação da conta da ong.            |
| updatedAt      | date           | Informa a data da atualização da conta da ong.        |
| deletedAt      | date           | Data da exclusão da notícia.                          |

---

### Endpoints

| Método | Rota           | Descrição                                         |
| ------ | -------------- | ------------------------------------------------- |
| POST   | /news          | Criação de uma notícia.                           |
| GET    | /news          | Lista todos as notícias.                          |
| GET    | /news/:news_id | Lista uma notícia usando seu ID como parâmetro    |
| PATCH  | /news/:news_id | Atualiza uma notícia usando seu ID como parâmetro |
| DELETE | /news/:news_id | Deleta uma notícia usando seu ID como parâmetro   |

---

### 4.1. **Criação de notícias**

[ Voltar para os Endpoints ](#5-endpoints)

### `/news`

### Exemplo de Request:

```
POST /news
Host: https://devolunteer.onrender.com
Authorization: Bearer token
Content-type: application/json
```

### Corpo da Requisição:

```json
{
	"title": "Olá mundo2!",
	"description": "ola",
	"site": "https://www.google.com.br",
	"img": "https://thiscatdoesnotexist.com/"
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
	"title": "Olá mundo!",
	"description": "oieeeeee",
	"site": "https://www.google.com.br",
	"img": "https://thiscatdoesnotexist.com/",
	"user": {
		"id": "8f321719-c27c-4b6d-be59-54091dbe5270",
		"name": "Rafael Quadros",
		"email": "rafaelquadros@mail.com",
		"password": "$2a$10$f.zETVOFgVLLImgZvIqckOSdJnwZbtUcjKaBmUoEtu0YX7sTPWm.C",
		"github": "www.github.com",
		"linkedin": "www.linkedin.com",
		"profilePicture": "https://t.ctcdn.com.br/IVlt3nVuXYDVX4vyjzgborR84H0=/400x400/smart/i490793.jpeg",
		"location": "Brazil/BR - Minas Gerais/MG - Vespasiano",
		"isAdm": true,
		"isActive": true,
		"createdAt": "2023-01-17T19:41:17.877Z",
		"updatedAt": "2023-01-17T19:41:17.877Z"
	},
	"deletedAt": null,
	"id": "d3ede8d8-e7d8-41e4-91fa-8e52e43e3d65",
	"createdAt": "2023-01-17T20:00:58.591Z",
	"updatedAt": "2023-01-17T20:00:58.591Z"
}
```

### Possíveis Erros:

| Código do Erro   | Descrição          |
| ---------------- | ------------------ |
| 403 Forbidden    | User is not admin. |
| 401 Unauthorized | Invalid token.     |

---

### 4.2. **Listando Notícias**

[ Voltar aos Endpoints ](#5-endpoints)

### `/news`

### Exemplo de Request:

```
GET /news
Host: https://devolunteer.onrender.com
Authorization: Bearer token
Content-type: application/json
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
	{
		"id": "d3ede8d8-e7d8-41e4-91fa-8e52e43e3d65",
		"title": "Olá mundo!",
		"description": "oieeeeee",
		"site": "https://www.google.com.br",
		"img": "https://thiscatdoesnotexist.com/",
		"createdAt": "2023-01-17T20:00:58.591Z",
		"updatedAt": "2023-01-17T20:00:58.591Z",
		"deletedAt": null
	}
]
```

### Possíveis Erros:

| Código do Erro   | Descrição      |
| ---------------- | -------------- |
| 401 Unauthorized | Invalid token. |

---

### 4.3. **Listando notícias por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/news/:news_id`

### Exemplo de Request:

```
GET /news/d3ede8d8-e7d8-41e4-91fa-8e52e43e3d65
Host: https://devolunteer.onrender.com
Authorization: Bearer token
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                             |
| --------- | ------ | ------------------------------------- |
| user_id   | string | Identificador único da notícia (news) |

### Corpo da Requisição:

Necessita de apenas um campo para fazer a atualização parcial.

```json
vazio.
```

### Exemplo de Response:

```
200 OK
```

```json
{
	"id": "d3ede8d8-e7d8-41e4-91fa-8e52e43e3d65",
	"title": "Olá mundo!",
	"description": "oieeeeee",
	"site": "https://www.google.com.br",
	"img": "https://thiscatdoesnotexist.com/",
	"createdAt": "2023-01-17T20:00:58.591Z",
	"updatedAt": "2023-01-17T20:00:58.591Z",
	"deletedAt": null
}
```

### Possíveis Erros:

| Código do Erro | Descrição      |
| -------------- | -------------- |
| 404 Not Found  | ONG not found. |

---

### 4.4. **Atualizar notícias por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/new/:new_id`

### Exemplo de Request:

```
PATCH /news/d3ede8d8-e7d8-41e4-91fa-8e52e43e3d65
Host: https://devolunteer.onrender.com
Authorization: Bearer token
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                             |
| --------- | ------ | ------------------------------------- |
| user_id   | string | Identificador único da notícia (news) |

### Corpo da Requisição:

Necessita de apenas um campo para fazer a atualização parcial.

```json
{
	"description": "Noticia atualizada com sucesso"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
	"id": "d3ede8d8-e7d8-41e4-91fa-8e52e43e3d65",
	"title": "Olá mundo!",
	"description": "Noticia atualizada com sucesso",
	"site": "https://www.google.com.br",
	"img": "https://thiscatdoesnotexist.com/",
	"createdAt": "2023-01-17T20:00:58.591Z",
	"updatedAt": "2023-01-17T20:12:37.948Z",
	"deletedAt": null
}
```

### Possíveis Erros:

| Código do Erro   | Descrição      |
| ---------------- | -------------- |
| 401 Unauthorized | Invalid token. |
| 404 Not Found    | ONG not found. |

---

### 4.5. **Deletar notícia por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/news/:news_id`

### Exemplo de Request:

```
PATCH /news/d3ede8d8-e7d8-41e4-91fa-8e52e43e3d65
Host: https://devolunteer.onrender.com
Authorization: Bearer token
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                             |
| --------- | ------ | ------------------------------------- |
| user_id   | string | Identificador único da notícia (news) |

### Corpo da Requisição:

vazio.

### Exemplo de Response:

```
204 No Content
```

### Possíveis Erros:

| Código do Erro   | Descrição             |
| ---------------- | --------------------- |
| 401 Unauthorized | Jwt must be provided. |
| 403 Forbidden    | User is not admin.    |
| 404 Not Found    | news not found.       |

---

## 5. **Projects**

[ Voltar para os Endpoints ](#5-endpoints)

O objeto Project é definido como:

| Campo           | Tipo           | Descrição                            |
| --------------- | -------------- | ------------------------------------ |
| id              | string         | Identificador único do projeto       |
| title           | string         | Título do projeto.                   |
| description     | string         | A descrição do projeto.              |
| projectsPicture | string or null | Foto do projeto.                     |
| status          | boolean        | Status do projeto.                   |
| ong             | string         | Nome da ong que solicitou o projeto. |

---

### Endpoints

| Método | Rota                   | Descrição                                        |
| ------ | ---------------------- | ------------------------------------------------ |
| POST   | /projects              | Criação de um projeto.                           |
| GET    | /projects              | Lista todos os projetos.                         |
| PATCH  | /projects/:projects_id | Atualiza um projeto usando seu ID como parâmetro |
| DELETE | /projects/:projects_id | Deleta um projeto usando seu ID como parâmetro   |

---

### 5.1. **Criação de projetos**

[ Voltar para os Endpoints ](#5-endpoints)

### `/projects`

### Exemplo de Request:

```
POST /projects
Host: https://devolunteer.onrender.com
Authorization: Bearer token
Content-type: application/json
```

### Schema de Validação com Yup:

```javascript
projectsRequestSerializer: SchemaOf<IProjectRequest> = yup
  .object()
  .object()
  .shape({
    title: yup.string().required(),
    description: yup.string().required(),
    projectsPicture: yup.string().url(),
    status: yup.string(),
    ong: yup.object(),
  });
```

### Corpo da Requisição:

```json
{
	"title": "Teste 9",
	"description": "alo",
	"projectsPicture": "www.google.com",
	"status": "pendings"
}
```

OBS.: Chaves não presentes no schema serão removidas.

### Exemplo de Response:

```
201 Created
```

```json
{
	"title": "Teste ",
	"description": "alo",
	"projectsPicture": "www.google.com",
	"status": "pendings",
	"ong": {
		"id": "5f43af6e-9230-41ef-a246-eb91befdecba",
		"companyName": "Another1",
		"email": "another1@email.com",
		"password": "$2a$10$bHuaJI/wcI0chVz4yWia/O6975TFW2GZqEwgU0hdkIVfiX3HRiU6K",
		"cnpj": "12345678901270",
		"phone": 219765478,
		"ownerName": null,
		"profilePicture": null,
		"github": null,
		"linkedin": null,
		"isActive": true,
		"createdAt": "2023-01-18T17:45:56.385Z",
		"updatedAt": "2023-01-18T17:45:56.385Z"
	},
	"id": "7d8cb817-b189-466a-8d57-b14be17e9133"
}
```

### Possíveis Erros:

| Código do Erro   | Descrição          |
| ---------------- | ------------------ |
| 403 Forbidden    | User is not admin. |
| 401 Unauthorized | Invalid token.     |

---

### 5.2. **Listando Projetos**

[ Voltar aos Endpoints ](#5-endpoints)

### `/projects`

### Exemplo de Request:

```
GET /projects
Host: https://devolunteer.onrender.com
Authorization: Bearer token
Content-type: application/json
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
	{
		"id": "1f45b37f-7ff4-4c4f-bd94-00181faf173d",
		"title": "Teste1",
		"description": "alo",
		"projectsPicture": "www.google.com",
		"status": "pendings"
	}
]
```

### Possíveis Erros:

| Código do Erro   | Descrição      |
| ---------------- | -------------- |
| 401 Unauthorized | Invalid token. |

---

### 5.3. **Atualizar projetos por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/projects/:projects_id`

### Exemplo de Request:

```
PATCH /projects/d3ede8d8-e7d8-41e4-91fa-8e52e43e3d65
Host: https://devolunteer.onrender.com
Authorization: Bearer token
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro  | Tipo   | Descrição                                |
| ---------- | ------ | ---------------------------------------- |
| project_id | string | Identificador único do projeto (project) |

### Corpo da Requisição:

Necessita de apenas um campo para fazer a atualização parcial.

```json
{
	"description": "Projeto atualizado com sucesso"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
	"id": "d3ede8d8-e7d8-41e4-91fa-8e52e43e3d65",
	"title": "Olá mundo!",
	"description": "Projeto atualizado com sucesso",
	"site": "https://www.google.com.br",
	"img": "https://thiscatdoesnotexist.com/",
	"createdAt": "2023-01-17T20:00:58.591Z",
	"updatedAt": "2023-01-17T20:12:37.948Z",
	"deletedAt": null
}
```

### Possíveis Erros:

| Código do Erro   | Descrição      |
| ---------------- | -------------- |
| 401 Unauthorized | Invalid token. |
| 404 Not Found    | ONG not found. |

---

### 5.4. **Deletar projeto por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/projects/:projects_id`

### Exemplo de Request:

```
DELETE /projects/d3ede8d8-e7d8-41e4-91fa-8e52e43e3d65
Host: https://devolunteer.onrender.com
Authorization: Bearer token
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro  | Tipo   | Descrição                                |
| ---------- | ------ | ---------------------------------------- |
| project_id | string | Identificador único do projeto (project) |

### Corpo da Requisição:

vazio.

### Exemplo de Response:

```
204 No Content
```

### Possíveis Erros:

| Código do Erro   | Descrição          |
| ---------------- | ------------------ |
| 401 Unauthorized | invalid token.     |
| 404 Not Found    | Project not found. |

---

## 6. **Tasks**

[ Voltar para os Endpoints ](#5-endpoints)

O objeto Task é definido como:

| Campo  | Tipo    | Descrição                            |
| ------ | ------- | ------------------------------------ |
| id     | string  | Identificador único da tarefa.       |
| title  | string  | Título da tarefa.                    |
| status | boolean | status da tarefa.                    |
| ong    | string  | Nome da ong que solicitou o projeto. |

---

### Endpoints

| Método | Rota                | Descrição                                        |
| ------ | ------------------- | ------------------------------------------------ |
| POST   | /tasks              | Criação de uma tarefa.                           |
| GET    | /tasks              | Lista todos as tarefas.                          |
| PATCH  | /tasks/:projects_id | Atualiza uma tarefa usando seu ID como parâmetro |
| DELETE | /tasks/:projects_id | Deleta uma tarefa usando seu ID como parâmetro   |

---

### 6.1. **Criação de tarefas**

[ Voltar para os Endpoints ](#5-endpoints)

### `/tasks`

### Exemplo de Request:

```
POST /tasks/projects/e26def3f-29e6-4d5b-b3ac-b273c6b65ffc
Host: https://devolunteer.onrender.com
Authorization: Bearer token
Content-type: application/json
```

### Corpo da Requisição:

```json
{
	"title": "Criar tarefa"
}
```

OBS.: Chaves não presentes no schema serão removidas.

### Parâmetros da Requisição:

| Parâmetro  | Tipo   | Descrição                                                                 |
| ---------- | ------ | ------------------------------------------------------------------------- |
| project_id | string | Identificador único da project a ser linkado na criação da tarefa (tasks) |

### Exemplo de Response:

```
201 Created
```

```json
{
	"id": "970f65a9-e234-42fd-9d55-caab59973bea",
	"title": "Projeto atualizado com sucesso",
	"description": "alo",
	"projectsPicture": "www.google.com",
	"status": "pendings",
	"tasks": [
		{
			"id": "bc182c1d-a451-4c39-ab01-50989f5b3791",
			"created_in": "2023-01-18T18:45:26.128Z",
			"task": {
				"id": "e26def3f-29e6-4d5b-b3ac-b273c6b65ffc",
				"title": "Criar tarefa",
				"status": "pendings"
			}
		}
	]
}
```

### Possíveis Erros:

| Código do Erro   | Descrição             |
| ---------------- | --------------------- |
| 401 Unauthorized | Jwt must be provided. |
| 403 Forbidden    | User is not admin.    |
| 409 Confilct     | Task already exists.  |

---

### 6.2. **Listando tarefas**

[ Voltar aos Endpoints ](#5-endpoints)

### `/tasks`

### Exemplo de Request:

```
GET /tasks/projects/e26def3f-29e6-4d5b-b3ac-b273c6b65ffc
Host: https://devolunteer.onrender.com
Authorization: Bearer token
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro  | Tipo   | Descrição                                                                     |
| ---------- | ------ | ----------------------------------------------------------------------------- |
| project_id | string | Identificador único do projeto em que todas as tarefas serão listadas (tasks) |

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
	"id": "970f65a9-e234-42fd-9d55-caab59973bea",
	"title": "Projeto atualizado com sucesso",
	"description": "alo",
	"projectsPicture": "www.google.com",
	"status": "pendings",
	"tasks": [
		{
			"id": "bc182c1d-a451-4c39-ab01-50989f5b3791",
			"created_in": "2023-01-18T18:45:26.128Z",
			"task": {
				"id": "e26def3f-29e6-4d5b-b3ac-b273c6b65ffc",
				"title": "Criar tarefa",
				"status": "pendings"
			}
		}
	]
}
```

### Possíveis Erros:

| Código do Erro   | Descrição      |
| ---------------- | -------------- |
| 401 Unauthorized | Invalid token. |

---

### 6.3. **Atualizar tarefas por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/tasks/:tasks_id`

### Exemplo de Request:

```
PATCH /tasks/e26def3f-29e6-4d5b-b3ac-b273c6b65ffc
Host: https://devolunteer.onrender.com
Authorization: Bearer token
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                                |
| --------- | ------ | ---------------------------------------- |
| task_id   | string | Identificador único do projeto (project) |

### Corpo da Requisição:

Necessita de apenas um campo para fazer a atualização parcial.

```json
{
	"description": "criar tarefa editado"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
	"id": "e26def3f-29e6-4d5b-b3ac-b273c6b65ffc",
	"title": "criar tarefa editado",
	"status": "pendings"
}
```

### Possíveis Erros:

| Código do Erro   | Descrição             |
| ---------------- | --------------------- |
| 401 Unauthorized | jwt must be provided. |
| 403 Frobidden    | User is not admin.    |
| 404 Not Found    | Task not found.       |

---

### 6.4. **Deletar tarefas por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/tasks/:tasks_id`

### Exemplo de Request:

```
DELETE /tasks/e26def3f-29e6-4d5b-b3ac-b273c6b65ffc
Host: https://devolunteer.onrender.com
Authorization: Bearer token
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                            |
| --------- | ------ | ------------------------------------ |
| task_id   | string | Identificador único da tarefa (task) |

### Corpo da Requisição:

vazio.

### Exemplo de Response:

```
204 No Content
```

### Possíveis Erros:

| Código do Erro   | Descrição             |
| ---------------- | --------------------- |
| 401 Unauthorized | Jwt must be provided. |
| 403 Forbidden    | User is not admin.    |
| 404 Not Found    | Task not found.       |

---

## 7. **Technologies**

[ Voltar para os Endpoints ](#5-endpoints)

O objeto technologies é definido como:

| Campo | Tipo   | Descrição                          |
| ----- | ------ | ---------------------------------- |
| id    | string | Identificador único da tecnologia. |
| name  | string | nome da tecnologia.                |

---

### Endpoints

| Método | Rota                               | Descrição                                                  |
| ------ | ---------------------------------- | ---------------------------------------------------------- |
| POST   | /users/technologies/:technology_id | Adiciona aos dados do usuário as technologias que conhece. |
| GET    | /technologies                      | lista todas as tecnologias disponiveis.                    |
| DELETE | /users/technologies/:technology_id | Exclui dos dados do usuário as technologias que escolher.  |

---

### 7.1. **Adicionar tecnologias ao usuário**

[ Voltar para os Endpoints ](#5-endpoints)

### `/users/technologies/:technology_id`

### Exemplo de Request:

```
POST /users/technologies/9f1fdea1-a86e-44cf-9a08-fd1b1a6bad96
Host: https://devolunteer.onrender.com
Authorization: Bearer token
Content-type: application/json
```

### Corpo da Requisição:

```json
vazio
```

### Parâmetros da Requisição:

| Parâmetro     | Tipo   | Descrição                                                                          |
| ------------- | ------ | ---------------------------------------------------------------------------------- |
| technology_id | string | Identificador único da tecnologia que o usuário escolher adicionar. (technologies) |

### Exemplo de Response:

```
200 OK
```

```json
Vazio
```

### Possíveis Erros:

| Código do Erro   | Descrição             |
| ---------------- | --------------------- |
| 401 Unauthorized | Invalid id.           |
| 401 Unauthorized | Jwt must be provided. |

---

### 7.2. **Listando todas tecnologias existentes**

[ Voltar para os Endpoints ](#5-endpoints)

### `/technologies`

### Exemplo de Request:

```
POST /technologies
Host: https://devolunteer.onrender.com
Authorization: Bearer token
Content-type: application/json
```

### Corpo da Requisição:

```json
vazio
```

### Exemplo de Response:

```
200 OK
```

```json
Vazio
```

### Possíveis Erros:

| Código do Erro   | Descrição      |
| ---------------- | -------------- |
| 401 Unauthorized | Invalid token. |

[ Voltar para os Endpoints ](#5-endpoints)
[ Voltar para o topo ](#tabela-de-conteúdos)

### 7.3. **Deletar tecnologias por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users/technology/:technology_id`

### Exemplo de Request:

```
DELETE /users/technologies/9f1fdea1-a86e-44cf-9a08-fd1b1a6bad96
Host: https://devolunteer.onrender.com
Authorization: Bearer token
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro     | Tipo   | Descrição                                                     |
| ------------- | ------ | ------------------------------------------------------------- |
| technology_id | string | Identificador único da tecnologia a ser removida (technology) |

### Corpo da Requisição:

vazio.

### Exemplo de Response:

```
204 No Content
```

### Possíveis Erros:

| Código do Erro   | Descrição       |
| ---------------- | --------------- |
| 401 Unauthorized | invalid token.  |
| 403 Forbidden    | invalid.        |
| 404 Not Found    | Task not found. |

---

## 8. **User tasks**

[ Voltar para os Endpoints ](#5-endpoints)

O objeto tasks é definido como:

| Campo  | Tipo    | Descrição                            |
| ------ | ------- | ------------------------------------ |
| id     | string  | Identificador único da tarefa.       |
| title  | string  | Título da tarefa.                    |
| status | boolean | status da tarefa.                    |
| ong    | string  | Nome da ong que solicitou o projeto. |

---

### Endpoints

| Método | Rota                  | Descrição                                              |
| ------ | --------------------- | ------------------------------------------------------ |
| POST   | /users/tasks/:task_id | altera o status da task de "pendings" para "develop".  |
| POST   | /users/tasks/:task_id | altera o status da task de "develop" para "concluded". |

---

### 8.1. **Alterar o status para desenvolvimento**

[ Voltar para os Endpoints ](#5-endpoints)

### `/users/tasks/:task_id`

### Exemplo de Request:

```
POST /users/tasks/e26def3f-29e6-4d5b-b3ac-b273c6b65ffc1fdea1-a86e-44cf-9a08-fd1b1a6bad96b273c6b65ffc
Host: https://devolunteer.onrender.com
Authorization: Bearer token
Content-type: application/json
```

### Corpo da Requisição:

```json
vazio
```

OBS.: Chaves não presentes no schema serão removidas.

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                                                       |
| --------- | ------ | --------------------------------------------------------------- |
| task_id   | string | Identificador único da tarefa cujo status será alterado (tasks) |

### Exemplo de Response:

```
200 OK
```

```json
Vazio
```

### Possíveis Erros:

| Código do Erro   | Descrição          |
| ---------------- | ------------------ |
| 400 Bad request  | Invalid id.        |
| 401 Unauthorized | Invalid token.     |
| 401 Unauthorized | Invalid signature. |

---

### 8.2. **Alterar o status para Concluido**

[ Voltar para os Endpoints ](#5-endpoints)

### `/users/tasks/:task_id`

### Exemplo de Request:

```
POST /users/tasks/e26def3f-29e6-4d5b-b3ac-b273c6b65ffc1fdea1-a86e-44cf-9a08-fd1b1a6bad96b273c6b65ffc
Host: https://devolunteer.onrender.com
Authorization: Bearer token
Content-type: application/json
```

### Corpo da Requisição:

```json
vazio
```

OBS.: Chaves não presentes no schema serão removidas.

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                                                       |
| --------- | ------ | --------------------------------------------------------------- |
| task_id   | string | Identificador único da tarefa cujo status será alterado (tasks) |

### Exemplo de Response:

```
200 OK
```

```json
Vazio
```

### Possíveis Erros:

| Código do Erro   | Descrição          |
| ---------------- | ------------------ |
| 400 Bad request  | Invalid id.        |
| 401 Unauthorized | Invalid token.     |
| 401 Unauthorized | Invalid signature. |

[ Voltar para os Endpoints ](#5-endpoints)
[ Voltar para o topo ](#tabela-de-conteúdos)

---
