const Router = require('express');
const router = new Router();
const taskController = require('../controllers/taskController');

router.get('/:id', taskController.task_get);
router.post('/', taskController.task_edit);
router.delete('/', taskController.task_delete);

module.exports = router;