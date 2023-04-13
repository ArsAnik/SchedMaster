const Router = require('express');
const router = new Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.main_page);

module.exports = router;
