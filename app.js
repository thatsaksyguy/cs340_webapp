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
var express = require('express');   // We are using the express library for the web server
var app     = express();            // We need to instantiate an express object to interact with the server in our code
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
PORT        = 4384;                 // Set a port number at the top so it's easy to change in the future
// Database
var db = require('./back-end/database/db-connector')

// Handlebars (Taken from step 3 github)
const { engine } = require('express-handlebars');
var exphbs = require('express-handlebars');     // Import express-handlebars
app.engine('.hbs', engine({extname: ".hbs"}));  // Create an instance of the handlebars engine to process templates
app.set('view engine', '.hbs');

/*
    ROUTES
*/
app.get('/', function(req, res)
{
    // Declare Query 1
    let query1;

    let coreTypes = ["None", "Unicorn Tail Hair", "Dragon Heartstring", "Phoenix Feather"];

    // If there is no query string, we just perform a basic SELECT
    if (req.query.wood === undefined)
    {
        query1 = "SELECT * FROM `Wands`;";
    }

    // If there is a query string, we assume this is a search, and return desired results
    else
    {
        query1 = `SELECT * FROM Wands WHERE wood LIKE "${req.query.wood}%"`
    }

    // Run the 1st query
    db.pool.query(query1, function(error, rows, fields){
        return res.render('index', {data: rows, core: coreTypes});
        })
    })
;

    app.post('/add-wand-ajax', function(req, res){
        // Capture the incoming data and parse it back to a JS object
        let data = req.body;

        // Create the query and run it on the database
        query1 = `INSERT INTO Wands (length, price, core, wood, totalWandQuantity) VALUES ('${data.length}', '${data.price}', '${data.core}', '${data.wood}', '${data.totalWandQuantity}')`;
        db.pool.query(query1, function(error, rows, fields){

            // Check to see if there was an error
            if (error) {

                // Log the error to the terminal so we know what went wrong, and send the visitor an HTTP response 400 indicating it was a bad request.
                console.log(error)
                res.sendStatus(400);
            }

            // If there was no error, we redirect back to our root route, which automatically runs the SELECT * FROM bsg_people and
            // presents it on the screen
            else
            {
                query2 = `SELECT * FROM Wands;`;
                db.pool.query(query2, function(error, rows, fields){

                    // If there was an error on the second query, send a 400
                    if (error) {

                        // Log the error to the terminal so we know what went wrong, and send the visitor an HTTP response 400 indicating it was a bad request.
                        console.log(error);
                        res.sendStatus(400);
                    }
                    // If all went well, send the results of the query back.
                    else
                    {
                        res.send(rows);
                    }
                })
            }
        })
    });

    app.delete('/delete-wand-ajax/', function(req,res,next){
        let data = req.body;
        let wandID = parseInt(data.wandID);
        let deleteWands= `DELETE FROM Wands WHERE wandID = ?`;


              // Run the 1st query
              db.pool.query(deleteWands, [wandID], function(error, rows, fields) {

                if (error) {
                    console.log(error);
                    res.sendStatus(400);
                } else {
                    res.sendStatus(204);
                }
      })});


    app.put('/put-wand-ajax', function(req,res,next){
        let data = req.body;

        let core = data.core;
        let wandID = parseInt(data.wandID);

        let queryUpdateCore = `UPDATE Wands SET core = ? WHERE Wands.wandID = ?`;
        let selectCore = `SELECT * FROM Wands WHERE wandID = ?`

            // Run the 1st query
            db.pool.query(queryUpdateCore, [core, wandID], function(error, rows, fields){
                if (error) {

                // Log the error to the terminal so we know what went wrong, and send the visitor an HTTP response 400 indicating it was a bad request.
                console.log(error);
                res.sendStatus(400);
                }

                // If there was no error, we run our second query and return that data so we can use it to update the people's
                // table on the front-end
                else
                {
                    // Run the second query
                    db.pool.query(selectCore, [core], function(error, rows, fields) {

                        if (error) {
                            console.log(error);
                            res.sendStatus(400);
                        } else {
                            res.send(rows);
                        }
                    })
                }
    })});

/*
    LISTENER
*/
app.listen(PORT, function(){            // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});
