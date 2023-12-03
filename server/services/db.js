const mysql = require('mysql');

const db = mysql.createPool({
    connectionLimit: 10,
    user: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

module.exports = db;
