'use strict'

var mongoose = require('mongoose');
var Schema= mongoose.Schema;

var FavoritoSchema= Schema({
    // Atributos comunes para Imagen
    user_id:{type:Schema.ObjectId, ref:'Usuario'},
    active: Boolean,
    date:{type:Date},
    created_at: {type:Date , default: Date.now}
});
module.exports = mongoose.model('Favorito', FavoritoSchema);