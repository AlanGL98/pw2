'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Opinion = mongoose.model('Opiniones');

var ImagenSchema = Schema({
    // Atributos comunes para Imagen
    image_path: String,
    created_at: { type: Date, default: Date.now },

    // Atributos relacionales
    opinion_id: { type: mongoose.Schema.Types.ObjectId, ref: Opinion }
});

module.exports = mongoose.model('Imagenes', ImagenSchema);