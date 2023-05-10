const Router = require('express');
const router = new Router();
const tasksPageController = require('../controllers/tasksPageController');

router.get('/', tasksPageController.tasks_page);

module.exports = router;
