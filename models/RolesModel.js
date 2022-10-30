'use strict'

var mongoose = require('mongoose');
var Schema= mongoose.Schema;

var RolesSchema= Schema({
    name:string,
    created_at: {type:Date , default: Date.now}
});
module.exports = mongoose.model('Roles', RolesSchema);