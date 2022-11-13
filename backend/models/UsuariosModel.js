'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Roles = mongoose.model('Roles');

var UsuarioSchema = Schema({
    // Atributos comunes para Usuario
    name: String,
    last_name1: String,
    last_name2: String,
    username: String,
    email: { type: String, unique: true, required: true },
    password: String,
    image: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    birthdate: { type: Date, default: Date.now },

    // Atributos relacionales
    id_rol: { type: mongoose.Schema.Types.ObjectId, ref: Roles },
});

module.exports = mongoose.model('Usuario', UsuarioSchema);