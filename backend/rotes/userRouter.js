const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');

router.get('/:id', userController.user_get);
router.post('/edit/:id', userController.user_edit);
router.post('/create', userController.user_create);

module.exports = router;