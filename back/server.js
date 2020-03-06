const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const restrictionRoutes = express.Router();
const mongoose = require('mongoose');
const db_config = require('./config/db-config.json');
const PORT = 4001;

let Restriction = require('./collections/restrictions.model');

app.use(cors());
app.use(bodyParser.json());

//nodemon server
mongoose.connect(db_config.addr,{useNewUrlParser: true});
const connection = mongoose.connection;


restrictionRoutes.route('/').get(function(req,res){
    Restriction.find(function(err,restrictions){
        if(err){
            console.log(err);
        }else{
            res.json(restriction);
        }
    });
});

connection.once('open', function(){
    console.log("MongoDB database connection established successfully");
})


app.use('/restrictions', restrictionRoutes);

app.listen(PORT, function(){
    console.log("Server is running on PORT: " + PORT);
});
