var http = require("http");
var express = require("express");
var app = express();

var path = __dirname + '/views/';


app.use(express.bodyParser());
app.use(app.router);

app.get("/",function(req,res){
  res.send("we can GET");
});

app.get("/form",function(req,res){
  res.sendfile(path + "index.html");
});

app.post("/form",function(req,res){

	var phone1 = req.body.phone;
	res.send("phone"+phone1);

});


app.use("*",function(req,res){

res.sendfile(path + "404.html");
	

});



http.createServer(app).listen(3030);





