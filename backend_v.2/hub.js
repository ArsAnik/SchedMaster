const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');
const router = require('./rotes');
const taskController = require("./controllers/taskController");

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

const start = async () => {
    app.listen(3001, function(){
        console.log("Сервер ожидает подключения...");
    });
}
start().then();
