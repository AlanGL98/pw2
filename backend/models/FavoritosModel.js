'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Opinion = mongoose.model('Opinion');
var Usuario = mongoose.model('Usuario');

var FavoritoSchema = Schema({
    // Atributos comunes para favoritos
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: Usuario, required: true },
    opinion_id: { type: mongoose.Schema.Types.ObjectId, ref: Opinion, required: true },
    active: { type: Boolean },
    created_at: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Favorito', FavoritoSchema);