const express = require('express');

const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');

const routes = express.Router();

/** 
 * Rota / Recurso
 */

/**
 *  Métodos HTTP: 
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: parâmetros nomeados enviados na rota após o "?" (Filtros - nomeColuna=filtro - ; paginação - page=numeroPage -)
 * Route Params: parâmetros utilizados para identificar recursos (Exemplo: /users/:id)
 * Request body: Corpo da requisição, utilizado para criar ou alterar recursos 
 */

/**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB
  */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*')
 */

routes.post('/sessions', sessionController.create);

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/profile', profileController.index);

routes.post('/incidents', incidentController.create);
routes.get('/incidents', incidentController.index);
routes.delete('/incidents/:id', incidentController.delete);

module.exports = routes;