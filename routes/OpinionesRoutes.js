'use strict'

var express = require('express');
var OpinionesService = require('../controllers/OpinionesController');


var router = express.Router();

// Rutas utiles
router.get('/opiniones',OpinionesService.getOpiniones );

module.exports = router;