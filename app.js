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
var comentarios_routes = require('./routes/ComentariosRoutes');
var roles_routes = require('./routes/RolesRoutes');
var top_players_routes= require('./routes/TopPlayersRoutes');
var like_comentario_routes= require('./routes/LikeComentarioRoutes');
var calificacion_routes= require('./routes/CalificacionRoutes');
var favoritos_routes= require('./routes/FavoritosRoutes');
var imagenes_routes= require('./routes/ImagenesRoutes');

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
app.use('/yopino', comentarios_routes);
app.use('/yopino', roles_routes);
app.use('/yopino', top_players_routes);
app.use('/yopino', like_comentario_routes);
app.use('/yopino', calificacion_routes);
app.use('/yopino', favoritos_routes);
app.use('/yopino', imagenes_routes);
// Exportar modulo (fichero actual)
module.exports = app;