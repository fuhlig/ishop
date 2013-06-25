var express = require("express");

var product = require("./server/routes/api/product"),
	category = require("./server/routes/api/category");
	basket = require("./server/routes/api/basket");
	order = require("./server/routes/api/basket");

// create express server
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());


// API
app.get("/api/product", product.findAll);
app.get("/api/product/:id", product.findById);
// app.post("/api/order", product.addProduct);
app.get("/api/category", category.findAll);
app.get("/api/category/:id", category.findById);
app.get("/api/basket", basket.get);
app.post("/api/basket/:productid/:quantity", basket.add);
app.delete("/api/basket/:id", basket.remove);
app.put("/api/basket/:productid/:quantity", basket.update);
app.get("/api/basket/count", basket.itemCount);
app.get("/api/order", order.get);

// server listening on port
app.listen(8080);
console.log("server running on port 8080");