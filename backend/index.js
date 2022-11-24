require('dotenv').config()
'use strict' //Uso estricto para que el lenguaje sea mas moderno.

var app = require('./app');
const db = require('./config/db');
var cors = require('cors');
const { DBURL } = require('./consts.json');
app.use(cors());
//HACEMOS LA CONEXIÓN
db(DBURL);

var port = 3900;

// Crear servidor y ponerme a escuchar peticiones HTTP
app.listen(port, () => {
    console.log('Servidor corriendo en ' + port);
});






