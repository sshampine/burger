//setting up mysql
var mysql = require("mysql");

var connection = mysql.createConnection({
	port: 3306,
	user: "root",
	password: "",
	database: "burgers_db"
});

//making the connection
connection.connect(function(error) {
	if (error) {
		console.log("error connecting: " + error.stack)
	}
	console.log("connected as id: " + connection.threadId)
});


module.exports = connection;