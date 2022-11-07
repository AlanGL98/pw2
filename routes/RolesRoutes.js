'use strict'

var express = require('express');
var RolesService = require('../controllers/RolesController');


var router = express.Router();

// Rutas utiles
router.get('/roles',RolesService.getRoles);
//router.get('/roles/:id', RolesService.getRoles);
//router.post('/roles', RolesService.createRol);

module.exports = router;