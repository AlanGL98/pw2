'use strict'

var express = require('express');
var UsuariosController = require('../controllers/UsuariosController');

var router = express.Router();

var multipart = require('connect-multiparty');
var mp_upload = multipart({ uploadDir: './upload/usuarios' });

// Rutas utiles
router.get('/usuarios', UsuariosController.getAll);
router.get('/usuarios/:id', UsuariosController.get);
router.post('/usuarios', UsuariosController.create);
router.post('/usuarios/login', UsuariosController.login);
router.put('/usuarios/:id', UsuariosController.update);
router.delete('/usuarios/:id', UsuariosController.delete);
router.post('/usuarios/add-image/:id', mp_upload, UsuariosController.addImage);
router.get('/usuarios/get-image/:image', UsuariosController.getImage);

module.exports = router;