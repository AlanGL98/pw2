'use strict'

var express = require('express');
var TopPlayersService = require('../controllers/TopPlayersController');


var router = express.Router();

// Rutas utiles
router.get('/top-players',TopPlayersService.getAll);
router.get('/top-players/:id', TopPlayersService.get);
router.post('/top-players', TopPlayersService.create);
router.put('/top-players/:id', TopPlayersService.update);
router.delete('/top-players/:id', TopPlayersService.delete);
module.exports = router;