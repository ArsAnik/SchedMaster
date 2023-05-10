const Router = require('express');
const router = new Router();
const taskController = require('../controllers/taskController');

router.get('/', taskController.task_get);
router.post('/edit', taskController.task_edit);
router.post('/create', taskController.task_create);
router.delete('/', taskController.task_delete);

module.exports = router;