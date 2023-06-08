const express = require("express");

const pool = require('../utils/sqlConnect');
const myTime = require('../utils/myTime');


const app = express();

class tasksPageController{

    async task_get(req, res) {
        let id = req.params.id;
        pool.query("SELECT * FROM `own tasks` WHERE id=?", [id], function (err, data) {
            if (!err) return res.json({
                data: data
            });
        });
    }
    async task_edit(req, res) {
        let id = req.params.id;
        const name = req.body.name;
        const description = req.body.description;
        const begin_date = req.body.begin_date;
        const end_date = req.body.end_date;
        const all_day = req.body.all_day;
        pool.query("UPDATE `own tasks` SET `name`=?, `description`=?, `begin_date`=?, `end_date`=?, `all_day`=? WHERE `own tasks`.`id`=?;", [name, description, begin_date, end_date, all_day, id], function (err, data) {
            if (!err) return res.json();
        });
    }

    async task_create(req, res) {
        const name = req.body.name;
        const description = req.body.description;
        const begin_date = req.body.begin_date;
        const end_date = req.body.end_date;
        const all_day = req.body.all_day;
        const FK_user = req.body.FK_user;
        pool.query("INSERT INTO `own tasks` (name, description, begin_date, end_date, all_day, FK_user) VALUES (?,?,?,?,?,?)", [name, description, begin_date, end_date, all_day, FK_user], function (err, data) {
            if (!err) return res.json();
        });
    }
    async task_delete(req, res) {
        let id = req.params.id;
        pool.query("DELETE FROM `own tasks` WHERE id=?", [id], function (err, data) {
            if (!err) return res.json();
        });
    }
}

module.exports = new tasksPageController();