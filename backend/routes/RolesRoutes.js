'use strict'

var express = require('express');
var RolesService = require('../controllers/RolesController');


var router = express.Router();

// Rutas utiles
router.get('/roles', RolesService.getAll);
router.get('/roles/:id', RolesService.get);
//router.post('/roles', RolesService.createRol);

module.exports = router;