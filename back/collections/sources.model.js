const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Source = new Schema({
    source : {type : String, required : true}
});

module.exports = mongoose.model('Source', Source);