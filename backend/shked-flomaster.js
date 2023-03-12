const mysql = require("mysql2");
const express = require("express");

const app = express();
const urlencodedParser = express.urlencoded({extended: false});

const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    database: "Sched-master",
    password: "fw999111"
});

app.set("view engine", "hbs");

{
// получение списка пользователей
    app.get("/", function (req, res) {
        pool.query("SELECT * FROM user", function (err, data) {
            if (err) return console.log(err);
            res.render("index.hbs", {
                users: data
            });
        });
    });
// возвращаем форму для добавления данных
    app.get("/create_user", function (req, res) {
        res.render("create_user.hbs");
    });
// получаем отправленные данные и добавляем их в БД
    app.post("/create_user", urlencodedParser, function (req, res) {

        if (!req.body) return res.sendStatus(400);
        const email = req.body.email;
        const login = req.body.login;
        const password = req.body.password;
        pool.query("INSERT INTO users (email, login, password) VALUES (?,?,?)", [email,login,password], function (err, data) {
            if (err) return console.log(err);
            res.redirect("/");
        });
    });

// получем id редактируемого пользователя, получаем его из бд и отправлям с формой редактирования
    app.get("/edit_user/:id", function (req, res) {
        const id = req.params.id;
        pool.query("SELECT * FROM user WHERE id=?", [id], function (err, data) {
            if (err) return console.log(err);
            res.render("edit_user.hbs", {
                user: data[0]
            });
        });
    });
// получаем отредактированные данные и отправляем их в БД
    app.post("/edit_user", urlencodedParser, function (req, res) {

        if (!req.body) return res.sendStatus(400);
        const password = req.body.password;
        const login = req.body.login;
        const avatar = req.body.avatar;
        const id = req.body.id;

        pool.query("UPDATE users SET password=?, login=?, avatar=? WHERE id=?", [password, login, avatar, id], function (err, data) {
            if (err) return console.log(err);
            res.redirect("/");
        });
    });

// получаем id удаляемого пользователя и удаляем его из бд
    app.post("/delete_user/:id", function (req, res) {

        const id = req.params.id;
        pool.query("DELETE FROM users WHERE id=?", [id], function (err, data) {
            if (err) return console.log(err);
            res.redirect("/");
        });
    });
} // user

app.listen(3000, function(){
    console.log("Сервер ожидает подключения...");
});