'use strict'

var express = require('express');
var SeccionesController = require('../controllers/SeccionesController');

var router = express.Router();

var multipart = require('connect-multiparty');
var mp_upload = multipart({ uploadDir: './upload/secciones' });

// Rutas utiles
router.get('/secciones', SeccionesController.getAll);
router.get('/secciones/:id', SeccionesController.get);
router.post('/secciones', SeccionesController.create);
router.put('/secciones/:id', SeccionesController.update);
router.delete('/secciones/:id', SeccionesController.delete);
router.post('/secciones/add-image/:id', mp_upload, SeccionesController.addImage);
router.get('/secciones/get-image/:id', SeccionesController.getImage);

module.exports = router;