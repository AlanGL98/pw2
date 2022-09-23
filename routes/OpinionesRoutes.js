'use strict'

var express = require('express');
var OpinionesService = require('../controllers/OpinionesController');

var router = express.Router();

// Rutas utiles
router.get('/opiniones', OpinionesService.getAll);
router.get('/opiniones/:id', OpinionesService.get);
router.post('/opiniones', OpinionesService.create);
router.patch('/opiniones/:id', OpinionesService.update);
router.delete('/opiniones/:id', OpinionesService.delete);

module.exports = router;