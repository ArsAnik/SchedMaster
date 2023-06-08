# SchedMaster
Timetable for students

backend - файлы backend части

front_pages - файлы с вёрсткой страниц

frontend - файлы frontend части

запросы на сервере бекэнда:

1) в ссылках поставлены пробелы для читабельности. Так то их там не должно быть
2) все задачи возвращают поле message, в котором будет храниться сообщение об ошибке, если что-то пошо не так
3) задачи возвращают поле err с результатом ошибки, если что-то пошло не так

__taskPage__

get     '/api/tasksPage /:id'           
запрос задач пользователя. Возвращает own_tasks со всеми личными задачами пользователя

__task__

get     'api/task /:id'              
открыть или редактировать задачу. Возвращает data со всеми полями задачи

post    'api/task/create'               
создать задачу. Нужно отправить {name, description, begin_date, end_date, all_day, FK_user}.

post    'api/task/edit /:id'            
изменить задачу. Нужно отправить {name, description, begin_date, end_date, all_day}

delete  'api/task /:id'                 
удалить задачу

__user__

get     'api/user /:id'                 
получение данных пользователя. Возвращает data с полями пользователя {login, group_name}

post    'api/user/create'               
создаёт пользователя. Нужно отправить {email, password, login}. В случае, если пользователь с данным email зарегистрирован, возвращает непустой json с message с ошибкой

post    'api/user/edit /:id'            
редактирует пользователя. Нужно отправить {login,  group_name}.

__register__

post    'api/register/enter'
вход в систему. Нужно отправить {email, password}. Возвращает id пользователя в случае удачи и message с описанием ошибки в случае незарегистрированного email или неправильного пароля

post    'api/register/check'
проверяет существование пользователя по email. Нужно оправить {email}. Возвращает id пользователя, если есть.

post    'api/register/resetPassword /:id'
изменяет пароль пользователя. Нужно отправить {password}. Ничего не возвращает.


__ссылки фронтенда:__

http://localhost:3000/tasksPage - страница задач
http://localhost:3000/task/:id - страница задачи
http://localhost:3000/registration - страници регистрации
