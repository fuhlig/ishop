var client = require("../config.js").client;

exports.get = function(req, res) {
	query = client.query("SELECT * FROM basket INNER JOIN product USING (productid) ORDER BY orderID");

	query.on("row", function(row, result) {
		result.addRow(row);
	});
	query.on("end", function(result) {
		res.json(result.rows);
	});
};

exports.add = function(req, res) {
	console.log("result: " + res);
	console.log("req.params" + req.params);
	var productid = req.params.productid;
	var quantity = req.params.quantity;
	console.log("order: " + productid);
	console.log("amount: " + quantity);

	function getOrderID() {
		var orderID = 1;
		query = client.query("SELECT orderID FROM orderLine WHERE closed = false");
		query.on("row", function(row, result) {
			result.addRow(row);
		});
		query.on("end", function(result) {
			console.log("orderID result");
			console.log(result.rows);
		});
		console.log("get(orderID)");
		return;
	}
	getOrderID();

	// item out of stock
	if(quantity === 0) {
		console.log("item out of stock");
		return;
	} else {
		// client.query("UPDATE SET Stock = Stock - $1 WHERE ProductID = $2", [quantity, productid]);
		getOrderID();
		query = client.query("INSERT INTO Basket (OrderID, ProductID, Quantity) VALUES ($1, $2, $3)", [1, productid, quantity]);
	}

	query.on("row", function(row, result) {
		result.addRow(row);
		console.log(row);
	});
	query.on("end", function(result) {
		res.json(result.rows);
		console.log("result: " + result.rows);
	});
};

exports.remove = function(req, res) {
	var id = req.params.id;
	console.log("remove item: " + id);
	query = client.query("DELETE FROM basket WHERE productid = $1", id);
	query.on("row", function(row, result) {
		result.addRow(row);
		console.log(row);
	});
	query.on("error", function(error) {
		console.log("db error: " + error);
	});
	query.on("end", function(result) {
		res.json(result.rows);
		console.log("result: " + result.rows);
	});
};

exports.update = function(req, res) {
	console.log("update basket");
	var id = req.params.productid;
	var quantity = req.params.quantity;
	query = client.query("UPDATE basket SET Quantity = $2 WHERE ProductID = $1", [id, quantity]);
	query.on("row", function(row, result) {
		result.addRow(row);
		console.log(row);
	});
	query.on("end", function(result) {
		res.json(result.rows);
		console.log("result: " + result.rows);
	});
};

exports.itemCount = function(req, res) {
	query = client.query("COUNT(*) FROM basket");
	query.on("row", function(row, result) {
		result.addRow(row);
		console.log(row);
	});
	query.on("end", function(result) {
		res.json(result.rows);
		console.log("result: " + result.rows);
	});
};