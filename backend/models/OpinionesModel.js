'use strict'

var mongoose = require('mongoose');
var Schema= mongoose.Schema;
var Categorias = mongoose.model('Categorias');
var Usuario = mongoose.model('Usuario'); 

var OpinionSchema= Schema({
    title:{type:String,required: true},
    sinopsis:{type:String,required: false},
    contenido:{type:String,required: true},
    category_id:{type:Categorias.ObjectId, ref:'Categorias',required: true},
    image: {type:String,required: false},
    created_by:{type:Usuario.ObjectId, ref:'Usuario',required: true},
    created_at: {type:Date , default: Date.now},
    updated_at: {type:Date , default: Date.now}

});
module.exports = mongoose.model('Opinion', OpinionSchema);