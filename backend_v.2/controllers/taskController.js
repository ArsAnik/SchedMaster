const express = require("express");

const pool = require('../utils/sqlConnect');
const myTime = require('../utils/myTime');


const app = express();

class tasksPageController{

    async task_page(req, res) {
        const id = req.params.id;
        pool.query("SELECT * FROM `own tasks` WHERE id=?", [id], function (err, data) {
            if (err) return console.log(err);
            res.json(
                {data: data[0]}
            );
        });
    }
}

module.exports = new tasksPageController();