'use strict'

var express = require('express');
var CalificacionService = require('../controllers/CalificacionController');


var router = express.Router();

// Rutas utiles
router.get('/calificacion',CalificacionService.get);
router.post('/calificacion', CalificacionService.create);
router.delete('/calificacion/:id', CalificacionService.delete);
module.exports = router;