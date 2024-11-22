/**
 * Citation for the db-connector code structure
 * 
 * Date: 11/21/2024
 * 
 * Adapted from CS 340 nodejs-starter-app, step 1.
 * Values in the pool have been modified to use Jonathan's mysql database credentials.
 * 
 * Source URL: https://github.com/osu-cs340-ecampus/nodejs-starter-app
 */

// Get an instance of mysql we can use in the app
var mysql = require('mysql')

// Create a 'connection pool' using the provided credentials
var pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'classmysql.engr.oregonstate.edu',
    user            : 'cs340_saksj',
    password        : 'X6Z3CijswBK_l0PF',
    database        : 'cs340_saksj'
})

// Export it for use in our applicaiton
module.exports.pool = pool;