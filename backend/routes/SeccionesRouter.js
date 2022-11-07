'use strict'

var express = require('express');
var SeccionesController = require('../controllers/SeccionesController');

var router = express.Router();

// Rutas utiles
router.get('/secciones', SeccionesController.getAll);
router.get('/secciones/:id', SeccionesController.get);
router.post('/secciones', SeccionesController.create);
router.patch('/secciones/:id', SeccionesController.update);
router.delete('/secciones/:id', SeccionesController.delete);

module.exports = router;