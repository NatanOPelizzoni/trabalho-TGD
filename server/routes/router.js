const express = require('express');
const route = express.Router();

const services = require('../services/render');

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

module.exports = route