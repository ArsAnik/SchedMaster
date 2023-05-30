const Router = require('express');
const router = new Router();
const registerController = require('../controllers/registerController');

router.post('/enter', registerController.register_enter);
router.post('/check', registerController.register_check);
router.post('/resetPassword/:id', registerController.register_reset_password);

module.exports = router;