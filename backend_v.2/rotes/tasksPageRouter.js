const Router = require('express');
const router = new Router();
const taskPageController = require('../controllers/tasksPageController');

router.get('/:id', taskPageController.tasks_page);

module.exports = router;
