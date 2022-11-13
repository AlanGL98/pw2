'use strict'

var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
var Schema = mongoose.Schema;
var Opinion = mongoose.model('Opinion');

var CalificacionSchema = Schema({
    // Atributos comunes para Calificacion
    valoraciones: Number,
    promedio: Number,
    estrellas: Number,
    created_at: { type: Date, default: Date.now },
    opinion_id:{type:mongoose.Schema.Types.ObjectId, ref:Opinion}
});

module.exports = mongoose.model('Calificacion', CalificacionSchema);