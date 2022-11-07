'use strict'

var mongoose = require('mongoose');
var Schema= mongoose.Schema;
var Usuario = mongoose.model('Usuario');
var Comentario = mongoose.model('Comentario');

var LikeSchema = Schema({
    user_id:{type:Schema.ObjectId, ref:'Usuario'},
    liked:Boolean,
    comment_id:{type:Schema.ObjectId, ref:'Comentario'}

});
module.exports = mongoose.model('Like', LikeSchema);