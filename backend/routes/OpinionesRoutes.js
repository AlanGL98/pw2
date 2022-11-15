'use strict'

var express = require('express');
var OpinionesService = require('../controllers/OpinionesController');

var router = express.Router();

var multipart = require('connect-multiparty');
var mp_upload = multipart({ uploadDir: './upload/opiniones' });

// Rutas utiles
router.get('/opiniones', OpinionesService.getAll);
router.get('/opiniones/:id', OpinionesService.get);
router.post('/opiniones', OpinionesService.create);
router.put('/opiniones/:id', OpinionesService.update);
router.delete('/opiniones/:id', OpinionesService.delete);
router.post('/opiniones/add-image/:id', mp_upload, OpinionesService.addImage);
router.get('/opiniones/get-image/:image', OpinionesService.getImage);

module.exports = router;