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
        const {name, description, begin_date, end_date, all_day} = req.body;
        pool.query("UPDATE `own tasks` SET `name`=?, `description`=?, `begin_date`=?, `end_date`=?, `all_day`=? WHERE `own tasks`.`id`=?;", [name, description, begin_date, end_date, all_day, id], function (err, data) {
            if (!err) return res.json();
        });
    }

    async task_create(req, res) {
        const {name, description, begin_date, end_date, all_day, FK_user} = req.body;
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