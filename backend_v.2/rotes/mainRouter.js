const Router = require('express');
const router = new Router();
const mainController = require('../controllers/mainController');

router.get('/', (res, req)=>{
    res.json({
        message: "Hello!"
    })
});

module.exports = router;
