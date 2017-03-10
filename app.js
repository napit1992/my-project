var express = require("express");
var app = express();
var mongoose=require("mongoose");
mongoose.connect("mongodb://admin:admin@ds123050.mlab.com:23050/meeta");
app.use(express.static("public"));

const PORT = process.env.PORT ||3000;

app.set("view engine","ejs");

app.get("/",function(req,res){
		res.sendfile("./public/dii.html");
})



app.listen(PORT,()=>{
	console.log("its on ");
})