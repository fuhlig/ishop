-- ---------------------------------------
--
-- Database for online shop 'iShop'
-- path: 
-- \i 'C:/DEV/WEB/PROJECTS/iShop/ishop_web.sql';
-- ---------------------------------------
DROP TABLE IF EXISTS Category CASCADE;
DROP TABLE IF EXISTS Product CASCADE;
DROP TABLE IF EXISTS OrderLine CASCADE;
DROP TABLE IF EXISTS Basket CASCADE;

DROP DOMAIN IF EXISTS PriceDomain;

-- ----------------------------
-- DOMAIN
-- ----------------------------

CREATE DOMAIN PriceDomain AS DECIMAL(10,2);


-- ----------------------------
-- TABLES
-- ----------------------------

CREATE TABLE Category (
	-- CategoryID		SERIAL PRIMARY KEY,
	Name			VARCHAR(50) PRIMARY KEY,
	Maincategory	VARCHAR(50)
						REFERENCES Category(Name)
);

CREATE TABLE Product (
	ProductID	SERIAL PRIMARY KEY,
	Name		VARCHAR(50),
	Description	TEXT,
	Price		PriceDomain NOT NULL,
	Stock		INT DEFAULT 0,
	Image		VARCHAR(100),
	Category	VARCHAR(50)
					REFERENCES Category(Name)
);

CREATE TABLE OrderLine (
	OrderID		SERIAL PRIMARY KEY,
	OrderDate	TIMESTAMP,
	Closed		BOOLEAN
);

CREATE TABLE Basket (
	OrderID		INT
					REFERENCES OrderLine(OrderID),
	ProductID	INT
					REFERENCES Product(ProductID),
	PRIMARY KEY(OrderID, ProductID),
	Quantity		INT,
	Price		PriceDomain
);


INSERT INTO Category (Name, Maincategory)
	VALUES ('Books', NULL);
INSERT INTO Category (Name, Maincategory)
	VALUES ('Electronics', NULL);
INSERT INTO Category (Name, Maincategory)
	VALUES ('Computers', 'Electronics');
INSERT INTO Category (Name, Maincategory)
	VALUES ('Mobile Devices', 'Electronics');
INSERT INTO Category (Name, Maincategory)
	VALUES ('Notebooks', 'Computers');
INSERT INTO Category (Name, Maincategory)
	VALUES ('Smartphones', 'Mobile Devices');
INSERT INTO Category (Name, Maincategory)
	VALUES ('Tablets', 'Mobile Devices');

INSERT INTO Product (Name, Description, Price, Stock, Category, Image)
	VALUES ('Samsung Serie 9', '15inch Ultrabook from Samsung', '800', 5, 'Notebooks', 'samsung-serie-9.png');
INSERT INTO Product (Name, Description, Price, Stock, Category, Image)
	VALUES ('Samsung R522', '15inch Notebook from Samsung', '600', 2, 'Notebooks', 'samsung-r522.jpg');
INSERT INTO Product (Name, Description, Price, Stock, Category, Image)
	VALUES ('Nexus 4', '4,7inch developer phone from google/lg', '350', 0, 'Smartphones', 'nexus-4.png');
INSERT INTO Product (Name, Description, Price, Stock, Category, Image)
	VALUES ('Nexus s', '4inch developer phone from google/samsung', '200', 50, 'Smartphones', 'nexus-s.png');

INSERT INTO OrderLine (OrderDate, Closed)
	VALUES (now(), true);
INSERT INTO OrderLine (OrderDate, Closed)
	VALUES (now(), false);

	
-- INSERT INTO Basket (OrderID, ProductID, Quantity)
-- 	VALUES (1, 1, 2);
-- INSERT INTO Basket (OrderID, ProductID, Quantity)
-- 	VALUES (1, 4, 10);
-- 
-- INSERT INTO Basket (OrderID, ProductID, Quantity)
-- 	VALUES (2, 2, 1);
-- INSERT INTO Basket (OrderID, ProductID, Quantity)
-- 	VALUES (2, 4, 10);
	
