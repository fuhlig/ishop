var client = require("../config.js").client;

exports.get = function(req, res) {
	// query = client.query("SELECT * FROM order INNER JOIN basket USING (productid) ORDER BY orderID");
	query = client.query("SELECT * FROM order");

	query.on("row", function(row, result) {
		result.addRow(row);
	});
	query.on("end", function(result) {
		res.json(result.rows);
	});
};