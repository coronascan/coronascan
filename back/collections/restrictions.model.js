const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Restriction = new Schema({
    continent : {type : String, required : true},
    nation_kr: {type : String},
    nation_eng: {type : String, required : true, unique : true},
    state: {type : Number, required : true},
    detail: {type : String, required : true},
    tooltip: {type : String, required : true},
    listview : {type : Boolean, required : true},
});

module.exports = mongoose.model('Restriction', Restriction);