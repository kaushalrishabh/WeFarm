// JavaScript Document

var mysql = require('mysql');

var conn = mysql.createConnection({
	
	host: "localhost",
	user: "",
	password: ""
});

conn.connect(function(err)
{
			if (err) throw err;
			console.log("Connected!");
			
			conn.query("CREATE DATABASE mydb", function(err,result){
			if(err) throw err;
				
				console.log("Database Created !");
				
				
			});
});