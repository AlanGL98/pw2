'use strict' //Uso estricto para que el lenguaje sea mas moderno.

var app = require('./app');
var port = 3900;

// Crear servidor y ponerme a escuchar peticiones HTTP
app.listen(port, () => {
    console.log('Servidor corriendo en ' + port);
});






