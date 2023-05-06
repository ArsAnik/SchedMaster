const express = require("express");

const pool = require('../utils/sqlConnect');
const myTime = require('../utils/myTime');


const app = express();

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