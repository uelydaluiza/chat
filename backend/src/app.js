const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

/*
 *  Rota / Recurso
 */

/*
 *  Métodos HTTP
 *
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar/enviar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros
 * 
 * Query Params: Parâmetros nomeados que enviados na rota após o "?" (filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * Tipos de banco de dados
 * 
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB 
 */

/**
* Tipos de conexão
* 
* Driver: "SELECT * FROM users"
* Query Builder: table('user').select('*').where()
*/
module.exports = app;