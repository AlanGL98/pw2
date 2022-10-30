'use strict'

var express = require('express');
var LikeComentarioService = require('../controllers/LikeComentarioController');


var router = express.Router();

// Rutas utiles
router.get('/like-comentario',LikeComentarioService.get);
router.post('/like-comentario', LikeComentarioService.create);
router.delete('/like-comentario/:id', LikeComentarioService.delete);
module.exports = router;