var client = require("../config.js").client;
exports.findAll = function(req, res) {
	query = client.query("SELECT * FROM category");

	query.on("row", function(row, result) {
		result.addRow(row);
	});
	query.on("end", function(result) {
		res.json(result.rows);
	});
};

exports.findById = function(req, res) {
	var id = req.params.id;
	query = client.query("SELECT * FROM category WHERE categoryid = $1", id);

	query.on("row", function(row, result) {
		result.addRow(row);
	});
	query.on("end", function(result) {
		res.json(result.rows);
	});
};


// recursive request for maincategory > subcategory
exports.findSubcategory = function(req, res) {
		
};
