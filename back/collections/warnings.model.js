const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Warning = new Schema({
    date: { type: Date },
    continent: { type: String, required: true },
    nation_kr: { type: String },
    nation_eng: { type: String, required: true, unique: true },
    marker: { type: Boolean },
    state: { type: Number, required: true },
    detail: { type: String, required: true },
    tooltip: { type: String, required: true },
    listview: { type: Boolean },
});

Warning.set('timestamps', true);

module.exports = mongoose.model('Warning', Warning);