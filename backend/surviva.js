const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/surviva',{useNewUrlParser: true,useCreateIndex: true});

var app = express();

var cors = require('cors');

app.use(cors());

app.use(express.static('imageUploads'));

app.use(bodyParser.json());

app.use('/surviva',require('./routes/api'));
app.use('/surviva/fund', require('./routes/fund'));

app.use(function(err,req,res,next){
    console.log(err);
    res.status(422).send({status: false,error:err});
});

app.listen(process.env.port || 4002,function(){
    console.log('Listening for requests');
});