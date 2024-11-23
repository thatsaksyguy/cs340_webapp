-- Data Manipulation Queries
-- CS340 Group 130 - Caitlin Bax, Destiny Bright, Jonathan Saks
-- Variables will be denoted using $variableName format

-- INSERT: Adding a new customer
INSERT INTO Customers (name, email, phone, address)
VALUES ($name, $email, $phone, $address);

-- SELECT: Retrieving all customers
SELECT * FROM Customers;

-- SELECT: Retrieving a specific customer by ID
SELECT * FROM Customers WHERE customerID = $customerID;

-- UPDATE: Updating a customer's details
UPDATE Customers
SET name = $name, email = $email, phone = $phone, address = $address
WHERE customerID = $customerID;

-- DELETE: Deleting a customer
DELETE FROM Customers WHERE customerID = $customerID;

-- INSERT: Adding a new wand
INSERT INTO Wands (length, core, wood, price, totalWandQuantity)
VALUES ($length, $core, $wood, $price, $totalWandQuantity);

-- SELECT: Retrieving all wands
SELECT * FROM Wands;

-- SELECT: Retrieving a specific wand by ID
SELECT * FROM Wands WHERE wandID = $wandID;

-- UPDATE: Updating a wand's details
UPDATE Wands
SET length = $length, core = $core, wood = $wood, price = $price, totalWandQuantity = $totalWandQuantity
WHERE wandID = $wandID;

-- DELETE: Deleting a wand
DELETE FROM Wands WHERE wandID = $wandID;

-- INSERT: Adding a new spell
INSERT INTO Spells (level, typeOfSpell, price, totalSpellQuantity)
VALUES ($level, $typeOfSpell, $price, $totalSpellQuantity);

-- SELECT: Retrieving all spells
SELECT * FROM Spells;

-- SELECT: Retrieving a specific spell by ID
SELECT * FROM Spells WHERE spellID = $spellID;

-- UPDATE: Updating a spell's details
UPDATE Spells
SET level = $level, typeOfSpell = $typeOfSpell, price = $price, totalSpellQuantity = $totalSpellQuantity
WHERE spellID = $spellID;

-- DELETE: Deleting a spell
DELETE FROM Spells WHERE spellID = $spellID;

-- INSERT: Adding a new order
INSERT INTO Orders (customerID, orderDate, totalPrice)
VALUES ($customerID, $orderDate, $totalPrice);

-- SELECT: Retrieving all orders
SELECT * FROM Orders;

-- SELECT: Retrieving a specific order by ID
SELECT * FROM Orders WHERE orderID = $orderID;

-- UPDATE: Updating an order's details
UPDATE Orders
SET customerID = $customerID, orderDate = $orderDate, totalPrice = $totalPrice
WHERE orderID = $orderID;

-- DELETE: Deleting an order
DELETE FROM Orders WHERE orderID = $orderID;

-- INSERT: Adding a new wand to an order
INSERT INTO OrderItems (orderID, wandID, quantity, price)
VALUES ($orderID, $wandID, $quantity, $price);

-- INSERT: Adding a new spell to an order
INSERT INTO OrderItems (orderID, spellID, quantity, price)
VALUES ($orderID, $spellID, $quantity, $price);

-- SELECT: Retrieving all items for a specific order
SELECT * FROM OrderItems WHERE orderID = $orderID;

-- UPDATE: Updating the quantity and price of an order item
UPDATE OrderItems
SET quantity = $quantity, price = $price
WHERE orderItemID = $orderItemID;

-- DELETE: Deleting an order item
DELETE FROM OrderItems WHERE orderItemID = $orderItemID;