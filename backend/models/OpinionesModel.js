'use strict'

var mongoose = require('mongoose');
var Schema= mongoose.Schema;
var Categorias = mongoose.model('Categorias');
var Usuario = mongoose.model('Usuario'); 

var OpinionSchema= Schema({
    title:{type:String,required: true},
    sinopsis:{type:String,required: false},
    contenido:{type:String,required: true},
    category_id:{type:Schema.ObjectId, ref:'Categorias',required: true},
    created_by:{type:Schema.ObjectId, ref:'Usuario',required: true},
    created_at: {type:Date , default: Date.now},
    updated_at: {type:Date , default: Date.now}

});
module.exports = mongoose.model('Opinion', OpinionSchema);