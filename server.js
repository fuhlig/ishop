var express = require("express");

var product = require("./server/routes/api/product"),
	category = require("./server/routes/api/category")
	basket = require("./server/routes/api/basket");

// create express server
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());

// routes
// app.get('/shop', function(req, res) {
// 	res.sendfile('views/shop.html', function(error) {
// 		if(error) {
// 			res.send("error");
// 		} else {
// 			res.end();			
// 		}
// 	});
// });
// app.get('/product-list', function(req, res) {
// 	res.sendfile('public/views/product-list.html');
// });
// app.get('/product-detail', function(req, res) {
// 	res.sendfile('public/views/product-detail.html');
// });
// app.get('/category-list', function(req, res) {
// 	res.sendfile('public/views/category-list.html');
// });
// app.get('/order', function(req, res) {
// 	res.sendfile('public/views/order.html');
// });
// app.get('/', function(req, res) {
// 	res.sendfile('index.html');
// });


// API
app.get("/api/product", product.findAll);
app.get("/api/product/:id", product.findById);
app.post("/api/order", product.addProduct);
app.get("/api/category", category.findAll);
app.get("/api/category/:id", category.findById);
app.get("/api/basket", basket.get);


// server listening on port
app.listen(8080);
console.log("server running on port 8080");