const mysql = require("mysql2");
const express = require("express");
const Handlebars = require("hbs")

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



{
// получение списка пользователей
    app.get("/", function (req, res) {
        pool.query("SELECT * FROM user", function (err, data1) {
            if (err) return console.log(err);
            pool.query("SELECT * FROM `own tasks`", function (err, data2) {
                if (err) return console.log(err);
                pool.query("SELECT * FROM alerts", function (err, data3) {
                    if (err) return console.log(err);
                    pool.query("SELECT * FROM schedule", function (err, data4) {
                        if (err) return console.log(err);
                        pool.query("SELECT * FROM `general tasks`", function (err, data5) {
                            if (err) return console.log(err);
                            res.render("index.hbs", {
                                users1: data1,
                                users2: data2,
                                users3: data3,
                                users4: data4,
                                users5: data5
                            })
                        });
                    });
                });
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
        pool.query("INSERT INTO user (email, login, password) VALUES (?,?,?)", [email,login,password], function (err, data) {
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

        pool.query("UPDATE user SET password=?, login=?, avatar=? WHERE id=?", [password, login, avatar, id], function (err, data) {
            if (err) return console.log(err);
            res.redirect("/");
        });
    });

// получаем id удаляемого пользователя и удаляем его из бд
    app.post("/delete_user/:id", function (req, res) {

        const id = req.params.id;
        pool.query("DELETE FROM user WHERE id=?", [id], function (err, data) {
            if (err) return console.log(err);
            res.redirect("/");
        });
    });
} // список базы данных

/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////Регистрация и авторизация//////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

{
//форма главной страницы
    app.get("/main_page", function (req, res) {
        res.render("main page.hbs");
    });

//форма входа
    app.get("/login_page", function (req, res) {
        res.render("login page.hbs");
    });

//считываем и обрабатываем данные входа
    app.post("/login_page", urlencodedParser, function (req, res) {

        if (!req.body) return res.sendStatus(400);
        const email = req.body.email;
        const password = req.body.password;
        pool.query("SELECT password, id FROM user WHERE email=?", [email], function (err, data) {
            if (err) return console.log(err);
            if (data[0]) {
                if (data[0].password === password) {
                    res.redirect(`/schedule_page/id=${data[0].id}`);
                } else {
                    res.render("login page.hbs", {
                        email: email,
                        message: "Wrong password!"
                    });
                }
            } else res.render("login page.hbs", {
                email: email,
                message: "User does not exist!"
            });
        });
    });


//страница восстановления пароля, на которой нужно ввести почту
    app.get("/reset_email_page", function (req, res) {
        res.render("reset password email page.hbs");
    });

//считываем и обрабатываем данные для страницы восстановления пароля по почте
    app.post("/reset_email_page", urlencodedParser, function (req, res) {
        if (!req.body) return res.sendStatus(400);
        const email = req.body.email;
        pool.query("SELECT id FROM user WHERE email=?", [email], function (err, data) {
            if (err) return console.log(err);
            if (data[0]) {
                const id = Number(data[0].id);
                res.redirect(`/reset_password_page/${id}`);
            } else res.render("reset password email page.hbs", {
                message: "This email is not linked to any account!",
                email: email
            });
        });
    });

//страница восстановления пароля с новыми паролями
    app.get("/reset_password_page/:id", function (req, res) {
        res.render("reset password.hbs", {
            id: req.params.id
        });
    });

//считываем и обрабатываем данные для страницы восстановления пароля с новыми паролями
    app.post("/reset_password_page/:id", urlencodedParser, function (req, res) {
        if (!req.body) return res.sendStatus(400);
        const password1 = req.body.password1;
        const password2 = req.body.password2;
        const id = req.params.id;
        if (password1 === password2) {
            pool.query("UPDATE `user` SET `password`=? WHERE `user`.`id`=?", [password1, id], function (err, data) {
                if (err) return console.log(err);
                res.redirect(`/schedule_page/id=${id}`);
            });
        } else {
            res.render("reset password.hbs", {
                password: password1,
                message: "Пароли не совпадают!"
            })
        }
    });

// страница регистрации
    app.get("/registration_page", function (req, res) {
        res.render("registration.hbs");
    });

// обработка страницы регистрации
    app.post("/registration_page", urlencodedParser, function (req, res) {
        if (!req.body) return res.sendStatus(400);
        const email = req.body.email;
        const login = req.body.login;
        const password1 = req.body.password1;
        const password2 = req.body.password2;
        pool.query("SELECT id FROM user WHERE email=?", [email], function (err, data) {
            if (err) return console.log(err);
            if (data[0]) {
                res.render("registration.hbs", {
                    message: "This email is already registered!",
                    email: email,
                    login: login
                });
            } else {
                if (password1 === password2) {
                    res.render("link input registration.hbs", {
                        email: email,
                        login: login,
                        password: password1
                    })
                } else res.render("registration.hbs", {
                    message: "Пароли не совпадают!",
                    email: email,
                    login: login,
                    password: password1
                });
            }
        });
    });

    function magic_function(pars_link) {
        return true;
    }

//страница ввода ссылки на рассписание
    app.post("/registration_link_page", urlencodedParser, function (req, res) {
        if (!req.body) return res.sendStatus(400);
        const pars_link = req.body.pars_link;
        const email = req.body.email;
        const password = req.body.password;
        const login = req.body.login;
        if (magic_function(pars_link)) {
            pool.query("INSERT INTO `user` (`email`, `password`, `login`) VALUES (?,?,?);", [email, password, login], function (err, data) {
                if (err) return console.log(err);
                pool.query("SELECT id FROM user WHERE email=?;", [email], function (err, data) {
                    if (err) return console.log(err);
                    res.redirect(`/schedule_page/id=${data[0].id}`);
                });
            });
        } else {
            res.render("link input registration.hbs", {
                email: email,
                login: login,
                password: password,
                pars_link: pars_link
            });
        }
    });
} // регистрация и авторизация

/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////Личный кабинет, расписания, задачи и календари/////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

{
    //функция для вывода элементов массива по индексу на странице
    Handlebars.registerHelper('get', function(mas, week) {
        return mas[week];
    });

    //страница рассписания
    app.get("/schedule_page/id=?:id", function (req, res) {
        const id = req.params.id;
        let week = parseInt((Date.now() - d.getTime())/weekTime);
        let d1 = new Date(d.getTime() +   week*weekTime);
        let d2 = new Date(d1.getTime() + weekTime -1);
        pool.query("SELECT * FROM `own tasks` WHERE `own tasks`.`FK_user`=? AND `own tasks`.`begin_date` BETWEEN ? AND ? ORDER BY `begin_date` ASC, `end_date` ASC;", [id, d1, d2], function (err, own_data) {
            if (err) return console.log(err);
            pool.query("SELECT * FROM `general tasks` WHERE `general tasks`.`FK_schedule` = (SELECT FK_schedule FROM user WHERE user.id=?) AND `general tasks`.`date` BETWEEN ? AND ? ORDER BY `date`, `time_number`;", [id, d1, d2], function (err, general_data) {
                if (err) return console.log(err);
                res.render("schedule page.hbs", {
                    id: id,
                    own_tasks: own_data,
                    general_tasks: general_data,
                    week: week
                });
            });
        });
    });

    //перелистываем недели
    app.post("/schedule_page/id=?:id/act=?:act", urlencodedParser, function (req, res) {
            let week = parseInt(req.body.week);
            let id = parseInt(req.params.id);
            let act = req.params.act;
            if (act === "1"){
                week += 1;
            }
            else {
                week -= 1;
            }
            let d1 = new Date(d.getTime() +   week * weekTime);
            let d2 = new Date(d1.getTime() + weekTime -1);
            pool.query("SELECT * FROM `own tasks` WHERE `own tasks`.`FK_user`=? AND `own tasks`.`begin_date` BETWEEN ? AND ? ORDER BY `begin_date` ASC, `end_date` ASC;", [id, d1, d2], function (err, own_data) {
                if (err) return console.log(err);
                pool.query("SELECT * FROM `general tasks` WHERE `general tasks`.`FK_schedule` = (SELECT FK_schedule FROM user WHERE user.id=?) AND `general tasks`.`date` BETWEEN ? AND ? ORDER BY `date`, `time_number`;", [id, d1, d2], function (err, general_data) {
                    if (err) return console.log(err);
                    res.render("schedule page.hbs", {
                        id: id,
                        own_tasks: own_data,
                        general_tasks: general_data,
                        week: week
                    });
                });
            });
        });

    //вывод страницы личного кабинета
    app.get("/personal_page/id=?:id", function (req, res) {
        const id = parseInt(req.params.id);
        pool.query("SELECT `login`, `avatar`, (SELECT `schedule`.`name` FROM schedule WHERE `schedule`.`id` = `user`.`FK_schedule`) AS group_name FROM `user` WHERE id =?;", [id], function (err, data) {
            if (err) return console.log(err);
            res.render("personal area.hbs", {
                id: id,
                login: data[0].login,
                avatar: data[0].avatar,
                group_name: data[0].group_name
            });
        });
    });

    //ввывод страницы изменения информации о пользователе в личном кабинете
    app.post("/personal_page/id=?:id", urlencodedParser, function (req, res) {
        res.render("change personal area.hbs", {
            id: req.params.id,
            avatar: req.body.avatar,
            login: req.body.login,
            group_name: req.body.group_name
        });
    });

    //меняем данные пользователя
    app.post("/edit_personal_page/id=?:id", urlencodedParser, function (req, res) {
        const id = req.params.id;
        const avatar = req.body.avatar;
        let login = req.body.login;
        const group_name = req.body.group_name;
        pool.query("SELECT `id` FROM `schedule` WHERE `schedule`.name =?", [group_name], function (err, data) {
            if (err) return console.log(err);
            if(data[0]){
                pool.query("UPDATE `user` SET `login` = ?, `avatar` = ?, `FK_schedule` = ? WHERE `user`.`id` =  ?;", [login, avatar, data[0].id, id], function (err, data) {
                    if (err) return console.log(err);
                    res.redirect(`/personal_page/id=${id}`);
                });
            }
            else {
                res.render("change personal area.hbs", {
                    id: id,
                    avatar: avatar,
                    login: login,
                    group_name: group_name,
                    message: "Invalid group name!"
                });
            }
        });

    });

    //страница задач
    app.get("/tasks_page/id=?:id", function (req, res) {
        const id = req.params.id;
        let d1 = new Date(Date.now());
        d1.setHours(0, 0, 0, 0);
        let d2 = new Date(d1.getTime() + dayTime -1);
        pool.query("SELECT * FROM `own tasks` WHERE `own tasks`.`FK_user`=? AND `own tasks`.`begin_date` BETWEEN ? AND ? ORDER BY `begin_date` ASC, `end_date` ASC;", [id, d1, d2], function (err, own_data) {
            if (err) return console.log(err);
            pool.query("SELECT * FROM `general tasks` WHERE `general tasks`.`FK_schedule` = (SELECT FK_schedule FROM user WHERE user.id=?) AND `general tasks`.`date` BETWEEN ? AND ? ORDER BY `date`, `time_number`;", [id, d1, d2], function (err, general_data) {
                if (err) return console.log(err);
                res.render("tasks page.hbs", {
                    id: id,
                    own_tasks: own_data,
                    general_tasks: general_data,
                    day: 0
                });
            });
        });
    });

    //перелистывание страницы задач
    app.post("/tasks_page/id=?:id/act=?:act", urlencodedParser, function (req, res) {
        let day = parseInt(req.body.day);
        let id = parseInt(req.params.id);
        let act = req.params.act;
        if (act === "1"){
            day += 1;
        }
        else {
            day -= 1;
        }
        let d1 = new Date(Date.now() + day * dayTime);
        d1.setHours(0, 0, 0, 0);
        let d2 = new Date(d1.getTime() + dayTime -1);
        pool.query("SELECT * FROM `own tasks` WHERE `own tasks`.`FK_user`=? AND `own tasks`.`begin_date` BETWEEN ? AND ? ORDER BY `begin_date` ASC, `end_date` ASC;", [id, d1, d2], function (err, own_data) {
            if (err) return console.log(err);
            pool.query("SELECT * FROM `general tasks` WHERE `general tasks`.`FK_schedule` = (SELECT FK_schedule FROM user WHERE user.id=?) AND `general tasks`.`date` BETWEEN ? AND ? ORDER BY `date`, `time_number`;", [id, d1, d2], function (err, general_data) {
                if (err) return console.log(err);
                res.render("tasks page.hbs", {
                    id: id,
                    own_tasks: own_data,
                    general_tasks: general_data,
                    day: day
                });
            });
        });
    });

    //страница календаря
    app.get("/calendar_page/id=?:id", function (req, res) {
        const id = req.params.id;
        let d1 = new Date(Date.now());
        d1.setMonth(d1.getMonth(), 1)
        d1.setHours(0, 0, 0, 0);
        let d2 = new Date(d1.getTime());
        d2.setMonth(d2.getMonth() + 1, 1)
        pool.query("SELECT * FROM `own tasks` WHERE `own tasks`.`FK_user`=? AND `own tasks`.`begin_date` BETWEEN ? AND ? ORDER BY `begin_date` ASC, `end_date` ASC;", [id, d1, d2], function (err, own_data) {
            if (err) return console.log(err);
            pool.query("SELECT * FROM `general tasks` WHERE `general tasks`.`FK_schedule` = (SELECT FK_schedule FROM user WHERE user.id=?) AND `general tasks`.`date` BETWEEN ? AND ? ORDER BY `date`, `time_number`;", [id, d1, d2], function (err, general_data) {
                if (err) return console.log(err);
                res.render("calendar page.hbs", {
                    id: id,
                    own_tasks: own_data,
                    general_tasks: general_data,
                    month: 0
                });
            });
        });
    });

    //перелистывание страницы календаря
    app.post("/calendar_page/id=?:id/act=?:act", urlencodedParser, function (req, res) {
        let month = parseInt(req.body.month);
        let id = parseInt(req.params.id);
        let act = req.params.act;
        if (act === "1"){
            month += 1;
        }
        else {
            month -= 1;
        }
        let d1 = new Date(Date.now());
        d1.setMonth(d1.getMonth() + month, 1)
        d1.setHours(0, 0, 0, 0);
        let d2 = new Date(d1.getTime());
        d2.setMonth(d2.getMonth() + 1, 1)
        pool.query("SELECT * FROM `own tasks` WHERE `own tasks`.`FK_user`=? AND `own tasks`.`begin_date` BETWEEN ? AND ? ORDER BY `begin_date` ASC, `end_date` ASC;", [id, d1, d2], function (err, own_data) {
            if (err) return console.log(err);
            pool.query("SELECT * FROM `general tasks` WHERE `general tasks`.`FK_schedule` = (SELECT FK_schedule FROM user WHERE user.id=?) AND `general tasks`.`date` BETWEEN ? AND ? ORDER BY `date`, `time_number`;", [id, d1, d2], function (err, general_data) {
                if (err) return console.log(err);
                res.render("calendar page.hbs", {
                    id: id,
                    own_tasks: own_data,
                    general_tasks: general_data,
                    month: month
                });
            });
        });
    });

    //страница выбранной задачи
    app.get("/task/id=?:id", function (req, res) {
        const id = req.params.id;
        pool.query("SELECT * FROM `own tasks` WHERE id=?", [id], function (err, data) {
            if (err) return console.log(err);
            res.render("task.hbs", {
                task_id: id,
                task: data[0]
            });
        });
    });

    //страница редактирования задачи
    app.get("/edit_task/id=?:id", function (req, res) {
        const id = req.params.id;
        pool.query("SELECT * FROM `own tasks` WHERE id=?", [id], function (err, data) {
            if (err) return console.log(err);
            res.render("edit task.hbs", {
                task_id: id,
                task: data[0]
            });
        });
    });
// получаем отредактированные данные и отправляем их в БД
    app.post("/edit_task/id=?:id", urlencodedParser, function (req, res) {
        if (!req.body) return res.sendStatus(400);
        const id = req.params.id;
        const name = req.body.name;
        const description = req.body.description;
        const beg = new Date(req.body.beg);
        const end = new Date(req.body.end);
        const all = req.body.all;
        const FK_user = req.body.FK_user;
        pool.query("UPDATE `own tasks` SET `name` =?, `description` =?, `begin_date` =?, `end_date` =?, `all_day` =? WHERE `own tasks`.`id` =?;", [name, description, beg, end, all, id], function (err, data) {
            if (err) return console.log(err);
            res.redirect(`/schedule_page/id=${FK_user}`);
        });
    });

} // само приложение и личный кабинет

app.listen(3000, function(){
    console.log("Сервер ожидает подключения...");
});