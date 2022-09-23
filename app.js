'use strict'

// Cargar modulos de node para crear servidor
var express = require('express');
var bodyParser = require('body-parser');

// Ejecurar Express
var app = express();

// Cargar ficheros rutas
var test_routes = require('./routes/test');
var usuarios_routes = require('./routes/UsuariosRoutes');
var opiniones_routes = require('./routes/OpinionesRoutes');
var roles_routes = require('./routes/RolesRoutes');

// Middlewares
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());
// app.use(express.json());

// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

// Añadir prefijos o rutas
app.use('/yopino', test_routes);
app.use('/yopino', usuarios_routes);
app.use('/yopino', opiniones_routes);
app.use('/yopino', roles_routes);

// Exportar modulo (fichero actual)
module.exports = app;