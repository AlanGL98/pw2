'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategoriaSchema = Schema({
    // Atributos comunes para Categoria
    name: String,
    order: Number,
    created_at: { type: Date, default: Date.now },
    image: String
});

module.exports = mongoose.model('Categorias', CategoriaSchema);