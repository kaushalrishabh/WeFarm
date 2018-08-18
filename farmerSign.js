// NodeJs Document

var mysql = require('mysql');
var express = require('express');
var http = require('http');
var path = require('path');

var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
	extended: true
}));
var conn = mysql.createConnection({
	host: "localhost",
	user : "root",
	password: "",
	database: "wefarm"
});
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/farmer-signup.html'));
	console.log("HEy");
});
app.post('/', function(req, res) {

	var name = req.body.name;
	var phone = req.body.phone;
	var state = req.body.state;
	var city = req.body.city;
	var password = req.body.password;
	
	console.log(name);
	console.log(phone);
	console.log(state);
	
	
	conn.connect(function(err){
		if(err) throw err;
		console.log("Connected !");
		
		var sql = "INSERT INTO farmer (name, Phone_no, state, city, password) VALUES ('"+name+"', '"+phone+"','"+state+"','"+city+"','"+password+"')";
		
		conn.query(sql, function(err,result){
			if(err) throw err;
			
			return res.redirect('/FarmerHome.html');
			
			res.end();
		})
	})
});
app.listen(3000);
console.log("Running on Port 3000");
