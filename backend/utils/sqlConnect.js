const mysql = require("mysql2");

const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    database: "Sched-master",
    password: "fw999111"
});

module.exports = pool;