'use strict'

var express = require('express');
var ImagenesService = require('../controllers/ImagenesController');


var router = express.Router();

// Rutas utiles
router.get('/opiniones/imagenes',ImagenesService.get);
router.post('/opiniones/imagenes', ImagenesService.create);
router.delete('/opiniones/imagenes/:id', ImagenesService.delete);
module.exports = router;