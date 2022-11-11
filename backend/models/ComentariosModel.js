'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Opinion = mongoose.model('Opinion');
var Usuario = mongoose.model('Usuario');

var ComentarioSchema = Schema({
    // Atributos comunes para Imagen
    comment: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },

    // Atributos relacionales
    opinion_id:{type:Opinion.ObjectId, ref:'Opinion'},
    user_id:{type:Usuario.ObjectId, ref:'Usuario'},
});

module.exports = mongoose.model('Comentario', ComentarioSchema);