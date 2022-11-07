'use strict'

var mongoose = require('mongoose');
var Schema= mongoose.Schema;
var Categorias = mongoose.model('Categorias');
var Usuario = mongoose.model('Usuario'); 

var OpinionSchema= Schema({
    title:String,
    sinopsis:String,
    contenido:String,
    category_id:{type:Schema.ObjectId, ref:'Categorias'},
    created_by:{type:Schema.ObjectId, ref:'Usuario'},
    created_at: {type:Date , default: Date.now},
    updated_at: {type:Date , default: Date.now}

});
module.exports = mongoose.model('Opinion', OpinionSchema);