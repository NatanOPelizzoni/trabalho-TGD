const express = require('express');
const route = express.Router();

const services = require('../services/render');

const autorController = require('../controller/autorController');
const alunoController = require('../controller/alunoController');
const livroController = require('../controller/livroController');
const locacaoController = require('../controller/locacaoController');

//Rota Index

/**
*  @description Root Route
*  @method GET /
*/
route.get('/', services.index);

//Rotas Autor

/**
*  @description autor
*  @method GET /autor
*/
route.get('/autor', services.autor);

/**
*  @description add autor
*  @method GET /add_autor
*/
route.get('/add_autor', services.add_autor);

/**
*  @description for update_autor
*  @method GET /update_autor
*/
route.get('/update_autor', services.update_autor);

//Rotas Aluno

/**
*  @description aluno
*  @method GET /aluno
*/
route.get('/aluno', services.aluno);

/**
*  @description add aluno
*  @method GET /add_aluno
*/
route.get('/add_aluno', services.add_aluno);
 
/**
*  @description for update_aluno
*  @method GET /update_aluno
*/
route.get('/update_aluno', services.update_aluno);

//Rotas Livro

/**
*  @description livro
*  @method GET /livro
*/
route.get('/livro', services.livro);

/**
*  @description add livro
*  @method GET /add_livro
*/
route.get('/add_livro', services.add_livro);
 
/**
*  @description for update_livro
*  @method GET /update_livro
*/
route.get('/update_livro', services.update_livro);

//Rotas Locação

/**
*  @description locacao
*  @method GET /locacao
*/
route.get('/locacao', services.locacao);

/**
*  @description add locacao
*  @method GET /add_locacao
*/
route.get('/add_locacao', services.add_locacao);
 
/**
*  @description for update_locacao
*  @method GET /update_locacao
*/
route.get('/update_locacao', services.update_locacao);


//API

//Rotas Autor

route.post('/api/autor', autorController.create);
route.get('/api/autor', autorController.find);
route.put('/api/autor/:id', autorController.update);
route.delete('/api/autor/:id', autorController.delete);

//Rotas Aluno

route.post('/api/aluno', alunoController.create);
route.get('/api/aluno', alunoController.find);
route.put('/api/aluno/:id', alunoController.update);
route.delete('/api/aluno/:id', alunoController.delete);

//Rotas Livro

route.post('/api/livro', livroController.create);
route.get('/api/livro', livroController.find);
route.put('/api/livro/:id', livroController.update);
route.delete('/api/livro/:id', livroController.delete);

//Rotas Locação

route.post('/api/locacao', locacaoController.create);
route.get('/api/locacao', locacaoController.find);
route.put('/api/locacao/:id', locacaoController.update);
route.delete('/api/locacao/:id', locacaoController.delete);


module.exports = route