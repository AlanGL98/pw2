'use strict'

var express = require('express');
var ComentariosController = require('../controllers/ComentariosController');

var router = express.Router();

// Rutas utiles
router.get('/comentarios', ComentariosController.getAll);
router.get('/comentarios/:id', ComentariosController.get);
router.get('/comentarios/opiniones/:id', ComentariosController.getByOpinion);
router.post('/comentarios', ComentariosController.create);
router.patch('/comentarios/:id', ComentariosController.update);
router.delete('/comentarios/:id', ComentariosController.delete);

module.exports = router;