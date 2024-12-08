/**
 * Citation for the app.get('/') code structure.
 *
 * Date: 11/21/2024
 *
 * Adapted from CS 340 nodejs-starter-app, steps 0-1.
 * Queries and function structure copied from example in app.js starter code.
 *
 * Source URL: https://github.com/osu-cs340-ecampus/nodejs-starter-app
 */

/*
    SETUP
*/
var express = require("express"); // We are using the express library for the web server
var app = express(); // We need to instantiate an express object to interact with the server in our code
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
PORT = 4384; // Set a port number at the top so it's easy to change in the future
// Database
var db = require("./back-end/database/db-connector");

// Handlebars (Taken from step 3 github)
const { engine } = require("express-handlebars");
var exphbs = require("express-handlebars"); // Import express-handlebars
app.engine(".hbs", engine({ extname: ".hbs" })); // Create an instance of the handlebars engine to process templates
app.set("view engine", ".hbs");

/*
    ROUTES
*/
// HOME
app.get("/", function (req, res) {
    res.render("homepage");
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.get("/wands", function (req, res) {
    // Declare Query 1
    let query1;

    let coreTypes = [
        "None",
        "Unicorn Tail Hair",
        "Dragon Heartstring",
        "Phoenix Feather",
    ];

    // If there is no query string, we just perform a basic SELECT
    if (req.query.wood === undefined) {
        query1 = "SELECT * FROM `Wands`;";
    }

    // If there is a query string, we assume this is a search, and return desired results
    else {
        query1 = `SELECT * FROM Wands WHERE wood LIKE "${req.query.wood}%"`;
    }

    // Run the 1st query
    db.pool.query(query1, function (error, rows, fields) {
        return res.render("wands", { data: rows, core: coreTypes });
    });
});

app.post("/add-wand-ajax", function (req, res) {
    // Capture the incoming data and parse it back to a JS object
    let data = req.body;

    // Create the query and run it on the database
    query1 = `INSERT INTO Wands (length, price, core, wood, totalWandQuantity) VALUES ('${data.length}', '${data.price}', '${data.core}', '${data.wood}', '${data.totalWandQuantity}')`;
    db.pool.query(query1, function (error, rows, fields) {
        // Check to see if there was an error
        if (error) {
            // Log the error to the terminal so we know what went wrong, and send the visitor an HTTP response 400 indicating it was a bad request.
            console.log(error);
            res.sendStatus(400);
        }

        // If there was no error, we redirect back to our root route, which automatically runs the SELECT * FROM bsg_people and
        // presents it on the screen
        else {
            query2 = `SELECT * FROM Wands;`;
            db.pool.query(query2, function (error, rows, fields) {
                // If there was an error on the second query, send a 400
                if (error) {
                    // Log the error to the terminal so we know what went wrong, and send the visitor an HTTP response 400 indicating it was a bad request.
                    console.log(error);
                    res.sendStatus(400);
                }
                // If all went well, send the results of the query back.
                else {
                    res.send(rows);
                }
            });
        }
    });
});

app.delete("/delete-wand-ajax/", function (req, res, next) {
    let data = req.body;
    let wandID = parseInt(data.wandID);
    let deleteWands = `DELETE FROM Wands WHERE wandID = ?`;

    // Run the 1st query
    db.pool.query(deleteWands, [wandID], function (error, rows, fields) {
        if (error) {
            console.log(error);
            res.sendStatus(400);
        } else {
            res.sendStatus(204);
        }
    });
});

app.put("/put-wand-ajax", function (req, res) {
    let data = req.body;

    let wandID = parseInt(data.wandID);
    let length = data.length;
    let price = data.price;
    let core = data.core;
    let wood = data.wood;
    let totalWandQuantity = data.totalWandQuantity;

    console.log("Data received:", data);

    let queryUpdateWand = `UPDATE Wands
                            SET length = ?,
                                price = ?,
                                core = ?,
                                wood = ?,
                                totalWandQuantity = ?
                            WHERE wandID = ?`;

    let selectUpdatedWand = `SELECT * FROM Wands WHERE wandID = ?`;

    db.pool.query(
        queryUpdateWand,
        [length, price, core, wood, totalWandQuantity, wandID],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
                res.sendStatus(400);
            } else {
                db.pool.query(selectUpdatedWand, [wandID], function (error, rows, fields) {
                    if (error) {
                        console.log(error);
                        res.sendStatus(400);
                    } else {
                        res.send(rows);
                    }
                });
            }
        }
    );
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.get("/customers", function (req, res) {
    // Declare Query 1
    let query1;

    // If there is no query string, we just perform a basic SELECT
    if (req.query.name === undefined) {
        query1 = "SELECT * FROM `Customers`;";
    }

    // If there is a query string, we assume this is a search, and return desired results
    else {
        query1 = `SELECT * FROM Customers WHERE name LIKE "${req.query.name}%"`;
    }

    // Run the 1st query
    db.pool.query(query1, function (error, rows, fields) {
        return res.render("customers", { data: rows });
    });
});

app.post("/add-customer-ajax", function (req, res) {
    // Capture the incoming data and parse it back to a JS object
    let data = req.body;

    // Create the query and run it on the database
    query1 = `INSERT INTO Customers (name, email, phone, address) VALUES ('${data.name}', '${data.email}', '${data.phone}', '${data.address}')`;
    db.pool.query(query1, function (error, rows, fields) {
        // Check to see if there was an error
        if (error) {
            // Log the error to the terminal so we know what went wrong, and send the visitor an HTTP response 400 indicating it was a bad request.
            console.log(error);
            res.sendStatus(400);
        }

        // If there was no error, we redirect back to our root route, which automatically runs the SELECT * FROM bsg_people and
        // presents it on the screen
        else {
            query2 = `SELECT * FROM Customers;`;
            db.pool.query(query2, function (error, rows, fields) {
                // If there was an error on the second query, send a 400
                if (error) {
                    // Log the error to the terminal so we know what went wrong, and send the visitor an HTTP response 400 indicating it was a bad request.
                    console.log(error);
                    res.sendStatus(400);
                }
                // If all went well, send the results of the query back.
                else {
                    res.send(rows);
                }
            });
        }
    });
});

app.delete("/delete-customer-ajax/", function (req, res, next) {
    let data = req.body;
    let customerID = parseInt(data.customerID);
    let deleteCustomers = `DELETE FROM Customers WHERE customerID = ?`;

    // Run the 1st query
    db.pool.query(deleteCustomers, [customerID], function (error, rows, fields) {
        if (error) {
            console.log(error);
            res.sendStatus(400);
        } else {
            res.sendStatus(204);
        }
    });
});

app.put("/put-customer-ajax", function (req, res, next) {
    let data = req.body;

    let name = data.name;
    let email = data.email;
    let phone = data.phone;
    let address = data.address;
    let customerID = parseInt(data.customerID);

    let queryUpdateCustomer = `UPDATE Customers
                              SET name = ?,
                                  email = ?,
                                  phone = ?,
                                  address = ?
                              WHERE customerID = ?`;

    let selectCustomer = `SELECT * FROM Customers WHERE customerID = ?`;
    // Run the 1st query
    db.pool.query(
        queryUpdateCustomer,
        [name, email, phone, address, customerID],
        function (error, rows, fields) {
            if (error) {
                // Log the error to the terminal so we know what went wrong, and send the visitor an HTTP response 400 indicating it was a bad request.
                console.log(error);
                res.sendStatus(400);
            }

            // If there was no error, we run our second query and return that data so we can use it to update the people's
            // table on the front-end
            else {
                // Run the second query
                db.pool.query(selectCustomer, [customerID], function (error, rows, fields) {
                    if (error) {
                        console.log(error);
                        res.sendStatus(400);
                    } else {
                        res.send(rows);
                    }
                });
            }
        }
    );
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.get("/spells", function (req, res) {
    // Declare Query 1
    let query1;

    // If there is no query string, we just perform a basic SELECT
    if (req.query.name === undefined) {
        query1 = "SELECT * FROM `Spells`;";
    }

    // If there is a query string, we assume this is a search, and return desired results
    else {
        query1 = `SELECT * FROM Spells WHERE name LIKE "${req.query.name}%"`;
    }

    // Run the 1st query
    db.pool.query(query1, function (error, rows, fields) {
        return res.render("spells", { data: rows });
    });
});

app.post("/add-spell-ajax", function (req, res) {
    let data = req.body;

    let query1 = `INSERT INTO Spells (level, price, typeOfSpell, totalSpellQuantity)
                  VALUES ('${data.level}', '${data.price}', '${data.typeOfSpell}', '${data.totalSpellQuantity}')`;

    db.pool.query(query1, function (error, rows, fields) {
        if (error) {
            console.log(error);
            res.sendStatus(400);
        } else {
            let query2 = `SELECT * FROM Spells;`;
            db.pool.query(query2, function (error, rows, fields) {
                if (error) {
                    console.log(error);
                    res.sendStatus(400);
                } else {
                    res.send(rows);
                }
            });
        }
    });
});

app.delete("/delete-spell-ajax", function (req, res) {
    let data = req.body;
    let spellID = parseInt(data.spellID);

    let deleteSpell = `DELETE FROM Spells WHERE spellID = ?`;

    db.pool.query(deleteSpell, [spellID], function (error, rows, fields) {
        if (error) {
            console.log(error);
            res.sendStatus(400);
        } else {
            res.sendStatus(204);
        }
    });
});

app.put("/put-spell-ajax", function (req, res) {
    let data = req.body;

    let spellID = parseInt(data.spellID);
    let level = data.level;
    let price = data.price;
    let typeOfSpell = data.typeOfSpell;
    let totalSpellQuantity = data.totalSpellQuantity;

    let queryUpdateSpell = `UPDATE Spells
                            SET level = ?,
                                price = ?,
                                typeOfSpell = ?,
                                totalSpellQuantity = ?
                            WHERE spellID = ?`;

    let selectUpdatedSpell = `SELECT * FROM Spells WHERE spellID = ?`;

    db.pool.query(
        queryUpdateSpell,
        [level, price, typeOfSpell, totalSpellQuantity, spellID],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
                res.sendStatus(400);
            } else {
                db.pool.query(selectUpdatedSpell, [spellID], function (error, rows, fields) {
                    if (error) {
                        console.log(error);
                        res.sendStatus(400);
                    } else {
                        res.send(rows);
                    }
                });
            }
        }
    );
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.get("/orders", function (req, res) {
     // Declare Query 1

     let query1 = "SELECT * FROM Orders;";

     // Query 2 is the same in both cases
     let query2 = "SELECT * FROM Customers;";

     // Run the 1st query
     db.pool.query(query1, function(error, rows, fields){

         // Save the people
         let orders = rows;

         // Run the second query
         db.pool.query(query2, (error, rows, fields) => {

             // Save the planets
             let customers = rows;

             return res.render('orders', {data: orders, customers: customers});

         });
        });
    });

app.post("/add-order-ajax", function (req, res) {
    // Capture the incoming data and parse it back to a JS object
    let data = req.body;
    console.log(req.body);

    // Create the query and run it on the database
    query1 = `INSERT INTO Orders (orderDate, customerID, totalPrice) VALUES ('${data.orderDate}', '${data.customerID}', '${data.totalPrice}')`;
    db.pool.query(query1, function (error, rows, fields) {
        // Check to see if there was an error
        if (error) {
            // Log the error to the terminal so we know what went wrong, and send the visitor an HTTP response 400 indicating it was a bad request.
            console.log(error);
            res.sendStatus(400);
        }

        // If there was no error, we redirect back to our root route, which automatically runs the SELECT * FROM bsg_people and
        // presents it on the screen
        else {
            query2 = `SELECT * FROM Orders;`;
            db.pool.query(query2, function (error, rows, fields) {
                // If there was an error on the second query, send a 400
                if (error) {
                    // Log the error to the terminal so we know what went wrong, and send the visitor an HTTP response 400 indicating it was a bad request.
                    console.log(error);
                    res.sendStatus(400);
                }
                // If all went well, send the results of the query back.
                else {
                    res.send(rows);
                }
            });
        }
    });
});

app.delete("/delete-order-ajax/", function (req, res, next) {
    let data = req.body;
    let orderID = parseInt(data.orderID);
    let deleteOrders = `DELETE FROM Orders WHERE orderID = ?`;

    // Run the 1st query
    db.pool.query(deleteOrders, [orderID], function (error, rows, fields) {
        if (error) {
            console.log(error);
            res.sendStatus(400);
        } else {
            res.sendStatus(204);
        }
    });
});

app.put("/put-order-ajax", function (req, res, next) {
    let data = req.body;

    let orderDate = data.orderDate;
    let customerID = data.customerID;
    let totalPrice = data.totalPrice;
    let orderID = parseInt(data.orderID);

    let queryUpdateOrder = `UPDATE Orders
                              SET orderDate = ?,
                                  customerID = ?,
                                  totalPrice = ?
                              WHERE orderID = ?`;

    let selectOrder = `SELECT * FROM Orders WHERE orderID = ?`;
    // Run the 1st query
    db.pool.query(
        queryUpdateOrder,
        [orderDate, customerID, totalPrice, orderID],
        function (error, rows, fields) {
            if (error) {
                // Log the error to the terminal so we know what went wrong, and send the visitor an HTTP response 400 indicating it was a bad request.
                console.log(error);
                res.sendStatus(400);
            }

            // If there was no error, we run our second query and return that data so we can use it to update the people's
            // table on the front-end
            else {
                // Run the second query
                db.pool.query(selectOrder, [orderID], function (error, rows, fields) {
                    if (error) {
                        console.log(error);
                        res.sendStatus(400);
                    } else {
                        res.send(rows);
                    }
                });
            }
        }
    );
});

<<<<<<< HEAD
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
=======
app.get("/order-items", function (req, res) {
    // Declare Query 1
    let query1;
>>>>>>> 227509c (Update app.js)

app.get("/order-items", function (req, res) {
     // Declare Query 1

     let query1 = "SELECT * FROM OrderItems;";

     // Query 2 is the same in both cases
     let query2 = "SELECT * FROM Orders;";

     let query3 = "SELECT * FROM Wands;";

     let query4 = "SELECT * FROM Spells;";

     // Run the 1st query
     db.pool.query(query1, function(error, rows, fields){

        // Save OrderItems
        let orderItems = rows;

        // Run the 2nd query (Orders)
        db.pool.query(query2, function(error, rows, fields){

            let orders = rows;

            // Run the 3rd query (Wands)
            db.pool.query(query3, function(error, rows, fields) {

                let wands = rows;

                // Run the 4th query (Spells)
                db.pool.query(query4, function(error, rows, fields) {

                    let spells = rows;

                    // Render the 'orderItems' view with all the data
                    return res.render('orderItems', {data: orderItems, orders: orders, wands: wands, spells: spells});
                });
            });
        });
    });
});

app.post("/add-orderItem-ajax", function (req, res) {
    // Capture the incoming data and parse it back to a JS object
    let data = req.body;

    // Create the query and run it on the database
    query1 = `INSERT INTO OrderItems (orderID, wandID, spellID, quantity, price) VALUES ('${data.orderID}', '${data.wandID}', '${data.spellID}', '${data.quantity}', '${data.price}')`;
    db.pool.query(query1, function (error, rows, fields) {
        // Check to see if there was an error
        if (error) {
            // Log the error to the terminal so we know what went wrong, and send the visitor an HTTP response 400 indicating it was a bad request.
            console.log(error);
            res.sendStatus(400);
        }

        // If there was no error, we redirect back to our root route, which automatically runs the SELECT * FROM bsg_people and
        // presents it on the screen
        else {
            query2 = `SELECT * FROM OrderItems;`;
            db.pool.query(query2, function (error, rows, fields) {
                // If there was an error on the second query, send a 400
                if (error) {
                    // Log the error to the terminal so we know what went wrong, and send the visitor an HTTP response 400 indicating it was a bad request.
                    console.log(error);
                    res.sendStatus(400);
                }
                // If all went well, send the results of the query back.
                else {
                    res.send(rows);
                }
            });
        }
    });
});

app.delete("/delete-orderItem-ajax", function (req, res, next) {
    let data = req.body;
    let orderItemID = parseInt(data.orderItemID);
    let deleteOrderItems = `DELETE FROM OrderItems WHERE orderItemID = ?`;

    // Run the 1st query
    db.pool.query(deleteOrderItems, [orderItemID], function (error, rows, fields) {
        if (error) {
            console.log(error);
            res.sendStatus(400);
        } else {
            res.sendStatus(204);
        }
    });
});

app.put("/put-orderItem-ajax", function (req, res, next) {
    let data = req.body;

    let orderID = data.orderID;
    let wandID = data.wandID;
    let spellID = data.spellID;
    let quantity = data.quantity;
    let price = data.price;
    let orderItemID = parseInt(data.orderItemID);

    let queryUpdateOrderItem = `UPDATE OrderItems
                              SET orderID = ?,
                                  wandID = ?,
                                  spellID = ?,
                                  quantity = ?,
                                  price = ?
                              WHERE orderItemID = ?`;

    let selectOrderItem = `SELECT * FROM OrderItems WHERE orderItemID = ?`;
    // Run the 1st query
    db.pool.query(
        queryUpdateOrderItem,
        [orderID, wandID, spellID, quantity, price, orderItemID],
        function (error, rows, fields) {
            if (error) {
                // Log the error to the terminal so we know what went wrong, and send the visitor an HTTP response 400 indicating it was a bad request.
                console.log(error);
                res.sendStatus(400);
            }

            // If there was no error, we run our second query and return that data so we can use it to update the people's
            // table on the front-end
            else {
                // Run the second query
                db.pool.query(selectOrderItem, [orderItemID], function (error, rows, fields) {
                    if (error) {
                        console.log(error);
                        res.sendStatus(400);
                    } else {
                        res.send(rows);
                    }
                });
            }
        }
    );
});

/*
    LISTENER
*/
app.listen(PORT, function () {
    // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
    console.log(
        "Express started on http://localhost:" +
        PORT +
        "; press Ctrl-C to terminate."
    );
});
