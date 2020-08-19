var express = require("express");
var app     = express();

app.get("/", function(req, res){
    res.send("This is the home page");
});

app.get("/hockey", function(req, res){
    res.send("This is the HOCKEY page");
});

app.get("*", function(req, res){
    res.send("This page doesn't exist - try one that does!")
});

app.listen(3000, function(req, res){
    console.log("Listening on port 3000");
});