'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Opinion = mongoose.model('Opiniones');
var Usuario = mongoose.model('Usuarios');

var ComentarioSchema = Schema({
    // Atributos comunes para Imagen
    comment: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },

    // Atributos relacionales
    opinion_id: { type: mongoose.Schema.Types.ObjectId, ref: Opinion },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: Usuario },
});

module.exports = mongoose.model('Comentarios', ComentarioSchema);