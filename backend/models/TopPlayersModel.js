'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Opinion = mongoose.model('Opiniones');

var TopPlayersSchema = Schema({
    opinion_id: { type: mongoose.Schema.Types.ObjectId, ref: Opinion },
    name: {
        type: String,
        required: true, // Es requerido. 
        minlength: 4, // Mínimo de caracteres. 
        maxlength: 60 // Máximo de caracteres.
    },
    order: { type: Number, required: false },
    image_path: { type: String, required: false },
    created_at: { type: Date, default: Date.now }
});
module.exports = mongoose.model('TopPlayers', TopPlayersSchema);