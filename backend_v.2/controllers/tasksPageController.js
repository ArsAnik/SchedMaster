const express = require("express");

const pool = require('../utils/sqlConnect');
const myTime = require('../utils/myTime');


const app = express();

class tasksPageController{

    async tasks_page(req, res) {
        const {id} = req.query;
        pool.query("SELECT * FROM `own tasks` WHERE `own tasks`.`FK_user`=? ORDER BY `begin_date` ASC", [id], function (err, own_data) {
            if (err) return console.log(err);
            res.json({
                id: id,
                own_tasks: own_data,
                day: 0
            });
        });
    }
}

module.exports = new tasksPageController();