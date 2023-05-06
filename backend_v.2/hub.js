const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');
const router = require('./rotes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);
//const urlencodedParser = express.urlencoded({extended: false});


const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    database: "SchedMaster",
    password: ""
});

const start = async () => {
    app.listen(3001, function(){
        console.log("Сервер ожидает подключения...");
    });
}
start().then();
