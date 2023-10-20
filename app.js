var express=require("express");
var bodyParser=require("body-parser");
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/gfg');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
    console.log("connection succeeded");
})

var app=express()
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
  
app.post('/index', function(req,res){
    var Name = req.body.name;
    var Age = req.body.age;
    var Gender = req.body.gender;
    // var Email =req.body.email;
    // var Quantity = req.body.qua;
    // var address =req.body.add;
    var Phno = req.body.phno;
    var Email = req.body.email;
    var Disease = req.body.disease;
    var Message = req.body.message;
    var data = {
        "name": name,
        "age":age,
        "gender":gender,
        // "email":Email,
        // "qua":Quantity,
        // "add":address,
        "phno":phno,
        "email":email,
        "disease":disease,
        "message":message,

    }
db.collection('Orders').insertOne(data,function(err, collection){
        if (err) throw err;
        console.log("Record inserted Successfully");       
    });
     return res.redirect('success.html');
})
app.listen(8001);
console.log("server listening at port 8000");

