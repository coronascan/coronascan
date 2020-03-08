const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const db_config = require('./config/db-config.json');
const PORT = 4001;

app.use(cors());
app.use(bodyParser.json());

// connect mongodb
mongoose.connect(db_config.addr,{useNewUrlParser: true});
const connection = mongoose.connection;

const Restriction = require('./collections/restrictions.model');
const Warning = require('./collections/warnings.model');

app.get('/map',(req,res)=>{
    console.log("/map in")
    Restriction.find((err,restrictions)=>{
        if(err){console.log(err); return false;}
        res.send(restrictions)

    });
});

app.get('/warning', (req, res)=>{
    console.log("/warning in")
    Warning.find((err, warnings)=>{
        if(err){console.log(err); return false;}
        res.send(warnings)
    })
})

connection.once('open', function(){
    console.log("MongoDB database connection established successfully");
})

app.listen(PORT, function(){
    console.log("Server is running on PORT: " + PORT);
});
