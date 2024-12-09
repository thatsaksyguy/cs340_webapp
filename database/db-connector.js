/**
 * Citation for the db-connector code structure
 *
 * Date: 11/21/2024
 *
 * Adapted from CS 340 nodejs-starter-app, step 1.
 * Values in the pool have been modified to use Destiny's mysql database credentials.
 *
 * Source URL: https://github.com/osu-cs340-ecampus/nodejs-starter-app
 */

// Get an instance of mysql we can use in the app
var mysql = require('mysql')

// Create a 'connection pool' using the provided credentials
var pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'classmysql.engr.oregonstate.edu',
    user            : 'cs340_brighdes',
    password        : '2732',
    database        : 'cs340_brighdes'
})

// Export it for use in our applicaiton
module.exports.pool = pool;
