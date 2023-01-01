var express = require("express");
var app=express();
app.get("/",function(req, res){
res.send("Hello world");
});
var server = app.listen(9000);
console.log("running at port 9000");
