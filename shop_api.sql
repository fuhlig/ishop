-- basket
SELECT * FROM basket;

-- order
SELECT * FROM orderLine;

SELECT product.name FROM product
	WHERE product.productID IN
	(SELECT basket.productID FROM basket);

SELECT * FROM basket INNER JOIN product USING (productid);

SELECT * FROM orderLine INNER JOIN basket USING (orderID);

SELECT * FROM orderLine WHERE closed = false;

SELECT COUNT(*) FROM orderLINE WHERE closed;