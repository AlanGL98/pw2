'use strict'

var mongoose = require('mongoose');
var Schema= mongoose.Schema;
var Opinion = mongoose.model('Opinion');

var TopPlayersSchema= Schema({
    opinion_id:{type:Schema.ObjectId, ref:'Opinion'},
    name:String,
    order:Number,
    image_path:String,
    created_at: {type:Date , default: Date.now}
});
module.exports = mongoose.model('TopPlayers', TopPlayersSchema);