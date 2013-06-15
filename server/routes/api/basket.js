var client = require("../config.js").client;

exports.get = function(req, res) {
	query = client.query("SELECT * FROM basket INNER JOIN product USING (productid);");

	query.on("row", function(row, result) {
		result.addRow(row);
	});
	query.on("end", function(result) {
		res.json(result.rows);
	});
};