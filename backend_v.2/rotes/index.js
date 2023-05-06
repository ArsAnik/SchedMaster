const Router = require('express');
const router = new Router();
const admin_panel_router = require('./adminPanelRouter');
const main_router = require('./mainRouter');
const tasks_page_router = require('./tasksPageRouter');
const task_router = require('./taskRouter');

router.use('/admin_panel', admin_panel_router);
router.use('/main', main_router);
router.use('/tasksPage', tasks_page_router);
router.use('/task', task_router);

module.exports = router;
