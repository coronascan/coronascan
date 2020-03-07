const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Restriction = new Schema({
    continent:String,
    nation_kr:String,
    nation_eng:String,
    state: Number,
    detail: String,
    tooltip: String,
    listview : Boolean
});

module.exports = mongoose.model('Restriction', Restriction);