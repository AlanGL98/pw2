'use strict'

var express = require('express');
var TopPlayersService = require('../controllers/TopPlayersController');

var router = express.Router();

var multipart = require('connect-multiparty');
var mp_upload = multipart({ uploadDir: './upload/top_players' });

// Rutas utiles
router.get('/top-players',TopPlayersService.getAll);
router.get('/top-players/:id', TopPlayersService.get);
router.post('/top-players', TopPlayersService.create);
router.put('/top-players/:id', TopPlayersService.update);
router.delete('/top-players/:id', TopPlayersService.delete);
router.post('/top-players/add-image/:id', mp_upload, TopPlayersService.addImage);
router.get('/top-players/get-image/:image', TopPlayersService.getImage);

module.exports = router;