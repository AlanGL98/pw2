'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CalificacionSchema = Schema({
    // Atributos comunes para Calificacion
    valoraciones: Number,
    promedio: Number,
    estrellas: Number,
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Calificacion', CalificacionSchema);