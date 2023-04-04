const Router = require('express');
const router = new Router();
const admin_panel_router = require('./adminPanelRouter');

router.use('/admin_panel', admin_panel_router);
router.use('/')

module.exports = router;
