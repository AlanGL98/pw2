'use strict'

var express = require('express');
var TopPlayersService = require('../controllers/TopPlayersController');


var router = express.Router();

// Rutas utiles
router.get('/top-players',TopPlayersService.getTopPlayers);
router.post('/top-players', TopPlayersService.createTopPlayers);
router.patch('/top-players/:id', TopPlayersService.updateTopPlayers);
router.delete('/top-players/:id', TopPlayersService.deleteTopPlayers);
module.exports = router;