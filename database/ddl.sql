-- Group 130 - Caitlin Bax, Destiny Bright, Jonathan Saks

-- Drops tables if they exist
DROP TABLE IF EXISTS OrderItems;
DROP TABLE IF EXISTS Orders;
DROP TABLE IF EXISTS Customers;
DROP TABLE IF EXISTS Wands;
DROP TABLE IF EXISTS Spells;

-- Create Customers table
CREATE TABLE Customers (
    customerID INT(11) UNIQUE AUTO_INCREMENT NOT NULL, -- ADDED UNIQUE AND NOT NULL CONSTRAINTS TO CUSTOMERID
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20) NOT NULL,
    address VARCHAR(255) NULL,
    PRIMARY KEY (customerID)
);

-- Create Wands table
CREATE TABLE Wands (
    wandID INT(11) UNIQUE AUTO_INCREMENT NOT NULL,
    length DECIMAL(3,1) NOT NULL,
    price DECIMAL(5, 2) NOT NULL,
    core VARCHAR(100) NULL,
    wood VARCHAR(100) NOT NULL,
    totalWandQuantity INT(11) NOT NULL,
    PRIMARY KEY (wandID)
);

-- Create Spells table
CREATE TABLE Spells (
    spellID INT(11) UNIQUE AUTO_INCREMENT NOT NULL,
    level VARCHAR(100) NOT NULL,
    price DECIMAL(5, 2) NOT NULL,
    typeOfSpell VARCHAR(100) NOT NULL,
    totalSpellQuantity INT(11) NOT NULL,
    PRIMARY KEY (spellID)
);

-- Create Orders table
CREATE TABLE Orders (
    orderID INT(11) UNIQUE AUTO_INCREMENT NOT NULL,
    orderDate DATE NOT NULL,
    customerID INT(11) NOT NULL,
    totalPrice DECIMAL(7, 2) NOT NULL,
    FOREIGN KEY (customerID) REFERENCES Customers(customerID),
    PRIMARY KEY (orderID)
);

-- Create OrderItems table (Header-Detail pattern)
CREATE TABLE OrderItems (
    orderItemID INT(11) UNIQUE AUTO_INCREMENT NOT NULL,
    orderID INT(11) NOT NULL,
    wandID INT(11) NULL,
    spellID INT(11) NULL,
    quantity INT(11) NOT NULL,
    price DECIMAL(5, 2) NOT NULL,
    PRIMARY KEY (orderItemID),
    FOREIGN KEY (orderID) REFERENCES Orders(orderID) ON DELETE CASCADE, -- ADDED ON DELETE CASCADE TO FOREIGN KEYS
    FOREIGN KEY (wandID) REFERENCES Wands(wandID) ON DELETE CASCADE,
    FOREIGN KEY (spellID) REFERENCES Spells(spellID) ON DELETE CASCADE
);

-- Create index on Orders table for efficient retrieval of customer orders
CREATE INDEX idx_customerID ON Orders(customerID);

-- SAMPLE DATA FOR TESTING
-- CUSTOMERS
INSERT INTO Customers (name, email, phone, address)
VALUES 
('Harry Potter', 'harry.potter@hogwarts.edu', '123-456-7890', '4 Privet Drive, Little Whinging'),
('Hermione Granger', 'hermione@hogwarts.edu', '234-567-8901', '6 Privet Drive, Little Whinging'),
('Ron Weasley', 'ron.weasley@hogwarts.edu', '345-678-9012', '7 Privet Drive, Little Whinging');

-- WANDS
INSERT INTO Wands (length, core, wood, price, totalWandQuantity)
VALUES 
(11.0, 'Phoenix Feather', 'Holly', 150.00, 5),
(13.5, 'Dragon Heartstring', 'Oak', 175.00, 3),
(10.5, 'Unicorn Tail Hair', 'Maple', 135.00, 4);

-- SPELLS
INSERT INTO Spells (level, typeOfSpell, price, totalSpellQuantity)
VALUES 
('Intermediate', 'Disarming', 50.00, 10),
('Advanced', 'Stunning', 75.00, 8),
('Beginner', 'Levitation', 25.00, 15);

-- ORDERS
-- CUSTOMERID VALUES ADDED
INSERT INTO Orders (customerID, orderDate, totalPrice, )
VALUES 
(1, CURDATE(), 200.00),
(2, CURDATE(), 275.00),
(3, CURDATE(), 160.00);


-- ORDERITEMS - WANDS
-- ORDERID AND WANDID VALUES ADDED
INSERT INTO OrderItems (orderID, wandID, quantity, price)
VALUES 
(1, 1, 1, 150.00),
(2, 2, 1, 175.00),
(3, 3, 1, 135.00);

-- ORDERITEMS - SPELLS
-- ORDERID AND SPELLID VALUES ADDED
INSERT INTO OrderItems (orderID, spellID, quantity, price)
VALUES 
(1, 1, 1, 50.00),
(2, 2, 1, 75.00),
(3, 3, 1, 25.00);