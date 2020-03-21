const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/db-config.json');
const PORT = 4001;
const nodemailer = require('nodemailer')

app.use(cors());
app.use(bodyParser.json());

// connect mongodb
mongoose.connect(config.addr,{useNewUrlParser: true});
const connection = mongoose.connection;

const Restriction = require('./collections/restrictions.model');
const Warning = require('./collections/warnings.model');
const Source = require('./collections/sources.model');

app.get('/main', (req, res)=>{
  console.log("/main in")
  
  async function fetch(){
   
    const prohibitions = await Restriction.count({state : 0})
    const restrictions = await Restriction.count({state : 1})
    
    const source = await Source.find()
    res.send({
      restrictions : restrictions,
      prohibitions : prohibitions,
      source : source
    })
    res.send({"result" : ret})
  }
  
  fetch();
})

app.get('/maps/:selected', (req, res)=>{
  const selected = req.params.selected
  Restriction.findOne({nation_kr : selected,
    $meta: ""
  }, (err, result) =>{
    if(err){console.log(err); return false;}
    console
    if(result) return res.send(result)
    res.send({})
  });

  Restriction.findOne({nation_kr : selected}, (err, result) =>{
    if(err){console.log(err); return false;}
    if(result) return res.send(result)
    res.send({})
  });
})

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

app.post('/mail', (req, res)=>{
    console.log("/mail in")

    const email = req.body.email;
    const subject = req.body.subject;
    const contents = req.body.contents;

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'coronascan2020@gmail.com',
        pass: config.password
      }
    });
  
    let mailOptions = {
      from: email,
      to: 'coronascan2020@gmail.com',
      subject: subject + "[from : " + email +"]",
      text: contents
    };
  
    transporter.sendMail(mailOptions, function(error, info){
      if (error) console.log(error);
      else console.log('Email sent: ' + info.response);
    });
  
    res.redirect(config.server_url + "/mail");
})


connection.once('open', function(){
    console.log("MongoDB database connection established successfully");
})

app.listen(PORT, function(){
    console.log("Server is running on PORT: " + PORT);
});
