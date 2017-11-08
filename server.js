var express = require("express");
var bodyParser = require("body-parser");

var burger_controller = require("./controllers/burgers_controller.js");

var burger = require("./models/burger.js");

var port = process.env.PORT || 3000;

var app = express();

var exphbs = require("express-handlebars");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
	burger.all(function(data) {
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject)
		res.render("index", hbsObject);
	})
})

app.use("/api/burgers", burger_controller);

app.listen(port)