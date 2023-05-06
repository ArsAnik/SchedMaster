const Router = require('express');
const router = new Router();
const tasksPageController = require('../controllers/tasksPageController');

router.get('/:id', tasksPageController.tasks_page);

module.exports = router;
