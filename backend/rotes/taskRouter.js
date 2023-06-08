const Router = require('express');
const router = new Router();
const taskController = require('../controllers/taskController');

router.get('/:id', taskController.task_get);
router.post('/edit/:id', taskController.task_edit);
router.post('/create', taskController.task_create);
router.delete('/:id', taskController.task_delete);

module.exports = router;