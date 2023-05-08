const express = require("express");

const pool = require('../utils/sqlConnect');
const myTime = require('../utils/myTime');


const app = express();

class tasksPageController{

    async task_get(req, res) {
        const id = req.params.id;
        pool.query("SELECT * FROM `own tasks` WHERE id=?", [id], function (err, data) {
            if (err) return console.log(err);
            res.json({
                task_id: id,
                data: data
            });
        });
    }
    async task_edit(req, res) {
        const {id} = req.query;
        let data = req.body;
        res.json(data);
    }
    async task_delete(req, res) {
        const {id} = req.query;
        res.json({
            "message": `удалить ${id}`
        })
    }
}

module.exports = new tasksPageController();