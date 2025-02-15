const mysql = require('mysql2');
require('dotenv').config({ path: __dirname + '/.env' });

const pool = mysql.createPool({host: process.env.DB_HOST, user: process.env.DB_USER, password: process.env.DB_PASSWORD, database: process.env.DB_NAME });
const promisePool = pool.promise();

promisePool.query('SELECT 1')
    .then(() => console.log('Connected to the MySQL database'))
    .catch((err) => console.error('Error connecting to MySQL:', err));

module.exports = promisePool;