const mysql = require("mysql2");
const express = require("express");

const app = express();

const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    database: "Sched-master",
    password: "fw999111"
});

function setDateFunction() {  // функция, которая выводит примерную дату начала семестра (для работы с недельными рассписаниями пар)
    let d = new Date(Date.now());
    d.setHours(0, 0, 0, 0);
    d.setMonth(parseInt(d.getMonth() / 6 )*7.2+1, 1);
    return new Date(d.getTime() - (d.getDay() + 6)%7 * 24*3600*1000);
}
// нужные константы для работы со временем
const d = setDateFunction();
const dayTime = 24*3600*1000;
const weekTime = 7 * dayTime;

class tasksPageController{

    async tasks_page(req, res) {
        const id = req.params.id;
        let d1 = new Date(Date.now());
        d1.setHours(0, 0, 0, 0);
        let d2 = new Date(d1.getTime() + dayTime -1);
        pool.query("SELECT * FROM `own tasks` WHERE `own tasks`.`FK_user`=?", [id /*, d1, d2*/], function (err, own_data) { //AND `own tasks`.`begin_date` BETWEEN ? AND ? ORDER BY `begin_date` ASC, `end_date` ASC;
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