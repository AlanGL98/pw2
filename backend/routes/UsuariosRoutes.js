'use strict'

var express = require('express');
var UsuariosController = require('../controllers/UsuariosController');

var router = express.Router();

// Rutas utiles
router.get('/usuarios', UsuariosController.getAll);
router.get('/usuarios/:id', UsuariosController.get);
router.post('/usuarios', UsuariosController.create);
router.put('/usuarios/:id', UsuariosController.update);
router.delete('/usuarios/:id', UsuariosController.delete);

module.exports = router;