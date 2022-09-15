require('dotenv').config();
var mysql = require('mysql2');

var connection = mysql.createPool({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWOORD
  });

module.exports = connection.promise()