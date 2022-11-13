'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Usuario = mongoose.model('Usuarios');
var Comentario = mongoose.model('Comentarios');

var LikeSchema = Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: Usuario },
    liked: Boolean,
    comment_id: { type: mongoose.Schema.Types.ObjectId, ref: Comentario }

});
module.exports = mongoose.model('Likes', LikeSchema);