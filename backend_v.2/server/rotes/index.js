const Router = require('express');
const router = new Router();
const admin_panel_router = require('./adminPanelRouter');
const main_router = require('./mainRouter');

router.use('/admin_panel', admin_panel_router);
router.use('/main', main_router);

module.exports = router;
