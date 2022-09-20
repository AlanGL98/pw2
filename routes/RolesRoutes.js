'use strict'

var express = require('express');
var RolesService = require('../controllers/RolesController');


var router = express.Router();

// Rutas utiles
router.get('/roles',RolesService.getRoles);

module.exports = router;