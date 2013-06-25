-- ---------------------------------------
--
-- Database for online shop 'iShop'
-- path: 
-- \i 'C:/DEV/WEB/PROJECTS/iShop/ishop.sql';
-- ---------------------------------------
DROP TABLE IF EXISTS Address CASCADE;
DROP TABLE IF EXISTS Customer CASCADE;
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

CREATE TABLE Customer (
	CustomerID	SERIAL PRIMARY KEY,
	Firstname	VARCHAR(50) NOT NULL,
	Lastname	VARCHAR(50) NOT NULL
);

CREATE TABLE Address (
	AddressID 	SERIAL PRIMARY KEY,
	Street		VARCHAR(50),
	Housenumber	INT,
	City		VARCHAR(50),
	ZIP			INT,
	CustomerID	INT 
					REFERENCES Customer(CustomerID)
);

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
	Closed		BOOLEAN,
	AddressID	INT
					REFERENCES Address(AddressID)
);

CREATE TABLE Basket (
	OrderID		INT
					REFERENCES OrderLine(OrderID),
	ProductID	INT
					REFERENCES Product(ProductID),
	PRIMARY KEY(OrderID, ProductID),
	Quantity	INT,
	Price		PriceDomain
);


INSERT INTO Customer (Firstname, Lastname)
	VALUES('Florian', 'Uhlig');
INSERT INTO Customer (Firstname, Lastname)
	VALUES('Hans', 'Wurst');
INSERT INTO Customer (Firstname, Lastname) 
	VALUES ('Germaine','Finley');
INSERT INTO Customer (Firstname, Lastname) 
	VALUES ('Jada','Maddox');
INSERT INTO Customer (Firstname, Lastname) 
	VALUES ('Cameran','Jones');
INSERT INTO Customer (Firstname, Lastname) 
	VALUES ('Fuller','Odonnell');
INSERT INTO Customer (Firstname, Lastname) 
	VALUES ('Adam','Greene');
INSERT INTO Customer (Firstname, Lastname) 
	VALUES ('Anne','Day');

INSERT INTO Address(Street, Housenumber, City, ZIP, CustomerID)
	VALUES('Hauptstrasse', 3, 'Bremen', '12345', 1);
INSERT INTO Address(Street, Housenumber, City, ZIP, CustomerID)
	VALUES('Grosse Elbstrasse', 15, 'Hamburg', '12321', 2);
INSERT INTO Address (Street, Housenumber, City, ZIP, CustomerID) 
	VALUES ('Eu Avenue','46','Zutendaal','12345', 3);
INSERT INTO Address (Street, Housenumber, City, ZIP, CustomerID) 
	VALUES ('Nascetur Av.','41','Camaragibe','12345', 4);
INSERT INTO Address (Street, Housenumber, City, ZIP, CustomerID) 
	VALUES ('Massa Av.','74','Lorient','12345', 5);
INSERT INTO Address (Street, Housenumber, City, ZIP, CustomerID) 
	VALUES ('Vel St.','23','Redwater','12345', 6);
INSERT INTO Address (Street, Housenumber, City, ZIP, CustomerID) 
	VALUES ('Id, Avenue','56','Vorst','12345', 7);
INSERT INTO Address (Street, Housenumber, City, ZIP, CustomerID) 
	VALUES ('Tincidunt, Av.','45','Bihain','12345', 8);


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
	VALUES ('Nexus 4', '4,7inch developer phone from google/lg', '350', 9, 'Smartphones', 'nexus-4.png');
INSERT INTO Product (Name, Description, Price, Stock, Category, Image)
	VALUES ('Nexus s', '4inch developer phone from google/samsung', '200', 50, 'Smartphones', 'nexus-s.png');


INSERT INTO OrderLine (OrderDate, Closed, AddressID)
	VALUES (now(), false, 1);
INSERT INTO OrderLine (OrderDate, Closed, AddressID)
	VALUES (now(), true, 2);
INSERT INTO OrderLine (OrderDate, Closed, AddressID)
	VALUES (now(), true, 3);
INSERT INTO OrderLine (OrderDate, Closed, AddressID)
	VALUES (now(), true, 4);
INSERT INTO OrderLine (OrderDate, Closed, AddressID)
	VALUES (now(), true, 5);
INSERT INTO OrderLine (OrderDate, Closed, AddressID)
	VALUES (now(), true, 6);
INSERT INTO OrderLine (OrderDate, Closed, AddressID)
	VALUES (now(), true, 7);
INSERT INTO OrderLine (OrderDate, Closed, AddressID)
	VALUES (now(), true, 8);

INSERT INTO Basket (OrderID, ProductID, Quantity)
	VALUES (1, 1, 2);
INSERT INTO Basket (OrderID, ProductID, Quantity)
	VALUES (1, 4, 10);

INSERT INTO Basket (OrderID, ProductID, Quantity)
	VALUES (2, 2, 1);
INSERT INTO Basket (OrderID, ProductID, Quantity)
	VALUES (2, 4, 10);