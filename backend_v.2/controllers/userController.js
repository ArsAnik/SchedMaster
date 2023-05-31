const express = require("express");

const pool = require('../utils/sqlConnect');
const myTime = require('../utils/myTime');
const {response} = require("express");


const app = express();

class userController{

    async user_get(req, res) {
        let id = req.params.id;
        pool.query("SELECT login, (SELECT `schedule`.`name` FROM schedule WHERE `schedule`.`id` = `user`.`FK_schedule`) AS group_name FROM user WHERE id=?;",
            [id], function (err, data) {
            if (!err) return res.json({
                data: data
            });
        });
    }
    async user_edit(req, res) {
        let id = req.params.id;
        const group_name = req.body.group_name;
        const login = req.body.login;
        pool.query("UPDATE `user` SET `login`=?, `FK_schedule` = (SELECT `schedule`.`id` FROM `schedule` WHERE `schedule`.`name`=?) WHERE `user`.`id`=?",
            [login, group_name, id], function (err, data) {
            if (!err) return res.json();
        });
    }

    async user_create(req, res) {
        const email = req.body.email;
        const login = req.body.login;
        const password = req.body.password;
        pool.query("SELECT id FROM user WHERE email=?", [email], function (err, data) {
            if (err) return console.log(err);
            if (data[0]) {
                return res.json({
                    message: "This email is already registered!"
                });
            } else {
                pool.query("INSERT INTO `user` (`email`, `password`, `login`) VALUES (?,?,?)", [email, password, login], function (err, data) {
                    if (err) return console.log(err);
                    pool.query("SELECT id FROM user WHERE email=?", [email], function (err, data) {
                        if (err) return console.log(err);
                        return res.json({
                            id:data[0].id
                        });
                    });
                });
            }
        });
    }
}

module.exports = new userController();