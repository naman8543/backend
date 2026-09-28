const mysql = require('mysql2');
const config = require('./config');

const pool = mysql.createPool({
    host: config.db.host,
    user: config.db.user,
       password: config.db.password,
    database: config.db.name,

    waitForConnections: true,
    connectionLimit: config.db.connectionLimit,
    queueLimit: config.db.queueLimit
});

const promisepool = pool.promise();

module.exports = promisepool;