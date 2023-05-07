const Router = require('express');
const router = new Router();
const tasks_page_router = require('./tasksPageRouter');
const task_router = require('./taskRouter');

router.use('/tasksPage', tasks_page_router);
router.use('/task', task_router);

module.exports = router;
