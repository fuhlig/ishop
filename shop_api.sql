-- basket
SELECT * FROM basket;

-- order
SELECT * FROM orderLine;

SELECT product.name FROM product
	WHERE product.productID IN
	(SELECT basket.productID FROM basket);