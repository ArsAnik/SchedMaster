const Router = require('express');
const router = new Router();
const taskController = require('../controllers/taskController');

router.get('/:id', taskController.task_page);

module.exports = router;