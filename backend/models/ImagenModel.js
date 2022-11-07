'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ImagenSchema = Schema({
    // Atributos comunes para Imagen
    image_path: String,
    created_at: { type: Date, default: Date.now },

    // Atributos relacionales
    id_opinion: String
});

module.exports = mongoose.model('Imagen', ImagenSchema);