'use strict'

var express = require('express');
var FavoritosService = require('../controllers/FavoritosController');


var router = express.Router();

// Rutas utiles
router.get('/favoritos',FavoritosService.get);
router.post('/favoritos', FavoritosService.create);
router.delete('/favoritos/:id', FavoritosService.delete);
module.exports = router;