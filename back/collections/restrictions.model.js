const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Restriction = new Schema({
    _id : {
        origin : {
            type : String
        },
        destination : {
            type : String
        }
    },
    // destination : {
    //     type : String
    // },
    status : {
        type : String
    },
    description : {
        type : String
    }
});

module.exports = mongoose.model('Restriction',Restriction);