var orm = require("../config/orm.js")

var burger = {
	all: function(callback) {
		orm.all("burgers", function(results) {
			callback(results)
		})
	},
	create: function(columns, vals, callback) {
		orm.create("burgers", columns, vals, function(results) {
			callback(results)
		})
	},
	delete: function(condition, callback) {
		orm.delete("burgers", condition, function(results) {
			callback(results)
		})
	}
};



module.exports = burger;
