'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CagetoriaSchema = Schema({
    // Atributos comunes para Categoria
    name: String,
    order: Number,
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Categoria', CagetoriaSchema);