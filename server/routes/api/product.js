var client = require("../config.js").client;
exports.findAll = function(req, res) {

	query = client.query("SELECT * FROM product");

	query.on("row", function(row, result) {
		result.addRow(row);
	});
	query.on("end", function(result) {
		res.json(result.rows);
	});
};

exports.findById = function(req, res) {
	var id = req.params.id;
	query = client.query("SELECT * FROM product WHERE productid = $1", id);

	query.on("row", function(row, result) {
		result.addRow(row);
	});
	query.on("end", function(result) {
		res.json(result.rows);
	});
};

exports.addProduct = function(req, res) {
	var order = req.body;

	console.log("api: addProduct");
	// console.log("item:" + item);
	console.log("order: " + order);
	console.log(order.name);
	console.log(order.description);
	console.log(order.price);
	console.log("order json: " + JSON.stringify(order));
	res.send(order);
	query = client.query("INSERT INTO product (Name, Description, Price) VALUES($1, $2, $3)", 
		[
			// order.name,
			// order.description,
			// order.price
			"new product",
			"new description",
			100
		]);

	query.on("row", function(row, result) {
		result.addRow(row);
		console.log(row);
	});
	query.on("end", function(result) {
		res.json(result.rows);
	});
	// stock needs to be updated
};