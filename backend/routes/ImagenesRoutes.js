'use strict'

var express = require('express');
var ImagenesService = require('../controllers/ImagenesController');

var router = express.Router();

var multipart = require('connect-multiparty');
var mp_upload = multipart({ uploadDir: './upload/imagenes' });

// Rutas utiles
router.get('/imagenes',ImagenesService.getAll);
router.get('/imagenes/:id',ImagenesService.get);
router.post('/imagenes', ImagenesService.create);
router.delete('/imagenes/:id', ImagenesService.delete);
router.post('/imagenes/add-image/:id', mp_upload, ImagenesService.addImage);
router.get('/imagenes/get-image/:image', ImagenesService.getImage);

module.exports = router;