'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ComentarioSchema = Schema({
    // Atributos comunes para Imagen
    comment: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },

    // Atributos relacionales
    id_opinion: String,
    id_usuario: String,
});

module.exports = mongoose.model('Comentario', ComentarioSchema);