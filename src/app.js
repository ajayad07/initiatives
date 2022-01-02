const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
var path = require("path"); 
var index = require("./index");

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser:true});

const userSchema = {
    name: String,
    email: String,
    password: String
};

const User = mongoose.model("User", userSchema);
app.get("/",function(req,res){
    res.send("index");
});

app.post("/signup", function(req,res){
const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
});
newUser.save();
});



