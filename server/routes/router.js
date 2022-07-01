const express = require('express');
const route = express.Router();

const services = require('../services/render');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description autor
 *  @method GET /autor
 */
route.get('/autor', services.autor);

/**
 *  @description add autores
 *  @method GET /add_autor
 */
route.get('/add_autor', services.add_autor);

/**
 *  @description for update_autor
 *  @method GET /update_autor
 */
route.get('/update_autor', services.update_autor);

module.exports = route